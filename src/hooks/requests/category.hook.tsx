import { useGetOne, useGetPage, useGetSearch, useGetInfinite } from "../api.hook";

export function useGetCategory(id?: unknown) {
  return useGetOne<ICategoryModel>({
    url: id ? `/category/${id}` : undefined,
  });
}

export function useGetCategories(params?: IParams) {
  return useGetPage<ICategoryModel>({
    url: "/category",
    params,
  });
}

export function useGetCategoriesSearch(search: string, params?: IParams) {
  return useGetSearch<ICategoryModel>({
    url: "/category",
    params,
    search,
  });
}

export function useGetCategoriesInfinite(params?: IParams) {
  return useGetInfinite<ICategoryModel>({
    url: "/category",
    params,
  });
}
