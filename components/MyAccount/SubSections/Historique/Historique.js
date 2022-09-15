import { useContext } from "react";
import { CartContext } from "../../../../context/ShopContext";
import Order from "./Order";

const orderss = [
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  // More orders...
];

export default function Historique() {
  const { user } = useContext(CartContext);
  const orders = user.orders.nodes;
  console.log(orders);
  return (
    <div className="lg:col-span-9 py-6 flex flex-col items-center px-4 sm:px-10">
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0 text-center">
          <h1 className="tracking-tight text-redWine">
            Mon historique de commandes
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Consultez l'historique de toutes vos commandes.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="sr-only">Recent orders</h2>
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {orders.map((order) => (
              <Order order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
