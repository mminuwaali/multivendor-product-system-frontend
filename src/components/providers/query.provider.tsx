"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
export default function QueryProvider(properties: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={client}>
      {properties.children}
    </QueryClientProvider>
  );
}
