import { GetServerSideProps } from "next";
import HomeIntro from "../components/home-intro";
import HomeSlider from "../components/home-slider";
import PostFeatured from "../components/post-featured";
import Layout from "../layouts/Main";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:9091/api/v1/web/config-theme`);
  const response = await res.json();

  return {
    props: {
      configs: response.result,
    },
  };
};

const IndexPage = ({ configs }) => {
  const bannerTops = configs.find(item => item.key === 'C22_BANNER_TOP');
  return (
    <Layout>
      <HomeSlider bannerTops={bannerTops}/>
      <HomeIntro />
      <PostFeatured />
      {/* <ProductFeatured /> */}
      {/* <BannerFeatured /> */}
      {/* <PartnerFeatured /> */}
      {/* <Social /> */}
    </Layout>
  );
};

export default IndexPage;
