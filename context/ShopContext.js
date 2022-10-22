import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import {
  checkoutAddress,
  checkoutCustomerAssociate,
  checkoutDiscount,
  checkoutEmailAssociate,
  createCheckout,
  createCheckoutCustomAttribute,
  updateCheckout,
  updateCheckoutCustomAttribute,
} from "../lib/shopifyCheckout";
import { getCustomer } from "../lib/shopifyCustomer";
import { delay } from "../utils/helper";

const CartContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [user, setUser] = useState(null);

  const session = useSession();

  useEffect(() => {
    if (Cookies.get("checkout_id")) {
      const cartObject = JSON.parse(Cookies.get("checkout_id"));

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  // TODO add check token expiry date and add user and infos to checkout and attributes if already an attribute to the checkout + email if already
  async function addToCart(newItem) {
    setCartOpen(true);
    setIsCartLoading(true);

    if (cart.length === 0) {
      setCart([newItem]);

      let newCart = [newItem];
      let checkout = await createCheckout(newCart);
      if (session.status === "authenticated") {
        // await delay(500);
        checkout = await checkoutCustomerAssociate(
          checkout.id,
          session.data.user.token.accessToken
        );

        let defaultAddress = user.defaultAddress;
        delete defaultAddress.id;
        defaultAddress = JSON.stringify(defaultAddress);
        defaultAddress = defaultAddress.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
        checkout = await checkoutAddress(checkout.id, defaultAddress);
        checkout = await checkoutEmailAssociate(checkout.id, user.email);
        checkout = await checkoutDiscount(checkout.id, newItem.handle);
      }

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      Cookies.set("checkout_id", JSON.stringify([newCart, checkout]), {
        expires: 7,
      });
    } else {
      let newCart = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity += newItem.variantQuantity;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      let newCheckout = await createCheckout(newCart);

      if (session.status === "authenticated") {
        newCheckout = await checkoutCustomerAssociate(
          newCheckout.id,
          session.data.user.token.accessToken
        );

        let defaultAddress = user.defaultAddress;
        delete defaultAddress.id;
        defaultAddress = JSON.stringify(defaultAddress);
        defaultAddress = defaultAddress.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
        newCheckout = await checkoutAddress(newCheckout.id, defaultAddress);
        newCheckout = await checkoutEmailAssociate(newCheckout.id, user.email);

        for (let i = 0; i < newCart.length; i++) {
          newCheckout = await checkoutDiscount(
            newCheckout.id,
            newCart[i].handle
          );
        }
      }

      setCheckoutId(newCheckout.id);
      setCheckoutUrl(newCheckout.webUrl);
      Cookies.set("checkout_id", JSON.stringify([newCart, newCheckout]), {
        expires: 7,
      });
    }
    setIsCartLoading(false);
  }

  // Not used anymore we go directly to checkout
  // async function addToCartCarte(newItem, customAttribute, email) {
  //   setIsCartLoading(true);
  //   setCartOpen(true);

  //   if (cart.length === 0) {
  //     setCart([newItem]);

  //     let newCart = [newItem];
  //     const checkout = await createCheckoutCustomAttribute(
  //       newCart,
  //       customAttribute,
  //       email
  //     );

  //     setCheckoutId(checkout.id);
  //     setCheckoutUrl(checkout.webUrl);

  //     localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
  //   } else {
  //     let newCart = [];
  //     let added = false;

  //     cart.map((item) => {
  //       if (item.id === newItem.id) {
  //         item.variantQuantity++;
  //         newCart = [...cart];
  //         added = true;
  //       }
  //     });

  //     if (!added) {
  //       newCart = [...cart, newItem];
  //     }

  //     setCart(newCart);
  //     const newCheckout = await createCheckoutCustomAttribute(
  //       newCart,
  //       customAttribute
  //     );
  //     setCheckoutId(newCheckout.id);
  //     setCheckoutUrl(newCheckout.webUrl);
  //     localStorage.setItem(
  //       "checkout_id",
  //       JSON.stringify([newCart, newCheckout])
  //     );
  //   }
  //   setIsCartLoading(false);
  // }

  // TODO code reduc remove
  async function removeCartItem(itemToRemove) {
    setIsCartLoading(true);
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    let newCheckout = await createCheckout(updatedCart);

    if (session.status === "authenticated") {
      newCheckout = await checkoutCustomerAssociate(
        newCheckout.id,
        session.data.user.token.accessToken
      );

      let defaultAddress = user.defaultAddress;
      delete defaultAddress.id;
      defaultAddress = JSON.stringify(defaultAddress);
      defaultAddress = defaultAddress.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
      newCheckout = await checkoutAddress(newCheckout.id, defaultAddress);
      newCheckout = await checkoutEmailAssociate(newCheckout.id, user.email);

      for (let i = 0; i < updatedCart.length; i++) {
        newCheckout = await checkoutDiscount(
          newCheckout.id,
          updatedCart[i].handle
        );
      }
    }

    setCheckoutId(newCheckout.id);
    setCheckoutUrl(newCheckout.webUrl);

    Cookies.set("checkout_id", JSON.stringify([updatedCart, newCheckout]), {
      expires: 7,
    });

    if (cart.length === 1) {
      setCartOpen(false);
    }
    setIsCartLoading(false);
  }

  async function deleteCheckout() {
    Cookies.remove("checkout_id");
    setCart([]);
    setCartOpen(false);
  }

  async function fixAuthCheckout() {
    if (Cookies.get("checkout_id")) {
      const cartObject = JSON.parse(Cookies.get("checkout_id"));
      if (
        !cartObject[1].email &&
        cartObject[1].lineItems.length !== 0 &&
        session.status === "authenticated"
      ) {
        setIsCartLoading(true);
        let userr;
        if (!user) {
          userr = await getCustomer(session.data.user.token.accessToken);
        } else {
          userr = user;
        }

        let newCheckout = await createCheckout(cart);

        newCheckout = await checkoutCustomerAssociate(
          newCheckout.id,
          session.data.user.token.accessToken
        );

        let defaultAddress = userr.defaultAddress;
        delete defaultAddress.id;
        defaultAddress = JSON.stringify(defaultAddress);
        defaultAddress = defaultAddress.replace(/"([^"]+)":/g, "$1:"); // remove quotes for keys
        newCheckout = await checkoutAddress(newCheckout.id, defaultAddress);
        newCheckout = await checkoutEmailAssociate(newCheckout.id, userr.email);

        for (let i = 0; i < cart.length; i++) {
          newCheckout = await checkoutDiscount(newCheckout.id, cart[i].handle);
        }

        setCheckoutId(newCheckout.id);
        setCheckoutUrl(newCheckout.webUrl);

        Cookies.set("checkout_id", JSON.stringify([cart, newCheckout]), {
          expires: 7,
        });

        if (cart.length === 1) {
          setCartOpen(false);
        }
        setIsCartLoading(false);
      } else if (
        cartObject[1].email &&
        cartObject[1].lineItems.length !== 0 &&
        session.status === "unauthenticated"
      ) {
        setIsCartLoading(true);
        let newCheckout = await createCheckout(cart);

        setCheckoutId(newCheckout.id);
        setCheckoutUrl(newCheckout.webUrl);

        Cookies.set("checkout_id", JSON.stringify([cart, newCheckout]), {
          expires: 7,
        });

        if (cart.length === 1) {
          setCartOpen(false);
        }
        setIsCartLoading(false);
      }
    }
  }

  async function fetchUser(clientAccessToken) {
    const userr = await getCustomer(clientAccessToken);
    if (userr.length === 0) {
      signOut();
      return;
    }

    const date = new Date(userr?.expirationDate.value);

    const dateToken = new Date(session.data.user.token.expiresAt);

    if (
      !userr ||
      userr?.expirationDate?.value === null ||
      date < new Date() ||
      !userr?.carte ||
      dateToken < new Date() ||
      userr?.carte?.value === "expired"
    ) {
      signOut();
      return;
    }
    setUser(userr);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        // addToCartCarte,
        checkoutUrl,
        removeCartItem,
        isCartLoading,
        setIsCartLoading,
        user,
        fetchUser,
        deleteCheckout,
        fixAuthCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
