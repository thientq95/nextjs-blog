export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export type ProductStoreType = {
  id: string;
  name: string;
  price: number;
  count: number;
  thumb: string;
  alias: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  bodyHtml: string;
  bodyPlain: string;
  seoAlias: string;
  seoTitle: string;
  seoDescription: string;
  seoMeta: string;
  publishedAt: number;
  publishedScope: string;
  productCategory: ProductCategory;
  productImages: ProductImage[];
};

export type ProductImage = {
  id: number;
  src: string;
  fileName: string;
}

export type ProductCategory = {
  id: number;
  name: string;
  description: string;
  seoAlias: string;
  seoTitle: string;
  imageUrl: string;
}

export type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
};

export type PageResult<T> = {
  items: T[];
  total: number;
  page: number;
  size: number;
};

export type ConfigStoreType = {
  key: string;
  value: string;
  name: string;
  description: string;
  type: string;
  parentId: number;
  sort: number;
};

export type ConfigType = {};
