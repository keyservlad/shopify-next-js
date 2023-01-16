import Image from "next/image";
import React from "react";

const Row = ({ image, text }) => {
  return (
    <div className="bg-[#FAF8F9] flex flex-row justify-center w-full p-6 mt-6 h-full items-center">
      <div className="flex items-center justify-center">
        <div className="relative aspect-1 w-9 mr-6 flex justify-center align-center">
          <Image
            src={image}
            alt="Coeur prestige"
            width={36}
            height={36}
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col text-xl">{text}</div>
    </div>
  );
};

export default Row;
