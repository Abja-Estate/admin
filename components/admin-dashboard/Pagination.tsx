import React from "react"
import ReactPaginate from "react-paginate"
import { ChevronLeftIconIcon, ChevronRightGreenIcon } from "../svgs"

const Pagination = ({
  handlePageClick,
  pageCount,
}: {
  handlePageClick: (e: { selected: number }) => void
  pageCount: number
}) => {
  return (
    <ReactPaginate
      className="flex text-xs items-center gap-2 npage w-full justify-center"
      breakLabel="..."
      nextLabel={
        <button className="hover:text-primary2 hover:bg-bg-primaryFade bg-white transition border-[#828282] text-[#828282]  rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center">
          Next
          <ChevronRightGreenIcon />
        </button>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      activeLinkClassName="bg-primaryFade text-primary2 active-pgn-btn"
      pageLinkClassName="hover:text-primary2 hover:bg-primaryFade w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center"
      previousLabel={
        <button className="hover:text-primary2 hover:bg-primaryFade border-[#828282] bg-white text-[#828282] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-2 items-center">
          <ChevronLeftIconIcon />
          Previous
        </button>
      }
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
