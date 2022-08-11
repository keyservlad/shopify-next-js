import Image from "next/image";
import ImagePlat1 from "../../public/images/bruno/plat1.png";
import ImagePlat2 from "../../public/images/bruno/plat2.png";
import ImagePlat3 from "../../public/images/bruno/plat3.png";

const line1 = {
  image: ImagePlat1,
  title: "Lorem Ipsum",
  text: (
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>
  ),
  reverse: false,
};
const line2 = {
  image: ImagePlat2,
  title: "Lorem Ipsum",
  text: (
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>
  ),
  reverse: true,
};
const line3 = {
  image: ImagePlat3,
  title: "Lorem Ipsum",
  text: (
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>
  ),
  reverse: false,
};

const LinesTextImage = ({ lineNumber }) => {
  const line = lineNumber === 1 ? line1 : lineNumber === 2 ? line2 : line3;
  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40">
      <div className="pt-36 grid grid-cols-1 md:grid-cols-2 md:gap-x-24">
        <div className={`col-span-1 hidden m-auto w-4/5 ${line.reverse ? "block" : ""}`}>
          <Image
            src={line.image}
            alt="image heart page d'accueil"
            placeholder="blur"
          />
        </div>
        <div className="my-auto col-span-1">
          <h1 className="">{line.title}</h1>
          <div className="mt-5">{line.text}</div>
        </div>
        <div className={`m-auto col-span-1 w-4/5 ${line.reverse ? "hidden" : ""}`}>
          <Image
            src={line.image}
            alt="image heart page d'accueil"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default LinesTextImage;
