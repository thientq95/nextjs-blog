import Breadcumb from "../../../components/breadcumb";
import Layout from "../../../layouts/Main";

const Signin = () => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Đăng ký",
            href: "",
        },
    ];
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs} />
            <div className={`py-4`}></div>
        </Layout>
    )
}

export default Signin;