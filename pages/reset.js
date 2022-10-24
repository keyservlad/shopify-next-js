import Head from "next/head";
import React from "react";
import Reset from "../components/Auth/Reset";

const reset = () => {
  return (
    <>
      <Head>
        <title>Emovin : Changement de mot de passe</title>
      </Head>
      <Reset />
    </>
  );
};

export default reset;
