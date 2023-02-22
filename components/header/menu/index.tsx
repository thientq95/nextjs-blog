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
            slug: "lien-he"
        }
    ];

    return (
        <nav className="menubar">
            <div className="menubar-container">
                <div className="menu">
                    <ul className="menu--left menu__list menu_desktop">
                        {menuItem.map((item) => (
                            <li className="menu__item">
                                <Link href={`${item.slug}`} title={`${item.item}`} className="menu__link">{`${item.item}`}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
