import Image from "next/image";
import FondHeader from "../../public/images/cartes/fond_header_cartes.jpg";
import ImageTitleDecouverte from "../../public/images/logo-cartes/decouverte.png";
import ImageTitleImmanquables from "../../public/images/logo-cartes/immanquables.png";
import ImageTitlePrestige from "../../public/images/logo-cartes/prestige.png";
import DessinDecouverte from "../../public/images/logo-cartes/dessinDecouverte.png";
import DessinImmanquables from "../../public/images/logo-cartes/dessinImmanquables.png";
import DessinPrestige from "../../public/images/logo-cartes/dessinPrestige.png";

const Cartes = () => {
  return (
    <div className="flex flex-col w-full align-center justify-center text-center">
      <div className="sm:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 relative">
        <Image
          src={FondHeader}
          alt="Fond header cartes"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="px-5 md:w-1/2 md:p-0 mx-auto">
        <h1 className="">Trois cartes membre et encore plus d'avantages</h1>
        <p className="text-2xl font-light mt-6">
          Avec chaque carte membre, profitez de plein d&#39;avantages autour du
          vin et dans notre cave. Et deux fois par an d&#39;une wine box
          composée de trois bouteilles du pur plaisir&nbsp;!
        </p>
        <p className="font-light mt-6">
          Offre pour les résidents français, pour les étrangers,{" "}
          <span className="underline">nous&nbsp;consulter</span>
          {/* TODO add formulaire de contact ici */}
        </p>
      </div>
      <div className="bg-[#F8FAF8] mt-10">
        {/* TODO center that div */}
        <div className="md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 p-10">
          <div className="relative basis-1/3">
            <Image
              src={DessinDecouverte}
              alt="Dessin carte découverte"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="basis-2/3 text-left">
            <div className="relative">
              <Image
                src={ImageTitleDecouverte}
                alt="Titre carte découverte"
                quality={100}
                placeholder="blur"
              />
            </div>
            <h2 className="text-xl font-semibold">Les pépites du moment</h2>
            <p>Ce ne sont pas les vins les plus connus... et pourtant&nbsp;!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartes;
