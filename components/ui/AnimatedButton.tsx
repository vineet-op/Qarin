"use client";

import React from "react";
import { Easing, motion } from "motion/react";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface RollButtonProps {
  label: string;
  onClick?: () => void;

  fontSize?: string;
  fontFamily?: string;
  background?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  fontWeight?: string | number;
  letterSpacing?: string;

  className?: string;
  style?: React.CSSProperties;

  /** Merged onto both label layers — use for responsive type (e.g. `text-[14px] md:text-[15px] font-medium`). */
  labelClassName?: string;
  /** Renders after the rolling label (e.g. icon); not duplicated in the roll animation. */
  suffix?: React.ReactNode;

  duration?: number;
  ease?: [number, number, number, number] | string;

  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const RollButton: React.FC<RollButtonProps> = ({
  label,
  onClick,

  fontSize = "15px",
  fontFamily = "inherit",
  background = "#0A0A0A",
  color = "#ffffff",
  padding = "12px 28px",
  borderRadius = "8px",
  border = "none",
  fontWeight = 500,
  letterSpacing = "0em",

  className = "",
  style,
  labelClassName,
  suffix,

  duration = 0.38,
  ease = [0.22, 1, 0.36, 1],

  disabled = false,
  type = "button",
}) => {
  const textStyle: React.CSSProperties = {
    display: "block",
    ...(labelClassName ? {} : { fontSize, fontWeight }),
    fontFamily,
    letterSpacing,
    color,
    lineHeight: 1,
    whiteSpace: "nowrap",
  };

  const rollInner = (
    <div
      style={{
        position: "relative",
        height: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.span
        className={labelClassName}
        style={{ ...textStyle }}
        variants={{
          idle: { y: "0%", opacity: 1 },
          hovered: { y: "-110%", opacity: 0 },
        }}
        transition={{ duration, ease: ease as Easing }}
      >
        {label}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className={labelClassName}
        style={{
          ...textStyle,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        variants={{
          idle: { x: "-50%", y: "110%", opacity: 0 },
          hovered: { x: "-50%", y: "-50%", opacity: 1 },
        }}
        transition={{ duration, ease: ease as Easing }}
      >
        {label}
      </motion.span>
    </div>
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      initial="idle"
      whileHover={disabled ? "idle" : "hovered"}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.12 }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding,
        background,
        borderRadius,
        border,
        cursor: disabled ? "not-allowed" : "pointer",
        outline: "none",
        ...style,
      }}
    >
      {suffix ? (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {rollInner}
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            {suffix}
          </span>
        </span>
      ) : (
        rollInner
      )}
    </motion.button>
  );
};

export default RollButton;
