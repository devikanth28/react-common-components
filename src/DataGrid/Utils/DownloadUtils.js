
import { utils,writeFile } from "xlsx";
import { ColumnType } from "./Constants";
import { flattenColumnsList } from "./Helpers";



export const  exportToCsv = async (rows,columns,fileName) => {
    const flattenColumns = flattenColumnsList(columns);
    const columnsName = flattenColumns.map(column => column.downloadColumnName??column.columnName);
    const rowsData = getProcessRowData(rows,flattenColumns);
    const content = [[...columnsName], ...rowsData].map((cells) => cells.join(',')).join('\n');
    downloadFile(fileName.includes(".csv") ? fileName : fileName +".csv", new Blob([content], { type: 'text/csv;charset=utf-8;' }));
}

export const exportToXlsx = async (rows,columns,fileName) => {
    const flattenColumns = flattenColumnsList(columns);
    const columnsName = flattenColumns.map(column => column.downloadColumnName??column.columnName);
    const rowsData = getProcessRowData(rows,flattenColumns);
    const wb = utils.book_new();
    const ws = utils.aoa_to_sheet([[...columnsName], ...rowsData],{cellDates: true});
    utils.book_append_sheet(wb, ws, 'Sheet 1');
    writeFile(wb, (fileName.includes(".xlsx") || fileName.includes(".xls")) ? fileName : fileName+".xlsx");
}



const getProcessRowData = (rows,columns) => {
    return rows.map((eachRow) => {
        let updatedRows = [];
        columns.map(eachColumn => {
            if(eachColumn.columnType === ColumnType.date){
                let date = eachRow[eachColumn.rowDataKey];
                let formattedDate = date;
                try{
                    if(date) {
                        formattedDate = new Date(date);
                    }
                } catch(err) {
                    console.log("error in dateFormat : "+ err);
                }
                updatedRows.push(formattedDate);
            } else {
                updatedRows.push(eachRow[eachColumn.rowDataKey]);
            }
        });
        return updatedRows;
    });
}




const downloadFile = (fileName, data) => {
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    const url = URL.createObjectURL(data);
    downloadLink.href = url;
    downloadLink.click();
    URL.revokeObjectURL(url);
}

