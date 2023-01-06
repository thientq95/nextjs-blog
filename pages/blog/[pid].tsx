import { GetServerSideProps } from "next";
import Breadcumb from "../../components/breadcumb";
import PostRelated from "../../components/post-related";
import Layout from "../../layouts/Main";
import { Post } from "../../types";

type PostType = {
  post: Post;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`http://localhost:9091/api/v1/web/post/${pid}`);
  const response = await res.json();

  return {
    props: {
      post: response.result,
    },
  };
};

const BlogDetailPage = ({ post }: PostType) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Trang chủ",
      href: "",
    },
    {
      id: 12,
      title: "Tin tức chi tiết",
      href: "",
    },
  ];
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className="blog-detail-page">
        <div className="container">
          <h1 className="title">{post.title}</h1>
          <div className="detail-content">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>

          <PostRelated post={post} />
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
