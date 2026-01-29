"use client";

// Internal
import { useParamsCtx } from "@/components/providers/param.provider";
import { MyFilterPrimary } from "@/components/primary/filter.primary";

export function FilterSection() {
  const paramsContext = useParamsCtx();

  return (
    <MyFilterPrimary
      search={{
        value: paramsContext.params.search ?? "",
        onChange: (search) => paramsContext.update({ search }),
        placeholder: "Search store products...",
      }}
      groups={[
        {
          className: "w-full md:w-60",
          placeholder: "Sort by",
          value: paramsContext.params.sort,
          onChange: (sort) => paramsContext.update({ sort }),
          options: [
            { label: "Newest", value: "newest" },
            { label: "Popular", value: "popular" },
            { label: "Price: Low to High", value: "price_asc" },
            { label: "Price: High to Low", value: "price_desc" },
          ],
        },
        {
          className: "w-full md:w-60",
          placeholder: "Category",
          value: paramsContext.params.category,
          onChange: (category) => paramsContext.update({ category }),
          options: [
            { label: "All Items", value: "all" },
            { label: "Best Sellers", value: "best-sellers" },
            { label: "New Arrivals", value: "new" },
          ],
        },
      ]}
    />
  );
}
