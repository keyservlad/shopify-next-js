import { useRouter } from "next/router";
import Loading from "../Loading";
import ActivateComp from "./ActivateComp";

const Activate = () => {
  // TODO redirect if not valid url

  const router = useRouter();
  const { activation_url } = router.query;

  if (!router.isReady) {
    return <Loading />;
  }
  return <ActivateComp activation_url={activation_url} />;
};

export default Activate;
