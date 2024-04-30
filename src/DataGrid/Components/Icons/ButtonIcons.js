import React from "react";


export const ViewIconButton = (props) => {
    return <React.Fragment>
        <button type="button"  disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" version="1.1" viewBox="0 0 1200 1200">
                <path d="m1156.9 591.21c-59.977-225.66-336.39-377.24-556.93-377.24-221.69 0-509.84 154.92-568.93 377.24l-2.3281 8.7852 2.3281 8.7852c59.09 222.32 347.25 377.24 568.93 377.24 220.55 0 496.96-151.59 556.93-377.24l2.3281-8.7852zm-556.93 326.35c-193.77 0-443.87-129.96-500.28-317.57 56.414-187.61 306.52-317.57 500.28-317.57 188.18 0 432.06 129.96 488.28 317.57-56.223 187.61-300.1 317.57-488.28 317.57zm3-520.94c-115.64 0-209.38 93.742-209.38 209.38s93.742 209.38 209.38 209.38 209.38-93.73 209.38-209.38-93.73-209.38-209.38-209.38z" fill="#1c3ffd" />
            </svg>
            {props.displayText ? props.displayText : 'View' }
        </button>       
    </React.Fragment>
}

export const EditIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="edit-icn-16" transform="translate(-180.258 0)">
                    <rect id="Rectangle_3295" data-name="Rectangle 3295" width="16" height="16" rx="3" transform="translate(180.258 0)" fill="none" />
                    <g id="Group_14565" data-name="Group 14565" transform="translate(181.258 1)">
                        <path id="Union_136" data-name="Union 136" d="M2.151,14.155A2.154,2.154,0,0,1,0,12V3.532A2.154,2.154,0,0,1,2.151,1.38H4.88a.47.47,0,0,1,0,.94H2.149A1.219,1.219,0,0,0,.939,3.535V12A1.221,1.221,0,0,0,2.147,13.22h8.468A1.219,1.219,0,0,0,11.831,12V9.274a.469.469,0,1,1,.939,0V12a2.154,2.154,0,0,1-2.152,2.152Zm2.437-2.916a.828.828,0,0,1-.49-.43,1,1,0,0,1-.076-.692l.542-2.161A.548.548,0,0,1,4.68,7.72L11.026.569a1.625,1.625,0,0,1,2.469,0,2.165,2.165,0,0,1,0,2.781L7.167,10.5a.468.468,0,0,1-.216.134l-1.9.6-.243.037A.738.738,0,0,1,4.588,11.239ZM5.444,8.35l-.467,1.788,1.572-.481.018-.006,5.367-6.067.05-.056L10.845,2.246Zm6.287-7.071-.209.212L12.65,2.765l.167-.152.007-.007a1.006,1.006,0,0,0-.005-1.282.767.767,0,0,0-.566-.259A.759.759,0,0,0,11.731,1.279Z" transform="translate(0 0)" fill="#1c3ffd" />
                    </g>
                </g>
            </svg>            
            {props.displayText ? props.displayText : 'Edit' } 
        </button>
    </React.Fragment>
}

export const DeleteIconButton = (props) => {
    return <React.Fragment>
        <button type="button"  disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="delete-icn-16" transform="translate(-180.258 -281.937)">
                    <rect id="Rectangle_3296" data-name="Rectangle 3296" width="16" height="16" rx="3" transform="translate(180.258 281.937)" fill="none" />
                    <g id="Group_14567" data-name="Group 14567" transform="translate(182.258 283.437)">
                        <path id="Union_135" data-name="Union 135" d="M3.333,13a1.846,1.846,0,0,1-1.81-1.871V2.6H.435a.446.446,0,0,1,0-.891H3.592V1.585A1.584,1.584,0,0,1,4.038.467,1.513,1.513,0,0,1,5.126,0H7.057A1.563,1.563,0,0,1,8.592,1.585V1.71h2.88a.446.446,0,0,1,0,.891h-.811v8.528A1.846,1.846,0,0,1,8.852,13Zm-.95-1.871a.966.966,0,0,0,.949.979H8.852a.967.967,0,0,0,.949-.978V2.6H2.383ZM4.456,1.585v.124H7.73V1.585A.685.685,0,0,0,7.057.891H5.125A.687.687,0,0,0,4.456,1.585ZM8,11.085a.463.463,0,0,1-.437-.488V5.3A.461.461,0,0,1,8,4.855h.016a.46.46,0,0,1,.455.444v5.339a.462.462,0,0,1-.456.448Zm-1.924,0a.464.464,0,0,1-.437-.488V5.3a.454.454,0,1,1,.908,0v5.339a.461.461,0,0,1-.455.448Zm-1.923,0a.464.464,0,0,1-.438-.488V5.3a.454.454,0,1,1,.909,0v5.339a.461.461,0,0,1-.456.448Z" transform="translate(0 0)" fill="#e71c37" />
                    </g>
                </g>
            </svg>
            {props.displayText ? props.displayText : 'Delete' } 
        </button>        
    </React.Fragment>
}
export const CloneIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="copy-clone-icn-16" transform="translate(-77 -84)">
                    <rect id="Rectangle_10429" data-name="Rectangle 10429" width="16" height="16" rx="3" transform="translate(77 84)" fill="none" />
                    <g id="copy-clone-icn-16-2" data-name="copy-clone-icn-16" transform="translate(-1557 -13750)">
                        <path id="Path_47178" data-name="Path 47178" d="M74.058,422.22H68.614a1.947,1.947,0,0,0-1.945,1.944v5.444a1.947,1.947,0,0,0,1.945,1.945h5.444A1.947,1.947,0,0,0,76,429.609v-5.444a1.947,1.947,0,0,0-1.945-1.944Zm1.167,7.389h0a1.168,1.168,0,0,1-1.167,1.167H68.614a1.168,1.168,0,0,1-1.167-1.167v-5.444A1.168,1.168,0,0,1,68.614,423h5.444a1.168,1.168,0,0,1,1.167,1.167Z" transform="translate(1568.331 13417.446)" fill="#1c3ffd" />
                        <path id="Path_47179" data-name="Path 47179" d="M429.608,66.664h-5.444a1.947,1.947,0,0,0-1.944,1.945v1.556a.389.389,0,1,0,.778,0V68.609a1.168,1.168,0,0,1,1.167-1.167h5.444a1.168,1.168,0,0,1,1.167,1.167v5.444a1.168,1.168,0,0,1-1.167,1.167h-1.556a.389.389,0,1,0,0,.778h1.556a1.947,1.947,0,0,0,1.945-1.945V68.609a1.947,1.947,0,0,0-1.945-1.945Z" transform="translate(1217.448 13768.336)" fill="#1c3ffd" />
                    </g>
                </g>
            </svg>            
            {props.displayText ? props.displayText : 'Clone' } 
        </button>
       
    </React.Fragment>
}
export const AddIconButton = React.forwardRef((props,ref) => {
    return <React.Fragment>
        <button ref={ref} tabIndex={props.tabIndex ? props.tabIndex : 0 } type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn text-dark IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="add-icn-16" transform="translate(-170 -84)">
                    <rect id="Rectangle_10432" data-name="Rectangle 10432" width="16" height="16" rx="3" transform="translate(170 84)" fill="none" />
                    <g id="add-icn-16-2" data-name="add-icn-16" transform="translate(171 85)">
                        <path id="Path_47170" data-name="Path 47170" d="M7,0a7,7,0,1,0,7,7A7.006,7.006,0,0,0,7,0ZM7,13.042A6.042,6.042,0,1,1,13.042,7,6.05,6.05,0,0,1,7,13.042Z" fill="#080808" />
                        <path id="Path_47171" data-name="Path 47171" d="M5.228.144a.472.472,0,0,0-.678,0L2.693,2,.822.144a.472.472,0,0,0-.678,0,.472.472,0,0,0,0,.678L2.015,2.678.158,4.55a.472.472,0,0,0,0,.678A.492.492,0,0,0,.5,5.361a.492.492,0,0,0,.339-.133L2.693,3.356,4.565,5.228a.5.5,0,0,0,.678,0,.472.472,0,0,0,0-.678L3.371,2.678,5.243.807A.467.467,0,0,0,5.228.144Z" transform="translate(6.991 3.202) rotate(45)" fill="#080808" />
                    </g>
                </g>
            </svg>
            {props.displayText ? props.displayText : 'Add' } 
        </button>       
    </React.Fragment>
})


export const ApproveIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="approve-icn-16" transform="translate(-3120)">
                    <rect id="Rectangle_5706" data-name="Rectangle 5706" width="16" height="16" rx="3" transform="translate(3120)" fill="none" />
                    <path id="Icon_feather-check" data-name="Icon feather-check" d="M18,9,9.75,17.4,6,13.582" transform="translate(3116.333 -5.333)" fill="none" stroke="#11b094" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </g>
            </svg>
            
            {props.displayText ? props.displayText : 'Approve' } 
        </button>
    </React.Fragment>
}

export const RemoveIconButton = (props) => {
    return <React.Fragment>
        <button type="button"  disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="remove-pill-icn-16" transform="translate(-194 -84)">
                    <rect id="Rectangle_10433" data-name="Rectangle 10433" width="16" height="16" rx="3" transform="translate(194 84)" fill="#fff" />
                    <g id="remove-pill-icn-16-2" data-name="remove-pill-icn-16" transform="translate(119 -497)">
                        <circle id="Ellipse_170" data-name="Ellipse 170" cx="7" cy="7" r="7" transform="translate(76 582)" fill="#fff" />
                        <path id="Icon_material-remove-circle" data-name="Icon material-remove-circle" d="M9,3a6,6,0,1,0,6,6A6,6,0,0,0,9,3Zm3,6.6H6V8.4h6Z" transform="translate(74 580)" fill="#ff1744" />
                    </g>
                </g>
            </svg>
            {props.displayText ? props.displayText : 'Remove' }
        </button>

    </React.Fragment>
}

export const SaveIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="save-icn-16" transform="translate(-102 -85)">
                    <rect id="Rectangle_10428" data-name="Rectangle 10428" width="16" height="16" rx="3" transform="translate(102 85)" fill="#fff" />
                    <path id="save-icn-16-2" data-name="save-icn-16" d="M348.669,348h10.724a.667.667,0,0,1,.471.2l1.943,1.943a.666.666,0,0,1,.2.471v10.724a.667.667,0,0,1-.667.667H348.669a.667.667,0,0,1-.667-.667V348.667a.667.667,0,0,1,.667-.667Zm2.5.667h-2.333a.167.167,0,0,0-.167.167v12.333a.167.167,0,0,0,.167.167h12.333a.167.167,0,0,0,.167-.167V350.679a.167.167,0,0,0-.049-.118l-1.845-1.845a.167.167,0,0,0-.118-.049h-.488a.167.167,0,0,0-.167.167V352a.667.667,0,0,1-.667.667h-6a.667.667,0,0,1-.667-.667v-3.167a.167.167,0,0,0-.167-.167ZM355,354a2.667,2.667,0,1,1-2.667,2.667A2.667,2.667,0,0,1,355,354Zm0,.667a2,2,0,1,0,2,2A2,2,0,0,0,355,354.667ZM352.169,352h5.667a.167.167,0,0,0,.167-.167v-3a.167.167,0,0,0-.167-.167h-5.667a.167.167,0,0,0-.167.167v3A.167.167,0,0,0,352.169,352Z" transform="translate(-245.002 -262)" fill="#1c3ffd" stroke="#1c3ffd" stroke-width="0.1" />
                </g>
            </svg>
            {props.displayText ? props.displayText : 'Save' }
        </button>
    </React.Fragment>
}


export const CancelIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>            
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="cancel-remove-icn-16" transform="translate(-125 -84)">
        <rect id="Rectangle_10430" data-name="Rectangle 10430" width="16" height="16" rx="3" transform="translate(125 84)" fill="none"/>
        <g id="cancel-remove-icn-16-2" data-name="cancel-remove-icn-16" transform="translate(126 85)">
            <path id="Path_47170" data-name="Path 47170" d="M37,30a7,7,0,1,0,7,7A7.006,7.006,0,0,0,37,30Zm0,13.042A6.042,6.042,0,1,1,43.042,37,6.05,6.05,0,0,1,37,43.042Z" transform="translate(-30 -30)" fill="#e71c37"/>
            <path id="Path_47171" data-name="Path 47171" d="M385.929,382.042a.472.472,0,0,0-.678,0l-1.857,1.857-1.872-1.857a.479.479,0,0,0-.678.678l1.872,1.857-1.857,1.872a.472.472,0,0,0,0,.678.5.5,0,0,0,.678,0l1.857-1.872,1.872,1.872a.5.5,0,0,0,.678,0,.472.472,0,0,0,0-.678l-1.872-1.872,1.872-1.872a.467.467,0,0,0-.015-.663Z" transform="translate(-376.394 -377.577)" fill="#e71c37"/>
        </g>
        </g>
        </svg>        
        {props.displayText ? props.displayText : 'Cancel' }
        </button>
        
    </React.Fragment>
}

export const RecallIconButton = (props) => {
    return <React.Fragment>
        <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn IconButton ${props.className ?  props.className  : ''}`}>            
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="reversal-icn-16" transform="translate(-146 -84)">
        <rect id="Rectangle_10431" data-name="Rectangle 10431" width="16" height="16" rx="3" transform="translate(146 84)" fill="none"/>
        <g id="reversal-icn-16-2" data-name="reversal-icn-16" transform="translate(-133.248 -121.459)">
            <path id="Path_47180" data-name="Path 47180" d="M585.87,281.248h-4.285a.334.334,0,0,0,0,.667h4.285a.718.718,0,0,1,.718.718v8.57a.718.718,0,0,1-.718.718h-1.617a.333.333,0,0,0-.236.57l1.334,1.334a.334.334,0,0,0,.472-.472l-.764-.765h.812a1.387,1.387,0,0,0,1.385-1.385v-8.57a1.387,1.387,0,0,0-1.385-1.385Z" transform="translate(-294.667 -73.459)" fill="#f88441"/>
            <path id="Path_47181" data-name="Path 47181" d="M286.918,218.462h-4.285a.718.718,0,0,1-.718-.718v-8.57a.718.718,0,0,1,.718-.718h1.617a.333.333,0,0,0,.236-.57l-1.334-1.334a.333.333,0,0,0-.472.472l.764.765h-.812a1.387,1.387,0,0,0-1.385,1.385v8.57a1.387,1.387,0,0,0,1.385,1.385h4.285a.334.334,0,1,0,0-.667Z" transform="translate(0 0)" fill="#f88441"/>
            <path id="Path_47182" data-name="Path 47182" d="M434.255,431.25a3,3,0,1,0,2.122.879A3,3,0,0,0,434.255,431.25Zm0,5.336a2.335,2.335,0,1,1,1.651-.684A2.335,2.335,0,0,1,434.255,436.586Z" transform="translate(-147.338 -220.792)" fill="#f88441"/>
        </g>
        </g>
        </svg>        
        {props.displayText ? props.displayText : 'Recall' }
        </button>       
    </React.Fragment>
}

export const TextButton = (props) => {
    return <React.Fragment>       
         <button type="button" disabled={props.disabled ? props.disabled : false } onClick={props.handleOnClick} className={`btn-sm btn  ${props.className ?  props.className  : ''}`}>            
            {props.displayText ? props.displayText : 'Clear' }
         </button>
    </React.Fragment>
}




