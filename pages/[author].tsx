import { GetServerSideProps } from "next";
import Layout from "../layouts/Main";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const author = query.author;
    console.warn(author)
    return {
      props: {
        author,
      },
    };
  };
  
const DynamicAuthorPage = ({ author }) => {
    return (
        <Layout>
             Author { author }
        </Layout>
    )
}

export default DynamicAuthorPage;