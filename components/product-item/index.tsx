import Link from "next/link";

const ProductItem = ({ item }) => {
  return (
    <div className="item">
      <Link href={`/product-detail`}>
          <div className="thumb-img">
            <img src={`./${item.productImage}`} alt="" />
          </div>
          <div className="txt-content">
            <h3 className="title">{item.name}</h3>
            <div className="desc">500ml</div>
          </div>
      </Link>
    </div>
  );
};

export default ProductItem;
