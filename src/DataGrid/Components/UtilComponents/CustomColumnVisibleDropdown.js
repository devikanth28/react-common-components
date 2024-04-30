import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';

const CustomColumnVisibleOptions = (props) => {

    const [optionsChecked, setOptionsChecked] = useState(0);

    const {columnOptionsMap , onColumnOptionsChange} = props;

    useEffect(() => {
        if(props.columnsList){
            setOptionsChecked(props.columnsList.filter((column) => column.isVisible).length);
        }
    }, [props.columnsList]);

    const onVisibleOptionChange = (rowDataKey, event) => {
        handleCustomColumnVisibleOptions(rowDataKey,event.target.checked)
    }

    const handleCustomColumnVisibleOptions = (rowDataKey,isChecked) => {
        const updatedColumnOptionsMap = {
            ...columnOptionsMap,
            [rowDataKey]: columnOptionsMap[rowDataKey] ? {
                ...columnOptionsMap[rowDataKey],
                isVisible: isChecked
            } : {
                isVisible : isChecked
            }
        }
        onColumnOptionsChange(rowDataKey, updatedColumnOptionsMap, true);
        
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-end my-2">
                <Dropdown>
                    <Dropdown.Toggle variant=" " id="dropdown-column-visibility" className="border-0 btn-sm link-dark dropdown-carret-margin">
                        View/Hide Columns 
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='columnsflag'>
                        <ul className='list-unstyled flex-shrink mb-0'>
                            {props.columnsList.map((column) => {
                                return (
                                    <li className="dropdown-item mb-0 form-group">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id={column.key}
                                                type="checkbox"
                                                checked={(column.isVisible)}
                                                onChange={(e) => onVisibleOptionChange(column.key, e)}
                                                disabled={(optionsChecked < 2 && column.isVisible) ? true : false} />
                                            <label className="form-check-label" for={column.key}>
                                                {column.name}
                                            </label>
                                        </div>
                                    </li>)
                            })}
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </React.Fragment>
    )
}

export default CustomColumnVisibleOptions;
