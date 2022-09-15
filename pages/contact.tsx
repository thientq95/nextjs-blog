import Breadcumb from "../components/breadcumb";
import Layout from "../layouts/Main";

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
            <div className="contact-form">
              <h3 className="title">Gửi liên hệ cho chúng tôi</h3>
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
              <div className="row">
                <div className="col-12">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
