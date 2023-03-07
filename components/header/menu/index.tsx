import Link from "next/link";
import {useState} from "react";

const Menu = ({menuItem}) => {
    return (
        <nav className={`relative top-0 left-0 z-50 block`}>
            <div className={`flex items-center justify-between relative`}>
                <ul className="flex-1 flex items-center justify-between relative ul-nav">
                    {menuItem.map((item) => (
                        <li key={item.id} className={`flex items-center relative mr-[2.5rem] transition-all`}>
                            <Link href={`${item.link}`} title={`${item.name}`}
                                  className={`text-[16px] text-[#101010] flex items-center justify-center min-h-[22px] capitalize relative w-full border-b border-transparent`}>{`${item.name}`}</Link>
                            <ul className={`submenu`}>
                                {item.children.map((itemSub) => (
                                    <li key={item.id}>
                                        <Link href={`${itemSub.link}`} title={`${itemSub.name}`} className={`item`}>{itemSub.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
