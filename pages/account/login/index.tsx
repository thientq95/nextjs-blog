import Layout from "../../../layouts/Main";
import Breadcumb from "../../../components/breadcumb";
const Login =() => {
    const breadcrumbs = [
        {
            id: 1,
            title: "Đăng nhập",
            href: "",
        },
    ];
    return(
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs} />
            <div className={`py-4`}></div>
        </Layout>
    )
}
export default Login;