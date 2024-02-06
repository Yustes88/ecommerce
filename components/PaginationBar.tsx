'use client'
import Link from "next/link";

type PaginationBarProps = {
    currentPage: number;
    totalPages: number
}

function PaginationBar({currentPage, totalPages}: PaginationBarProps) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4), 10)
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9))
    const numberedPageItems:JSX.Element[] = []
    
    for(let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link href={`?page=${page}#products-list`} key={page}
            className={`join-item btn ${currentPage === page ? 'btn-active pointer-events-none' : ''}`}>
            {page}
            </Link>
        )
    }

    return(
        <>
        <div className="join hidden sm:block">
            {numberedPageItems}
        </div>
        <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={"?page=" + (currentPage - 1) + "#products-list"} className="join-item btn">
            «
          </Link>
        )}
        <button className="join-item btn pointer-events-none" onClick={(e) => {
          e.preventDefault()
        }}>
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link href={"?page=" + (currentPage + 1)+ "#products-list"} className="join-item btn">
            »
          </Link>
        )}
      </div>
        </>
    )
}

export default PaginationBar;
