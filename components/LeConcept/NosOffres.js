import ImageCartes from "../../public/images/concept/concept_cartes.png";
import ImageBonCoup from "../../public/images/concept/concept_bon_coup.png";
import ImageCave from "../../public/images/concept/concept_notre_cave.png";
import Image from "next/image";
import Link from "next/link";

const NosOffres = () => {
  return (
    <>
      <h2 className="px-5 my-24 text-4xl font-light text-center">
        Nos offres pour vous
      </h2>
      {/* ROW 1 */}
      <div className="bg-[#F2F4EB] w-full flex flex-col justify-between md:flex-row pb-10 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center">
          <h1 className="md:hidden text-4xl text-center mt-12">
            La carte Membre
          </h1>
          <div className="relative w-full aspect-1 max-w-xl m-auto">
            <Image
              src={ImageCartes}
              alt="Image cartes membres"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="hidden md:block text-4xl">La carte membre</h1>
          <p className="mt-5">Ouvert à tous et toutes…</p>
          <p className="">
            Tout le monde peut profiter de l&#39;idée d&#39;EMOVIN&nbsp;!
          </p>
          <p className="">
            Rejoignez notre communauté d&#39;amateurs de vin qui s&#39;intéresse
            à vous.
          </p>
          <p className="font-bold">
            Choissez entre 3 options selon vos goûts et profitez de 2 livraisons
            de vins et de pleins d&#39;avantages et surtout deux fois par an
            d&#39;une sélection de vins d&#39;exception dans une Wine Box&nbsp;!
          </p>
          <Link href="/cartes" passHref>
            <a>
              <button className="mt-10 bg-redWine text-white font-semibold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full md:w-auto hover:text-redWine hover:bg-white">
                Je choisis ma carte
              </button>
            </a>
          </Link>
        </div>
      </div>
      {/* ROW 2 */}
      <div className="bg-[#EBF0F4] w-full flex flex-col-reverse justify-between md:flex-row pb-10 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <div className="md:w-1/2 lg:w-2/5  flex flex-col justify-center">
          <h1 className="hidden md:block text-4xl">Le Bon Coup</h1>
          <p className="mt-5">
            <strong>Avec 3 à 4 opérations par an</strong> (“Coup de cœur
            d&#39;EMOVIN”), profitez des effets de l&#39;achat groupé pour{" "}
            <strong>acheter malin</strong> et bénéficiez des effets de la
            mutualisation grâce à nos plateformes régionales EMOVIN (Lyon Ouest,
            Rambouillet, Grenoble, Avignon).
          </p>

          <Link href="/le-bon-coup" passHref>
            <a>
              <button className="mt-10 bg-redWine text-white font-semibold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full md:w-auto hover:text-redWine hover:bg-white">
                Je découvre le Bon Coup du moment
              </button>
            </a>
          </Link>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="md:hidden text-4xl text-center mt-12">Le Bon Coup</h1>
          <div className="relative w-full aspect-1 max-w-xl m-auto">
            <Image
              src={ImageBonCoup}
              alt="Image cartes membres"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* ROW 3 */}
      <div className="bg-[#F4F0EB] w-full flex flex-col justify-between md:flex-row pb-10 px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center">
          <h1 className="md:hidden text-4xl text-center mt-12">
            Notre cave en 5 actes
          </h1>
          <div className="relative w-full aspect-1 max-w-xl m-auto">
            <Image
              src={ImageCave}
              alt="Image cartes membres"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-10 flex flex-col justify-center">
          <h1 className="hidden md:block text-4xl">Notre cave en 5 actes</h1>
          <div className="flex flex-row mt-5">
            <p>1.</p>
            <p>
              &nbsp;
              <span className="font-semibold">
                Profitez d&#39;une centaine de références
              </span>{" "}
              “dénichées pour vous lors de nos escapades dans les vignobles.
            </p>
          </div>
          <div className="flex flex-row">
            <p>2.</p>
            <p>
              &nbsp;
              <span className="font-semibold">
                Vous avez un besoin spécifique
              </span>{" "}
              (anniversaire, réception, cadeaux...)&nbsp;? Notre équipe se «
              décarcasse » pour vous satisfaire.
            </p>
          </div>
          <div className="flex flex-row">
            <p>3.</p>
            <p>
              &nbsp;
              <span className="font-semibold">
                Vous voulez constituer une cave
              </span>{" "}
              pour la saison… dites-nous ce que vous aimez et ce que vous
              n&#39;aimez pas, votre budget&nbsp;! Nous vous concoctons une
              offre “Sur-mesure”&nbsp;!
            </p>
          </div>
          <div className="flex flex-row">
            <p>4.</p>
            <p>
              &nbsp;Pour vous faire rêver,
              <span className="font-semibold">
                consultez nos “séries limitées”…
              </span>{" "}
              réservées aux plus rapides&nbsp;!
            </p>
          </div>
          <div className="flex flex-row">
            <p>5.</p>
            <p>
              &nbsp;
              <span className="font-semibold">
                Accèdez à l&#39;offre “Direct propriétaire”
              </span>{" "}
              pour les membres…
            </p>
          </div>

          <Link href="/notre-boutique" passHref>
            <a>
              <button className="mt-10 bg-redWine text-white font-semibold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full md:w-auto hover:text-redWine hover:bg-white">
                J&#39;en profite
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NosOffres;
