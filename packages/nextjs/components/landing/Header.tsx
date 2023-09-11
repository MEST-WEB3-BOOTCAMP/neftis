// components/Head.tsx
import React from "react";
import Head from "next/head";

const CustomHeader: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Landrick - Saas & Software Landing Page Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Premium Bootstrap 5 Landing Page Template" />
      <meta name="keywords" content="Saas, Software, multi-uses, HTML, Clean, Modern" />
      <meta name="author" content="Shreethemes" />
      <meta name="email" content="support@shreethemes.in" />
      <meta name="website" content="../../index.html" />
      <meta name="Version" content="v4.7.0" />

      <link rel="shortcut icon" href="/assets/images/favicon.ico"/>
      <link href="/assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet" />
      <link
        href="/assets/css/bootstrap.min.css"
        id="bootstrap-style"
        className="theme-opt"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/assets/libs/mdi/font/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
      <link href="/assets/libs/iconscout/unicons/css/line.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/style.min.css" id="color-opt" className="theme-opt" rel="stylesheet" type="text/css" />
    </Head>
  );
};

export default CustomHeader;
