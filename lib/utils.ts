import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeAnimation = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
