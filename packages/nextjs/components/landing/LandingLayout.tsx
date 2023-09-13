import React from "react";
import Script from "next/script";
import CustomHeader from "./Header";
import Navbar from "./Navbar";
import CustomFooter from "~~/components/landing/CustomFooter";

const LandingLayout = ({children}) => {
    return (
        <>
            <CustomHeader/>
            <main>
                <Navbar/>
                {children}
                <CustomFooter/>
            </main>

            <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/libs/tiny-slider/min/tiny-slider.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/libs/tiny-slider/min/tiny-slider.js" strategy="beforeInteractive"/>
            <Script src="/assets/libs/feather-icons/feather.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/libs/feather-icons/feather.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/libs/simplebar/simplebar.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/libs/simplebar/simplebar.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/libs/apexcharts/apexcharts.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/libs/apexcharts/apexcharts.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/js/plugins.init.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/js/plugins.init.js" strategy="beforeInteractive"/>
            <Script src="/assets/js/app.js" strategy="beforeInteractive"/>
            <Script src="/assets/dashboard/js/app.js" strategy="beforeInteractive"/>
        </>
    );
};

export default LandingLayout;
