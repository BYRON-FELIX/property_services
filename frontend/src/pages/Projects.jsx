import { NavLink } from "react-router-dom";

function Projects() {
  const projects = [
    {
      category: "Residential & Apartments",
      title: "Apartment Property Maintenance",
      description:
        "Technical maintenance and repair support for residential apartment properties.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    },
    {
      category: "Electrical & Power",
      title: "Electrical Systems & Backup Power",
      description:
        "Electrical maintenance, lighting upgrades and power backup solutions for managed properties.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
    },
    {
      category: "HVAC & Mechanical",
      title: "HVAC & Building Systems",
      description:
        "Installation, servicing and maintenance of essential mechanical and cooling systems.",
      image:
        "https://images.unsplash.com/photo-1631545806609-5c4d6d5a3e2f?auto=format&fit=crop&w=1200&q=85",
    },
    {
      category: "Security & ICT",
      title: "Property Security & Connectivity",
      description:
        "CCTV, access control, networking and technical infrastructure for secure properties.",
      image:
        "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
    },
    {
      category: "Plumbing & Water Systems",
      title: "Plumbing & Water Infrastructure",
      description:
        "Plumbing repairs, water systems, pumps and drainage maintenance.",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      category: "General Maintenance",
      title: "Property Repair & Finishing",
      description:
        "General building repairs, finishing works and ongoing property maintenance.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
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
              PROJECTS & EXPERIENCE
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Technical work
              <br />
              <span className="text-white/80">that keeps properties moving.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore the types of technical maintenance, repair and property
              support work our team is equipped to deliver across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:border-[#c9a66b]/30"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/10 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] tracking-[0.15em] text-white/75 backdrop-blur-xl">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl font-semibold">{project.title}</h2>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-xs font-medium tracking-wide text-[#c9a66b]">
                    TECHNICAL SERVICES
                    <span className="h-px w-8 bg-[#c9a66b]/50" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="border-t border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.035] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
                HAVE A PROPERTY PROJECT?
              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Let's discuss what your property needs.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                From individual repairs to ongoing technical maintenance,
                submit a request and our team can review your requirements.
              </p>
            </div>

            <NavLink
              to="/request-service"
              className="inline-flex items-center justify-center rounded-xl bg-[#c9a66b] px-7 py-4 text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
            >
              Request a Service
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;