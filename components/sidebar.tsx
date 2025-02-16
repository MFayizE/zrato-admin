import Link from "next/link";
import { FaBook, FaUsers, FaFileAlt, FaClipboard, FaFileInvoice, FaLifeRing } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-5">
      <div className="text-2xl font-bold text-white mb-8"> 
        {/* <span className="text-custom-green-400">Logo</span> */}
      </div>
      <nav className="flex-1">
        <ul className="space-y-5">
          {[
            { icon: <FaBook />, label: "Courses", link: "/" },
            { icon: <FaUsers />, label: "Users", link: "#" },
            { icon: <FaFileAlt />, label: "Quiz", link: "#" },
            { icon: <FaClipboard />, label: "Assignment", link: "#" },
            { icon: <FaFileInvoice />, label: "Billing and Invoices", link: "#" },
            { icon: <FaLifeRing />, label: "Support Desk", link: "#" },
          ].map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="flex items-center space-x-3 text-gray-300 hover:text-custom-green-400">
                {item.icon} <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
