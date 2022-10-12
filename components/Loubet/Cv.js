import Image from "next/image";
import heroCV from "../../public/images/bruno/histoire_bruno_1.png";
import ImageFeuille from "../../public/images/bruno/feuilleButton.png";
import ImageLine from "../../public/images/bruno/histoire_line.png";

const Cv = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="relative w-full aspect-[3.05738583]">
          <Image
            src={heroCV}
            alt="Image fond d'écran bruno"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hidden lg:block absolute top-0 right-10 2xl:right-40 w-2/5 2xl:w-1/3 bottom-0">
          <div className="my-auto h-full flex flex-col justify-center">
            <h1 className="text-white">
              Bruno Loubet, une légende à part entière
            </h1>
            <p className="mt-5 text-white">
              Bruno a passé plus de 40 ans à la tête de cuisines à Londres, en
              France et en Australie, travaillant avec des chefs de renommée
              mondiale. Devenu une légende à part entière, il a obtenu une
              étoile Michelin, publié trois livres de cuisine et fait plusieurs
              apparitions à la télévision au cours de sa carrière.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-10 sm:px-20 lg:px-40 xl:px-56 2xl:px-80">
        <h1 className="mt-10">Bruno Loubet, une légende à part entière</h1>
        <p className="mt-5">
          Bruno a passé plus de 40 ans à la tête de cuisines à Londres, en
          France et en Australie, travaillant avec des chefs de renommée
          mondiale. Devenu une légende à part entière, il a obtenu une étoile
          Michelin, publié trois livres de cuisine et fait plusieurs apparitions
          à la télévision au cours de sa carrière.
        </p>
      </div>
      <div className="px-5 sm:px-10 lg:px-40 xl:px-56 2xl:px-80 my-20">
        <div className="flex flex-row items-center">
          <div className="relative w-20 aspect-1 rotate-180 mr-3">
            <Image
              src={ImageFeuille}
              alt="Image feuille"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <h1 className="text-5xl font-normal">Sa biographie</h1>
        </div>
        <table className="table-auto mt-10">
          <tbody>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">1961</td>
              <td className="pb-7">Naissance à Bordeaux</td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">
                1976&nbsp;-&nbsp;1979
              </td>
              <td className="pb-7">Lycée Hotelier de Bordeaux-Talence</td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">
                1979&nbsp;-&nbsp;1985
              </td>
              <td className="pb-7">
                Commis de cuisine : Hôtel Hyatt Regency Bruxelles, Restaurant à
                Copenhague, Restaurant “Tante Claire” à Londres
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                1985
              </td>
              <td className="pb-7 text-[#89B65F]">
                Meilleur jeune chef de l&#39;année (Good Food Guide)
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">
                1985&nbsp;-&nbsp;1990
              </td>
              <td className="pb-7">
                Chef de cuisine : Restaurant “Fuhlam” à Londres, Restaurant “Le
                manoir aux quat&#39;saisons” (2 étoiles Michelin), “Le petit
                blanc” à Oxford, Hôtel Four Seasons à Londres
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                1990
              </td>
              <td className="pb-7 text-[#89B65F] font-bold">
                1 étoile au guide Michelin
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 ">
                1992&nbsp;-&nbsp;1997
              </td>
              <td className="pb-7">
                Ouverture des restaurants &#34;Le Bistrot Bruno&#34; en 1992 et
                &#34;L&39;Odéon&#34; en 1995 à Londres
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                1993&nbsp;&&nbsp;1995
              </td>
              <td className="pb-7 text-[#89B65F]">
                The Times Restaurant of the Year
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">
                1998&nbsp;-&nbsp;2001
              </td>
              <td className="pb-7">
                Chef du développement : &#34;The Atlantic Bar and Grill&#34; à Londres,
                Restaurant &#34;Isola&#34; à Manchester
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2001</td>
              <td className="pb-7">
                <p>Bruno déménage à Brisbane (Australie)</p>
                <p>
                  Ouverture des restaurants &#34;La Table de Bruno&#34; et &#34;Baguette
                  Restaurant&#34;
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                2004&nbsp;&&nbsp;2005
              </td>
              <td className="pb-7 text-[#89B65F]">
                Elu &#34;Cuisinier de l&#39;année&#34; deux années de suite par le
                journal australien &#34;The Courier Mail&#34;
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2009</td>
              <td className="pb-7">
                <p>Retour à Londres</p>
                <p>
                  Ouverture des restaurants &#34;Pop-up&#34; puis &#34;Bistrot Bruno Loubet&#34;
                  en 2010
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                2010
              </td>
              <td className="pb-7 text-[#89B65F]">
                Elu 3ème meilleur restaurant du Royaume-Uni (National Restaurant
                Guide)
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2013</td>
              <td className="pb-7">
                Bruno lance le restaurant &#34;Grain Store&#34; à Londres
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5 text-[#89B65F]">
                2013
              </td>
              <td className="pb-7 text-[#89B65F]">
                <p>
                  Elu &#34;Sustainable Restaurant of the year&#34; (National Restaurant
                  Guide)
                </p>
                <p>
                  et classé 9ème de la liste des 100 meilleurs restaurants du
                  Royaume (National Restaurant Guide)
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2017</td>
              <td className="pb-7">
                <p>
                  Bruno ferme le chapitre &#34;anglais&#34; et retourne en Australie
                  (près de Brisbane).
                </p>
                <p>
                  Il ouvre une ferme et crée une école de cuisine &#34;Willow Vale
                  Cooking School&#34;.
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2022</td>
              <td className="pb-7">Bruno rejoint l&#39;équipe EMOVIN</td>
            </tr>
          </tbody>
        </table>

        <div className="relative w-full h-1 my-10">
          <Image src={ImageLine} layout="fill" objectFit="cover" />
        </div>

        <div className="flex flex-row items-center">
          <div className="relative w-20 aspect-1 rotate-180 mr-3">
            <Image
              src={ImageFeuille}
              alt="Image feuille"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <h1 className="text-5xl font-normal">Ses livres et publications</h1>
        </div>
        <table className="table-auto">
          <tbody>
            <tr className="invisible">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">
                1961&nbsp;&&nbsp;1961
              </td>
              <td className="pb-7">N</td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">1992</td>
              <td className="pb-7">Cuisine Courante</td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">1995</td>
              <td className="pb-7">Bistrot Bruno</td>
            </tr>
            <tr className="">
              <td className="font-bold md:text-xl text-base pb-7 pr-5">2013</td>
              <td className="pb-7">Mange Tout</td>
            </tr>
          </tbody>
        </table>

        <div className="relative w-full h-1 my-10">
          <Image src={ImageLine} layout="fill" objectFit="cover" />
        </div>

        <div className="flex flex-row items-center">
          <div className="relative w-20 aspect-1 rotate-180 mr-3">
            <Image
              src={ImageFeuille}
              alt="Image feuille"
              objectFit="contain"
              quality={100}
              placeholder="blur"
            />
          </div>
          <h1 className="text-5xl font-normal">Bruno à la télé</h1>
        </div>
        <p>
          Bruno a fait plusieurs apparaitions à la télévision, y compris sa
          propre série de 13 épisodes, &#34;Chez Bruno&#34;, pour le Food Network
          Carlton, ainsi que sur les relais Hot Chefs de la BBC, &#34;Junior
          MasterChef&#34;, et &#34;MasterChef United Kingdom&#34; en tant que Chef invité et
          mentor.
        </p>
      </div>
    </>
  );
};

export default Cv;
