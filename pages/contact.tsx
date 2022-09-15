import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { postData } from "../utils/services";
import { server } from "../utils/server";

const ContactPage = () => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Trang chủ",
      href: "",
    },
    {
      id: 12,
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
  const formOptions = { resolver: yupResolver(validationSchame) };
  const { register, handleSubmit, reset, formState: { errors }  } = useForm(formOptions);

  const onSubmit = async (data) => {
    const res = await postData(`${server}/api/contact`, data);

    console.log(res);
  };

  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs}></Breadcumb>
      <section className="contact-page">
        <div className="container">
          <div className="title-text">
            <span>Liên hệ với chúng tôi</span>
          </div>
          <div className="contact-container">
            <div className="contact-img">
              <img src="images/SLIDER/hinh-lienhe.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contact-form">
                <h3 className="title">Gửi liên hệ cho chúng tôi</h3>
                <div className="row">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Tên *</label>
                    <input type="text" name="fullname" {...register('fullname')} className="input-control" />
                  </div>
                </div>
                  <div className="col-6">
                    <label htmlFor="">Số điện thoại*</label>
                    <input type="text" name="phone" {...register('phone')} className="input-control" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Email *</label>
                    <input type="text" name="email" {...register('email')} className={`input-control ${errors.email ? 'is-invalid' : ''}`} />
            
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Tên (First name)*</label>
                    <input type="text" className="input-control" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Tên (First name)*</label>
                    <input type="text" className="input-control" />
                  </div>
                </div>
                
                <div className="contact-desc">
                  Nếu bạn có ý kiến góp ý hoặc yêu cầu cần hỗ trợ từ Green Food,
                  vui lòng liên lạc ngay với chúng tôi tại đây. Chúng tôi sẽ xem
                  xét và phản hồi sớm nhất có thể
                </div>
                <div className="contact-btn">
                  <button className="btn">Gửi liên hệ</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
