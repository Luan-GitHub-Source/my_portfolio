import { useEffect } from "react";
import { LuSquareMenu } from "react-icons/lu";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-500">
            L.<span className="text-blue-500">N.</span>
          </a>

          <LuSquareMenu className="relative z-40 md:hidden" size={25}onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </LuSquareMenu>

          <div className="hidden md:flex items-center space-x-8 relative right-10 text-gray-300 transition-colors">
            <a className = "hover:text-white" href="#home"> Home </a>
            <a className = "hover:text-white" href="#about"> About </a>
            <a className = "hover:text-white" href="#projects"> Projects </a>
            <a className = "hover:text-white" href="#contact"> Contact </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
