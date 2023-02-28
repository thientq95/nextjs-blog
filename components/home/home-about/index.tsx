import Link from "next/link";

const HomeAbout = () => {
    return (
        <section className="bg-[#F7FCF0] py-16 overflow-x-hidden">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full order-1 mt-[25px] md:mt-0 md:order-none md:w-[48.5%]">
                        <img src={`/images/banner1.webp`} alt="alt"
                        width="615" height="485"/>
                    </div>
                    <div className="w-full min-w-0 md:ml-5 md:flex-1 md:w-auto">
                        <div className="mb-8 md:custom-active:mb-0">
                            <div className="flex flex-nowrap justify-center items-center"><span
                                className="font-bold text-xl lg:text-[36px] uppercase leading-normal text-center w-fit block"> câu chuyện thương hiệu </span>
                            </div>
                        </div>
                        <div className="md:pl-20"><p
                            className="text-sm font-light line-clamp-5 text-secondary">Khởi nguồn từ sự mong muốn chăm
                            sóc sức khỏe và nâng cao vẻ đẹp con người bằng các sản phẩm được chiết xuất 100% thành phần
                            tự nhiên. Cô gái trẻ đã xây dựng nên thương hiệu Natural Pharm với quan niệm luôn tìm kiếm
                            các nguồn nguyên liệu thiên nhiên có dưỡng chất vàng để tạo nên sản phẩm tốt nhất cho người
                            sử dụng.</p>
                            <Link href={"/"} className={`btn__link mt-5`}>
                                Tìm hiểu thêm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout;