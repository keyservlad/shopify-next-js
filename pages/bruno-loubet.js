import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import BrunoMembre from "../components/Loubet/Membre/Bruno-membre";
import BrunoPublic from "../components/Loubet/Public/Bruno-public";

const Brunoloubet = () => {
  const session = useSession();

  if (session.status === "loading") return <Loading />;
  if (session.status === "authenticated") {
    return <BrunoMembre />;
  }
  if (session.status === "unauthenticated") {
    return <BrunoPublic />;
  }
};

export default Brunoloubet;
