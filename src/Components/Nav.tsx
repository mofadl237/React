import {  NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-gray-900 text-white flex py-3 px-20 justify-between items-center">
      <div className="logo  ">
        <h1 className="font-sans text-3xl text-[#E50914]">Netfix</h1>
      </div>
      <div className="links flex gap-4">
        <NavLink to="">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="manage">Docs</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
