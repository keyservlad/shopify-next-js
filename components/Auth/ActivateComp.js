import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../Loading";
import {
  activateCustomer,
  createAccessToken,
  modifPassword,
} from "../../lib/shopifyCustomer";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const schema = object({
  password: string()
    .required("Veuillez entrer votre nouveau mot de passe")
    .min(8, "Mot de passe trop court, veuillez entrer minimum 8 caractères")
    .max(20, "Mot de passe trop long, veuillez entrer maximum 20 caractères")
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

const ActivateComp = ({ activation_url }) => {
  const router = useRouter();

  // TODO add gestion d'erreur ici
  async function onSubmit(values) {
    setIsLoading(true);

    // activate account
    const activate = await activateCustomer(
      userId,
      validationToken,
      process.env.PASSWORD_CREATE_ACCOUNT
    );

    // get token
    const accessToken = await createAccessToken(
      user.customer.email,
      process.env.PASSWORD_CREATE_ACCOUNT
    );

    // modif password
    const modifUser = await modifPassword(
      values.password,
      accessToken.customerAccessToken.accessToken
    );

    setIsLoading(false);

    router.push({
      pathname: "/login",
      query: { success: "creation de compte reussie" },
    });
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
  const [user, setUser] = useState();

  // get the token and the userId from the url
  const validationToken = activation_url.substring(
    activation_url.lastIndexOf("/") + 1
  );
  const tempString = activation_url.substring(
    0,
    activation_url.lastIndexOf("/")
  );
  const userId =
    "gid://shopify/Customer/" +
    tempString.substring(tempString.lastIndexOf("/") + 1);

  const getCustomerById = async () => {
    try {
      const resp = await axios.get("/api/get-customer-by-id", {
        params: {
          id: userId,
        },
      });
      setUser(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    getCustomerById();
  }, []);

  if (!user) {
    return <Loading />;
  }

  if (user.customer.length === 0) {
    router.push({
      pathname: "/",
      query: { error: "User not found" },
    });
  } else {
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
            <h1 className="mt-6 text-center text-gray-900 text-3xl sm:text-5xl">
              Bienvenue chez Emovin {user ? user.customer.firstName : ""} !
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
                    htmlFor="password"
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
                  {isLoading ? (
                    <div
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Valider
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ActivateComp;
