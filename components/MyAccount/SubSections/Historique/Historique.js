import { useContext } from "react";
import { CartContext } from "../../../../context/ShopContext";
import Order from "./Order";

export default function Historique() {
  const { user } = useContext(CartContext);
  const orders = user.orders.nodes;
  return (
    <div className="lg:col-span-9 py-6 flex flex-col items-center px-4 sm:px-10">
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0 text-center">
          <h1 className="tracking-tight text-redWine">
            Mon historique de commandes
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Consultez l&#39;historique de toutes vos commandes.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="sr-only">Recent orders</h2>
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {orders.map((order) => (
              <Order order={order} key={order.orderNumber} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
