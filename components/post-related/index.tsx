import Link from "next/link";

const PostRelated = ({ postRelateds }) => {
    
    return (
        <>
            <b className="uppercase">Bài viết khác:</b>
            <ul>
                {postRelateds.map((item) => (
                    <li key={item.id}>
                        <Link href={`/blog/${item.seoAlias}`} className={`text-[#666]`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PostRelated;
