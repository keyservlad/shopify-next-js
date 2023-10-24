import Footer from "./Footer";
import Nav2 from "./Nav2";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-[100vw]">
      {/* <Nav /> */}
      <Nav2 />
      <main id="main" className="overflow-hidden min-h-[64.4vh]">{children}</main>
      <Footer />
    </div>
  );
}
