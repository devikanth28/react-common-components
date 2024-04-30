import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Validate from "../../../../LocalityComponent/helpers/Validate";

const CustomSpinners = (props) => {
    const validate = Validate()

    // 1. Animation Property helps us to change the animation , currently we have border and grow
    // 2. variant and size property helps us to change the color of the spinner and the size 
    // 3. Spinner Text is used to Append the spinner with text which is of type String
    
    return (
        <React.Fragment>
            <div className={props.outerClassName}>
                <Spinner role="status" className={props.className} animation={props.animation} variant={props.variant} size={props.size}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            {validate.isNotEmpty(props.spinnerText) && <span class={props.innerClass ? props.innerClass : "ms-3"}>{props.spinnerText}</span>}
            </div>
        </React.Fragment>
    )
}
export default CustomSpinners