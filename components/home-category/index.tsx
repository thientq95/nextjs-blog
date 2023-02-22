import Link from "next/link";

const HomeCategory = () => {
    return (
        <section className="overflow-hidden category-grid-home">
            <div className="container">
                <div className="category-grid">
                    <div className="gri1">
                        <div className="category-grid-item group">
                            <figure className="overflow-hidden flex w-full h-full">
                                <img src={`./images/80_gri1.webp`}
                                    className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                    alt="alt"/>
                            </figure>
                            <Link href={"/"} className="category-grid-item__info">
                                <h3 className="mb-0 md:mb-[20px]">Vegan vitamin suplement</h3>
                                <span className={`btn__link`}>Tìm hiểu thêm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="gri2">
                        <div className="category-grid-item group">
                            <figure className="overflow-hidden flex w-full h-full">
                                <img src={`./images/80_gri2.webp`}
                                     className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                     alt="alt"/>
                            </figure>
                            <Link href={"/"} className="category-grid-item__info">
                                <h3 className="mb-0 md:mb-[20px]">Vegan vitamin suplement</h3>
                                <span className={`btn__link`}>Tìm hiểu thêm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="gri3">
                        <div className="category-grid-item group">
                            <figure className="overflow-hidden flex w-full h-full">
                                <img src={`./images/80_gri3.webp`}
                                     className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                     alt="alt"/>
                            </figure>
                            <Link href={"/"} className="category-grid-item__info">
                                <h3 className="mb-0 md:mb-[20px]">Vegan vitamin suplement</h3>
                                <span className={`btn__link`}>Tìm hiểu thêm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="gri4">
                        <div className="category-grid-item group">
                            <figure className="overflow-hidden flex w-full h-full">
                                <img src={`./images/80_gri4.webp`}
                                     className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                     alt="alt"/>
                            </figure>
                            <Link href={"/"} className="category-grid-item__info">
                                <h3 className="mb-0 md:mb-[20px]">Vegan vitamin suplement</h3>
                                <span className={`btn__link`}>Tìm hiểu thêm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="gri5">
                        <div className="category-grid-item group">
                            <figure className="overflow-hidden flex w-full h-full">
                                <img src={`./images/80_gri5.webp`}
                                     className="duration-200 ease-in scale-100 hover:scale-105 w-full h-full"
                                     alt="alt"/>
                            </figure>
                            <Link href={"/"} className="category-grid-item__info">
                                <h3 className="mb-0 md:mb-[20px]">Vegan vitamin suplement</h3>
                                <span className={`btn__link`}>Tìm hiểu thêm</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default HomeCategory;