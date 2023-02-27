import {GetServerSideProps} from "next";
import Breadcumb from "../../components/breadcumb";
import PostRelated from "../../components/post-related";
import Layout from "../../layouts/Main";
import {Post} from "../../types";

type PostType = {
    post: Post;
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
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
            title: "Tin tức",
            href: "/blog",
        },
        {
            id: 2,
            title: "Tin tức chi tiết",
            href: "",
        },
    ];
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs}/>
            <section className={`flex flex-wrap justify-between pt-5 mb-5 `}>
                <div className={`container`}>
                    <h1 className={`text-center text-[30px] mb-[20px]`}>{post.title}</h1>
                    <div className={`content-main`}>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                    <div className={`p-3 my-3 rounded bg-[#fafafa]`}>
                        <PostRelated/>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogDetailPage;
