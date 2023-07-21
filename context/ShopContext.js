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
    if (Cookies.get("checkout")) {
      const cartObject = JSON.parse(Cookies.get("checkout"));

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  // TODO handle the case where there is no idMembre
  async function addToCart(newItem) {
    setCartOpen(true);
    setIsCartLoading(true);

    newItem = {
      ...newItem,
      id:
        session.status === "authenticated" && newItem.idMembre
          ? newItem.idMembre
          : newItem.idMembre
          ? newItem.idPublic
          : newItem.id,
    };

    console.log(newItem);

    if (cart.length === 0) {
      setCart([newItem]);

      let newCart = [newItem];
      let checkout = await createCheckout(newCart);
      if (session.status === "authenticated") {
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
        // checkout = await checkoutDiscount(checkout.id, newItem.handle);
      }

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      Cookies.set("checkout", JSON.stringify([newCart, checkout]), {
        expires: 7,
      });
    } else {
      let newCart = [];
      let added = false;

      CheckAndUpdateIDVariantForMemberDiscount();

      // checking if the cart contains the same variant and adjust the quant if it does
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

        // change discount to the new variant system
        // for (let i = 0; i < newCart.length; i++) {
        //   newCheckout = await checkoutDiscount(
        //     newCheckout.id,
        //     newCart[i].handle
        //   );
        // }

        newCart.map(async (item) => {
          console.log("item", item);
        });
      }

      setCheckoutId(newCheckout.id);
      setCheckoutUrl(newCheckout.webUrl);
      Cookies.set("checkout", JSON.stringify([newCart, newCheckout]), {
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

  //     localStorage.setItem("checkout", JSON.stringify([newItem, checkout]));
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
  //       "checkout",
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

      // for (let i = 0; i < updatedCart.length; i++) {
      //   newCheckout = await checkoutDiscount(
      //     newCheckout.id,
      //     updatedCart[i].handle
      //   );
      // }
    }

    setCheckoutId(newCheckout.id);
    setCheckoutUrl(newCheckout.webUrl);

    Cookies.set("checkout", JSON.stringify([updatedCart, newCheckout]), {
      expires: 7,
    });

    if (cart.length === 1) {
      setCartOpen(false);
    }
    setIsCartLoading(false);
  }

  async function deleteCheckout() {
    Cookies.remove("checkout");
    setCart([]);
    setCartOpen(false);
  }

  async function fixAuthCheckout() {
    if (Cookies.get("checkout")) {
      const cartObject = JSON.parse(Cookies.get("checkout"));
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

        CheckAndUpdateIDVariantForMemberDiscount();

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

        // for (let i = 0; i < cart.length; i++) {
        //   newCheckout = await checkoutDiscount(newCheckout.id, cart[i].handle);
        // }

        setCheckoutId(newCheckout.id);
        setCheckoutUrl(newCheckout.webUrl);

        Cookies.set("checkout", JSON.stringify([cart, newCheckout]), {
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
        CheckAndUpdateIDVariantForMemberDiscount();
        let newCheckout = await createCheckout(cart);

        setCheckoutId(newCheckout.id);
        setCheckoutUrl(newCheckout.webUrl);

        Cookies.set("checkout", JSON.stringify([cart, newCheckout]), {
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

  function changeCartIDToMember() {
    const newCart = cart.map((item) => {
      const newItem = item;
      newItem.id = item.idMembre ? item.idMembre : item.id;
      return newItem;
    });
    setCart(newCart);
  }

  function changeCartIDToPublic() {
    const newCart = cart.map((item) => {
      const newItem = item;
      newItem.id = item.idPublic ? item.idPublic : item.id;
      return newItem;
    });
    setCart(newCart);
  }

  function CheckAndUpdateIDVariantForMemberDiscount() {
    // checking if the cart contains id Public in a member cart and reverse
    if (session.status === "authenticated") {
      cart.map((item) => {
        if (item.idMembre) {
          if (item.id === item.idPublic) {
            changeCartIDToMember();
          }
        }
      });
    } else {
      cart.map((item) => {
        if (item.idMembre) {
          if (item.id === item.idMembre) {
            changeCartIDToPublic();
          }
        }
      });
    }
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
        CheckAndUpdateIDVariantForMemberDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };

[
  [
    {
      id: "gid://shopify/ProductVariant/43516468297877",
      title: "Côte Rôtie, Saint Joseph & Crozes-Hermitage",
      handle: "cote-rotie-i-saint-joseph-crozes-hermitage",
      image:
        "https://cdn.shopify.com/s/files/1/0621/4637/9925/products/image-sl.png?v=1688378753",
      variantPrice: "125.0",
      variantQuantity: 3,
    },
    {
      id: "gid://shopify/ProductVariant/43516467970197",
      idPublic: "gid://shopify/ProductVariant/43516467970197",
      idMembre: null,
      title: "Château La Voulte Gasparets",
      handle: "corbieres-2",
      image:
        "https://cdn.shopify.com/s/files/1/0621/4637/9925/products/30.png?v=1688378726",
      variantPrice: "81.0",
      variantQuantity: 1,
    },
    {
      id: "gid://shopify/ProductVariant/43545969229973",
      idPublic: "gid://shopify/ProductVariant/43545969197205",
      idMembre: "gid://shopify/ProductVariant/43545969229973",
      title: "AOC Quincy Blanc",
      handle: "domaine-du-coudray",
      image:
        "https://cdn.shopify.com/s/files/1/0621/4637/9925/products/quincy-lbc.png?v=1688378014",
      variantQuantity: 1,
      variantPrice: "111.0",
      prix_membre: "99.0",
    },
  ],
  {
    id: "gid://shopify/Checkout/a064089df00e82882021867b90a6a69f?key=3e963db505ec7d400d007fb5722e7f01",
    webUrl:
      "https://emovin-next.myshopify.com/62146379925/checkouts/a064089df00e82882021867b90a6a69f?key=3e963db505ec7d400d007fb5722e7f01",
    email: "arnaud.guilhamat@emovin.fr",
    lineItems: {
      edges: [
        {
          node: {
            id: "gid://shopify/CheckoutLineItem/435164679701970?checkout=a064089df00e82882021867b90a6a69f",
            title: "Château La Voulte Gasparets",
            quantity: 1,
          },
        },
        {
          node: {
            id: "gid://shopify/CheckoutLineItem/435164682978770?checkout=a064089df00e82882021867b90a6a69f",
            title: "Côte Rôtie, Saint Joseph & Crozes-Hermitage",
            quantity: 3,
          },
        },
        {
          node: {
            id: "gid://shopify/CheckoutLineItem/435459692299730?checkout=a064089df00e82882021867b90a6a69f",
            title: "AOC Quincy Blanc",
            quantity: 1,
          },
        },
      ],
    },
  },
];
