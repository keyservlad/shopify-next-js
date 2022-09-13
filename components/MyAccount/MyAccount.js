import { useSession } from "next-auth/react";
import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  ArrowCircleRightIcon
} from "@heroicons/react/outline";
import { CartContext } from "../../context/ShopContext";
import Profile from "./SubSections/Profile/Profile";
import MesAvantages from "./SubSections/MesAvantages";
import Historique from "./SubSections/Historique";
import NewPassword from "./SubSections/NewPassword";
import Loading from "../Loading";
import Link from "next/link";
import MaCarteMembre from "./SubSections/Cartes/MaCarteMembre";

// TODO add a loading state during the fetch
const subNavigation = [
  { name: "Profil", component: <Profile />, icon: UserCircleIcon },
  { name: "Ma Carte Membre", component: <MaCarteMembre />, icon: CogIcon },
  {
    name: "Mes avantages fidélité",
    component: <MesAvantages />,
    icon: KeyIcon,
  },
  {
    name: "Historique de commandes ",
    component: <Historique />,
    icon: BellIcon,
  },
  { name: "Autres services", component: "#", icon: CreditCardIcon },
  {
    name: "Le coin du chef",
    icon: ViewGridAddIcon,
    isLink: true,
    href: "/bruno-loubet",
  },
  {
    name: "Changement de mot de passe",
    component: <NewPassword />,
    icon: KeyIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyAccount = () => {
  const session = useSession();
  console.log(session);

  const { user } = useContext(CartContext);
  console.log(user);

  const [current, setCurrent] = useState(subNavigation[0]);

  if (!user) return <Loading />;

  return (
    <div>
      <Disclosure
        as="div"
        className="relative bg-sky-700 pb-32 overflow-hidden"
      >
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
          >
            <div className="absolute inset-0 flex">
              <div
                className="h-full w-1/2"
                style={{ backgroundColor: "#0a527b" }}
              />
              <div
                className="h-full w-1/2"
                style={{ backgroundColor: "#065d8c" }}
              />
            </div>
            <div className="relative flex justify-center">
              <svg
                className="flex-shrink-0"
                width={1750}
                height={308}
                viewBox="0 0 1750 308"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                  fill="#0369a1"
                />
                <path
                  d="M1465.84 308L16.816 0H1750v308h-284.16z"
                  fill="#065d8c"
                />
                <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                <path
                  d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                  fill="#0a4f76"
                />
              </svg>
            </div>
          </div>
          <header className="relative py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-bold text-white">
                Bonjour {user.firstName} !
              </h1>
            </div>
          </header>
        </>
      </Disclosure>

      <main className="relative -mt-32">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) =>
                    item.isLink ? (
                      <Link href={item.href} passHref key={item.name}>
                        <a
                          target="_blank"
                          key={item.name}
                          className={classNames(
                            item.name === current.name
                              ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                              : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                            "group border-l-4 px-3 py-2 flex items-center text-sm font-medium cursor-pointer"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.name === current.name
                                ? "text-teal-500 group-hover:text-teal-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">{item.name}</span>
                          <ArrowCircleRightIcon className="flex-shrink-0 ml-auto mr-3 h-6 w-6"/>
                        </a>
                      </Link>
                    ) : (
                      <div
                        key={item.name}
                        onClick={() => setCurrent(item)}
                        className={classNames(
                          item.name === current.name
                            ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                            : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium cursor-pointer"
                        )}
                        aria-current={
                          item.name === current.name ? "page" : undefined
                        }
                      >
                        <item.icon
                          className={classNames(
                            item.name === current.name
                              ? "text-teal-500 group-hover:text-teal-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </div>
                    )
                  )}
                </nav>
              </aside>

              {current.component}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyAccount;
