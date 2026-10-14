import { NavLink } from "react-router-dom";

function Services() {
  const serviceGroups = [
    {
      number: "01",
      title: "MEP Core Services",
      subtitle: "Mechanical, Electrical & Plumbing",
      description:
        "Essential building systems that keep properties safe, functional and operating efficiently.",
      services: [
        "Plumbing & Drainage",
        "Electrical & Power Backup",
        "HVAC & Refrigeration",
        "Solar & Renewable Energy",
      ],
    },
    {
      number: "02",
      title: "Civil & Architectural Finishing Works",
      subtitle: "Building, Finishing & Structural Support",
      description:
        "Professional finishing, repair and building works that maintain the appearance, comfort and integrity of your property.",
      services: [
        "Tiling & Waterproofing",
        "Painting & Wall Finishing",
        "Carpentry & Joinery",
        "Masonry, Roofing & Glass",
      ],
    },
    {
      number: "03",
      title: "Security, ICT & Smart Systems",
      subtitle: "Connected & Secure Properties",
      description:
        "Modern security, communication, networking and automation solutions for residential and commercial properties.",
      services: [
        "CCTV & Access Control",
        "Fire Detection & Safety",
        "Network Infrastructure & Wi-Fi",
        "Smart Home & Automation",
      ],
    },
    {
      number: "04",
      title: "Contracts, Estate & Specialized Support",
      subtitle: "Ongoing Property Support",
      description:
        "Reliable ongoing maintenance and specialized services designed for estates, apartments and managed properties.",
      services: [
        "Property Maintenance Contracts (AMC)",
        "Express Handyman Services",
        "Swimming Pool & Water Features",
        "Lifts & Estate Infrastructure",
      ],
    },
  ];

  return (
    <main className="bg-[#080909] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,107,0.12),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              TECHNICAL SERVICES
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Complete technical
              <br />
              <span className="text-white/40">support for your property.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Professional maintenance, repair and technical support services
              for apartments, estates, offices, hotels, schools and commercial
              properties across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {serviceGroups.map((group) => (
              <article
                key={group.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#c9a66b]/40 hover:bg-white/[0.065] sm:p-9"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c9a66b]/[0.06] blur-3xl transition duration-500 group-hover:bg-[#c9a66b]/[0.1]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs font-medium tracking-[0.25em] text-[#c9a66b]">
                        {group.number}
                      </div>

                      <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">
                        {group.title}
                      </h2>

                      <p className="mt-2 text-sm tracking-wide text-white/40">
                        {group.subtitle}
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-[#c9a66b] sm:flex">
                      ↗
                    </div>
                  </div>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
                    {group.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group.services.map((service, index) => (
                        <div
                          key={service}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white/70 transition group-hover:border-white/10"
                        >
                          <span className="text-xs text-[#c9a66b]">
                            0{index + 1}
                          </span>

                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-[#c9a66b]/20 bg-[#c9a66b]/[0.06] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
              NEED TECHNICAL SUPPORT?
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Tell us what your property needs.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
              Submit a service request and our team will review the requirement
              and coordinate the appropriate technical support.
            </p>
          </div>

          <NavLink
            to="/request-service"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#c9a66b] px-7 py-4 text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
          >
            Request a Service
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Services;