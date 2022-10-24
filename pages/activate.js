import Head from "next/head";
import Activate from "../components/Auth/Activate";

const activate = () => {
  return (
    <>
      <Head>
        <title>Emovin : Activation du compte</title>
      </Head>
      <Activate />
    </>
  );
};

export default activate;
