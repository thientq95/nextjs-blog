import PostItem from "../post-item";
import Link from "next/link";

const PostFeatured = () => {
    const posts = [
        {
            id: 1,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 2,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 3,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 4,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 5,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 6,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
        {
            id: 7,
            image: "./images/blog.webp",
            date: "02/02/2023",
            title: "Tinh dầu là gì? Các loại tinh dầu? Lợi ích sức khỏe không?",
            desc: `Không một ai ngờ rằng, cô sinh viên ngành Truyền Thông lại là người sáng lập nên “Thương hiệu dược mỹ phẩm Natural Pharm” chỉ từ những suy nghĩ chớm nở ngày bé nhưng mang cả một nghĩa cử cao đẹp. Natural Pharm không chỉ sản xuất các sản phẩm`,
        },
    ];
    return (
        <section className={`py-16 overflow-x-hidden`}>
            <div className={`container`}>
                <div className={`mb-8`}>
                    <div className={`flex justify-center items-center`}>
                        <span className={`font-bold text-xl lg:text-[36px] uppercase leading-normal text-center w-fit block`}>Tin tức mới nhất</span>
                    </div>
                </div>
                <div className={`flex flex-wrap justify-between`}>
                    <div className={`w-full rounded-lg lg:p-7 lg:shadow-xl lg:w-1/2`}>
                        {posts.slice(0, 3).map((item) => (
                            <div className={`flex justify-between py-5`}>
                                <Link href={``} className={`w-[40%]`}>
                                    <img src={item.image} alt={item.title} className={`w-full h-full`}/>
                                </Link>
                                <div className={`flex-1 min-w-0 ml-6`}>
                                    <div className={`mt-4 mb-2 text-base text-gray-700`}>
                                        {item.date}
                                    </div>
                                    <div className={`mb-2 text-base font-medium text-[#000] line-clamp-2`}>
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex mt-5"><Link
                            className="border-0 md:border p-0 md:px-[10px] md:py-[6px] border-[#815030] text-[#815030] text-lg transition hover:bg-[#815030] hover:text-white block mx-auto w-fit"
                            href={`blog`}>Xem tất cả</Link>
                        </div>
                    </div>
                    <div className={`flex flex-col w-full min-w-0 lg:ml-8 lg:flex-1 p-7`}>
                        {posts.slice(3, 4).map((item) => (
                            <>
                                <Link href={``} className={`block mb-8`}>
                                    <img src={item.image} alt={item.title} className={`w-full`}/>
                                </Link>
                                <div className={`mt-4 mb-2 text-base text-gray-700`}>{item.date}</div>
                                <div
                                    className={`mb-2 text-base font-medium text-[#000] line-clamp-2`}>{item.title}</div>
                                <div className={`text-sm text-black line-clamp-3`}>{item.desc}</div>
                                <div className="flex mt-5"><Link
                                    className="border-0 md:border p-0 md:px-[10px] md:py-[6px] border-[#815030] text-[#815030] text-lg transition hover:bg-[#815030] hover:text-white block mx-auto w-fit"
                                    href={``}>Đọc bài viết</Link>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostFeatured;
