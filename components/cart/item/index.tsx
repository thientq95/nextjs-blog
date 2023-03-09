import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeProduct, setCount } from "../../../store/reducers/cart";
import { server } from "../../../utils/server";

const CartItem = ({ id, name, count, price, thumb, alias }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        thumb,
        name,
        id,
        count,
        price,
        alias,
      })
    );
  };

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: {
        thumb,
        name,
        id,
        count,
        price,
        alias,
      },
      count,
    };

    dispatch(setCount(payload));
  };
  return (
    <div
      className={`relative border-[2px] border-dashed border-[#ebebed] p-[10px] mt-[10px] rounded-[10px] flex justify-between gap-3`}
    >
      <div
        className={`absolute top-[5px] left-[5px] cursor-pointer hover:text-red-600`}
        onClick={() => removeFromCart()}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className={`w-[20%] text-center`}>
        <Link href={`/product/${alias}`}>
          <img
            src={`${server}/${thumb}`}
            alt={name}
            className={`max-w-full w-full max-h-[100px] rounded-[10px]`}
          />
        </Link>
      </div>
      <div className={`w-[80%] self-center`}>
        {/* <div className={`text-[13px] ${item.hetHang ? 'block' : 'hidden'}`}>(Sản phẩm này vừa mới hết hàng)</div> */}
        <Link href={`/product/${alias}`} className={`font-bold`}>
          {name}
        </Link>
        {/* <div className={`text-[13px]`}>Size: <span className={`font-bold`}>{item.size}</span></div> */}
        <div
          className={`w-[150px] h-[30px] flex justify-between items-stretch mt-[5px]`}
        >
          <div
            onClick={() => setProductCount(count - 1)}
            className={`bg-[#f7f7f7] text-[#333] leading-[26px] text-center cursor-pointer w-[30%] rounded-[8px_0_0_8px]`}
          >
            -
          </div>
          {/* <input
            type="number"
            value={`1`}
            className={`w-[40%] bg-[#f9f7f7] m-[0_3px] outline-none text-center`}
          /> */}
          <div
            className={`w-[40%] bg-[#f9f7f7] m-[0_3px] outline-none text-center`}
          >
            {count}
          </div>
          <div
            onClick={() => setProductCount(count + 1)}
            className={`bg-[#f7f7f7] text-[#333] leading-[26px] text-center cursor-pointer w-[30%] rounded-[0_8px_8px_0]`}
          >
            +
          </div>
        </div>
      </div>
      <div className={`w-[20%] text-right self-center`}>
        <div className={`text-[#f36161] font-bold`}>
          {price && price.toLocaleString()}
        </div>
        {/* <div className={`text-[#999] line-through`}>{item.priceNew}</div> */}
      </div>
    </div>
  );
};

export default CartItem;
