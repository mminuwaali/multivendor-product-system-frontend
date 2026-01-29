interface IBaseModel {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface ITokenModel {
  access: string;
  refresh: string;
}

interface IUserModel extends IBaseModel {
  email: string;
  name?: string;
  avatar?: string;
}

interface ICategoryModel extends IBaseModel {
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

interface IVendorModel extends IBaseModel {
  email: string;
  name: string;
  description?: string;
  avatar?: string;
  banner?: string;
  rating?: number;
  reviewsCount?: number;
  location?: string;
  tags?: string[];
  categories?: string[];
  isFeatured?: boolean;
  status?: "Hot" | "New" | "Featured";
}

interface IProductModel extends IBaseModel {
  name: string;
  title: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image?: string;
  category?: string | ICategoryModel;
  rating?: number;
  status?: string;
  reviewsCount?: number;
  vendorId: string | IVendorModel;
}

interface IProductImageModel extends IBaseModel {
  image: string;
  variantId: string;
}

interface IParams {
  [key: string]: string | number | boolean | undefined;
}
