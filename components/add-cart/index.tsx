import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cart";
import { Product, ProductStoreType } from "../../types";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const addToCart = () => {
    const productToSave: ProductStoreType = { 
      id: product.id,
      name: product.name,
      thumb: product.productImages ? product.productImages[0].src : '',
      price: product.price,
      count: count,
      alias: product.seoAlias
    }

    const productStore = {
      count,
      product: productToSave
    }

    dispatch(addProduct(productStore));
  }

  return (
    <div>
      <div className="py-0">
        <div className="mb-2 text-sm font-semibold">Số lượng:</div>
        <div className="flex items-center">
          <div className="flex justify-between w-36 border-[#BABABA] border rounded-[3px]">
            <button
              type="button"
              onClick={() => setCount(count - 1)}
              className="text-[#C4C4C4] hover:text-black text-lg font-extrabold w-8 h-8 inline-flex justify-center items-center"
              data-action="minus"
            >
              -
            </button>
            <input
              type="text"
              className="flex-1 border-y-0 text-center border-[#BABABA] min-w-0 h-8" 
            />
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="text-[#C4C4C4] hover:text-black text-lg font-extrabold w-8 h-8 inline-flex justify-center items-center"
              data-action="plus"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 uppercase">
        <button
          type="button"
          className="flex flex-1 justify-center items-center rounded-[3px] py-3 bg-[linear-gradient(90deg,#B78260_-14.95%,#815030_66.53%)]"
        >
          <span className="text-lg font-extrabold text-white">Mua ngay</span>
        </button>
        <button
          type="button"
          onClick={() => addToCart()}
          className="flex border border-[#B78260] rounded-[3px] ml-4 flex-1 items-center justify-center py-3"
        >
          <span className="text-lg font-extrabold text-[#845536]">
            Thêm vào giỏ hàng
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
