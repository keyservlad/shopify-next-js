import { PencilIcon, ArrowLeftIcon, XIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "../../../../context/ShopContext";
import { deleteAddress } from "../../../../lib/shopifyCustomer";

const CardAddress = ({
  address,
  defaultAddress,
  setIsAddressEditing,
  setAddressToModify,
}) => {
  const { user, fetchUser } = useContext(CartContext);
  const session = useSession();

  const boxAddress = user.boxDeliveryAddress
    ? JSON.parse(user.boxDeliveryAddress.value)
    : null;

  return (
    <div className="group relative border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 flex flex-col justify-between h-full">
        {defaultAddress === address.id && (
          <>
            <div className="absolute top-0 right-0 pt-3 pr-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                Par défaut
              </span>
            </div>
          </>
        )}
        {address.id.split("?model")[0] === boxAddress?.id.split("?model")[0] && (
          <div className="absolute top-0 left-0 pt-3 pl-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Livraison boxes
            </span>
          </div>
        )}
        <div className="flex-1">
          <p className="mt-5 text-sm text-gray-500">
            {address.firstName} {address.lastName} <br />
            {address.address1}
            <br />
            {address.country}
            <br />
            {address.city}
            <br />
            {address.zip}
            <br />
            {address.company ? (
              <>
                {address.company} <br />
              </>
            ) : (
              ""
            )}
            {address.phone}
          </p>
        </div>
        <div className="flex justify-end">
          <PencilIcon
            onClick={() => {
              setIsAddressEditing(true);
              setAddressToModify(address);
            }}
            className="flex-shrink-0 h-5 w-5 cursor-pointer hover:opacity-70"
          />
          {address.id !== defaultAddress && address.id !== defaultAddress && (
            <XIcon
              onClick={async () => {
                // TODO add alert state before deleting the address https://tailwindui.com/components/application-ui/overlays/modals
                const token = session.data.user.token.accessToken;
                const add = await deleteAddress(token, address.id);
                fetchUser(session.data.user.token.accessToken);
              }}
              className="flex-shrink-0 h-5 w-5 ml-2 cursor-pointer hover:opacity-70"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
