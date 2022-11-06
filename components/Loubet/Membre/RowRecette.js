import Image from "next/image";
import Link from "next/link";
import ImageFeuille from "../../../public/images/bruno/feuilleButton.png";

const RowRecette = ({ line, index }) => {
  const isReverse = index % 2 !== 0;
  return (
    <div className="w-full">
      <div
        className={`pt-16 flex flex-col md:flex-row md:gap-x-24 ${
          isReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="my-auto basis-1/2 flex items-center flex-col">
          <div className="mt-5 text-center font-medium text-2xl px-5">
            {line.text}
          </div>
          <div className="flex flex-col-reverse md:flex-col w-4/5">
            <div className="flex items-center flex-col">
              <Link href={line.href}>
                <a className="z-10" target="_blank">
                  <button className="bg-redWine text-white mt-8 font-bold border-solid rounded-xl border-redWine border-4 px-4 py-3 cursor-pointer hover:text-redWine hover:bg-white hover:border-redWine">
                    Je découvre la recette
                  </button>
                </a>
              </Link>
              <div className="relative -m-16">
                {/* TODO get image with bg transparent */}
                <Image
                  src={ImageFeuille}
                  alt="Image feuille"
                  objectFit="contain"
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>
            <div
              className={`md:hidden m-auto w-full md:w-4/5 basis-1/2 pt-10 mt-10 bg-transparent relative aspect-[2.05]`}
            >
              <Image
                src={line.image}
                alt="image heart page d'accueil"
                objectFit="cover"
                quality={100}
                layout="fill"
                placeholder="blur"
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
        <div
          className={`hidden md:block m-auto w-full md:w-4/5 basis-1/2 pt-10 mt-10 bg-transparent relative aspect-[2.05]`}
        >
          <Image
            src={line.image}
            alt="image heart page d'accueil"
            objectFit="cover"
            quality={100}
            layout="fill"
            placeholder="blur"
            className="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default RowRecette;
