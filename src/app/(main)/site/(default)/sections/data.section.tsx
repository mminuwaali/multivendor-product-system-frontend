"use client";

// External
import { motion } from "framer-motion";

// Internal
import React from "react";
import { useGetVendors } from "@/hooks/requests/vendor.hook";
import { MyVendorCard } from "@/components/cards/vendor.card";
import { MyEmptyPrimary } from "@/components/primary/empty.primary";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";
import { useParamsCtx } from "@/components/providers/param.provider";

export function DataSection() {
  const paramsContext = useParamsCtx();

  // Manual copy to avoid destructuring
  const queryParams = { ...paramsContext.params };
  delete queryParams.total;

  const vendorsQuery = useGetVendors(queryParams as IParams);

  const vendors = vendorsQuery.data?.data || [];
  const backendTotal = vendorsQuery.data?.meta?.total || 0;

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
        loading={vendorsQuery.isLoading}
        message="Finding premium vendors..."
      >
        <MyEmptyPrimary
          isEmpty={vendors.length === 0}
          title="No vendors found"
          className="bg-transparent"
          icon={<i className="fa-solid fa-store text-4xl text-gray-400" />}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 font-bold">
                Showing{" "}
                <span className="text-slate-800 dark:text-white">
                  {vendors.length}
                </span>{" "}
                results
              </p>
            </div>
            <div className="grid grid-cols-fill-18 gap-8">
              {vendors.map(function (vendor) {
                return (
                  <motion.div
                    layout
                    key={vendor._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MyVendorCard item={vendor} />
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
