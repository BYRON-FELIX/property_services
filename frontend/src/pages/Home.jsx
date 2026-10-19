import { NavLink } from "react-router-dom";

function Home() {
  const services = [
    [
      "01",
      "MEP Core Services",
      "Essential building systems that keep properties safe, functional and operating efficiently.",
    ],
    [
      "02",
      "Civil & Architectural Finishing Works",
      "Professional finishing, repair and building works that maintain the appearance, comfort and integrity of your property.",
    ],
    [
      "03",
      "Security, ICT & Smart Systems",
      "Modern security, communication, networking and automation solutions for residential and commercial properties.",
    ],
    [
      "04",
      "Contracts, Estate & Specialized Support",
      "Reliable ongoing maintenance and specialized services designed for estates, apartments and managed properties.",
    ],
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.expertech.co.ke/assets/uploads/media-uploader/hvac-installer1760339673.png')",
          filter: "brightness(1.12) contrast(1.08) saturate(1.08)",
        }}
      >
        {/* Image overlays */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/75 via-[#080909]/45 to-[#080909]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8">
          <div className="flex flex-1 items-center py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.13] px-4 py-2 text-sm text-white/80 shadow-xl backdrop-blur-2xl">
                <span className="h-2 w-2 rounded-full bg-[#c9a66b]" />
                Alsabilink Facilities and Maintenance
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

              <div className="mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {services.map(([number, title, description]) => (
                  <div
                    key={title}
                    className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/20 bg-white/[0.13] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.18]"
                  >
                    <div>
                      <div className="text-[10px] tracking-[0.25em] text-[#c9a66b]">
                        {number}
                      </div>

                      <div className="mt-3 text-sm font-semibold leading-5 text-white">
                        {title}
                      </div>
                    </div>

                    <div className="mt-4 text-[11px] leading-5 text-white/70">
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

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              One reliable partner
              <br />
              <span className="text-white/80">
                for your property.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/75 sm:text-lg">
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