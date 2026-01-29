"use client";

// Framework
import React from "react";

// External
import { AnimatePresence } from "framer-motion";

// Sections
import { FooterLayoutSection } from "./footer.section";
import { HeaderLayoutSection } from "./header.section";

export function WrapperLayout(props: React.PropsWithChildren) {
  return (
    <div id="root">
      <AnimatePresence mode={"wait"} key={"root"}>
        <HeaderLayoutSection />
        <main className="flex grow gap-4 flex-col">{props.children}</main>
        <FooterLayoutSection />
      </AnimatePresence>
    </div>
  );
}
