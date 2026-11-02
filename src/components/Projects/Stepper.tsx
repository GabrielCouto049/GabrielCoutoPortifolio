import { ChevronLeft, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "../shared/Button";

export default function Stepper({
  currPage,
  numOfProjects,
  setCurrPage,
  className = "",
  isMobile,
}: {
  numOfProjects: number;
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  isMobile: boolean;
}) {
  const numOfPages = Math.ceil(numOfProjects / (isMobile ? 3 : 6));

  if (numOfPages <= 1) return null;

  return (
    <nav
      aria-label="Paginação dos projetos"
      className={twMerge(
        "border-base-200 bg-base-50 gap-icon-text dark:border-base-800 dark:bg-base-900 mx-auto flex w-fit max-w-full flex-wrap items-center justify-center rounded-full border p-1.5 shadow-sm dark:shadow-black/30",
        className,
      )}
    >
      <Button
        Icon={ChevronLeft}
        variant="secondary"
        onClick={() => setCurrPage(currPage <= 1 ? numOfPages : currPage - 1)}
      />

      <div className="gap-icon-text flex flex-wrap items-center justify-center">
        {Array.from({ length: numOfPages }, (_, index) => {
          const page = index + 1;
          const isActive = currPage === page;

          return (
            <button
              key={page}
              type="button"
              aria-label={`Página ${page}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setCurrPage(page)}
              className={`focus-visible:outline-accent-600 dark:focus-visible:outline-accent-400 flex size-10 items-center justify-center rounded-full border text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 lg:size-11 ${
                isActive
                  ? "border-accent-600 gradient-accent-strong shadow-accent-600/20 text-accent-50 dark:border-accent-400 dark:text-accent-950 shadow-md dark:shadow-black/30"
                  : "border-base-300 bg-base-50 text-base-700 hover:border-accent-400 hover:bg-base-100 hover:text-accent-700 dark:border-base-700 dark:bg-base-900 dark:text-base-300 dark:hover:border-accent-500 dark:hover:bg-base-800 dark:hover:text-accent-300"
              } `}
            >
              {page}
            </button>
          );
        })}
      </div>

      <Button
        Icon={ChevronRight}
        variant="secondary"
        onClick={() => setCurrPage(currPage >= numOfPages ? 1 : currPage + 1)}
      />
    </nav>
  );
}
