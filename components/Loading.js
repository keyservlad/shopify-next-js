import Image from "next/image";
import ImageLoader from "../public/images/loader.gif";

const Loading = () => {
  return (
    <div className="w-full min-h-[64.4vh] flex flex-col justify-center items-center">
      <h1 className="flex flex-row">
        Chargement
        <div className="flex pt-2 pl-2">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce animation-delay-200">.</span>
          <span className="animate-bounce animation-delay-400">.</span>
        </div>
      </h1>
      <div className="relative w-56 h-56">
        <Image src={ImageLoader} layout="fill" alt="Image Loading" />
      </div>
    </div>
  );
};

export default Loading;
