"use client";

// Internal
import { useParamsCtx } from "@/components/providers/param.provider";
import { MyFilterPrimary } from "@/components/primary/filter.primary";

export function FilterSection() {
  const paramsContext = useParamsCtx();

  return (
    <MyFilterPrimary
      className="max-w-7xl mx-auto"
      search={{
        value: (paramsContext.params.search as string) ?? "",
        onChange: function (v) {
          paramsContext.update({ search: v });
        },
        placeholder: "Search for premium vendors...",
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
            { label: "Rating", value: "-rating" },
            { label: "Popularity", value: "-reviewsCount" },
          ],
        },
        {
          className: "w-40",
          placeholder: "Status",
          value: paramsContext.params.status,
          onChange: function (v) {
            paramsContext.update({ status: v === "all" ? undefined : v });
          },
          options: [
            { label: "All Status", value: "all" },
            { label: "Hot", value: "Hot" },
            { label: "New", value: "New" },
            { label: "Featured", value: "Featured" },
          ],
        },
      ]}
    />
  );
}
