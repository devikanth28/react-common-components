import React from "react";

const SelectEditor = (props) => {

    const { selectedValue, onValueChange, itemsMap , className} = props;

    const onChange = (e) => {
        onValueChange(e.target.value);
    }

    return <React.Fragment>
        <select
            autoFocus
            className={`editor-cell ${className ? className : ''}`}
            value={selectedValue}
            onChange={onChange}
        >
            {Object.keys(itemsMap).map(each => {
                return <option value={each}>{itemsMap[each]} </option>
            })}
        </select>

    </React.Fragment>

}


export default SelectEditor;