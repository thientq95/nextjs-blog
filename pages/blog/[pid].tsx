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
  const json = await res.json();
  return {
    props: {
      post: json.result,
    },
  };
};

const BlogDetailPage = ({ post }: PostType) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Tin tức",
      href: "/blog",
    },
    {
      id: 2,
      title: post.title,
      href: "",
    },
  ];
  return (
    <Layout>
      <style>{`
       .content-main figure.image_resized, .content-main .image_resized {
        padding: 20px 0;
        text-align: center;
        margin: auto
       }
       .content-main p {
        line-height: 32px;
       }
       .content-main .text-big {
        font: 400 18px arial;
       }
      `}</style>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <section className={`flex flex-wrap justify-between pt-5 mb-5 `}>
        <div className={`max-w-[776px] mx-auto pt-[40px] pb-[20px]`}>
          <h1 className={`text-center text-[32px] font-bold mb-[20px] leading-[40px]`}>{post.title}</h1>
          <div className={`content-main`}>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
          <div className={`p-3 my-3 rounded bg-[#fafafa]`}>
            <PostRelated />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
