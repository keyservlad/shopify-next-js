import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";
import ProductCardVinotheque from "./ProductCardVinotheque";
import LogoCoeur from "../../../../public/images/mini-logos/coeur.png";
import Image from "next/image";
import QuickView from "./QuickView";

const MesAvantages = ({ products }) => {
  console.log({ products });
  const { user } = useContext(CartContext);
  const [openQuickView, setOpenQuickView] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  return (
    <>
      <div className="lg:col-span-9 py-6 flex flex-col items-center px-4 sm:px-10">
        <h1 className="text-redWine text-center">Mes avantages fidélité</h1>
        <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto items-center bg-redWine text-white p-8 mt-6 text-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="basis-1/3">
            <p className="font-bold">Vous avez cumulé</p>
            <p className="font-bold text-3xl mt-2">
              {user.points.value} points
            </p>
          </div>
          <div className="basis-2/3">
            <p className="font-bold">
              Il vous manque quelques points pour le cadeau de vos rêves&nbsp;?
            </p>
            <Link href={"/notre-cave"} passHref>
              <a target="_blank">
                <button className="bg-white text-redWine font-bold py-2 px-4 rounded mt-6 hover:opacity-95">
                  Je fais un tour à la cave
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row text-center items-center justify-center space-x-6 mt-6 px-2">
          <div className="relative">
            <Image src={LogoCoeur} alt="logo coeur" width={80} height={80} />
          </div>
          <div className="">
            <p className="font-bold">Comment obtenir des points&nbsp;?</p>
            <p className="">10€ d&#39;achat = 1 point</p>
          </div>
        </div>
        <div className="w-full bg-[#FAF8F7] py-10 text-center mt-14 px-4 sm:px-10">
          <p className="text-lg">Le moment du plaisir exclusif</p>
          <h1 className="font-bold text-3xl">Notre vinothèque des membres</h1>
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 w-full">
            {products.map((product) => (
              <ProductCardVinotheque
                key={product.node.id}
                product={product}
                setOpenQuickView={setOpenQuickView}
                setCurrentProduct={setCurrentProduct}
              />
            ))}
          </div>
        </div>
      </div>
      <QuickView
        product={currentProduct}
        open={openQuickView}
        setOpen={setOpenQuickView}
      />
    </>
  );
};

export default MesAvantages;
