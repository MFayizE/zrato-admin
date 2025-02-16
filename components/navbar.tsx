import { FaBell, FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-end bg-white shadow px-6 py-4">
      <div className="flex items-center space-x-4">
        <FaQuestionCircle className="text-gray-500 cursor-pointer" />
        <FaBell className="text-gray-500 cursor-pointer" />
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Navbar;

