import Image from "next/image";
import React from "react";

const UneColonneCommeCa = ({ col }) => {
  return (
    <div>
      <div className="border-l-2 py-3 pl-4 border-red-400">
        <h2 className="text-2xl font-bold">{col.title1}</h2>
        <h3 className="text-xl font-semibold text-gray-400">{col.title2}</h3>
      </div>
      <div className="flex flex-col align-center justify-center">
        <div className="relative max-w-xs aspect-1">
          <Image
            src={col.photo1}
            alt="photo description"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
          />
        </div>
        <p>{col.desciption}</p>
      </div>
      <div className="relative max-w-sm w-full aspect-[1.25] justify-center align-center mx-auto">
        <Image
          src={col.photo2}
          alt="photo description"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default UneColonneCommeCa;
