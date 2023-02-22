import Breadcumb from '../components/breadcumb';
import Layout from '../layouts/Main';
import ProductItem from "../components/product-item";

const ProductPage = () => {
    const breadcrumbs = [{
        id: 1,
        title: 'Sản phẩm',
        href: 'products'
    }];
    const products = [
        {
            id: 1,
            name: 'Tinh Dầu Thuần Chay Thiên Nhiên',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 2,
            name: 'WELL KID PLUS (multi-vitamin liquid) hỗ trợ tăng cường đề kháng, giúp ăn ngon giảm mệt mỏi',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 3,
            name: 'Nước Yến Nha Đam Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 4,
            name: 'Nước Dưa Hấu Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 5,
            name: 'Nước Yến Nha Đam Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 6,
            name: 'Nước Dưa Hấu Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 7,
            name: 'Nước Dưa Hấu Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 8,
            name: 'Nước Yến Nha Đam Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
        {
            id: 9,
            name: 'Nước Dưa Hấu Đường Phèn',
            productImage: './images/product.webp',
            category: 'Natural beauty',
            priceNew: '79.000',
            priceOld: '99.000',
        },
    ];
    return (
        <Layout>
            <Breadcumb breadcrumbs={breadcrumbs}/>
            <div className="py-4">
                <div className="container">
                    <h2 className="text-center mb-[30px]">
                        <span className="uppercase text-[#333] text-[28px] font-bold inline-block">Sản phẩm</span>
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        {products.map((item) => (
                            <div className="flex flex-col w-1/2 px-4 mb-5 lg:w-1/5 md:w-1/3">
                                <ProductItem key={item.id} item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage;