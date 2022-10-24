import Head from "next/head";
import Login from "../components/Auth/Login/Login";
// TODO add notification when user is created with router & password modified
const login = () => {
  return (
    <>
      <Head>
        <title>Emovin : Login</title>
      </Head>
      <Login />
    </>
  );
};

export default login;
