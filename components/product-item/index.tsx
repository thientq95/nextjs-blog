import Link from "next/link";

const ProductItem = ({ item }) => {
  return (
    <div className="item">
      <Link href={`/product-detail`}>
        <a title="">
          <div className="thumb-img">
            <img src={`./${item.productImage}`} alt="" />
          </div>
          <div className="txt-content">
            <h3 className="title">{item.name}</h3>
            <div className="desc">500ml</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductItem;
