import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { CartContext } from "../../../../context/ShopContext";

export default function QuickView({ product, open, setOpen }) {
  const { user } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const orderVinotheque = async () => {
    setIsLoading(true);
    // TODO order vinotheque
    setIsLoading(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen} open={open}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5 flex h-full">
                      <div className="aspect-1 max-w-[250px] overflow-hidden rounded-lg relative">
                        <Image
                          src={product?.node.images.edges[0].node.originalSrc}
                          alt={product?.node.images.edges[0].node.altText}
                          layout="fill"
                          objectFit="contain"
                          quality={100}
                          className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product?.node.title} {product?.node.millesime.value}
                      </h2>
                      {product?.node.description && (
                        <p className="font-semibold">
                          {product?.node.description}
                        </p>
                      )}
                      <p>{product?.node.productType}</p>
                      <p>{product?.node.appellation.value}</p>
                      <p>{product?.node.couleur.value}</p>
                      <p>{product?.node.vendor}</p>
                      <p>{product?.node.cepages.value}</p>
                      <p className="text-red-500">
                        {product?.node.accroche.value}
                      </p>
                      <p>lot de {product?.node.unite.value} bouteilles</p>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        {parseInt(user.points.value) <
                        parseInt(product?.node.points.value) ? (
                          <div className="cursor-not-allowed mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-redWine py-3 px-8 text-base font-medium text-white opacity-75 focus:outline-none focus:ring-2 focus:ring-redWine focus:ring-offset-2">
                            Pas assez de points
                          </div>
                        ) : isLoading ? (
                          <div className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-redWine py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-redWine focus:ring-offset-2">
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
                            onClick={() => orderVinotheque()}
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-redWine py-3 px-8 text-base font-medium text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-redWine focus:ring-offset-2"
                          >
                            Commander
                          </button>
                        )}
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
