"use client";

import Link from "next/link";

interface IPagination {
  total: number;
  page: number;
  size: number;
}

const Pagination = ({ total, page, size }: IPagination) => {
  const hasPrevious = page > 1;
  const hasNext = !!total && page * size < Number(total);

  return (
    <div className="w-full my-4 text-center">
      <div className="join">
        <Link
          href={`/pools?page=${page - 1}`}
          className={
            hasPrevious
              ? "join-item btn"
              : "join-item btn btn-disabled pointer-events-none"
          }
          aria-disabled={!hasPrevious}
          tabIndex={hasPrevious ? undefined : -1}
        >
          «
        </Link>
        <button className="join-item btn pointer-events-none">
          Page {page}
        </button>
        <Link
          href={`/pools?page=${page + 1}`}
          className={
            hasNext
              ? "join-item btn"
              : "join-item btn btn-disabled pointer-events-none"
          }
          aria-disabled={!hasNext}
          tabIndex={hasNext ? undefined : -1}
        >
          »
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
