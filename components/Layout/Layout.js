import Footer from "./Footer";
import Nav2 from "./Nav2";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-[100vw]">
      {/* <Nav /> */}
      <Nav2 />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
