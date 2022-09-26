import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CartContext } from "../context/ShopContext";
import { formatter } from "../utils/helper";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem, isCartLoading } =
    useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="relative z-50"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Panier
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            ref={cancelButtonRef}
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setCartOpen(false)}
                          >
                            <span className="sr-only">Fermer le panier</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {cart.length > 0 ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="relative w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 m-auto aspect-[0.65] max-h-96 sm:h-auto">
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      layout="fill"
                                      objectFit="contain"
                                      quality={50}
                                      className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          {/* TODO fix bug no link for lbc elements */}
                                          {product.handle.includes("carte") ? (
                                            product.title
                                          ) : (
                                            <Link
                                              href={`/product/${product.handle}`}
                                              passHref
                                            >
                                              <a
                                                onClick={() => {
                                                  setCartOpen(false);
                                                }}
                                              >
                                                {product.title}
                                              </a>
                                            </Link>
                                          )}
                                        </h3>
                                        <p className="ml-4">
                                          {formatter.format(
                                            product.variantPrice
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qté : {product.variantQuantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-redWine hover:text-pink-800"
                                          onClick={() => {
                                            removeCartItem(product.id);
                                          }}
                                        >
                                          Supprimer
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div>
                              <p>Panier vide...</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {cart.length > 0 ? (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Total</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Taxes incluse. Les frais de livraison sont calculés à
                          l&#39;étape de paiement
                        </p>
                        <div className="mt-6">
                          {isCartLoading ? (
                            <div
                              className={`flex items-center justify-center rounded-md border border-transparent bg-redWine px-6 py-3 text-base font-medium text-white shadow-sm`}
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
                            <>
                              <Link href={checkoutUrl} passHref>
                                <a className="flex items-center justify-center rounded-md border border-transparent bg-redWine px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-800">
                                  Procéder au Paiement
                                </a>
                              </Link>
                            </>
                          )}
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            ou{" "}
                            <button
                              type="button"
                              className="font-medium text-redWine hover:text-pink-800"
                              onClick={() => setCartOpen(false)}
                            >
                              Continuez vos achats
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
