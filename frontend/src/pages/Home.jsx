import { NavLink } from "react-router-dom";

function Home() {
  const services = [
    ["01", "Electrical", "Installations, repairs and fault diagnosis"],
    ["02", "Plumbing", "Repairs, installations and maintenance"],
    ["03", "HVAC", "Air conditioning and ventilation systems"],
    ["04", "Security", "CCTV, access control and electric fencing"],
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.expertech.co.ke/assets/uploads/media-uploader/hvac-installer1760339673.png')",
        }}
      >
        {/* Image overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/95 via-[#080909]/60 to-[#080909]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8">
          <div className="flex flex-1 items-center py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.13] px-4 py-2 text-sm text-white/80 shadow-xl backdrop-blur-2xl">
                <span className="h-2 w-2 rounded-full bg-[#c9a66b]" />
                Property Technical Services
              </div>

              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Technical
                <br />
                Maintenance.
                <br />
                <span className="text-[#c9a66b]">Done Right.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Professional maintenance and repair solutions for apartments,
                estates, offices, hotels, schools and commercial properties
                across Kenya.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <NavLink
                  to="/request-service"
                  className="rounded-xl bg-[#c9a66b] px-7 py-4 font-semibold text-[#17130c] shadow-xl transition hover:bg-[#d8b77d]"
                >
                  Request a Service
                </NavLink>

                <NavLink
                  to="/services"
                  className="rounded-xl border border-white/25 bg-white/[0.12] px-7 py-4 font-semibold text-white shadow-xl backdrop-blur-2xl transition hover:bg-white/[0.18]"
                >
                  Explore Services
                </NavLink>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {services.map(([number, title, description]) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-white/20 bg-white/[0.13] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.18]"
                  >
                    <div className="text-xs tracking-widest text-[#c9a66b]">
                      {number}
                    </div>

                    <div className="mt-3 text-sm font-semibold">
                      {title}
                    </div>

                    <div className="mt-2 hidden text-xs leading-5 text-white/55 sm:block">
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>
              RESIDENTIAL • COMMERCIAL • INSTITUTIONAL
            </span>

            <span>
              PROFESSIONAL SERVICES ACROSS KENYA
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0b0c0c] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              PROPERTY MAINTENANCE
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              One reliable partner
              <br />
              <span className="text-white/40">
                for your property.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/55 sm:text-lg">
              We provide professional technical maintenance and repair
              services designed to keep properties safe, functional and
              operating efficiently.
            </p>

            <NavLink
              to="/about"
              className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#c9a66b] transition hover:text-[#d8b77d]"
            >
              Discover more
              <span>→</span>
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;