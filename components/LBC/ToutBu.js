import Image from "next/image";
import ImageToutBu from "../../public/images/bon-coup/tout_bu.png";

const ToutBu = ({ page }) => {
  return (
    <>
      <div className="relative lg:aspect-[2.677] w-full">
        <div className="bg-blueWine text-white flex flex-col py-12 px-5 w-full sm:px-10 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:px-20 lg:pr-10 lg:py-16 lg:w-[59%] xl:px-28 xl:py-16 xl:w-[55%] 2xl:px-40">
          <h1 className="">Ils ont tout bu :-)</h1>
          <p className="text-2xl font-semibold mt-5">
            Nous revenons très vite avec
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
      <div className="px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 text-center my-20 w-3/4 mx-auto">
        <h2 className="text-4xl font-light">EMOVIN pour tous les goûts</h2>
        <p className="mt-5">
          Le concept est super. On l&#39;explique encore ici. Pour tout le monde,
          pour devenir membre pour le SEO. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
      </div>
    </>
  );
};

export default ToutBu;
