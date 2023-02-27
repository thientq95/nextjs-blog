import Link from "next/link";

const PostItem = ({item}) => {
    return (
        <>
            <Link href={`blog/${item.seoAlias}`} title={item.title} className={`overflow-hidden rounded`}>
                <img src={`http://localhost:9091/${item.imageUrl}`} className="h-[160px] object-cover" alt={item.title} width={`100%`}/>
            </Link>
            <h3 className={`py-[15px]`}>
                <Link href={`blog/${item.seoAlias}`} title={item.title} className={`uppercase text-[#333] font-semibold text-[15px]`}>
                    {item.title}
                </Link>
            </h3>
            <p className={`text-[#a3a3a3] text-[14px]`}>
                {item.date}
            </p>
        </>
    );
};

export default PostItem;
