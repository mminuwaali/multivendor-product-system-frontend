"use client";

// Framework
import React from "react";
import { useParams } from "next/navigation";

// Components
import ParamsProvider from "@/components/providers/param.provider";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";
import { useGetPublicProduct } from "@/hooks/requests/product.hook";

export default function ProductDetailLayout(props: React.PropsWithChildren) {
  const params = useParams<{ productID: string }>();

  // Fetch product by ID
  const productQuery = useGetPublicProduct(params.productID);
  const product = productQuery.data || null;

  return (
    <MyLoaderPrimary
      loading={productQuery.isLoading}
      className={"flex-1"}
      message={"Loading product details..."}
    >
      <ParamsProvider replace={{ product }}>{props.children}</ParamsProvider>
    </MyLoaderPrimary>
  );
}
