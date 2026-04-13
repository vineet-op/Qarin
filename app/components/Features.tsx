import React from "react";

const featuresData = [
  {
    id: "smart-contact",
    title: "Smart contact management",
    description:
      "Easily link special cross-jurisdictional, multi-entity business structures to see the full customer journey.",
    svg: (
      <svg
        role="presentation"
        viewBox="0 0 26 26"
        className="h-[61px] w-[61px]"
        style={{ opacity: 1 }}
      >
        <path
          d="M 9.6 4.8 C 9.6 7.451 7.451 9.6 4.8 9.6 C 2.149 9.6 0 7.451 0 4.8 C 0 2.149 2.149 0 4.8 0 C 7.451 0 9.6 2.149 9.6 4.8 Z"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="30.163585662841797 6.03271713256836"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeWidth="1.8"
          transform="translate(4.6 2.2)"
          strokeDashoffset="0"
        />
        <path
          d="M 0 9.6 C 2.651 9.6 4.8 7.451 4.8 4.8 C 4.8 2.149 2.651 0 0 0"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="15.081794738769531 3.0163589477539063"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(16.6 2.2)"
          strokeDashoffset="0"
        />
        <path
          d="M 10.8 0 L 6 0 C 2.686 0 0 2.686 0 6 C 0 7.325 1.075 8.4 2.4 8.4 L 14.4 8.4 C 15.725 8.4 16.8 7.325 16.8 6 C 16.8 2.686 14.114 0 10.8 0 Z"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="43.19292449951172 8.638584899902344"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1 15.4)"
          strokeDashoffset="0"
        />
        <path
          d="M 0 0 C 3.314 0 6 2.686 6 6 C 6 7.325 4.925 8.4 3.6 8.4 L 1.8 8.4"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="14.996460914611816 2.9992921829223635"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(19 15.4)"
          strokeDashoffset="0"
        />
      </svg>
    ),
  },
  {
    id: "ai-sales",
    title: "AI sales forecasting",
    description:
      "Predict future revenue, plan prospects, and understand buying patterns with AI-powered performance and deal history.",
    svg: (
      <svg
        role="presentation"
        viewBox="0 0 26 26"
        className="h-[61px] w-[61px]"
        style={{ opacity: 1 }}
      >
        <path
          d="M 24 24 L 9.333 24 C 4.933 24 2.733 24 1.367 22.633 C 0 21.267 0 19.067 0 14.667 L 0 0"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="45.87895965576172 9.175791931152345"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeWidth="1.8"
          transform="translate(1 1)"
          strokeDashoffset="0"
        />
        <path
          d="M 13.333 6.666 L 13.333 21.333 M 20 10.666 L 20 21.333 M 6.667 10.666 L 6.667 19.999 M 24 3.982 C 21.547 3.982 18.923 4.323 17.169 1.99 C 15.173 -0.663 11.493 -0.663 9.497 1.99 C 7.744 4.323 5.12 3.982 2.667 3.982 L 0 3.982"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="61.19389343261719 12.238778686523439"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1 3.667)"
          strokeDashoffset="0"
        />
      </svg>
    ),
  },
  {
    id: "team-collaboration",
    title: "Team collaboration tools",
    description:
      "Share notes, assign tasks, and collaborate seamlessly with team to ensure everyone moves in sync.",
    svg: (
      <svg
        className="framer-G1HAC framer-1m03rh8 h-[61px] w-[61px]"
        role="presentation"
        viewBox="0 0 26 26"
        style={
          {
            "--6xk5cg": "rgb(255, 255, 255)",
            opacity: 1,
          } as React.CSSProperties
        }
      >
        <path
          d="M 24 2.4 L 20.653 2.4 C 19.932 2.4 19.571 2.4 19.231 2.297 C 18.892 2.194 18.59 1.994 17.99 1.594 C 17.09 0.994 16.063 0.31 15.553 0.154 C 15.043 0 14.502 0 13.42 0 C 11.948 0 11 0 10.338 0.274 C 9.678 0.548 9.157 1.068 8.116 2.11 L 7.2 3.024 C 6.966 3.259 6.848 3.377 6.776 3.492 C 6.508 3.921 6.538 4.473 6.851 4.871 C 6.935 4.978 7.064 5.082 7.322 5.29 C 8.278 6.058 9.654 5.981 10.519 5.111 L 12 3.622 L 13.2 3.622 L 20.4 10.865 C 21.062 11.533 21.062 12.61 20.4 13.278 C 20.083 13.598 19.651 13.778 19.2 13.778 C 18.749 13.778 18.317 13.598 18 13.278 L 17.4 12.676 M 13.8 9.054 L 17.4 12.676 M 17.4 12.676 C 18.062 13.344 18.062 14.421 17.4 15.089 C 17.083 15.409 16.651 15.589 16.2 15.589 C 15.749 15.589 15.317 15.409 15 15.089 L 13.8 13.882 M 13.8 13.882 C 14.463 14.55 14.463 15.628 13.8 16.296 C 13.483 16.616 13.051 16.796 12.6 16.796 C 12.149 16.796 11.717 16.616 11.4 16.296 L 9.6 14.485 M 13.8 13.882 L 11.4 11.482 M 9 13.882 L 9.6 14.485 M 9.6 14.485 C 10.263 15.154 10.263 16.231 9.6 16.9 C 9.283 17.22 8.851 17.4 8.4 17.4 C 7.949 17.4 7.517 17.22 7.2 16.9 L 3.811 13.441 C 3.115 12.731 2.767 12.374 2.321 12.187 C 1.876 12 1.378 12 0.383 12 L 0 12"
          fill="transparent"
          height="17.39976813562105px"
          id="to49_xWaq"
          stroke="var(--6xk5cg, var(--token-682ea574-b1f8-4a4d-80dc-312e66a2a7f2, rgb(21, 22, 60)))"
          strokeDasharray="83.24398040771484 16.64879608154297"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1 4)"
          width="23.999999760278452px"
          strokeDashoffset="-495.4628854813028"
        />
        <path
          d="M 24 9.6 L 21 9.6 M 7.8 0 L 0 0"
          fill="transparent"
          height="9.600000381469727px"
          id="Udm4kmSRa"
          stroke="var(--6xk5cg, var(--token-682ea574-b1f8-4a4d-80dc-312e66a2a7f2, rgb(21, 22, 60)))"
          strokeDasharray="10.800000190734863 2.160000038146973"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeWidth="1.8"
          transform="translate(1 6.4)"
          width="24px"
          strokeDashoffset="-64.2809153465732"
        />
      </svg>
    ),
  },
  {
    id: "data-security",
    title: "Data security & permissions",
    description:
      "Protect sensitive data with advanced security, role-based access, and enterprise-level sign-ons for enterprise reliability.",
    svg: (
      <svg
        className="framer-JmyRa framer-1m03rh8 h-[61px] w-[61px]"
        role="presentation"
        viewBox="0 0 26 26"
        style={
          {
            "--6xk5cg":
              "var(--token-9978d77b-8ac4-4329-ac09-30ffd31f76c6, rgb(255, 255, 255))",
            opacity: 1,
          } as React.CSSProperties
        }
      >
        <path
          d="M 18.851 1.794 C 16.58 0.665 13.8 0 10.8 0 C 7.8 0 5.021 0.665 2.749 1.794 C 1.636 2.348 1.079 2.626 0.54 3.497 C 0 4.368 0 5.21 0 6.898 L 0 11.086 C 0 17.905 5.45 21.696 8.608 23.321 C 9.488 23.773 9.928 24 10.8 24 C 11.671 24 12.112 23.773 12.992 23.321 C 16.148 21.696 21.6 17.904 21.6 11.084 L 21.6 6.898 C 21.6 5.21 21.6 4.368 21.06 3.497 C 20.52 2.626 19.964 2.348 18.851 1.794 Z"
          fill="transparent"
          height="24px"
          id="SIqqO6Dgm"
          stroke="var(--6xk5cg, var(--token-682ea574-b1f8-4a4d-80dc-312e66a2a7f2, rgb(21, 22, 60)))"
          strokeDasharray="73.88179779052734 14.776359558105469"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(2.2 1)"
          width="21.599999999999994px"
          strokeDashoffset="0"
        />
        <path
          d="M 1.8 4.2 L 1.8 2.4 C 1.8 1.075 2.875 0 4.2 0 C 5.525 0 6.6 1.075 6.6 2.4 L 6.6 4.2 M 6.6 4.2 L 1.8 4.2 C 0.806 4.2 0 5.006 0 6 L 0 7.8 C 0 8.794 0.806 9.6 1.8 9.6 L 6.6 9.6 C 7.594 9.6 8.4 8.794 8.4 7.8 L 8.4 6 C 8.4 5.006 7.594 4.2 6.6 4.2 Z"
          fill="transparent"
          height="9.600000286102295px"
          id="RBhHsWt0z"
          stroke="var(--6xk5cg, var(--token-682ea574-b1f8-4a4d-80dc-312e66a2a7f2, rgb(21, 22, 60)))"
          strokeDasharray="35.65159606933594 7.130319213867188"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(8.8 6.4)"
          width="8.399999952316284px"
          strokeDashoffset="0"
        />
      </svg>
    ),
  },
  {
    id: "real-time-alerts",
    title: "Real-time alerts & notifications",
    description:
      "Stay updated on every opportunity and receive real-time notifications for new leads, deal updates, progress, and important changes.",
    svg: (
      <svg
        role="presentation"
        viewBox="0 0 26 26"
        className="h-[61px] w-[61px]"
        style={{ opacity: 1 }}
      >
        <path
          d="M 15.787 19.579 C 15.787 22.021 13.808 24 11.366 24 C 8.925 24 6.945 22.021 6.945 19.579 M 20.5 19.579 L 2.234 19.579 C 1.33 19.579 0.516 19.034 0.17 18.199 C -0.176 17.364 0.016 16.403 0.655 15.764 L 1.415 15.003 C 2.125 14.292 2.524 13.328 2.524 12.323 L 2.524 8.842 C 2.524 3.959 6.483 0 11.366 0 C 16.25 0 20.208 3.959 20.208 8.842 L 20.208 12.323 C 20.209 13.328 20.608 14.292 21.319 15.003 L 22.08 15.764 C 22.718 16.404 22.909 17.364 22.563 18.198 C 22.218 19.033 21.404 19.577 20.501 19.579 Z"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="85.53360748291016 17.106721496582033"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1.63 1)"
          strokeDashoffset="0"
        />
      </svg>
    ),
  },
  {
    id: "ai-powered",
    title: "AI-powered insights",
    description:
      "Identify high-value opportunities, and receive AI-driven recommendations that turn data into your workflow.",
    svg: (
      <svg
        role="presentation"
        viewBox="0 0 26 26"
        className="h-[61px] w-[61px]"
        style={{ opacity: 1 }}
      >
        <path
          d="M 0 9.6 C 0 5.075 0 2.812 1.406 1.406 C 2.812 0 5.075 0 9.6 0 C 14.125 0 16.388 0 17.794 1.406 C 19.2 2.812 19.2 5.075 19.2 9.6 C 19.2 14.125 19.2 16.388 17.794 17.794 C 16.388 19.2 14.125 19.2 9.6 19.2 C 5.075 19.2 2.812 19.2 1.406 17.794 C 0 16.388 0 14.125 0 9.6 Z"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="68.07278442382812 13.614556884765626"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(3.4 3.4)"
          strokeDashoffset="0"
        />
        <path
          d="M 6.6 15.6 L 8.81 8.969 C 8.924 8.629 9.242 8.401 9.6 8.401 C 9.958 8.401 10.276 8.629 10.39 8.969 L 12.6 15.6 M 7.8 13.2 L 11.4 13.2 M 16.2 8.4 L 16.2 15.6 M 7.2 0 L 7.2 2.4 M 16.8 0 L 16.8 2.4 M 12 0 L 12 2.4 M 7.2 21.6 L 7.2 24 M 12 21.6 L 12 24 M 16.8 21.6 L 16.8 24 M 24 16.8 L 21.6 16.8 M 2.4 7.2 L 0 7.2 M 2.4 16.8 L 0 16.8 M 2.4 12 L 0 12 M 24 7.2 L 21.6 7.2 M 24 12 L 21.6 12"
          fill="transparent"
          stroke="rgb(255, 255, 255)"
          strokeDasharray="55.65751647949219 11.131503295898439"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1 1)"
          strokeDashoffset="0"
        />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="mt-24 w-full">
      <div
        className="mx-2 lg:mx-6 rounded-[32px] px-4 py-12 sm:py-20 lg:px-8 lg:py-24"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/0W8QRSemHdaCrSMY0upWHfdsmn0.png?width=300&height=300")',
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          backgroundColor: "black",
        }}
      >
        <div className="mx-auto max-w-[1296px]">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full  bg-black/50 px-3 py-1.5">
              <span className="font-sans text-[13px] font-medium text-white">
                Key Features
              </span>
            </div>

            <h2 className="font-sans text-[28px] font-medium leading-[1.1] tracking-tighter text-white sm:text-[34px]">
              Core features that power your workflow
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] font-inter text-[16px] leading-relaxed text-white/85">
              Qarin combines AI, automation, and CRM tools into a single
              platform—helping teams manage customers, track deals, and scale
              operations without complexity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <article
                key={feature.id}
                className="rounded-2xl border border-white/10 p-[36px] backdrop-blur-lg"
              >
                <div className="mb-[46px]">{feature.svg}</div>
                <h3 className="mb-[15px] font-sans text-[20px] font-medium leading-tight text-white">
                  {feature.title}
                </h3>
                <p className="font-inter text-[15px] leading-relaxed text-white/75">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
