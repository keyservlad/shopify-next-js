import Head from "next/head";
import ToutBu from "../components/LBC/ToutBu";

const serieLimitee = () => {
  return (
    <>
      <Head>
        <title>Emovin : Série limitée</title>
      </Head>
      <ToutBu page={"serieLim"} />
    </>
  );
};

export default serieLimitee;
