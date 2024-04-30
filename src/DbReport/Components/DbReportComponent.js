import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import DbDataGridComponent from "./DbDataGridComponent";
import DbDynamicFormComponent from "./DbDynamicFormComponent";




const DbReportComponent  = forwardRef((props,ref) => {


    const {getDataService , callBackMap , downloadDataService, loaderComponent,isFormPresent, getFormDataService,observersMap , helpers , formContainerClass , formContainerStyle , gridContainerClass , gridContainerStyle , formBodyClassName, formBodyStyle , dataGridBodyClassName , dataGridBodyStyle , 
        gridHeader, 
        gridContainerClassName ,
    formHeader} = props;

    const [dataGrid, setDataGrid] = useState(undefined);
    const [dataSet,setDataSet] = useState([]);
    const [loading,setLoading] = useState(true);
    const [appliedMetaInfo , setAppliedMetaInfo] = useState({});
    const [formData,setFormData] = useState({});
    const [showForm , setShowForm] = useState(false);
    const gridRef = useRef(null);


    const showGrid = async (obj) => {
        setShowForm(false);
        setLoading(true);
        await getDataInfo(obj);
        setLoading(false);

    }

    useImperativeHandle(ref , () => {
        return {
            gridRef : gridRef,
            showGrid : showGrid
        } 
    },[])

    useEffect(() => {
        setLoading(true);
        if(isFormPresent) {
            getFormDataInfo();
        } else {
            getDataInfo({});
        }
    },[]);

    const getFormDataInfo = async () => {
        const {formResponse , status} = await getFormDataService();
        if(status === "SUCCESS") {
            setShowForm(true);
            setFormData(formResponse)
            formResponse.domElements.map(domInfo => {
                helpers.addForm(domInfo.element);
            })
        }

        setLoading(false);
    }


    const getDataInfo = async (obj) => {
        const response =await getDataService(obj);

        if(response && response.status === "SUCCESS") {
            setDataGrid({...response.dataGrid});
            setDataSet([...response.dataSet]);
        }
        setLoading(false);

    }

    const remoteDataFunction = async ({ startIndex, limit, sortColumns, filters }) => {
        const dataObject = {filters: filters ? JSON.stringify(filters) : null , limit , startIndex, sortColumns : sortColumns? JSON.stringify(sortColumns) : null};
        const response = await getDataService(dataObject)
        if(response && response.status === "SUCCESS") {
            setAppliedMetaInfo(dataObject);
            return { dataSet:response.dataSet, totalRowsCount: response.totalRecords, status: true } 
        } else {
            return {status: false};
        }

    }
   

    const remoteDownloadFunction = async ({downloadInfo}) => {
        const {fileBlob , fileName} = await downloadDataService({downloadInfo: JSON.stringify(downloadInfo) , ...appliedMetaInfo});
        if(fileBlob && fileName) {
            const fileURL = URL.createObjectURL(fileBlob);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href)
        }
        
        return {status : true}
    }

    const showFormFunction = () => {
        setShowForm(true);
        if(formData) {
            formData.domElements.map(domInfo => {
                helpers.addForm(domInfo.element);
            })
        } else {
            getFormDataInfo();
        }
    }

    const showGridFunction = () => {
        setShowForm(false);
    }


    return <div className={`${gridContainerClass ? `${gridContainerClass}` : `custom_gridContainer`} ${showForm ? 'custom_gridContainer_rotate':'custom_gridContainer_rotate_anticlock'} `} style= {gridContainerStyle ? gridContainerStyle :{}}>

        <div className={formContainerClass ? formContainerClass : "forms"} style= {formContainerStyle ? formContainerStyle : {}}>
            {<DbDynamicFormComponent
                observersMap={observersMap}
                helpers={helpers}
                isLoading = {loading}
                isFormOpened = {showForm}
                formBodyClassName= {formBodyClassName ?  formBodyClassName : "body-height"}
                formBodyStyle = {formBodyStyle ? formBodyStyle :{}}
                showForm = {showFormFunction}
                showGrid={showGridFunction}
                loaderComponent = {loaderComponent}
                formHeader= {formHeader}
            />}
        </div>
        <div className={gridContainerClass ? gridContainerClass : "datagrid"} style={gridContainerStyle ? gridContainerStyle : {}}>
            {<DbDataGridComponent
                ref= {gridRef}
                dataSet= {dataSet}
                dataGrid={dataGrid}
                callBackMap={callBackMap}
                remoteDataFunction={remoteDataFunction}
                remoteDownloadFunction={remoteDownloadFunction}
                isDataGridOpened= {!showForm}
                showGrid ={showGridFunction}
                dataGridBodyClassName = {dataGridBodyClassName ? dataGridBodyClassName : "body-height"} 
                dataGridBodyStyle = {dataGridBodyStyle ? dataGridBodyStyle : {}}
                isLoading= {loading}
                loaderComponent= {loaderComponent}
                gridHeader = {gridHeader}
                gridContainerClassName = {gridContainerClassName}
            />}
        </div>

    </div>
});


export default DbReportComponent;