import { useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import {
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

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

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
      const checkout = await createCheckout(newCart);

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
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
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
    setIsCartLoading(false);
  }

  async function addToCartCarte(newItem, customAttribute, email) {
    setIsCartLoading(true);
    setCartOpen(true);

    if (cart.length === 0) {
      setCart([newItem]);

      let newCart = [newItem];
      const checkout = await createCheckoutCustomAttribute(
        newCart,
        customAttribute,
        email
      );

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
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
      const newCheckout = await createCheckoutCustomAttribute(
        newCart,
        customAttribute
      );
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
    setIsCartLoading(false);
  }

  async function removeCartItem(itemToRemove) {
    setIsCartLoading(true);
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await createCheckout(updatedCart);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (cart.length === 1) {
      setCartOpen(false);
    }
    setIsCartLoading(false);
  }

  async function fetchUser(clientAccessToken) {
    const user = await getCustomer(clientAccessToken);
    setUser(user);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        addToCartCarte,
        checkoutUrl,
        removeCartItem,
        isCartLoading,
        user,
        fetchUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
