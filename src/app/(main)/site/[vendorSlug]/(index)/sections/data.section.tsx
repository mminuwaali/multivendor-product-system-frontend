"use client";

// External
import { motion } from "framer-motion";

// Internal
import React from "react";
import { MyProductCard } from "@/components/cards/product.card";
import { MyEmptyPrimary } from "@/components/primary/empty.primary";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";
import { useParamsCtx } from "@/components/providers/param.provider";
import { useGetPublicProducts } from "@/hooks/requests/product.hook";

export function DataSection() {
  const paramsContext = useParamsCtx();
  const vendor = paramsContext.params.vendor as IVendorModel | undefined;

  // Manual copy to avoid destructuring
  const queryParams = { ...paramsContext.params };
  delete queryParams.total;
  delete queryParams.vendor; // Remove the full vendor object

  const productsQuery = useGetPublicProducts({
    ...queryParams,
    vendorId: vendor?._id,
  });

  const vendorProducts = productsQuery.data?.data || [];
  const backendTotal = productsQuery.data?.meta?.total || 0;

  React.useEffect(
    function () {
      if (paramsContext.params.total !== backendTotal)
        paramsContext.update({ total: backendTotal });
    },
    [backendTotal, paramsContext],
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto py-6"
    >
      <MyLoaderPrimary
        loading={productsQuery.isLoading}
        message="Fetching store items..."
      >
        <MyEmptyPrimary
          isEmpty={vendorProducts.length === 0}
          title="No products found in this store"
          className="bg-transparent"
          icon={<i className="fa-solid fa-box-open text-4xl text-gray-400" />}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 font-bold">
                Found{" "}
                <span className="text-slate-800 dark:text-white">
                  {vendorProducts.length}
                </span>{" "}
                items
              </p>
            </div>
            <div className="grid grid-cols-fill-18 gap-6 lg:gap-8">
              {vendorProducts.map(function (product) {
                return (
                  <motion.div
                    layout
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MyProductCard item={product} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </MyEmptyPrimary>
      </MyLoaderPrimary>
    </motion.section>
  );
}
