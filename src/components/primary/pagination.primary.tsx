// External
import { Pagination } from "antd";

// Components / Providers
import { useParamsCtx } from "@/components/providers/param.provider";

interface MyPaginationPrimaryProps {
  total: number;
  className?: string;
}

export function MyPaginationPrimary(props: MyPaginationPrimaryProps) {
  const paramsCtx = useParamsCtx();

  return (
    <Pagination
      showSizeChanger
      total={props.total}
      current={paramsCtx.params.page as number}
      pageSize={paramsCtx.params.pageSize as number}
      className={"py-4 md:py-6 items-center justify-center"}
      onChange={(page, pageSize) => paramsCtx.update({ page, pageSize })}
    />
  );
}
