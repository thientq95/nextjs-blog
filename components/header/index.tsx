import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setConfigs } from "../../store/reducers/config";
import Menu from "./menu";
import {server} from "../../utils/server";

const Header = ({ configs, menu }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setConfigs(configs));
    }, [])

    let logo = configs.find(item => item.key === 'C22_LOGO_SELECT')?.value ?? '';
    logo = `${server}/${logo}`;
    
    return (
        <header className="relative z-20 w-full">
            <div className="bg-[#052F1B] hidden md:block">
                <div className="container">
                    <div className="relative flex justify-between items-center min-h-[45px]">
                        <Link href={`/`} className="flex-shrink-0 text-white">
                            Kiểm tra đơn hàng
                        </Link>
                        <div className="w-full text-sm text-center text-white">
                            Welcome Website!
                        </div>
                        <div className="flex flex-wrap absolute right-0 z-[100]">
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center">
                                <img src="/images/icons/social-tiktok.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center ml-[20px]">
                                <img src="/images/icons/social-fb.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                            <Link href={`/`} className="inline-flex flex-wrap items-center justify-center ml-[20px]">
                                <img src="/images/icons/social-ins.webp"
                                     alt="alt"
                                     className="max-h-[20px] object-scale-down transition-all"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F7FCF0] w-full">
                <div className="container">
                    <div className="relative flex justify-between items-center min-h-[48px] md:min-h-[85px]">
                        <Link href={'/'}>
                            <img src={`${logo}`} alt="alt" className="max-w-[130px]"/>
                        </Link>
                        <div className="flex items-center justify-center flex-1 min-w-0 ">
                            <Menu menuItem={menu}/>
                        </div>
                        <div className="inline-flex items-center flex-nowrap">
                            <Link href={'/account/login'}>
                                <img src="/images/icons/user.png" alt="alt"/>
                            </Link>
                            <Link href={`shopping-cart`} className="relative ml-5">
                                <img src="/images/icons/shopping.png"
                                     alt="alt"/>
                                <span className="w-4 h-4 rounded-full text-center text-[7px] font-semibold leading-4 text-white bg-[#052F1B] block absolute -right-[5px] -top-[5px]">0</span>
                            </Link>
                            <div className={`flex lg:hidden ml-[20px] relative w-[24px] h-[24px] cursor-pointer items-center text-center`}>
                                <div className={`absolute w-[98%] h-[2px] bg-[#000] rounded-[15px] top-[6px] left-0`}></div>
                                <div className={`w-[80%] h-[2px] bg-[#000] rounded-[15px] mt-[5px]`}></div>
                                <div className={`absolute w-[98%] h-[2px] bg-[#000] rounded-[15px] bottom-[2px] left-0`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
