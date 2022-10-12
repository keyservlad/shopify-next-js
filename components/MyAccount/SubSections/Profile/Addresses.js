import React, { useContext } from "react";
import { CartContext } from "../../../../context/ShopContext";
import CardAddress from "./CardAddress";
import { PlusCircleIcon } from "@heroicons/react/outline";

const renderSwitch = (plateforme) => {
  switch (plateforme) {
    case "Chronopost":
      return (
        <>
          <p>
            Vos boxes seront livrées à la plateforme du point relais Chronopost
            le plus proche de chez vous
          </p>
          <button className="text-left w-full underline cursor-pointer mt-2">
            Nous contacter pour toute demande relative à la livraison de vos
            boxes
          </button>
        </>
      );
    case "Rambouillet":
      return (
        <>
          <p>Vos boxes seront livrées à la plateforme de Rambouillet</p>
          <button className="text-left w-full underline cursor-pointer mt-2">
            Nous contacter pour toute demande relative à la livraison de vos
            boxes
          </button>
        </>
      );
    case "Lyon":
      return (
        <>
          <p>Vos boxes seront livrées à la plateforme de Lyon</p>
          <button className="text-left w-full underline cursor-pointer mt-2">
            Nous contacter pour toute demande relative à la livraison de vos
            boxes
          </button>
        </>
      );
    case "Avignon":
      return (
        <>
          <p>Vos boxes seront livrées à la plateforme d&#39;Avignon</p>
          <button className="text-left w-full underline cursor-pointer mt-2">
            Nous contacter pour toute demande relative à la livraison de vos
            boxes
          </button>
        </>
      );
    case "Grenoble":
      return (
        <>
          <p>Vos boxes seront livrées à la plateforme de Grenoble</p>
          <button className="text-left w-full underline cursor-pointer mt-2">
            Nous contacter pour toute demande relative à la livraison de vos
            boxes
          </button>
        </>
      );
    default:
      return <p>Plateforme non définie, nous contacter</p>;
  }
};

const Addresses = ({
  setIsAddressCreating,
  setIsAddressEditing,
  setAddressToModify,
}) => {
  const { user } = useContext(CartContext);
  const addresses = user?.addresses.edges;
  return (
    <div className="divide-y divide-gray-200 lg:col-span-9">
      <div className="">
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
              setIsAddressEditing={setIsAddressEditing}
              setAddressToModify={setAddressToModify}
            />
          ))}
          {user.isDomicile.value !== "true" && (
            // <div className="mt-4 py-4 px-4 flex sm:px-6">
            //   if plateforme display plateforme de livraison
            // </div>
            <div className="group relative border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Livraison des boxes
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mt-5 text-sm text-gray-500">
                    {renderSwitch(user.plateforme?.value)}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setIsAddressCreating(true);
            }}
            className="group relative border border-gray-200 rounded-lg shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="p-6 flex flex-col h-full justify-center group text-gray-500 group-hover:text-gray-800">
              <div className="w-full">
                <PlusCircleIcon
                  className="h-7 w-7 mx-auto "
                  aria-hidden="true"
                />
              </div>
              <h1 className="text-2xl text-center mt-3">
                Créer une nouvelle adresse
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
