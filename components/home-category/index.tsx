import Link from "next/link";

const HomeCategory = () => {

    const cateItem = [
        {
            id: 1,
            image: `/images/80_gri1.webp`,
            title: `Vegan vitamin suplement`
        },
        {
            id: 2,
            image: `/images/80_gri2.webp`,
            title: `Vegan beauty`
        },
        {
            id: 3,
            image: `/images/80_gri3.webp`,
            title: `Health & wellness`
        },
        {
            id: 4,
            image: `/images/80_gri4.webp`,
            title: `Vegan sport`
        },
        {
            id: 5,
            image: `/images/80_gri5.webp`,
            title: `Natural beauty`
        }
    ]

    return (
        <section className="overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 gap-[18px_0] mb-[18px] lg:grid-cols-3 lg:gap-[18px]">
                    {cateItem.slice(0,1).map((item) =>(
                        <div className={`col-span-1`}>
                            <div className="flex h-[418px] relative group">
                                <figure className="overflow-hidden flex w-full h-full">
                                    <img src={item.image}
                                         className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                         alt={item.title}/>
                                </figure>
                                <Link href={"/products"} className="absolute top-[50%] left-0 pl-[17px] scale-[translate(0,-50%)]">
                                    <h3 className="max-w-[200px] font-bold text-[24px] uppercase text-[#101010] mb-0 md:mb-[20px]">
                                        {item.title}
                                    </h3>
                                    <span className={`btn__link`}>Tìm hiểu thêm</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className={`col-span-2 grid grid-cols-2 gap-[18px]`}>
                        {cateItem.slice(3,4).map((item) =>(
                            <div className={`col-span-2 grid gap-[18px]`}>
                                <div className="flex h-[200px] relative group">
                                    <figure className="overflow-hidden flex w-full h-full">
                                        <img src={item.image}
                                             className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                             alt={item.title}/>
                                    </figure>
                                    <Link href={"/products"} className="absolute top-[20%] left-0 pl-[17px] scale-[translate(0,-50%)]">
                                        <h3 className="max-w-[200px] font-bold text-[24px] uppercase text-[#101010] mb-0 md:mb-[20px]">
                                            {item.title}
                                        </h3>
                                        <span className={`btn__link`}>Tìm hiểu thêm</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {cateItem.slice(1,3).map((item) =>(
                            <div className={`col-span-1`}>
                                <div className="flex h-[200px] relative group">
                                    <figure className="overflow-hidden flex w-full h-full">
                                        <img src={item.image}
                                             className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                             alt={item.title}/>
                                    </figure>
                                    <Link href={"/products"} className="absolute bottom-[30px] left-0 pl-[17px] scale-[translate(0,-50%)]">
                                        <h3 className="max-w-[200px] font-bold text-[24px] uppercase text-[#101010] mb-0 md:mb-[20px]">
                                            {item.title}
                                        </h3>
                                        <span className={`btn__link`}>Tìm hiểu thêm</span>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="grid gap-[18px]">
                    {cateItem.slice(4,5).map((item) =>(
                        <div className={`place-items-[]`}>
                            <div className="flex h-full relative group">
                                <figure className="overflow-hidden flex w-full h-full">
                                    <img src={item.image}
                                         className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                         alt={item.title}/>
                                </figure>
                                <Link href={"/products"} className="absolute top-[20%] left-0 pl-[30%] scale-[translate(0,-50%)]">
                                    <h3 className="font-bold text-[24px] uppercase text-[#101010] mb-0 md:mb-[20px]">
                                        {item.title}
                                    </h3>
                                    <span className={`btn__link`}>Tìm hiểu thêm</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
export default HomeCategory;