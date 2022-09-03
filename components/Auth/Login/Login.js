import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "../../Loading";
import LoginCardsSection from "./LoginCardsSection";
import LoginForm from "./LoginForm";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "authenticated") {
    router.push("/mon-compte");
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/2 lg:bg-[#FAF8F7] lg:mt-20 lg:ml-20 lg:mb-5">
          <LoginForm />
        </div>
        <div className="lg:basis-1/2 bg-[#FAF8F7] lg:bg-white lg:mt-20 lg:mr-20 lg:mb-5">
          <LoginCardsSection />
        </div>
      </div>
    </>
  );
};

export default Login;
