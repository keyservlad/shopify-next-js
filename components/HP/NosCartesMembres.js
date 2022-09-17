import Link from "next/link";

const NosCartesMembres = (props) => {
  return (
    <div className="w-full bg-[#8D0955] px-5 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 relative">
      <div className="absolute -top-10" ref={props.refButtonHeroHP}></div>
      <div className="text-white border-solid rounded-xl border-white border-[1px] px-5 py-3 inline-block uppercase mt-14 mb-11">
        Nos cartes membre
      </div>
      <div className="pb-11 sm:pb-28 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-24">
        <div className="">
          <h1 className="text-white text-4xl sm:text-5xl font-normal sm:font-bold">
            Devenez membre d&#39;une communauté d&#39;amateurs de vin qui
            s&#39;intéresse à vous&nbsp;!
          </h1>
        </div>
        <div className="mt-12 sm:mt-0">
          <div className="text-white">
            Réunir tous les passionnés «&nbsp;d&#39;art de vivre&nbsp;» autour
            du vin… Celui que l&#39;on achète en toute confiance et que l&#39;on
            a plaisir à partager avec ses amis.
          </div>
          <div className="mt-6 flex text-center sm:inline-block">
            <Link href="/cartes" passHref>
              <a>
                <button className="bg-redWine text-white font-bold border-solid rounded-xl border-redWine border-[3px] px-5 py-3 cursor-pointer w-full sm:w-auto hover:border-white hover:bg-[#8D0955]">
                  Tous les avantages du club
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosCartesMembres;
