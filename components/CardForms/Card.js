import { CartContext } from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import fr from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { boolean, object, string } from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import PersonalInfos from "./PersonalInfos";
import DeliveryAdress from "./DeliveryAdress";
import DeliveryAdress2 from "./DeliveryAdress2";
import { createCheckoutCustomAttribute } from "../../lib/shopifyCheckout";
import { useRouter } from "next/router";
import { formatter } from "../../utils/helper";

// TODO remove billing address + add shippping address to be the id of the current address of the user
// TODO do the other cards like prestige

const phoneRegExp =
  /^(?:(?:\+|00)\d{2,3}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const schemaPlat = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  modeLivraison: string()
    .required("veuillez selectionner un mode de livraison")
    .oneOf(["Plateforme", "Domicile"], "Mode de livraison non valide"),
  plateforme: string()
    .required("veuillez choisir une plateforme")
    .oneOf(
      ["Rambouillet", "Lyon", "Avignon", "Grenoble", "Chronopost"],
      "Veuillez entrer une plateforme de livraison valide"
    ),
});
const schemaDom = object({
  firstName: string().required("Veuillez entrer votre prénom"),
  lastName: string().required("Veuillez entrer votre nom"),
  email: string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer votre adresse email"),
  modeLivraison: string()
    .required("veuillez selectionner un mode de livraison")
    .oneOf(["Plateforme", "Domicile"], "Mode de livraison non valide"),
  address: string().required("Veuillez entrer votre adresse"),
  country: string().required("Veuillez entrer votre pays"),
  city: string().required("Veuillez entrer votre Ville"),
  zipCode: string().required("Veuillez entrer votre code postal"),
  phone: string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(phoneRegExp, "Numéro de léléphone non valide")
    .min(10, "Trop court"),
});

const getCustomerByEmail = (email) =>
  axios
    .get("/api/verif-customer-exists", {
      params: {
        email: email,
      },
    })
    .then((res) => res.data);

export const Card = ({ carte, carteDomicile }) => {
  async function onSubmit(values) {
    setIsLoading(true);

    // verif que le membre n'existe pas
    const customer = await getCustomerByEmail(values.email);
    let ids = null;
    if (customer.customer.length != 0) {
      if (
        customer.customer[0].carte?.value === "decouverte" ||
        customer.customer[0].carte?.value === "prestige" ||
        customer.customer[0].carte?.value === "immanquables"
      ) {
        setIsLoading(false);
        setError("email", {
          type: "custom",
          message: "Un compte avec cette adresse mail existe déjà",
        });
        return;
      } else if (customer.customer[0].carte?.value === "expired") {
        ids = {};
        customer.customer[0].metafields?.edges.map((metafield) => {
          ids[metafield.node.key] = metafield.node.id.replaceAll(":", "Ƶ");
          if (
            metafield.node.key === "points" &&
            metafield.node.value !== "0" &&
            metafield.node.value
          ) {
            ids["pts"] = metafield.node.value;
          }
        });
      }
    }

    const Cartetitle = carte.title.toLowerCase().includes("prestige")
      ? "prestige"
      : carte.title.toLowerCase().includes("découverte")
      ? "decouverte"
      : "immanquables";

    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    var input;
    if (schema == schemaPlat) {
      input = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        metafields: [
          {
            id: ids?.carte ? ids.carte : null,
            key: "carte",
            namespace: "custom",
            value: Cartetitle,
            type: "single_line_text_field",
          },
          {
            id: ids?.expirationdate ? ids.expirationdate : null,
            key: "expirationdate",
            namespace: "custom",
            value: expiryDate.toISOString().split("T")[0],
            type: "date",
          },
          {
            id: ids?.isDomicile ? ids.isDomicile : null,
            key: "isDomicile",
            namespace: "custom",
            type: "boolean",
            value: "false",
          },
          {
            id: ids?.points ? ids.points : null,
            key: "points",
            namespace: "custom",
            value: ids?.pts ? `${ids.pts}` : "0",
            type: "number_integer",
          },
          {
            id: ids?.plateforme ? ids.plateforme : null,
            key: "plateforme",
            namespace: "custom",
            value: values.plateforme,
            type: "single_line_text_field",
          },
        ],
      };
    } else if (schema == schemaDom) {
      input = {
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
        phone: values.phone,
        metafields: [
          {
            id: ids?.carte ? ids.carte : null,
            key: "carte",
            namespace: "custom",
            value: Cartetitle,
            type: "single_line_text_field",
          },
          {
            id: ids?.expirationdate ? ids.expirationdate : null,
            key: "expirationDate",
            namespace: "custom",
            value: expiryDate.toISOString().split("T")[0],
            type: "date",
          },
          {
            id: ids?.isDomicile ? ids.isDomicile : null,
            key: "isDomicile",
            namespace: "custom",
            type: "boolean",
            value: "true",
          },
          {
            id: ids?.points ? ids.points : null,
            key: "points",
            namespace: "custom",
            value: ids?.pts ? `${ids.pts}` : "0",
            type: "number_integer",
          },
        ],
      };
    } else {
      setIsLoading(false);
      return;
    }

    input.metafields.map((metafield) => {
      if (metafield.id === null) {
        delete metafield.id;
      }
    });

    const customAttribute = {
      key: "newCustomerInput",
      value: JSON.stringify(input),
    };

    // addToCartCarte(variant, customAttribute, values.email);

    //  TODO next create checkout with variant, custom attributes, email (not address because it is not physical product)
    setIsCartLoading(true); // not need anymore but w/e

    let checkout;
    if (schema == schemaDom) {
      checkout = await createCheckoutCustomAttribute(
        [variantDomicile],
        customAttribute,
        values.email
      );
    } else {
      checkout = await createCheckoutCustomAttribute(
        [variant],
        customAttribute,
        values.email
      );
    }

    // TODO check if any error first
    if (checkout.checkoutUserErrors.length > 0) {
      if (checkout.checkoutUserErrors[0].code === "BAD_DOMAIN") {
        setError("email", {
          type: "custom",
          message: "Veuillez entrer une adresse email valide",
        });
      } else {
        setError("email", {
          type: "custom",
          message: "Erreur lors de la création du compte",
        });
      }
      setIsLoading(false);
      return;
    }
    router.push(checkout.checkout.webUrl);

    setIsCartLoading(false);

    // setIsLoading(false); //disabled because router.push takes so much time wtf
  }

  const [schema, setSchema] = useState(schemaPlat);
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

  const variant = {
    id: carte.variants.edges[0].node.id,
    title: carte.title,
    handle: carte.handle,
    image: carte.images?.edges[0].node.originalSrc,
    variantPrice: carte.variants.edges[0].node.price.amount,
    variantQuantity: 1,
  };
  const variantDomicile = {
    id: carteDomicile.variants.edges[0].node.id,
    title: carteDomicile.title,
    handle: carteDomicile.handle,
    image: carteDomicile.images?.edges[0].node.originalSrc,
    variantPrice: carteDomicile.variants.edges[0].node.price.amount,
    variantQuantity: 1,
  };

  // const { addToCartCarte } = useContext(CartContext);
  const { setIsCartLoading } = useContext(CartContext);
  const router = useRouter();

  const [deliveryMode, setDeliveryMode] = useState("Plateforme");
  const [price, setPrice] = useState(carte.variants.edges[0].node.price.amount);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    register("address");
    register("phone");
  }, [register]);

  useEffect(() => {
    if (deliveryMode == "Plateforme") {
      setSchema(schemaPlat);
    } else {
      setSchema(schemaDom);
    }
  }, [deliveryMode]);

  useEffect(() => {
    if (deliveryMode == "Plateforme") {
      setPrice(carte.variants.edges[0].node.price.amount);
    } else {
      setPrice(carteDomicile.variants.edges[0].node.price.amount);
    }
  }, [deliveryMode, price, carte, carteDomicile]);

  return (
    <div>
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
                    Rensignez vos informations personnelles pour la création de
                    votre compte
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <PersonalInfos register={register} errors={errors} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-7">
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
                        <div className="flex flex-col-reverse">
                          <div className="flex items-center mt-2">
                            <input
                              id="mode-domicile"
                              name="modeLivraison"
                              type="radio"
                              {...register("modeLivraison")}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              value={deliveryMode}
                              onClick={() => setDeliveryMode("Domicile")}
                            />
                            <label
                              htmlFor="mode-domicile"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Livraison adresse privée (+ 20,00€)
                            </label>
                            <span
                              htmlFor="mode-domicile"
                              className="block text-sm font-medium text-orange-600"
                            >
                              {errors?.modeLivraison?.message}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="mode-plateforme"
                              name="modeLivraison"
                              type="radio"
                              defaultChecked={true}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              {...register("modeLivraison")}
                              value={deliveryMode}
                              onClick={() => setDeliveryMode("Plateforme")}
                            />
                            <label
                              htmlFor="mode-plateforme"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Point relais
                            </label>
                          </div>
                        </div>

                        {deliveryMode == "Plateforme" ? (
                          <>
                            <fieldset>
                              <legend className="contents text-base font-medium text-gray-900">
                                Plateforme de livraison
                              </legend>
                              <p className="text-sm text-gray-500">
                                Sélectionnez la plateforme à laquelle vous
                                voulez recevoir votre vin
                              </p>
                              <div className="mt-4 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="plateforme"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Point relais
                                  </label>
                                  <select
                                    id="plateforme"
                                    name="plateforme"
                                    {...register("plateforme")}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value={"Rambouillet"}>
                                      Rambouillet
                                    </option>
                                    <option value={"Lyon"}>Lyon</option>
                                    <option value={"Avignon"}>Avignon</option>
                                    <option value={"Grenoble"}>Grenoble</option>
                                    <option value={"Chronopost"}>
                                      Point Relais Chronopost proche de chez
                                      vous
                                    </option>
                                    {/* TODO renseigner les adresses des points relais sélectionnés */}
                                  </select>
                                  <span
                                    htmlFor="plateforme"
                                    className="block text-sm font-medium text-orange-600"
                                  >
                                    {errors?.plateforme?.message}
                                  </span>
                                </div>
                              </div>
                            </fieldset>
                          </>
                        ) : (
                          <>
                            <fieldset>
                              <legend className="contents text-base font-medium text-gray-900">
                                Adresse de livraison
                              </legend>
                              <p className="text-sm text-gray-500">
                                Sélectionnez l&#39;adresse à laquelle vous
                                souhaitez recevoir votre vin
                              </p>
                              <DeliveryAdress
                                control={control}
                                setError={setError}
                                setValue={setValue}
                                errors={errors}
                                register={register}
                                fr={fr}
                                clearErrors={clearErrors}
                              />
                            </fieldset>
                          </>
                        )}
                      </div>
                    </fieldset>
                  </div>
                  <div
                    className="sealsubs-target-element"
                    data-handle={carte.handle}
                  ></div>
                  <div className="px-4 py-3 bg-gray-50 sm:px-6 flex flex-row items-center justify-end">
                    <div className="mr-5">{formatter.format(price)}</div>
                    {isLoading ? (
                      <div
                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                      >
                        Je deviens membre&nbsp;!
                      </button>
                    )}
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
