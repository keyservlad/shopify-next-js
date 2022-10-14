import { ArrowLeftIcon } from "@heroicons/react/outline";

const RenewOtherCard = ({ setIsRenewingOtherCard }) => {
  return (
    <div className="lg:col-span-9 px-4 sm:px-10 py-6">
      <button
        className="hover:opacity-70 cursor-pointer flex flex-row items-center mb-4 text-sm mt-8"
        onClick={() => {
          setIsRenewingOtherCard(false);
        }}
      >
        <ArrowLeftIcon className="flex-shrink-0 h-4 w-4 mr-2" />
        Annuler
      </button>
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-redWine">Renouveler ma carte membre</h1>
      </div>
    </div>
  );
};

export default RenewOtherCard;
