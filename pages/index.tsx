import HomeIntro from "../components/home-intro";
import HomeSlider from "../components/home-slider";
import Layout from "../layouts/Main";
import HomeCategory from "../components/home-category";
import HomeProductNew from "../components/home-product-new";
import HomeAbout from "../components/home-about";
import ProductFeatured from "../components/product-featured";
import PostFeatured from "../components/post-featured";

const IndexPage = ({data}) => {
    return (
        <Layout>
            <HomeSlider/>
            <div className="main_content">
                <HomeIntro/>
                <HomeCategory/>
                <HomeProductNew/>
                <HomeAbout/>
                <ProductFeatured/>
                <PostFeatured/>
            </div>

            {/* <BannerFeatured /> */}
            {/* <PartnerFeatured /> */}
            {/* <Social /> */}
        </Layout>
    );
};

export default IndexPage;
