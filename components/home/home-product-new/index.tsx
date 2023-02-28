import Link from "next/link";

const HomeProductNew = () => {
    const productItem = [
        {
            id: 1,
            image: "./images/80_vegan-vitamin-supplement.webp",
            subTitle: "Vegan Vitamin Supplement",
            title: "Calcium Bonecare Liquid",
            desc: "Hỗ trợ bổ sung canxi, giảm nguy cơ còi xương, loãng xương, giúp phát triển xương và răng chắc khỏe",
        },
        {
            id: 2,
            image: "./images/80_health-wellness.webp",
            subTitle: "Health & Wellness",
            title: "Muối Súc Miệng Natri Clorua",
            desc: "Kháng khuẩn tự nhiên, ngăn ngừa các bệnh răng miệng, viêm họng, các bệnh trên da và vệ sinh vết thương",
        },
        {
            id: 3,
            image: "./images/80_health-wellness-dau-tram-gio.webp",
            subTitle: "Health & Wellness",
            title: "Dầu Tràm Gió",
            desc: "Hỗ trợ điều trị các vấn đề hô hấp, đau đầu, xương khớp, có tính năng kháng khuẩn, trị mụn và chống viêm hiệu quả",
        },
        {
            id: 4,
            image: "./images/80_natural-beauty.webp",
            subTitle: "Natural Beauty",
            title: "Dầu Massage Sunflower Morning",
            desc: "Giảm đau nhức, mỏi cơ, bổ sung vitamin E cải thiện cơ khớp, mùi hương tự nhiên mang lại cảm giác thư giãn",
        },
    ];

    return (
        <section className="overflow-x-hidden py-[70px]">
            <div className="container">
                <div className="mb-8">
                    <div className="flex justify-center items-center mb-0"><span
                        className="font-bold text-xl lg:text-[36px] uppercase leading-normal text-center w-fit block"> các dòng sản phẩm mới của </span>
                    </div>
                </div>
                <div className="flex flex-wrap md:block">
                    {productItem.map((item) => (
                        <div key={item.id} className="flex w-full mb-[30px] md:mb-0 md:basis-1/2 odd:justify-start even:justify-end">
                            <div className="w-full max-w-[800px] flex flex-col md:flex-row items-center justify-between">
                                <div className="relative md:p-[10px] flex flex-col items-center">
                                    <img src={`./images/circle_bg.png`} alt="bg" className="relative z-20 block"/>
                                    <img src={`./images/circle_blur.png`} alt="blur" className="relative z-10 block -mt-2"/>
                                    <div className="max-w-[94px] md:max-w-[240px] absolute z-30 bottom-0">
                                        <img src={`${item.image}`} alt={`${item.title}`} width="280" height="330"/>
                                    </div>
                                </div>
                                <div className="flex-1 md:p-[10px]">
                                    <div className="text-center md:text-left">
                                        <span className="text-[#845536] font-semibold text-sm">
                                            {`${item.subTitle}`}
                                        </span>
                                        <h3 className="leading-tight text-center md:text-left font-bold text-[16px] md:text-[20px]">
                                            {`${item.title}`}
                                        </h3>
                                        <p className="text-sm text-center md:text-left line-clamp-2">
                                            {`${item.desc}`}
                                        </p>
                                        <Link href={'/products'} className={`btn__link mt-5`}>Tìm hiểu thêm</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default HomeProductNew;