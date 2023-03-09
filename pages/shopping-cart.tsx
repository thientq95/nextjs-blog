import React from "react";
import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { server } from "../utils/server";
import Cart from "../components/cart";

const ShoppingCart = () => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Giỏ hàng",
      href: "",
    },
  ];


  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <div className={`container`}>
        <div className={`my-4 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
          <div className={`col-span-1`}>
            <Cart />
          </div>
          <div className={`col-span-1`}>
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
                      name=""
                      className={`input__control`}
                      placeholder={`Họ tên`}
                    />
                  </div>
                  <div className={`px-1 basis-1/2`}>
                    <input
                      type="text"
                      name=""
                      className={`input__control`}
                      placeholder={`Số điện thoại`}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  className={`input__control`}
                  placeholder={`Địa chỉ email`}
                />
                <input
                  type="text"
                  name=""
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
                    <select className={`input__control`}>
                      <option value="Tỉnh">Tỉnh</option>
                    </select>
                  </div>
                  <div className={`px-1 basis-1/3`}>
                    <select className={`input__control`}>
                      <option value="Quận / Huyện">Quận / Huyện</option>
                    </select>
                  </div>
                  <div className={`px-1 basis-1/3`}>
                    <select className={`input__control`}>
                      <option value="Phường / xã">Phường / xã</option>
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  className={`input__control`}
                  placeholder={`Địa chỉ`}
                />
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
                        <p className={`font-bold font-[15px] w-full`}>
                          TMĐT Nhanh
                        </p>
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
            <div className={`mb-4`}>
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
            </div>
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
                  <input type="radio" name={`payment`} />
                  <div className={`cursor-pointer leading-[30px]`}>
                    Thanh toán online qua cổng Upay
                  </div>
                </div>
                <div
                  className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
                >
                  <input type="radio" name={`payment`} />
                  <div className={`cursor-pointer leading-[30px]`}>
                    Thanh toán online qua cổng Alepay
                  </div>
                </div>
                <div
                  className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
                >
                  <input type="radio" name={`payment`} />
                  <div className={`cursor-pointer leading-[30px]`}>
                    Thanh toán khi nhận hàng (COD)
                  </div>
                </div>
                <div
                  className={`flex items-center mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px] p-[6px_12px] gap-3`}
                >
                  <input type="radio" name={`payment`} />
                  <div className={`cursor-pointer leading-[30px]`}>
                    Thanh toán qua tài khoản ngân hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
