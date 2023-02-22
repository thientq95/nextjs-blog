import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer overflow-hidden bg-[#F7FCF0]">
            <div className="pt-3 footer-top pb-7">
                <div className="container">
                    <div className="h-[1px] bg-[#845536] opacity-20"></div>
                </div>
            </div>
            <div className="footer-bottom pb-7">
                <div className="container">
                    <div className="justify-between md:flex">
                        <div className="flex-1 min-w-0 pr-5">
                            CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI<br/>
                            Giấy CNĐKDN: 0109150000 – Ngày cấp: 20/01/2023 <br/>
                            Cơ quan cấp: Phòng Đăng ký kinh doanh – Chi cục Thuế Quận Cầu Giấy <br/>
                            Địa chỉ đăng ký kinh doanh: 77 Lê Trung Nghĩa
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