import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';



const CopyText = (props) => {

    const { row, column, onCopyClick, copiedText } = props

    return <React.Fragment>
        <span className="copy-icon  position-absolute" style={{ cursor: "pointer" }} onClick={() => onCopyClick(row[column.key])}>
            <span className={copiedText == row[column.key] ? "" : "d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="man1">
                    <g id="done-icn-16" transform="translate(-262 -283)">
                        <rect id="Rectangle_12488" data-name="Rectangle 12488" width="16" height="16" rx="3" transform="translate(262 283)" fill="none" />
                        <path id="np_check_5468232_000000" d="M21,15a6,6,0,1,0,6,6A6,6,0,0,0,21,15Zm2.588,4.952-3.323,3.323a.545.545,0,0,1-.177.118.535.535,0,0,1-.581-.118l-1.671-1.67a.536.536,0,0,1,.757-.757l1.292,1.292,2.945-2.945a.536.536,0,1,1,.758.757Z" transform="translate(249 270)" fill="#11b094" />
                    </g>
                </svg>
                <UncontrolledTooltip placement="bottom" target={"man1"}>
                    Copied
                </UncontrolledTooltip>
            </span>
            <span className={copiedText == row[column.key] ? "d-none" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="man">
                    <g id="text_copy_black_icon_16px" transform="translate(-180.258 -387.452)">
                        <rect id="Rectangle_3299" data-name="Rectangle 3299" width="16" height="16" rx="3" transform="translate(180.258 387.452)" fill="none" />
                        <path id="copy-icn" d="M9.275,4.214H5.03v-.6a1.107,1.107,0,0,1,1.1-1.1h5.657a1.107,1.107,0,0,1,1.1,1.1V9.271a1.107,1.107,0,0,1-1.1,1.1h-.6V6.128A1.919,1.919,0,0,0,9.275,4.214Zm-5.057,0h-.6A1.919,1.919,0,0,0,1.7,6.128v5.657A1.919,1.919,0,0,0,3.618,13.7H9.275a1.919,1.919,0,0,0,1.914-1.914v-.6h.6A1.919,1.919,0,0,0,13.7,9.271V3.614A1.919,1.919,0,0,0,11.789,1.7H6.132A1.919,1.919,0,0,0,4.217,3.614Zm-.6.812H9.275a1.107,1.107,0,0,1,1.1,1.1v5.657a1.107,1.107,0,0,1-1.1,1.1H3.618a1.107,1.107,0,0,1-1.1-1.1V6.128a1.107,1.107,0,0,1,1.1-1.1Z" transform="translate(180.555 387.752)" fill="#080808" />
                    </g>
                </svg>
                <UncontrolledTooltip placement="bottom" target={"man"}>
                    Click to Copy Text
                </UncontrolledTooltip>
            </span>
        </span>
    </React.Fragment>

}


export default CopyText