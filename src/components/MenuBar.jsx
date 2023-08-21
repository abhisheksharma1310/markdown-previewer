const MenuBar = ({ title, windowFull, handleWindow }) => {
  const class_value = `fa ${windowFull ? "fa-compress" : "fa-arrows-alt"}`;

  return (
    <div className="menu-bar">
      <div>
        <i className="fa fa-free-code-camp"></i>
        <span> {title}</span>
      </div>
      <i className={class_value} id="full" onClick={handleWindow}></i>
    </div>
  );
};

export default MenuBar;
