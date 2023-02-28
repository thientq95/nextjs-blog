import Link from "next/link";
import Image from 'next/image'

const PostItem = ({item}) => {
    return (
        <>
            <Link href={`blog/${item.seoAlias}`} title={item.title} className={`overflow-hidden rounded`}>
                
                <Image
                className="h-[160px] object-cover"
                src={`http://localhost:9091/${item.imageUrl}`}
                alt={item.title}
                width={500}
                height={300}
                
      />
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
