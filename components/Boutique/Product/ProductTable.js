import Image from "next/image";
import Imagealcool from "../../../public/images/product/alcool.svg";
import Imageappellation from "../../../public/images/product/appellation.svg";
import Imagebio from "../../../public/images/product/bio.svg";
import Imageboire_a_partir_de from "../../../public/images/product/boire_a_partir.svg";
import Imagecepages from "../../../public/images/product/cepage.svg";
import Imagecouleur from "../../../public/images/product/couleur.svg";
import Imagemillesime from "../../../public/images/product/millesime.svg";
import Imagenote_millesime from "../../../public/images/product/note_millesime.svg";
import Imagepotentiel from "../../../public/images/product/potentiel.svg";
import Imageregion from "../../../public/images/product/region.svg";

const ProductTable = ({ product }) => {
  return (
    <div className="py-12 px-9 mt-20 bg-white w-full rounded">
      <table className="table-auto w-full">
        <tbody className="">
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imageregion}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Région</td>
            <td className="font-bold">{product.productType}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imageappellation}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Appellation</td>
            <td className="font-bold">{product.appellation?.value}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagecouleur}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Couleur</td>
            <td className="font-bold">{product.couleur?.value}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagemillesime}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Millésime</td>
            <td className="font-bold">
              {product.millesime?.value ? product.millesime.value : "-"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagenote_millesime}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Note Millésime</td>
            <td className="font-bold">
              {product.note_millesime?.value
                ? product.note_millesime.value
                : "-"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagecepages}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Cépages</td>
            <td className="font-bold">
              {product.cepages?.value ? product.cepages.value : "-"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagealcool}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Alcool</td>
            <td className="font-bold">
              {product.alcool?.value ? product.alcool.value : "-"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagebio}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Vin bio</td>
            <td className="font-bold">
              {product.bio?.value ? "Vin bio" : "-"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imageboire_a_partir_de}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>A boire à partir de</td>
            <td className="font-bold">{product.boire_a_partir_de?.value}</td>
          </tr>
          <tr>
            <td className="py-2">
              <div className="relative aspect-1 w-5 mr-5">
                <Image
                  src={Imagepotentiel}
                  alt="image logo"
                  layout="fill"
                  quality={100}
                />
              </div>
            </td>
            <td>Potentiel de garde</td>
            <td className="font-bold">{product.potentiel_de_garde?.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
