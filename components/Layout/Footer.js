import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ImageLogo from "../../public/images/logo_emovin-05.svg";
import Contact from "../Contact/contact";

const navigation = [
  { name: "Notre Boutique", href: "#" },
  { name: "Le Bon Coup", href: "#" },
  { name: "Le Concept", href: "#" },
];

export default function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-[#E5E5E5]">
        <div className="flex flex-col items-center max-w-7xl mx-auto py-10 px-4 overflow-hidden sm:px-6 lg:px-8">
          {/* Logo */}
          <nav className="">
            <span className="sr-only">Logo EMOVIN</span>
            <Link href="/" passHref>
              <a className="relative cursor-pointer lg:px-4 h-full flex items-center">
                {/* <span className="text-lg pt-1 font-bold">Emovin</span> */}
                <Image src={ImageLogo} alt="logo" height={42} width={120} />
              </a>
            </Link>
          </nav>
          <nav className="hidden md:block">Image tache</nav>
          <nav className="mt-7 flex flex-col flex-wrap justify-center">
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
          {/* <p className="mt-8 text-center text-gray-400">&copy;2022 Emovin</p> */}
        </div>
        <nav className="bg-black w-full text-white flex flex-col">

        </nav>
      </footer>
      <Contact open={isContactFormOpen} setOpen={setIsContactFormOpen} />
    </>
  );
}
