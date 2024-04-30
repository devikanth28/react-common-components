import React from 'react';
import PropTypes from 'prop-types'; 
import FilterIconSvg from './FilterIconSvg';
import { UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, Label, Input  } from 'reactstrap';
import Validate from '../../../LocalityComponent/helpers/Validate';

const FilterDropDown = (props) => {
    const {itemsMap , onSelectionHandler, checkedKey, columnKey,tabIndex} = props;
    return <React.Fragment>
         <UncontrolledDropdown
            className="custom-dropdown" tabIndex={tabIndex}>
            <DropdownToggle
                caret color='' className='custom-filter form-input-height py-0 m-0'>
                <FilterIconSvg />
            </DropdownToggle>
            <DropdownMenu container="body" className={`grid-dropdownmenu ${Validate().isNotEmpty(props.dropDownMenuClass) ? props.dropDownMenuClass : ''}`}>
                {
                    Object.entries(itemsMap).map(([eachKey]) => {
                        return <DropdownItem key={eachKey} onClick={() => onSelectionHandler(eachKey)}>
                            <Label className="align-items-center  d-flex form-label" htmlFor={`${eachKey}_${columnKey}`}>
                                <Input type="radio" className="m-0" id={`${eachKey}_${columnKey}`} name={eachKey} onChange={(e) => { onSelectionHandler(e.target.value) }} defaultChecked={eachKey == checkedKey} value={eachKey} />{' '}
                                <p className="mb-0"> {itemsMap[eachKey]} </p>
                            </Label>
                        </DropdownItem>
                    })
                }
            </DropdownMenu>
        </UncontrolledDropdown>  
        
    </React.Fragment>
}
FilterDropDown.propsType= {
    itemsMap : PropTypes.object.isRequired,
    onSelectionHandler : PropTypes.func.isRequired,
    checkedKey : PropTypes.string.isRequired,
    columnKey : PropTypes.string.isRequired,
    tabIndex:PropTypes.number
}
export default FilterDropDown;