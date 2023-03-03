import Breadcumb from "../../../components/breadcumb";
import Layout from "../../../layouts/Main";
import React from "react";

const Signin = () => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Đăng ký",
            href: "",
        },
    ];
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs} />
            <div className={`py-4 min-h-[600px]`}>
                <div className="container">
                    <h2 className="text-center mb-[30px]">
                        <span className="uppercase text-[#333] text-[28px] font-bold inline-block">
                            Đăng ký
                        </span>
                    </h2>
                    <div className={`max-w-[500px] mx-auto mb-[100px]`}>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Họ và tên</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Ngày sinh</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Số điện thoại</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Tài khoản</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Mật khẩu</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Nhập lại mật khẩu</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>
                            <div className={`font-medium mb-2`}>Email</div>
                            <input type="text" className={`input__control !border !border-solid !border-[#ebebeb]`}/>
                        </div>
                        <div className={`mb-4`}>Tôi đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư!</div>
                        <div>
                            <button
                                className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded shadow-md px-7 active:shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signin;