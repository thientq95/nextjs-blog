
import ProductItem from "../../product-item";


const ProductCarousel = ({ products }) => {
  return (
    <div className="product-slide">
      { products.map((item) => (
           <ProductItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default ProductCarousel;
