import BannerFeatured from "../components/banner-featured";
import HomeIntro from "../components/home-intro";
import HomeSlider from "../components/home-slider";
import PartnerFeatured from "../components/partner-featured";
import PostFeatured from "../components/post-featured";
import ProductFeatured from "../components/product-featured";
import Social from "../components/social";
import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <HomeSlider />
      <HomeIntro />
      <PostFeatured />
      <ProductFeatured />
      <BannerFeatured />
      <PartnerFeatured />
      <Social />
    </Layout>
  );
};

export default IndexPage;
