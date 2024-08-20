
import NavbarRoutes from "./navbar-routes";

const NavBar = () => {
  return (
    <div className=" flex gap-x-3 items-center justify-between w-full bg-slate-800  text-white h-[70px]">
      {/* <MobileSidebar></MobileSidebar> */}
      <div className="flex gap-x-1">
        Logo 
        <h4>GoStock</h4>
      </div>
      <NavbarRoutes />

      <div className=" flex gap-x-3"><div>Login</div> Logout</div>
    </div>
  );
};

export default NavBar;
