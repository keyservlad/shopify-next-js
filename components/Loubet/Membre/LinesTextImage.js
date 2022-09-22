import Image from "next/image";
import ImagePlat1 from "../../../public/images/bruno/plat1.png";
import ImagePlat2 from "../../../public/images/bruno/plat2.png";
import ImagePlat3 from "../../../public/images/bruno/plat3.png";

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
      <div
        className={`pt-20 md:pt-36 flex flex-col md:flex-row md:gap-x-24 ${
          line.reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="my-auto basis-1/2">
          <h1 className="">{line.title}</h1>
          <div className="mt-5">{line.text}</div>
        </div>
        <div className={`m-auto w-4/5 basis-1/2 pt-10 md:pt-10`}>
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
