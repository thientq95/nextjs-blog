import error from "next/error";
import useSWR from "swr";
import { Product } from "../../types";
import ProductItem from "../product-item";
import ProductCarousel from "./carousel";

const ProductFeatured = () => {
  const fetcher = async (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/products", fetcher);
  if (error) return <div>Failed to load products</div>;
  if (!data) <h1>Loading...</h1>;
  const products = [
      {
          id: 1,
          name: 'Nước Chanh Dây Nha Đam Yến',
          productImage: 'images/SANPHAM-1/SANPHAM-1.png'
      },
      {
          id: 2,
          name: 'Nước Chanh Muối Bạc Hà',
          productImage: 'images/SANPHAM-1/SANPHAM-2.png'
      },
      {
          id: 3,
          name: 'Nước Yến Nha Đam Đường Phèn',
          productImage: 'images/SANPHAM-1/SANPHAM-3.png'
      },
      {
          id: 4,
          name: 'Nước Dưa Hấu Đường Phèn',
          productImage: 'images/SANPHAM-1/SANPHAM-4.png'
      },
      {
          id: 5,
          name: 'Nước Yến Nha Đam Đường Phèn',
          productImage: 'images/SANPHAM-1/SANPHAM-3.png'
      },
      {
          id: 6,
          name: 'Nước Dưa Hấu Đường Phèn',
          productImage: 'images/SANPHAM-1/SANPHAM-4.png'
      },
  ];

  return (
    <section className="product-home">
      <div className="container">
        <div className="title-text">
          <span>Sản phẩm</span>
        </div>
        {data && data.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductFeatured;
