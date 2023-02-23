import Link from "next/link";

const Menu = () => {
    const menuItem = [
        {
            id: 1,
            item: "Câu chuyện thương hiệu",
            slug: "gioi-thieu"
        },
        {
            id: 2,
            item: "Sản phẩm",
            slug: "products"
        },
        {
            id: 3,
            item: "Khuyến mãi",
            slug: "khuyen-mai"
        },
        {
            id: 4,
            item: "Member",
            slug: "thanh-vien"
        },
        {
            id: 5,
            item: "Blog",
            slug: "blog"
        },
        {
            id: 6,
            item: "Liên hệ",
            slug: "contact"
        }
    ];

    return (
        <nav className={`relative top-0 left-0 z-50 hidden lg:block`}>
            <div className={`flex items-center justify-between relative`}>
                <ul className="flex-1 flex items-center justify-between relative">
                    {menuItem.map((item) => (
                        <li className={`flex items-center relative mr-[2.5rem] transition-all`}>
                            <Link href={`/${item.slug}`} title={`${item.item}`}
                                  className={`text-[16px] text-[#101010] flex items-center justify-center min-h-[22px] capitalize relative w-full border-b border-transparent`}>{`${item.item}`}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
