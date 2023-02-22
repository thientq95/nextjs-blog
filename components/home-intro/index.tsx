import Link from "next/link";

const HomeIntro = () => {
    return (
        <section className="overflow-x-hidden">
            <div className="container">
                <div className="md:flex md:flex-nowrap md:justify-between pb-[24px] md:pb-0">
                    <div className="slider2-item__info md:w-[27.5%] md:mt-[130px]">
                        <div className="text-center md:text-left">
                            <span
                                className="text-2xl !font-normal text-[#845536] font-slogan">Dược mỹ phẩm thuần chay</span>
                        </div>
                        <h5 className="text-[20px] line-clamp-2 md:text-[32px] md:line-clamp-3 leading-tight text-center md:text-left">
                            <Link href={""}>NATURAL PHARM</Link>
                        </h5>
                    </div>
                    <Link href={"/"} className="md:w-[43.5%]">
                        <img src={`./images/banner1.webp`} width="550" height="570"
                             alt="alt"/>
                    </Link>
                    <p className="md:w-1/4 md:mt-[320px] text-[14px] text-justify">Từ các nguyên
                        liệu thiên nhiên thuần túy trải qua quá trình sản xuất nghiêm ngặt cho ra đời những dòng sản
                        phẩm chăm sóc sức khỏe & sắc đẹp chất lượng. Sản phẩm giữ trọn vẹn được các dưỡng chất quý giá
                        đảm bảo độ lành tính - an toàn - hiệu quả cho người sử dụng.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
