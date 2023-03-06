import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {server} from "../../utils/server";

const Footer = () => {
    const { configs } = useSelector((state: RootState)  => state.config);

    const logo = configs.find(item => item.key === 'C22_LOGO_SELECT')?.value ?? '';
    const introText = configs.find(item => item.key === 'C22_FOOTER_INTRO')?.value ?? '';
    const introCompanyText = configs.find(item => item.key === 'C22_FOOTER_COMPANY_INFO')?.value ?? '';
    const menuFooter = [
        {
            id: 1,
            tenMenu: `Về chúng tôi`,
            subMenu: [
                {
                    id: 1,
                    tenMenu: `Trách nhiệm cộng đồng`
                },
                {
                    id: 2,
                    tenMenu: `Giá trị cốt lõi`
                },
                {
                    id: 3,
                    tenMenu: `Câu chuyện thương hiệu`
                },
                {
                    id: 4,
                    tenMenu: `Tìm hiểu nguyên liệu`
                }
            ]
        },
        {
            id: 2,
            tenMenu: `shop`,
            subMenu: [
                {
                    id: 1,
                    tenMenu: `Vegan vitamin suplement`
                },
                {
                    id: 2,
                    tenMenu: `Health &amp; wellness`
                },
                {
                    id: 3,
                    tenMenu: `Vegan sport`
                },
                {
                    id: 4,
                    tenMenu: `Vegan beauty`
                },
                {
                    id: 5,
                    tenMenu: `Natural beauty`
                }
            ]
        },
        {
            id: 3,
            tenMenu: `chính sách`,
            subMenu: [
                {
                    id: 1,
                    tenMenu: `Chính sách giao nhận`
                },
                {
                    id: 2,
                    tenMenu: `Chính sách đổi trả/bảo hành`
                },
                {
                    id: 3,
                    tenMenu: `Điều khoản sử dụng`
                },
                {
                    id: 4,
                    tenMenu: `Chính sách thanh toán`
                },
                {
                    id: 5,
                    tenMenu: `Chính sách bảo mật`
                }
            ]
        },
        {
            id: 4,
            tenMenu: `Đặt hàng & Hỗ trợ`,
            subMenu: [
                {
                    id: 1,
                    tenMenu: `Hotline: 07744 84537`
                },
                {
                    id: 2,
                    tenMenu: `Giờ làm việc: 8:00 - 17:00`
                },
                {
                    id: 3,
                    tenMenu: `Hướng dẫn mua hàng`
                },
                {
                    id: 4,
                    tenMenu: `Kiểm tra đơn hàng`
                }
            ]
        }
    ]

    return (
        <footer className="overflow-hidden bg-[#F7FCF0]">
            <div className="pt-3 pb-7">
                <div className="container">
                    <div className="flex flex-wrap justify-between md:flex-nowrap">
                        <div className="w-full md:w-[23%]">
                            <Link href={``} className="inline-block mb-[17px] mt-[20px]">
                                <img src={`${server}/${logo}`} alt="Logo"/>
                            </Link>
                            <p className="text-justify">{introText}</p>
                        </div>
                        {menuFooter.slice(0,1).map((item) => (
                            <div key={item.id} className="w-full md:w-[23%]">
                                <div className="flex items-center justify-between w-full ">
                                    <span className="mt-6 mb-4 text-base font-semibold uppercase md:mt-12">{item.tenMenu}</span>
                                    <div>
                                        <svg className="w-6 h-6 shrink-0 md:hidden"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <ul className={`hidden md:block`}>
                                    {item.subMenu.map((item) => (
                                        <li key={item.id} className="mb-2">
                                            <Link href={``} className="text-sm transition-colors hover:text-orange-600">{item.tenMenu}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {menuFooter.slice(1,4).map((item) => (
                            <div key={item.id} className="w-full md:w-[15%]">
                                <div className="flex items-center justify-between w-full ">
                                    <span className="mt-6 mb-4 text-base font-semibold uppercase md:mt-12">{item.tenMenu}</span>
                                    <div>
                                        <svg className="w-6 h-6 shrink-0 md:hidden"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <ul className="hidden md:block">
                                    {item.subMenu.map((item) => (
                                        <li key={item.id} className="mb-2">
                                            <Link href={``} className="text-sm transition-colors hover:text-orange-600">{item.tenMenu}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="h-[1px] bg-[#845536] opacity-20 mt-7"></div>
                </div>
            </div>
            <div className="pb-7">
                <div className="container">
                    <div className="justify-between md:flex">
                        <div className="flex-1 min-w-0 pr-5">
                            <div dangerouslySetInnerHTML={{ __html: introCompanyText}}></div>
                        </div>
                        <div className="flex items-baseline justify-between md:flex-col md:items-end">
                            <div className="mt-auto text-[10px] md:text-xs text-[#101010]">© 2023.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;