import React from "react";
import Popover from 'react-bootstrap/Popover';



const PopoverComponent = (props) => {

    const {popoverHeader , popoverBody} = props;
    

    return <Popover ref= {props.innerRef} id="popover-basic" {...props} style={{ ...props.style,maxWidth: "unset" }}>
            {popoverHeader ? <Popover.Header>
                {popoverHeader}
            </Popover.Header> : null}
            <Popover.Body>
              {popoverBody}
            </Popover.Body>
        </Popover>

   
}

export default PopoverComponent;