import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-main">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <Link href={`/`}>
              <img src="./images/logo-GRfood-header.png" alt="" />
              </Link>
            </div>
            <div className="menu-content">
              <ul className="menu-wapper">
                <li>
                  <a href="" title="">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <Link href={`/products`}>
                  Sản phẩm
                  </Link>
                </li>
                <li className="submenu">
                  <a href="" title="">
                    Công bố sản phẩm
                  </a>
                  <ul className="submenu-content">
                    <li>
                    <Link href={`/products`}>
                        sub 1
                      </Link>
                    </li>
                    <li>
                    <Link href={`/products`}>
                        sub 1
                      </Link>
                    </li>
                    <li>
                    <Link href={`/products`}>
                        sub 1
                      </Link>
                    </li>
                    <li>
                    <Link href={`/products`}>
                        sub 1
                      </Link>
                    </li>
                    <li>
                    <Link href={`/products`}>
                        sub 1
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                <Link href={`/posts`}>
                        Tin tức
                      </Link>
                </li>
                <li>
                <Link href={`/recruiment`}>
                        Tuyển dụng
                      </Link>
                </li>
                <li>
                  <Link href={`/contact`}>
                  Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search">
              <ul>
                <li>
                <Link href={`/`}>
                VI <img src="./images/VIETNAM_FLAG.png" alt="" />
                </Link>
                </li>
              </ul>
              <div className="search-content">
                <img src="./images/search.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
