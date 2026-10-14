import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/15 bg-black/[0.28] px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-5 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className="shrink-0"
            >
              <div className="text-lg font-semibold tracking-wide text-white">
                PROPERTY<span className="text-[#c9a66b]">TECH</span>
              </div>

              <div className="mt-0.5 text-[8px] tracking-[0.3em] text-white/40 sm:text-[9px]">
                TECHNICAL SERVICES
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 text-sm lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 transition ${
                      isActive
                        ? "text-[#c9a66b]"
                        : "text-white/65 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <NavLink
              to="/request-service"
              className="hidden rounded-xl border border-[#c9a66b]/60 bg-[#c9a66b]/90 px-5 py-2.5 text-sm font-semibold text-[#17130c] shadow-lg transition hover:bg-[#d8b77d] lg:inline-flex"
            >
              Request Service
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white/80 transition hover:bg-white/[0.1] lg:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-current transition duration-300 ${
                    menuOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition duration-300 ${
                    menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-[#c9a66b]/10 text-[#c9a66b]"
                          : "text-white/65 hover:bg-white/[0.05] hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <NavLink
                  to="/request-service"
                  onClick={closeMenu}
                  className="mt-2 rounded-xl bg-[#c9a66b] px-4 py-3 text-center text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
                >
                  Request Service
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;