import Link from "next/link";
import { createRef, useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../../../context/ShopContext";
import ProductCardVinotheque from "./ProductCardVinotheque";
import LogoCoeur from "../../../../public/images/mini-logos/coeur.png";
import Image from "next/image";
import QuickView from "./QuickView";
import { formatter } from "../../../../utils/helper";
import Contact from "../../../Contact/contact";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MesAvantages = ({ products }) => {
  const { user } = useContext(CartContext);
  const [openQuickView, setOpenQuickView] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const refVinotheque = createRef();

  const scrollCagnotteSection = () => {
    refVinotheque.current.scrollIntoView({
      behavior: "smooth",
    });
  };

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
              Correspondant à une «&nbsp;cagnotte&nbsp;» de{" "}
              <span className="text-3xl">
                {formatter.format(Number(user.points.value) * 0.15)}
              </span>
            </p>
            <button
              onClick={() => {
                setToggle(true);
                scrollCagnotteSection();
              }}
              className="bg-white text-redWine font-bold py-2 px-4 rounded mt-6 hover:opacity-95"
            >
              J&#39;utilise ma cagnotte
            </button>
          </div>
        </div>
        <div className="flex flex-row text-center items-center justify-center space-x-6 mt-6 px-2">
          <div className="relative">
            <Image src={LogoCoeur} alt="logo coeur" width={80} height={80} />
          </div>
          <div className="">
            <p className="font-bold">Comment obtenir des points&nbsp;?</p>
            <p className="">10€ d&#39;achat = 1 point = 0,15€</p>
          </div>
        </div>
        <div
          ref={refVinotheque}
          className="w-full bg-[#FAF8F7] py-10 text-center mt-14 px-4 sm:px-10"
        >
          <div className="flex flex-row mb-10 text-2xl sm:text-3xl font-caveat">
            <button
              className={classNames(
                !toggle
                  ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 font-bold"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "group border-t-4 px-3 py-2 grow cursor-pointer"
              )}
              onClick={() => setToggle(false)}
            >
              La Vinothèque
            </button>
            <button
              onClick={() => setToggle(true)}
              className={classNames(
                toggle
                  ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 font-bold"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "group border-t-4 px-3 py-2 grow cursor-pointer"
              )}
            >
              Ma Cagnotte
            </button>
          </div>

          {!toggle ? (
            <Vinotheque
              products={products}
              setCurrentProduct={setCurrentProduct}
              setOpenQuickView={setOpenQuickView}
            />
          ) : (
            <Cagnotte setIsContactFormOpen={setIsContactFormOpen} />
          )}
        </div>
      </div>
      <QuickView
        product={currentProduct}
        open={openQuickView}
        setOpen={setOpenQuickView}
      />
      <Contact
        open={isContactFormOpen}
        setOpen={setIsContactFormOpen}
        object={"Cagnotte Emovin"}
      />
    </>
  );
};

export default MesAvantages;

const Vinotheque = ({ products, setCurrentProduct, setOpenQuickView }) => {
  return (
    <>
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
    </>
  );
};

const Cagnotte = ({ setIsContactFormOpen }) => {
  return (
    <>
      <p>Convertisssable en</p>
      <p className="text-2xl text-red-600 font-bold">
        BON D&#39;ACHAT de 15€ chacun
      </p>
      <p>et</p>
      <p>
        Utilisable sur votre prochain achat d&#39;un montant minimum de 100€.
      </p>
      <p>Valable sur toute la gamme des offres EMOVIN</p>
      <p className="mt-5">Pour profiter de votre cagnotte&nbsp;:</p>
      <button
        onClick={() => {
          setIsContactFormOpen(true);
        }}
        className="bg-redWine text-white px-5 py-2 rounded-lg mt-3 hover:bg-white hover:text-redWine border border-redWine"
      >
        Nous contacter
      </button>
    </>
  );
};
