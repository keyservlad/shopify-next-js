import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ImageLogo from "../../public/images/logo_emovin-05.svg";
import ImageTacheFooter from "../../public/images/mini-logos/tache-footer.png";
import Contact from "../Contact/contact";

const navigation = [
  { name: "Notre Boutique", href: "/notre-boutique" },
  { name: "Le Bon Coup", href: "/le-bon-coup" },
  { name: "Le Concept", href: "/notre-concept" },
];

const navigation2 = [
  {
    name: <>Conditions d&#39;utilisation</>,
    href: "/politiques/conditions-utilisation",
  },
  { name: "Mentions légales", href: "/politiques/mentions-legales" },
  {
    name: "Politique de confidentialité",
    href: "/politiques/politique-de-confidentialite",
  },
  {
    name: "Politique de remboursement",
    href: "/politiques/politique-de-remboursement",
  },
  {
    name: <>Politique d&#39;expédition</>,
    href: "/politiques/politique-expedition",
  },
  {
    name: <>Politique de résiliation</>,
    href: "/politiques/politique-resiliation",
  },
];

export default function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row items-center w-full px-5 sm:px-10 xl:px-14 2xl:px-28 mx-auto overflow-hidden py-5 lg:px-8">
          {/* Logo */}
          <nav className="">
            <span className="sr-only">Logo EMOVIN</span>
            <Link href="/" passHref>
              <a className="relative cursor-pointer lg:px-4 h-full flex items-center">
                {/* <span className="text-lg pt-1 font-bold">Emovin</span> */}
                <Image src={ImageLogo} alt="logo" height={52.5} width={150} />
              </a>
            </Link>
          </nav>
          <nav className="hidden md:block ml-auto relative">
            <Image
              src={ImageTacheFooter}
              alt="tache"
              height={120}
              width={120}
              placeholder="blur"
              quality={100}
            />
          </nav>
          <nav className="mt-7 md:mt-0 flex flex-col flex-wrap justify-center items-center">
            {navigation.map((item, i) => (
              <Link href={item.href} passHref key={i}>
                <a className="text-gray-500 hover:text-gray-900">{item.name}</a>
              </Link>
            ))}
            <button
              onClick={() => {
                setIsContactFormOpen(true);
              }}
              className="bg-redWine text-white px-5 py-2 rounded-lg mt-3 hover:bg-white hover:text-redWine border border-redWine"
            >
              Nous contacter
            </button>
          </nav>
        </div>
        <p className="mb-7 text-gray-500 text-center">
          L&#39;abus d&#39;alcool est dangereux pour la santé, à consommer avec
          modération
        </p>
        {/* <p className="mt-8 text-center text-gray-400">&copy;2022 Emovin</p> */}
        <nav className="bg-black w-full text-white flex flex-col md:flex-row md:gap-x-4 md:justify-end text-center py-5 text-sm gap-y-2 px-4">
          {navigation2.map((item, i) => (
            <Link href={item.href} passHref key={i}>
              <a>{item.name}</a>
            </Link>
          ))}
        </nav>
      </footer>
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
}
