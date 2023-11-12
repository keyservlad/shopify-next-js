import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import Printemps from "../../../public/images/page-cartes/savoir-plus/printemps.png";
import DecouverteAutomne from "../../../public/images/page-cartes/savoir-plus/decouverte-automne.png";
import ImmanquablesAutomne from "../../../public/images/page-cartes/savoir-plus/immanquables-automne.png";
import PrestigeAutomne from "../../../public/images/page-cartes/savoir-plus/prestige-automne.png";
import Boutique from "../../../public/images/page-cartes/savoir-plus/boutique.png";
import Fidelite from "../../../public/images/page-cartes/savoir-plus/fidelite.png";
import BonCoup from "../../../public/images/page-cartes/savoir-plus/bon-coup.png";
import ConseilPersonnalise from "../../../public/images/page-cartes/savoir-plus/conseil-personnalise.png";
import SiteWeb from "../../../public/images/page-cartes/savoir-plus/site-web.png";
import AuditCave from "../../../public/images/page-cartes/savoir-plus/audit-cave.png";

import Image from "next/image";

export default function SavoirPlus({ open, setOpen, imageContext }) {
  const cancelButtonRef = useRef(null);

  const [image, setImage] = useState(Printemps);

  useEffect(() => {
    switch (imageContext) {
      case "Printemps":
        setImage(Printemps);
        break;
      case "DecouverteAutomne":
        setImage(DecouverteAutomne);
        break;
      case "ImmanquablesAutomne":
        setImage(ImmanquablesAutomne);
        break;
      case "PrestigeAutomne":
        setImage(PrestigeAutomne);
        break;
      case "Boutique":
        setImage(Boutique);
        break;
      case "Fidelite":
        setImage(Fidelite);
        break;
      case "BonCoup":
        setImage(BonCoup);
        break;
      case "ConseilPersonnalise":
        setImage(ConseilPersonnalise);
        break;
      case "Soiree":
        setImage(DecouverteAutomne);
        break;
      case "SiteWeb":
        setImage(SiteWeb);
        break;
      case "AuditCave":
        setImage(AuditCave);
        break;

      default:
        setImage(Printemps);
    }
  }, [imageContext]);

  const isImageSquare =
    imageContext === "Printemps" ||
    imageContext === "DecouverteAutomne" ||
    imageContext === "ImmanquablesAutomne" ||
    imageContext === "PrestigeAutomne";

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl m-auto">
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <div className="ml-3 flex justify-end h-7 items-center z-[51]">
                    <button
                      ref={cancelButtonRef}
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Fermer le formulaire</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className={`m-auto max-w-full relative ${isImageSquare ? "aspect-1" : "aspect-[16/9]"}`}>
                    <Image
                      src={image}
                      alt="Savoir plus"
                      layout="fill"
                      quality={100}
                      placeholder="blur"
                    />
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
