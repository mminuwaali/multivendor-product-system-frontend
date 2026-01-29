"use client";

// External
import { motion } from "framer-motion";

// Project Hooks
import { useGetPublicProducts } from "@/hooks/requests/product.hook";

// Project Providers
import { useParamsCtx } from "@/components/providers/param.provider";

// Project Components
import { MyProductCard } from "@/components/cards/product.card";
import { MyEmptyPrimary } from "@/components/primary/empty.primary";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";

// React
import React from "react";

export function DataSection() {
  const paramsContext = useParamsCtx();

  // Manual copy to avoid destructuring
  const queryParams = { ...paramsContext.params };
  delete queryParams.total;

  // Fetch products from backend
  const productsQueryResult = useGetPublicProducts(queryParams as IParams);

  const products = productsQueryResult.data?.data || [];
  const backendTotal = productsQueryResult.data?.meta?.total || 0;

  // Sync total with context
  React.useEffect(
    function () {
      if (paramsContext.params.total !== backendTotal)
        paramsContext.update({ total: backendTotal });
    },
    [backendTotal, paramsContext.params.total, paramsContext.update],
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto py-6"
    >
      <MyLoaderPrimary
        loading={productsQueryResult.isLoading}
        message="Loading premium products..."
      >
        <MyEmptyPrimary
          isEmpty={products.length === 0}
          title="No products found"
          className="bg-transparent"
          icon={<i className="fa-solid fa-box-open text-4xl text-gray-400" />}
        >
          <div className="grid grid-cols-fill-18 gap-6 lg:gap-8">
            {products.map(function (product) {
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
        </MyEmptyPrimary>
      </MyLoaderPrimary>
    </motion.section>
  );
}