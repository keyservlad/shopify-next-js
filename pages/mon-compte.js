import { useSession } from "next-auth/react";

const MonCompte = () => {
  const session = useSession();
  console.log(session);
  return <div>mon-compte</div>;
};

MonCompte.auth = true;
export default MonCompte;
