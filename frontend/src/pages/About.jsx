import { NavLink } from "react-router-dom";

function About() {
  const strengths = [
    {
      number: "01",
      title: "Professional Service",
      description:
        "Reliable technical support delivered with attention to quality, safety and professional standards.",
    },
    {
      number: "02",
      title: "Multi-Technical Expertise",
      description:
        "A coordinated range of maintenance disciplines allows properties to work with one dependable partner.",
    },
    {
      number: "03",
      title: "Preventive Approach",
      description:
        "We help identify maintenance issues early and keep essential property systems operating efficiently.",
    },
    {
      number: "04",
      title: "Property-Focused",
      description:
        "Our services are structured around the practical needs of apartments, estates, offices and commercial properties.",
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
              ABOUT US
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Keeping properties
              <br />
              <span className="text-white/80">working at their best.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We provide professional technical maintenance and property
              support services designed to keep buildings safe, functional,
              comfortable and well maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              WHO WE ARE
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              One partner for
              <br />
              <span className="text-white/80">technical property care.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/70 sm:text-lg">
            <p>
              We are an Alsabilink Facilities and Maintenance company focused on
              maintenance, repairs and technical support for residential,
              commercial and institutional properties across Kenya.
            </p>

            <p>
              From essential building systems such as plumbing, electrical
              and HVAC to security, ICT, finishing works and specialized
              property support, our services are designed to make property
              maintenance simpler and more reliable.
            </p>

            <p>
              Whether supporting an apartment complex, estate, office, hotel,
              school or commercial facility, we focus on practical solutions,
              responsive service and long-term property performance.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              WHAT WE DO
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Technical expertise
              <br />
              <span className="text-white/80">across the property lifecycle.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              Property maintenance involves more than fixing problems when
              they occur. Our approach brings together preventive maintenance,
              repairs, installations and specialized technical support to help
              properties remain safe, functional and efficient.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Maintenance",
              "Repairs",
              "Installations",
              "Technical Support",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="text-xs tracking-[0.2em] text-[#c9a66b]">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{item}</h3>

                <div className="mt-5 h-px w-10 bg-[#c9a66b]/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              WHO WE SERVE
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Built around
              <br />
              <span className="text-white/80">your property.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Our services can support properties at different scales, from
              individual residential developments to larger managed
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Apartments",
              "Residential Estates",
              "Offices",
              "Hotels",
              "Schools",
              "Commercial Properties",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-6 text-sm text-white/65 backdrop-blur-xl transition hover:border-[#c9a66b]/30 hover:bg-white/[0.07]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              WHY CHOOSE US
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Maintenance with
              <br />
              <span className="text-white/40">a professional standard.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.number}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-8"
              >
                <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
                  {strength.number}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {strength.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-[#c9a66b]/20 bg-[#c9a66b]/[0.06] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
              WORK WITH US
            </div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Need reliable technical support?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Tell us what your property needs and our team will help
              coordinate the appropriate technical service.
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

export default About;