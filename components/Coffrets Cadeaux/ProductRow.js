import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import React from "react";

const ProductRow = ({ product, i, arr, orderState, setOrderState }) => {
  return (
    <>
      <div className="flex text-sm">
        <p
          className={`mr-10 pt-4 ${
            arr.length - 1 !== i ? "border-b w-full border-[#E6E6E6] pb-4" : ""
          } `}
        >
          {product.node.title}
          {product.node.vendor !== "empty" ? (
            <>&nbsp;| {product.node.vendor}</>
          ) : (
            ""
          )}
          {product.node.millesime?.value ? (
            <>&nbsp;| {product.node.millesime?.value}</>
          ) : (
            ""
          )}
        </p>
        <div className="ml-auto flex items-center">
          <button
            onClick={() => {
              if (orderState[i].quantity > 0) {
                setOrderState({
                  ...orderState,
                  [i]: {
                    ...orderState[i],
                    quantity: orderState[i].quantity - 1,
                  },
                });
              }
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
          >
            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="mx-2">{orderState[i].quantity}</p>
          <button
            onClick={() => {
              if ((orderState[i].product.variants.nodes[0].availableForSale && orderState[i].product.variants.nodes[0].quantityAvailable == 0) ||
               (orderState[i].quantity < orderState[i].product.variants.nodes[0].quantityAvailable )) {
                setOrderState({
                  ...orderState,
                  [i]: {
                    ...orderState[i],
                    quantity: orderState[i].quantity + 1,
                  },
                });
              }
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm bg-[#E6E6E6]"
          >
            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductRow;
