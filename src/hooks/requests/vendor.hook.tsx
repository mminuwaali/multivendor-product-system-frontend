import { useGetOne, useGetPage, useGetInfinite } from "../api.hook";

// --- Vendor/User Profile ---

export function useGetVendorProfile() {
  return useGetOne<IVendorModel>({
    url: "/vendors/me",
  });
}

// --- Public Vendor Lists ---

export function useGetVendor(id?: unknown) {
  return useGetOne<IVendorModel>({
    url: id ? `/vendors/${id}` : undefined,
  });
}

export function useGetVendors(params?: IParams) {
  return useGetPage<IVendorModel>({
    url: "/vendors",
    params,
  });
}

export function useGetVendorsInfinite(params?: IParams) {
  return useGetInfinite<IVendorModel>({
    url: "/vendors",
    params,
  });
}
