import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const schema = object({
  password: string()
    .required("Veuillez entrer votre nouveau mot de passe")
    .min(8, "Mot de passe trop court, veuillez entrer minimum 8 caractères")
    .max(20, "Mot de passe trop long, veuillez entrer maximum 8 caractères")
    .matches(
      passwordRegex,
      "Mot de passe non valide, Veuillez entrer au moins une Majuscule, une Minuscule et un Numéro"
    ),
  password2: string()
    .required("veuillez entrer la confirmation de votre nouveau mot de passe")
    .test(
      "passwords-match",
      "Les mots de passe ne correspondent pas",
      function (value) {
        return this.parent.password === value;
      }
    ),
});

const Activate = () => {
  const router = useRouter();
  const { activation_url } = router.query;


  async function onSubmit(values) {
    console.log(values);

    setIsLoading(true);
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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-50">
            <body class="h-full">
            ```
          */}
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <img
            className="mx-auto h-12 w-auto hidden sm:block"
            // for now display hidden on mobile but put it at the bottom for mobile after
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h1 className="mt-6 text-center text-gray-900 text-3xl sm:text-5xl">
            Bienvenue chez Emovin [prénom] !
          </h1>
          <h2 className="mt-6 text-center sm:text-lg font-extrabold text-gray-900">
            Activez votre compte et créez votre mot de passe
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="psasword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register("password")}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <span
                  htmlFor="password"
                  className="block text-sm font-medium text-orange-600"
                >
                  {errors?.password?.message}
                </span>
              </div>

              <div>
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmer votre mot de passe
                </label>
                <div className="mt-1">
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    {...register("password2")}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <span
                  htmlFor="password2"
                  className="block text-sm font-medium text-orange-600"
                >
                  {errors?.password2?.message}
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activate;
