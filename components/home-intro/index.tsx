const HomeIntro = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="title-img">
          <img src="images/nguonxanh-title.png" alt="" />
        </div>
        <div className="title-text">
          <span>Về chúng tôi</span>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="timeline-container">
              <ul className="timeline">
                <li>
                  <div className="direction-l active">
                    <div className="flag-wrapper">
                      <span className="flag">Về chúng tôi</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Tầm nhìn</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Sứ mệnh</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="content-timeline">
                Hiện nay, lĩnh vực khoa học thực phẩm đang phát triển rất mạnh
                mẽ, nhu cầu của người tiêu dùng về thực phẩm sạch, tự nhiên, an
                toàn &amp; đảm bảo sức khỏe cũng ngày càng được nâng cao.
                <br />
                <br />
                Các doanh nghiệp phải không ngừng cải tiến, đổi mới sản phẩm của
                mình theo xu hướng thị trường &amp; đồng thời phải đảm bảo được
                lợi nhuận của doanh nghiệp.
                <br />
                <br />
                Nắm bắt được tình hình đó, Công Ty TNHH Thực Phẩm Nguồn Xanh
                được thành lập nhằm hỗ trợ và đồng hành cùng các doanh nghiệp
                trong việc nghiên cứu đổi mới sản phẩm.
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-us-img">
              <img src="images/about-us.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
