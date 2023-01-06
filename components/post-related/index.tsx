import useSWR from "swr";
import { PageResult, Post } from "../../types";
import PostRelatedItem from "./item";

const PostRelated = ({ post }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `http://localhost:9091/api/v1/web/post?page=0&size=10&categoryIds=${post.postCategoryId}&excludeIds=${post.id}`,
    fetcher
  );
  const posts = data && (data.result as PageResult<Post>).items;
  return (
    <div className="blog-related">
      <div className="title-text">
        <span>Tin liên quan</span>
      </div>
      <div className="row">
        {posts && posts.map((item) => (
          <div className="col-lg-3 col-6" key={item.id}> 
            <PostRelatedItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostRelated;
