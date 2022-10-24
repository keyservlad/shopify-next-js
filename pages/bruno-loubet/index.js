import { useSession } from "next-auth/react";
import Head from "next/head";
import Loading from "../../components/Loading";
import BrunoMembre from "../../components/Loubet/Membre/Bruno-membre";
import BrunoPublic from "../../components/Loubet/Public/Bruno-public";

const Brunoloubet = () => {
  const session = useSession();

  if (session.status === "loading") return <Loading />;
  if (session.status === "authenticated") {
    return (
      <>
        <Head>
          <title>Emovin : Bruno Loubet membres</title>
        </Head>
        <BrunoMembre />
      </>
    );
  }
  if (session.status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Emovin : Bruno Loubet Public</title>
        </Head>
        <BrunoPublic />
      </>
    );
  }
};

export default Brunoloubet;
