import Image from "next/image";
import FondHeader from "../../public/images/cartes/fond_header_cartes.jpg";

import Link from "next/link";
import Details from "./Details";
import { createRef, useState } from "react";
import Rows from "./Rows";
import Contact from "../Contact/contact";
import SavoirPlus from "./SavoirPlus";

const Cartes = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSavoirPlusOpen, setIsSavoirPlusOpen] = useState(false);
  const [imageContext, setImageContext] = useState("Printemps");

  return (
    <>
      <div className="flex flex-col w-full align-center justify-center text-center mb-10">
        <div className="sm:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 relative -z-10">
          <Image
            src={FondHeader}
            alt="Fond header cartes"
            quality={100}
            placeholder="blur"
          />
        </div>

        <div className="mb-20 px-5 md:w-1/2 md:p-0 mx-auto sm:-mt-12">
          <h1>Bienvenue chez EMOVIN</h1>
          <p className="mt-5">
            Dans le pays du vin, il est souvent difficile de choisir une bonne
            bouteille ?
          </p>
          <p>
            Comprendre les appellations, déchiffrer une étiquette, choisir un
            millésime,&nbsp;... n&#39;est pas toujours facile&nbsp;!
          </p>
          <p>Stocker du vin n&#39;est pas toujours votre choix...</p>

          <p className="mt-3">
            Fort de ce constat, deux professionnels du vin et de la gastronomie
            (Patrick & Jean-Louis) ont créé en 2000vin1 EMOVIN.
          </p>
          <p>
            EMOVIN est un{" "}
            <span className="text-redWine font-bold">
              Club Privé d&#39;amateurs de vins
            </span>{" "}
            qui propose, au travers d&#39;un abonnement annuel de vous faire
            découvrir{" "}
            <span className="text-redWine font-bold">
              &#34;les pépites de nos régions&#34;
            </span>{" "}
            mais aussi de{" "}
            <span className="text-redWine font-bold">
              &#34;belles appellations françaises&#34;
            </span>{" "}
            souvent difficiles à dénicher.
          </p>
          <p className="mt-3">
            Être membre de ce club vous permet ainsi, de{" "}
            <span className="text-redWine font-bold">recevoir du vin</span>, de
            participer à des{" "}
            <span className="text-redWine font-bold">
              ventes-dégustations privées
            </span>
            , d&#39;accéder à de{" "}
            <span className="text-redWine font-bold">nombreux avantages</span>{" "}
            (Remises, Programmes de fidélité, &#34;Bon Cadeau&#34;, cours de
            dégustation ...), ... mais aussi de bénéficier d&#39;un{" "}
            <span className="text-redWine font-bold">conseil personnalisé</span>{" "}
            &#34;Wine Assistance&#34; pour constituer votre cave, ou commander
            les vins pour une fête, bénéficier de conseils sur des accords
            &#34;Vins-Mets&#34; ... Chez EMOVIN, nous prendrons le temps de vous
            écouter.
          </p>
          <p className="mt-3">
            Et au fait, pourquoi EMOVIN ?{" "}
            <span className="text-blueWine font-semibold">
              &#34;La finalité n&#39;est-elle pas de partager de l&#39;
              <span className="text-redWine font-bold">EMO</span>tion par le{" "}
              <span className="text-redWine font-bold">VIN</span> ?&#34;
            </span>
          </p>
          <p className="font-caveat text-2xl mt-3">Patrick & Jean-Louis</p>
        </div>

        {/* section cartes */}
        <div className="px-5 md:w-1/2 md:p-0 mx-auto">
          <h1 className="">
            1 carte avec 3 options de «&nbsp;Wine box&nbsp;» selon vos goûts
          </h1>
          <p className="text-2xl font-light mt-6">
            Avec votre carte EMOVIN, profitez de{" "}
            <span className="font-bold">3</span> livraisons de vin et de plein
            d&#39;avantages autour du vin et des wine box composées de pur
            plaisir&nbsp;!
          </p>
          <p className="font-light mt-6">
            Validité de votre carte : 1 an à compter de la date d&#39;engagement
            de l&#39;abonnement.
          </p>
          <p className="font-light">
            Offre pour les résidents français, <br />
            pour les étrangers, {` `}
            <span
              onClick={() => {
                setIsContactFormOpen(true);
              }}
              className="underline cursor-pointer"
            >
              nous&nbsp;contacter
            </span>
          </p>
        </div>
        <Details
          setIsSavoirPlusOpen={setIsSavoirPlusOpen}
          setImageContext={setImageContext}
        />
      </div>
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
      <SavoirPlus
        open={isSavoirPlusOpen}
        setOpen={setIsSavoirPlusOpen}
        imageContext={imageContext}
      />
    </>
  );
};

export default Cartes;
