import Link from "next/link";

const PostRelatedItem = ({ item }) => {
  return (
    <div className="item">
      <Link
        href={`/blog/${item.seoAlias}`}
        title={ item.title }
      >
        <div className="thumb">
          <img
            src={`http://localhost:9091/${item.imageUrl}`}
          />
        </div>
        <div className="txt-content">
          <div className="text-clamp2">
            { item.title }
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostRelatedItem;
