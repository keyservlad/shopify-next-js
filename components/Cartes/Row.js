import Image from "next/image";
import React from "react";

const Row = ({ image, text }) => {
  return (
    <div className="bg-[#FAF8F9] flex flex-row justify-center w-full p-6 mt-6 h-full">
      <div className="flex items-center justify-center">
        <div className="relative aspect-1 w-8 mr-6">
          <Image
            src={image}
            alt="Coeur prestige"
            width={32}
            height={32}
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col">{text}</div>
    </div>
  );
};

export default Row;
