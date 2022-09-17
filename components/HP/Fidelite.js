import Image from "next/image";
import ImageCoeur from "../../public/images/mini-logos/coeur.png";

const Fidelite = () => {
  return (
    <div className="w-full bg-[#F2F4EB] px-5 sm:px-10 2xl:px-40 relative">
      <div className="mt-16 py-9 lg:grid grid-cols-5 gap-x-4">
        <div className="md:grid grid-cols-5 gap-x-4 lg:col-span-4">
          <div className="grid grid-cols-4 md:col-span-2 md:gap-x-3">
            <div className="col-span-1 max-w-[100px] m-auto">
              <Image
                src={ImageCoeur}
                alt="image coeur"
                placeholder="blur"
              />
            </div>
            <h1 className="col-span-3 text-3xl flex items-center mx-auto">
              Être fidèle, ça paie&nbsp;!
            </h1>
          </div>
          <p className="mt-8 sm:mt-3 md:col-span-3 flex justify-center mx-auto flex-col">
            Chaque € dépensé vous offre un crédit de points pour des cadeaux
            «&nbsp;privilèges&nbsp;».
            <br />
            <span className="font-semibold">
              Consultez la vinothèque des membres et faites-vous plaisir&nbsp;!
            </span>
          </p>
        </div>

        <div className="mt-8 sm:mt-0 flex text-center md:inline-block col-span-1">
          <button className="mt-8 bg-black text-white font-bold border-solid rounded-xl border-black border-[3px] px-5 py-3 cursor-pointer w-full lg:w-auto hover:text-black hover:bg-white">
            Je deviens membre
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fidelite;
