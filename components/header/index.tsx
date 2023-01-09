import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Menu from "./menu";

const Header = () => {
  const { configs } = useSelector((state: RootState)  => state.config);
  const logo = configs.find(item => item.key === 'C22_LOGO_SELECT').value;

  
  return (
    <header className="header">
      <div className="menu-main">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <Link href={`/`}>
                <img src={`http://localhost:9091/${logo}`} alt="" />
              </Link>
            </div>
            <div className="menu-content">
              <Menu />
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
