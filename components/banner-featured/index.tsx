import BannerCarousel from "./carousel";

const BannerFeatured = () => {
  const banners = [
    {
      id: 1,
      name: "Nước Chanh Dây Nha Đam Yến",
      bannerImage: "images/SANPHAM-1/BANNER1.png",
    },
    {
      id: 2,
      name: "Nước Chanh Muối Bạc Hà",
      bannerImage: "images/SANPHAM-1/BANNER2.png",
    },
    {
      id: 3,
      name: "Nước Chanh Dây Nha Đam Yến",
      bannerImage: "images/SANPHAM-1/BANNER1.png",
    },
    {
      id: 4,
      name: "Nước Chanh Muối Bạc Hà",
      bannerImage: "images/SANPHAM-1/BANNER2.png",
    },
  ];

  return (
    <section className="product-home">
      <div className="container">
        <BannerCarousel banners={banners} />;
      </div>
    </section>
  );
};

export default BannerFeatured;
