// Framework
import { Metadata } from "next";

// Utils
import { api } from "@/utils/request";

// Components
import ParamsProvider from "@/components/providers/param.provider";
import { DataSection } from "./sections/data.section";
import { BannerSection } from "./sections/banner.section";
import { FilterSection } from "./sections/filter.section";
import { PaginationSection } from "./sections/pagination.section";

interface VendorDetailIndexPageProps {
  params: Promise<{ vendorSlug: string }>;
}

export async function generateMetadata(
  props: VendorDetailIndexPageProps,
): Promise<Metadata> {
  try {
    const params = await props.params;
    const response = await api.get(`/vendors/${params.vendorSlug}`);

    return {
      title: `${response.data.name} | Padisquare`,
      description:
        response.data.description ||
        `Shop at ${response.data.name} on Padisquare.`,
      openGraph: {
        title: response.data.name,
        description: response.data.description,
        images: response.data.avatar ? [response.data.avatar] : [],
      },
    };
  } catch {
    return {
      title: "Vendor Not Found",
      description: "The requested vendor storefront could not be found.",
    };
  }
}

export default function VendorDetailIndexPage() {
  return (
    <ParamsProvider>
      <BannerSection />
      <FilterSection />
      <DataSection />
      <PaginationSection />
    </ParamsProvider>
  );
}
