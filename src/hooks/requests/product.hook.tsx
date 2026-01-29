import { api } from "@/utils/request";
import {
  useGetOne,
  useGetPage,
  useGetSearch,
  useGetInfinite,
} from "../api.hook";

// --- Public Hooks ---

export function useGetPublicProduct(id?: unknown) {
  return useGetOne<IProductModel>({
    url: id ? `/products/public/${id}` : undefined,
  });
}

export function useGetPublicProducts(params?: IParams) {
  return useGetPage<IProductModel>({
    url: "/products/public",
    params,
  });
}

export function useGetPublicProductsInfinite(params?: IParams) {
  return useGetInfinite<IProductModel>({
    url: "/products/public",
    params,
  });
}

export function useGetPublicProductsSearch(search: string, params?: IParams) {
  return useGetSearch<IProductModel>({
    url: "/products/public",
    params,
    search,
  });
}

// --- Vendor Hooks ---

export function useGetVendorProduct(id?: unknown) {
  return useGetOne<IProductModel>({
    url: id ? `/products/${id}` : undefined,
  });
}

export function useGetVendorProducts(params?: IParams) {
  return useGetPage<IProductModel>({
    url: "/products",
    params,
  });
}