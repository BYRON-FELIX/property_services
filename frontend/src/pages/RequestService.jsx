import { useState } from "react";

function RequestService() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    property_name: "",
    location: "",
    service: "",
    preferred_date: "",
    description: "",
  });

  const serviceGroups = [
    {
      label: "MEP Core Services",
      options: [
        "Plumbing",
        "Electrical",
        "HVAC",
        "Solar",
      ],
    },
    {
      label: "Civil & Finishing Works",
      options: [
        "Tiling",
        "Painting",
        "Carpentry",
        "Masonry",
        "Roofing",
      ],
    },
    {
      label: "Security, ICT & Smart Systems",
      options: [
        "Security",
        "Fire Safety",
        "Network & Wi-Fi",
        "Smart Home & Automation",
      ],
    },
    {
      label: "Contracts & Specialized Support",
      options: [
        "Property Maintenance Contract",
        "General Maintenance",
        "Swimming Pool",
        "Lifts & Estate Infrastructure",
      ],
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const payload = {
      ...formData,
      preferred_date: formData.preferred_date || null,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/service-requests/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to submit your service request."
        );
      }

      console.log("Service request created:", data);

      setRequestId(data.request_id);
      setSubmitted(true);
    } catch (submitError) {
      console.error(submitError);

      setError(
        submitError.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError("");
    setRequestId("");

    setFormData({
      customer_name: "",
      customer_phone: "",
      customer_email: "",
      property_name: "",
      location: "",
      service: "",
      preferred_date: "",
      description: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#080909] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,107,0.13),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              REQUEST SERVICE
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Tell us what your
              <br />
              <span className="text-white/40">property needs.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Submit a maintenance or technical service request and our team
              will review the requirement and coordinate the appropriate
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Form Area */}
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.34fr]">
          {/* Main Card */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center px-6 py-16 text-center sm:px-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a66b]/50 bg-[#c9a66b]/10 text-3xl text-[#c9a66b]">
                  ✓
                </div>

                <div className="mt-8 text-xs tracking-[0.25em] text-[#c9a66b]">
                  REQUEST SUCCESSFULLY SUBMITTED
                </div>

                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  We've received your request.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  Your service request has been recorded. Our team will
                  review the requirement and coordinate the appropriate
                  technical support.
                </p>

                {requestId && (
                  <div className="mt-8 rounded-2xl border border-[#c9a66b]/30 bg-[#c9a66b]/[0.08] px-8 py-5">
                    <div className="text-[10px] tracking-[0.25em] text-white/35">
                      REQUEST ID
                    </div>

                    <div className="mt-2 text-2xl font-semibold tracking-wide text-[#c9a66b]">
                      {requestId}
                    </div>
                  </div>
                )}

                <p className="mt-5 text-xs text-white/25">
                  Keep this reference for future communication.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-9 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/65 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="border-b border-white/10 px-7 py-7 sm:px-10">
                  <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
                    SERVICE REQUEST FORM
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Property & customer details
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Provide enough information for our team to understand the
                    requirement and respond appropriately.
                  </p>
                </div>

                <div className="px-7 py-8 sm:px-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="text-xs text-white/45">
                        Full Name *
                      </label>

                      <input
                        required
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your name"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs text-white/45">
                        Phone Number *
                      </label>

                      <input
                        required
                        name="customer_phone"
                        value={formData.customer_phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="+254..."
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs text-white/45">
                        Email Address
                      </label>

                      <input
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleChange}
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Property */}
                    <div>
                      <label className="text-xs text-white/45">
                        Property Name
                      </label>

                      <input
                        name="property_name"
                        value={formData.property_name}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. Greenview Apartments"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Location */}
                    <div className="sm:col-span-2">
                      <label className="text-xs text-white/45">
                        Property Location *
                      </label>

                      <input
                        required
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        type="text"
                        placeholder="Area, town, estate or building location"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-xs text-white/45">
                        Service Required *
                      </label>

                      <select
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#151616] px-4 py-3.5 text-sm text-white/70 outline-none transition focus:border-[#c9a66b]/60"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {serviceGroups.map((group) => (
                          <optgroup
                            key={group.label}
                            label={group.label}
                          >
                            {group.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-xs text-white/45">
                        Preferred Date
                      </label>

                      <input
                        name="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        type="date"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/70 outline-none transition focus:border-[#c9a66b]/60"
                      />
                    </div>

                    {/* Description */}
                    <div className="sm:col-span-2">
                      <label className="text-xs text-white/45">
                        Describe the Problem *
                      </label>

                      <textarea
                        required
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="7"
                        placeholder="Describe the issue, repair or maintenance work required..."
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#c9a66b]/60"
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-6 text-red-300">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-white/25">
                      Your information will be used to assess and coordinate
                      your service request.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-xl bg-[#c9a66b] px-8 py-4 text-sm font-semibold text-[#17130c] shadow-lg transition hover:bg-[#d8b77d] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-[#111212] p-7 sm:p-8">
            <div className="text-xs tracking-[0.25em] text-[#c9a66b]">
              WHAT HAPPENS NEXT
            </div>

            <div className="mt-8 space-y-8">
              {[
                [
                  "01",
                  "Request received",
                  "Your service request is submitted to our team.",
                ],
                [
                  "02",
                  "Request reviewed",
                  "We review the property and technical requirement.",
                ],
                [
                  "03",
                  "Technician assigned",
                  "The appropriate technical specialist is selected.",
                ],
                [
                  "04",
                  "Visit coordinated",
                  "Our team contacts you to coordinate the service.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a66b]/40 text-[10px] text-[#c9a66b]">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>

                    <p className="mt-2 text-xs leading-6 text-white/35">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="text-[10px] tracking-[0.2em] text-white/30">
                NEED URGENT HELP?
              </div>

              <p className="mt-3 text-sm leading-6 text-white/45">
                For urgent technical issues, contact the team directly by
                phone.
              </p>

              <div className="mt-4 text-sm font-medium text-[#c9a66b]">
                +254794572834
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default RequestService;