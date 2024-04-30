import React from "react";
import { InputGroup } from "react-bootstrap";
import InputWithOutFlotingPoint from "./InputWithoutFloating";

const CustomInputGroup = (props) => {
    return (
        <React.Fragment>
            <InputGroup className={props.className} size={props.size}>
                {props.elements.map((value) => {
                    return (
                        value === 'text' ? <InputGroupText message="testing" /> :
                            value === 'checkbox' ? <InputCheckbox label="testing" /> :
                                value === 'Radio' ? <InputRadio label="testing" /> :
                                    <InputWithOutFlotingPoint type="text" />
                    )
                })}

            </InputGroup>
        </React.Fragment>
    )
}

const InputGroupText = (props) => {
    return (
        <InputGroup.Text id="inputGroup-sizing-lg">{props.message}</InputGroup.Text>
    )
}

const InputCheckbox = (props) => {
    return (
        <InputGroup.Checkbox aria-label={props.label} />
    )
}

const InputRadio = (props) => {
    return (
        <InputGroup.Radio aria-label={props.label} />
    )
}



export default CustomInputGroup