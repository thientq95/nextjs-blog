import Breadcumb from "../components/breadcumb";
import PostItem from "../components/post-item";
import Layout from "../layouts/Main";



const BlogPage = (post) => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Tin tức",
            href: "blog",
        },
    ];

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
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs}/>
            <div className="py-4">
                <div className="container">
                    <h2 className="text-center mb-[30px]">
                        <span className="uppercase text-[#333] text-[28px] font-bold inline-block">Tin tức</span>
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        {postItem.map((item) => (
                            <div className="flex flex-col w-1/2 px-4 mb-5 lg:w-1/4 md:w-1/3">
                                <PostItem key={item.id} item={item}></PostItem>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;
