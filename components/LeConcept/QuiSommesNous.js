import Image from "next/image";
import ImageBozoPap from "../../public/images/concept/concept_bozo_pap.png";

const QuiSommesNous = () => {
  return (
    <>
      <h2 className="px-5 my-24 text-4xl font-light text-center">
        Qui sommes-nous&nbsp;!
      </h2>
      <div className="w-full flex flex-col-reverse justify-between lg:flex-row pb-10 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="hidden lg:block text-5xl text-redWine">
            Notre passion pour le vin partagée avec vous
          </h1>
          <p className="mt-10">
            Pendant plus de 20 ans, Patrick & Jean-Louis ont travaillé dans
            l&#39;univers de la restauration à la découverte des « saveurs »,
            des cultures et des grandes tables à travers le monde. Passionnés de
            la première heure en oenologie, nos « deux compères » ont développé
            un savoir-faire « rare » qui combine toutes les disciplines de
            l&#39;art de la table... en recherchant la magie du moment celle qui
            combine flacons, mets, convives et circonstances... C&#39;est sous
            l&#39;impulsion de leurs amis et de l&#39;accueil de nombreux
            vignerons séduits par l&#39;approche valorisante de leurs produits
            qu&#39;ils ont décidé de créer en 2021 EMOVIN ... pour vous&nbsp;!
          </p>
          <p className="font-semibold mt-10">
            Amicalement, Patrik et Jean-Louis
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="lg:hidden text-5xl text-center text-redWine">
            Notre passion pour le vin partagée avec vous
          </h1>
          <div className="relative w-full aspect-1 max-w-xl m-auto">
            <Image
              src={ImageBozoPap}
              alt="Image cartes membres"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuiSommesNous;
