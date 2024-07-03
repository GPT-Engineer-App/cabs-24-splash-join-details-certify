import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-white items-center justify-center">
      <Outlet />
    </main>
  );
};

export default Layout;
