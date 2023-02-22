import {GetServerSideProps} from "next";
import Breadcumb from "../../components/breadcumb";
import PostRelated from "../../components/post-related";
import Layout from "../../layouts/Main";
import {Post} from "../../types";

// type PostType = {
//     post: Post;
// };

// export const getServerSideProps: GetServerSideProps = async ({query}) => {
//     const pid = query.pid;
//     const res = await fetch(`http://localhost:9091/api/v1/web/post/${pid}`);
//     const response = await res.json();
//
//     return {
//         props: {
//             post: response.result,
//         },
//     };
// };

const BlogDetailPage = () => {
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
                    <h1 className={`text-center text-[30px] mb-[20px]`}>QUE KHUẾCH TÁN TINH DẦU LÀ GÌ? LỰA CHỌN, CÔNG DỤNG VÀ CÁCH DÙNG</h1>
                    <div className={`content-main`}></div>
                    <div className={`p-3 my-3 rounded bg-[#fafafa]`}>
                        {/*<PostRelated post={post}/>*/}
                    </div>
                </div>
            </section>
            {/*<section className="blog-detail-page">*/}
            {/*    <div className="container">*/}
            {/*        <h1 className="title">{post.title}</h1>*/}
            {/*        <div className="detail-content">*/}
            {/*            <div dangerouslySetInnerHTML={{__html: post.content}}></div>*/}
            {/*        </div>*/}

            {/*        <PostRelated post={post}/>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </Layout>
    );
};

export default BlogDetailPage;
