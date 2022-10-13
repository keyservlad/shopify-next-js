import CoeurPrestige from "../../public/images/mini-logos/prestige/coeur.svg";
import BouteillesPrestige from "../../public/images/mini-logos/prestige/bouteilles.svg";
import MainVerrePrestige from "../../public/images/mini-logos/prestige/mainVerre.svg";
import EtiquettePrestige from "../../public/images/mini-logos/prestige/etiquette.svg";
import VerreSinglePrestige from "../../public/images/mini-logos/prestige/verreSingle.svg";
import CadeauPrestige from "../../public/images/mini-logos/prestige/cadeau.svg";
import SitePrestige from "../../public/images/mini-logos/prestige/site.svg";
import Row from "./Row";

const Rows = () => {
  const rows = [
    {
      id: 1,
      image: CadeauPrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">Un cadeau </span>
            «&nbsp;Surprise&nbsp;» de bienvenue
          </p>
        </>
      ),
    },
    {
      id: 2,
      image: BouteillesPrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">3 bouteilles </span>
            «&nbsp;Découvertes de printemps&nbsp;»
          </p>
          <p className="text-center text-sm text-[#8F8F8F]">
            Livrées en printemps en «&nbsp;point relais&nbsp;»
          </p>
        </>
      ),
    },
    {
      id: 3,
      image: CoeurPrestige,
      text: (
        <>
          <p className="text-center">
            Accès au{" "}
            <span className="font-semibold">programme de fidélité</span>
          </p>
          <p className="text-center text-sm text-[#8F8F8F]">
            Chaque € dépensé vous ouvre un crédit de points pour des cadeaux
            «&nbsp;privilèges&nbsp;»
          </p>
        </>
      ),
    },
    {
      id: 4,
      image: EtiquettePrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">Remise de 10% </span>
            en moyenne sur les sélections EMOVIN
          </p>
        </>
      ),
    },
    {
      id: 5,
      image: MainVerrePrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">Conseil personnalisé</span>
          </p>
          <p className="text-center text-sm text-[#8F8F8F]">
            Des échanges réguliers pour un service sur mesure
          </p>
        </>
      ),
    },
    {
      id: 6,
      image: VerreSinglePrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">
              Accès préférentiels aux événements{" "}
            </span>
            dans le cadre des «&nbsp;Cercles régionaux EMOVIN&nbsp;»
          </p>
        </>
      ),
    },
    {
      id: 7,
      image: SitePrestige,
      text: (
        <>
          <p className="text-center">
            <span className="font-semibold">Site web dédié </span>
            (Espace membre)
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {rows.map((row) => (
        <Row key={row.id} image={row.image} text={row.text} />
      ))}
    </>
  );
};

export default Rows;
