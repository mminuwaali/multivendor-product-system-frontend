"use client";

// Framework
import Link from "next/link";

// External
import { motion } from "framer-motion";

// Internal
import { MyVendorCard } from "@/components/cards/vendor.card";
import { useGetVendors } from "@/hooks/requests/vendor.hook";
import { MyEmptyPrimary } from "@/components/primary/empty.primary";
import { MyLoaderPrimary } from "@/components/primary/loader.primary";

export function VendorsSection() {
  const vendorsQuery = useGetVendors({ isFeatured: true, pageSize: 3 });
  const topVendors = vendorsQuery.data.data;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 px-5%"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white tracking-tight">
            Top{" "}
            <span className="text-primary text-gradient-green">Vendors</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            Curated stores for premium quality. Discover artisans who care about
            excellence.
          </p>
        </div>

        <Link
          href="/site"
          className="group flex items-center gap-2 text-primary-dark font-bold hover:underline underline-offset-4 transition-all"
        >
          Explore All Vendors
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <MyLoaderPrimary
        loading={vendorsQuery.isLoading}
        message="Loading top vendors..."
      >
        <MyEmptyPrimary
          isEmpty={topVendors.length === 0}
          title="No featured vendors found"
          className="bg-transparent"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topVendors.map(function (vendor, index) {
              return (
                <motion.div
                  layout
                  key={vendor._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MyVendorCard item={vendor} />
                </motion.div>
              );
            })}
          </div>
        </MyEmptyPrimary>
      </MyLoaderPrimary>
    </motion.section>
  );
}
