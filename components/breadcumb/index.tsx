const Breadcumb = ({ breadcrumbs }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul>
          {breadcrumbs.map((item) => (
            <li>
              <a href="" title="">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Breadcumb;
