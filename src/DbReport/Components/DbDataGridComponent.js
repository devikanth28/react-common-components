import React, { forwardRef, useEffect, useRef, useState } from "react";
import CommonDataGrid from "../../DataGrid";
import GridButton from "./Buttons/GridButton";
import NoDataFound from "./NoDataFound";

const DbDataGridComponent = forwardRef((props , ref) => {

    const {showGrid , dataGridBodyClassName , dataGridBodyStyle , isDataGridOpened , dataGrid , dataSet , callBackMap,remoteDataFunction , remoteDownloadFunction , isLoading , loaderComponent , gridHeader, gridContainerClassName} = props;

    const [calculateGridHeight, setCalulateGridHeight] = useState(0);
    const gridHeaderRef = useRef(null);


    useEffect(() => {
            if(isDataGridOpened && gridHeaderRef && gridHeaderRef.current) {
                setCalulateGridHeight(gridHeaderRef.current.offsetHeight);
            }
        
    }, [isDataGridOpened])
 
   const handleOnClickButton = (e) => {
        showGrid();
   }

    return <React.Fragment>
        {!isDataGridOpened || gridHeader ? <header ref = {gridHeaderRef} className={isDataGridOpened ? "custom-tabs-forms px-3 py-2" : "custom-tabs-forms py-1 d-flex justify-content-center border-0"}>
             {!isDataGridOpened ? <GridButton handleOnClick = {handleOnClickButton} id= {"dataGrid_button"} toolTip = "Show Grid" /> : null }
             {isDataGridOpened && gridHeader ? gridHeader : null}
        </header> : null}
        <div className={dataGridBodyClassName} style={dataGridBodyStyle ? {...dataGridBodyStyle,
        "height": `calc(100% - ${calculateGridHeight + 'px'})`
        } : {
            "height": `calc(100% - ${calculateGridHeight + 'px'})`
        }}>
        {isDataGridOpened ?<div className={`card h-100 overflow-auto ${gridContainerClassName ? gridContainerClassName: ''}`}>
            {dataGrid && !isLoading ? <CommonDataGrid {...dataGrid}
                            ref={ref}
                            dataSet={dataSet}
                            callBackMap={callBackMap}
                            remoteDataFunction={remoteDataFunction}
                            remoteDownloadFunction={remoteDownloadFunction}
                /> : null }
                {!isLoading && !dataGrid ? <NoDataFound text= "Unable to fetch data"/> : null }
                {isLoading ? loaderComponent : null}
            </div> : null}
        </div>


    </React.Fragment>


});

export default DbDataGridComponent;