import Image from "next/image";
import ImageHeart from "../../public/images/HP/heart.png";

const NotreConcept = (props) => {
  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
      <div className="py-11 md:pb-28 grid grid-cols-1 md:grid-cols-2 md:gap-x-24">
        <div className="m-auto">
          <Image
            src={ImageHeart}
            alt="image heart page d'accueil"
            placeholder="blur"
          />
        </div>
        <div className="my-auto">
          <div className="text-redWine border-solid rounded-xl border-redWine border-[1px] px-5 py-3 inline-block uppercase mt-14 mb-11">
            Notre Concept
          </div>
          <h1 className="text-redWine text-4xl sm:text-5xl font-normal sm:font-bold">
            Choisir Emovin&nbsp;!
          </h1>
          <div className="mt-5">
            C&#39;est adhérer à une vision de la vie&nbsp;!
            <br />
            Une autre façon de voir le vin…
            <br />
            Et si l&#39;amitié et le plaisir de partager étaient plus important
            que tout le reste.
          </div>
          <div className="mt-6 flex text-center md:inline-block">
            <button className="bg-redWine text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full md:w-auto hover:text-redWine hover:bg-white">
              Qui sommes-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreConcept;
