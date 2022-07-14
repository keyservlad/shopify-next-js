import Image from "next/image";
import ImageBonCoup from "../../public/images/HP/bon_coup_accueil.jpg";

const LeBonCoup = () => {
  return (
    <div className="w-full bg-[url('/images/HP/fond_lbc.jpeg')] bg-center bg-cover bg-no-repeat px-5 sm:px-10 lg:px-20 xl:px-40">
      <div className="hidden md:grid py-20 grid-cols-5 gap-x-9">
        <div className="col-span-3">
          <h1 className="text-4xl sm:text-5xl font-normal sm:font-bold">
            LE BON COUP ! Comment ça marche&nbsp;?
          </h1>
          <div className="w-3/4">
            <div className="mt-8">
              <span className="font-bold">
                A votre écoute et désireux de vous faire partager un “coup de
                cœur”, l&#39;équipe d&#39;EMOVIN vous propose 3 à 4 fois par an
                (selon les opportunités) d&#39;acheter “Malin”&nbsp;!
              </span>
              <br />
              L&#39;idée est de “réserver auprès d&#39;un viticulture un lot à
              un prix « EMOVIN » et de vous le proposer en exclusivité sur une
              période limitée. Regroupez-vous pour bénéficier de frais de
              livraison réduits ou de l&#39;un des 4 plateformes EMOVIN en
              France !<br />
              Attention les quantités peuvent être limitées.
              <br />
              Ces opérations sont éligibles aux points de fidélité pour les
              membres.
            </div>
            <div className="mt-8 flex text-center sm:inline-block">
              <button className="bg-blueWine text-white font-bold border-solid rounded-xl border-blueWine border-[3px] px-5 py-3 cursor-pointer w-full sm:w-auto hover:text-blueWine hover:bg-white">
                Tous les avantages du club
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 m-auto">
          <Image
            src={ImageBonCoup}
            alt="image Le bon coup page d'accueil"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden py-11">
        <h1 className="text-4xl font-normal">
          Le Bon Coup !<br />
          Comment ça marche&nbsp;?
        </h1>
        <div className="mt-8 mx-auto">
          <Image
            src={ImageBonCoup}
            alt="image Le bon coup page d'accueil"
            placeholder="blur"
          />
        </div>
        <div className="mt-8">
          <span className="font-bold">
            A votre écoute et désireux de vous faire partager un “coup de cœur”,
            l&#39;équipe d&#39;EMOVIN vous propose 3 à 4 fois par an (selon les
            opportunités) d&#39;acheter “Malin”&nbsp;!
          </span>
          <br />
          L&#39;idée est de “réserver auprès d&#39;un viticulture un lot à un
          prix « EMOVIN » et de vous le proposer en exclusivité sur une période
          limitée. Regroupez-vous pour bénéficier de frais de livraison réduits
          ou de l&#39;un des 4 plateformes EMOVIN en France !<br />
          Attention les quantités peuvent être limitées.
          <br />
          Ces opérations sont éligibles aux points de fidélité pour les membres.
        </div>
        <div className="mt-8 flex text-center sm:inline-block">
          <button className="bg-blueWine text-white font-bold border-solid rounded-xl border-blueWine border-[3px] px-5 py-3 cursor-pointer w-full hover:text-blueWine hover:bg-white">
            Tous les avantages du club
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeBonCoup;
