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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition, Menu } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import ImageSerieLim from "../../public/images/HP/header-serie.png";
import ImageKrone from "../../public/images/HP/krone.png";
import ImageLogo from "../../public/images/logo_emovin-05.svg";
import Link from "next/link";
import { CartContext } from "../../context/ShopContext";
import MiniCart from "../MiniCart";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const navigation = {
  categories: [
    {
      id: "notre-cave",
      name: "Notre Boutique",
      featured: [
        {
          name: "Série limitée",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt: "Image series limitees",
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
            { name: "Blancs", href: "/notre-boutique/vins-blancs" },
            { name: "Rosés", href: "/notre-boutique/vins-roses" },
            { name: "Rouges", href: "/notre-boutique/vins-rouges" },
            {
              name: "Effervescents",
              href: "/notre-boutique/vins-effervescents",
            },
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
    { name: "Le Concept", href: "#" },
    { name: "Série Limitée", href: "#" },
    { name: "Coin du chef", href: "/bruno-loubet" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav2() {
  const session = useSession();
  // console.log(session);

  const router = useRouter();

  const { cart, cartOpen, setCartOpen, user, fetchUser, fixAuthCheckout } =
    useContext(CartContext);

  const [open, setOpen] = useState(false);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  const fetchUserAndFixAuthCheckout = async () => {
    await fetchUser(session.data.user.token.accessToken);
    await fixAuthCheckout();
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      fetchUserAndFixAuthCheckout();
    } else if (session.status === "unauthenticated") {
      // TODO Check that the cart is unauthenticated and discounts disabled => swap the products in case
      fixAuthCheckout();
    }
  }, [session.status]);

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
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400 focus:outline-none"
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="w-full px-5 sm:px-10 xl:px-14 2xl:px-28 mx-auto"
        >
          <div className="">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden focus:outline-none"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 h-full">
                <span className="sr-only">Workflow</span>
                <Link href="/" passHref>
                  <a className="relative cursor-pointer lg:px-4 h-full flex items-center">
                    {/* <span className="text-lg pt-1 font-bold">Emovin</span> */}
                    <Image src={ImageLogo} alt="logo" height={35} width={100} />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-3 xl:space-x-6 2xl:space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-redWine text-redWine"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px focus:outline-none"
                              )}
                            >
                              {category.id == "notre-cave" ? (
                                <div className="flex flex-row items-center">
                                  <p className="mr-2">{category.name}</p>
                                  <ChevronDownIcon
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                  />
                                </div>
                              ) : (
                                category.name
                              )}
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
                                  <Link
                                    onClick={() => {
                                      setOpen(false);
                                    }}
                                    href={"/notre-boutique"}
                                  >
                                    <a>
                                      <h1 className="w-fit p-3 mb-3 mx-auto text-redWine cursor-pointer">
                                        Notre boutique
                                      </h1>
                                    </a>
                                  </Link>
                                  <div className="grid grid-cols-6 gap-x-8 pb-16">
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
                                                href="/notre-boutique"
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

              <div className="ml-auto flex items-center text-redWine">
                <div className="hidden lg:flex flex-1 items-center justify-end space-x-6">
                  <div className="text-sm font-medium flex flex-row items-center">
                    {session.status === "loading" ||
                    (!user && session.status === "authenticated") ? (
                      <>
                        <Skeleton
                          circle
                          height="100%"
                          containerClassName="h-6 w-6 mr-2 leading-none"
                        />
                        <Skeleton width={70} containerClassName="" />
                      </>
                    ) : session.status === "authenticated" ? (
                      <>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div className="inline-flex items-center w-full justify-center py-2 text-sm font-medium focus:outline-none">
                            <Link href={"/mon-compte"} passHref>
                              <a className="inline-flex items-center w-full justify-center py-2 text-sm font-medium focus:outline-none">
                                <UserIcon
                                  className="h-6 w-6 mr-2"
                                  aria-hidden="true"
                                />
                                <p className="mr-2">{user.firstName}</p>
                              </a>
                            </Link>

                            <Menu.Button className="">
                              <ChevronDownIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => {
                                        router.push("/mon-compte");
                                      }}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm"
                                      )}
                                    >
                                      Mon compte
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => signOut()}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm"
                                      )}
                                    >
                                      Se déconnecter
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-1 items-center justify-end space-x-3 xl:space-x-6">
                          <Link
                            href={{
                              pathname: "/login",
                              query: {
                                callbackUrl:
                                  `${window.location.origin}` + router.asPath,
                              },
                            }}
                            passHref
                          >
                            <a className="">
                              <div className="">Se&nbsp;connecter</div>
                            </a>
                          </Link>

                          <span
                            className="h-6 w-px bg-gray-200"
                            aria-hidden="true"
                          />
                          <Link href="/cartes" passHref>
                            <a className="">
                              <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-redWine border-redWine focus:outline-none">
                                Devenir membre
                              </div>
                            </a>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Search */}
                {/* TODO remove or add search in notre boutique page */}
                {/* <div className="flex lg:ml-3 xl:ml-6">
                  <button
                    href="#"
                    className="p-2 hover:opacity-70 hover:cursor-pointer"
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div> */}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    className="text-md font-bold cursor-pointer group -m-2 p-2 flex items-center"
                    onClick={() => {
                      setCartOpen(!cartOpen);
                    }}
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 group-hover:opacity-70"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium group-hover:opacity-70">
                      {cartQuantity}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                  <MiniCart cart={cart} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
