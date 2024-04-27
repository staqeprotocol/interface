"use client";

import Footer from "@/src/components/UI/Footer";
import Navbar from "@/src/components/UI/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
