import React from "react";
import { Button } from "react-bootstrap";
import removeIcon from '../Images/remove-icon.svg';

const DeleteChip =({text,className,removeAction})=> {
    return (
        <React.Fragment>
            <Button variant="light" className={className} title={"Remove " + text} onClick={removeAction}>
                <span className="text-muted">{text}</span>
                <img src={removeIcon} alt={"Remove" + text} className={"ms-2 align-top"} />
            </Button>
        </React.Fragment>
    )

}

export default DeleteChip;