"use client";

// Internal
import { useParamsCtx } from "@/components/providers/param.provider";
import { MyPaginationPrimary } from "@/components/primary/pagination.primary";

export function PaginationSection() {
  const paramsContext = useParamsCtx();

  return <MyPaginationPrimary total={paramsContext.params.total as number} />;
}
