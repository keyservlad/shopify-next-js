import { useRouter } from "next/router";
import Loading from "../Loading";
import ResetComp from "./ResetComp";

const Reset = () => {
  // TODO redirect if not valid url

  const router = useRouter();
  const { activation_url } = router.query;

  if (!router.isReady) {
    return <Loading />;
  }
  return <ResetComp activation_url={activation_url} />;
};

export default Reset;
