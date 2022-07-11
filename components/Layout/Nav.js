import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import MiniCart from "../MiniCart";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b sm:sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="hidden sm:block relative cursor-pointer px-4">
            {/* <span className="text-lg pt-1 font-bold">Emovin</span> */}
            <Image
              src="/images/logo_emovin-05.svg"
              alt="logo Emovin"
              height={45}
              width={130}
              quality={100}
            />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="sm:hidden relative cursor-pointer px-4">
            {/* <span className="text-lg pt-1 font-bold">Emovin</span> */}
            <Image
              src="/images/logo_emovin-05.svg"
              alt="logo Emovin"
              height={35}
              width={100}
              quality={100}
            />
          </a>
        </Link>
        <button
          className="text-md font-bold cursor-pointer"
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
        >
          Panier ({cartQuantity})
        </button>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}
