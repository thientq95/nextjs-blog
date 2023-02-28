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

const IndexPage = () => {
  return (
    <Layout>
      <HomeSlider />
      <div className="main_content">
        <HomeIntro />
        <HomeCategory />
        <HomeProductNew />
        <HomeAbout />
        <ProductFeatured />
        <PostFeatured />
      </div>

      {/* <BannerFeatured /> */}
      {/* <PartnerFeatured /> */}
      {/* <Social /> */}
    </Layout>
  );
};

export default IndexPage;
