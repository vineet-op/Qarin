import React from "react";
import { Check } from "lucide-react";

const Meet = () => {
  return (
    <section className="font-inter mx-auto mt-24 w-full px-4 lg:px-24 bg-neutral-50 py-32">
      <div className="mx-auto max-w-[640px] text-center">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--brand-color)" }}
          />
          <span
            className="text-[12px] font-medium font-inter"
            style={{ color: "var(--heading-color)" }}
          >
            Meet Qarin
          </span>
        </div>

        <h2
          className="text-[34px] font-sans max-w-[500px] mx-auto font-medium leading-[1.1] tracking-tighter"
          style={{ color: "var(--heading-color)" }}
        >
          Everything you need to manage and grow sales
        </h2>

        <p
          className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed font-inter"
          style={{ color: "var(--subheading-color)" }}
        >
          Qarin brings analytics, activity tracking, and deal insights into one
          unified dashboard, helping teams understand performance, spot
          opportunities, and move faster with confidence.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="grid grid-rows-2 gap-4">
          <article
            className="rounded-2xl border p-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
            style={{
              background: "var(--card-state-bg)",
              boxShadow: "0px 0px 0px 1px var(--card-state-border)",
            }}
          >
            <div className="max-w-full sm:max-w-[58%]">
              <h3
                className="text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
                style={{ color: "var(--heading-color)" }}
              >
                Time tracking breakdown
              </h3>
              <p
                className="mt-3 text-[15px] leading-relaxed"
                style={{ color: "var(--subheading-color)" }}
              >
                Track how time is spent across meetings, calls, and tasks to
                understand productivity and improve sales performance.
              </p>
            </div>
            <div className="h-[120px] w-full shrink-0 rounded-xl bg-white/80 sm:w-[220px]" />
          </article>

          <article
            className="rounded-2xl border p-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
            style={{
              background: "var(--card-state-bg)",
              boxShadow: "0px 0px 0px 1px var(--card-state-border)",
            }}
          >
            <div className="max-w-full sm:max-w-[58%]">
              <h3
                className="text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
                style={{ color: "var(--heading-color)" }}
              >
                Activity tracking & insights
              </h3>
              <p
                className="mt-3 text-[15px] leading-relaxed"
                style={{ color: "var(--subheading-color)" }}
              >
                Visualize when sales activity is strongest with clear insights
                that help teams focus on the moments that matter most.
              </p>
            </div>
            <div className="h-[120px] w-full shrink-0 rounded-xl bg-white/80 sm:w-[220px]" />
          </article>
        </div>

        <article
          className="rounded-2xl border p-6"
          style={{
            background: "var(--card-state-bg)",
            boxShadow: "0px 0px 0px 1px var(--card-state-border)",
          }}
        >
          <h3
            className="text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
            style={{ color: "var(--heading-color)" }}
          >
            Real-time sales statistics
          </h3>
          <p
            className="mt-3 text-[15px] leading-relaxed"
            style={{ color: "var(--subheading-color)" }}
          >
            Monitor active deals and revenue trends in real time, so you always
            know where your pipeline stands and what needs attention next.
          </p>
          <div className="mt-6 h-[320px] rounded-xl bg-white/85" />
        </article>
      </div>
      {/* Stats Section */}
      <div
        className="mt-4 w-full rounded-3xl px-[28px] py-7 sm:px-12 sm:py-16 bg-gradient-brand-soft"
        // style={{ background: "var(--brand-color)" }}
      >
        <div className="flex flex-col gap-[33px] lg:grid lg:grid-cols-4 lg:gap-12">
          {[
            {
              stat: "#1",
              description: "Leading CRM platform for modern teams",
            },
            {
              stat: "7.3M+",
              description: "Customer interactions handled worldwide",
            },
            {
              stat: "250k+",
              description: "Businesses grow yearly with Qarin",
            },
            {
              stat: "70k+",
              description: "Sales teams trust Qarin to close more deals",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative ${
                index > 0
                  ? "border-t border-dashed pt-[33px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
                  : ""
              }`}
              style={
                index > 0
                  ? {
                      borderColor: "rgba(240, 242, 255, 0.3)",
                    }
                  : {}
              }
            >
              <h3 className="text-[34px] font-sans font-medium tracking-tighter text-white lg:text-5xl">
                {item.stat}
              </h3>
              <p
                className="mt-[15px] text-[16px] font-inter leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visibility Section */}
      <div className="mt-24 grid grid-cols-1 items-center gap-2 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div>
          <h2
            className="text-[48px] font-sans font-medium leading-[1.1] tracking-tighter max-w-sm"
            style={{ color: "var(--heading-color)" }}
          >
            Visibility into every sales action
          </h2>

          <p
            className="mt-6 lg:mt-[24px] text-[15px] leading-relaxed max-w-lg"
            style={{ color: "var(--subheading-color)" }}
          >
            Qarin highlights when and where sales activity is most effective,
            giving teams the context they need to improve efficiency and drive
            consistent results.
          </p>

          <div className="mt-8 lg:mt-[48px] flex flex-col gap-6 lg:gap-[48px]">
            {[
              "Track activity patterns across your entire sales workflow",
              "Connect effort, timing, and outcomes in one view",
              "Make data-informed decisions without manual reporting",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "var(--heading-color)" }}
                />
                <span
                  className="text-[15px] leading-relaxed"
                  style={{ color: "var(--heading-color)" }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[305px_407px] lg:justify-center lg:h-[550px]">
          {/* Left Column - Stacked vertically */}
          <div className="flex h-full flex-col gap-2 mt-16 lg:w-[305px]">
            {/* Team Image */}
            <div className="h-[360px] overflow-hidden rounded-3xl sm:h-[467px] lg:h-[345px] lg:w-[305px]">
              <img
                src="https://framerusercontent.com/images/g9tPL6MNn8e238xAmC4eUw7ZQUg.png?width=1664&height=2432"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Efficiency Card */}
            <div className="bg-gradient-brand-soft flex h-[200px] flex-col justify-center rounded-3xl p-8 sm:p-4 lg:h-[206px] lg:px-[24px] lg:py-[35px]">
              <h3 className="lg:text-[23px] text-[23px]  font-sans font-medium text-white leading-tight mb-4">
                72% Increase in operational efficiency
              </h3>
              <p className="text-[15px] text-white/85 leading-relaxed">
                From customers who used Qarin for at least 12 months.
              </p>
            </div>
          </div>

          {/* Right Column - Sales Overview Card (full height) */}
          <div
            className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[560px] lg:h-[550px] lg:w-[365px]"
            style={{
              backgroundImage:
                'url("https://framerusercontent.com/images/fNPoLkV9VpfpwhjhTVrxdURZWc.png?width=2752&height=1764")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* SVG Chart positioned on the right side */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 lg:p-9">
              <img
                src="https://framerusercontent.com/images/RntMFGWWNC0XEDM378ckC6N5WA.svg?width=378&height=393"
                alt="Sales chart"
                className="h-auto w-full max-w-[378px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
