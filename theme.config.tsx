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
      "https://rn-ustyle.xyz" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <html lang="en">
        <title>{title || "RNU: React Native UStyle"}</title>
        <meta property="og:image" content="https://rn-ustyle.xyz/og.png" />
        <meta property="og:url" content={url} />
        <meta
          name="description"
          content="Experience React Native UStyle: a zero-runtime library with customizable utility props, token-based theming, and virtual components to enhance your app's UI."
        ></meta>
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
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token={process.env.NEXT_PUBLIC_BEAM_TOKEN}
          async
        ></script>
      </html>
    );
  },
  nextThemes: {
    // forcedTheme: "light",
    defaultTheme: "light",
    enableSystem: false,
  },
  logo: () => {
    const { darkMode } = useConfig();
    return (
      <span className="flex flex-row font-bold items-center">
        <img
          src={"/1.png"}
          height={20}
          width={30}
          style={{
            marginRight: 10,
          }}
          alt="React Native UStyle Logo"
        />
        React Native UStyle
      </span>
    );
  },
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
