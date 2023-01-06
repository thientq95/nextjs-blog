import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import Layout from "../../layouts/Main";
import Breadcumb from "../../components/breadcumb";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Trang chủ",
      href: "",
    },
    {
      id: 2,
      title: "Sản phẩm",
      href: "",
    },
    {
      id: 3,
      title: "Macbook pro 2021",
      href: "",
    },
  ];
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className="blog-detail-page">
        <div className="container">
          <h1 className="title">
            GREEN FOOD THAM GIA HƯỞNG ỨNG NGÀY LƯƠNG THỰC THẾ GIỚI 16/10
          </h1>
          <div className="detail-content"></div>

          <div className="blog-related">
            <div className="title-text">
              <span>Tin liên quan</span>
            </div>
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="item">
                  <a
                    href="/cong-ty-green-food-chuc-mung-ngay-doanh-nhan-viet-nam-1310.html"
                    title="CÔNG TY GREEN FOOD CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13.10"
                  >
                    <div className="thumb">
                      <img
                        src={`https://media.grfood.com.vn/Media/GreenFood/FolderFunc/202210/Images/800x500px-ngay-doanh-nhan-1310-2-20221014083822-e.png" alt="CÔNG TY GREEN FOOD CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM 13.10`}
                      />
                    </div>
                    <div className="txt-content">
                      <div className="text-clamp2">
                        CÔNG TY GREEN FOOD CHÚC MỪNG NGÀY DOANH NHÂN VIỆT NAM
                        13.10
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <a
                    href="/cong-ty-tnhh-thuc-pham-va-nuoc-giai-khat-green-food-don-tiep-trung-doan-4-quan-khu-7.html"
                    title="Công ty TNHH thực phẩm và nước giải khát Green Food đón tiếp Trung đoàn 4, Quân khu 7"
                  >
                    <div className="thumb">
                      <img
                        src="https://media.grfood.com.vn/Media/GreenFood/FolderFunc/202210/Images/td4-20221012104457-e.jpg"
                        alt="Công ty TNHH thực phẩm và nước giải khát Green Food đón tiếp Trung đoàn 4, Quân khu 7"
                      />
                    </div>
                    <div className="txt-content">
                      <div className="text-clamp2">
                        Công ty TNHH thực phẩm và nước giải khát Green Food đón
                        tiếp Trung đoàn 4, Quân khu 7
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <a
                    href="/cong-ty-tnhh-thuc-pham-va-nuoc-giai-khat-green-food-khai-truong-hoanh-trang.html"
                    title="CÔNG TY TNHH THỰC PHẨM VÀ NƯỚC GIẢI KHÁT GREEN FOOD KHAI TRƯƠNG HOÀNH TRÁNG"
                  >
                    <div className="thumb">
                      <img
                        src="https://media.grfood.com.vn/Media/GreenFood/FolderFunc/202210/Images/le-khai-truong-20221003044541-e.jpg"
                        alt="CÔNG TY TNHH THỰC PHẨM VÀ NƯỚC GIẢI KHÁT GREEN FOOD KHAI TRƯƠNG HOÀNH TRÁNG"
                      />
                    </div>
                    <div className="txt-content">
                      <div className="text-clamp2">
                        CÔNG TY TNHH THỰC PHẨM VÀ NƯỚC GIẢI KHÁT GREEN FOOD KHAI
                        TRƯƠNG HOÀNH TRÁNG
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <a
                    href="/cong-ty-green-food-tiep-doan-dai-hoc-chiang-mai-thai-lan-va-dai-hoc-nong-lam-viet-nam.html"
                    title="CÔNG TY GREEN FOOD TIẾP ĐOÀN ĐẠI HỌC CHIANG MAI THÁI LAN VÀ ĐẠI HỌC NÔNG LÂM VIỆT NAM"
                  >
                    <div className="thumb">
                      <img
                        src="https://media.grfood.com.vn/Media/GreenFood/FolderFunc/202209/Images/img-3848-20220928025454-e.jpg"
                        alt="CÔNG TY GREEN FOOD TIẾP ĐOÀN ĐẠI HỌC CHIANG MAI THÁI LAN VÀ ĐẠI HỌC NÔNG LÂM VIỆT NAM"
                      />
                    </div>
                    <div className="txt-content">
                      <div className="text-clamp2">
                        CÔNG TY GREEN FOOD TIẾP ĐOÀN ĐẠI HỌC CHIANG MAI THÁI LAN
                        VÀ ĐẠI HỌC NÔNG LÂM VIỆT NAM
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <a
                    href="/su-dung-cong-nghe-tien-tien-thich-hop-de-kiem-soat-rui-ro-trong-an-toan-va-an-ninh-thuc-pham-trong-giai-doan-moi-050947.html"
                    title="SỬ DỤNG CÔNG NGHỆ TIÊN TIẾN THÍCH HỢP ĐỂ KIỂM SOÁT RỦI RO TRONG AN TOÀN VÀ AN NINH THỰC PHẨM TRONG GIAI ĐOẠN MỚI - LẦN 2"
                  >
                    <div className="thumb">
                      <img
                        src="https://media.grfood.com.vn/Media/GreenFood/FolderFunc/202208/Images/anh-bia-web-dhthai-20220831051054-e.png"
                        alt="SỬ DỤNG CÔNG NGHỆ TIÊN TIẾN THÍCH HỢP ĐỂ KIỂM SOÁT RỦI RO TRONG AN TOÀN VÀ AN NINH THỰC PHẨM TRONG GIAI ĐOẠN MỚI - LẦN 2"
                      />
                    </div>
                    <div className="txt-content">
                      <div className="text-clamp2">
                        SỬ DỤNG CÔNG NGHỆ TIÊN TIẾN THÍCH HỢP ĐỂ KIỂM SOÁT RỦI
                        RO TRONG AN TOÀN VÀ AN NINH THỰC PHẨM TRONG GIAI ĐOẠN
                        MỚI - LẦN 2
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
