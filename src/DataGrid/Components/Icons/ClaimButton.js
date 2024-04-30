import React from 'react'
import { Button } from 'react-bootstrap';
import { ClaimConstants } from '../../Utils/Constants';

const ClaimButton = (props) => {

    const { selectedRecords, handleOnClick } = props;

    return <div className="h-100 py-1 me-3" onClick={() => { handleOnClick(ClaimConstants.CLAIM) }}>
        <Button variant="link" size="sm" className="h-100 text-success">
            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="claim-icn-24" transform="translate(-367 -484)">
                    <g id="claim-icn-32" transform="translate(370 488)">
                        <g id="Group_34320" data-name="Group 34320" transform="translate(0)">
                            <path id="Subtraction_118" data-name="Subtraction 118" d="M8.664,10.58H1.247A1.207,1.207,0,0,1,0,9.389v-8.2A1.207,1.207,0,0,1,1.247,0H13.431a1.207,1.207,0,0,1,1.247,1.191V3.935a4.975,4.975,0,0,0-.831-.164V1.192a.4.4,0,0,0-.416-.361H1.247a.4.4,0,0,0-.416.361v8.2a.366.366,0,0,0,.416.36H8.413a4.956,4.956,0,0,0,.251.829Z" transform="translate(0 2.076)" fill="#080808"></path><path id="Path_51583" data-name="Path 51583" d="M46.073,27.51H41.2V25.294c0-.387.387-.692.941-.692h2.991c.526,0,.941.305.941.692Zm-4.044-.831h3.213V25.433H42.031Z" transform="translate(-36.298 -24.602)" fill="#080808"></path><path id="Path_51584" data-name="Path 51584" d="M34.867,69.516a.982.982,0,0,1-.969-.969V67.3h1.967v1.246A.97.97,0,0,1,34.867,69.516Zm-.138-1.385v.415a.131.131,0,0,0,.138.138.155.155,0,0,0,.167-.138v-.415Z" transform="translate(-31.018 -55.477)" fill="#080808"></path></g><g id="Group_34319" data-name="Group 34319" transform="translate(9.139 6.646)"><path id="Path_51586" data-name="Path 51586" d="M41.379,41.394l-1.7,1.7c-.021.021-.021.041-.041.062a.021.021,0,0,1-.021.021.063.063,0,0,1-.021.041v.269a.063.063,0,0,0,.021.041.021.021,0,0,0,.021.021c0,.021.021.041.041.062l1.678,1.678a.388.388,0,0,0,.539,0,.329.329,0,0,0,.1-.248.382.382,0,0,0-.1-.248l-1.057-1.078h2.714a.373.373,0,0,0,0-.746H40.841L41.9,41.911a.329.329,0,0,0,.1-.248.382.382,0,0,0-.1-.248A.348.348,0,0,0,41.379,41.394Z" transform="translate(-37.286 -38.72)" fill="#080808"></path><path id="Ellipse_1237" data-name="Ellipse 1237" d="M3.181-1.25A4.427,4.427,0,0,1,7.611,3.181,4.427,4.427,0,0,1,3.181,7.611,4.427,4.427,0,0,1-1.25,3.181,4.427,4.427,0,0,1,3.181-1.25Zm0,8.219A3.789,3.789,0,0,0,6.969,3.181,3.789,3.789,0,0,0,3.181-.608,3.789,3.789,0,0,0-.608,3.181,3.789,3.789,0,0,0,3.181,6.969Z" transform="translate(1.25 1.25)" fill="#080808">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
            Claim ({selectedRecords})</Button>
    </div>
}

export default ClaimButton;