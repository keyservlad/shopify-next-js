import React, { useRef } from "react";
import { CartContext } from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import fr from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import { usePlacesWidget } from "react-google-autocomplete";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Controller, useForm } from "react-hook-form";
import { createCustomer } from "../../lib/shopifyCustomerAdmin";
import axios from "axios";
import PersonalInfos from "./PersonalInfos";
import DeliveryAdress from "./DeliveryAdress";
import DeliveryAdress2 from "./DeliveryAdress2";

const phoneRegExp =
  /^(?:(?:\+|00)\d{2,3}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const schemaPlat = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  modeLivraison: string()
    .required("veuillez selectionner un mode de livraison")
    .oneOf(["Plateforme", "Domicile"], "Mode de livraison non valide"),
  plateforme: string()
    .required("veuillez choisir une plateforme")
    .oneOf(
      ["Rambouillet", "Lyon", "Avignon", "Grenoble", "Chronopost"],
      "Veuillez entrer une plateforme de livraison valide"
    ),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
});
const schemaDom = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  modeLivraison: string()
    .required("veuillez selectionner un mode de livraison")
    .oneOf(["Plateforme", "Domicile"], "Mode de livraison non valide"),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
});
const schemaDom2Addresses = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  modeLivraison: string()
    .required("veuillez selectionner un mode de livraison")
    .oneOf(["Plateforme", "Domicile"], "Mode de livraison non valide"),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
  address2: string().required("Veuillez entrer votre adresse"),
  country2: string().required("Veuillez entrer votre pays"),
  city2: string().required("Veuillez entrer votre Ville"),
  zipCode2: string().required("Veuillez entrer votre code postal"),
  phone2: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de téléphone non valide")
    .min(10, "Trop court"),
});

async function onSubmit(values) {
  console.log(values);
  // TODO faire le submit avec les differentes possibilités pour les inputs + faire les changements de state de schema 
  const input = {
    email: values.email,
    addresses: [
      {
        address1: values.address,
        city: values.city,
        country: values.country,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        zip: values.zipCode,
      },
    ],
    firstName: values.firstName,
    lastName: values.lastName,
    metafields: [
      {
        key: "expirationDate",
        namespace: "custom",
        value: new Date(Date.now()).toISOString(),
      },
    ],
    phone: values.phone,
    // tags: ["prestige"],
  };

  console.log(JSON.stringify(input));

  // const customer = createCustomerRequest(JSON.stringify(input));
  // console.log(customer);
}

const createCustomerRequest = (input) =>
  axios
    .get("/api/create-customer", {
      params: {
        input: input,
      },
    })
    .then((res) => res.data);

export const Card = ({ carte }) => {
  const [schema, setSchema] = useState(schemaPlat);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const variant = {
    id: carte.variants.edges[0].node.id,
    title: carte.title,
    handle: carte.handle,
    image: carte.images?.edges[0].node.originalSrc,
    variantPrice: carte.variants.edges[0].node.price,
    variantQuantity: 1,
  };

  const { addToCart } = useContext(CartContext);

  const [deliveryMode, setDeliveryMode] = useState("Plateforme");
  const [sameAddress, setSameAddress] = useState(true);

  useEffect(() => {
    register("address");
    register("phone");
    register("address2");
    register("phone2");
  }, [register]);

  return (
    <div>
      <button
        onClick={() => {
          addToCart(variant);
        }}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
      <div className="max-w-7xl mx-auto py-16 sm:my-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 sm:mt-0">
            <h1 className="text-center mb-10">{carte.title}</h1>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Informations Personnelles
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Rensignez vos informations Personnelles pour la création de
                    votre compte
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <PersonalInfos register={register} errors={errors} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Livraison
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Decidez comment vous souhaitez recevoir votre vin
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend className="contents text-base font-medium text-gray-900">
                        Mode de Livraison
                      </legend>
                      <p className="text-sm text-gray-500">
                        Sélectionnez le mode de livraison pour recevoir vos box.
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="mode-plateforme"
                            name="modeLivraison"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            defaultChecked
                            {...register("modeLivraison")}
                            value={deliveryMode}
                            onClick={() => setDeliveryMode("Plateforme")}
                          />
                          <label
                            htmlFor="mode-plateforme"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Plateformes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="mode-domicile"
                            name="modeLivraison"
                            type="radio"
                            {...register("modeLivraison")}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            value={deliveryMode}
                            onClick={() => setDeliveryMode("Domicile")}
                          />
                          <label
                            htmlFor="mode-domicile"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Livraison à domicile (+ 7,20€)
                          </label>
                          <span
                            htmlFor="mode-domicile"
                            className="block text-sm font-medium text-orange-600"
                          >
                            {errors?.modeLivraison?.message}
                          </span>
                        </div>
                        {deliveryMode == "Plateforme" ? (
                          <>
                            <fieldset>
                              <legend className="contents text-base font-medium text-gray-900">
                                Plateforme de livraison
                              </legend>
                              <p className="text-sm text-gray-500">
                                Sélectionnez la plateforme à laquelle vous
                                voulez recevoir votre vin
                              </p>
                              <div className="mt-4 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="plateforme"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Plateforme
                                  </label>
                                  <select
                                    id="plateforme"
                                    name="plateforme"
                                    {...register("plateforme")}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value={"Rambouillet"}>
                                      Rambouillet
                                    </option>
                                    <option value={"Lyon"}>Lyon</option>
                                    <option value={"Avignon"}>Avignon</option>
                                    <option value={"Grenoble"}>Grenoble</option>
                                    <option value={"Chronopost"}>
                                      Point Relais Chronopost proche de chez
                                      vous
                                    </option>
                                    {/* TODO renseigner les adresses des points relais sélectionnés */}
                                  </select>
                                  <span
                                    htmlFor="plateforme"
                                    className="block text-sm font-medium text-orange-600"
                                  >
                                    {errors?.plateforme?.message}
                                  </span>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="contents text-base font-medium text-gray-900">
                                Adresse de facturation
                              </legend>
                              <p className="text-sm text-gray-500">
                                Sélectionnez l&#39;adresse de facturation
                              </p>
                              <DeliveryAdress
                                control={control}
                                setError={setError}
                                setValue={setValue}
                                errors={errors}
                                register={register}
                                fr={fr}
                                clearErrors={clearErrors}
                              />
                            </fieldset>
                          </>
                        ) : (
                          <>
                            <fieldset>
                              <legend className="contents text-base font-medium text-gray-900">
                                Adresse de livraison
                              </legend>
                              <p className="text-sm text-gray-500">
                                Sélectionnez l&#39;adresse à laquelle vous
                                souhaitez recevoir votre vin
                              </p>
                              <DeliveryAdress
                                control={control}
                                setError={setError}
                                setValue={setValue}
                                errors={errors}
                                register={register}
                                fr={fr}
                                clearErrors={clearErrors}
                              />
                            </fieldset>
                            <div className="relative flex items-start pt-3">
                              <div className="flex items-center h-5">
                                <input
                                  id="sameAddress"
                                  aria-describedby="sameAddress-description"
                                  type="checkbox"
                                  checked={sameAddress}
                                  onChange={() => setSameAddress(!sameAddress)}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="sameAddress"
                                  className="font-medium text-gray-700"
                                >
                                  Même adresse de facturation ?
                                </label>
                                <p className="text-gray-500">
                                  Décocher pour utiliser une adresse de
                                  facturation différente de l&#39;adresse de
                                  livraison
                                </p>
                              </div>
                            </div>
                            {sameAddress ? (
                              ""
                            ) : (
                              <DeliveryAdress2
                                control={control}
                                setError={setError}
                                setValue={setValue}
                                errors={errors}
                                register={register}
                                fr={fr}
                                clearErrors={clearErrors}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </fieldset>
                  </div>
                  <div
                    className="sealsubs-target-element"
                    data-handle={carte.handle}
                  ></div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
