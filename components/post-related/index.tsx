import useSWR from "swr";
import {PageResult, Post} from "../../types";
import PostRelatedItem from "./item";
import Link from "next/link";

const PostRelated = () => {
    // const fetcher = (url: string) => fetch(url).then((res) => res.json());
    // const { data, error } = useSWR(
    //   `http://localhost:9091/api/v1/web/post?page=0&size=10&categoryIds=${post.postCategoryId}&excludeIds=${post.id}`,
    //   fetcher
    // );
    // const posts = data && (data.result as PageResult<Post>).items;
    const postItem = [
        {
            id: 1,
            image: "./images/blog.webp",
            title: "Top 5 các thương hiệu tinh dầu uy tín trên thế giới và Việt Nam 2022",
            date: '02/20/2023'
        },
        {
            id: 2,
            image: "./images/blog.webp",
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            date: '02/20/2023'
        },
        {
            id: 3,
            image: "./images/blog.webp",
            title: "Top 5 các thương hiệu tinh dầu uy tín trên thế giới và Việt Nam 2022",
            date: '02/20/2023'
        },
        {
            id: 4,
            image: "./images/blog.webp",
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            date: '02/20/2023'
        },
        {
            id: 5,
            image: "./images/blog.webp",
            title: "Top 5 các thương hiệu tinh dầu uy tín trên thế giới và Việt Nam 2022",
            date: '02/20/2023'
        },
        {
            id: 6,
            image: "./images/blog.webp",
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            date: '02/20/2023'
        },
        {
            id: 7,
            image: "./images/blog.webp",
            title: "Top 5 các thương hiệu tinh dầu uy tín trên thế giới và Việt Nam 2022",
            date: '02/20/2023'
        },
        {
            id: 8,
            image: "./images/blog.webp",
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            date: '02/20/2023'
        },
        {
            id: 9,
            image: "./images/blog.webp",
            title: "Top 5 các thương hiệu tinh dầu uy tín trên thế giới và Việt Nam 2022",
            date: '02/20/2023'
        },
        {
            id: 10,
            image: "./images/blog.webp",
            title: "Tinh dầu thiên nhiên Bách Xanh chính hãng nguyên chất 100%",
            date: '02/20/2023'
        },
    ];
    return (
        <>
            <b className="uppercase">Bài viết khác:</b>
            <ul>
                {postItem.map((item) => (
                    <li key={item.id}>
                        <Link href={`/blog/${item.id}`} className={`text-[#666]`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
        // <div className="blog-related">
        //     <div className="title-text">
        //         <span>Tin liên quan</span>
        //     </div>
        //     <div className="row">
        //         {postItem.map((item) => (
        //             <div className="col-lg-3 col-6" key={item.id}>
        //                 <PostRelatedItem item={item}/>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default PostRelated;
