import { useRouter } from "next/router";
import {
  completeCheckoutFree,
  createCheckout,
  createCheckoutGiftCard,
  setFreeShipping,
} from "../../lib/shopifyCheckout";

export default function GiftCard({ productsGiftCard }) {
  const router = useRouter();
  const firstOne = productsGiftCard[0].node.variants.nodes[0];
  console.log(firstOne);
  return (
    <div
      onClick={async () => {
        let checkout = await createCheckoutGiftCard(
          [{ id: firstOne.id, variantQuantity: 1 }],
          "guilhamat.arnaud@gmail.com"
        );
        console.log(checkout);

        const ratedCheckout = await setFreeShipping(checkout.id);
        const freeCheckout = await completeCheckoutFree(
          ratedCheckout.checkout.id
        );
        console.log(freeCheckout);
        // router.push(checkout.webUrl);
      }}
    >
      GiftCard
    </div>
  );
}
