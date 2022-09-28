import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import {
  checkoutCustomerAssociate,
  createCheckout,
  createCheckoutCustomAttribute,
  updateCheckout,
  updateCheckoutCustomAttribute,
} from "../lib/shopifyCheckout";
import { getCustomer } from "../lib/shopifyCustomer";

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
        checkout = await checkoutCustomerAssociate(
          checkout.id,
          session.data.user.token.accessToken
        );
      }

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      console.log(checkout);

      Cookies.set("checkout_id", JSON.stringify([newCart, checkout]), {
        expires: 7,
      });
    } else {
      let newCart = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await createCheckout(newCart);
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

  async function removeCartItem(itemToRemove) {
    setIsCartLoading(true);
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await createCheckout(updatedCart);
    setCheckoutId(newCheckout.id);
    setCheckoutUrl(newCheckout.webUrl);

    Cookies.set("checkout_id", JSON.stringify([newCart, newCheckout]), {
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

  async function fetchUser(clientAccessToken) {
    const userr = await getCustomer(clientAccessToken);
    console.log(userr);

    const date = new Date(userr?.expirationDate.value);

    const dateToken = new Date(session.data.user.token.expiresAt);

    // TODO implement this check in the login page too
    if (
      userr.expirationDate.value === null ||
      date < new Date() ||
      !userr.carte ||
      dateToken < new Date()
    ) {
      signOut();
      return;
    }
    setUser(userr);
    console.log(user);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
