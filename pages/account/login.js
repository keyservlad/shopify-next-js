import Head from "next/head";
import RedirectToCheckout from "../../components/Auth/RedirectToCheckout";

const login = () => {
  return (
    <>
      <Head>
        <title>Emovin : Redirect to checkout</title>
      </Head>
      <RedirectToCheckout />
    </>
  );
};

export default login;
