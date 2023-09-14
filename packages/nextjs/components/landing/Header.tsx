// components/Head.tsx
import React from "react";
import Head from "next/head";

const CustomHeader: React.FC = () => {
    return (
        <header>
            <Head>
                <meta charSet="utf-8"/>
                <title>Landrick - Saas & Software Landing Page Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Premium Template"/>
                <meta name="keywords" content="Saas, Software, multi-uses, HTML, Clean, Modern"/>
                <meta name="author" content="NADABS"/>
                <meta name="email" content="nadabs@nadabs.in"/>
                <meta name="website" content="../../index.html"/>
                <meta name="Version" content="v4.7.0"/>

                <link href="/assets/images/favicon.ico" rel="shortcut icon"/>
                <link href="/assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet"/>
                <link href="/assets/libs/simplebar/simplebar.min.css" rel="stylesheet"/>
                <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" className="theme-opt" rel="stylesheet"
                      type="text/css"/>
                <link href="/assets/libs/mdi/font/css/materialdesignicons.min.css" rel="stylesheet" type="text/css"/>
                <link href="/assets/libs/iconscout/unicons/css/line.css" type="text/css" rel="stylesheet"/>
                <link href="/assets/css/style.min.css" id="color-opt" className="theme-opt" rel="stylesheet"
                      type="text/css"/>
            </Head>
        </header>
    );
};

export default CustomHeader;
