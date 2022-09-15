import PostItem from "../post-item";

const PostFeatured = () => {
  const posts = [
    {
      id: 1,
      image: "images/brand1.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 2,
      image: "images/brand2.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 3,
      image: "images/brand3.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 4,
      image: "images/brand4.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 5,
      image: "images/brand1.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 6,
      image: "images/brand2.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
    {
      id: 7,
      image: "images/brand3.png",
      title:
        "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
      desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took`,
    },
  ];
  return (
    <section className="blog-home">
      <div className="container">
        <div className="title-text">
          <span>Tin tức mới nhất</span>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item item-first">
              <a href="" title="">
                <div className="thumb">
                  <img src="./images/news1.png" alt="" />
                </div>
                <div className="txt-content">
                  <h3 className="title">
                    Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta
                    Jelly Fizz
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item-list">
              {posts.map((item) => (
                <PostItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostFeatured;
