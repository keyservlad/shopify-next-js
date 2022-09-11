import { CartContext } from "../../../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import fr from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Controller } from "react-hook-form";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import { useSession } from "next-auth/react";
import DeliveryAdress from "../../../CardForms/DeliveryAdress";

import { ArrowLeftIcon } from "@heroicons/react/outline";
import {
  deleteAddress,
  modifAddress,
  updateDefaultAddress,
} from "../../../../lib/shopifyCustomer";
import { updateCustomer } from "../../../../lib/shopifyCustomerAdmin";

const phoneRegExp =
  /^(?:(?:\+|00)\d{2,3}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const schema = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
});

// TODO creer une adresse aussi
const ModifAddress = ({ setIsAddressEditing, address }) => {
  async function onSubmit(values) {
    setIsLoading(true);

    // // modif the user
    const phone = values.phone.replace(/\s/g, "");

    const add = {
      address1: values.address,
      city: values.city,
      country: values.country,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: phone,
      zip: values.zipCode,
    };

    const token = session.data.user.token.accessToken;

    const cust = await modifAddress(add, token, address.id);
    console.log(cust);

    // // refresh the user
    fetchUser(session.data.user.token.accessToken);
    setIsLoading(false);
    setIsAddressEditing(false);
  }

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

  const { user, fetchUser } = useContext(CartContext);
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const boxAddress = JSON.parse(user.boxDeliveryAddress.value);

  useEffect(() => {
    register("address");
    register("phone");
  }, [register]);

  // TODO small bug not rerendering the component
  const setBoxAddress = async () => {
    setIsLoading(true);
    let jsonAddress = {
      id: address.id,
      address1: address.address1,
      city: address.city,
      country: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      zip: address.zip,
    };
    jsonAddress = JSON.stringify(jsonAddress);
    let inputAddress = {
      id: user.id,
      metafields: [
        {
          id: user.boxDeliveryAddress.id,
          key: "boxDeliveryAddress",
          namespace: "custom",
          type: "json",
          value: jsonAddress,
        },
      ],
    };
    inputAddress = JSON.stringify(inputAddress);
    inputAddress = inputAddress.replaceAll('\\"', "~");
    inputAddress = inputAddress.replace(/"([^"]+)":/g, "$1:");
    inputAddress = inputAddress.replaceAll("~", '\\"');
    console.log(inputAddress);
    const customer = await updateAddress(inputAddress);
    console.log(customer);
    fetchUser(session.data.user.token.accessToken);
    setIsLoading(false);
  };

  const updateAddress = (inputAddress) =>
    axios
      .get("/api/update-customer", {
        params: {
          inputAddress: inputAddress,
        },
      })
      .then((res) => res.data);

  return (
    <div className="lg:col-span-9 p-4 sm:p-6 relative">
      {/* TODO add the possibility to change the default and the box delivery address */}
      <div className="absolute top-0 right-0 pt-3 pr-3">
        {user.defaultAddress.id === address.id && (
          <>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
              Par défaut
            </span>
          </>
        )}
        {address.id.split("?model")[0] === boxAddress.id.split("?model")[0] && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
            Adresse de livraison des boxes
          </span>
        )}
      </div>
      <button
        className="hover:opacity-70 cursor-pointer flex flex-row items-center mb-4 text-sm mt-8"
        onClick={() => {
          setIsAddressEditing(false);
        }}
      >
        <ArrowLeftIcon className="flex-shrink-0 h-4 w-4 mr-2" />
        Annuler
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="contents text-base font-medium text-gray-900">
            Adresse de livraison
          </legend>
          <p className="text-sm text-gray-500">
            Modifier cette adresse de livraison
          </p>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  defaultValue={address.firstName}
                  {...register("firstName")}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {errors.firstName && (
                <p className="block text-sm font-medium text-orange-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  defaultValue={address.lastName}
                  {...register("lastName")}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {errors.lastName && (
                <p className="block text-sm font-medium text-orange-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <DeliveryAdress
            control={control}
            setError={setError}
            setValue={setValue}
            errors={errors}
            register={register}
            fr={fr}
            clearErrors={clearErrors}
            address={address}
          />
        </fieldset>
        <div className="mt-4 py-4 px-4 flex flex-col md:flex-row md:justify-between sm:px-6">
          {isLoading ? (
            <>
              <div>
                {user.defaultAddress.id !== address.id && (
                  <>
                    <div
                      className={`bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                    >
                      <svg
                        role="status"
                        className="inline mr-3 w-4 h-4 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Chargement...
                    </div>
                  </>
                )}
                {address.id.split("?model")[0] !==
                  boxAddress.id.split("?model")[0] && (
                  <div
                    className={`bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                  >
                    <svg
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Chargement...
                  </div>
                )}
              </div>
              <div>
                <div
                  className={`bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                >
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Chargement...
                </div>
                <div
                  className={`ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                >
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Chargement...
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                {user.defaultAddress.id !== address.id && (
                  <>
                    <div
                      onClick={async () => {
                        setIsLoading(true);
                        const token = session.data.user.token.accessToken;
                        const add = await updateDefaultAddress(
                          token,
                          address.id
                        );
                        console.log(add);
                        fetchUser(session.data.user.token.accessToken);
                        setIsLoading(false);
                        setIsAddressEditing(false);
                      }}
                      className={`bg-white border hover:cursor-pointer border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                    >
                      Definir par défaut
                    </div>
                  </>
                )}
                {address.id.split("?model")[0] !==
                  boxAddress.id.split("?model")[0] && (
                  <div
                    onClick={() => {
                      setBoxAddress();
                    }}
                    className={`bg-white border hover:cursor-pointer border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                  >
                    Definir livraison boxes
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={() => {
                    setIsAddressEditing(false);
                  }}
                  className={`bg-white border hover:cursor-pointer border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                >
                  Annuler
                </div>
                <button
                  className={`ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
                >
                  Confirmer
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModifAddress;
