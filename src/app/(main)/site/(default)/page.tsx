// Internal
import { DataSection } from "./sections/data.section";
import { FilterSection } from "./sections/filter.section";
import { HeaderSection } from "./sections/header.section";
import { PaginationSection } from "./sections/pagination.section";
import ParamsProvider from "@/components/providers/param.provider";

export function VendorListClientPage() {
  return (
    <ParamsProvider>
      <HeaderSection />
      <FilterSection />
      <DataSection />
      <PaginationSection />
    </ParamsProvider>
  );
}
