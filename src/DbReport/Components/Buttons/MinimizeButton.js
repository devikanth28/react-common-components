import React from "react";
import { Button } from "react-bootstrap";
import { UncontrolledTooltip } from "reactstrap";



const MinimizeButton = (props) => {

    const { handleOnClick, id, toolTip } = props;


    return <React.Fragment>
        <Button variant="link" id={id} className={`rounded-5 icon-hover`} onClick={(e) => handleOnClick(e)}>
            <svg id="notification-icn" xmlns="http://www.w3.org/2000/svg" width="16" height="15.956" viewBox="0 0 16 15.956">
                <circle id="Ellipse_1160" data-name="Ellipse 1160" cx="4" cy="4" r="4" transform="translate(4 4.001)" fill="#ebebeb" opacity="0" />
                <path id="noun-down-scale-3676807-404040" d="M48.682,57.011,44.722,61a1,1,0,0,1-.575.224A.82.82,0,0,1,43.572,61a.772.772,0,0,1,0-1.118l3.96-3.96-2.267.192a.8.8,0,0,1-.128-1.6l4.471-.415a.78.78,0,0,1,.862.862l-.415,4.471a.8.8,0,0,1-.8.734h-.064a.794.794,0,0,1-.734-.862Zm9.262-11.529-3.96,3.992.224-2.3a.8.8,0,0,0-1.6-.128L52.2,51.518a.794.794,0,0,0,.224.639.77.77,0,0,0,.575.224h.064l4.471-.415a.8.8,0,1,0-.128-1.6l-2.267.224,3.96-3.96a.772.772,0,0,0,0-1.118.841.841,0,0,0-1.15-.032Z" transform="translate(-43.333 -45.271)" fill="#3f3f3f" />
            </svg>
        </Button>
        <UncontrolledTooltip placement="bottom" target={id}>
            {toolTip}
        </UncontrolledTooltip>
    </React.Fragment>
}


export default MinimizeButton;