"use client";
import { api } from "@/utils/request";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

export function useGetCount(arg: IQeury) {
  return useQuery({
    initialData: 0,
    enabled: !!arg.url,
    queryKey: ["count", arg],
    async queryFn() {
      const res = await api.get(arg.url!, { params: arg.params });
      return res.data as number;
    },
  });
}

export function useGetPage<T>(arg: IQeury) {
  return useQuery({
    enabled: !!arg.url,
    queryKey: ["page", arg],
    initialData: {
      data: [],
      meta: { page: 1, limit: 10, total: 0, totalPages: 0 },
    },
    async queryFn() {
      const res = await api.get(arg.url!, { params: arg.params });
      return res.data as IPageResponse<T>;
    },
  });
}

export function useGetOne<T>(arg: IQeury) {
  return useQuery({
    enabled: !!arg.url,
    queryKey: ["one", arg],
    async queryFn() {
      const res = await api.get(arg.url!, { params: arg.params });
      return res.data as T;
    },
  });
}

export function useGetSearch<T>(arg: IQeury<{ search: string }>) {
  return useQuery({
    enabled: !!arg.url,
    queryKey: ["search", arg],
    initialData: {
      data: [],
      meta: { page: 1, limit: 10, total: 0, totalPages: 0 },
    },
    async queryFn() {
      const params = { ...arg.params, pageSize: 20 };
      const res = await api.get(arg.url!, { params });
      return res.data as IPageResponse<T>;
    },
  });
}

export function useGetInfinite<T>(arg: IQeury) {
  return useInfiniteQuery({
    enabled: !!arg.url,
    initialPageParam: arg.url!,
    queryKey: ["infinite", arg],
    async queryFn(ctx) {
      const res = await api.get(ctx.pageParam as string, {
        params: arg.params,
      });
      return res.data as IPageResponse<T>;
    },
    getNextPageParam(res) {
      return undefined;
    },
    getPreviousPageParam(res) {
      return undefined;
    },
  });
}
