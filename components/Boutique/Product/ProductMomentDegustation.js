import bouche from "../../../public/images/product/bouche.png";
import nez from "../../../public/images/product/nez.png";
import oeil from "../../../public/images/product/oeil.png";
import cheese from "../../../public/images/product/cheese.png";
import servir from "../../../public/images/product/servir.png";
import Image from "next/image";

import LP1 from "../../../public/images/product/en_bouche/LP1.png";
import LP2 from "../../../public/images/product/en_bouche/LP2.png";
import LP3 from "../../../public/images/product/en_bouche/LP3.png";
import LP4 from "../../../public/images/product/en_bouche/LP4.png";
import LP5 from "../../../public/images/product/en_bouche/LP5.png";
import LP6 from "../../../public/images/product/en_bouche/LP6.png";
import LP7 from "../../../public/images/product/en_bouche/LP7.png";

import SD1 from "../../../public/images/product/en_bouche/SD1.png";
import SD2 from "../../../public/images/product/en_bouche/SD2.png";
import SD3 from "../../../public/images/product/en_bouche/SD3.png";
import SD4 from "../../../public/images/product/en_bouche/SD4.png";
import SD5 from "../../../public/images/product/en_bouche/SD5.png";
import SD6 from "../../../public/images/product/en_bouche/SD6.png";
import SD7 from "../../../public/images/product/en_bouche/SD7.png";

import ST1 from "../../../public/images/product/en_bouche/ST1.png";
import ST2 from "../../../public/images/product/en_bouche/ST2.png";
import ST3 from "../../../public/images/product/en_bouche/ST3.png";
import ST4 from "../../../public/images/product/en_bouche/ST4.png";
import ST5 from "../../../public/images/product/en_bouche/ST5.png";
import ST6 from "../../../public/images/product/en_bouche/ST6.png";
import ST7 from "../../../public/images/product/en_bouche/ST7.png";

const LP = [LP1, LP2, LP3, LP4, LP5, LP6, LP7];
const SD = [SD1, SD2, SD3, SD4, SD5, SD6, SD7];
const ST = [ST1, ST2, ST3, ST4, ST5, ST6, ST7];

const ProductMomentDegustation = ({ product }) => {
  const legerPuissant = LP[product.en_bouche_leger_puissant?.value - 1];
  const secDoux = SD[product.en_bouche_sec_doux?.value - 1];
  const soupleTannique = ST[product.en_bouche_souple_tannique?.value - 1];

  return (
    <div className="relative pt-12  mt-20 bg-white w-full rounded">
      <div className="px-9">
        <h1 className="text-3xl text-center">Le moment de la dégustation</h1>
        <div className="flex flex-col justify-center md:flex-row md:justify-around w-full mt-14">
          <div className="flex flex-col items-center md:max-w-[25%] text-center">
            <div className="relative w-12 aspect-1">
              <Image
                src={servir}
                alt="image logo"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <p className="text-center mt-4">Servir</p>
            <p className="font-bold mt-4">{product.service?.value}</p>
          </div>
          <div className="flex flex-col items-center md:max-w-[25%] text-center mt-7 md:mt-0">
            <div className="relative h-12 w-20">
              <Image
                src={cheese}
                alt="image logo"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <p className="text-center mt-4">Accords mets-vin</p>
            <p className="font-bold mt-4">{product.accord_mets_vins?.value}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-blueWine flex flex-col justify-center md:flex-row md:justify-around mt-14 py-12 text-white rounded-b">
        <div className="flex flex-col items-center md:max-w-[25%] text-center">
          <div className="relative w-24 aspect-1">
            <Image
              src={oeil}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <h1 className="text-center mt-4 text-3xl">À l&#39;oeil</h1>
          <p className="mt-2 mb-5 md:mt-12">{product.a_l_oeil?.value}</p>
        </div>
        <div className="flex flex-col items-center md:max-w-[25%] text-center">
          <div className="relative w-24 aspect-1">
            <Image
              src={nez}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <h1 className="text-center mt-4 text-3xl">Au nez</h1>
          <p className="mt-2 mb-5 md:mt-12">{product.au_nez?.value}</p>
        </div>
        <div className="flex flex-col items-center md:max-w-[25%] text-center">
          <div className="relative w-24 aspect-1">
            <Image
              src={bouche}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <h1 className="text-center mt-4 text-3xl">En bouche</h1>
          <div className="relative mt-3 w-44 h-8">
            <Image
              src={legerPuissant}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="relative mt-3 w-44 h-8">
            <Image
              src={secDoux}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="relative mt-3 w-44 h-8">
            <Image
              src={soupleTannique}
              alt="image logo"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMomentDegustation;
