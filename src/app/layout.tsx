// Framework
import type { Metadata } from "next";

// External

// Styles and Fonts
import "@/styles/global.css";
import * as fonts from "@/app/fonts";

// Layouts
import { WrapperLayout } from "./_layout/wrapper.layout";

// Providers
import AuthProvider from "@/components/providers/auth.provider";
import AntdProvider from "@/components/providers/antd.provider";
import { ThemeProvider } from "@/components/providers/theme.provider";
import QueryProvider from "@/components/providers/query.provider";
import ModalProvider from "@/components/providers/modal.provider";

export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "Product System",
};

export default function RootLayout(props: React.PropsWithChildren) {
  const fontsClassName = Object.values(fonts).map((item) => item.variable);

  return (
    <html lang="en" className={fontsClassName.join(" ")}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body>
        <ThemeProvider>
          <AntdProvider>
            <AuthProvider>
              <QueryProvider>
                <ModalProvider>
                  <WrapperLayout>{props.children}</WrapperLayout>
                  <div id={"portal"} />
                </ModalProvider>
              </QueryProvider>
            </AuthProvider>
          </AntdProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
