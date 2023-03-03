import React from "react";
import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";
import Link from "next/link";

const ShoppingCart = () => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Giỏ hàng",
            href: "",
        },
    ];
    const itemCart = [
        {
            id: 1,
            title: 'Calcium Bonecare Liquid 100 ml',
            image: '/images/product.webp',
            size: '100 ml',
            priceNew: '162.000',
            priceOld: '200.000',
            hetHang: true
        },
        {
            id: 2,
            title: 'Xịt mũi xoang Natural Pharm 20ml',
            image: '/images/product.webp',
            size: '100 ml',
            priceNew: '162.000',
            priceOld: '200.000',
            hetHang: false
        },
        {
            id: 3,
            title: 'An Phế Đông Trùng Hạ Thảo',
            image: '/images/product.webp',
            size: '100 ml',
            priceNew: '162.000',
            priceOld: '200.000',
            hetHang: true
        }
    ]
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs} />
            <div className={`container`}>
                <div className={`my-4 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
                    <div className={`col-span-1`}>
                        <div className={`border border-[#fafafa] bg-white rounded-[20px] p-[15px] shadow-[0px_0px_10px_#f5f5f5] flex flex-col justify-between`}>
                            <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Giỏ hàng của bạn</div>
                            {itemCart.map((item) => (
                                <div className={`relative border-[2px] border-dashed border-[#ebebed] p-[10px] mt-[10px] rounded-[10px] flex justify-between gap-3`}>
                                    <div className={`w-[20%] text-center`}>
                                        <img
                                            src={item.image} alt={item.title}
                                            className={`max-w-full w-full max-h-[100px] rounded-[10px]`}
                                        />
                                    </div>
                                    <div className={`w-[80%] self-center`}>
                                        <div className={`text-[13px] ${item.hetHang ? 'block' : 'hidden'}`}>(Sản phẩm này vừa mới hết hàng)</div>
                                        <Link href={``} className={`font-bold`}>{item.title}</Link>
                                        <div className={`text-[13px]`}>Size: <span className={`font-bold`}>{item.size}</span></div>
                                    </div>
                                    <div className={`w-[20%] text-right self-center`}>
                                        <div className={`text-[#f36161] font-bold`}>{item.priceNew}</div>
                                        <div className={`text-[#999] line-through`}>{item.priceNew}</div>
                                    </div>
                                </div>
                            ))}
                            <div className={`mt-4`}>
                                <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Giá trị đơn hàng</div>
                                <div className={`mt-[15px]`}>
                                    <div
                                        className="flex justify-between font-weight-bold align-items-center py-[1rem]">
                                        <span>Tạm tính:</span>
                                        <span>599.600đ</span>
                                    </div>
                                    <div
                                        className="flex justify-between font-weight-bold align-items-center py-[1rem]">
                                        <span>Khuyến mãi:</span>
                                        <span>599.600đ</span>
                                    </div>
                                    <div
                                        className="flex justify-between font-weight-bold align-items-center py-[1rem]">
                                        <span>Phí vận chuyển:</span>
                                        <span>599.600đ</span>
                                    </div>
                                    <div
                                        className="flex justify-between font-weight-bold align-items-center py-[1rem]">
                                        <span>Tổng:</span>
                                        <span>599.600đ</span>
                                    </div>
                                    <button
                                        className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded shadow-md px-7 active:shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-1`}>
                        <div className={`mb-4`}>
                            <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Thông tin giao hàng</div>
                            <div className={`mt-4`}>
                                <div className={`flex justify-around`}>
                                    <div className={`px-1 basis-1/2`}>
                                        <input type="text" name=""
                                               className={`input__control`} placeholder={`Họ tên`} />
                                    </div>
                                    <div className={`px-1 basis-1/2`}>
                                        <input type="text" name=""
                                               className={`input__control`} placeholder={`Số điện thoại`} />
                                    </div>
                                </div>
                                <input type="text" name=""
                                       className={`input__control`} placeholder={`Địa chỉ email`} />
                                <input type="text" name=""
                                       className={`input__control`} placeholder={`Ghi chú`} />
                            </div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Phương thức vận chuyển</div>
                            <div className={`mt-4`}>
                                <select className={`input__control`}>
                                    <option value="Chọn phương thức vận chuyển">Chọn phương thức vận chuyển</option>
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
                                <input type="text" name=""
                                       className={`input__control`} placeholder={`Địa chỉ`} />
                            </div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Mã giảm giá</div>
                            <div className={`flex mt-4`}>
                                <input type="text" name=""
                                       className={`input__control`} placeholder={`Nhập mã giảm giá nếu có`} />
                                <button className={`inline-block w-[150px] text-sm text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded`}>Áp dụng</button>
                            </div>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`p-[15px_10px] bg-[#f5f5f5] rounded-[10px] text-[15px] uppercase font-bold`}>Hình thức thanh toán</div>
                            <div className={`mt-4`}>
                                <div className={`mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px]`}>
                                    <div className={`cursor-pointer p-[6px_12px] leading-[30px]`}>
                                        Thanh toán online qua cổng Upay
                                    </div>
                                </div>
                                <div className={`mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px]`}>
                                    <div className={`cursor-pointer p-[6px_12px] leading-[30px]`}>
                                        Thanh toán online qua cổng Alepay
                                    </div>
                                </div>
                                <div className={`mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px]`}>
                                    <div className={`cursor-pointer p-[6px_12px] leading-[30px]`}>
                                        Thanh toán khi nhận hàng (COD)
                                    </div>
                                </div>
                                <div className={`mb-[5px] bg-[rgba(38,185,154,0.04)] rounded-[5px]`}>
                                    <div className={`cursor-pointer p-[6px_12px] leading-[30px]`}>
                                        Thanh toán qua tài khoản ngân hàng
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart;