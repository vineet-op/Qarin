import { Check } from "lucide-react";
import {
  MEET_PREVIEW_FRAME_HEIGHT_CLASS,
  MeetActiveDealsCard,
  MeetActivityTimeChart,
  MeetDealPipelineStack,
  MeetWidgetFrame,
} from "@/app/components/MeetDashboardWidgets";

const meetPreviewCol = "w-full min-w-0 shrink-0 sm:w-[260px] lg:w-[280px]";

/** Same outer size for Activity chart & deal stack white frames */
const meetPreviewShell = `${meetPreviewCol} ${MEET_PREVIEW_FRAME_HEIGHT_CLASS} flex flex-col`;

const Meet = () => {
  return (
    <section className="font-inter mx-auto mt-16 md:mt-20 lg:mt-24 w-full px-4 md:px-6 lg:px-6 xl:px-24 bg-neutral-50 py-16 md:py-24 lg:py-32">
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
          className="text-[28px] md:text-[32px] lg:text-[34px] font-sans max-w-[500px] mx-auto font-medium leading-[1.1] tracking-tighter"
          style={{ color: "var(--heading-color)" }}
        >
          Everything you need to manage and grow sales
        </h2>

        <p
          className="mx-auto mt-4 max-w-[620px] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-inter"
          style={{ color: "var(--subheading-color)" }}
        >
          Qarin brings analytics, activity tracking, and deal insights into one
          unified dashboard, helping teams understand performance, spot
          opportunities, and move faster with confidence.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 md:mt-10 lg:mt-12 lg:grid-cols-2 lg:grid-rows-2 lg:items-stretch lg:gap-2">
        <article
          className="flex flex-col items-start gap-4 rounded-2xl border p-4 sm:flex-row sm:items-start sm:justify-between lg:col-start-1 lg:row-start-1"
          style={{
            background: "var(--card-state-bg)",
            boxShadow: "0px 0px 0px 1px var(--card-state-border)",
          }}
        >
          <div className="max-w-full sm:max-w-[52%] lg:max-w-[48%]">
            <h3
              className="text-[20px] md:text-[22px] lg:text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
              style={{ color: "var(--heading-color)" }}
            >
              Time tracking breakdown
            </h3>
            <p
              className="mt-2 text-[14px] md:text-[15px] leading-relaxed"
              style={{ color: "var(--subheading-color)" }}
            >
              Track how time is spent across meetings, calls, and tasks to
              understand productivity and improve sales performance.
            </p>
          </div>
          <div className={`${meetPreviewShell} overflow-hidden`}>
            <MeetWidgetFrame className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <MeetActivityTimeChart className="min-h-0 w-full flex-1" />
            </MeetWidgetFrame>
          </div>
        </article>

        <article
          className="flex flex-col items-start gap-4 rounded-2xl border p-4 sm:flex-row sm:items-stretch sm:justify-between lg:col-start-1 lg:row-start-2"
          style={{
            background: "var(--card-state-bg)",
            boxShadow: "0px 0px 0px 1px var(--card-state-border)",
          }}
        >
          <div className="max-w-full sm:max-w-[52%] lg:max-w-[48%]">
            <h3
              className="text-[20px] md:text-[22px] lg:text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
              style={{ color: "var(--heading-color)" }}
            >
              Activity tracking & insights
            </h3>
            <p
              className="mt-2 text-[14px] md:text-[15px] leading-relaxed"
              style={{ color: "var(--subheading-color)" }}
            >
              Visualize when sales activity is strongest with clear insights
              that help teams focus on the moments that matter most.
            </p>
          </div>
          <div className={`${meetPreviewShell} overflow-hidden`}>
            <MeetWidgetFrame className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <MeetDealPipelineStack className="min-h-0 flex-1" />
            </MeetWidgetFrame>
          </div>
        </article>

        <article
          className="flex h-full min-h-0 flex-col rounded-2xl border p-4 lg:row-span-2 lg:col-start-2 lg:row-start-1"
          style={{
            background: "var(--card-state-bg)",
            boxShadow: "0px 0px 0px 1px var(--card-state-border)",
          }}
        >
          <div className="shrink-0">
            <h3
              className="text-[20px] md:text-[22px] lg:text-[24px] font-sans font-medium leading-[1.1] tracking-tighter"
              style={{ color: "var(--heading-color)" }}
            >
              Real-time sales statistics
            </h3>
            <p
              className="mt-2 text-[14px] md:text-[15px] leading-relaxed"
              style={{ color: "var(--subheading-color)" }}
            >
              Monitor active deals and revenue trends in real time, so you
              always know where your pipeline stands and what needs attention
              next.
            </p>
          </div>
          <div className="mt-4 w-full shrink-0">
            <MeetWidgetFrame>
              <MeetActiveDealsCard />
            </MeetWidgetFrame>
          </div>
          {/* Extra grid height goes below the graph, not between title and chart */}
          <div className="min-h-0 flex-1" aria-hidden />
        </article>
      </div>
      {/* Stats Section */}
      <div className="mt-4 w-full rounded-2xl md:rounded-3xl px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 bg-gradient-brand-soft">
        <div className="flex flex-col md:flex-row  md:justify-center gap-8 md:gap-[33px] lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-12">
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
              className={`relative  ${
                index > 0
                  ? "border-t border-dashed pt-8 md:border-t-0 md:pt-0 lg:border-l lg:pl-8 xl:pl-12"
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
              <h3 className="text-[32px] md:text-[34px] lg:text-[40px] xl:text-5xl font-sans font-medium tracking-tighter text-white">
                {item.stat}
              </h3>
              <p
                className="mt-3 md:mt-[15px] text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visibility Section */}
      <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 items-start gap-8 xl:grid-cols-2 xl:gap-12">
        {/* Left Content */}
        <div className="xl:pr-4">
          <h2
            className="text-[32px] md:text-[34px] md:w-full lg:text-[44px] xl:text-[48px] font-sans font-medium leading-[1.1] tracking-tighter lg:max-w-sm"
            style={{ color: "var(--heading-color)" }}
          >
            Visibility into every sales action
          </h2>

          <p
            className="mt-4 md:mt-5 lg:mt-[24px] text-[14px] md:text-[15px] leading-relaxed max-w-lg"
            style={{ color: "var(--subheading-color)" }}
          >
            Qarin highlights when and where sales activity is most effective,
            giving teams the context they need to improve efficiency and drive
            consistent results.
          </p>

          <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-[48px] flex flex-col gap-4 md:gap-12 lg:gap-6 xl:gap-[48px]">
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
                  className="text-[14px] md:text-[15px] leading-relaxed"
                  style={{ color: "var(--heading-color)" }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:h-full">
            {/* Left Column - Stacked vertically */}
            <div className="flex h-full flex-col gap-2 mt-8 md:mt-12 xl:mt-16">
              {/* Team Image */}
              <div className="h-[300px] overflow-hidden rounded-2xl md:rounded-3xl sm:h-[400px] md:h-[467px] xl:h-[345px] w-full">
                <img
                  src="https://framerusercontent.com/images/g9tPL6MNn8e238xAmC4eUw7ZQUg.png?width=1664&height=2432"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Efficiency Card */}
              <div className="bg-gradient-brand-soft flex h-[180px] md:h-[200px] flex-col justify-center rounded-2xl md:rounded-3xl p-6 sm:p-4 xl:h-[206px] xl:px-[24px] xl:py-[35px]">
                <h3 className="text-[20px] md:text-[22px] xl:text-[23px] font-sans font-medium text-white leading-tight mb-3 md:mb-4">
                  72% Increase in operational efficiency
                </h3>
                <p className="text-[13px] md:text-[14px] xl:text-[15px] text-white/85 leading-relaxed">
                  From customers who used Qarin for at least 12 months.
                </p>
              </div>
            </div>

            {/* Right Column - Sales Overview Card (full height) */}
            <div
              className="relative h-[380px] w-full overflow-hidden rounded-2xl md:rounded-3xl sm:h-[500px] md:h-[560px] xl:h-[550px]"
              style={{
                backgroundImage:
                  'url("https://framerusercontent.com/images/fNPoLkV9VpfpwhjhTVrxdURZWc.png?width=2752&height=1764")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* SVG Chart positioned on the right side */}
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8 xl:p-9">
                <img
                  src="https://framerusercontent.com/images/RntMFGWWNC0XEDM378ckC6N5WA.svg?width=378&height=393"
                  alt="Sales chart"
                  className="h-auto w-full max-w-[300px] md:max-w-[350px] xl:max-w-[378px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
