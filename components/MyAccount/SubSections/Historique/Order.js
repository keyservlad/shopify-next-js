import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Order = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 cursor-pointer"
      >
        <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
          <div>
            <dt className="font-medium text-gray-900">Numéro de commande </dt>
            <dd className="mt-1 text-gray-500">#{order.orderNumber}</dd>
          </div>
          <div className="hidden sm:block">
            <dt className="font-medium text-gray-900">Date</dt>
            <dd className="mt-1 text-gray-500">
              <time dateTime={order.processedAt}>{order.processedAt}</time>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-900">Total TTC</dt>
            <dd className="mt-1 font-medium text-gray-900">
              {order.totalPriceV2.amount} €
            </dd>
          </div>
        </dl>

        <Menu as="div" className="relative flex justify-end lg:hidden">
          <div className="flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                Options for order {order.orderNumber}
              </span>
              <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href={""} passHref>
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Ma facture
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span>{isOpen ? "Voir moins" : "Voir plus"}</span>
            {isOpen ? (
              <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">{order.orderNumber}</span>
          </button>
          <Link href={""} passHref>
            <a className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span>Ma facture</span>
            </a>
          </Link>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Products */}
        <h4 className="sr-only">Items</h4>
        <ul role="list" className="divide-y divide-gray-200">
          {order.lineItems.nodes.map((product) => (
            <li key={product.id} className="p-4 sm:p-6">
              <div className="flex items-center sm:items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden sm:w-30 sm:h-30 relative">
                  <Image
                    src={
                      product.variant?.image.url
                        ? product.variant?.image.url
                        : "/images/loader.gif"
                    }
                    alt={product.variant?.image.altText}
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    className="bg-[url('/images/loader.gif')] bg-center bg-cover bg-no-repeat"
                  />
                </div>
                <div className="flex-1 ml-6 text-sm">
                  <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                    <h5>{product.title}</h5>
                    <p className="mt-2 sm:mt-0">
                      {product.originalTotalPrice.amount} €
                    </p>
                  </div>
                  <p className="hidden text-gray-500 sm:block sm:mt-2">
                    {/* {product.description} */}
                  </p>
                </div>
              </div>

              {/* <div className="mt-6 sm:flex sm:justify-between">
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm font-medium text-gray-500">
                    Delivered on{" "}
                    <time dateTime={order.deliveredDatetime}>
                      {order.deliveredDate}
                    </time>
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                  <div className="flex-1 flex justify-center">
                    <a
                      href={product.href}
                      className="text-indigo-600 whitespace-nowrap hover:text-indigo-500"
                    >
                      View product
                    </a>
                  </div>
                  <div className="flex-1 pl-4 flex justify-center">
                    <a
                      href="#"
                      className="text-indigo-600 whitespace-nowrap hover:text-indigo-500"
                    >
                      Buy again
                    </a>
                  </div>
                </div>
              </div> */}
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default Order;
