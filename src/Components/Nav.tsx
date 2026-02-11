import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-gray-800 text-white z-50">

      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center h-20">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#E50914] tracking-wide">
          Netfix
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 hover:text-[#E50914] ${
                isActive ? "text-[#E50914]" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/manage"
            className={({ isActive }) =>
              `transition duration-300 hover:text-[#E50914] ${
                isActive ? "text-[#E50914]" : "text-gray-300"
              }`
            }
          >
            Docs
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-6 gap-6 text-lg font-semibold">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-[#E50914] transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/manage"
            onClick={() => setOpen(false)}
            className="hover:text-[#E50914] transition"
          >
            Docs
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Nav;
