import { GetServerSideProps } from "next";
import useSWR from "swr";
import Breadcumb from "../components/breadcumb";
import PostItem from "../components/post-item";
import Layout from "../layouts/Main";
import { PageResult, Post } from "../types";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:9091/api/v1/web/post?page=0&size=10`);
  const response = await res.json();

  return {
    props: {
      post: response.result,
    },
  };
};


const BlogPage = ({ post, configs }) => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR(
  //   "http://localhost:9091/api/v1/web/post?page=0&size=10",
  //   fetcher
  // );
  // const post = data && data.result as PageResult<Post>;
  console.warn(configs)
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

  // if (error) return <div>Failed to load blogs</div>;
  if (!post) <h1>Loading...</h1>;
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className="blog-page blog-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            {post && post.items.slice(0, 1).map((item) => <PostItem key={item.id} item={item} />)}
            </div>
            <div className="col-lg-6">
              <div className="item-list">
                {post && post.items.slice(1, 5).map((item) => <PostItem key={item.id} item={item} />)}
              </div>
            </div>
          </div>
          <div className="item-list item-list2">
          {post && post.items.slice(5, 12).map((item) => <PostItem key={item.id} item={item} />)}
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
