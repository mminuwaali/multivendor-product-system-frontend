"use client";

// External
import { motion } from "framer-motion";

// Internal
import React from "react";
import { useGetCategoriesSearch } from "@/hooks/requests/category.hook";
import { useDebounce } from "@/hooks/debounce.hook";

// Project Providers
import { useParamsCtx } from "@/components/providers/param.provider";

// Component Types
import type { SelectProps } from "antd";

// Filter Component
import { MyFilterPrimary } from "@/components/primary/filter.primary";

export function FilterSection() {
  const paramsContext = useParamsCtx();
  const [catSearch, setCatSearch] = React.useState("");

  const debouncedCatSearch = useDebounce(catSearch, 400);

  const categoriesQueryResult = useGetCategoriesSearch(debouncedCatSearch);
  const categoriesData = categoriesQueryResult.data;
  const isCategoriesLoading = categoriesQueryResult.isLoading;

  const categoryOptions = React.useMemo(
    function () {
      const baseOptions = [{ label: "All Categories", value: "all" }];
      const fetchedOptions =
        categoriesData?.data?.map(function (cat) {
          return {
            label: cat.name,
            value: cat.slug,
          };
        }) || [];
      return [...baseOptions, ...fetchedOptions];
    },
    [categoriesData],
  );

  return (
    <MyFilterPrimary
      search={{
        value: (paramsContext.params.search as string) ?? "",
        onChange: function (v) {
          paramsContext.update({ search: v });
        },
        placeholder: "Search for premium products...",
      }}
      groups={[
        {
          className: "w-full md:w-60",
          placeholder: "Sort by",
          value: paramsContext.params.ordering,
          onChange: function (v) {
            paramsContext.update({ ordering: v });
          },
          options: [
            { label: "Newest", value: "-createdAt" },
            { label: "Price: Low to High", value: "price" },
            { label: "Price: High to Low", value: "-price" },
            { label: "Rating", value: "-rating" },
          ],
        },
        {
          className: "w-full md:w-60",
          showSearch: true,
          filterOption: false,
          placeholder: "Category",
          loading: isCategoriesLoading,
          onSearch: function (val) {
            setCatSearch(val);
          },
          value: paramsContext.params.category,
          onChange: function (v) {
            paramsContext.update({ category: v === "all" ? undefined : v });
          },
          options: categoryOptions,
        },
        {
          className: "w-full md:w-40",
          placeholder: "Status",
          value: paramsContext.params.status,
          onChange: function (v) {
            paramsContext.update({ status: v === "all" ? undefined : v });
          },
          options: [
            { label: "All Status", value: "all" },
            { label: "In Stock", value: "In Stock" },
            { label: "Out of Stock", value: "Out of Stock" },
            { label: "Sale", value: "Sale" },
          ],
        },
      ]}
    />
  );
}