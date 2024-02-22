import { Outlet } from "react-router-dom";
import SideNavbar from "./generics/SideNavbar.tsx";

const App: React.FC = () => {
  return (
    <main className="grid grid-cols-[200px_auto] h-screen">
      <header className="border-r border-primary bg-primary bg-opacity-10 px-4 py-5">
        <SideNavbar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </main>
  );
};

export default App;
