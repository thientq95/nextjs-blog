import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-main">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <Link href={`/`}>
                <a href="" title="">
                  <img src="./images/logo-GRfood-header.png" alt="" />
                </a>
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
                    <a href="" title="">
                      Sản phẩm
                    </a>
                  </Link>
                </li>
                <li className="submenu">
                  <a href="" title="">
                    Công bố sản phẩm
                  </a>
                  <ul className="submenu-content">
                    <li>
                      <a href="" title="">
                        sub 1
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        sub 1
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        sub 1
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        sub 1
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        sub 1
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" title="">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <Link href={`/contact`}>
                    <a href="" title="">
                      Liên hệ
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search">
              <ul>
                <li>
                  <a href="" title="">
                    VI <img src="./images/VIETNAM_FLAG.png" alt="" />
                  </a>
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
