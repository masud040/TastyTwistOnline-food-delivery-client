import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-1 my-5  transition-colors duration-300 transform text-sm hover:bg-gray-300   hover:text-gray-700 ${
          isActive
            ? "bg-gray-300 text-sm  text-gray-700"
            : "text-gray-600 text-sm"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
