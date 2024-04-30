import React, { useEffect, useState } from "react";
import "./pagination.css";
import PropTypes from 'prop-types';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useDebounce } from "../hooks/useDebounce";
import { usePagination } from "./usePagination";


const Pagination = (props) => {

    const { currentPageNumber, totalRecords, recordsPerPage, limit, onChange } = props;
    const totalPages = Math.ceil(totalRecords / limit);
    const [pageNumber, setPageNumber] = useState(currentPageNumber);
    const [debounceValue] = useDebounce({ initialValue: pageNumber, waitTime: 500 });
    const [paginationRange,DOTS] = usePagination({
        totalCount: totalRecords,
        limit,
        currentPage: pageNumber,
    })

    useEffect(() => {
        if (pageNumber && pageNumber != currentPageNumber) {
            onChange(debounceValue, limit);
        }
    }, [debounceValue]);

    useEffect(() => {
        setPageNumber(currentPageNumber);
    },[currentPageNumber])



    const handleOnClick = (eachKey) => {
        const updatedTotalPages = Math.ceil(totalRecords / eachKey);
        onChange(currentPageNumber > updatedTotalPages ? updatedTotalPages : currentPageNumber, eachKey);
    }

    const handlePrevious = () => {
        if(pageNumber > 1) {
            setPageNumber(pageNumber-1);
        }
    }

    const handleNextSelection = () => {
        if(pageNumber < totalPages) {
            setPageNumber(pageNumber+1);
        }
    }

    const handleSelection = (selectedPageNumber) => {
        if(selectedPageNumber === DOTS) {
            return;
        }
        if(selectedPageNumber !== pageNumber) {
            setPageNumber(selectedPageNumber);
        }
    }


    return <React.Fragment>
        <div className="pagination-container dt-pagination">
            <ul className="dt-pagination-ul">
                <li className="dt-item">
                    <a href="javascript:void(0)" title="first" onClick= {() => setPageNumber(1)} className={`align-items-center btn btn-sm d-flex my-0  bd-links ${pageNumber === 1 ? 'disabled' : ''}`}>
                        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="first-page-icn-16" transform="translate(-101 -120)">
                                <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                                <g id="first-page-icn" transform="translate(102.751 121.5)">
                                    <path id="Path_50492" data-name="Path 50492" d="M7.056.5,1.388,6.177a.443.443,0,0,0,0,.646L7.056,12.5" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                                    <path id="Path_50493" data-name="Path 50493" d="M12.266.5,6.589,6.177a.462.462,0,0,0,0,.646L12.266,12.5" transform="translate(-0.401)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                                </g>
                            </g>
                        </svg>
                        <span>First</span>
                    </a>
                </li>
                <li className="dt-item">
                    <a href="javascript:void(0)" title="previous" onClick= {handlePrevious} className={`align-items-center btn btn-sm d-flex my-0  bd-links ${pageNumber === 1 ? "disabled" : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="chevi-left-icn-16" transform="translate(-135 -307)">
                                <rect id="bg" width="16" height="16" rx="3" transform="translate(135 307)" fill="none" />
                                <path id="chevi-left-icn" d="M9.665.5,3.988,6.177a.443.443,0,0,0,0,.646L9.665,12.5" transform="translate(136.243 308.5)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                            </g>
                        </svg>
                        <span class="ms-2">Previous</span>
                    </a>
                </li>
                {paginationRange.map(range => {
                    return  <li className="dt-item"><a href="javascript:void(0)" onClick= {()=>handleSelection(range)} title={range} className={`dt-link ${pageNumber === range ? 'active': ''}`}>{range}</a></li>

                })}
                <li className="dt-item">
                    <a href="javascript:void(0)" onClick={handleNextSelection} title="next" className={`align-items-center btn btn-sm d-flex my-0  bd-links ${pageNumber === totalPages ? "disabled" : ''}`}>
                        <span className="me-2">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="chevi-right-icn-16" transform="translate(-135 -307)">
                                <rect id="bg" width="16" height="16" rx="3" transform="translate(135 307)" fill="none" />
                                <path id="chevi-right-icn" d="M3.848.5,9.525,6.177a.443.443,0,0,1,0,.646L3.848,12.5" transform="translate(136.243 308.5)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                            </g>
                        </svg>
                    </a>
                </li>
                <li className="dt-item">
                    <a href="javascript:void(0)" title="last" onClick= {() => setPageNumber(totalPages)} className={`align-items-center btn btn-sm d-flex  my-0 bd-links ${pageNumber === totalPages ? "disabled" : ''}`}><span className="me-2">Last</span>
                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="last-page-icn-16" transform="translate(-101 -120)">
                                <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                                <g id="last-page-icn" transform="translate(104 122)">
                                    <path id="Path_50492" data-name="Path 50492" d="M1.248.5,6.916,6.177a.443.443,0,0,1,0,.646L1.248,12.5" transform="translate(3.561 -0.5)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                                    <path id="Path_50493" data-name="Path 50493" d="M6.457.5l5.677,5.677a.462.462,0,0,1,0,.646L6.457,12.5" transform="translate(-6.457 -0.5)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" />
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
            <p className="mb-0 small">Showing <strong className="px-1">{(currentPageNumber-1)*limit + 1}</strong> to <strong className="px-1">{Math.min(currentPageNumber*limit,totalRecords)}</strong> Of <strong className="px-1"> {totalRecords} </strong> Records </p> 
            { /* <span className="pagination-page-number">
                Page 
                <input value={pageNumber} onChange={onPageNumberChange} type="number" min="1" max={totalPages} />
            </span> */} 
            {recordsPerPage && recordsPerPage.length > 0 ? <span className="pagination-dropdown small">
                Records Per Page 
                <UncontrolledDropdown>
                    <DropdownToggle
                       className="ml-2 btn-sm"
                        caret color='light'>
                        {limit}
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            recordsPerPage.map((eachKey) => {
                                return <DropdownItem key={eachKey} onClick={() => {
                                    handleOnClick(eachKey);
                                }}>
                                    {eachKey}
                                </DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </span> : null}

        </div>

    </React.Fragment>
}

Pagination.propsType = {
    totalRecords: PropTypes.number.isRequired,
    currentPageNumber: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired

}

export default Pagination;