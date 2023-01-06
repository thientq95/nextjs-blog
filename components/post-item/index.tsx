import Link from "next/link";

const PostItem = ({ item }) => {
  return (
    <div className="item">
      <Link href={`blog/${item.seoAlias}`} title="">
        <div className="thumb">
          <img src={`${item.imageUrl}`} alt="" />
        </div>
        <div className="txt-content">
          <h3 className="title">
            { item.title }
          </h3>
          {item.description && (
            <p className="desc">
              { item.description }{" "}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
