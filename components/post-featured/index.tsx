import PostItem from "../post-item";
import Link from "next/link";
import { format } from "date-fns";
import {server} from "../../utils/server";

const PostFeatured = ({ posts }) => {
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
                        {posts && posts.slice(0, 3).map((item) => (
                            <div key={item.id} className={`flex justify-between py-5`}>
                                <Link href={`/blog/${item.seoAlias}`} className={`w-[40%]`}>
                                    <img src={`${server}/${item.imageUrl}`} alt={item.title} className={`w-full h-[200px] object-cover`}/>
                                </Link>
                                <div className={`flex-1 min-w-0 ml-6`}>
                                    <div className={`mt-4 mb-2 text-base text-gray-700`}>
                                        {format(item.createdDate, "dd/MM/yyyy")}
                                    </div>
                                    <Link href={`/blog/${item.seoAlias}`} className={`mb-2 text-base font-bold text-[#000] line-clamp-2`}>
                                    {item.title}
                                    </Link>
                                    <div className={`text-sm text-black line-clamp-3`}>{item.description}</div>
                                </div>
                            </div>
                        ))}
                        <div className="flex mt-5"><Link
                            className="border-0 md:border p-0 md:px-[10px] md:py-[6px] border-[#815030] text-[#815030] text-lg transition hover:bg-[#815030] hover:text-white block mx-auto w-fit"
                            href={`/blog`}>Xem tất cả</Link>
                        </div>
                    </div>
                    <div className={`flex flex-col w-full min-w-0 lg:ml-8 lg:flex-1 p-0 md:p-7`}>
                        {posts && posts.slice(3, 4).map((item) => (
                            <div key={item.id}>
                                <Link href={`/blog/${item.seoAlias}`} className={`block mb-8`}>
                                    <img src={`${server}/${item.imageUrl}`} alt={item.title} className={`w-full max-h-[415px] object-cover`}/>
                                </Link>
                                <div className={`mt-4 mb-2 text-base text-gray-700`}>{format(item.createdDate, "dd/mm/yyyy")}</div>
                                <div
                                    className={`mb-2 text-base font-bold text-[#000] line-clamp-2`}>{item.title}</div>
                                <div className={`text-sm text-black line-clamp-3`}>{item.description}</div>
                                <div className="flex mt-5"><Link
                                    className="border-0 md:border p-0 md:px-[10px] md:py-[6px] border-[#815030] text-[#815030] text-lg transition hover:bg-[#815030] hover:text-white block mx-auto w-fit"
                                    href={`/blog/${item.seoAlias}`}>Đọc bài viết</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostFeatured;
