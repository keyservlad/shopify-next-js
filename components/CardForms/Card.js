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

const phoneRegExp =
  /^(?:(?:\+|00)\d{2,3}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const schema = object({
  firstName: string().required("Name is required"),
  lastName: string().required("Name is required"),
  email: string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short"),
});

async function onSubmit(values) {
  console.log(values);

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
    tags: ["prestige"],
  };

  console.log(JSON.stringify(input));

  const customer = createCustomerRequest(JSON.stringify(input));
  console.log(customer);
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

  const { ref } = usePlacesWidget({
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {
      console.log(place);
      if (place.address_components.length == 7) {
        setAddressState(
          place.address_components[0].long_name +
            " " +
            place.address_components[1].long_name
        );
        setValue(
          "address",
          place.address_components[0].long_name +
            " " +
            place.address_components[1].long_name
        );
        setCountryState(place.address_components[5].long_name);
        setValue("country", place.address_components[5].long_name);

        setCity(place.address_components[2].long_name);
        setValue("city", place.address_components[2].long_name);
        setZip(place.address_components[6].long_name);
        setValue("zipCode", place.address_components[6].long_name);
      } else if (place.address_components.length == 6) {
        setAddressState(place.address_components[0].long_name);
        setValue("address", place.address_components[0].long_name);
        setCountryState(place.address_components[4].long_name);
        setValue("country", place.address_components[4].long_name);

        setCity(place.address_components[1].long_name);
        setValue("city", place.address_components[1].long_name);
        setZip(place.address_components[5].long_name);
        setValue("zipCode", place.address_components[5].long_name);
      }
      clearErrors("address");
      clearErrors("country");
      clearErrors("city");
      clearErrors("zipCode");
    },
    options: {
      types: ["address"],
      componentRestrictions: { country: "fr" },
    },
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
  const [phoneValue, setPhoneValue] = useState("");

  const [addressState, setAddressState] = useState("");
  const [countryState, setCountryState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    register("address");
    register("phone");
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
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          {...register("firstName")}
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        <span
                          htmlFor="first-name"
                          className="block text-sm font-medium text-orange-600"
                        >
                          {errors?.firstName?.message}
                        </span>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nom
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          {...register("lastName")}
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        <span
                          htmlFor="last-name"
                          className="block text-sm font-medium text-orange-600"
                        >
                          {errors?.lastName?.message}
                        </span>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Adresse mail
                        </label>
                        <p className="mt-1 text-sm text-gray-600">
                          Cette adresse sera utilisé pour communiquer avec vous
                          et pour la création de votre compte
                        </p>

                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          {...register("email")}
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                        />
                        <span
                          htmlFor="email-address"
                          className="block text-sm font-medium text-orange-600"
                        >
                          {errors?.email?.message}
                        </span>
                      </div>
                    </div>
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
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          {/* TODO add state to control what shows up + add transition with headless ui : https://headlessui.com/react/transition + chill on validation of the fields (not required for the address etc) + add same transition etc for the billing address (same or not) */}
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Plateformes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Livraison à domicile (+ 7,20€)
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="contents text-base font-medium text-gray-900">
                        Adresse de livraison
                      </legend>
                      <p className="text-sm text-gray-500">
                        Sélectionnez l&#39;adresse à laquelle vous voulez
                        recevoir votre vin
                      </p>
                      <div className="mt-4 grid grid-cols-6 gap-6">
                        <div className="col-span-6 ">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Adresse
                          </label>

                          <Controller
                            name="address"
                            id="address"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { value, onChange, onBlur, ...field },
                            }) => (
                              <input
                                {...field}
                                type="text"
                                autoComplete="street-address"
                                ref={ref}
                                value={addressState}
                                onChange={({ target: { value } }) => {
                                  onChange(value);
                                  setAddressState(value);
                                  if (value.length < 1) {
                                    setError("address", {
                                      type: "custom",
                                      message: "Veuillez entrer votre adresse",
                                    });
                                  } else {
                                    setValue("address", value);
                                  }
                                }}
                                placeholder=""
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            )}
                          />

                          <span
                            htmlFor="address"
                            className="block text-sm font-medium text-orange-600"
                          >
                            {errors?.address?.message}
                          </span>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Pays
                          </label>

                          <Controller
                            name="country"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { value, onChange, onBlur, ...field },
                            }) => (
                              <input
                                {...field}
                                type="text"
                                autoComplete="country-name"
                                {...register("country")}
                                value={countryState}
                                onChange={({ target: { value } }) => {
                                  onChange(value);
                                  setCountryState(value);
                                }}
                                placeholder=""
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            )}
                          />

                          <span
                            htmlFor="country"
                            className="block text-sm font-medium text-orange-600"
                          >
                            {errors?.country?.message}
                          </span>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ville
                          </label>

                          <Controller
                            name="city"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { value, onChange, onBlur, ...field },
                            }) => (
                              <input
                                {...field}
                                type="text"
                                autoComplete="address-level2"
                                {...register("city")}
                                value={city}
                                onChange={({ target: { value } }) => {
                                  onChange(value);
                                  setCity(value);
                                }}
                                placeholder=""
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            )}
                          />
                          <span className="block text-sm font-medium text-orange-600">
                            {errors?.city?.message}
                          </span>
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                          <label
                            htmlFor="zipCode"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Code Postal
                          </label>

                          <Controller
                            name="zipCode"
                            id="zipCode"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { value, onChange, onBlur, ...field },
                            }) => (
                              <input
                                {...field}
                                type="text"
                                autoComplete="postal-code"
                                {...register("zipCode")}
                                value={zip}
                                onChange={({ target: { value } }) => {
                                  onChange(value);
                                  setZip(value);
                                }}
                                placeholder=""
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            )}
                          />
                          <span
                            htmlFor="zipCode"
                            className="block text-sm font-medium text-orange-600"
                          >
                            {errors?.zipCode?.message}
                          </span>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="telephone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Numéro de téléphone
                          </label>

                          <PhoneInput
                            defaultCountry="FR"
                            international
                            labels={fr}
                            countryCallingCodeEditable={false}
                            name="telephone"
                            placeholder="Numéro de téléphone"
                            value={phoneValue}
                            onChange={(value) => {
                              setPhoneValue(value);
                              if (!value) {
                                setError("phone", {
                                  type: "custom",
                                  message:
                                    "Veuillez entrer votre numéro de téléphone",
                                });
                              } else {
                                console.log(formatPhoneNumberIntl(value));
                                setValue("phone", formatPhoneNumberIntl(value));
                                clearErrors("phone");
                              }
                            }}
                            className="mt-1"
                          />
                          <label
                            htmlFor="telephone"
                            className="block text-sm font-medium text-orange-600"
                          >
                            {errors?.phone?.message}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="contents text-base font-medium text-gray-900">
                        Adresse de livraison
                      </legend>
                      <p className="text-sm text-gray-500">
                        Sélectionnez l&#39;adresse à laquelle vous voulez
                        recevoir votre vin
                      </p>
                      <div className="mt-4 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="plateforme"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Pateforme
                          </label>
                          <select
                            id="plateforme"
                            name="plateforme"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value={"Rambouillet"}>Rambouillet</option>
                            <option value={"Lyon"}>Lyon</option>
                            <option value={"Avignon"}>Avignon</option>
                            <option value={"Grenoble"}>Grenoble</option>
                            <option value={"Chronopost"}>
                              Point Relais Chronopost proche de chez vous
                            </option>
                            {/* TODO renseigner les adresses des points relais sélectionnés */}
                          </select>
                        </div>
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
