import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const  Menu = async () => {
  const { configs } = useSelector((state: RootState) => state.config);
  let menu = configs.find((item) => item.key === "C22_MAIN_MENU").value as any;
  if (menu) {
    menu = JSON.parse(menu);
  }

  const response = await fetch(
    `http://localhost:9091/api/v1/web/menu/${menu.id}`
  ).then((res) => res.json()); 
  const menus = response.result;
  return (
    <ul className="menu-wapper">
      {/* {posts && posts.map((item) => (
          <div className="col-lg-3 col-6" key={item.id}> 
            <PostRelatedItem item={item}/>
          </div>
        ))} */}
        {menus && menus.map((item, idx) => (
          <Link key={idx} href={`/products`}>{item.name}</Link>
        ))} 
      <li>
        
      </li>
      {/* <li className="submenu">
        <a href="" title="">
          Công bố sản phẩm
        </a>
        <ul className="submenu-content">
          <li>
            <Link href={`/products`}>sub 1</Link>
          </li>
          <li>
            <Link href={`/products`}>sub 1</Link>
          </li>
          <li>
            <Link href={`/products`}>sub 1</Link>
          </li>
          <li>
            <Link href={`/products`}>sub 1</Link>
          </li>
          <li>
            <Link href={`/products`}>sub 1</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={`/posts`}>Tin tức</Link>
      </li>
      <li>
        <Link href={`/recruiment`}>Tuyển dụng</Link>
      </li>
      <li>
        <Link href={`/contact`}>Liên hệ</Link>
      </li> */}
    </ul>
  );
};

export default Menu;
