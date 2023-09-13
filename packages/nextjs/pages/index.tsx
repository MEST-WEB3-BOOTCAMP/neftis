// import Link from "next/link";
import type { NextPage } from "next";
// import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Hero from "~~/components/landing/Hero";
import Collections from "~~/components/landing/Collections";
import Marketplace from "~~/components/landing/Marketplace";
import Creators from "~~/components/landing/Creators";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />

        <Hero/>
        <section class="section">
            <div id="collections" className="mt-50">
                <Collections/>
            </div>
            <div id="marketplace">
                <Marketplace/>
            </div>
            <div id="creators">
                <Creators/>
            </div>
        </section>
    </>
  );
};

export default Home;
