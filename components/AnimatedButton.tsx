import React, { ComponentProps, ReactNode } from "react";

type AnimatedButtonType = { children: ReactNode } & ComponentProps<"button">;

const AnimatedButton = (props: AnimatedButtonType) => {
  const { children, ...other } = props;
  return (
    // Button code
    <button
      {...other}
      className="w-max relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D1ACFF_0%,#393BB2_50%,#D1ACFF_100%)]" />
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 text-base font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
