import Image from "next/image";

const RowItem = ({ logo, text }) => {
  return (
    <div className="w-full bg-[#FAF8F9] mt-6 flex flex-row p-6">
      <div className="flex">
        <div className="relative aspect-square w-8 mr-6">
          {logo ? (
            <Image src={logo} layout="fill" alt="Image Decouverte" />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="text-left">{text}</div>
    </div>
  );
};

export default RowItem;
