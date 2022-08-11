import Footer from "./Footer";
import Nav2 from "./Nav2";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-[100vw]">
      {/* <Nav /> */}
      <Nav2 />
      <main className="overflow-hidden min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
}
