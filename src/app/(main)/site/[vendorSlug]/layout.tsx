"use client";

// Framework
import React from "react";
import { useParams } from "next/navigation";

// Hooks
import { useGetVendor } from "@/hooks/requests/vendor.hook";

// Components
import ParamsProvider from "@/components/providers/param.provider";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";

export default function VendorDetailLayout(props: React.PropsWithChildren) {
  const params = useParams<{ vendorSlug: string }>();

  const vendorQuery = useGetVendor(params.vendorSlug);
  const vendor = vendorQuery.data || null;

  return (
    <MyLoaderPrimary
      className={"flex-1"}
      loading={vendorQuery.isLoading}
      message={"Loading vendor data..."}
    >
      <ParamsProvider replace={{ vendor }}>{props.children}</ParamsProvider>
    </MyLoaderPrimary>
  );
}
