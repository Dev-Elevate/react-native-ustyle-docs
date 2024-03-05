import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // darkMode: false,
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
