import type { ReactNode } from "react";
import { Activity, ChevronDown, Clock, Timer, TrendingUp } from "lucide-react";

/** White inset frame for Meet section previews (lavender card → white inner) */
export function MeetWidgetFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-[20px] bg-white p-3 shadow-[0_8px_32px_rgba(15,23,42,0.07)] ring-1 ring-black/5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

/** 220px content + 24px vertical padding (p-3) — same for bar chart & deal stack */
export const MEET_PREVIEW_FRAME_HEIGHT_CLASS = "h-[244px]";

/** Stacked segment weights per day (sum normalized per column), bottom → top */
const ACTIVITY_SEGMENTS: number[][] = [
  [0.28, 0.22, 0.18, 0.12],
  [0.2, 0.35, 0.25, 0.2],
  [0.18, 0.25, 0.2, 0.15],
  [0.22, 0.32, 0.28, 0.18],
  [0.15, 0.22, 0.2, 0.32],
  [0.25, 0.2, 0.18, 0.15],
];

/** Unequal total bar height: Tue & Thu tallest, Sat shortest (Mon–Sat) */
const DAY_BAR_HEIGHT_SCALE = [0.68, 1, 0.76, 1, 0.88, 0.52] as const;

const BAR_COLORS = ["#23458F", "#5D7BFF", "#8CB3F5", "#D6E3FF"] as const;

const BASE_BAR_PX = 78;

export function MeetActivityTimeChart({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl bg-[#F6F7F9] p-2 ring-1 ring-black/5 ${className ?? ""}`}
    >
      <div className="mb-2 flex shrink-0 items-center justify-between gap-1.5">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white">
            <Clock className="h-3.5 w-3.5 text-[#0B0C2B]" strokeWidth={2} />
          </span>
          <span className="truncate font-sans text-[12px] font-semibold text-[#0B0C2B]">
            Activity Time
          </span>
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 rounded-lg border border-[#E4E7EC] bg-white px-2.5 py-1.5 font-inter text-[11px] font-medium text-[#0B0C2B] shadow-sm"
        >
          Last 7 Days
          <ChevronDown className="h-3.5 w-3.5 text-[#667085]" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col pb-1">
        {/* Tooltip — Tuesday bar */}
        <div className="pointer-events-none absolute left-[23%] top-0 z-10 -translate-x-1/2">
          <div className="relative rounded-lg border border-[#E4E7EC] bg-white px-2.5 py-1.5 shadow-sm">
            <div className="absolute -right-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#E4E7EC] bg-white" />
            <div className="flex items-center gap-2 pr-1">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: "#D6E3FF" }}
              />
              <span className="whitespace-nowrap font-inter text-[11px] font-semibold text-[#0B0C2B]">
                Meeting 2 hours
              </span>
            </div>
          </div>
        </div>

        <div className="flex min-h-[88px] flex-1 items-end justify-between gap-0.5 px-0.5 pt-6">
          {ACTIVITY_SEGMENTS.map((segments, dayIndex) => {
            const total = segments.reduce((a, b) => a + b, 0) || 1;
            const colH = BASE_BAR_PX * DAY_BAR_HEIGHT_SCALE[dayIndex];
            return (
              <div
                key={dayIndex}
                className="flex h-full min-w-0 flex-1 flex-col justify-end px-px"
              >
                <div className="flex w-full min-h-0 flex-col-reverse overflow-hidden">
                  {segments.map((h, i) => {
                    const color =
                      BAR_COLORS[Math.min(i, BAR_COLORS.length - 1)];
                    const pxH = Math.max((h / total) * colH, 4);
                    return (
                      <div
                        key={i}
                        className="w-full shrink-0"
                        style={{
                          height: pxH,
                          background: color,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Sunday — off */}
          <div className="flex h-full min-w-0 flex-1 flex-col justify-end px-px">
            <div className="mb-0.5 text-center">
              <span className="font-inter text-[10px] font-medium lowercase text-[#98A2B3]">
                off
              </span>
            </div>
            <div
              className="w-full rounded-full border border-[#E4E7EC] bg-[repeating-linear-gradient(135deg,#F2F4F7_0px,#F2F4F7_4px,#FFFFFF_4px,#FFFFFF_8px)]"
              style={{
                height: Math.max(BASE_BAR_PX * 0.36, 18),
              }}
            />
          </div>
        </div>

        <div className="mt-2 flex shrink-0 justify-between gap-0.5 px-0.5 font-inter text-[10px] font-medium text-[#98A2B3]">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d} className="flex-1 text-center">
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type DealStatus = "progress" | "done";

const dealRows: {
  amount: string;
  subtitle: string;
  status: DealStatus;
  name: string;
  days: string;
  initial: string;
}[] = [
  {
    amount: "$619,000",
    subtitle: "Maintaining & Upgrade",
    status: "progress",
    name: "Crishtian Beuhe",
    days: "12 Day",
    initial: "CB",
  },
  {
    amount: "$251,000",
    subtitle: "Develop CRM Product",
    status: "progress",
    name: "Raymond Baratheon",
    days: "21 Day",
    initial: "RB",
  },
  {
    amount: "$184,000",
    subtitle: "Sales pipeline rollout",
    status: "done",
    name: "Aaron Wells",
    days: "8 Day",
    initial: "AW",
  },
];

function StatusBadge({ status }: { status: DealStatus }) {
  const isProgress = status === "progress";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-sans text-[8px] font-semibold leading-tight text-white shadow-sm ${
        isProgress ? "bg-[#5875F5]" : "bg-[#66D18C]"
      }`}
    >
      <Timer className="h-2.5 w-2.5 opacity-95" strokeWidth={2.5} />
      {isProgress ? "Progress" : "Done"}
      <ChevronDown className="h-2.5 w-2.5 opacity-90" />
    </span>
  );
}

export function MeetDealPipelineStack({ className }: { className?: string }) {
  return (
    <div
      className={`h-full min-h-0 w-full overflow-hidden ${className ?? ""}`}
    >
      <div className="flex w-full flex-col gap-2">
        {dealRows.map((row) => (
          <div
            key={row.name + row.amount}
            className="rounded-xl bg-[#F5F6F7] px-3 py-2.5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-sans text-[11px] font-semibold leading-tight tracking-tight text-[#0B0C2B]">
                {row.amount}
              </p>
              <StatusBadge status={row.status} />
            </div>
            <p className="mt-1 font-sans text-[9px] font-normal leading-snug text-[#71717A]">
              {row.subtitle}
            </p>
            <div className="mt-2.5 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-1.5">
                <div
                  className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#93A8FF] to-[#5D7BFF] font-sans text-[7px] font-bold leading-none text-white"
                  aria-hidden
                >
                  {row.initial}
                </div>
                <span className="truncate font-sans text-[9px] font-semibold leading-tight text-[#0B0C2B]">
                  {row.name}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1 text-[#71717A]">
                <Timer className="h-3 w-3" strokeWidth={2} />
                <span className="font-sans text-[9px] font-medium leading-none">
                  {row.days}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Sparkline paths in viewBox 0 0 320 120 */
const ACTIVE_DEALS_AREA_PATH =
  "M0,88 C40,82 55,72 80,58 C105,42 120,48 145,38 C175,25 195,35 220,22 C245,10 265,18 290,12 L320,8 L320,120 L0,120 Z";
const ACTIVE_DEALS_LINE_PATH =
  "M0,88 C40,82 55,72 80,58 C105,42 120,48 145,38 C175,25 195,35 220,22 C245,10 265,18 290,12";
const ACTIVE_DEALS_DASH_PATH =
  "M0,95 C50,90 90,100 140,85 C190,70 230,88 320,75";

export function MeetActiveDealsCard({ className }: { className?: string }) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-xl bg-transparent p-0 md:p-0 ${className ?? ""}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F2F4F7]">
          <Activity
            className="h-[18px] w-[18px] text-[#475467]"
            strokeWidth={2}
          />
        </span>
        <span className="font-sans text-[15px] font-semibold text-[#0B0C2B]">
          Active Deals
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <span className="font-sans text-[28px] font-semibold tracking-tight text-[#0B0C2B] md:text-[30px]">
          $40.00
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF0FF] px-2.5 py-1.5 font-inter text-[12px] font-semibold text-[#0B0C2B]">
          <TrendingUp
            className="h-3.5 w-3.5 text-emerald-500"
            strokeWidth={2.5}
          />
          Active Deals
        </span>
      </div>

      <div className="relative mt-6 h-[120px] w-full md:h-[132px]">
        <svg
          viewBox="0 0 320 120"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="meet-active-deals-area"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="rgb(93, 123, 255)"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="rgb(93, 123, 255)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          {[64, 128, 192, 256].map((x) => (
            <line
              key={x}
              x1={x}
              y1={8}
              x2={x}
              y2={112}
              stroke="#E8EAEF"
              strokeWidth="1"
            />
          ))}
          <path
            d={ACTIVE_DEALS_AREA_PATH}
            fill="url(#meet-active-deals-area)"
          />
          <path
            d={ACTIVE_DEALS_LINE_PATH}
            fill="none"
            stroke="#3355FF"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={ACTIVE_DEALS_DASH_PATH}
            fill="none"
            stroke="#A8B8FF"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
