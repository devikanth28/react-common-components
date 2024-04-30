import { useMemo } from "react";


export const usePagination = ({
    totalCount,
    limit,
    currentPage,
    sibblingCount = 1

}) => {
    const DOTS = "..."

    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
      };
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount/limit);
        const totalPageNumbers = sibblingCount + 5;
        if(totalPageNumbers >= totalPageCount) {
            return range(1,totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - sibblingCount, 1);
        const rightSiblingIndex = Math.min(
          currentPage + sibblingCount,
          totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount-2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * sibblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
          }

          if (shouldShowLeftDots && !shouldShowRightDots) {
      
            let rightItemCount = 3 + 2 * sibblingCount;
            let rightRange = range(
              totalPageCount - rightItemCount + 1,
              totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
          }
         
          if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
          }



    },[totalCount,limit,currentPage,sibblingCount])

    return [paginationRange,DOTS]
}