import { CartContext } from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { getCarte, test } from "../../lib/shopify";

export default function Example({ carte, test2 }) {
  useEffect(() => {
    console.log(test2);
  }, []);

  const variant = {
    id: carte.variants.edges[0].node.id,
    title: carte.title,
    handle: carte.handle,
    image: carte.images.edges[0].node.originalSrc,
    variantPrice: carte.variants.edges[0].node.priceV2.amount,
    variantQuantity: 1,
  };

  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        addToCart(variant);
      }}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Save
    </button>
    // <div className="max-w-7xl mx-auto py-16 sm:my-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-gray-100">
    //   <div className="mt-10 sm:mt-0">
    //     <div className="md:grid md:grid-cols-3 md:gap-6">
    //       <div className="md:col-span-1">
    //         <div className="px-4 sm:px-0">
    //           <h3 className="text-lg font-medium leading-6 text-gray-900">
    //             Informations Personnelles
    //           </h3>
    //           <p className="mt-1 text-sm text-gray-600">
    //             Rensignez vos informations Personnelles pour la création de
    //             votre compte
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-5 md:mt-0 md:col-span-2">
    //         <form action="">
    //           <div className="shadow overflow-hidden sm:rounded-md">
    //             <div className="px-4 py-5 bg-white sm:p-6">
    //               <div className="grid grid-cols-6 gap-6">
    //                 <div className="col-span-6 sm:col-span-3">
    //                   <label
    //                     htmlFor="first-name"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Prénom
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     autoComplete="given-name"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-3">
    //                   <label
    //                     htmlFor="last-name"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Nom
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="last-name"
    //                     id="last-name"
    //                     autoComplete="family-name"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-4">
    //                   <label
    //                     htmlFor="email-address"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Adresse mail
    //                   </label>
    //                   <p className="mt-1 text-sm text-gray-600">
    //                     Cette adresse sera utilisé pour communiquer avec vous et
    //                     pour la création de votre compte
    //                   </p>
    //                   <input
    //                     type="text"
    //                     name="email-address"
    //                     id="email-address"
    //                     autoComplete="email"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-3">
    //                   <label
    //                     htmlFor="country"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Pays
    //                   </label>
    //                   <select
    //                     id="country"
    //                     name="country"
    //                     autoComplete="country-name"
    //                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                   >
    //                     <option>France</option>
    //                     <option>France</option>
    //                     <option>France</option>
    //                   </select>
    //                 </div>

    //                 <div className="col-span-6">
    //                   <label
    //                     htmlFor="street-address"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Adresse
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="street-address"
    //                     id="street-address"
    //                     autoComplete="street-address"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-4">
    //                   <label
    //                     htmlFor="city"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Ville
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="city"
    //                     id="city"
    //                     autoComplete="address-level2"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="postal-code"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Code Postal
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="postal-code"
    //                     id="postal-code"
    //                     autoComplete="postal-code"
    //                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    //               <button
    //                 type="submit"
    //                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="hidden sm:block" aria-hidden="true">
    //     <div className="py-5">
    //       <div className="border-t border-gray-200" />
    //     </div>
    //   </div>

    //   <div className="mt-10 sm:mt-0">
    //     <div className="md:grid md:grid-cols-3 md:gap-6">
    //       <div className="md:col-span-1">
    //         <div className="px-4 sm:px-0">
    //           <h3 className="text-lg font-medium leading-6 text-gray-900">
    //             Livraison
    //           </h3>
    //           <p className="mt-1 text-sm text-gray-600">
    //             Decidez comment vous souhaitez recevoir votre vin
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-5 md:mt-0 md:col-span-2">
    //         <form action="">
    //           <div className="shadow overflow-hidden sm:rounded-md">
    //             <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
    //               <fieldset>
    //                 <legend className="sr-only">By Email</legend>
    //                 <div
    //                   className="text-base font-medium text-gray-900"
    //                   aria-hidden="true"
    //                 >
    //                   By Email
    //                 </div>
    //                 <div className="mt-4 space-y-4">
    //                   <div className="flex items-start">
    //                     <div className="flex items-center h-5">
    //                       <input
    //                         id="comments"
    //                         name="comments"
    //                         type="checkbox"
    //                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    //                       />
    //                     </div>
    //                     <div className="ml-3 text-sm">
    //                       <label
    //                         htmlFor="comments"
    //                         className="font-medium text-gray-700"
    //                       >
    //                         Comments
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when someones posts a comment on a
    //                         posting.
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="flex items-start">
    //                     <div className="flex items-center h-5">
    //                       <input
    //                         id="candidates"
    //                         name="candidates"
    //                         type="checkbox"
    //                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    //                       />
    //                     </div>
    //                     <div className="ml-3 text-sm">
    //                       <label
    //                         htmlFor="candidates"
    //                         className="font-medium text-gray-700"
    //                       >
    //                         Candidates
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when a candidate applies for a job.
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="flex items-start">
    //                     <div className="flex items-center h-5">
    //                       <input
    //                         id="offers"
    //                         name="offers"
    //                         type="checkbox"
    //                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    //                       />
    //                     </div>
    //                     <div className="ml-3 text-sm">
    //                       <label
    //                         htmlFor="offers"
    //                         className="font-medium text-gray-700"
    //                       >
    //                         Offers
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when a candidate accepts or rejects an
    //                         offer.
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </fieldset>
    //               <fieldset>
    //                 <legend className="contents text-base font-medium text-gray-900">
    //                   Mode de Livraison
    //                 </legend>
    //                 <p className="text-sm text-gray-500">
    //                   Sélectionnez le mode de livraison pour recevoir vos box.
    //                 </p>
    //                 <div className="mt-4 space-y-4">
    //                   <div className="flex items-center">
    //                     <input
    //                       id="push-everything"
    //                       name="push-notifications"
    //                       type="radio"
    //                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    //                     />
    //                     <label
    //                       htmlFor="push-everything"
    //                       className="ml-3 block text-sm font-medium text-gray-700"
    //                     >
    //                       Plateformes
    //                     </label>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <input
    //                       id="push-email"
    //                       name="push-notifications"
    //                       type="radio"
    //                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    //                     />
    //                     <label
    //                       htmlFor="push-email"
    //                       className="ml-3 block text-sm font-medium text-gray-700"
    //                     >
    //                       Livraison à domicile (+ 7,20€)
    //                     </label>
    //                   </div>
    //                 </div>
    //               </fieldset>
    //             </div>
    //             <div
    //               className="sealsubs-target-element"
    //               data-handle={carte.handle}
    //             ></div>
    //             <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    //               <button
    //                 onClick={() => {
    //                   addToCart(variant);
    //                 }}
    //                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export async function getStaticProps() {
  let carte = await getCarte("carte-prestige");
  let test2 = await test();
  return {
    props: {
      carte,
      test2,
    },
  };
}
