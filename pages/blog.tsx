import { GetServerSideProps } from "next";
import Breadcumb from "../components/breadcumb";
import Pagination from "../components/pagination";
import PostItem from "../components/post-item";
import Layout from "../layouts/Main";

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const currentPage = (page as number) - 1;
  const res = await fetch(
    `http://localhost:9091/api/v1/web/post?page=${
      currentPage
    }&size=8&sort=id,desc`
  );
  const response = await res.json();

  const result = response.result;
  return {
    props: {
      posts: result.items,
      total: result.total,
      page: result.page,
    },
  };
};

const BlogPage = ({ posts, total, page }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: "Tin tức",
      href: "",
    },
  ];

  if (!posts) <h1>Loading...</h1>;
  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <div className="py-4">
        <div className="container">
          <h2 className="text-center mb-[30px]">
            <span className="uppercase text-[#333] text-[28px] font-bold inline-block">
              Tin tức
            </span>
          </h2>
          <div className="flex flex-wrap -mx-4">
            {posts &&
              posts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col w-1/2 px-4 mb-5 lg:w-1/4 md:w-1/3"
                >
                  <PostItem item={item}></PostItem>
                </div>
              ))}
          </div>

          <Pagination
            totalItems={total}
            currentPage={page + 1}
            itemsPerPage={8}
            renderPageLink={(page) => `/blog?page=${page}`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
