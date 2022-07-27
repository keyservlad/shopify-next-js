import React from "react";
import { CartContext } from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import fr from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { usePlacesWidget } from "react-google-autocomplete";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array, InferType, TypeOf } from "yup";
import { Controller, useForm } from "react-hook-form";

const schema = object({
  firstName: string().required("Name is required"),
  lastName: string().required("Name is required"),
  email: string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
});

function onSubmit(values) {
  console.log(values);
}

export const Card = ({ carte }) => {
  const {
    register,
    handleSubmit,
    control,
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

  const [countryState, setCountryState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // useEffect(() => {
  //   console.log(countryState);
  // }, [countryState]);

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

                      <div className="col-span-6">
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
                              {...register("address")}
                              ref={ref}
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
                          onChange={setPhoneValue}
                          className="mt-1"
                        />
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium text-orange-600"
                        >
                          {phoneValue
                            ? isValidPhoneNumber(phoneValue)
                              ? undefined
                              : "Invalid phone number"
                            : "Phone number required"}
                        </label>
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
                      <legend className="sr-only">By Email</legend>
                      <div
                        className="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        By Email
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              Comments
                            </label>
                            <p className="text-gray-500">
                              Get notified when someones posts a comment on a
                              posting.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
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
