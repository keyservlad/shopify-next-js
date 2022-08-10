// import { createContext, useState, useEffect } from "react";
// import {
//   addCartLine,
//   createCart,
//   increaseQuantCart,
//   removeCartLine,
// } from "../lib/shopifyCart";

// const CartContext = createContext();

// export default function ShopProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartId, setCartId] = useState("");
//   const [checkoutUrl, setCheckoutUrl] = useState("");
//   const [lines, setLines] = useState({});

//   useEffect(() => {
//     if (localStorage.cart_id) {
//       const cartObject = JSON.parse(localStorage.cart_id);

//       if (!cartObject[1].lines) {
//         localStorage.removeItem("cart_id");
//         return;
//       }

//       if (cartObject[0].id) {
//         setCart([cartObject[0]]);
//         setLines(...[cartObject[1].lines.edges]);
//       } else if (cartObject[0].length > 0) {
//         setCart(...[cartObject[0]]);
//         setLines(...[cartObject[1].lines.edges]);
//       }

//       setCartId(cartObject[1].id);
//       setCheckoutUrl(cartObject[1].checkoutUrl);
//     }
//   }, []);

//   async function addToCart(newItem) {
//     setCartOpen(true);
//     if (cart.length === 0) {
//       setCart([newItem]);

//       const cartResp = await createCart(newItem.id, newItem.variantQuantity);
//       setCartId(cartResp.id);
//       setCheckoutUrl(cartResp.checkoutUrl);
//       setLines(cartResp.lines.edges);

//       localStorage.setItem("cart_id", JSON.stringify([newItem, cartResp]));
//     } else {
//       let isIncreased = false;
//       cart.map((item) => {
//         if (item.id === newItem.id) {
//           isIncreased = true;
//         }
//       });

//       isIncreased ? increaseCart(newItem) : addLineCart(newItem);
//     }
//   }

//   async function removeCartItem(itemToRemoveId) {
//     const updatedCart = cart.filter((item) => item.id !== itemToRemoveId);

//     setCart(updatedCart);
//     if (cart.length === 1) {
//       setCartOpen(false);
//     }

//     let lineToRemove;
//     lines.map((item) => {
//       if (item.node.merchandise.id === itemToRemoveId) {
//         lineToRemove = item.node.id;
//         return;
//       }
//     });

//     const newCheckout = await removeCartLine(lineToRemove, cartId);

//     localStorage.setItem("cart_id", JSON.stringify([updatedCart, newCheckout]));

//     setLines(newCheckout.lines.edges);
//   }

//   async function increaseCart(newItem) {
//     let newCart = [...cart];
//     cart.map((item) => {
//       if (item.id === newItem.id) {
//         item.variantQuantity++;
//         newCart = [...cart];
//       }
//     });

//     setCart(newCart);
//     let newLines = [...lines];

//     lines.map((item) => {
//       if (item.node.merchandise.id === newItem.id) {
//         item.node.quantity++;
//         newLines = [...lines];
//       }
//     });

//     const newCheckout = await increaseQuantCart(cartId, newLines);

//     localStorage.setItem("cart_id", JSON.stringify([newCart, newCheckout]));

//     setLines(newCheckout.lines.edges);
//   }

//   async function addLineCart(newItem) {
//     let newCart = [...cart, newItem];
//     setCart(newCart);

//     const newCheckout = await addCartLine(newItem.id, 1, cartId);

//     localStorage.setItem("cart_id", JSON.stringify([newCart, newCheckout]));

//     setLines(newCheckout.lines.edges);
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         cartOpen,
//         setCartOpen,
//         addToCart,
//         checkoutUrl,
//         removeCartItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// const ShopConsumer = CartContext.Consumer;

// export { ShopConsumer, CartContext };
