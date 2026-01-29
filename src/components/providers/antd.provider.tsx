"use client";

import React from "react";
import { useTheme } from "./theme.provider";
import { ThemeConfig, ConfigProvider, theme as antdTheme } from "antd";

export default function AntdProvider(props: React.PropsWithChildren) {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        ...theme,
        algorithm:
          currentTheme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}

export const theme: ThemeConfig = {
  token: {
    borderRadius: 12,
    colorPrimary: "#10b981",
    fontFamily: "var(--font-oxygen), var(--font-poppins), sans-serif",
  },
  components: {
    Button: {
      algorithm: true,
      colorPrimary: "#10b981",
      defaultBorderColor: "#10b981",
    },
    Input: {
      hoverBorderColor: "#10b981",
      activeBorderColor: "#10b981",
    },
    Table: {
      headerBg: "#f0fdf4",
      headerColor: "#065f46",
    },
  },
};
