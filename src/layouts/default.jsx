import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-white items-center justify-center">
      <nav className="flex space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/join" className="text-blue-500">Join</Link>
        <Link to="/user-details" className="text-blue-500">User Details</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;