const menuEl = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Menu = () => {
  return (
    <div>
      <ul className="flex items-center gap-10 font-bold">
        {menuEl.map((menuElObject) => {
          return (
            <li>
              <a href={menuElObject.link}>{menuElObject.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Menu;
