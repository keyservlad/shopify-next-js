import React from "react";

const PersonalInfos = ({register, errors}) => {
  return (
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
          Cette adresse sera utilisé pour communiquer avec vous et pour la
          création de votre compte
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
  );
};

export default PersonalInfos;
