import Link from "next/link";

const HomeIntro = () => {
    return (
        <section className="overflow-x-hidden">
            <div className="container">
                <div className="lg:flex lg:justify-between py-[24px]">
                    <div className="lg:w-[27.5%] lg:mt-[130px]">
                        <div className="text-center lg:text-left">
                            <span
                                className="text-2xl text-[#845536]">Dược mỹ phẩm thuần chay</span>
                        </div>
                        <h5 className="text-[20px] line-clamp-2 lg:text-[32px] lg:line-clamp-3 leading-tight text-center lg:text-left">
                            <Link href={""}>NATURAL PHARM</Link>
                        </h5>
                    </div>
                    <Link href={"/"} className="lg:w-[43.5%]">
                        <img src={`/images/banner1.webp`} width="550" height="570"
                             alt="alt" className={`mx-auto`}/>
                    </Link>
                    <p className="lg:w-1/4 lg:mt-[320px] text-[14px] text-justify">Từ các nguyên
                        liệu thiên nhiên thuần túy trải qua quá trình sản xuất nghiêm ngặt cho ra đời những dòng sản
                        phẩm chăm sóc sức khỏe & sắc đẹp chất lượng. Sản phẩm giữ trọn vẹn được các dưỡng chất quý giá
                        đảm bảo độ lành tính - an toàn - hiệu quả cho người sử dụng.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
