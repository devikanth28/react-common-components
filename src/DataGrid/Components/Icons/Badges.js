import React from "react";
import Badge from 'react-bootstrap/Badge';
import { UncontrolledTooltip } from "reactstrap";




const Badges = (props) => {
    const {text ,bgType,tooltip ,bgText,className , id} = props;
    return <React.Fragment>
        <Badge pill bg={bgType} id={id} className={className} text = {bgText}>
            {text}
        </Badge>
        { tooltip && <UncontrolledTooltip placement="bottom" target={id}>
        {tooltip}
    </UncontrolledTooltip> }
    </React.Fragment>
}


export default Badges;