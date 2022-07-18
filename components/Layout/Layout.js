import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-[100vw] overflow-hidden">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
