
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartItem from "./item";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };
  return (
    <div>
      <div
        className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
      >
        Giỏ hàng của bạn
      </div>
      {cartItems.map((item) => (
        <CartItem name={item.name} thumb={item.thumb} count={item.count} price={item.price} id={item.id} key={item.id} alias={item.alias}/>
      ))}
      <div className={`mt-4`}>
        <div
          className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
        >
          Giá trị đơn hàng
        </div>
        <div className={`mt-[15px]`}>
          <div className="flex justify-between font-weight-bold align-items-center py-[1rem]">
            <span>Tạm tính:</span>
            <span>{priceTotal() && priceTotal().toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between font-weight-bold align-items-center py-[1rem]">
            <span>Khuyến mãi:</span>
            <span>0đ</span>
          </div>
          <div className="flex justify-between font-weight-bold align-items-center py-[1rem]">
            <span>Phí vận chuyển:</span>
            <span>0đ</span>
          </div>
          <div className="flex justify-between font-weight-bold align-items-center py-[1rem]">
            <span>Tổng:</span>
            <span>{priceTotal() && priceTotal().toLocaleString()}đ</span>
          </div>
          {/* <button className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded shadow-md px-7 active:shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800">
            Thanh toán
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
