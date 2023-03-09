import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cart";
import { ProductStoreType } from "../../types";
import { server } from "../../utils/server";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: item.id,
      name: item.name,
      thumb: item.imageUrl,
      price: item.price,
      count: 1,
      alias: item.seoAlias,
    };

    const productStore = {
      count: 1,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };
  return (
    <>
      <Link
        href={`/product/${item.seoAlias}`}
        className={`bg-[#FFF5F2] rounded-[3px] block mb-4 pb-[120%] relative`}
      >
        <img
          src={`${server}/${item.imageUrl}`}
          alt={`${item.name}`}
          className={`absolute max-w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
        />
      </Link>
      <div className={`flex flex-wrap`}>
        <div className={`flex-1 min-w-0`}>
          <h3 className={`text-base line-clamp-2 w-full mb-[6px]`}>
            <Link href={`/product/${item.seoAlias}`} className={`text-black`}>
              {item.name}
            </Link>
          </h3>
          <div className={`flex justify-between w-full mt-auto flex-nowrap`}>
            <div className={`flex-1 min-w-0`}>
              <div className={`flex items-center justify-between flex-nowrap`}>
                <span className="flex-1 min-w-0 text-xs">{item.category}</span>
              </div>
              <div className={`flex items-end justify-between flex-nowrap`}>
                <div className={`flex-1 min-w-0`}>
                  <strong className="text-base text-primary">
                    {" "}
                    {item.price && item.price.toLocaleString()}đ
                  </strong>
                  {/* <span className="ml-2 text-xs line-through">{item.priceOld}đ</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`rounded-[3px] w-[30px] h-[30px] mt-[30px] bg-[linear-gradient(90deg,#B78260_-14.95%,#815030_66.53%)] flex justify-center items-center cursor-pointer`}
          onClick={() => addToCart()}
        >
          <span className="text-white text-[20px]">+</span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
