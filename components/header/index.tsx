import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = () => {

    return (
        <header className="relative z-20 w-full header">
            <div className="header-top bg-[#052F1B] hidden md:block">
                <div className="container">
                    <div className="relative flex justify-between items-center min-h-[45px]">
                        <Link href={`/`} className="flex-shrink-0 text-white">
                            Kiểm tra đơn hàng
                        </Link>
                        <div className="w-full text-sm text-center text-white header-slogan">
                            Website chính thức của Natural Pharm
                        </div>
                        <div className="flex flex-wrap absolute right-0 z-[100]">
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center">
                                <img src="./images/icons/social-tiktok.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center ml-[20px]">
                                <img src="./images/icons/social-fb.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center ml-[20px]">
                                <img src="./images/icons/social-ins.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom bg-[#F7FCF0] w-full">
                <div className="container">
                    <div className="relative flex justify-between items-center min-h-[48px] md:min-h-[85px]">
                        <Link href={'/'} className="header-logo">
                            <img src="./images/header-logo.png" alt="alt" className="max-w-[130px]"/>
                        </Link>
                        <div className="flex items-center justify-center flex-1 min-w-0 ">
                            <Menu />
                        </div>
                        <div className="inline-flex items-center header-panel flex-nowrap">
                            <Link href={'/'} className="header-user">
                                <img src="./images/icons/user.png" alt="alt"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
