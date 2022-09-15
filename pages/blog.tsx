import Breadcumb from "../components/breadcumb";
import PostItem from "../components/post-item";
import Layout from "../layouts/Main";

const BlogPage = () => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Trang chủ",
      href: "",
    },
    {
      id: 12,
      title: "Tin tức mới nhất",
      href: "",
    },
  ];

  const postItem = {
    id: 1,
    image: "images/brand1.png",
    title: "Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz",
    desc: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took`,
  };
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className="blog-page blog-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="item item-first">
                <a href="" title="">
                  <div className="thumb">
                    <img src="images/news1.png" alt="" />
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
                <PostItem item={postItem} />
                <PostItem item={postItem} />
                <PostItem item={postItem} />
                <PostItem item={postItem} />
              </div>
            </div>
          </div>
          <div className="item-list item-list2">
            <PostItem item={postItem} />
            <PostItem item={postItem} />
            <PostItem item={postItem} />
            <PostItem item={postItem} />
            <PostItem item={postItem} />
            <PostItem item={postItem} />
            <PostItem item={postItem} />
          </div>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link active" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
