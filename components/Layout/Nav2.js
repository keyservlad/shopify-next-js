/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import ImageSerieLim from "../../public/images/HP/header-serie.png";
import ImageKrone from "../../public/images/HP/krone.png";
import Link from "next/link";

const navigation = {
  categories: [
    {
      id: "notre-cave",
      name: "Notre Cave",
      featured: [
        {
          name: "Série limitée",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
      ],
      sections: [
        {
          id: "en-ce-moment",
          name: "En ce moment",
          items: [
            { name: "Meilleures ventes", href: "#" },
            { name: "Mieux notés", href: "#" },
            { name: "Nos vins bio", href: "#" },
          ],
        },
        {
          id: "prix",
          name: "Prix",
          items: [
            { name: "Moins de 10 €", href: "#" },
            { name: "Entre 10 et 20 €", href: "#" },
            { name: "Entre 20 et 35 €", href: "#" },
            { name: "Plus de 35 €", href: "#" },
          ],
        },
        {
          id: "couleur",
          name: "Couleur",
          items: [
            { name: "Blancs", href: "#" },
            { name: "Rosés", href: "#" },
            { name: "Rouges", href: "#" },
            { name: "Effervescents", href: "#" },
          ],
        },
        {
          id: "region",
          name: "Région",
          items: [
            { name: "Bordeaux", href: "#" },
            { name: "Bourgogne", href: "#" },
            { name: "Vallée du Rhône", href: "#" },
            { name: "Savoie", href: "#" },
            { name: "Vallée de la Loire", href: "#" },
            { name: "Languedoc-Roussillon", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Bon Coup", href: "#" },
    { name: "Le concept", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav2() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white lg:sticky top-0 z-20 border-b border-gray-200">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="pt-10 pb-8 px-4 space-y-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute z-10 inset-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 p-2 block text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="w-full px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 mx-auto"
        >
          <div className="">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px focus:outline-none"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="w-full px-5 sm:px-10 xl:px-28 2xl:px-40 mx-auto">
                                  <div className="grid grid-cols-6 gap-y-10 gap-x-8 py-16">
                                    <div className="col-span-2">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm w-full h-full aspect-[1.44]"
                                        >
                                          <div className="rounded-lg overflow-hidden group-hover:opacity-75 group-hover:cursor-pointer relative w-full h-full">
                                            <Image
                                              src={ImageSerieLim}
                                              alt="Image series lim"
                                              layout="fill"
                                              objectFit="contain"
                                              quality={100}
                                              placeholder="blur"
                                            />
                                            <div className="absolute w-3/4 h-3/4 xl:px-10 border-2 z-30 left-0 right-0 top-0 bottom-0 m-auto border-[#DEC46F] text-center text-black flex flex-col justify-center items-center">
                                              <div className="w-16">
                                                <Image
                                                  src={ImageKrone}
                                                  alt="Image krone"
                                                  placeholder="blur"
                                                />
                                              </div>
                                              <h1 className="text-[#DEC46F] text-4xl mt-2">
                                                Série limitée
                                              </h1>
                                              <p className="text-sm font-semibold mt-1">
                                                Exclusivement réservée à nos
                                                membres
                                              </p>
                                              <p className="underline text-xs font-semibold mt-3">
                                                Je découvre
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-sm col-span-4">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                            <li className="flex">
                                              <a
                                                href="#"
                                                className="text-gray-900"
                                              >
                                                Voir tout
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-800 flex items-center"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
