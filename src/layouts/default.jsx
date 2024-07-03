import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-100 items-center justify-start">
      <Outlet />
    </main>
  );
};

export default Layout;
