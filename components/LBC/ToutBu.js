import Image from "next/image";
import ImageToutBu from "../../public/images/bon-coup/tout_bu.png";

const ToutBu = ({ page }) => {
  return (
    <>
      <div className="relative lg:aspect-[2.677] w-full">
        <div className={`${page === "serieLim" ? "bg-gradient-to-b from-[#DEC46F] to-[#BB9B48]"  : "bg-blueWine"} text-white flex flex-col py-12 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-16 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40`}>
          <h1 className="">Ils ont tout bu 😮</h1>
          <p className="text-2xl font-semibold mt-5">
            Nous revenons très vite avec{" "}
            {page === "serieLim"
              ? "une nouvelle série limitée"
              : "le prochain Bon Coup"}
            &nbsp;! En attendant profitez de nos perles et délices dans notre
            boutique.
          </p>
          <p className="text-2xl font-light">
            “La vie est belle. Ne perdons pas une goutte&nbsp;!”
          </p>
          <p className="font-caveat text-2xl mt-5">Patrick et Jean-Louis</p>
        </div>
        <div className="relative aspect-[1.6119403] md:w-2/3 mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[60%]">
          <Image
            src={ImageToutBu}
            alt="Image fond d'écran Bruno Loubet"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="invisible w-full top-0 left-0 relative"></div>
      </div>
      <div className="px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 my-20 md:w-3/4 mx-auto text-center">
        <h2 className="text-4xl font-light">EMOVIN pour tous les goûts</h2>
        <h3 className="text-2xl font-light">
          ...&nbsp;mais surtout le vôtre&nbsp;!
        </h3>
        <div className="mt-5 leading-7">
          <p>
            Bonne nouvelle&nbsp;! Votre attente ne devrait pas être trop longue…
          </p>

          <p className="mt-2">
            Nos deux compères ont repris la «&nbsp;route des vins&nbsp;» pour
            vous dénicher de nouvelles «&nbsp;pépites&nbsp;» à découvrir.
          </p>

          <p className="mt-2">
            Pour la prochaine opération, notre feuille de route (ADN
            d&#39;EMOVIN) est de vous trouver des «&nbsp;flacons&nbsp;» rares
            issus de domaines respectueux de la nature et qui ne sont pas
            nécessairement les plus connus ou parfois difficile
            d&#39;accès&nbsp;!
          </p>

          <p className="mt-2">
            Notre quête nous pousse rarement vers «&nbsp;le moins disant&nbsp;»
            d&#39;une appellation, mais plutôt vers un vin «&nbsp;bien
            fait&nbsp;» et qui correspond à vos attentes ! Vous nous faites
            confiance depuis près de 2 ans…{" "}
          </p>
          <p>cela nous honore tout autant que cela nous oblige.</p>

          <p className="mt-5">A très vite,</p>
          <p className="font-caveat text-2xl">Patrick & Jean-Louis</p>
        </div>
      </div>
    </>
  );
};

export default ToutBu;
