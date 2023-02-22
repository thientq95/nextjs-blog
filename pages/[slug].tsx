import {GetServerSideProps} from "next";
import Layout from "../layouts/Main";
import dynamic from "next/dynamic";

// export const getServerSideProps: GetServerSideProps = async ({query}) => {
//     const slug = query.slug;
//     console.warn(slug)
//     return {
//         props: {
//             slug,
//         },
//     };
// };

const DynamicPage = ({page}) => {
    switch (page?.template) {
        case "about":
            const AboutPage = dynamic(() => import("../components/about"));
            return <AboutPage {...page} />;
        case "introduce":
            const IntroducePage = dynamic(() => import("../components/introduce"));
            return <IntroducePage {...page} />;
        default:
            return null;
    }
    // return (
    //     <Layout>
    //         { slug }
    //     </Layout>
    // )
};


export const getStaticPaths = () => {
    const fetchedData = [
        {
            template: "aboutPage",
            slug: "about",
        },
        {
            template: "contactPage",
            slug: "lien-he",
        },
        {
            template: "blogPage",
            slug: "tin-tuc",
        },
        {
            template: "productPage",
            slug: "san-pham",
        }
    ];

    return {
        paths: fetchedData.map(({slug}) => ({params: {slug}})),
        fallback: "blocking",
    };
};

export default DynamicPage;
