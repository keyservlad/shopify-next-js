import { CartContext } from "../../../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import fr from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Controller } from "react-hook-form";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import Addresses from "./Addresses";
import { useSession } from "next-auth/react";
import { modifyCustomer } from "../../../../lib/shopifyCustomer";
import ModifAddress from "./ModifAddress";
import CreateAddress from "./CreateAddress";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDoubleDownIcon } from "@heroicons/react/outline";

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
    .matches(phoneRegExp, "Numéro de téléphone non valide")
    .min(10, "Trop court"),
  birthMonth: number("Veuillez entrer une date de naissance valide"),
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const months = [
  { id: 1, name: "Janvier" },
  { id: 2, name: "Février" },
  { id: 3, name: "Mars" },
  { id: 4, name: "Avril" },
  { id: 5, name: "Mai" },
  { id: 6, name: "Juin" },
  { id: 7, name: "Juillet" },
  { id: 8, name: "Août" },
  { id: 9, name: "Septembre" },
  { id: 10, name: "Octobre" },
  { id: 11, name: "Novembre" },
  { id: 12, name: "Décembre" },
];

const Profile = ({}) => {
  async function onSubmit(values) {
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

    const cust = await modifyCustomer(customer, token);

    // check if the birthMount has changed and is not undefined
    if (
      values.birthMonth !== undefined
      // && values.birthDay !== user.birthDay.value
    ) {
      let inputMonth;
      if (user.birthDay) {
        inputMonth = {
          id: user.id,
          metafields: [
            {
              id: user.birthDay.id,
              key: "birthDay",
              namespace: "custom",
              type: "number_integer",
              value: `${values.birthMonth}`,
            },
          ],
        };
      } else {
        inputMonth = {
          id: user.id,
          metafields: [
            {
              key: "birthDay",
              namespace: "custom",
              type: "number_integer",
              value: `${values.birthMonth}`,
            },
          ],
        };
      }
      inputMonth = JSON.stringify(inputMonth);
      inputMonth = inputMonth.replaceAll('\\"', "~");
      inputMonth = inputMonth.replace(/"([^"]+)":/g, "$1:");
      inputMonth = inputMonth.replaceAll("~", '\\"');
      const customer = await updateAddress(inputMonth);
    }

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
    birthMonth: user.birthDay?.value ? Number(user.birthDay?.value) : undefined,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState(initialValues.phone);
  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [email, setEmail] = useState(initialValues.email);
  const [birthMonth, setBirthMonth] = useState({
    id: initialValues.birthMonth,
    name: months[initialValues.birthMonth - 1].name,
  });

  const [isAddressEditing, setIsAddressEditing] = useState(false); // state to toggle the address editing components
  const [addressToModify, setAddressToModify] = useState(null); // state to store the address to modify
  const [isAddressCreating, setIsAddressCreating] = useState(false); // state to toggle the address creation components

  // This part is used to initialize the boxAddress field when it is empty (case for old customer that used the old card system)
  // also used to remove the address when boxAddress is empty TODO
  const boxAddress = user.boxDeliveryAddress
    ? JSON.parse(user.boxDeliveryAddress.value)
    : null;
  const setBoxAddress = async (address) => {
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
    let inputAddress;
    if (boxAddress) {
      inputAddress = {
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
    } else {
      inputAddress = {
        id: user.id,
        metafields: [
          {
            key: "boxDeliveryAddress",
            namespace: "custom",
            type: "json",
            value: jsonAddress,
          },
        ],
      };
    }
    inputAddress = JSON.stringify(inputAddress);
    inputAddress = inputAddress.replaceAll('\\"', "~");
    inputAddress = inputAddress.replace(/"([^"]+)":/g, "$1:");
    inputAddress = inputAddress.replaceAll("~", '\\"');
    const customer = await updateAddress(inputAddress);
    fetchUser(session.data.user.token.accessToken);
    setIsLoading(false);
  };

  const removeBoxAddress = async () => {
    setIsLoading(true);
    const customer = await deleteMetaRequest(user.boxDeliveryAddress.id);
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

  const deleteMetaRequest = (id) =>
    axios
      .get("/api/delete-metafield", {
        params: {
          id,
        },
      })
      .then((res) => res.data);

  useEffect(() => {
    if (user?.isDomicile?.value === "true" && !boxAddress) {
      setBoxAddress(user.defaultAddress);
    } else if (user?.isDomicile?.value === "false" && boxAddress) {
      removeBoxAddress();
    }
  }, []);
  // End of the part to initialize the boxAddress field

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
  useEffect(() => {
    setValue("birthMonth", birthMonth?.id);
  }, [birthMonth]);

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
        <div className="divide-y divide-gray-200 lg:col-span-9 px-4 sm:px-10 py-6">
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

                  <div className="col-span-6 sm:col-span-3">
                    <Listbox
                      value={birthMonth?.id}
                      onChange={(value) => {
                        setBirthMonth(value);
                        setValue("birthMonth", value.id);
                      }}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium text-gray-700">
                            Mois de naissance
                          </Listbox.Label>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate h-full">
                                  {birthMonth?.name}&nbsp;
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronDoubleDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {months.map((month) => (
                                  <Listbox.Option
                                    key={month.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={month}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {month.name}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                    <span
                      htmlFor="birthMonth"
                      className="block text-sm font-medium text-orange-600"
                    >
                      {errors?.birthMonth?.message}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                {isLoading ? (
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

const numberToMounth = (number) => {
  switch (number) {
    case 1:
      return "Janvier";
    case 2:
      return "Février";
    case 3:
      return "Mars";
    case 4:
      return "Avril";
    case 5:
      return "Mai";
    case 6:
      return "Juin";
    case 7:
      return "Juillet";
    case 8:
      return "Août";
    case 9:
      return "Septembre";
    case 10:
      return "Octobre";
    case 11:
      return "Novembre";
    case 12:
      return "Décembre";
  }
};
