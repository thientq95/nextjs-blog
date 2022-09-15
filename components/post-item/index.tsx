const PostItem = ({ item }) => {
  return (
    <div className="item">
      <a href="" title="">
        <div className="thumb">
          <img src="./images/news1.png" alt="" />
        </div>
        <div className="txt-content">
          <h3 className="title">
            Coca-Cola Việt Nam chính thức ra mắt sản phẩm mới Fanta Jelly Fizz
          </h3>
          {item.desc && (
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took{" "}
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default PostItem;
