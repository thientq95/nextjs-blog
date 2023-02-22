import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {postData} from "../utils/services";
import {server} from "../utils/server";

const ContactPage = () => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Liên hệ",
            href: "",
        },
    ];

    const validationSchame = Yup.object().shape({
        fullname: Yup.string().required("Bạn chưa nhập Họ & Tên"),
        email: Yup.string()
            .required("Bạn chưa nhập địa chỉ Email")
            .email("Địa chỉ Email chưa đúng"),
        phone: Yup.string().required("Bạn chưa nhập số điện thoại"),
        address: Yup.string().required("Bạn chưa nhập địa chỉ"),
        content: Yup.string().required("Bạn chưa nhập nội dung"),
    });
    const formOptions = {resolver: yupResolver(validationSchame)};
    const {register, handleSubmit, reset, formState: {errors}} = useForm(formOptions);

    const onSubmit = async (data) => {
        const res = await postData(`${server}/api/contact`, data);

        console.log(res);
    };

    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs}></Breadcumb>
            <div className={`pb-3 my-4`}>
                <div className={`container`}>
                    <div className={`bg-[repeating-linear-gradient(135deg,#b8cbe0_0_6px,#fafafa_0_24px,#fdbfad_0_40px,#fff_0_48px)] p-[10px] rounded-[8px]`}>
                        <div className={`bg-[#fafafa] p-[2.5rem_1.5rem]`}>
                            <div className={`flex flex-wrap row`}>
                                <div className={`md:w-1/2`}>
                                    <p className={`mb-[1rem] text-[1rem]`}>Địa chỉ</p>
                                    <p className={`mb-[1rem] text-[1rem]`}>Điện thoại</p>
                                    <p className={`mb-[1rem] text-[1rem]`}>Email</p>
                                    <p className={`mb-[1rem] text-[1rem]`}>Website</p>
                                </div>
                                <div className={`md:w-1/2`}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className={`flex justify-around mb-2`}>
                                            <div className={`px-1 basis-1/2`}>
                                                <input type="text" name="fullname" {...register('fullname')}
                                                       className={`input__control`} placeholder={`Họ tên`} />
                                            </div>
                                            <div className={`px-1 basis-1/2`}>
                                                <input type="text" name="phone" {...register('phone')}
                                                       className={`input__control`} placeholder={`Số điện thoại`}/>
                                            </div>
                                        </div>
                                        <div className={`flex justify-around mb-2`}>
                                            <div className={`px-1 basis-1/2`}>
                                                <input type="text" name="address" {...register('address')}
                                                       className={`input__control`} placeholder={`Địa chỉ`} />
                                            </div>
                                            <div className={`px-1 basis-1/2`}>
                                                <input type="text" name="email" {...register('email')}
                                                       className={`input__control ${errors.email ? 'is-invalid' : ''}`} placeholder={`Email`}/>
                                            </div>
                                        </div>
                                        <div className={`mb-2`}>
                                            <input type="text" name="title" {...register('title')}
                                                   className={`input__control`} placeholder={`Chủ đề`} />
                                        </div>
                                        <div className={`mb-2`}>
                                            <textarea name="content" {...register('content')}
                                                   className={`input__control !h-auto`} placeholder={`Nội dung`} rows={5} />
                                        </div>
                                        <button className={`btn__link`}>Gửi liên hệ</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
