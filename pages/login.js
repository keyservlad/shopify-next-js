import LoginCardsSection from "../components/Auth/LoginCardsSection";
import LoginForm from "../components/Auth/LoginForm";

// TODO add notification when user is created with router
const login = () => {
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

export default login;
