import { NavLink } from "react-router-dom";

function Footer() {
  const services = [
    "Plumbing & Drainage",
    "Electrical & Power",
    "HVAC & Refrigeration",
    "CCTV & Access Control",
    "Property Maintenance",
    "General Handyman",
  ];

  return (
    <footer className="border-t border-white/10 bg-[#060707] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-block">
              <div className="text-2xl font-semibold tracking-wide text-[#c9a66b]">
                ALSABILINK
              </div>

              <div className="mt-1 text-[9px] tracking-[0.3em] text-white/35">
                FACILITIES AND MAINTENANCE
              </div>
            </NavLink>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
              Professional technical maintenance and property support
              solutions for residential, commercial and institutional
              properties across Kenya.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#c9a66b]/20 bg-[#c9a66b]/[0.05] px-4 py-2 text-[10px] tracking-[0.2em] text-[#c9a66b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a66b]" />
              BUILT FOR BETTER PROPERTIES
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/40">
              <NavLink
                to="/"
                className="transition hover:text-white"
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className="transition hover:text-white"
              >
                Services
              </NavLink>

              <NavLink
                to="/about"
                className="transition hover:text-white"
              >
                About Us
              </NavLink>

              <NavLink
                to="/projects"
                className="transition hover:text-white"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="transition hover:text-white"
              >
                Contact
              </NavLink>

              <NavLink
                to="/request-service"
                className="transition hover:text-[#c9a66b]"
              >
                Request Service
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/40">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <div className="text-[10px] tracking-[0.2em] text-white/25">
                  PHONE
                </div>

                <div className="mt-2 text-sm text-white/60">
                  +254794572834
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.2em] text-white/25">
                  EMAIL
                </div>

                <div className="mt-2 break-all text-sm text-white/60">
                  alsabilinks@gmail.com
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.2em] text-white/25">
                  SERVICE AREA
                </div>

                <div className="mt-2 text-sm text-white/60">
                  Kenya
                </div>
              </div>
            </div>

            <NavLink
              to="/request-service"
              className="mt-7 inline-flex rounded-xl bg-[#c9a66b] px-5 py-3 text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
            >
              Request a Service
            </NavLink>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2020 ALSABILINK FACILITIES AND MAINTENANCE. All rights reserved.
          </span>

          <div className="flex flex-wrap gap-x-5 gap-y-2 tracking-wide">
            <span>RESIDENTIAL</span>
            <span>COMMERCIAL</span>
            <span>INSTITUTIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;