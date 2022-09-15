import Footer from "../components/footer";
import Header from "../components/header";
import HomeIntro from "../components/home-intro";
import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <HomeIntro />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
