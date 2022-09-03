import Link from "next/link";
import Image from "next/image";
import ImageDecouverte from "../../../public/images/login/decouverte.png";
import ImageImmanquables from "../../../public/images/login/immanquables.png";
import ImagePrestige from "../../../public/images/login/prestige.png";

const LoginCardsSection = () => {
  return (
    <>
      <div className="hidden lg:block h-full relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 m-auto h-fit px-[15%] flex flex-col text-center gap-y-6 z-10">
          <h1 className="text-redWine">Nouveau chez Emovin&nbsp;?</h1>
          <p>
            Rejoignez EMOVIN et devenez membre d&#39;une communauté qui
            s&#39;intéresse à vous et profitez de plein d&#39;avantages ou tout
            simplement de notre cave. Ouverte pour tous !
          </p>
          <Link href="/notre-cave" passHref>
            <a>
              <button className="bg-redWine text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer hover:text-redWine hover:bg-white">
                Je découvre EMOVIN
              </button>
            </a>
          </Link>
          <Link href="/notre-cave" passHref>
            <a>
              <span className="underline text-xs">
                Je veux du vin ! Je crée un compte
              </span>
            </a>
          </Link>
        </div>

        <div className="absolute top-5 right-5">
          <div className="relative w-40 h-40">
            <Image
              src={ImagePrestige}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute top-5 left-5">
          <div className="relative w-40 h-40">
            <Image
              src={ImageDecouverte}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-5">
          <div className="relative w-40 h-40">
            <Image
              src={ImageImmanquables}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col mx-6 gap-y-6 py-6 text-center">
        <h1 className="text-redWine text-3xl">
          Ou devenez membre d&#39;une communauté qui s&#39;intéresse à
          vous&nbsp;!
        </h1>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="relative w-full aspect-square">
            <Image
              src={ImageDecouverte}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src={ImageImmanquables}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src={ImagePrestige}
              alt="Image Loading"
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <Link href="/notre-cave" passHref>
          <a>
            <button className="bg-redWine text-white text-xs font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer hover:text-redWine hover:bg-white">
              Je découvre EMOVIN
            </button>
          </a>
        </Link>
        <Link href="/notre-cave" passHref>
          <a>
            <span className="underline text-xs">
              Je veux du vin ! Je crée un compte
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default LoginCardsSection;
