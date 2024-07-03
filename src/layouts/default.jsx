import { Outlet, Link } from "react-router-dom";
import carIcon from "../../public/images/car-icon.png"; // Ensure the correct path

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-100 items-center justify-center">
      <nav className="flex space-x-4">
        <Link to="/" className="text-blue-500 flex items-center space-x-2">
          <img src={carIcon} alt="CABs 24" className="h-6 w-6" />
          <span>CABs 24</span>
        </Link>
        <Link to="/join" className="text-blue-500">Join</Link>
        <Link to="/user-details" className="text-blue-500">User Details</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;