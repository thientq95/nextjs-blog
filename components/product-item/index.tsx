import Link from "next/link";

const ProductItem = ({item}) => {
    return (
        <>
            <Link href={`/product/${item.id}`} className={`bg-[#FFF5F2] rounded-[3px] block mb-4 pb-[120%] relative`}>
                <img src={`${item.productImage}`} alt={`${item.name}`} className={`absolute max-w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`} />
            </Link>
            <div className={`flex flex-wrap`}>
                <div className={`flex-1 min-w-0`}>
                    <h3 className={`text-base line-clamp-2 w-full mb-[6px]`}>
                        <Link href={`/product/${item.id}`} className={`text-black`}>{item.name}</Link>
                    </h3>
                    <div className={`flex justify-between w-full mt-auto flex-nowrap`}>
                        <div className={`flex-1 min-w-0`}>
                            <div className={`flex items-center justify-between flex-nowrap`}>
                                <span className="flex-1 min-w-0 text-xs">{item.category}</span>
                            </div>
                            <div className={`flex items-end justify-between flex-nowrap`}>
                                <div className={`flex-1 min-w-0`}>
                                    <strong className="text-base text-primary"> {item.priceNew}đ</strong>
                                    <span className="ml-2 text-xs line-through">{item.priceOld}đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-[3px] w-[30px] h-[30px] mt-[30px] bg-[linear-gradient(90deg,#B78260_-14.95%,#815030_66.53%)] flex justify-center items-center`}>
                    <span className="text-white text-[20px]">+</span>
                </div>
            </div>
        </>

    );
};

export default ProductItem;
