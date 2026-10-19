import { useState } from "react";
import { NavLink } from "react-router-dom";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceGroups = [
    {
      number: "01",
      title: "MEP Core Services",
      subtitle: "Mechanical, Electrical & Plumbing",
      description:
        "Essential building systems that keep properties safe, functional and operating efficiently.",
      services: [
        {
          name: "Plumbing & Drainage",
          summary:
            "General plumbing repairs, leak detection, sanitary fitting and drainage support.",
          details: [
            "General plumbing repairs & leak detection",
            "Pipes, taps, mixers & sanitaryware setup",
            "Blocked drain clearing & stormwater drainage",
            "Water pumps & pressure booster systems",
            "Solar hot water systems & electric geysers",
          ],
        },
        {
          name: "Electrical & Power Backup",
          summary:
            "Safe electrical installation, fault-finding and dependable backup power support.",
          details: [
            "Wiring, rewiring, sockets & switch installs",
            "Fault finding, circuit breakers & DB boards",
            "LED & security/outdoor lighting upgrades",
            "Generators, solar backup & power inverters",
            "Surge protection & safety compliance checks",
          ],
        },
        {
          name: "HVAC & Refrigeration",
          summary:
            "Air conditioning, ventilation and refrigeration servicing for comfort and efficiency.",
          details: [
            "Air conditioner installation & gas refills",
            "AC, split-unit & central HVAC servicing",
            "Duct cleaning, ventilation & extraction fans",
            "Cold rooms & commercial refrigeration repairs",
          ],
        },
        {
          name: "Solar & Renewable Energy",
          summary:
            "Solar power and renewable energy systems that improve property resilience and savings.",
          details: [
            "Solar panel & backup system setup",
            "Solar water heater installations & repairs",
            "Solar security lighting & inverter batteries",
            "Energy audits & hybrid power solutions",
          ],
        },
      ],
    },
    {
      number: "02",
      title: "Civil & Architectural Finishing Works",
      subtitle: "Building, Finishing & Structural Support",
      description:
        "Professional finishing, repair and building works that maintain the appearance, comfort and integrity of your property.",
      services: [
        {
          name: "Tiling & Waterproofing",
          summary:
            "Floor, wall and wet-area finishes designed for durability and moisture protection.",
          details: [
            "Floor & wall tiling",
            "Epoxy, vinyl, laminate & concrete screeding",
            "Shower, balcony, basin & roof waterproofing",
            "Grouting, regrouting & surface repair",
          ],
        },
        {
          name: "Painting & Wall Finishing",
          summary:
            "Decorative and protective finishes that restore and improve property appearance.",
          details: [
            "Interior & exterior high-durability repainting",
            "Wall plastering, crack repair & damp-proofing",
            "Decorative textured finishes & protective coatings",
            "Wallpaper installation & surface removal",
          ],
        },
        {
          name: "Carpentry & Joinery",
          summary:
            "Custom woodwork and interior fit-out solutions for functionality and style.",
          details: [
            "Custom kitchen cabinets, wardrobes & shelving",
            "Wooden door, window & frame installations",
            "Locks, hinges & architectural ironmongery",
            "Furniture repair, assembly & office partitions",
          ],
        },
        {
          name: "Masonry, Roofing & Glass",
          summary:
            "Structural repairs, roof protection and glass systems for long-term building integrity.",
          details: [
            "Brickwork, blockwork & structural wall repairs",
            "Roof leak detection, gutters & rainwater systems",
            "Aluminium windows, doors & shower cubicles",
            "Steel fabrication, burglar-proofing & welding",
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Security, ICT & Smart Systems",
      subtitle: "Connected & Secure Properties",
      description:
        "Modern security, communication, networking and automation solutions for residential and commercial properties.",
      services: [
        {
          name: "CCTV & Access Control",
          summary:
            "Surveillance and entry control systems for safer, more secure property operations.",
          details: [
            "CCTV camera setup, IP systems & servicing",
            "Biometric, RFID & smart access control",
            "Video doorbells & apartment intercoms",
            "Electric fences, gate motors & barriers",
          ],
        },
        {
          name: "Fire Detection & Safety",
          summary:
            "Fire protection and compliance measures to keep occupants and properties protected.",
          details: [
            "Fire alarm, smoke & heat detector installs",
            "Fire extinguisher supply & scheduled servicing",
            "Fire hose reels, hydrants & emergency exit lights",
            "Fire safety compliance & property inspections",
          ],
        },
        {
          name: "Network Infrastructure & Wi-Fi",
          summary:
            "Structured cabling and connectivity for reliable communication in managed properties.",
          details: [
            "Structured network cabling & Wi-Fi routers",
            "Fibre-optic termination & server rack setup",
            "Telephone & inter-apartment intercom cabling",
            "Network troubleshooting & cabinet installations",
          ],
        },
        {
          name: "Smart Home & Automation",
          summary:
            "Intelligent property systems for automation, comfort and improved daily operations.",
          details: [
            "Smart locks, automated lighting & switches",
            "Water-leak sensors & temperature monitoring",
            "Building management systems (BMS) & IoT",
            "Automated curtain & climate controls",
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Contracts, Estate & Specialized Support",
      subtitle: "Ongoing Property Support",
      description:
        "Reliable ongoing maintenance and specialized services designed for estates, apartments and managed properties.",
      services: [
        {
          name: "Property Maintenance Contracts (AMC)",
          summary:
            "Scheduled inspections and preventive care for long-term property performance.",
          details: [
            "Monthly estate & apartment inspections",
            "Preventive plumbing, electrical & HVAC care",
            "Move-in / move-out condition assessments",
            "Emergency 24/7 technical support hotline",
          ],
        },
        {
          name: "Express Handyman Services",
          summary:
            "Fast, practical fixes for minor property tasks and quick-turnaround maintenance needs.",
          details: [
            "TV mounting, mirror, blind & curtain fitting",
            "Wall drilling & general fixture installation",
            "Minor fixture replacement & door adjustments",
            "General quick-turnaround property fixes",
          ],
        },
        {
          name: "Swimming Pool & Water Features",
          summary:
            "Pool care, water-feature maintenance and associated plumbing support.",
          details: [
            "Pool pumps, filtration & plumbing repairs",
            "Pool leak detection & underwater lighting",
            "Fountain systems & water feature pumps",
          ],
        },
        {
          name: "Lifts & Estate Infrastructure",
          summary:
            "Support for estate infrastructure, access control and shared building systems.",
          details: [
            "Subcontracted elevator servicing & support",
            "Parking barriers, bollards & line marking",
            "Estate road repairs & security gate setup",
          ],
        },
      ],
    },
  ];

  const openModal = (service) => setSelectedService(service);

  return (
    <main className="bg-[#080909] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,107,0.12),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              TECHNICAL SERVICES
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Complete technical
              <br />
              <span className="text-white/80">support for your property.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Professional maintenance, repair and technical support services
              for apartments, estates, offices, hotels, schools and commercial
              properties across Kenya.
            </p>
          </div>
        </div>
      </section>

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

                      <p className="mt-2 text-sm tracking-wide text-white/70">
                        {group.subtitle}
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-[#c9a66b] sm:flex">
                      ↗
                    </div>
                  </div>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/70">
                    {group.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group.services.map((service, index) => (
                        <button
                          key={service.name}
                          type="button"
                          onClick={() => openModal(service)}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-left text-sm text-white/80 transition duration-200 hover:border-[#c9a66b]/40 hover:bg-white/[0.04]"
                        >
                          <span className="text-xs text-[#c9a66b]">
                            0{index + 1}
                          </span>

                          <span>{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-[#c9a66b]/20 bg-[#c9a66b]/[0.06] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
              NEED TECHNICAL SUPPORT?
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Tell us what your property needs.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
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

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0d0f10] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] tracking-[0.25em] text-[#c9a66b]">
                  SERVICE DETAIL
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {selectedService.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/80 transition hover:bg-white/[0.08]"
                aria-label="Close service details"
              >
                ×
              </button>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/70">
              {selectedService.summary}
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[10px] tracking-[0.25em] text-[#c9a66b]">
                MORE SERVICES INCLUDED
              </div>

              <ul className="mt-4 space-y-3">
                {selectedService.details.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c9a66b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xl bg-[#c9a66b] px-5 py-3 text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Services;