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
import Addresses from "./Addresses";
import { useSession } from "next-auth/react";
import { modifyCustomer } from "../../../../lib/shopifyCustomer";
import ModifAddress from "./ModifAddress";
import CreateAddress from "./CreateAddress";

const phoneRegExp =
  /^(?:(?:\+|00)\d{2,3}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const schema = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
});

const Profile = () => {
  async function onSubmit(values) {
    console.log(values);

    setIsLoading(true);

    // modif the user
    const phone = values.phone.replace(/\s/g, "");
    const customer = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: phone,
    };

    const token = session.data.user.token.accessToken;

    const user = await modifyCustomer(customer, token);
    console.log(user);

    // refresh the user
    fetchUser(session.data.user.token.accessToken);
    setIsLoading(false);
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

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState(initialValues.phone);
  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [email, setEmail] = useState(initialValues.email);

  const [isAddressEditing, setIsAddressEditing] = useState(false); // state to toggle the address editing components
  const [addressToModify, setAddressToModify] = useState(null); // state to store the address to modify
  const [isAddressCreating, setIsAddressCreating] = useState(false); // state to toggle the address creation components

  useEffect(() => {
    register("phone");
    setValue("phone", formatPhoneNumberIntl(phoneValue));
  }, [register]);

  useEffect(() => {
    setValue("phone", formatPhoneNumberIntl(phoneValue));
  }, [phoneValue]);
  useEffect(() => {
    setValue("firstName", firstName);
  }, [firstName]);
  useEffect(() => {
    setValue("lastName", lastName);
  }, [lastName]);
  useEffect(() => {
    setValue("email", email);
  }, [email]);

  return (
    <>
      {isAddressEditing ? (
        <ModifAddress
          setIsAddressEditing={setIsAddressEditing}
          address={addressToModify}
        />
      ) : isAddressCreating ? (
        <CreateAddress setIsAddressCreating={setIsAddressCreating} />
      ) : (
        <div className="divide-y divide-gray-200 lg:col-span-9 px-4 sm:px-6 py-6">
          {/* Profile section */}
          <div className="divide-y divide-gray-200">
            <form
              className="divide-y divide-gray-200 lg:col-span-9"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <div className="">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Mon profil
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Modifier vos informations personnelles.
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-6 py-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>

                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue={initialValues.firstName}
                      render={({
                        field: { value, onChange, onBlur, ...field },
                      }) => (
                        <input
                          {...field}
                          type="text"
                          autoComplete="given-name"
                          value={firstName}
                          {...register("firstName")}
                          onChange={({ target: { value } }) => {
                            onChange(value);
                            setFirstName(value);
                          }}
                          placeholder=""
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      )}
                    />
                    <span
                      htmlFor="firstName"
                      className="block text-sm font-medium text-orange-600"
                    >
                      {errors?.firstName?.message}
                    </span>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue={initialValues.lastName}
                      render={({
                        field: { value, onChange, onBlur, ...field },
                      }) => (
                        <input
                          {...field}
                          type="text"
                          autoComplete="given-name"
                          value={lastName}
                          {...register("lastName")}
                          onChange={({ target: { value } }) => {
                            onChange(value);
                            setLastName(value);
                          }}
                          placeholder=""
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      )}
                    />
                    <span
                      htmlFor="lastName"
                      className="block text-sm font-medium text-orange-600"
                    >
                      {errors?.lastName?.message}
                    </span>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse mail
                    </label>

                    <Controller
                      name="email"
                      control={control}
                      defaultValue={initialValues.email}
                      render={({
                        field: { value, onChange, onBlur, ...field },
                      }) => (
                        <input
                          {...field}
                          type="text"
                          autoComplete="email"
                          value={email}
                          {...register("email")}
                          onChange={({ target: { value } }) => {
                            onChange(value);
                            setEmail(value);
                          }}
                          placeholder=""
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      )}
                    />
                    <span
                      htmlFor="email-address"
                      className="block text-sm font-medium text-orange-600"
                    >
                      {errors?.email?.message}
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
              </div>
              <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                {isLoading ? (
                  <>
                    <button
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
                    </button>
                    <button
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
                    </button>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setPhoneValue(initialValues.phone);
                        setValue("phone", formatPhoneNumberIntl(phoneValue));
                        clearErrors("phone");
                        clearErrors("firstName");
                        clearErrors("lastName");
                        clearErrors("email");
                        setFirstName(initialValues.firstName);
                        setValue("firstName", firstName);
                        setLastName(initialValues.lastName);
                        setValue("lastName", lastName);
                        setEmail(initialValues.email);
                        setValue("email", email);
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
                  </>
                )}
              </div>
            </form>
          </div>
          <div className="pt-6 divide-y divide-gray-200">
            <Addresses
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isAddressEditing={isAddressEditing}
              setIsAddressEditing={setIsAddressEditing}
              setAddressToModify={setAddressToModify}
              setIsAddressCreating={setIsAddressCreating}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
