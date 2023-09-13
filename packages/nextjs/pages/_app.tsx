import React, {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import {RainbowKitProvider, darkTheme, lightTheme} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import {Toaster} from "react-hot-toast";
import {useDarkMode} from "usehooks-ts";
import {WagmiConfig} from "wagmi";
import Categories from "~~/components/landing/Categories";
import Collections from "~~/components/landing/Collections";
import Creators from "~~/components/landing/Creators";
import Hero from "~~/components/landing/Hero";
import LandingLayout from "~~/components/landing/LandingLayout";
import Marketplace from "~~/components/landing/Marketplace";
import {BlockieAvatar} from "~~/components/scaffold-eth";
import {useNativeCurrencyPrice} from "~~/hooks/scaffold-eth";
import {useGlobalState} from "~~/services/store/store";
import {wagmiConfig} from "~~/services/web3/wagmiConfig";
import {appChains} from "~~/services/web3/wagmiConnectors";
import "~~/public/assets/css/style.min.css";
import "~~/public/assets/css/bootstrap.min.css";
// import "~~/styles/globals.css";

const ScaffoldEthApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const price = useNativeCurrencyPrice();
    const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
    // This variable is required for initial client side rendering of correct theme for RainbowKit
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const {isDarkMode} = useDarkMode();

    useEffect(() => {
        if (price > 0) {
            setNativeCurrencyPrice(price);
        }
    }, [setNativeCurrencyPrice, price]);

    useEffect(() => {
        setIsDarkTheme(isDarkMode);
    }, [isDarkMode]);

    return (
        <WagmiConfig config={wagmiConfig}>
            <NextNProgress/>
            <RainbowKitProvider
                chains={appChains.chains}
                avatar={BlockieAvatar}
                theme={isDarkTheme ? darkTheme() : lightTheme()}
            >
                <div className="flex flex-col min-h-screen">
                    <LandingLayout>
                        <Component {...pageProps} />
                    </LandingLayout>
                </div>
                <Toaster/>
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default ScaffoldEthApp;
