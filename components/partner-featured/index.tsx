import PartnerCarousel from "./carousel";

const PartnerFeatured = () => {
  const data = [
    {
      id: 1,
      image: "images/brand1.png",
    },
    {
      id: 2,
      image: "images/brand2.png",
    },
    {
      id: 3,
      image: "images/brand3.png",
    },
    {
      id: 4,
      image: "images/brand4.png",
    },
    {
      id: 5,
      image: "images/brand1.png",
    },
    {
      id: 6,
      image: "images/brand2.png",
    },
    {
      id: 7,
      image: "images/brand3.png",
    },
  ];

  return (
    <section className="brand-img">
      <div className="container">
        <div className="title-text">
          <span>Hệ thống phân phối</span>
        </div>
        <PartnerCarousel partners={data} />
      </div>
    </section>
  );
};

export default PartnerFeatured;
