import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import { usePlacesWidget } from "react-google-autocomplete";

// TODO add company
const DeliveryAdress = ({
  control,
  setError,
  setValue,
  errors,
  register,
  fr,
  clearErrors,
  address,
}) => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {
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

  const [phoneValue, setPhoneValue] = address
    ? useState(address.phone)
    : useState("");

  const [addressState, setAddressState] = address
    ? useState(address.address1)
    : useState("");
  const [countryState, setCountryState] = address
    ? useState(address.country)
    : useState("");
  const [city, setCity] = address ? useState(address.city) : useState("");
  const [zip, setZip] = address ? useState(address.zip) : useState("");

  useEffect(() => {
    if (address) {
      setValue("address", address.address1);
      setValue("country", address.country);
      setValue("city", address.city);
      setValue("zipCode", address.zip);
      setValue("firstName", address.firstName);
      setValue("lastName", address.lastName);
      setValue("phone", address.phone);
    }
  }, []);

  return (
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
          control={control}
          defaultValue=""
          render={({ field: { value, onChange, onBlur, ...field } }) => (
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
          render={({ field: { value, onChange, onBlur, ...field } }) => (
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
          render={({ field: { value, onChange, onBlur, ...field } }) => (
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
          control={control}
          defaultValue=""
          render={({ field: { value, onChange, onBlur, ...field } }) => (
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
                message: "Veuillez entrer votre numéro de téléphone",
              });
            } else {
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
  );
};

export default DeliveryAdress;
