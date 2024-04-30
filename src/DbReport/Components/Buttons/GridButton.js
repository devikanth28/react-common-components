import React from "react";
import { Button } from "react-bootstrap";
import { UncontrolledTooltip } from "reactstrap";



const GridButton = (props) => {

    const {handleOnClick , id , toolTip} = props;


    return <React.Fragment>
            <Button variant="link" id={id} className={`rounded-5 icon-hover`} onClick={(e) => handleOnClick(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.001" viewBox="0 0 18 18.001">
                    <g id="leftchevron_black_icon_18px" transform="translate(-868.477 780) rotate(-90)">
                        <rect id="Rectangle_4722" data-name="Rectangle 4722" width="18" height="18" transform="translate(762 868.477)" fill="none" />
                        <path id="noun-grid-118161-404040" d="M279.3,278.82a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm6.352,0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm6.353,0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm-12.176,1.059h3.176v3.176H279.83Zm6.353,0h3.176v3.176h-3.176Zm6.352,0h3.176v3.176h-3.176ZM279.3,285.173h0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529V285.7a.529.529,0,0,0-.529-.529H279.3Zm6.352,0h0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529V285.7a.529.529,0,0,0-.529-.529h-4.235Zm6.353,0h0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529V285.7a.53.53,0,0,0-.529-.529H292Zm-12.176,1.059h3.176v3.176h-3.176Zm6.353,0h3.176v3.176h-3.176Zm6.352,0h3.176v3.176h-3.176ZM279.3,291.525a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm6.352,0a.529.529,0,0,0-.529.529v4.235a.529.529,0,0,0,.529.529h4.235a.529.529,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm6.352,0a.529.529,0,0,0-.529.529v4.235a.53.53,0,0,0,.529.529h4.235a.53.53,0,0,0,.529-.529v-4.235a.529.529,0,0,0-.529-.529Zm-12.176,1.059H283v3.176h-3.176Zm6.353,0h3.176v3.176h-3.176Zm6.352,0h3.176v3.176h-3.176Z" transform="translate(1058.82 589.708) rotate(90)" fill="#3f3f3f" fill-rule="evenodd" />
                    </g>
                </svg>
            </Button>
            <UncontrolledTooltip placement="bottom" target={id}>
                {toolTip}
            </UncontrolledTooltip>
    </React.Fragment>
}


export default GridButton;