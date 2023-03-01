import { GetServerSideProps } from "next";
import Layout from "../layouts/Main";
import dynamic from "next/dynamic";
import Breadcumb from "../components/breadcumb";
import { server } from "../utils/server";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  if (!slug) {
    return {
      notFound: true
    }
  }

  const fetchData = await fetch(
    `${server}/api/v1/web/page-content/${slug}`
  );
  const response = await fetchData.json();
  if (!response || !response.success) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      page: response.result,
    },
  };
};

const DynamicPage = ({ page }) => {
  const breadcrumbs = [
    {
      id: 1,
      title: page.title,
      href: "",
    },
  ];

  return (
    <Layout>
      <Breadcumb breadcrumbs={breadcrumbs} />
      <div className="max-w-[776px] mx-auto pt-[40px] pb-[20px]">
        <h1 className="text-center text-[32px] font-bold leading-[40px] mb-[16px]">{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </div>
    </Layout>
  );
};

// export const getStaticPaths = () => {
//     const fetchedData = [
//         {
//             template: "aboutPage",
//             slug: "about",
//         },
//         {
//             template: "contactPage",
//             slug: "lien-he",
//         },
//         {
//             template: "blogPage",
//             slug: "tin-tuc",
//         },
//         {
//             template: "productPage",
//             slug: "san-pham",
//         }
//     ];

//     return {
//         paths: fetchedData.map(({slug}) => ({params: {slug}})),
//         fallback: "blocking",
//     };
// };

export default DynamicPage;
