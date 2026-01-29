interface IParams {
  [key: string]: unknown;
}

interface IErrorPageProps {
  reset: () => void;
  error: Error & { digest?: string };
}

interface IPageResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface IUpdatePayload<T> {
  id: unknown;
  data: Partial<T>;
}

interface IQeury<T extends IParams = unknown> extends T {
  url?: string;
  params?: IParams;
}

interface ICartItemData {
  quantity: number;
  variant: IProductVariantModel;
}

interface IParamClient {
  address?: IAddressModel;
  [key: string]: unknown;
}
