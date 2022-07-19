import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-[100vw]">
      <Nav />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
