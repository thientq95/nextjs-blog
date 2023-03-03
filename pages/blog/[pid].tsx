import { GetServerSideProps } from "next";
import Breadcumb from "../../components/breadcumb";
import PostRelated from "../../components/post-related";
import Layout from "../../layouts/Main";
import { Post } from "../../types";
import { server } from "../../utils/server";

type PostType = {
  post: Post;
  postRelateds: Post[];
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/v1/web/post/${pid}`);
  const json = await res.json();

  const postRelatedResponse = await fetch(`${server}/api/v1/web/post?page=0&size=10&categoryIds=${json.result.postCategory.id}&excludeIds=${json.result.id}`);
  const postRelatedJson = await postRelatedResponse.json();
  // console.warn(postRelatedJson)
  return {
    props: {
      post: json.result,
      postRelateds:  postRelatedJson.result.items ?? []
    },
  };
};

const BlogDetailPage = ({ post, postRelateds }: PostType) => {
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
        line-height: 160%;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 1em;
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
            <PostRelated postRelateds={postRelateds}/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
