import Link from "next/link";

const BannerItem = ({ item }) => {
  return (
    <Link href="/">
      <img src={item.bannerImage} alt="" />
    </Link>
  );
};

export default BannerItem;
