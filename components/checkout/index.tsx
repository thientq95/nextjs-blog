import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { server } from "../../utils/server";
import { postData } from "../../utils/services";
import { redirect } from "next/navigation";
import { useState } from "react";
import { clearCart } from "../../store/reducers/cart";

type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cityId: number;
  districtId: number;
  wardId: number;
  note: string;
  paymentId: number;
  orderDetails: OrderDetail[];
};

type OrderDetail = {
  imageUrl: string;
  price: number;
  productId: number;
  productName: string;
  quantity: number;
};

const Checkout = () => {
    const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    const orderDetails: OrderDetail[] = cartItems.map((item) => {
      return {
        imageUrl: item.thumb,
        price: item.price,
        productName: item.name,
        productId: item.id,
        quantity: item.count,
      };
    });
    const data = {
        ...formData,
        orderDetails: orderDetails
    }
    const res = await postData(`${server}/api/v1/web/order`, data);
    if (res) {
        dispatch(clearCart());
        // redirect('/checkout');
        window.location.replace('/checkout-page')
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`mb-4`}>
          <div
            className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
          >
            Thông tin giao hàng
          </div>
          <div className={`mt-4`}>
            <div className={`flex justify-around`}>
              <div className={`px-1 basis-1/2`}>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInput}
                  className={`input__control`}
                  placeholder={`Họ tên`}
                />
              </div>
              <div className={`px-1 basis-1/2`}>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInput}
                  className={`input__control`}
                  placeholder={`Họ tên`}
                />
              </div>
              <div className={`px-1 basis-1/2`}>
                <input
                  type="text"
                  name="phone"
                  onChange={handleInput}
                  className={`input__control`}
                  placeholder={`Số điện thoại`}
                />
              </div>
            </div>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              className="input__control"
              placeholder="Địa chỉ email"
            />
            {/* {errors.email && errors.email.type === "required" && (
              <p className="message message--error">This field is required</p>
            )}

            {errors.email && errors.email.type === "pattern" && (
              <p className="message message--error">
                Please write a valid email
              </p>
            )} */}
            <input
              type="text"
              name="note"
              className={`input__control`}
              placeholder={`Ghi chú`}
            />
          </div>
        </div>
        <div className={`mb-4`}>
          <div
            className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
          >
            Phương thức vận chuyển
          </div>
          <div className={`mt-4`}>
            <select className={`input__control`}>
              <option value="Chọn phương thức vận chuyển">
                Chọn phương thức vận chuyển
              </option>
              <option value="VN-POST">VN-POST</option>
            </select>
            <div className={`flex justify-around`}>
              <div className={`px-1 basis-1/3`}>
                <select className={`input__control`} name="cityId">
                  <option value="Tỉnh">Tỉnh</option>
                </select>
              </div>
              <div className={`px-1 basis-1/3`}>
                <select className={`input__control`} name="districtId">
                  <option value="Quận / Huyện">Quận / Huyện</option>
                </select>
              </div>
              <div className={`px-1 basis-1/3`}>
                <select className={`input__control`} name="wardId">
                  <option value="Phường / xã">Phường / xã</option>
                </select>
              </div>
            </div>
            {/* <input
              type="text"
              name=""
              className={`input__control`}
              placeholder={`Địa chỉ`}
            /> */}
          </div>
          <div className={`grid grid-cols-2 gap-4 mt-4`}>
            <div className={`col-span-1`}>
              <div className={`cursor-pointer relative`}>
                <div
                  className={`flex justify-evenly items-center border-dashed border-[2px] border-[#ebebeb] rounded-[10px] p-[10px] relative hover:border-[#0077b633] hover:bg-[#0077b61a]`}
                >
                  <div className={`w-[48px] shrink-0`}>
                    <i className="fas fa-truck text-[30px] text-[#ccc]"></i>
                  </div>
                  <div>
                    <p className={`font-bold font-[15px] w-full`}>
                      TMĐT Tiết Kiệm
                    </p>
                    <p className={`italic text-[#999] font-[12px]`}>
                      Dự kiến giao hàng trong 108 giờ
                    </p>
                    <div className={`font-bold text-[rgba(209,52,52,0.7)]`}>
                      <i className="fas fa-money-bill-alt"></i>
                      <span className={`ml-2`}>43.996đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-span-1`}>
              <div className={`cursor-pointer relative`}>
                <div
                  className={`flex justify-evenly items-center border-dashed border-[2px] border-[#ebebeb] rounded-[10px] p-[10px] relative hover:border-[#0077b633] hover:bg-[#0077b61a]`}
                >
                  <div className={`w-[48px] shrink-0`}>
                    <i className="fas fa-truck text-[30px] text-[#ccc]"></i>
                  </div>
                  <div>
                    <p className={`font-bold font-[15px] w-full`}>TMĐT Nhanh</p>
                    <p className={`italic text-[#999] font-[12px]`}>
                      Dự kiến giao hàng trong 84 giờ
                    </p>
                    <div className={`font-bold text-[rgba(209,52,52,0.7)]`}>
                      <i className="fas fa-money-bill-alt"></i>
                      <span className={`ml-2`}>51.996đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`mb-4`}>
          <div
            className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
          >
            Mã giảm giá
          </div>
          <div className={`flex mt-4`}>
            <input
              type="text"
              name=""
              className={`input__control`}
              placeholder={`Nhập mã giảm giá nếu có`}
            />
            <button
              className={`inline-block w-[150px] text-sm text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-[0_4px_4px_0]`}
            >
              Áp dụng
            </button>
          </div>
        </div> */}
        <div className={`mb-4`}>
          <div
            className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}
          >
            Hình thức thanh toán
          </div>
          <div className={`mt-4`}>
            <div
              className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
            >
              <input type="radio" name="paymentId" />
              <div className={`cursor-pointer leading-[30px]`}>
                Thanh toán online qua cổng Upay
              </div>
            </div>
            <div
              className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
            >
              <input type="radio" name="paymentId" />
              <div className={`cursor-pointer leading-[30px]`}>
                Thanh toán online qua cổng Alepay
              </div>
            </div>
            <div
              className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
            >
              <input type="radio" name="paymentId" />
              <div className={`cursor-pointer leading-[30px]`}>
                Thanh toán khi nhận hàng (COD)
              </div>
            </div>
            <div
              className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
            >
              <input type="radio" name="paymentId" />
              <div className={`cursor-pointer leading-[30px]`}>
                Thanh toán qua tài khoản ngân hàng
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded shadow-md px-7 active:shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800"
        >
          Thanh toán
        </button>
      </form>
    </>
  );
};

export default Checkout;
