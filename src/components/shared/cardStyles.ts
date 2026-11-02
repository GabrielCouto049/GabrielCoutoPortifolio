import { twMerge } from "tailwind-merge";

const cardBase =
  "border-base-200 bg-base-50 rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md dark:border-base-800 dark:bg-base-900 dark:shadow-black/30 dark:hover:border-accent-500";

export function cardClassName(className = "") {
  return twMerge(cardBase, className);
}
