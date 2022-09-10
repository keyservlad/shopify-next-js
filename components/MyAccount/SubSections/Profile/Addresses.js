import React, { useContext } from "react";
import { CartContext } from "../../../../context/ShopContext";
import CardAddress from "./CardAddress";

const Addresses = ({}) => {
  const { user } = useContext(CartContext);
  const addresses = user?.addresses.edges;
  return (
    <form
      className="divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
    >
      <div className="px-4 sm:px-6 pb-6">
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Mes adresses
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Gérer vos adresses de livraison.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {addresses?.map((address) => (
            <CardAddress
              key={address.node.id}
              address={address.node}
              defaultAddress={user.defaultAddress.id}
            />
          ))}
        </div>
      </div>
      {user.isDomicile.value !== "true" && (
        <div className="mt-4 py-4 px-4 flex sm:px-6">
          if plateforme display plateforme de livraison
        </div>
      )}
    </form>
  );
};

export default Addresses;
