import { useRouter } from "next/router";
import Loading from "../Loading";

const RedirectToCheckout = () => {
  const router = useRouter();

  const { checkout_url } = router.query;

  if (checkout_url) {
    router.push("https://lacavepourtoustest.myshopify.com/" + checkout_url);
  }
  return (
    <>
      <h1 className="text-center text-redWine">
        Veuillez ignorer ce bouton, merci de votre compréhension
      </h1>
      <Loading />
    </>
  );
};

export default RedirectToCheckout;
