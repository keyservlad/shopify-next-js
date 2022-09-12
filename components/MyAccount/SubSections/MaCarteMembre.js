import { useContext } from "react";
import { CartContext } from "../../../context/ShopContext";

const MaCarteMembre = () => {
  const { user, fetchUser } = useContext(CartContext);

  let expirationDate = new Date(user?.expirationDate.value);
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  expirationDate = expirationDate.toLocaleDateString("fr-FR", dateOptions);

  return (
    <div className="lg:col-span-9 px-4 sm:px-6 py-6">
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-redWine">Ma carte membre</h1>
        <div className="mt-6">
          <p className="font-bold">Mon status de membre :</p>
          <p className="">Valable jusqu'au {expirationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MaCarteMembre;
