import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../../Loading";
import LoginCardsSection from "./LoginCardsSection";
import LoginForm from "./LoginForm";

const Login = React.memo(props => {
  const [isRouting, setIsRouting] = useState(false);
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") return <Loading />;
  if (session.status === "authenticated") {
    if (!isRouting) {
      router.push("/mon-compte");
    }
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    return (
      <>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:basis-1/2 lg:bg-[#FAF8F7] lg:mt-20 lg:ml-20 lg:mb-5">
            <LoginForm setIsRouting={setIsRouting} />
          </div>
          <div className="lg:basis-1/2 bg-[#FAF8F7] lg:bg-white lg:mt-20 lg:mr-20 lg:mb-5">
            <LoginCardsSection />
          </div>
        </div>
      </>
    );
  }
});

export default Login;
