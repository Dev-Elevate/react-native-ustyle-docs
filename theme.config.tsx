import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – React Native UStyle",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const url =
      "https://react-native-ustyle.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <title>{title || "RNU: React Native UStyle"}</title>
        <meta
          property="og:image"
          content="https://react-native-ustyle.vercel.app/og.png"
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "RNU: React Native UStyle"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The drop in replacement for React Native with superpowers"
          }
        />
      </>
    );
  },
  // darkMode: false,
  nextThemes: {
    defaultTheme: "light",
    enableSystem: false,
  },
  logo: (
    <span className="flex flex-row font-bold">
      {/* <img src="/1.png" height={20} width={30} /> */}
      React Native UStyle
    </span>
  ),
  primaryHue: 266,
  primarySaturation: 56,
  project: {
    link: "https://github.com/Dev-Elevate/react-native-ustyle",
  },
  chat: {
    link: "https://discord.gg/v5DccZDVy2",
  },
  docsRepositoryBase: "https://github.com/Dev-Elevate/react-native-ustyle-docs",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://develevate.vercel.app" target="_blank">
          Develevate
        </a>
        .
      </span>
    ),
  },
  sidebar: { toggleButton: true },
};

export default config;
