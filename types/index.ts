export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
};

export type Product = {
  id: string;
  name: string;
  images: string;
}

export type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
}

export type PageResult<T> = {
  items: T[];
  total: number;
  page: number;
  size: number;
}