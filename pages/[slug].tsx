import { GetServerSideProps } from "next";
import Layout from "../layouts/Main";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const slug = query.slug;
    console.warn(slug)
    return {
      props: {
        slug,
      },
    };
  };
  
const DynamicPage = ({ slug }) => {
    return (
        <Layout>
            { slug }
        </Layout>
    )
}

export default DynamicPage;