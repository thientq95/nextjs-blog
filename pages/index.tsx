import Layout from "../layouts/Main";
import HomeAbout from "../components/home/home-about";
import ProductFeatured from "../components/product-featured";
import PostFeatured from "../components/post-featured";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomeCategory from "../components/home/home-category";
import HomeIntro from "../components/home/home-intro";
import HomeProductNew from "../components/home/home-product-new";
import HomeSlider from "../components/home/home-slider";
import { GetServerSideProps } from "next";
import { server } from "../utils/server";


export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const currentPage = (page as number) - 1;
  const res = await fetch(
    `${server}/api/v1/web/post?page=${currentPage}&size=7&sort=id,desc`
  );
  const json = await res.json();

  const result = json.result;
  return {
    props: {
      posts: result.items,
      total: result.total,
      page: result.page,
    },
  };
};

const IndexPage = ({ posts }) => {
  return (
    <Layout>
      <HomeSlider />
      <div className="main_content">
        <HomeIntro />
        <HomeCategory />
        <HomeProductNew />
        <HomeAbout />
        <ProductFeatured />
        <PostFeatured posts={posts}/>
      </div>

      {/* <BannerFeatured /> */}
      {/* <PartnerFeatured /> */}
      {/* <Social /> */}
    </Layout>
  );
};

export default IndexPage;
