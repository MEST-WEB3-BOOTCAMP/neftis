import React from "react";
import Script from "next/script";
import CustomHeader from "./Header";
import Navbar from "./Navbar";
import BackToTop from "~~/components/landing/BackToTop";
import CustomFooter from "~~/components/landing/CustomFooter";

const LandingLayout = ({ children }) => {
  return (
    <>
      <header>
        <CustomHeader />
      </header>

      <main>
        <Navbar />
        {children}
        <CustomFooter />
        <BackToTop />
      </main>

      <Script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="assets/libs/tiny-slider/min/tiny-slider.js" strategy="beforeInteractive" />
      <Script src="assets/libs/feather-icons/feather.min.js" strategy="beforeInteractive" />
      <Script src="assets/js/plugins.init.js" strategy="beforeInteractive" />
      <Script src="assets/js/app.js" strategy="beforeInteractive" />
    </>
  );
};

export default LandingLayout;
