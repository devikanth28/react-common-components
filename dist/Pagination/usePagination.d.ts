export function usePagination({ totalCount, limit, currentPage, sibblingCount }: {
    totalCount: any;
    limit: any;
    currentPage: any;
    sibblingCount?: number;
}): (string | any[])[];
