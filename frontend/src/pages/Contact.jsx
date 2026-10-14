import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <main className="bg-[#080909] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,107,0.12),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              CONTACT US
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Let's keep your
              <br />
              <span className="text-white/40">property running.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Have a maintenance issue, technical requirement or property
              project? Get in touch with our team and tell us what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Details */}
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              GET IN TOUCH
            </div>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Speak with our team.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              For service requests, technical enquiries or property
              maintenance support, contact us using the details below.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <div className="text-[10px] tracking-[0.25em] text-white/30">
                  PHONE
                </div>
                <div className="mt-2 text-white/75">
                  +254 XXX XXX XXX
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] text-white/30">
                  EMAIL
                </div>
                <div className="mt-2 text-white/75">
                  info@propertytech.co.ke
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] text-white/30">
                  SERVICE AREA
                </div>
                <div className="mt-2 text-white/75">Kenya</div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] text-white/30">
                  BUSINESS HOURS
                </div>
                <div className="mt-2 text-white/75">
                  Monday – Saturday
                  <br />
                  8:00 AM – 5:00 PM
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[#c9a66b]/20 bg-[#c9a66b]/[0.06] p-5">
              <div className="text-xs tracking-[0.2em] text-[#c9a66b]">
                EMERGENCY SUPPORT
              </div>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Emergency technical support can be coordinated depending on
                the service requirement and availability.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-9">
            <div>
              <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
                SEND AN ENQUIRY
              </div>

              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Tell us how we can help.
              </h2>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-white/45">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#c9a66b]/60"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/45">Phone</label>
                  <input
                    type="tel"
                    placeholder="+254..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#c9a66b]/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/45">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#c9a66b]/60"
                />
              </div>

              <div>
                <label className="text-xs text-white/45">
                  Property / Location
                </label>
                <input
                  type="text"
                  placeholder="Property name or location"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#c9a66b]/60"
                />
              </div>

              <div>
                <label className="text-xs text-white/45">Service</label>
                <select
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#c9a66b]/60"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Plumbing & Drainage</option>
                  <option>Electrical & Power Backup</option>
                  <option>HVAC & Refrigeration</option>
                  <option>Solar & Renewable Energy</option>
                  <option>Tiling & Waterproofing</option>
                  <option>Painting & Wall Finishing</option>
                  <option>Carpentry & Joinery</option>
                  <option>Masonry, Roofing & Glass</option>
                  <option>CCTV & Access Control</option>
                  <option>Fire Detection & Safety</option>
                  <option>Network Infrastructure & Wi-Fi</option>
                  <option>Smart Home & Automation</option>
                  <option>Property Maintenance Contracts</option>
                  <option>Express Handyman Services</option>
                  <option>Swimming Pool & Water Features</option>
                  <option>Lifts & Estate Infrastructure</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/45">Message</label>
                <textarea
                  rows="5"
                  placeholder="Briefly describe what you need..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#c9a66b]/60"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#c9a66b] px-6 py-4 text-sm font-semibold text-[#17130c] transition hover:bg-[#d8b77d]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Request Service CTA */}
      <section className="border-t border-white/10 bg-[#0b0c0c] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl border border-white/10 bg-white/[0.035] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
              NEED A TECHNICIAN?
            </div>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Submit a service request directly.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
              For maintenance and repair requests, use our dedicated service
              request form so we can capture the details properly.
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

export default Contact;