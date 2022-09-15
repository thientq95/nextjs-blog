import BannerFeatured from '../components/banner-featured';
import Breadcumb from '../components/breadcumb';
import ProductFeatured from '../components/product-featured';
import Layout from '../layouts/Main';

const ProductPage = () => {
    const breadcrumbs = [{
        id: 1,
        title: 'Trang chủ',
        href: ''
    },{
        id: 12,
        title: 'Sản phẩm',
        href: ''
    }]
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs} />
            <BannerFeatured />
            <ProductFeatured />
        </Layout>
    )
}

export default ProductPage;