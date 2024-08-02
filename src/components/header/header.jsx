import Menu from "./menu";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex items-center justify-between *: gap-16 py-8 px-5 ">
      <img src="/images/Logo.png" alt="" className="w-[9.8rem]" />
      <Menu />
      <div className="flex items-center justify-end relative">
        <input
          type="text"
          placeholder="Search"
          className="relative bg-gray-100 py-1 px-3 rounded-lg "
        />
        <CiSearch className="absolute right-3" />
      </div>
    </div>
  );
};
export default Header;
