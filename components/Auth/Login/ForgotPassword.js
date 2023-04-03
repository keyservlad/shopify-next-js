import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { CartContext } from "../../../context/ShopContext";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { sendPasswordRecoverEmail } from "../../../lib/shopifyCustomer";

const schema = object({
  email: string().required("Veuillez entrer votre adresse email"),
});

const ForgotPassword = ({ setIsPasswordForgot }) => {
  async function onSubmit(values) {
    setIsLoading(true);
    const customer = await verifCustomer(values.email);
    if (customer?.customer?.length === 0) {
      setError("global", {
        type: "custom",
        message: "Aucun compte associé à cette adresse email",
      });
      setIsLoading(false);
      return;
    } else if (customer?.customer[0].carte?.value === "expired") {
      setError("global", {
        type: "custom",
        message: "Votre carte a expiré, veuillez renouveler votre carte",
      });
      setIsLoading(false);
      return;
    } else if (customer?.customer[0].carte?.value) {
      setError("global", null);
      const res = await sendPasswordRecoverEmail(values.email);
      if (res.length === 0) {
        setError("global", null);
        setIsLoading(false);
        // notify of success
        setIsPasswordForgot(false);
      } else {
        setError("global", {
          type: "custom",
          message: "Une erreur est survenue, veuillez réessayer",
        });
      }
    } else {
      (customer?.customer[0].carte?.value);
      setError("global", {
        type: "custom",
        message: "Une erreur est survenue, veuillez réessayer",
      });
      setIsLoading(false);
    }
  }

  const verifCustomer = (email) =>
    axios
      .get("/api/verif-customer-exists", {
        params: {
          email,
        },
      })
      .then((res) => res.data);

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
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <h1 className="mt-3 lg:mt-6 text-center text-redWine text-3xl sm:text-5xl">
          Mot de passe oublié ?
        </h1>
        <p className="text-center">Vous avez oublié votre mot de passe ?</p>
        <p>
          Pas de soucis nous vous enverrons un lien par email pour le
          réinitialiser
        </p>
      </div>

      <div className="mt-3 lg:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 lg:shadow lg:rounded-lg sm:px-10">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email du compte
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email")}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-redWine focus:border-redWine sm:text-sm"
                />
              </div>
              <span
                htmlFor="email"
                className="block text-sm font-medium text-orange-600"
              >
                {errors?.email?.message}
              </span>
              <span
                htmlFor="email"
                className="block text-sm font-medium text-orange-600"
              >
                {errors?.global?.message}
              </span>
            </div>
            <div className="flex justify-end">
              <div
                onClick={() => {
                  setIsPasswordForgot(false);
                }}
                className="text-sm -mt-6 cursor-pointer"
              >
                <div className="font-medium text-redWine hover:text-redWine">
                  Annuler
                </div>
              </div>
            </div>

            <div>
              {isLoading ? (
                <div
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-redWine`}
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
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-redWine hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
                >
                  Continuer
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
