import React from "react";
import { UncontrolledTooltip } from "reactstrap";
export const ViewIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="ViewIcon" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 1200 1200">
                <path d="m1156.9 591.21c-59.977-225.66-336.39-377.24-556.93-377.24-221.69 0-509.84 154.92-568.93 377.24l-2.3281 8.7852 2.3281 8.7852c59.09 222.32 347.25 377.24 568.93 377.24 220.55 0 496.96-151.59 556.93-377.24l2.3281-8.7852zm-556.93 326.35c-193.77 0-443.87-129.96-500.28-317.57 56.414-187.61 306.52-317.57 500.28-317.57 188.18 0 432.06 129.96 488.28 317.57-56.223 187.61-300.1 317.57-488.28 317.57zm3-520.94c-115.64 0-209.38 93.742-209.38 209.38s93.742 209.38 209.38 209.38 209.38-93.73 209.38-209.38-93.73-209.38-209.38-209.38z" fill="#495057" />
            </svg>
        </a>
        {' '}
        <UncontrolledTooltip placement="bottom" target="ViewIcon">
            {props.tooltip ? props.tooltip : 'view'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const OpenIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id={props.id ? props.id : "Open"} className="btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="link_open_black_icon_16px" transform="translate(-180.258 -387.452)">
                    <rect id="Rectangle_3299" data-name="Rectangle 3299" width="16" height="16" rx="3" transform="translate(180.258 387.452)" fill="none" />
                    <path id="Subtraction_86" data-name="Subtraction 86" d="M1427.6-7871h-4.565v-.946h4.565a1.457,1.457,0,0,0,1.027-.425,1.462,1.462,0,0,0,.427-1.027v-7.705a1.465,1.465,0,0,0-.427-1.029,1.464,1.464,0,0,0-1.027-.425h-7.7a1.455,1.455,0,0,0-1.452,1.454v7.3a.49.49,0,0,0,.3.477.5.5,0,0,0,.186.035.5.5,0,0,0,.366-.164l5.233-5.247h-3.184v-.944h4.323a.472.472,0,0,1,.473.471v4.325h-.944v-3.187l-5.243,5.269a1.443,1.443,0,0,1-1.025.432,1.423,1.423,0,0,1-.552-.111,1.43,1.43,0,0,1-.885-1.35v-7.3a2.4,2.4,0,0,1,2.4-2.4h7.7a2.4,2.4,0,0,1,2.4,2.4v7.705A2.4,2.4,0,0,1,1427.6-7871Z" transform="translate(-1235.241 8272.951)" />
                </g>
            </svg>
        </a>
        {' '}
        <UncontrolledTooltip placement="bottom" target={props.id ? props.id : "Open"}>
            {props.tooltip ? props.tooltip : 'Open'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const EditIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={`Edit${props.id ? '_' + props.id : ''}`} className={`icon-hover btn-sm btn ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="edit-icn-16" transform="translate(-180.258 0)">
                    <rect id="Rectangle_3295" data-name="Rectangle 3295" width="16" height="16" rx="3" transform="translate(180.258 0)" fill="none" />
                    <g id="Group_14565" data-name="Group 14565" transform="translate(182.007 1.699)">
                        <path id="Union_136" data-name="Union 136" d="M1.921,12.638A1.923,1.923,0,0,1,0,10.717V3.154A1.923,1.923,0,0,1,1.921,1.232H4.357a.419.419,0,0,1,0,.839H1.919A1.089,1.089,0,0,0,.838,3.156v7.561A1.09,1.09,0,0,0,1.916,11.8H9.477a1.088,1.088,0,0,0,1.086-1.086V8.281a.419.419,0,0,1,.839,0v2.436a1.924,1.924,0,0,1-1.922,1.921Zm2.176-2.6a.732.732,0,0,1-.437-.383.9.9,0,0,1-.068-.618L4.074,7.1a.5.5,0,0,1,.1-.211L9.844.508a1.451,1.451,0,0,1,2.2,0,1.933,1.933,0,0,1,0,2.483L6.4,9.373a.417.417,0,0,1-.194.12l-1.7.538-.218.032A.639.639,0,0,1,4.1,10.034Zm.764-2.579-.418,1.6,1.4-.429.016-.005L10.655,3.2l.044-.049L9.683,2.005Zm5.612-6.314-.186.189L11.3,2.469l.149-.136.006-.006a.9.9,0,0,0-.005-1.145A.686.686,0,0,0,10.939.95.676.676,0,0,0,10.473,1.141Z" transform="translate(0 0)" fill="#1c3ffd" />
                    </g>
                </g>
            </svg>
        </a>{' '}
        <UncontrolledTooltip placement="bottom" target={`Edit${props.id ? '_' + props.id : ''}`}>
            {props.tooltip ? props.tooltip : 'Edit'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const DeleteIcon = React.forwardRef((props, ref) => {
    return <React.Fragment>
        <a    href="javascript:void(0)" ref={ref} tabIndex={props.tabIndex ? props.tabIndex : 0} onClick={props.handleOnClick} id={`Delete${props.id ? '_' + props.id : ''}`} class={`text-danger btn-sm btn icon-hover ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="delete-icn-16" transform="translate(-180.258 -281.937)">
                    <rect id="Rectangle_3296" data-name="Rectangle 3296" width="16" height="16" rx="3" transform="translate(180.258 281.937)" fill="none" />
                    <g id="Group_14567" data-name="Group 14567" transform="translate(182.258 283.437)">
                        <path id="Union_135" data-name="Union 135" d="M3.333,13a1.846,1.846,0,0,1-1.81-1.871V2.6H.435a.446.446,0,0,1,0-.891H3.592V1.585A1.584,1.584,0,0,1,4.038.467,1.513,1.513,0,0,1,5.126,0H7.057A1.563,1.563,0,0,1,8.592,1.585V1.71h2.88a.446.446,0,0,1,0,.891h-.811v8.528A1.846,1.846,0,0,1,8.852,13Zm-.95-1.871a.966.966,0,0,0,.949.979H8.852a.967.967,0,0,0,.949-.978V2.6H2.383ZM4.456,1.585v.124H7.73V1.585A.685.685,0,0,0,7.057.891H5.125A.687.687,0,0,0,4.456,1.585ZM8,11.085a.463.463,0,0,1-.437-.488V5.3A.461.461,0,0,1,8,4.855h.016a.46.46,0,0,1,.455.444v5.339a.462.462,0,0,1-.456.448Zm-1.924,0a.464.464,0,0,1-.437-.488V5.3a.454.454,0,1,1,.908,0v5.339a.461.461,0,0,1-.455.448Zm-1.923,0a.464.464,0,0,1-.438-.488V5.3a.454.454,0,1,1,.909,0v5.339a.461.461,0,0,1-.456.448Z" transform="translate(0 0)" fill="#e71c37" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`Delete${props.id ? '_' + props.id : ''}`}>
            {props.tooltip ? props.tooltip : 'Delete'}
        </UncontrolledTooltip>
    </React.Fragment>
})

export const SearchIcon = React.forwardRef((props, ref) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" ref={ref} tabIndex={props.tabIndex ? props.tabIndex : 0} onClick={props.handleOnClick} id="SearchIcon" class="text-danger btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g id="Group_7273" data-name="Group 7273" opacity="0.8">
          <g id="Group_4125" data-name="Group 4125">
            <rect id="Rectangle_2798" data-name="Rectangle 2798" width="20" height="20" fill="none"/>
          </g>
          <path id="Path_1941" data-name="Path 1941" d="M15.879,15.222,11.7,11.061a5.528,5.528,0,1,0-.645.645l4.183,4.162a.457.457,0,0,0,.645,0A.461.461,0,0,0,15.879,15.222ZM2.911,7.523A4.582,4.582,0,1,1,7.493,12.1,4.588,4.588,0,0,1,2.911,7.523Z" transform="translate(1 0.97)" fill="#6c757d" stroke="#6c757d" stroke-width="0.3"/>
        </g>
      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="SearchIcon">
            {props.tooltip ? props.tooltip : 'Search'}
        </UncontrolledTooltip>
    </React.Fragment>
})




export const CloneIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id="Clone" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="copy-clone-icn-16" transform="translate(-77 -84)">
                    <rect id="Rectangle_10429" data-name="Rectangle 10429" width="20" height="20" rx="3" transform="translate(77 84)" fill="none" />
                    <g id="copy-clone-icn-16-2" data-name="copy-clone-icn-16" transform="translate(-1557 -13750)">
                        <path id="Path_47178" data-name="Path 47178" d="M74.058,422.22H68.614a1.947,1.947,0,0,0-1.945,1.944v5.444a1.947,1.947,0,0,0,1.945,1.945h5.444A1.947,1.947,0,0,0,76,429.609v-5.444a1.947,1.947,0,0,0-1.945-1.944Zm1.167,7.389h0a1.168,1.168,0,0,1-1.167,1.167H68.614a1.168,1.168,0,0,1-1.167-1.167v-5.444A1.168,1.168,0,0,1,68.614,423h5.444a1.168,1.168,0,0,1,1.167,1.167Z" transform="translate(1568.331 13417.446)" fill="#1c3ffd" />
                        <path id="Path_47179" data-name="Path 47179" d="M429.608,66.664h-5.444a1.947,1.947,0,0,0-1.944,1.945v1.556a.389.389,0,1,0,.778,0V68.609a1.168,1.168,0,0,1,1.167-1.167h5.444a1.168,1.168,0,0,1,1.167,1.167v5.444a1.168,1.168,0,0,1-1.167,1.167h-1.556a.389.389,0,1,0,0,.778h1.556a1.947,1.947,0,0,0,1.945-1.945V68.609a1.947,1.947,0,0,0-1.945-1.945Z" transform="translate(1217.448 13768.336)" fill="#1c3ffd" />
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="Clone">
            {props.tooltip ? props.tooltip : 'Clone'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const AddIcon = React.forwardRef((props,ref) => {
    return <React.Fragment>
        <a ref={ref} tabIndex={props.tabIndex ? props.tabIndex : 0} href="javascript:void(0)" onClick={props.handleOnClick} id="Add" className={`icon-hover btn-sm btn ${props.className ?  props.className  : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="add-icn-16" transform="translate(-170 -84)">
                    <rect id="Rectangle_10432" data-name="Rectangle 10432" width="20" height="20" rx="3" transform="translate(170 84)" fill="none" />
                    <g id="add-icn-16-2" data-name="add-icn-16" transform="translate(171 85)">
                        <path id="Path_47170" data-name="Path 47170" d="M7,0a7,7,0,1,0,7,7A7.006,7.006,0,0,0,7,0ZM7,13.042A6.042,6.042,0,1,1,13.042,7,6.05,6.05,0,0,1,7,13.042Z" fill="#080808" />
                        <path id="Path_47171" data-name="Path 47171" d="M5.228.144a.472.472,0,0,0-.678,0L2.693,2,.822.144a.472.472,0,0,0-.678,0,.472.472,0,0,0,0,.678L2.015,2.678.158,4.55a.472.472,0,0,0,0,.678A.492.492,0,0,0,.5,5.361a.492.492,0,0,0,.339-.133L2.693,3.356,4.565,5.228a.5.5,0,0,0,.678,0,.472.472,0,0,0,0-.678L3.371,2.678,5.243.807A.467.467,0,0,0,5.228.144Z" transform="translate(6.991 3.202) rotate(45)" fill="#080808" />
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="Add">
            {props.tooltip ? props.tooltip : 'Add'}
        </UncontrolledTooltip>
    </React.Fragment>
})
export const ApproveIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)"  onClick={props.handleOnClick} id={`Approve${props.id ? '_' + props.id : ''}`} className={`icon-hover btn-sm btn ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="approve-icn-16" transform="translate(-3120)">
                    <rect id="Rectangle_5706" data-name="Rectangle 5706" width="20" height="20" rx="3" transform="translate(3120)" fill="none" />
                    <path id="Icon_feather-check" data-name="Icon feather-check" d="M18,9,9.75,17.4,6,13.582" transform="translate(3116.333 -5.333)" fill="none" stroke="#11b094" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`Approve${props.id ? '_' + props.id : ''}`}>
            {props.tooltip ? props.tooltip : 'Approve'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const RemoveIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={`Remove${props.id ? '_' + props.id : ''}`} className={`icon-hover btn-sm btn ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="remove-pill-icn-16" transform="translate(-194 -84)">
                    <rect id="Rectangle_10433" data-name="Rectangle 10433" width="20" height="20" rx="3" transform="translate(194 84)" fill="none" />
                    <g id="remove-pill-icn-16-2" data-name="remove-pill-icn-16" transform="translate(119 -497)">
                        <circle id="Ellipse_170" data-name="Ellipse 170" cx="7" cy="7" r="7" transform="translate(76 582)" fill="none" />
                        <path id="Icon_material-remove-circle" data-name="Icon material-remove-circle" d="M9,3a6,6,0,1,0,6,6A6,6,0,0,0,9,3Zm3,6.6H6V8.4h6Z" transform="translate(74 580)" fill="#ff1744" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`Remove${props.id ? '_' + props.id : ''}`}>
            {props.tooltip ? props.tooltip : 'Remove'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const SaveIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id="Save" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="save-icn-16" transform="translate(-102 -85)">
                    <rect id="Rectangle_10428" data-name="Rectangle 10428" width="20" height="20" rx="3" transform="translate(102 85)" fill="none" />
                    <path id="save-icn-16-2" data-name="save-icn-16" d="M348.669,348h10.724a.667.667,0,0,1,.471.2l1.943,1.943a.666.666,0,0,1,.2.471v10.724a.667.667,0,0,1-.667.667H348.669a.667.667,0,0,1-.667-.667V348.667a.667.667,0,0,1,.667-.667Zm2.5.667h-2.333a.167.167,0,0,0-.167.167v12.333a.167.167,0,0,0,.167.167h12.333a.167.167,0,0,0,.167-.167V350.679a.167.167,0,0,0-.049-.118l-1.845-1.845a.167.167,0,0,0-.118-.049h-.488a.167.167,0,0,0-.167.167V352a.667.667,0,0,1-.667.667h-6a.667.667,0,0,1-.667-.667v-3.167a.167.167,0,0,0-.167-.167ZM355,354a2.667,2.667,0,1,1-2.667,2.667A2.667,2.667,0,0,1,355,354Zm0,.667a2,2,0,1,0,2,2A2,2,0,0,0,355,354.667ZM352.169,352h5.667a.167.167,0,0,0,.167-.167v-3a.167.167,0,0,0-.167-.167h-5.667a.167.167,0,0,0-.167.167v3A.167.167,0,0,0,352.169,352Z" transform="translate(-245.002 -262)" fill="#1c3ffd" stroke="#1c3ffd" stroke-width="0.1" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Save">
            {props.tooltip ? props.tooltip : 'Save'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const CancelIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={`Cancel${props.id ? '_' + props.id : '' }`} className={`icon-hover btn-sm btn ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="cancel-remove-icn-16" transform="translate(-125 -84)">
                    <rect id="Rectangle_10430" data-name="Rectangle 10430" width="20" height="20" rx="3" transform="translate(125 84)" fill="none" />
                    <g id="cancel-remove-icn-16-2" data-name="cancel-remove-icn-16" transform="translate(126 85)">
                        <path id="Path_47170" data-name="Path 47170" d="M37,30a7,7,0,1,0,7,7A7.006,7.006,0,0,0,37,30Zm0,13.042A6.042,6.042,0,1,1,43.042,37,6.05,6.05,0,0,1,37,43.042Z" transform="translate(-30 -30)" fill="#e71c37" />
                        <path id="Path_47171" data-name="Path 47171" d="M385.929,382.042a.472.472,0,0,0-.678,0l-1.857,1.857-1.872-1.857a.479.479,0,0,0-.678.678l1.872,1.857-1.857,1.872a.472.472,0,0,0,0,.678.5.5,0,0,0,.678,0l1.857-1.872,1.872,1.872a.5.5,0,0,0,.678,0,.472.472,0,0,0,0-.678l-1.872-1.872,1.872-1.872a.467.467,0,0,0-.015-.663Z" transform="translate(-376.394 -377.577)" fill="#e71c37" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`Cancel${props.id ? '_' + props.id : '' }`}>
            {props.tooltip ? props.tooltip : 'Cancel'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const RecallIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={`Recall${props.id ? '_' + props.id : '' }`} className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="reversal-icn-16" transform="translate(-146 -84)">
                    <rect id="Rectangle_10431" data-name="Rectangle 10431" width="16" height="16" rx="3" transform="translate(146 84)" fill="none" />
                    <g id="reversal-icn-16-2" data-name="reversal-icn-16" transform="translate(-133.248 -121.459)">
                        <path id="Union_209" data-name="Union 209" d="M18423.76-4631.206l-1.336-1.336a.569.569,0,0,1-.176-.412.576.576,0,0,1,.176-.412.563.563,0,0,1,.412-.171h1.613a.47.47,0,0,0,.332-.139.461.461,0,0,0,.139-.328v-8.569a.465.465,0,0,0-.139-.333.47.47,0,0,0-.332-.139h-4.281a.583.583,0,0,1-.506-.292.576.576,0,0,1,0-.583.582.582,0,0,1,.506-.292h4.281a1.612,1.612,0,0,1,1.156.481,1.605,1.605,0,0,1,.48,1.151V-4634a1.623,1.623,0,0,1-.48,1.156,1.624,1.624,0,0,1-1.156.477h-.209l.344.337a.6.6,0,0,1,.143.564.575.575,0,0,1-.406.407.576.576,0,0,1-.158.023A.578.578,0,0,1,18423.76-4631.206Zm-1.262-1.748a.326.326,0,0,0,.1.236l1.336,1.336a.328.328,0,0,0,.314.079.343.343,0,0,0,.236-.231.333.333,0,0,0,.012-.087.333.333,0,0,1-.012.087.343.343,0,0,1-.236.231.328.328,0,0,1-.314-.079l-1.336-1.336a.326.326,0,0,1-.1-.236Zm1.951.333a1.39,1.39,0,0,0,.98-.407,1.379,1.379,0,0,0,.406-.976v0a1.379,1.379,0,0,1-.406.976,1.39,1.39,0,0,1-.98.407h0Zm-4.568-10.84a.325.325,0,0,0,.287.167h4.281a.714.714,0,0,1,.508.213.715.715,0,0,1,.213.509.715.715,0,0,0-.213-.509.714.714,0,0,0-.508-.213h-4.281a.325.325,0,0,1-.287-.167.315.315,0,0,1-.045-.167A.315.315,0,0,0,18419.881-4643.461Zm-4,11.089a1.624,1.624,0,0,1-1.156-.477,1.631,1.631,0,0,1-.48-1.156v-8.574a1.613,1.613,0,0,1,.48-1.151,1.612,1.612,0,0,1,1.156-.481h.209l-.338-.337a.584.584,0,0,1-.148-.564.582.582,0,0,1,.406-.407.576.576,0,0,1,.158-.023.57.57,0,0,1,.4.166l1.336,1.337a.575.575,0,0,1,.176.411.569.569,0,0,1-.176.412.563.563,0,0,1-.412.171h-1.613a.47.47,0,0,0-.332.139.461.461,0,0,0-.135.333V-4634a.458.458,0,0,0,.135.328.47.47,0,0,0,.332.139h4.283a.591.591,0,0,1,.508.292.6.6,0,0,1,0,.583.59.59,0,0,1-.508.292ZM18414.5-4634a1.387,1.387,0,0,0,.406.976,1.39,1.39,0,0,0,.98.407h4.283a.342.342,0,0,0,.291-.167.354.354,0,0,0,.041-.167.354.354,0,0,1-.041.167.342.342,0,0,1-.291.167h-4.283a1.39,1.39,0,0,1-.98-.407A1.387,1.387,0,0,1,18414.5-4634Zm.879-9.078a.709.709,0,0,0-.209.5v0a.709.709,0,0,1,.209-.5.721.721,0,0,1,.508-.213h1.613a.322.322,0,0,0,.236-.1.323.323,0,0,0,.1-.236.323.323,0,0,1-.1.236.322.322,0,0,1-.236.1h-1.613A.721.721,0,0,0,18415.377-4643.082Zm1.316-.878-.762-.768a.317.317,0,0,1-.1-.232.317.317,0,0,0,.1.232Zm1.176,7.967a3.223,3.223,0,0,1-.953-2.3,3.224,3.224,0,0,1,.953-2.3,3.223,3.223,0,0,1,2.3-.953,3.211,3.211,0,0,1,2.3.953,3.224,3.224,0,0,1,.953,2.3,3.223,3.223,0,0,1-.953,2.3,3.211,3.211,0,0,1-2.3.953A3.223,3.223,0,0,1,18417.869-4635.993Zm-.7-2.3a3,3,0,0,0,.879,2.123,3,3,0,0,0,2.123.878,3,3,0,0,0,2.121-.878,3,3,0,0,0,.879-2.123,3,3,0,0,1-.879,2.123,3,3,0,0,1-2.121.878,3,3,0,0,1-2.123-.878,3,3,0,0,1-.879-2.123Zm1.525-1.476a2.076,2.076,0,0,0-.605,1.476,2.068,2.068,0,0,0,.605,1.475,2.088,2.088,0,0,0,1.477.61,2.07,2.07,0,0,0,1.475-.61,2.072,2.072,0,0,0,.609-1.475,2.08,2.08,0,0,0-.609-1.476,2.07,2.07,0,0,0-1.475-.61A2.088,2.088,0,0,0,18418.691-4639.766Zm3.127-.175a2.328,2.328,0,0,1,.684,1.651,2.328,2.328,0,0,0-.684-1.651,2.33,2.33,0,0,0-1.65-.685,2.332,2.332,0,0,0-1.652.685,2.328,2.328,0,0,0-.684,1.651,2.328,2.328,0,0,1,.684-1.651,2.332,2.332,0,0,1,1.652-.685A2.33,2.33,0,0,1,18421.818-4639.941Z" transform="translate(-18133.25 4851.75)" fill="#f88441" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`Recall${props.id ? '_' + props.id : '' }`}>
            {props.tooltip ? props.tooltip : 'Recall'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const ResetIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)"  onClick={props.handleOnClick} id="Reset" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="reset_black_icon_16px" transform="translate(-180.258 -387.452)">
                    <rect id="Rectangle_3299" data-name="Rectangle 3299" width="20" height="20" rx="3" transform="translate(180.258 387.452)" fill="none" />
                    <path id="reset-icn" d="M171.462,156.8a7.092,7.092,0,0,1-3.978,1.917,7.2,7.2,0,0,1-4.37-.785,6.863,6.863,0,0,1-3-3.171,6.571,6.571,0,0,1-.424-4.28,6.744,6.744,0,0,1,2.324-3.665,7.137,7.137,0,0,1,4.136-1.574.457.457,0,0,1,.34.1.423.423,0,0,1,.035.629.454.454,0,0,1-.327.134,6.22,6.22,0,0,0-3.772,1.507,5.859,5.859,0,0,0-1.951,3.467,5.749,5.749,0,0,0,.74,3.882,6.059,6.059,0,0,0,3.1,2.566,6.3,6.3,0,0,0,4.079.105,6.09,6.09,0,0,0,3.238-2.4,5.761,5.761,0,0,0,.954-3.838,5.835,5.835,0,0,0-1.756-3.563l-.3-.285-1.04,1.006a.452.452,0,0,1-.316.127.493.493,0,0,1-.143-.023.448.448,0,0,1-.2-.134.425.425,0,0,1-.1-.217l-.42-3.03a.42.42,0,0,1,.126-.364.452.452,0,0,1,.377-.12l3.129.406a.455.455,0,0,1,.225.1.432.432,0,0,1,.139.2.411.411,0,0,1,.013.237.421.421,0,0,1-.12.207l-1.037,1,.295.285a6.63,6.63,0,0,1,0,9.582Z" transform="translate(21.75 243.671)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Reset">
            {props.tooltip ? props.tooltip : 'Reset'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const RecordIcon = (props) => {
    return <React.Fragment>
        <a    href="javascript:void(0)" onClick={props.handleOnClick} id="Record" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="record-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="record-icn" transform="translate(-83.5 83.5)">
                        <path id="Path_50456" data-name="Path 50456" d="M340.767,47.767a3.247,3.247,0,0,0,3.267-3.267V40.767a3.267,3.267,0,1,0-6.533,0V44.5A3.247,3.247,0,0,0,340.767,47.767Zm-2.333-7a2.333,2.333,0,1,1,4.667,0V44.5a2.333,2.333,0,1,1-4.667,0Z" transform="translate(-148.133)" fill="#ff1644" />
                        <path id="Path_50457" data-name="Path 50457" d="M197.767,562.967a.467.467,0,1,0-.933,0,4.2,4.2,0,1,1-8.4,0,.467.467,0,1,0-.933,0,5.123,5.123,0,0,0,4.667,5.087V569.5a.467.467,0,1,0,.933,0v-1.447A5.123,5.123,0,0,0,197.767,562.967Z" transform="translate(0 -518.467)" fill="#ff1644" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Record">
            {props.tooltip ? props.tooltip : 'Record Call'}
        </UncontrolledTooltip>

    </React.Fragment>
}
export const CallIcon = (props) => {
    return <React.Fragment>
        <a    href="javascript:void(0)" onClick={props.handleOnClick} id="Call" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="call-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="call-icn" transform="translate(103 120.753)">
                        <path id="Union_137" data-name="Union 137" d="M2.1,0a1.327,1.327,0,0,0-.46.081,2.52,2.52,0,0,0-.474.235L.921.485A1.809,1.809,0,0,0,.75.639,2.481,2.481,0,0,0,.111,1.774C-.391,3.656.84,6.49,3.174,8.824,5.13,10.78,7.488,12,9.326,12a3.474,3.474,0,0,0,.9-.111,2.482,2.482,0,0,0,1.133-.635,1.813,1.813,0,0,0,.172-.2l.171-.244a2.529,2.529,0,0,0,.217-.449,1.411,1.411,0,0,0-.535-1.64L9.671,7.526a1.473,1.473,0,0,0-2,.355l-.331.477L7.261,8.3A15.17,15.17,0,0,1,5.338,6.658,15.2,15.2,0,0,1,3.7,4.736l-.058-.082.477-.333a1.434,1.434,0,0,0,.355-2L3.277.616A1.454,1.454,0,0,0,2.1,0Zm7.23,11.241c-1.644,0-3.8-1.132-5.618-2.952C1.592,6.173.413,3.574.841,1.97a1.743,1.743,0,0,1,.442-.8c.033-.034.069-.066.088-.082L1.578.945A1.7,1.7,0,0,1,1.9.789a.672.672,0,0,1,.757.26L3.851,2.757a.678.678,0,0,1-.167.944l-.778.543a.375.375,0,0,0-.1.51,14.7,14.7,0,0,0,2,2.438,14.708,14.708,0,0,0,2.437,2,.381.381,0,0,0,.511-.1L8.3,8.313a.7.7,0,0,1,.943-.167L10.948,9.34a.656.656,0,0,1,.26.758l0,.011a1.648,1.648,0,0,1-.134.283l-.145.209a1.091,1.091,0,0,1-.1.113,1.742,1.742,0,0,1-.795.441A2.717,2.717,0,0,1,9.326,11.241Z" transform="translate(0 1.247)" fill="#11b094" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Call">
            {props.tooltip ? props.tooltip : 'Call'}
        </UncontrolledTooltip>

    </React.Fragment>
}
export const ShopIcon = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id="Shop" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="shop-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <path id="shop-icn" d="M124.438,209.576a.244.244,0,1,0,0-.488h-1.455l-.993-.9a.242.242,0,0,0-.163-.063h-1.552a.244.244,0,1,0,0,.488h1.46l.93.84,1.257,5.394-.734,1.221a.243.243,0,0,0,.208.368h8.92a.244.244,0,1,0,0-.488h-8.49l.5-.832,7.649-.74a.243.243,0,0,0,.217-.2l.836-4.8a.243.243,0,0,0-.2-.281l-.041,0H130.9a.244.244,0,1,0,0,.488h1.6l-.754,4.337-7.374.714-1.177-5.051h1.245Zm3.476-.44a.244.244,0,1,0-.488,0v1.232H126.2a.244.244,0,1,0,0,.488h1.232v1.232a.244.244,0,1,0,.488,0v-1.232h1.232a.244.244,0,1,0,0-.488h-1.232Zm-.244-1.233a2.709,2.709,0,1,0,1.916.793l-.014-.013a2.7,2.7,0,0,0-1.9-.78ZM126.1,209.04a2.223,2.223,0,0,1,3.131-.012l.011.012a2.222,2.222,0,1,1-3.142,0Zm4.459,7.573a.954.954,0,1,0,.674.279l-.015-.014a.951.951,0,0,0-.659-.265Zm-.33.624a.467.467,0,0,1,.649-.011l.01.011a.466.466,0,1,1-.659,0Zm-5.086-.624a.954.954,0,1,0,.674.279l-.015-.014a.951.951,0,0,0-.659-.265Zm-.33.624a.467.467,0,0,1,.649-.011l.01.011a.466.466,0,0,1,0,.66.461.461,0,0,1-.33.137.466.466,0,0,1-.33-.8Z" transform="translate(-17.532 -85.402)" fill="#1c3ffd" stroke="#1c3ffd" stroke-width="0.25" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Shop">
            {props.tooltip ? props.tooltip : 'Shop'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const SmsIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Sms" className="btn-sm btn icon-hover">
            <svg id="sms_black_icon_18px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <rect id="Rectangle_3652" data-name="Rectangle 3652" width="20" height="20" fill="none" />
                <g id="sms-icn" transform="translate(1.778 1.777)">
                    <path id="Path_50458" data-name="Path 50458" d="M302.587,314a.14.14,0,0,0,.115-.038.287.287,0,0,0,.191-.267v-2.481h2.4a1.531,1.531,0,0,0,1.527-1.527v-6.3a1.531,1.531,0,0,0-1.527-1.527h-9.391a1.531,1.531,0,0,0-1.527,1.527v6.26a1.531,1.531,0,0,0,1.527,1.527h3.474l3.016,2.71a.21.21,0,0,0,.191.115Zm2.71-11.528a.929.929,0,0,1,.916.916v6.26a.929.929,0,0,1-.916.916h-2.71a.328.328,0,0,0-.305.305v2.1l-2.6-2.329a.292.292,0,0,0-.191-.076h-3.588a.929.929,0,0,1-.916-.916v-6.26a.929.929,0,0,1,.916-.916Z" transform="translate(-294.38 -301.86)" fill="#080808" />
                    <path id="Path_50459" data-name="Path 50459" d="M442.767,413.111h5.879a.305.305,0,0,0,0-.611h-5.841a.328.328,0,0,0-.305.305.3.3,0,0,0,.267.305Z" transform="translate(-439.522 -410.247)" fill="#080808" />
                    <path id="Path_50460" data-name="Path 50460" d="M442.767,516.231h5.879a.305.305,0,0,0,0-.611h-5.841a.328.328,0,0,0-.305.305.3.3,0,0,0,.267.305Z" transform="translate(-439.522 -511.268)" fill="#080808" />
                    <path id="Path_50461" data-name="Path 50461" d="M442.805,621.231h4.046a.305.305,0,0,0,0-.611h-4.046a.305.305,0,1,0,0,.611Z" transform="translate(-437.728 -614.13)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Sms">
            {props.tooltip ? props.tooltip : 'sms'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const FilterIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Filter" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="filter-icn-16" transform="translate(-170 -84)">
                    <rect id="Rectangle_10432" data-name="Rectangle 10432" width="20" height="20" rx="3" transform="translate(170 84)" fill="none" />
                    <g id="filter-icn" transform="translate(171 86)">
                        <path id="Path_478" data-name="Path 478" d="M2035.146,190.553a.532.532,0,0,1-.553.529h-8.566a1.653,1.653,0,0,1-1.566,1.059,1.671,1.671,0,0,1-1.565-1.059h-1.2a.53.53,0,1,1,0-1.058h1.2a1.652,1.652,0,0,1,1.565-1.059,1.671,1.671,0,0,1,1.566,1.059h8.566A.532.532,0,0,1,2035.146,190.553Zm-.553,3.882h-4.882a1.653,1.653,0,0,0-1.565-1.058,1.671,1.671,0,0,0-1.566,1.058H2021.7a.53.53,0,1,0,0,1.059h4.882a1.654,1.654,0,0,0,1.566,1.059,1.672,1.672,0,0,0,1.565-1.059h4.882a.53.53,0,1,0,0-1.059Zm-12.895-7.764h8.566a1.654,1.654,0,0,0,1.566,1.058,1.672,1.672,0,0,0,1.566-1.058h1.2a.53.53,0,1,0,0-1.059h-1.2a1.655,1.655,0,0,0-1.566-1.059,1.673,1.673,0,0,0-1.566,1.059H2021.7a.53.53,0,1,0,0,1.059Z" transform="translate(-2021.146 -184.553)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Filter">
            {props.tooltip ? props.tooltip : 'Filter'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const ScheduleIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Schedule" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="schedule-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="schedule-icn" transform="translate(102 120.999)">
                        <path id="Path_50494" data-name="Path 50494" d="M11.5,14.892A3.391,3.391,0,1,0,14.891,11.5,3.391,3.391,0,0,0,11.5,14.892Z" transform="translate(-4.783 -4.783)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50495" data-name="Path 50495" d="M18.63,16.2H17.5V14.5" transform="translate(-7.391 -6.087)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50496" data-name="Path 50496" d="M5.587,11.543H1.065A.565.565,0,0,1,.5,10.978V3.065A.565.565,0,0,1,1.065,2.5H11.239a.565.565,0,0,1,.565.565V6.739" transform="translate(0 -0.869)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50497" data-name="Path 50497" d="M5.5.5V3.327" transform="translate(-2.174)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50498" data-name="Path 50498" d="M15.5.5V3.327" transform="translate(-6.522)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50499" data-name="Path 50499" d="M.5,7.5H11.8" transform="translate(0 -3.043)" fill="none" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Schedule">
            {props.tooltip ? props.tooltip : 'Schedule'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const ReScheduleIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Reschedule" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="reschedule-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="reschedule-icn" transform="translate(102 120.999)">
                        <path id="Path_50500" data-name="Path 50500" d="M13.478,18.5H11.5v1.978" transform="translate(-4.783 -7.826)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50501" data-name="Path 50501" d="M18.214,19.2a3.149,3.149,0,0,1-6.114-.7" transform="translate(-5.043 -7.826)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50502" data-name="Path 50502" d="M20,14.979h1.978V13" transform="translate(-8.478 -5.435)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50503" data-name="Path 50503" d="M12.083,13.627a3.149,3.149,0,0,1,6.114.7" transform="translate(-5.036 -4.78)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50504" data-name="Path 50504" d="M5.587,11.543H1.065A.565.565,0,0,1,.5,10.978V3.065A.565.565,0,0,1,1.065,2.5H11.239a.565.565,0,0,1,.565.565V6.739" transform="translate(0 -0.869)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50505" data-name="Path 50505" d="M5.5.5V3.327" transform="translate(-2.174 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50506" data-name="Path 50506" d="M15.5.5V3.327" transform="translate(-6.522 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                        <path id="Path_50507" data-name="Path 50507" d="M.5,7.5H11.8" transform="translate(0 -3.043)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.65" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Reschedule">
            {props.tooltip ? props.tooltip : 'Reschedule'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const SampleCollectedIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="SampleCollected" className="btn-sm btn icon-hover">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="sample-collected-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="sample-collected-icn" transform="translate(-177.954 -130)">
                        <g id="np_blood-sample_3241671_080808" transform="translate(252.137 247.375)">
                            <path id="Path_50518" data-name="Path 50518" d="M41.853,53.5a1.789,1.789,0,0,1-1.791,1.8,1.82,1.82,0,0,1-1.8-1.818l0-.7h1.2a1.18,1.18,0,0,0,1.188-1.173V48.77h1.2Z" transform="translate(-7.164 -38.33)" fill="#080808" />
                            <path id="Path_50519" data-name="Path 50519" d="M35.909,5.65,35.9,4.244a.607.607,0,0,0-.6-.606l-4.879-.013h0a.606.606,0,0,0-.425.175.6.6,0,0,0-.175.429l.007,1.406a.609.609,0,0,0,.591.606l0,1.38h.328l0-1.378L35,6.255l.021,8.91A2.118,2.118,0,0,1,32.9,17.3h0a2.149,2.149,0,0,1-2.133-2.146l0-.7h-.328l0,.7a2.477,2.477,0,0,0,2.459,2.472H32.9a2.446,2.446,0,0,0,2.443-2.461l-.022-8.91a.6.6,0,0,0,.587-.6ZM31,5.471h0a.164.164,0,0,1-.164-.163l-.006-.745a.164.164,0,0,1,.163-.165h0a.164.164,0,0,1,.164.163l.006.745A.164.164,0,0,1,31,5.471Zm.933,0h0a.164.164,0,0,1-.164-.163l-.006-.745a.164.164,0,0,1,.163-.165h0a.164.164,0,0,1,.164.163l.006.745A.164.164,0,0,1,31.933,5.474Zm.933,0h0a.164.164,0,0,1-.164-.163L32.7,4.569a.164.164,0,0,1,.163-.165h0a.164.164,0,0,1,.164.163l.006.745A.164.164,0,0,1,32.867,5.476Zm.933,0h0a.164.164,0,0,1-.164-.163l-.006-.745a.164.164,0,0,1,.163-.165h0a.164.164,0,0,1,.164.163l.006.745A.164.164,0,0,1,33.8,5.479Zm.933,0h0a.164.164,0,0,1-.164-.163l-.006-.745a.164.164,0,0,1,.163-.165.158.158,0,0,1,.165.163l.006.745a.164.164,0,0,1-.163.165Z" fill="#080808" />
                            <path id="Path_50520" data-name="Path 50520" d="M36.511,33.119V37.6a.855.855,0,0,1-.86.846H33.778V32.274h1.873a.855.855,0,0,1,.86.846Z" transform="translate(-3.363 -24.324)" fill="#080808" />
                        </g>
                        <g id="Group_33275" data-name="Group 33275" transform="translate(-0.5 -3)">
                            <circle id="Ellipse_1195" data-name="Ellipse 1195" cx="3" cy="3" r="3" transform="translate(286 259)" fill="#fff" />
                            <g id="np_check_5542984_080808" transform="translate(283.5 256.5)">
                                <path id="Path_50521" data-name="Path 50521" d="M25.573,30.621a.232.232,0,0,1-.163-.067l-.923-.923a.231.231,0,0,1,.326-.326l.76.76,1.913-1.913a.231.231,0,0,1,.326.326l-2.077,2.077a.23.23,0,0,1-.163.067Z" transform="translate(-20.534 -23.967)" fill="#080808" />
                                <path id="Path_50522" data-name="Path 50522" d="M5.5,8.5a3,3,0,1,1,3-3A3,3,0,0,1,5.5,8.5Zm0-5.538A2.538,2.538,0,1,0,8.038,5.5,2.541,2.541,0,0,0,5.5,2.962Z" fill="#080808" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="SampleCollected">
            {props.tooltip ? props.tooltip : 'Sample Collected'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const ShowPaymentIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="ShowPaymentIcon" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="show-payment-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="20" height="20" rx="3" transform="translate(101 120)" fill="none" />
                    <path id="show-payment-icn" d="M8.56,16.372c-.031,0-.047.016-.078.016a.3.3,0,0,1-.295-.233A6.724,6.724,0,0,1,8,14.586a.311.311,0,0,1,.621,0A6.147,6.147,0,0,0,8.793,16a.311.311,0,0,1-.233.372ZM8.42,13.39c.031,0,.047.016.078.016a.3.3,0,0,0,.295-.233,6.037,6.037,0,0,1,.5-1.336.309.309,0,0,0-.544-.295,6.272,6.272,0,0,0-.559,1.475.3.3,0,0,0,.234.372Zm1.444-2.624a.279.279,0,0,0,.233-.109,5.721,5.721,0,0,1,1.071-.948.312.312,0,1,0-.357-.513,6.82,6.82,0,0,0-1.181,1.04.3.3,0,0,0,.031.435.247.247,0,0,0,.2.093Zm5.358-2.05a6.206,6.206,0,0,1,1.382.342.26.26,0,0,0,.109.016.317.317,0,0,0,.295-.2.311.311,0,0,0-.186-.4A6.6,6.6,0,0,0,15.3,8.095a.312.312,0,0,0-.342.264.309.309,0,0,0,.264.357Zm-2.9.372a.26.26,0,0,0,.109-.016,5.976,5.976,0,0,1,1.382-.342.313.313,0,0,0-.078-.621,6.237,6.237,0,0,0-1.522.372.312.312,0,0,0,.109.606Zm7.936,4.069a.3.3,0,0,0,.295.233.138.138,0,0,0,.078-.016A.324.324,0,0,0,20.859,13a6.271,6.271,0,0,0-.559-1.475.294.294,0,0,0-.419-.124.3.3,0,0,0-.124.419,5.715,5.715,0,0,1,.5,1.336ZM17.862,9.725a6.142,6.142,0,0,1,1.071.948.3.3,0,0,0,.435.031.315.315,0,0,0,.031-.435,6.284,6.284,0,0,0-1.181-1.04.319.319,0,0,0-.435.078.305.305,0,0,0,.078.419ZM12.427,20.1a5.438,5.438,0,0,1-1.258-.668.312.312,0,0,0-.357.513,6.659,6.659,0,0,0,1.4.73.26.26,0,0,0,.109.016.3.3,0,0,0,.109-.59Zm8.309-5.839a.311.311,0,0,0-.311.311v.016A6.147,6.147,0,0,1,20.254,16a.3.3,0,0,0,.233.372c.031,0,.047.016.078.016a.3.3,0,0,0,.295-.233,6.567,6.567,0,0,0,.186-1.569V14.57a.31.31,0,0,0-.31-.311Zm-5.513,6.181a5.364,5.364,0,0,1-.715.047,5.3,5.3,0,0,1-.7-.047.305.305,0,0,0-.078.605,6.6,6.6,0,0,0,.792.047,6.349,6.349,0,0,0,.777-.047.292.292,0,0,0,.264-.342A.3.3,0,0,0,15.222,20.441ZM9.29,17.319a.309.309,0,0,0-.544.295,6.2,6.2,0,0,0,.9,1.289.3.3,0,0,0,.435.031.315.315,0,0,0,.031-.435,6.7,6.7,0,0,1-.823-1.18Zm7.532,2.687c-.078.031-.14.062-.217.093a.312.312,0,0,0,.109.606.26.26,0,0,0,.109-.016c.14-.047.28-.109.419-.171a3.366,3.366,0,0,1-.419-.513Zm-2.3.17a5.694,5.694,0,0,0,2.158-.435,2.5,2.5,0,0,1-.186-.605,5.037,5.037,0,0,1-1.972.4h-.016a4.962,4.962,0,1,1,.015-9.924h.016a4.958,4.958,0,0,1,4.955,4.97,4.839,4.839,0,0,1-.372,1.879,2.481,2.481,0,0,1,.605.171,5.657,5.657,0,0,0,.388-2.05,5.568,5.568,0,0,0-5.575-5.591h-.016a5.59,5.59,0,0,0-3.96,9.536,5.619,5.619,0,0,0,3.96,1.646ZM19.6,18.733l.031.031-.031.031a1.144,1.144,0,0,1-1.6,0l-.031-.031L18,18.733a1.114,1.114,0,0,1,.807-.326,1.2,1.2,0,0,1,.792.326Zm-.45.046a.357.357,0,1,0-.357.357A.361.361,0,0,0,19.151,18.779Zm1.584,0a1.941,1.941,0,1,1-1.941-1.941A1.942,1.942,0,0,1,20.735,18.779Zm-.544,0a.328.328,0,0,0-.062-.171l-.2-.2a1.6,1.6,0,0,0-1.134-.466,1.625,1.625,0,0,0-1.134.466l-.2.2a.233.233,0,0,0-.062.171.328.328,0,0,0,.062.171l.2.2a1.613,1.613,0,0,0,2.268,0l.2-.2A.381.381,0,0,0,20.192,18.779ZM16.4,11.9a.412.412,0,0,0-.4-.4H13.048a.4.4,0,1,0,0,.808,1.549,1.549,0,0,1,1.242.559H13.048a.4.4,0,1,0,0,.808h1.336a1.506,1.506,0,0,1-1.336.683.433.433,0,0,0-.372.233.408.408,0,0,0,.062.435l2.19,2.532a.39.39,0,0,0,.311.14A.419.419,0,0,0,15.5,17.6a.413.413,0,0,0,.047-.574L13.84,15.037a1.962,1.962,0,0,0,1.4-1.382H16a.4.4,0,0,0,0-.808h-.807a1.94,1.94,0,0,0-.295-.559H16a.389.389,0,0,0,.4-.388Z" transform="translate(94.299 113.407)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="ShowPaymentIcon">
            {props.tooltip ? props.tooltip : 'Show Payment'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const VisitProofIcn = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="visitProofIcn" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="visit-proof-icn-16" transform="translate(4669 -20425)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="16" height="16" rx="4" transform="translate(-4669 20425)" fill="none" />
                    <g id="visit-proof-icn" transform="translate(-4685.244 20415.113)">
                        <path id="Path_50638" data-name="Path 50638" d="M35.67,21.852v-5.38h5.142L39.1,14.637,40.812,12.8H35.67V11.187a.3.3,0,0,0-.6,0V21.852a1.532,1.532,0,1,0,.6,0Zm-.3,2.432h0a.93.93,0,1,1,.928-.929.928.928,0,0,1-.928.929Z" transform="translate(-12.392)" />
                        <path id="Path_50639" data-name="Path 50639" d="M58.358,76.328a.756.756,0,1,0,.756.756.755.755,0,0,0-.756-.756Z" transform="translate(-31.904 -53.73)" />
                        <path id="Path_50640" data-name="Path 50640" d="M73.562,76.328a.756.756,0,1,0,.755.756.756.756,0,0,0-.755-.756Z" transform="translate(-44.386 -53.73)" />
                        <path id="Path_50641" data-name="Path 50641" d="M19.5,76.328a.756.756,0,1,0,.756.756.755.755,0,0,0-.756-.756Z" transform="translate(0 -53.73)" />
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="visitProofIcn">
            {props.tooltip ? props.tooltip : 'Visit Proof'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const EditBarcode = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="EditBarcode" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="edit-barcode-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="edit-barcode-icn" transform="translate(-932 -287.5)">
                        <path id="Path_50523" data-name="Path 50523" d="M5.2,10.508V4.167H4.55v9.1h.01c-.007-.107-.01-.216-.01-.325A4.855,4.855,0,0,1,5.2,10.508ZM7.15,8.629V4.167H6.5V9.041a4.918,4.918,0,0,1,.65-.413Zm2.6-.551V4.167H8.45v4a4.894,4.894,0,0,1,.975-.1c.109,0,.218,0,.325.01Zm1.95.551V4.167h-.65V8.344a4.873,4.873,0,0,1,.65.285Zm1.95,1.879V4.167H13V9.628a4.886,4.886,0,0,1,.65.881ZM0,4.167H.65v9.1H0Zm1.95,0h1.3v9.1H1.95Z" transform="translate(1034 404.833)" fill="#080808" fill-rule="evenodd" />
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M1421.225-7875.55a4.229,4.229,0,0,1-4.224-4.225,4.23,4.23,0,0,1,4.224-4.226,4.23,4.23,0,0,1,4.224,4.226A4.229,4.229,0,0,1,1421.225-7875.55Zm.765-6.419h0l-2.851,2.852a.189.189,0,0,0-.052.093l-.354,1.412a.263.263,0,0,0,.047.232.267.267,0,0,0,.212.1.39.39,0,0,0,.067-.008l1.411-.352a.211.211,0,0,0,.095-.056l2.851-2.853a1.008,1.008,0,0,0,.307-.716,1,1,0,0,0-.295-.72,1,1,0,0,0-.706-.295h-.014a1.007,1.007,0,0,0-.716.307Zm-2.809,4.237h0l.223-.895.673.672-.895.223Zm1.272-.416h0l-.856-.855,2.186-2.187.857.857-2.186,2.185Zm2.471-2.471h0l-.856-.856.21-.208a.607.607,0,0,1,.427-.176.606.606,0,0,1,.427.176.609.609,0,0,1,0,.857l-.207.207Z" transform="translate(-377.8 8297.55)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="EditBarcode">
            {props.tooltip ? props.tooltip : 'Edit Barcode'}
        </UncontrolledTooltip>
    </React.Fragment>
}



export const AssignIcn = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="AssignIcn" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="assign-icn-16" transform="translate(4537 -20426)">
                    <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none" />
                    <path id="Subtraction_73" data-name="Subtraction 73" d="M4.113,5.513a2.8,2.8,0,0,0,0-5.6,2.8,2.8,0,0,0,0,5.6Zm0-4.9a2.1,2.1,0,0,1,0,4.2,2.1,2.1,0,0,1,0-4.2Zm1.281,12.6a4.1,4.1,0,0,0,.854.7H1.663a1.751,1.751,0,0,1-1.75-1.75v-4.2a1.751,1.751,0,0,1,1.75-1.75H6.248a4.1,4.1,0,0,0-.854.7H1.663a1.049,1.049,0,0,0-1.05,1.05v4.2a1.049,1.049,0,0,0,1.05,1.05Zm3.269-7a3.85,3.85,0,0,0,0,7.7A3.85,3.85,0,0,0,8.663,6.213Zm0,7a3.15,3.15,0,1,1,3.122-3.15A3.15,3.15,0,0,1,8.663,13.213Z" transform="translate(-4535.413 20427.088)" fill="#080808" />
                    <g id="Group_33320" data-name="Group 33320" transform="translate(-4524.979 20435.863) rotate(90)">
                        <path id="Subtraction_74" data-name="Subtraction 74" d="M.282,3.383a.279.279,0,0,1-.2-.081A.282.282,0,0,1,0,3.1V.283a.276.276,0,0,1,.083-.2A.288.288,0,0,1,.282,0,.284.284,0,0,1,.564.283V3.1a.281.281,0,0,1-.282.28Z" transform="translate(1.056 0.117)" fill="#080808" />
                        <path id="Subtraction_75" data-name="Subtraction 75" d="M2.4,1.738h0a.287.287,0,0,1-.2-.083L1.338.8l-.857.857a.276.276,0,0,1-.2.083.276.276,0,0,1-.2-.083.28.28,0,0,1,0-.4L1.338,0,2.595,1.256a.28.28,0,0,1,0,.4A.283.283,0,0,1,2.4,1.738Z" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="AssignIcn">
            {props.tooltip ? props.tooltip : 'Assign'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const AcknowledgedIcn = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="AcknowledgedIcn" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <g id="acknowledged-icn-16" transform="translate(4537 -20426)">
                    <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none" />
                    <path id="acknowledged-icn" d="M26.613,21.666H20.832V8.332h9.334v8.506a3,3,0,1,1-3.552,4.828ZM30.166,17.7a2.334,2.334,0,1,0,.666,1.632,2.341,2.341,0,0,0-.666-1.632ZM29.5,16.5V9h-8V21H26a3,3,0,0,1,3.5-4.5Zm.1,1.729.471.472-1.9,1.9L26.93,19.37,27.4,18.9l.764.764Zm-6.764-6.566V11h5.334v.667Zm0,2V13h4v.667Zm0,2V15H27.5v.667Zm0,4V19h2v.667Z" transform="translate(-4555.332 20418.668)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="AcknowledgedIcn">
            {props.tooltip ? props.tooltip : 'Acknowledge Patient'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PrescriptionEditIcn = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id={`PrescriptionEdit_${props?.id ? props?.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="prescription-edit-icn-16" transform="translate(4625 -20426)">
                    <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none" />
                    <g id="prescription-edit-icn" transform="translate(-4623.5 20427)">
                        <path id="Subtraction_55" data-name="Subtraction 55" d="M8.993,14H1.621A1.622,1.622,0,0,1,0,12.38V2.393A1.622,1.622,0,0,1,1.621.773h.65L2.28.729A.929.929,0,0,1,3.182,0H7.431a.927.927,0,0,1,.9.729l.01.044h.65a1.627,1.627,0,0,1,1.622,1.6c0,.007,0,.014,0,.021V4.4a.334.334,0,0,1-.669,0l0-2.006a.954.954,0,0,0-.954-.952H8.356V1.89a.336.336,0,0,1-.334.326H2.593a.335.335,0,0,1-.334-.334V1.442H1.621a.956.956,0,0,0-.953.941V12.393a.956.956,0,0,0,.953.941H8.993a.954.954,0,0,0,.954-.952l0-4.95a.334.334,0,0,1,.668,0l0,4.948c0,.007,0,.014,0,.021A1.627,1.627,0,0,1,8.993,14ZM3.183.668a.255.255,0,0,0-.255.255v.623H7.688V.923A.255.255,0,0,0,7.433.668Z" fill="#080808" />
                        <path id="Subtraction_59" data-name="Subtraction 59" d="M4.193.668H.249C.112.668,0,.518,0,.334S.112,0,.249,0H4.193a.221.221,0,0,1,.177.1.393.393,0,0,1,.073.236C4.442.518,4.33.668,4.193.668Z" transform="translate(1.718 6.974)" fill="#080808" />
                        <path id="Subtraction_57" data-name="Subtraction 57" d="M3.34.668H.334A.334.334,0,1,1,.334,0H3.34a.334.334,0,1,1,0,.668Z" transform="translate(1.718 10.074)" fill="#080808" />
                        <path id="Subtraction_58" data-name="Subtraction 58" d="M4.184.668H.257A.3.3,0,0,1,0,.334.3.3,0,0,1,.257,0H4.184a.3.3,0,0,1,.258.334A.3.3,0,0,1,4.184.668Z" transform="translate(1.718 8.534)" fill="#080808" />
                        <path id="Subtraction_60" data-name="Subtraction 60" d="M1.338,2.68A.335.335,0,0,1,1,2.346V1.673H.333A.333.333,0,0,1,0,1.339.335.335,0,0,1,.334,1H1V.334a.334.334,0,1,1,.668,0V1h.672a.334.334,0,1,1,0,.668H1.672v.673A.335.335,0,0,1,1.338,2.68Z" transform="translate(3.858 3.357)" fill="#080808" />
                        <path id="Subtraction_56" data-name="Subtraction 56" d="M.291,6.526A.3.3,0,0,1,.1,6.454L.091,6.448l-.006,0a.086.086,0,0,1-.012-.015l0-.007a.294.294,0,0,1,.017-.4L.2,5.906.721,4.014a.052.052,0,0,1,.013-.022L4.507.221a.8.8,0,0,1,1.1,0l.7.7.005.006a.783.783,0,0,1-.008,1.1L2.534,5.794a.054.054,0,0,1-.022.012L.618,6.322.5,6.44A.3.3,0,0,1,.291,6.526Zm.846-1.809h0l-.252.927.925-.253-.673-.673Zm2.7-3.005L1.4,4.153l.975.974L4.814,2.683ZM5.056.584A.194.194,0,0,0,4.92.637L4.258,1.3l.972.971.661-.661a.191.191,0,0,0,0-.273l-.7-.7A.191.191,0,0,0,5.056.584Z" transform="translate(6.878 2.682)" fill="#080808" />
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target={`PrescriptionEdit_${props?.id ? props?.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Prescription Edit'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PrescriptionPending = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="PrescriptionPending" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="prescription-pending-icn-16" transform="translate(4625 -20426)">
                    <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none" />
                    <g id="prescription-pending-icn" transform="translate(-4623 20427)">
                        <path id="Subtraction_55" data-name="Subtraction 55" d="M8.994,14H1.621A1.622,1.622,0,0,1,0,12.38V2.393A1.622,1.622,0,0,1,1.621.773h.65L2.28.729A.928.928,0,0,1,3.182,0H7.431a.927.927,0,0,1,.9.729l.009.044h.65a1.623,1.623,0,0,1,1.622,1.621V4.143a.334.334,0,1,1-.668,0V2.394a.954.954,0,0,0-.953-.953H8.356v.439a.335.335,0,0,1-.334.334H2.593a.335.335,0,0,1-.334-.334V1.442H1.621a.954.954,0,0,0-.954.953v9.987a.954.954,0,0,0,.954.952H8.994a.954.954,0,0,0,.953-.953V7.907a.334.334,0,1,1,.668,0V12.38A1.623,1.623,0,0,1,8.994,14ZM3.183.668a.255.255,0,0,0-.255.255v.624H7.688V.923A.255.255,0,0,0,7.433.668ZM9.942,4.434a.388.388,0,0,1-.106-.261.447.447,0,0,0,.107.261Z" transform="translate(0 0)" fill="#080808" />
                        <path id="Subtraction_59" data-name="Subtraction 59" d="M4.193.668H.249C.112.668,0,.518,0,.334S.112,0,.249,0H4.193a.221.221,0,0,1,.177.1.393.393,0,0,1,.073.236C4.442.518,4.33.668,4.193.668Z" transform="translate(1.718 6.974)" fill="#080808" />
                        <path id="Subtraction_57" data-name="Subtraction 57" d="M3.34.668H.334A.334.334,0,1,1,.334,0H3.34a.334.334,0,1,1,0,.668Z" transform="translate(1.718 10.074)" fill="#080808" />
                        <path id="Subtraction_58" data-name="Subtraction 58" d="M4.184.668H.257A.3.3,0,0,1,0,.334.3.3,0,0,1,.257,0H4.184a.3.3,0,0,1,.258.334A.3.3,0,0,1,4.184.668Z" transform="translate(1.718 8.534)" fill="#080808" />
                        <path id="Subtraction_60" data-name="Subtraction 60" d="M1.338,2.68A.335.335,0,0,1,1,2.346V1.673H.333A.333.333,0,0,1,0,1.339.335.335,0,0,1,.334,1H1V.334a.334.334,0,1,1,.668,0V1h.672a.334.334,0,1,1,0,.668H1.672v.673A.335.335,0,0,1,1.338,2.68Z" transform="translate(3.858 3.357)" fill="#080808" />
                        <g id="Group_33319" data-name="Group 33319" transform="translate(8.359 4.342)">
                            <path id="Path_50494" data-name="Path 50494" d="M11.5,13.2a1.7,1.7,0,1,0,1.7-1.7,1.7,1.7,0,0,0-1.7,1.7Z" transform="translate(-11.5 -11.501)" fill="rgba(0,0,0,0)" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" />
                            <path id="Path_50495" data-name="Path 50495" d="M18.065,15.349H17.5V14.5" transform="translate(-15.804 -13.653)" fill="rgba(0,0,0,0)" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" />
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PrescriptionPending">
            {props.tooltip ? props.tooltip : 'Prescription Pending'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PrescriptionCompleted = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="PrescriptionCompleted" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="prescription-completed-icn-16" transform="translate(4625 -20426)">
                    <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none" />
                    <g id="prescription-completed-icn" transform="translate(-4623 20427)">
                        <path id="Subtraction_55" data-name="Subtraction 55" d="M8.994,14H1.621A1.622,1.622,0,0,1,0,12.38V2.393A1.622,1.622,0,0,1,1.621.773h.65L2.28.729A.928.928,0,0,1,3.182,0H7.431a.927.927,0,0,1,.9.729l.009.044h.65a1.623,1.623,0,0,1,1.622,1.621V4.143a.334.334,0,1,1-.668,0V2.394a.954.954,0,0,0-.953-.953H8.356v.439a.335.335,0,0,1-.334.334H2.593a.335.335,0,0,1-.334-.334V1.442H1.621a.954.954,0,0,0-.954.953v9.987a.954.954,0,0,0,.954.952H8.994a.954.954,0,0,0,.953-.953V7.907a.334.334,0,1,1,.668,0V12.38A1.623,1.623,0,0,1,8.994,14ZM3.183.668a.255.255,0,0,0-.255.255v.624H7.688V.923A.255.255,0,0,0,7.433.668ZM9.942,4.434a.388.388,0,0,1-.106-.261.447.447,0,0,0,.107.261Z" transform="translate(0 0)" fill="#080808" />
                        <path id="Subtraction_59" data-name="Subtraction 59" d="M4.193.668H.249C.112.668,0,.518,0,.334S.112,0,.249,0H4.193a.221.221,0,0,1,.177.1.393.393,0,0,1,.073.236C4.442.518,4.33.668,4.193.668Z" transform="translate(1.718 6.974)" fill="#080808" />
                        <path id="Subtraction_57" data-name="Subtraction 57" d="M3.34.668H.334A.334.334,0,1,1,.334,0H3.34a.334.334,0,1,1,0,.668Z" transform="translate(1.718 10.074)" fill="#080808" />
                        <path id="Subtraction_58" data-name="Subtraction 58" d="M4.184.668H.257A.3.3,0,0,1,0,.334.3.3,0,0,1,.257,0H4.184a.3.3,0,0,1,.258.334A.3.3,0,0,1,4.184.668Z" transform="translate(1.718 8.534)" fill="#080808" />
                        <path id="Subtraction_60" data-name="Subtraction 60" d="M1.338,2.68A.335.335,0,0,1,1,2.346V1.673H.333A.333.333,0,0,1,0,1.339.335.335,0,0,1,.334,1H1V.334a.334.334,0,1,1,.668,0V1h.672a.334.334,0,1,1,0,.668H1.672v.673A.335.335,0,0,1,1.338,2.68Z" transform="translate(3.858 3.357)" fill="#080808" />
                        <g id="Group_33319" data-name="Group 33319" transform="translate(8.359 4.342)">
                            <path id="Path_50494" data-name="Path 50494" d="M11.5,13.2a1.7,1.7,0,1,0,1.7-1.7,1.7,1.7,0,0,0-1.7,1.7Z" transform="translate(-11.5 -11.501)" fill="rgba(0,0,0,0)" stroke="#080808" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" />
                            <path id="Path_50590" data-name="Path 50590" d="M32.3,63.24l-.693.693-.251-.251a.282.282,0,1,0-.4.4l.443.443a.284.284,0,0,0,.413,0l.9-.9a.3.3,0,0,0,0-.4.332.332,0,0,0-.413.015Z" transform="translate(-30.137 -62.053)" fill="#080808" />
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PrescriptionCompleted">
            {props.tooltip ? props.tooltip : 'Prescription Completed'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PrescriptionUpload = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="PrescriptionUpload" className="btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="prescription-upload-icn-16" transform="translate(4625 -20426)">
          <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none"/>
          <g id="prescription-upload-icn" transform="translate(-4623 20427)">
            <path id="Subtraction_55" data-name="Subtraction 55" d="M8.994,14H1.621A1.622,1.622,0,0,1,0,12.38V2.393A1.622,1.622,0,0,1,1.621.773h.65L2.28.729A.928.928,0,0,1,3.182,0H7.431a.927.927,0,0,1,.9.729l.009.044h.65a1.623,1.623,0,0,1,1.622,1.621V4.318a.334.334,0,1,1-.668,0V2.394a.954.954,0,0,0-.953-.953H8.356v.439a.335.335,0,0,1-.334.334H2.593a.335.335,0,0,1-.334-.334V1.442H1.621a.954.954,0,0,0-.954.953v9.987a.954.954,0,0,0,.954.952H8.994a.954.954,0,0,0,.953-.953V9.406a.334.334,0,0,1,.668,0V12.38A1.623,1.623,0,0,1,8.994,14ZM3.183.668a.255.255,0,0,0-.255.255v.624H7.688V.923A.255.255,0,0,0,7.433.668Z" transform="translate(0 0)" fill="#080808"/>
            <path id="Subtraction_59" data-name="Subtraction 59" d="M4.193.668H.249C.112.668,0,.518,0,.334S.112,0,.249,0H4.193a.221.221,0,0,1,.177.1.393.393,0,0,1,.073.236C4.442.518,4.33.668,4.193.668Z" transform="translate(1.718 6.974)" fill="#080808"/>
            <path id="Subtraction_57" data-name="Subtraction 57" d="M3.34.668H.334A.334.334,0,1,1,.334,0H3.34a.334.334,0,1,1,0,.668Z" transform="translate(1.718 10.074)" fill="#080808"/>
            <path id="Subtraction_58" data-name="Subtraction 58" d="M4.184.668H.257A.3.3,0,0,1,0,.334.3.3,0,0,1,.257,0H4.184a.3.3,0,0,1,.258.334A.3.3,0,0,1,4.184.668Z" transform="translate(1.718 8.534)" fill="#080808"/>
            <path id="Subtraction_60" data-name="Subtraction 60" d="M1.338,2.68A.335.335,0,0,1,1,2.346V1.673H.333A.333.333,0,0,1,0,1.339.335.335,0,0,1,.334,1H1V.334a.334.334,0,1,1,.668,0V1h.672a.334.334,0,1,1,0,.668H1.672v.673A.335.335,0,0,1,1.338,2.68Z" transform="translate(3.858 3.357)" fill="#080808"/>
            <g id="upload-icn" transform="translate(7.537 5.156)">
              <path id="Union_179" data-name="Union 179" d="M.538,1.611A.133.133,0,0,1,.5,1.518V.509L.227.78A.129.129,0,0,1,.134.82.127.127,0,0,1,.04.78a.129.129,0,0,1,0-.187L.632,0l.592.593a.129.129,0,0,1,0,.187A.132.132,0,0,1,1.13.82h0A.131.131,0,0,1,1.035.78L.765.51V1.518a.134.134,0,0,1-.04.094.131.131,0,0,1-.094.038A.129.129,0,0,1,.538,1.611Z" transform="translate(2.081 2.026)" fill="#080808"/>
              <path id="Union_178" data-name="Union 178" d="M1.217,3.764A1.217,1.217,0,0,1,0,2.546a1.224,1.224,0,0,1,.69-1.1A1.381,1.381,0,0,1,2.044.333h0a1.432,1.432,0,0,1,.294.031A1.206,1.206,0,0,1,3.2,0h.009a1.215,1.215,0,0,1,1.2,1.049,1.383,1.383,0,0,1-.305,2.713H3.542A.221.221,0,0,1,3.386,3.7a.219.219,0,0,1,0-.311.222.222,0,0,1,.155-.065h.552a.942.942,0,0,0,.889-.943.948.948,0,0,0-.2-.578.963.963,0,0,0-.513-.335L4.011,1.4l-.029-.267a.771.771,0,0,0-.77-.69h0a.772.772,0,0,0-.563.246L2.489.853,2.27.8A.912.912,0,0,0,2.048.774h0a.939.939,0,0,0-.924.778l-.036.2L.9,1.838a.776.776,0,0,0,.32,1.484h.664a.22.22,0,0,1,.156.065.218.218,0,0,1,0,.311.22.22,0,0,1-.156.065Z" fill="#080808" stroke="#080808" stroke-width="0.15"/>
            </g>
          </g>
        </g>
      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PrescriptionUpload">
            {props.tooltip ? props.tooltip : 'Prescription Upload'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const InvoiceIcn = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="InvoiceIcn" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="invoice-icn-16" transform="translate(4713 -20426)">
                    <rect id="Rectangle_12075" data-name="Rectangle 12075" width="16" height="16" rx="4" transform="translate(-4713 20426)" fill="none" />
                    <g id="invoice-icn" transform="translate(-4710.25 20427)">
                        <path id="Path_50537" data-name="Path 50537" d="M221.045,557.66h.065a.167.167,0,1,0,0-.334h-.065a.167.167,0,0,0,0,.334Z" transform="translate(-219.94 -550.831)" fill="#080808" />
                        <path id="Path_50537_-_Outline" data-name="Path 50537 - Outline" d="M221.109,557.66a.167.167,0,1,0,0-.334h-.065a.167.167,0,0,0,0,.334h.065m0,.1h-.065a.267.267,0,1,1,0-.534h.065a.267.267,0,1,1,0,.534Z" transform="translate(-219.94 -550.831)" fill="#080808" />
                        <path id="Path_50538" data-name="Path 50538" d="M281.337,557.32h-.488a.167.167,0,1,0,0,.334h.488a.167.167,0,1,0,0-.334Z" transform="translate(-279.035 -550.825)" fill="#080808" />
                        <path id="Path_50538_-_Outline" data-name="Path 50538 - Outline" d="M280.849,557.32a.167.167,0,1,0,0,.334h.488a.167.167,0,1,0,0-.334h-.488m0-.1h.488a.267.267,0,1,1,0,.534h-.488a.267.267,0,1,1,0-.534Z" transform="translate(-279.035 -550.825)" fill="#080808" />
                        <path id="Path_50539" data-name="Path 50539" d="M380.743,557.32h-3.5a.167.167,0,1,0,0,.334h3.5a.167.167,0,0,0,0-.334Z" transform="translate(-374.288 -550.825)" fill="#080808" />
                        <path id="Path_50539_-_Outline" data-name="Path 50539 - Outline" d="M377.245,557.32a.167.167,0,1,0,0,.334h3.5a.167.167,0,0,0,0-.334h-3.5m0-.1h3.5a.267.267,0,1,1,0,.534h-3.5a.267.267,0,1,1,0-.534Z" transform="translate(-374.288 -550.825)" fill="#080808" />
                        <path id="Path_50540" data-name="Path 50540" d="M221.045,441.59h.065a.167.167,0,1,0,0-.334h-.065a.167.167,0,1,0,0,.334Z" transform="translate(-219.94 -436.138)" fill="#080808" />
                        <path id="Path_50540_-_Outline" data-name="Path 50540 - Outline" d="M221.109,441.59a.167.167,0,1,0,0-.334h-.065a.167.167,0,1,0,0,.334h.065m0,.1h-.065a.267.267,0,1,1,0-.534h.065a.267.267,0,1,1,0,.534Z" transform="translate(-219.94 -436.138)" fill="#080808" />
                        <path id="Path_50541" data-name="Path 50541" d="M281.337,441.25h-.488a.167.167,0,1,0,0,.334h.488a.167.167,0,1,0,0-.334Z" transform="translate(-279.035 -436.132)" fill="#080808" />
                        <path id="Path_50541_-_Outline" data-name="Path 50541 - Outline" d="M280.849,441.25a.167.167,0,1,0,0,.334h.488a.167.167,0,1,0,0-.334h-.488m0-.1h.488a.267.267,0,1,1,0,.534h-.488a.267.267,0,1,1,0-.534Z" transform="translate(-279.035 -436.132)" fill="#080808" />
                        <path id="Path_50542" data-name="Path 50542" d="M380.743,441.25h-3.5a.167.167,0,1,0,0,.334h3.5a.167.167,0,0,0,0-.334Z" transform="translate(-374.288 -436.132)" fill="#080808" />
                        <path id="Path_50542_-_Outline" data-name="Path 50542 - Outline" d="M377.245,441.25a.167.167,0,1,0,0,.334h3.5a.167.167,0,0,0,0-.334h-3.5m0-.1h3.5a.267.267,0,0,1,0,.534h-3.5a.267.267,0,1,1,0-.534Z" transform="translate(-374.288 -436.132)" fill="#080808" />
                        <path id="Path_50543" data-name="Path 50543" d="M221.045,697.16h.065a.167.167,0,1,0,0-.334h-.065a.167.167,0,0,0,0,.334Z" transform="translate(-219.94 -688.677)" fill="#080808" />
                        <path id="Path_50543_-_Outline" data-name="Path 50543 - Outline" d="M221.109,697.16a.167.167,0,1,0,0-.334h-.065a.167.167,0,0,0,0,.334h.065m0,.1h-.065a.267.267,0,1,1,0-.534h.065a.267.267,0,1,1,0,.534Z" transform="translate(-219.94 -688.677)" fill="#080808" />
                        <path id="Path_50544" data-name="Path 50544" d="M281.5,696.995a.167.167,0,0,0-.167-.167h-.488a.167.167,0,1,0,0,.333h.488A.167.167,0,0,0,281.5,696.995Z" transform="translate(-279.033 -688.679)" fill="#080808" />
                        <path id="Path_50544_-_Outline" data-name="Path 50544 - Outline" d="M280.847,696.828a.167.167,0,1,0,0,.333h.488a.167.167,0,1,0,0-.333h-.488m0-.1h.488a.267.267,0,1,1,0,.533h-.488a.267.267,0,1,1,0-.533Z" transform="translate(-279.033 -688.679)" fill="#080808" />
                        <path id="Path_50545" data-name="Path 50545" d="M221.045,162.259H223.8a.167.167,0,0,0,.167-.167v-2.12a.167.167,0,0,0-.167-.167h-2.753a.167.167,0,0,0-.167.167v2.12h0a.167.167,0,0,0,.167.167Zm.167-2.12h2.42v1.786h-2.42Z" transform="translate(-219.94 -158.026)" fill="#080808" />
                        <path id="Path_50545_-_Outline" data-name="Path 50545 - Outline" d="M223.8,162.259a.167.167,0,0,0,.167-.167v-2.12a.167.167,0,0,0-.167-.167h-2.753a.167.167,0,0,0-.167.167v2.12h0a.167.167,0,0,0,.167.167H223.8m-2.586-2.12h2.42v1.786h-2.42V160.14m2.586,2.22h-2.753a.267.267,0,0,1-.267-.267v-2.12a.267.267,0,0,1,.267-.267H223.8a.267.267,0,0,1,.267.267v2.12A.267.267,0,0,1,223.8,162.359Zm-2.486-.534h2.22V160.24h-2.22Z" transform="translate(-219.94 -158.026)" fill="#080808" />
                        <path id="Union_180" data-name="Union 180" d="M-720.036-8462.88a3.612,3.612,0,0,1-1.936-1.125l-.732.585a.275.275,0,0,1-.332,0l-.738-.59-.736.59a.278.278,0,0,1-.334,0l-.736-.59-.736.59a.277.277,0,0,1-.283.031.265.265,0,0,1-.151-.24v-13.1a.263.263,0,0,1,.151-.24.268.268,0,0,1,.281.029l.738.592.736-.592a.276.276,0,0,1,.166-.058.277.277,0,0,1,.168.058l.736.592.736-.592a.278.278,0,0,1,.334,0l.736.592.738-.592a.275.275,0,0,1,.332,0l.738.592.736-.592a.279.279,0,0,1,.283-.032.271.271,0,0,1,.151.243v6.742a3.611,3.611,0,0,1,2.066.867,3.621,3.621,0,0,1,1.172,2.018,3.624,3.624,0,0,1-.308,2.31,3.624,3.624,0,0,1-1.661,1.639,3.6,3.6,0,0,1-1.562.357A3.546,3.546,0,0,1-720.036-8462.88Zm.021-.1a3.5,3.5,0,0,0,2.251-.271,3.507,3.507,0,0,0,1.615-1.593,3.519,3.519,0,0,0,.367-1.6,3.519,3.519,0,0,1-.367,1.6,3.507,3.507,0,0,1-1.615,1.593,3.5,3.5,0,0,1-2.251.271,3.511,3.511,0,0,1-1.945-1.168l-.806.645a.167.167,0,0,1-.208,0l-.8-.638-.8.638a.167.167,0,0,1-.208,0l-.8-.638-.8.638a.165.165,0,0,1-.177.021.167.167,0,0,1-.094-.151.167.167,0,0,0,.094.151.165.165,0,0,0,.177-.021l.8-.638.8.638a.167.167,0,0,0,.208,0l.8-.638.8.638a.167.167,0,0,0,.208,0l.806-.645A3.511,3.511,0,0,0-720.014-8462.976Zm-1.44-5.595a3.05,3.05,0,0,0-.9,2.17,3.056,3.056,0,0,0,.9,2.17,3.057,3.057,0,0,0,2.17.9,3.057,3.057,0,0,0,2.17-.9,3.067,3.067,0,0,0,.9-2.17,3.043,3.043,0,0,0-.9-2.17,3.05,3.05,0,0,0-2.17-.9A3.054,3.054,0,0,0-721.455-8468.57Zm-2.151,4.01.736.592.572-.46a3.574,3.574,0,0,1-.589-1.987,3.57,3.57,0,0,1,.553-1.9h-1.359a.268.268,0,0,1-.268-.266.268.268,0,0,1,.268-.269h1.77a3.583,3.583,0,0,1,1.115-.812,3.586,3.586,0,0,1,1.285-.332v-6.183l-.47.377a.265.265,0,0,1-.166.06.272.272,0,0,1-.168-.06l-.736-.59-.736.59a.278.278,0,0,1-.334,0l-.736-.59-.738.59a.275.275,0,0,1-.332,0l-.736-.59-.738.59a.275.275,0,0,1-.332,0l-.47-.377v12l.47-.377a.275.275,0,0,1,.332,0l.738.592.736-.592a.268.268,0,0,1,.166-.056A.275.275,0,0,1-723.606-8464.561Zm-2.71.585v-12.409l.632.5a.167.167,0,0,0,.208,0l.8-.638.8.638a.167.167,0,0,0,.208,0l.8-.638.8.638a.167.167,0,0,0,.208,0l.8-.638.8.638a.167.167,0,0,0,.208,0l.632-.5-.632.5a.167.167,0,0,1-.208,0l-.8-.638-.8.638a.167.167,0,0,1-.208,0l-.8-.638-.8.638a.167.167,0,0,1-.208,0l-.8-.638-.8.638a.167.167,0,0,1-.208,0l-.632-.5Zm3.529-2.44a3.51,3.51,0,0,0,.623,2.009,3.51,3.51,0,0,1-.623-2.009Zm5.742-2.225a3.16,3.16,0,0,1,.93,2.24,3.16,3.16,0,0,0-.93-2.24,3.168,3.168,0,0,0-2.24-.928,3.168,3.168,0,0,0-2.24.928,3.167,3.167,0,0,0-.928,2.24,3.167,3.167,0,0,1,.928-2.24,3.168,3.168,0,0,1,2.24-.928A3.168,3.168,0,0,1-717.044-8468.641Zm-6.814.058a.166.166,0,0,0,.166.165h0a.166.166,0,0,1-.166-.165Zm4.77-1.315v0Z" transform="translate(726.65 8476.9)" fill="#080808" />
                        <path id="Path_50549" data-name="Path 50549" d="M645.918,755.329l-.97.9v-2.641a.167.167,0,0,0-.334,0v2.641l-.97-.9a.167.167,0,0,0-.227.244l1.251,1.164a.167.167,0,0,0,.227,0l1.251-1.164a.167.167,0,1,0-.227-.244Z" transform="translate(-637.415 -744.604)" fill="#080808" />
                        <path id="Path_50549_-_Outline" data-name="Path 50549 - Outline" d="M644.781,756.782a.166.166,0,0,0,.114-.045l1.251-1.164a.167.167,0,1,0-.227-.244l-.97.9v-2.641a.167.167,0,0,0-.334,0v2.641l-.97-.9a.167.167,0,0,0-.227.244l1.251,1.164a.166.166,0,0,0,.114.045m0,.1a.266.266,0,0,1-.182-.071l-1.251-1.164a.267.267,0,1,1,.364-.391l.8.747v-2.412a.267.267,0,0,1,.534,0V756l.8-.747a.267.267,0,1,1,.364.391l-1.251,1.164A.266.266,0,0,1,644.781,756.882Z" transform="translate(-637.415 -744.604)" fill="#080808" />
                        <path id="Path_50550" data-name="Path 50550" d="M213.867,828.653h0a.167.167,0,1,0,0-.333l-.714-.008-.286,0h0a.167.167,0,0,0,0,.334l.286,0a.261.261,0,0,1,.185.079l.017.019-.489-.005h0a.167.167,0,0,0,0,.333l.489.005h0a.259.259,0,0,1-.2.093l-.286,0h0a.167.167,0,0,0-.116.287l.708.684a.167.167,0,0,0,.232-.24l-.419-.4h0a.6.6,0,0,0,.456-.412h.144a.167.167,0,1,0,0-.333l-.142,0a.586.586,0,0,0-.036-.1Z" transform="translate(-211.755 -818.6)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="InvoiceIcn">
            {props.tooltip ? props.tooltip : 'Invoice'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const Payment = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Payment" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="retry-payment-icn-16" transform="translate(4669 -20426)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="16" height="16" rx="4" transform="translate(-4669 20426)" fill="none" />
                    <path id="retry-payment-icn" d="M6.611,14.5H.833a.333.333,0,0,1-.325-.408L1.555,9.558a4.776,4.776,0,0,1,1.277-2.3L4.056,6.03V1.723A1.224,1.224,0,0,1,5.278.5h5.35a1.226,1.226,0,0,1,1.206,1.222v8.889a1.224,1.224,0,0,1-1.222,1.222H7.9l-.982,2.456A.336.336,0,0,1,6.611,14.5ZM4.056,6.973,3.3,7.725a4.1,4.1,0,0,0-1.1,1.982l-.953,4.127H6.386L7.8,10.3A.805.805,0,0,0,6.488,9.43L4.625,11.293a.324.324,0,0,1-.233.1.332.332,0,0,1-.336-.334Zm5.556-5.8v10h1a.556.556,0,0,0,.556-.556V1.723a.556.556,0,0,0-.556-.555ZM7.056,8.543a1.451,1.451,0,0,1,1.365,2l-.25.625h.774v-10H5.278a.556.556,0,0,0-.556.556v8.529L6.017,8.959A1.472,1.472,0,0,1,7.056,8.543Z" transform="translate(-4667.25 20426.498)" fill="#080808" />
                    <path id="Union_181" data-name="Union 181" d="M.829,3.085A1.658,1.658,0,0,1,0,1.649a.211.211,0,0,1,.421,0A1.238,1.238,0,0,0,1.653,2.894h0a1.247,1.247,0,0,0,.873-.36A1.244,1.244,0,0,0,2.9,1.658,1.242,1.242,0,0,0,2.533.783a1.213,1.213,0,0,0-.4-.269A1.242,1.242,0,0,0,.971.628a.214.214,0,0,1,.107.13.205.205,0,0,1-.019.157.211.211,0,0,1-.127.1l-.481.136H.408A.273.273,0,0,1,.137.913a.158.158,0,0,1,0-.031l0-.019L.206.371A.209.209,0,0,1,.41.209a.165.165,0,0,1,.032,0A.211.211,0,0,1,.614.369,1.648,1.648,0,0,1,1.562,0l.095,0A1.653,1.653,0,1,1,.829,3.085Z" transform="translate(-4662.075 20429.375)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Payment">
            {props.tooltip ? props.tooltip : 'Collect Payment'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const RetryPayment = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="RetryPayment" className="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="retry-payment-icn-16" transform="translate(4669 -20426)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="16" height="16" rx="4" transform="translate(-4669 20426)" fill="none" />
                    <path id="retry-payment-icn" d="M6.611,14.5H.833a.333.333,0,0,1-.325-.408L1.555,9.558a4.776,4.776,0,0,1,1.277-2.3L4.056,6.03V1.723A1.224,1.224,0,0,1,5.278.5h5.35a1.226,1.226,0,0,1,1.206,1.222v8.889a1.224,1.224,0,0,1-1.222,1.222H7.9l-.982,2.456A.336.336,0,0,1,6.611,14.5ZM4.056,6.973,3.3,7.725a4.1,4.1,0,0,0-1.1,1.982l-.953,4.127H6.386L7.8,10.3A.805.805,0,0,0,6.488,9.43L4.625,11.293a.324.324,0,0,1-.233.1.332.332,0,0,1-.336-.334Zm5.556-5.8v10h1a.556.556,0,0,0,.556-.556V1.723a.556.556,0,0,0-.556-.555ZM7.056,8.543a1.451,1.451,0,0,1,1.365,2l-.25.625h.774v-10H5.278a.556.556,0,0,0-.556.556v8.529L6.017,8.959A1.472,1.472,0,0,1,7.056,8.543Z" transform="translate(-4667.25 20426.498)" fill="#080808" />
                    <path id="Union_181" data-name="Union 181" d="M.829,3.085A1.658,1.658,0,0,1,0,1.649a.211.211,0,0,1,.421,0A1.238,1.238,0,0,0,1.653,2.894h0a1.247,1.247,0,0,0,.873-.36A1.244,1.244,0,0,0,2.9,1.658,1.242,1.242,0,0,0,2.533.783a1.213,1.213,0,0,0-.4-.269A1.242,1.242,0,0,0,.971.628a.214.214,0,0,1,.107.13.205.205,0,0,1-.019.157.211.211,0,0,1-.127.1l-.481.136H.408A.273.273,0,0,1,.137.913a.158.158,0,0,1,0-.031l0-.019L.206.371A.209.209,0,0,1,.41.209a.165.165,0,0,1,.032,0A.211.211,0,0,1,.614.369,1.648,1.648,0,0,1,1.562,0l.095,0A1.653,1.653,0,1,1,.829,3.085Z" transform="translate(-4662.075 20429.375)" fill="#080808" />
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="RetryPayment">
            {props.tooltip ? props.tooltip : 'Retry Payment'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PaymentReceipt = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="PaymentReceipt" class="btn-sm btn icon-hover">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="payment-receipt-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="24" height="24" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="payment-receipt-icn" transform="translate(104 122.25)">
                        <path id="Subtraction_52" data-name="Subtraction 52" d="M6.175,17.054A.291.291,0,0,1,6,17l-1-.75L4,17a.293.293,0,0,1-.353,0l-1-.75-1,.75a.294.294,0,0,1-.353,0L.117,16.113A.292.292,0,0,1,0,15.877V1.176A1.179,1.179,0,0,1,1.176,0h10a.294.294,0,0,1,0,.588h-10a.59.59,0,0,0-.588.588V15.731l.882.662,1-.75a.294.294,0,0,1,.353,0l1,.75,1-.75a.294.294,0,0,1,.353,0l1,.75.713-.534a5.723,5.723,0,0,0,.2.587L6.351,17A.29.29,0,0,1,6.175,17.054Zm.855-4.7H2.352a.59.59,0,0,1-.588-.588V5.292A.59.59,0,0,1,2.352,4.7H4.116a.294.294,0,1,1,0,.588H2.352V6.468H8.233V5.292H5.292a.294.294,0,1,1,0-.588H10a.59.59,0,0,1,.588.588V8.885A5.776,5.776,0,0,0,10,9.121v-.3H8.821V9.854a5.79,5.79,0,0,0-.754.731H2.352v1.176H7.283a5.762,5.762,0,0,0-.254.588ZM2.352,8.821V10H8.233V8.821ZM8.821,7.056V8.233H10V7.056Zm-6.469,0V8.233H8.233V7.056ZM8.821,5.292V6.468H10V5.292ZM14.113,8.84h0a5.743,5.743,0,0,0-1.694-.254,5.82,5.82,0,0,0-.659.037V1.176a1.176,1.176,0,0,1,2.352,0V8.84ZM5,3.529H2.058a.294.294,0,0,1,0-.588H5a.294.294,0,0,1,0,.588ZM3.822,2.352H2.058a.294.294,0,0,1,0-.588H3.822a.294.294,0,0,1,0,.588Z" fill="#080808" />
                        <path id="Subtraction_53" data-name="Subtraction 53" d="M5.175,10.35A5.176,5.176,0,0,1,3.161.407,5.176,5.176,0,0,1,7.189,9.943,5.145,5.145,0,0,1,5.175,10.35ZM4.058,3.862a.321.321,0,1,0,0,.643H5.12a.96.96,0,0,1-.411.387,1.406,1.406,0,0,1-.652.156.346.346,0,0,0-.3.185.325.325,0,0,0,.049.346L5.553,7.592A.31.31,0,0,0,5.8,7.7a.332.332,0,0,0,.21-.075.308.308,0,0,0,.111-.21.337.337,0,0,0-.073-.246L4.688,5.591A1.556,1.556,0,0,0,5.8,4.492H6.4a.321.321,0,0,0,0-.643H5.762A1.529,1.529,0,0,0,5.528,3.4h.9a.309.309,0,0,0,.3-.309A.326.326,0,0,0,6.4,2.775H4.058a.321.321,0,1,0,0,.643,1.229,1.229,0,0,1,.988.445Z" transform="translate(7.245 9.15)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PaymentReceipt">
            {props.tooltip ? props.tooltip : 'Payment Receipt'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const VisitProof = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="VisitProof" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="visit-proof-icn-16" transform="translate(4669 -20425)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="24" height="24" rx="4" transform="translate(-4669 20425)" fill="none" />
                    <g id="visit-proof-icn" transform="translate(-4665.25 20426.498)">
                        <path id="Path_50638" data-name="Path 50638" d="M36.587,27.336v-8.07H44.3l-2.571-2.754L44.3,13.759H36.587V11.338a.453.453,0,0,0-.905,0v16a2.3,2.3,0,1,0,.905,0Zm-.452,3.647h0a1.394,1.394,0,1,1,1.393-1.394,1.393,1.393,0,0,1-1.393,1.394Z" transform="translate(-29.785 -10.886)" />
                        <path id="Path_50639" data-name="Path 50639" d="M58.736,76.328a1.133,1.133,0,1,0,1.134,1.134,1.132,1.132,0,0,0-1.134-1.134Z" transform="translate(-47.17 -58.759)" />
                        <path id="Path_50640" data-name="Path 50640" d="M73.94,76.328a1.133,1.133,0,1,0,1.133,1.134,1.133,1.133,0,0,0-1.133-1.134Z" transform="translate(-58.292 -58.759)" />
                        <path id="Path_50641" data-name="Path 50641" d="M19.877,76.328a1.133,1.133,0,1,0,1.134,1.134,1.132,1.132,0,0,0-1.134-1.134Z" transform="translate(-18.744 -58.759)" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="VisitProof">
            {props.tooltip ? props.tooltip : 'Visit Proof'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const Shop = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="Shop" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="sample-collected-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="np_shop_4364620_000000" transform="translate(88.277 114.75)">
                        <path id="Path_50643" data-name="Path 50643" d="M22.749,21.516H18.036A2.053,2.053,0,0,0,16,23.329l-.724,6.158a2.053,2.053,0,0,0,2.039,2.293h6.161a2.053,2.053,0,0,0,2.039-2.293l-.724-6.158a2.053,2.053,0,0,0-2.039-1.813Zm-4.712-.684a2.737,2.737,0,0,0-2.718,2.417l-.724,6.158a2.737,2.737,0,0,0,2.718,3.057h6.161a2.737,2.737,0,0,0,2.718-3.057l-.724-6.158a2.737,2.737,0,0,0-2.718-2.417Z" transform="translate(0.148 -12.214)" fill="#080808" fill-rule="evenodd" />
                        <path id="Path_50644" data-name="Path 50644" d="M36.069,6.934a2.053,2.053,0,0,0-2.053,2.053v1.368a.342.342,0,0,1-.684,0V8.987a2.737,2.737,0,0,1,5.474,0v1.368a.342.342,0,0,1-.684,0V8.987a2.053,2.053,0,0,0-2.053-2.053Z" transform="translate(-15.553)" fill="#080808" fill-rule="evenodd" />
                        <path id="Subtraction_83" data-name="Subtraction 83" d="M2.34,4.688a.462.462,0,0,1-.461-.461V2.8H.46A.459.459,0,0,1,0,2.342a.462.462,0,0,1,.461-.461H1.88V.461a.461.461,0,0,1,.923,0l0,1.42H4.224a.461.461,0,0,1,0,.922H2.8V4.227A.462.462,0,0,1,2.34,4.688Z" transform="translate(18.184 12.25)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Shop">
            {props.tooltip ? props.tooltip : 'Shop'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const EditOrder = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick} id="EditOrder" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="sample-collected-icn-16" transform="translate(-101 -120)">
                    <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(101 120)" fill="none" />
                    <g id="np_shop_4364620_000000" transform="translate(88.277 114.75)">
                        <path id="Path_50643" data-name="Path 50643" d="M22.749,21.516H18.036A2.053,2.053,0,0,0,16,23.329l-.724,6.158a2.053,2.053,0,0,0,2.039,2.293h6.161a2.053,2.053,0,0,0,2.039-2.293l-.724-6.158a2.053,2.053,0,0,0-2.039-1.813Zm-4.712-.684a2.737,2.737,0,0,0-2.718,2.417l-.724,6.158a2.737,2.737,0,0,0,2.718,3.057h6.161a2.737,2.737,0,0,0,2.718-3.057l-.724-6.158a2.737,2.737,0,0,0-2.718-2.417Z" transform="translate(0.148 -12.582)" fill="#080808" fill-rule="evenodd" />
                        <path id="Path_50644" data-name="Path 50644" d="M36.069,6.934a2.053,2.053,0,0,0-2.053,2.053v1.368a.342.342,0,0,1-.684,0V8.987a2.737,2.737,0,0,1,5.474,0v1.368a.342.342,0,0,1-.684,0V8.987a2.053,2.053,0,0,0-2.053-2.053Z" transform="translate(-15.553)" fill="#080808" fill-rule="evenodd" />
                        <path id="Union_182" data-name="Union 182" d="M-898.194-7974.653a.4.4,0,0,1-.07-.339l.354-1.412a.321.321,0,0,1,.086-.152l2.85-2.85a1.154,1.154,0,0,1,.805-.345h.01a1.125,1.125,0,0,1,.8.333,1.144,1.144,0,0,1,.33.811,1.139,1.139,0,0,1-.344.805l-2.852,2.852a.345.345,0,0,1-.15.086l-1.412.353a.4.4,0,0,1-.094.012A.4.4,0,0,1-898.194-7974.653Zm.669-.6.481-.12-.358-.36Zm.423-1.1.679.679,2.009-2.009-.679-.679Zm2.591-2.589-.12.118.679.679.12-.118a.485.485,0,0,0,.14-.341.476.476,0,0,0-.14-.338.475.475,0,0,0-.34-.142A.471.471,0,0,0-894.511-7978.943Z" transform="translate(916 7991.5)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="EditOrder">
            {props.tooltip ? props.tooltip : 'Edit Order'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PaymentStatus = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="PaymentStatus" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="payment-status-icn-16" transform="translate(4669 -20425)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="16" height="16" rx="4" transform="translate(-4669 20425)" fill="none" />
                    <g id="payment-status-icn" transform="translate(-5692.351 19783)">
                        <g id="payment-status-icn-2" data-name="payment-status-icn" transform="translate(1014.922 637)">
                            <path id="Path_50633" data-name="Path 50633" d="M77.794,29.734a.381.381,0,0,0,.181-.045.386.386,0,0,0,.16-.523,6.414,6.414,0,0,0-.68-1.028.387.387,0,1,0-.6.487,5.654,5.654,0,0,1,.6.9.384.384,0,0,0,.341.206Z" transform="translate(-56.08 -18.496)" />
                            <path id="Path_50634" data-name="Path 50634" d="M85.726,49.519a10.323,10.323,0,0,0,0-1.232.387.387,0,1,0-.769.075c.017.181.018.907,0,1.084a.387.387,0,0,0,.348.422.416.416,0,0,0,.421-.349Z" transform="translate(-62.964 -35.266)" />
                            <path id="Path_50635" data-name="Path 50635" d="M59.047,85.445a.387.387,0,0,0,.369.269,9.129,9.129,0,0,0,1.25-.506.387.387,0,0,0-.373-.677,5.548,5.548,0,0,1-.994.428.387.387,0,0,0-.252.487Z" transform="translate(-41.163 -65.996)" />
                            <path id="Path_50636" data-name="Path 50636" d="M76.955,70.749a.387.387,0,0,0,.544-.058,6.377,6.377,0,0,0,.678-1.03.387.387,0,1,0-.684-.361,5.617,5.617,0,0,1-.6.9.387.387,0,0,0,.058.544Z" transform="translate(-56.116 -53.057)" />
                            <path id="Path_50637" data-name="Path 50637" d="M16.435,20a.387.387,0,0,0,0-.773,5.584,5.584,0,0,1-1.642-10.92,1.77,1.77,0,0,0,3.365.025,5.556,5.556,0,0,1,.962.415.387.387,0,1,0,.372-.678,5.186,5.186,0,0,0-1.255-.5,1.769,1.769,0,0,0-3.512-.027.365.365,0,0,0-.121.015A6.357,6.357,0,0,0,16.435,20Zm.044-13.227a1,1,0,1,1-1,1A1,1,0,0,1,16.479,6.773Z" />
                        </g>
                        <path id="rupee-icn" d="M16.4,11.9a.412.412,0,0,0-.4-.4H13.048a.4.4,0,1,0,0,.808,1.549,1.549,0,0,1,1.242.559H13.048a.4.4,0,1,0,0,.808h1.336a1.506,1.506,0,0,1-1.336.683.433.433,0,0,0-.372.233.408.408,0,0,0,.062.435l2.19,2.532a.39.39,0,0,0,.311.14A.419.419,0,0,0,15.5,17.6a.413.413,0,0,0,.047-.574L13.84,15.037a1.962,1.962,0,0,0,1.4-1.382H16a.4.4,0,0,0,0-.808h-.807a1.94,1.94,0,0,0-.295-.559H16a.389.389,0,0,0,.4-.388Z" transform="translate(1016.83 636.406)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PaymentStatus">
            {props.tooltip ? props.tooltip : 'Payment Status'}
        </UncontrolledTooltip>
    </React.Fragment>
}


export const ReAssign = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="ReAssign" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="re-assign-icn-16" transform="translate(4537 -20426)">
                    <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none" />
                    <path id="Subtraction_73" data-name="Subtraction 73" d="M4.113,5.513a2.8,2.8,0,0,0,0-5.6,2.8,2.8,0,0,0,0,5.6Zm0-4.9a2.1,2.1,0,0,1,0,4.2,2.1,2.1,0,0,1,0-4.2Zm1.281,12.6a4.1,4.1,0,0,0,.854.7H1.663a1.751,1.751,0,0,1-1.75-1.75v-4.2a1.751,1.751,0,0,1,1.75-1.75H6.248a4.1,4.1,0,0,0-.854.7H1.663a1.049,1.049,0,0,0-1.05,1.05v4.2a1.049,1.049,0,0,0,1.05,1.05Zm3.269-7a3.85,3.85,0,0,0,0,7.7A3.85,3.85,0,0,0,8.663,6.213Zm0,7a3.15,3.15,0,1,1,3.122-3.15A3.15,3.15,0,0,1,8.663,13.213Z" transform="translate(-4535.413 20427.088)" fill="#080808" />
                    <path id="Union_173" data-name="Union 173" d="M1.035,3.848A2.076,2.076,0,0,1,0,2.056a.191.191,0,0,1,.382,0,1.7,1.7,0,0,0,.489,1.2,1.672,1.672,0,0,0,1.192.5h.006a1.675,1.675,0,0,0,1.189-.49,1.7,1.7,0,0,0,.5-1.192A1.677,1.677,0,0,0,3.262.875,1.687,1.687,0,0,0,.948.807L1,.791a.188.188,0,0,1,.235.131.186.186,0,0,1-.017.144.194.194,0,0,1-.114.091l-.614.174H.475a.275.275,0,0,1-.3-.243.048.048,0,0,1,0-.022V1.051L.265.419A.189.189,0,0,1,.449.271a.167.167,0,0,1,.027,0,.189.189,0,0,1,.165.2V.478L.625.584A2.083,2.083,0,0,1,1.95,0l.117,0A2.061,2.061,0,0,1,3.1,3.848a2.068,2.068,0,0,1-2.069,0Z" transform="translate(-4528.813 20435.188)" fill="#080808" />
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="ReAssign">
            {props.tooltip ? props.tooltip : 'Re Assign'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const ShowPrescription = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="ShowPrescription" class="btn-sm btn icon-hover">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="prescription-show-icn-16" transform="translate(4625 -20426)">
                    <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none" />
                    <g id="prescription-show-icn" transform="translate(-4623 20427)">
                        <path id="Subtraction_55" data-name="Subtraction 55" d="M8.994,14H1.621A1.622,1.622,0,0,1,0,12.38V2.392A1.622,1.622,0,0,1,1.621.772h.65L2.28.729A.93.93,0,0,1,3.182,0H7.431a.928.928,0,0,1,.9.729l.009.043h.65a1.623,1.623,0,0,1,1.622,1.621v3.1a.334.334,0,0,1-.669,0l0-3.1a.954.954,0,0,0-.953-.952H8.356v.439a.334.334,0,0,1-.334.334H2.593a.334.334,0,0,1-.334-.334V1.442H1.621a.954.954,0,0,0-.953.952v9.987a.954.954,0,0,0,.953.953H8.994a.954.954,0,0,0,.953-.953l0-3.468a.334.334,0,1,1,.669,0l0,3.467A1.623,1.623,0,0,1,8.994,14ZM3.182.669a.255.255,0,0,0-.255.255v.624h4.76V.923A.255.255,0,0,0,7.433.669Z" transform="translate(0 0)" fill="#080808" />
                        <path id="Subtraction_59" data-name="Subtraction 59" d="M4.193.668H.249C.112.668,0,.518,0,.334S.112,0,.249,0H4.193a.221.221,0,0,1,.177.1.393.393,0,0,1,.073.236C4.442.518,4.33.668,4.193.668Z" transform="translate(1.718 6.974)" fill="#080808" />
                        <path id="Subtraction_57" data-name="Subtraction 57" d="M3.34.668H.334A.334.334,0,1,1,.334,0H3.34a.334.334,0,1,1,0,.668Z" transform="translate(1.718 10.074)" fill="#080808" />
                        <path id="Subtraction_58" data-name="Subtraction 58" d="M4.184.668H.257A.3.3,0,0,1,0,.334.3.3,0,0,1,.257,0H4.184a.3.3,0,0,1,.258.334A.3.3,0,0,1,4.184.668Z" transform="translate(1.718 8.534)" fill="#080808" />
                        <path id="Subtraction_60" data-name="Subtraction 60" d="M1.338,2.68A.335.335,0,0,1,1,2.346V1.673H.333A.333.333,0,0,1,0,1.339.335.335,0,0,1,.334,1H1V.334a.334.334,0,1,1,.668,0V1h.672a.334.334,0,1,1,0,.668H1.672v.673A.335.335,0,0,1,1.338,2.68Z" transform="translate(3.858 3.357)" fill="#080808" />
                        <path id="np_show_1548568_000000" d="M2.5,23a2.581,2.581,0,0,1-1.418-.449A5.029,5.029,0,0,1,.04,21.6a.166.166,0,0,1,0-.218,4.84,4.84,0,0,1,1.214-1.019A2.552,2.552,0,0,1,2.5,20a2.555,2.555,0,0,1,1.246.371,4.877,4.877,0,0,1,1.214,1.02.166.166,0,0,1,0,.218,5.044,5.044,0,0,1-1.04.942A2.582,2.582,0,0,1,2.5,23Zm0-2.366a.867.867,0,1,1-.866.866A.867.867,0,0,1,2.5,20.63Zm-1.237,1.64a2.257,2.257,0,0,0,1.237.394,2.257,2.257,0,0,0,1.237-.394,4.53,4.53,0,0,0,.875-.772,4.425,4.425,0,0,0-1.032-.841A2.219,2.219,0,0,0,2.5,20.33a2.218,2.218,0,0,0-1.079.326A4.423,4.423,0,0,0,.389,21.5a4.524,4.524,0,0,0,.874.772Z" transform="translate(7.75 -14.247)" />
                    </g>
                </g>
            </svg>

        </a>
        <UncontrolledTooltip placement="bottom" target="ShowPrescription">
            {props.tooltip ? props.tooltip : 'prescription Show'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const CustomerDashboard = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="CustomerDashboard" class="btn-sm btn icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="customer-dashboard-icn-16" transform="translate(4625 -20426)">
                    <rect id="Rectangle_12077" data-name="Rectangle 12077" width="16" height="16" rx="4" transform="translate(-4625 20426)" fill="none" />
                    <g id="customer-dashboard-icn" transform="translate(-4630.109 20409.203)">
                        <path id="Path_50777" data-name="Path 50777" d="M22.428,22.537a2.555,2.555,0,0,1-.022.322l.017-.119a2.357,2.357,0,0,1-.1.426c-.011.033-.023.065-.036.1s-.01.025.022-.053c-.008.019-.017.038-.025.056-.031.068-.067.134-.1.2s-.072.115-.111.171c-.067.095.07-.088,0,0-.025.032-.052.062-.078.093a2.3,2.3,0,0,1-.311.29l.095-.074a2.386,2.386,0,0,1-.509.3l.115-.048a2.326,2.326,0,0,1-.583.158l.124-.016a2.358,2.358,0,0,1-.622,0l.119.017a2.345,2.345,0,0,1-.426-.1c-.033-.011-.065-.023-.1-.036s-.025-.01.053.022l-.056-.025c-.068-.031-.134-.067-.2-.1s-.115-.072-.171-.111c-.095-.067.088.07,0,0-.032-.025-.062-.052-.093-.078a2.3,2.3,0,0,1-.29-.311l.074.1a2.387,2.387,0,0,1-.3-.509l.048.115a2.326,2.326,0,0,1-.158-.583c.006.041.011.082.016.124a2.358,2.358,0,0,1,0-.622l-.017.119a2.345,2.345,0,0,1,.1-.426c.011-.033.023-.065.036-.1s.01-.025-.022.053c.008-.019.017-.038.025-.056.031-.068.067-.134.1-.2s.072-.115.111-.171c.067-.095-.07.088,0,0,.025-.032.052-.062.078-.093a2.3,2.3,0,0,1,.311-.29l-.1.074a2.386,2.386,0,0,1,.509-.3l-.115.048a2.325,2.325,0,0,1,.583-.158l-.124.016a2.358,2.358,0,0,1,.622,0l-.119-.017a2.345,2.345,0,0,1,.426.1c.033.011.065.023.1.036s.025.01-.053-.022l.056.025c.068.031.134.067.2.1s.115.072.171.111c.095.067-.088-.07,0,0,.032.025.062.052.093.078a2.3,2.3,0,0,1,.29.311l-.074-.1a2.386,2.386,0,0,1,.3.509l-.048-.115a2.326,2.326,0,0,1,.158.583c-.006-.041-.011-.082-.016-.124a2.443,2.443,0,0,1,.019.3.464.464,0,1,0,.928.007,2.761,2.761,0,0,0-.963-2.09,2.729,2.729,0,0,0-2.328-.6,2.74,2.74,0,0,0-2.022,3.655,2.734,2.734,0,0,0,1.7,1.638,2.745,2.745,0,0,0,3.616-2.6.464.464,0,0,0-.928-.007Z" transform="translate(-9.896 0)" fill="#080808" />
                        <path id="Path_50778" data-name="Path 50778" d="M15.319,53.526A4.6,4.6,0,0,0,13.276,49.7,4.6,4.6,0,0,0,9,49.253a4.6,4.6,0,0,0-2.78,3.279,4.733,4.733,0,0,0-.108.987.468.468,0,0,0,.46.467h8.283a.464.464,0,0,0,.006-.928H6.576l.46.467a4.3,4.3,0,0,1,.04-.578l-.017.119a4.221,4.221,0,0,1,.184-.77c.02-.059.041-.116.064-.174l.015-.038c.032-.077-.047.111-.014.034.014-.032.027-.062.041-.093a3.92,3.92,0,0,1,.189-.361c.065-.111.135-.218.21-.323l.048-.066-.035.046.037-.048c.042-.053.085-.1.129-.155a4.149,4.149,0,0,1,.572-.54l-.095.074a4.209,4.209,0,0,1,.945-.553l-.115.048a4.163,4.163,0,0,1,1.062-.285l-.124.016a4.248,4.248,0,0,1,1.113.006l-.119-.017a4.221,4.221,0,0,1,.77.184c.059.02.116.041.174.064l.038.015-.034-.014.093.041a3.919,3.919,0,0,1,.361.189c.111.065.218.135.323.21l.066.048-.046-.035.048.037c.053.042.1.085.155.13a4.149,4.149,0,0,1,.54.572l-.074-.1a4.209,4.209,0,0,1,.553.945l-.048-.115a4.166,4.166,0,0,1,.285,1.062c-.006-.041-.011-.082-.016-.124a4.44,4.44,0,0,1,.035.536.464.464,0,0,0,.929.007Z" transform="translate(0 -24.512)" fill="#080808" />
                        <path id="Path_50779" data-name="Path 50779" d="M60.405,28.634h4.554a.464.464,0,1,0,.007-.928H60.412a.464.464,0,1,0-.007.928Z" transform="translate(-45.318 -6.657)" fill="#080808" />
                        <path id="Path_50780" data-name="Path 50780" d="M65.37,48.361h3.768a.464.464,0,0,0,.007-.928H65.377a.464.464,0,1,0-.007.928Z" transform="translate(-49.497 -23.263)" fill="#080808" />
                        <path id="Path_50781" data-name="Path 50781" d="M75.292,68.084h2.2a.464.464,0,0,0,.007-.928H75.3a.464.464,0,1,0-.007.928Z" transform="translate(-57.849 -39.865)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="CustomerDashboard">
            {props.tooltip ? props.tooltip : 'Customer Dashboard'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PaymentFailed = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="PaymentFailed" class="btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="payment-failed-icn-24" transform="translate(-367 -521)">
          <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 521)" fill="#f5d0b7"/>
          <g id="prescription-icn-32" transform="translate(4908 -19901)">
            <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none"/>
            <g id="np_card-denied_5449793_000000" transform="translate(-4548.499 20404)">
              <path id="Path_51225" data-name="Path 51225" d="M24.457,25H14.541A2.044,2.044,0,0,0,12.5,27.041v2.042a.583.583,0,0,0,1.167,0v-.2H25.332v3.7a.875.875,0,0,1-.875.875H18.041a.583.583,0,1,0,0,1.167h6.417A2.044,2.044,0,0,0,26.5,32.583V27.041A2.044,2.044,0,0,0,24.457,25ZM13.666,27.716v-.675a.875.875,0,0,1,.875-.875h9.917a.875.875,0,0,1,.875.875v.675Z" transform="translate(0)"/>
              <path id="Path_51226" data-name="Path 51226" d="M13.826,58.211l1.046-1.045,1.046,1.046a.583.583,0,0,0,.825-.825L15.7,56.342,16.743,55.3h0a.583.583,0,0,0-.825-.825l-1.046,1.046-1.046-1.046h0A.583.583,0,1,0,13,55.3l1.045,1.045L13,57.387a.583.583,0,1,0,.825.825Z" transform="translate(-0.264 -23.825)"/>
              <path id="Path_51227" data-name="Path 51227" d="M66.4,54.292a1.167,1.167,0,1,1-1.167-1.167A1.166,1.166,0,0,1,66.4,54.292" transform="translate(-41.938 -22.876)"/>
            </g>
          </g>
        </g>
      </svg>      
        </a>
        <UncontrolledTooltip placement="bottom" target="PaymentFailed">
            {props.tooltip ? props.tooltip : 'Payment Failed'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PrescriptionRequired = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="PrescriptionRequired" class="btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="prescription-required-icn-24" transform="translate(-396 -484)">
            <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(396 484)" fill="#a7ccf8"/>
            <g id="prescription-icn-32" transform="translate(4937 -19938)">
            <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none"/>
            <path id="Subtraction_65" data-name="Subtraction 65" d="M7.166,12a.712.712,0,0,1-.481-.191L5.14,10.345,3.591,11.809A.7.7,0,0,1,3.109,12a.712.712,0,0,1-.481-.191.618.618,0,0,1-.2-.454.628.628,0,0,1,.2-.454L4.184,9.443l-2.83-2.67V9.825a.624.624,0,0,1-.2.454.7.7,0,0,1-.481.186H.664A.7.7,0,0,1,.2,10.279.623.623,0,0,1,0,9.825V.638A.619.619,0,0,1,.2.186.69.69,0,0,1,.675,0H3.109a3.162,3.162,0,0,1,2.7,1.469,2.81,2.81,0,0,1,0,2.934,3.162,3.162,0,0,1-2.7,1.469h-.8l2.83,2.67L6.684,7.073a.7.7,0,0,1,.481-.186.68.68,0,0,1,.179.022.658.658,0,0,1,.481.454.618.618,0,0,1-.175.618L6.094,9.443,7.651,10.9a.637.637,0,0,1,.2.454.618.618,0,0,1-.2.454A.7.7,0,0,1,7.166,12ZM1.355,1.278h0V4.593H3.109a1.776,1.776,0,0,0,1.521-.831,1.572,1.572,0,0,0,0-1.655,1.778,1.778,0,0,0-1.521-.828Z" transform="translate(-4533 20428)" fill="#080808"/>
            </g>
        </g>
        </svg>   
        </a>
        <UncontrolledTooltip placement="bottom" target="PrescriptionRequired">
            {props.tooltip ? props.tooltip : 'Prescription Required'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const EprescriptionOrder = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="EprescriptionOrder" class="btn-sm btn icon-hover">                
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="e-prescription-order-icn-24" transform="translate(-367 -484)">
        <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#adddd4"/>
        <g id="prescription-icn-32" transform="translate(4908 -19938)">
            <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none"/>
            <g id="prescription-icn" transform="translate(-4534.501 20427)">
            <path id="Subtraction_64" data-name="Subtraction 64" d="M10.775,13.074H.395A.395.395,0,0,1,0,12.679V.395A.395.395,0,0,1,.395,0H2.282a.394.394,0,1,1,0,.789H.789v11.5h9.592V.789H8.888a.394.394,0,0,1,0-.789h1.887a.395.395,0,0,1,.395.395V12.679a.395.395,0,0,1-.395.395Z" transform="translate(0 0.927)" fill="#080808"/>
            <path id="Subtraction_66" data-name="Subtraction 66" d="M4.711,3.024H.444A.446.446,0,0,1,0,2.58V.444A.444.444,0,0,1,.444,0H4.711a.444.444,0,0,1,.447.444V2.58a.446.446,0,0,1-.447.444ZM.891.891h0V2.134H4.267V.891Z" transform="translate(3.001)" fill="#080808"/>
            <path id="Subtraction_65" data-name="Subtraction 65" d="M3.8,6.36a.377.377,0,0,1-.255-.1l-.819-.776L1.9,6.259a.369.369,0,0,1-.255.1.377.377,0,0,1-.255-.1.328.328,0,0,1-.107-.241.333.333,0,0,1,.107-.241l.825-.773L.718,3.59V5.207a.331.331,0,0,1-.1.241.369.369,0,0,1-.255.1H.352a.372.372,0,0,1-.247-.1A.33.33,0,0,1,0,5.207V.338A.328.328,0,0,1,.105.1.366.366,0,0,1,.358,0h1.29a1.676,1.676,0,0,1,1.43.779,1.489,1.489,0,0,1,0,1.555,1.676,1.676,0,0,1-1.43.779H1.224l1.5,1.415.819-.779a.369.369,0,0,1,.255-.1.361.361,0,0,1,.095.012.349.349,0,0,1,.255.241.328.328,0,0,1-.093.328l-.825.775.825.773a.338.338,0,0,1,.105.241.328.328,0,0,1-.107.241A.369.369,0,0,1,3.8,6.36ZM.718.678h0V2.435h.93a.941.941,0,0,0,.806-.441.833.833,0,0,0,0-.877A.943.943,0,0,0,1.648.678Z" transform="translate(3.501 4.725)" fill="#080808"/>
            </g>
        </g>
        </g>
        </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="EprescriptionOrder">
            {props.tooltip ? props.tooltip : 'Eprescription Order'}
        </UncontrolledTooltip>
    </React.Fragment>
}



export const BackOrder = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="BackOrder" class="btn-sm btn icon-hover">                
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="back-order-icn-24" transform="translate(-367 -484)">
          <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#a7b2f8"/>
          <g id="backorder-icn-24" transform="translate(-706 -236)">
            <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(1077 724)" fill="none"/>
            <g id="backorder-icn" transform="translate(1078.75 725)">
              <path id="back" d="M8.442,2.646a2.673,2.673,0,0,0-.218-.735,3.06,3.06,0,0,0-.417-.662A3.831,3.831,0,0,0,7.213.67,4.885,4.885,0,0,0,6.465.187l.164,1.14h0a1.643,1.643,0,0,1,.193.215,1.806,1.806,0,0,1,.157.25,1.928,1.928,0,0,1,.118.278,1.989,1.989,0,0,1,.075.3,1.737,1.737,0,0,1-.154.985,2.624,2.624,0,0,1-.682.872,4.116,4.116,0,0,1-1.1.667,5.394,5.394,0,0,1-1.42.368h0q-.109.013-.218.022T3.376,5.3q-.11,0-.22.005t-.221,0l-.2-1.417a.283.283,0,0,0-.018-.066.263.263,0,0,0-.032-.057.229.229,0,0,0-.043-.045.192.192,0,0,0-.052-.029.164.164,0,0,0-.056-.01.154.154,0,0,0-.054.01.163.163,0,0,0-.048.028.19.19,0,0,0-.039.045L.826,6.318h0a.222.222,0,0,0-.018.038A.247.247,0,0,0,.8,6.4a.269.269,0,0,0,0,.044.287.287,0,0,0,.013.09.275.275,0,0,0,.017.041.254.254,0,0,0,.023.037.228.228,0,0,0,.028.032L3.1,8.736h0a.2.2,0,0,0,.05.035.171.171,0,0,0,.054.016.153.153,0,0,0,.054,0,.156.156,0,0,0,.051-.023.181.181,0,0,0,.042-.041.216.216,0,0,0,.029-.054A.253.253,0,0,0,3.4,8.6a.279.279,0,0,0,0-.068l-.19-1.323a8.5,8.5,0,0,0,2.217-.6A6.464,6.464,0,0,0,7.145,5.56,4.123,4.123,0,0,0,8.2,4.189a2.743,2.743,0,0,0,.238-1.544Z" transform="translate(3.906 4.034)" fill="#080808"/>
              <g id="backorder-icn-2" data-name="backorder-icn" transform="translate(0 0)">
                <path id="Path_50643" data-name="Path 50643" d="M22.749,21.516H18.036A2.053,2.053,0,0,0,16,23.329l-.724,6.158a2.053,2.053,0,0,0,2.039,2.293h6.161a2.053,2.053,0,0,0,2.039-2.293l-.724-6.158a2.053,2.053,0,0,0-2.039-1.813Zm-4.712-.684a2.737,2.737,0,0,0-2.718,2.417l-.724,6.158a2.737,2.737,0,0,0,2.718,3.057h6.161a2.737,2.737,0,0,0,2.718-3.057l-.724-6.158a2.737,2.737,0,0,0-2.718-2.417Z" transform="translate(-14.575 -18.832)" fill="#080808" fill-rule="evenodd"/>
                <path id="Path_50644" data-name="Path 50644" d="M36.069,6.934a2.053,2.053,0,0,0-2.053,2.053v1.368a.342.342,0,0,1-.684,0V8.987a2.737,2.737,0,0,1,5.474,0v1.368a.342.342,0,0,1-.684,0V8.987a2.053,2.053,0,0,0-2.053-2.053Z" transform="translate(-30.276 -6.25)" fill="#080808" fill-rule="evenodd"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="BackOrder">
            {props.tooltip ? props.tooltip : 'Back Order'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const Unsubscribe = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="Unsubscribe" class={`btn-sm btn icon-hover ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="unsubscribe-icn-16" transform="translate(4537 -20426)">
        <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none"/>
        <g id="unsubscribe_icn" transform="translate(-4536.333 20428)">
            <path id="Subtraction_87" data-name="Subtraction 87" d="M11.081,12.008h0A3.32,3.32,0,0,1,10,11.833a3.54,3.54,0,0,1-1.7-1.271c-.036-.047-.066-.091-.091-.131l-.024-.039H1.351a1.564,1.564,0,0,1-.768-.148A1.158,1.158,0,0,1,0,9.232V1.194A1.2,1.2,0,0,1,.309.363,1.151,1.151,0,0,1,1.174,0H11.747a1.167,1.167,0,0,1,1.142,1.142.279.279,0,0,1,0,.051v4.5l.039.024a3.58,3.58,0,0,1,.938.891A3.385,3.385,0,0,1,14.5,8.574v.019a3.8,3.8,0,0,1-.046.54,3.43,3.43,0,0,1-2.414,2.741A3.473,3.473,0,0,1,11.081,12.008Zm-1.57-5.52h0a.259.259,0,0,0-.076.061L9.4,6.57l0,.012c-.056.05-.111.1-.167.157a2.1,2.1,0,0,0-.184.2l0,0s-.021.024-.034.042l0,0,0,.005L9,7l-.008.01,0,.006c-.025.036-.045.064-.062.092a3.275,3.275,0,0,0-.262.478,3.033,3.033,0,0,0-.175.647,3.1,3.1,0,0,0,0,.712v0a3.1,3.1,0,0,0,.18.652,2.911,2.911,0,0,0,.279.5l.032.045L9,10.183l.055.07c.06.071.124.142.193.209s.136.124.2.175a.336.336,0,0,0,.059.046c.036.027.072.052.117.082a3.1,3.1,0,0,0,.458.249l0,0a3.094,3.094,0,0,0,.632.171l0,0a3.337,3.337,0,0,0,.367.02,3.108,3.108,0,0,0,.348-.019,3.237,3.237,0,0,0,.657-.18l0,0a3.236,3.236,0,0,0,.469-.257c.052-.036.093-.064.124-.088a.078.078,0,0,0,.016-.012l.009,0,.019-.019c.073-.064.139-.125.2-.186s.119-.123.183-.2l0,0,.009-.012.008-.01.016-.021,0,0,0,0h0l.017-.021c.017-.027.033-.05.048-.071l.019-.026a3.293,3.293,0,0,0,.26-.478l0,0a3.016,3.016,0,0,0,.171-.633V8.95c.012-.129.019-.249.019-.359a3.725,3.725,0,0,0-.019-.381V8.2a3.1,3.1,0,0,0-.173-.625,3.5,3.5,0,0,0-.253-.46c-.008-.013-.016-.023-.023-.033l-.012-.016-.01-.016L13.2,7.036,13.173,7A.013.013,0,0,1,13.167,7l-.013-.016a.056.056,0,0,0-.01-.013,2.832,2.832,0,0,0-.188-.213l-.017-.016c-.059-.057-.127-.123-.2-.181l-.05-.042-.006,0-.034-.024-.056-.04c-.075-.052-.164-.1-.272-.164a1.985,1.985,0,0,0-.2-.1l-.011-.005-.006,0L12.1,6.172l-.014-.006-.005,0-.009,0h-.012l-.016-.006a2.949,2.949,0,0,0-.538-.146c-.011,0-.022,0-.033-.006l-.032-.006h-.022l-.048-.006h0v0l-.018,0-.1-.006h-.066a.462.462,0,0,0-.052,0H10.96c-.05,0-.1,0-.155.009v0l-.006,0-.021,0-.02,0h-.021l-.029,0-.017,0-.02,0v0a3.1,3.1,0,0,0-.531.142h0a.16.16,0,0,0-.031.012.038.038,0,0,1-.012.006l-.012,0-.008,0-.006,0,0,0-.008,0,0,0,0,0h0l0,0-.006,0-.021.01a3.307,3.307,0,0,0-.4.229l-.062.042-.017.013,0,0c-.006,0-.008,0-.01,0v0ZM1.083,9.6h0l.087.013V9.6H7.814l-.027-.1c-.028-.106-.051-.215-.069-.325a.168.168,0,0,0,0-.026v0a.039.039,0,0,1,0-.01v0a3.782,3.782,0,0,1-.01-.988,3.28,3.28,0,0,1,.633-1.566A3.534,3.534,0,0,1,9.92,5.381c.056-.021.111-.041.188-.065l.012,0a3.413,3.413,0,0,1,.949-.133,3.549,3.549,0,0,1,.914.12l.105.028V1.154H12.1l0-.033a.041.041,0,0,1,0-.013V1.09h-.043l.026-.013.016,0v0l0-.008,0,0,0-.006-.005-.013-.009-.018a.127.127,0,0,0-.035-.077l0,0a.189.189,0,0,0-.04-.047.27.27,0,0,0-.043-.039l0,0,0,0A.129.129,0,0,0,11.871.82l-.013,0V.81A.1.1,0,0,0,11.834.8l-.009,0-.009,0-.007,0,0,.008L11.754.794l-.017,0-.018,0V.8H1.413c-.03,0-.062,0-.1,0H1.145V.793H1.137A.215.215,0,0,1,1.1.8l-.01,0h-.01l0-.007L1.066.8l0,0L1.056.8l-.005,0H1.038v0L1.021.82A.111.111,0,0,0,.955.846L.944.854.936.861A.213.213,0,0,0,.9.895a.228.228,0,0,0-.04.043l0,.006v0a.146.146,0,0,0-.032.071l0,.009-.007,0,0,.006a.088.088,0,0,0,0,.019.006.006,0,0,0,0,0l0,.006v0l0,.011.007,0C.8,1.1.8,1.109.8,1.123v.007c0,.013,0,.027-.005.04H.8c0,.156,0,.312,0,.463V1.8c0,.106,0,.216,0,.322V9.125q0,.062,0,.129l-.009,0,0,.008,0,.031,0,.023H.8l0,.013,0,0,0,.01v.006l0,.008h0a.073.073,0,0,0,0,.012l0,0a.121.121,0,0,0,.03.07l0,.006.007.009A.223.223,0,0,0,.9,9.5a.291.291,0,0,0,.039.036l.008.006a.149.149,0,0,0,.075.033l.013,0v.006a.06.06,0,0,0,.026,0l0,0,.013,0,.007,0,0-.007ZM12.21,8.99H9.957a.411.411,0,0,1-.4-.4.363.363,0,0,1,.106-.265.419.419,0,0,1,.294-.131H12.21a.41.41,0,0,1,.4.4.361.361,0,0,1-.106.266A.419.419,0,0,1,12.21,8.99Z" transform="translate(0)"/>
            <path id="Path_51229" data-name="Path 51229" d="M24.836,25.476l-.545.329L21.9,27.249l-1.515.914a.482.482,0,0,1-.489,0c-.182-.115-.364-.227-.547-.342l-2.4-1.5-1.507-.941a.484.484,0,0,1,.49-.835c.182.115.364.227.547.342l2.4,1.5,1.267.792.3-.179,2.393-1.444,1.515-.914a.483.483,0,0,1,.487.835Z" transform="translate(-13.697 -22.689)"/>
            <path id="Path_51229_-_Outline" data-name="Path 51229 - Outline" d="M15.654,24.357a.529.529,0,0,1,.281.078l.293.183.254.159,2.368,1.479.031.019.633.4.591.369.028-.017.225-.136,1.1-.664,1.292-.78.563-.339.952-.575a.538.538,0,0,1,.277-.077.6.6,0,0,1,.5.277.523.523,0,0,1,.065.405.59.59,0,0,1-.265.372l-.221.133-.324.2-1.1.665-1.29.779-.563.34-.952.574a.563.563,0,0,1-.29.079.536.536,0,0,1-.286-.079l-.293-.183-.254-.159-2.368-1.479-.031-.019-.754-.471-.753-.47a.575.575,0,0,1-.2-.771A.56.56,0,0,1,15.654,24.357ZM20.1,27.235l-.043-.027-.634-.4-.633-.4-.031-.019-2.368-1.479-.254-.158-.293-.183a.362.362,0,0,0-.192-.052.4.4,0,0,0-.35.194.406.406,0,0,0,.141.551l.753.47.755.471.031.019,2.368,1.479.254.158.293.183a.369.369,0,0,0,.2.054.4.4,0,0,0,.2-.055l.952-.574.563-.34,1.29-.779,1.1-.665.326-.2.218-.132a.428.428,0,0,0,.189-.267.358.358,0,0,0-.043-.277.432.432,0,0,0-.357-.2.366.366,0,0,0-.191.053l-.952.575-.562.339-1.292.78-1.1.664-.225.136Z" transform="translate(-13.656 -22.647)" fill="#fff"/>
        </g>
        </g>
        </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="Unsubscribe">
            {props.tooltip ? props.tooltip : 'Unsubscribe'}
        </UncontrolledTooltip>
    </React.Fragment>
}

 
export const SaleNotAllowed = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="SaleNotAllowed" class="btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="sale-not-allowed-icn-24" transform="translate(-367 -484)">
          <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#e9a8b0"/>
          <g id="backorder-icn-24" transform="translate(-706 -236)">
            <rect id="Rectangle_10427" data-name="Rectangle 10427" width="16" height="16" rx="3" transform="translate(1077 724)" fill="none"/>
            <g id="backorder-icn" transform="translate(1078.75 725)">
              <g id="backorder-icn-2" data-name="backorder-icn" transform="translate(0.25 0)">
                <path id="Path_50643" data-name="Path 50643" d="M22.749,21.516H18.036A2.053,2.053,0,0,0,16,23.329l-.724,6.158a2.053,2.053,0,0,0,2.039,2.293h6.161a2.053,2.053,0,0,0,2.039-2.293l-.724-6.158a2.053,2.053,0,0,0-2.039-1.813Zm-4.712-.684a2.737,2.737,0,0,0-2.718,2.417l-.724,6.158a2.737,2.737,0,0,0,2.718,3.057h6.161a2.737,2.737,0,0,0,2.718-3.057l-.724-6.158a2.737,2.737,0,0,0-2.718-2.417Z" transform="translate(-14.575 -18.832)" fill="#080808" fill-rule="evenodd"/>
                <path id="Path_50644" data-name="Path 50644" d="M36.069,6.934a2.053,2.053,0,0,0-2.053,2.053v1.368a.342.342,0,0,1-.684,0V8.987a2.737,2.737,0,0,1,5.474,0v1.368a.342.342,0,0,1-.684,0V8.987a2.053,2.053,0,0,0-2.053-2.053Z" transform="translate(-30.276 -6.25)" fill="#080808" fill-rule="evenodd"/>
              </g>
              <path id="np_not-allowed_4519069_000000" d="M21,18a3,3,0,1,0,2.121.879A3,3,0,0,0,21,18Zm0,5.25a2.25,2.25,0,0,1-1.852-3.526l3.127,3.127a2.237,2.237,0,0,1-1.276.4Zm1.814-.921-3.144-3.144a2.25,2.25,0,0,1,3.144,3.144Z" transform="translate(-15 -12.5)"/>
            </g>
          </g>
        </g>
      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="SaleNotAllowed">
            {props.tooltip ? props.tooltip : 'Sale Not Allowed'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const InvoiceDownloadIcon = (props) => {
    return <React.Fragment>
        <a  href="javascript:void(0)" onClick={props.handleOnClick}  id="InvoiceDownloadIcon" class="btn-sm btn icon-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="invoice-icn-16" transform="translate(4713 -20426)">
          <rect id="Rectangle_12075" data-name="Rectangle 12075" width="24" height="24" rx="4" transform="translate(-4713 20426)" fill="none"/>
          <g id="invoice-icn" transform="translate(-4709.025 20427.352)">
            <path id="Path_50537" data-name="Path 50537" d="M221.128,557.826h.1a.25.25,0,1,0,0-.5h-.1a.25.25,0,1,0,0,.5Z" transform="translate(-219.321 -547.435)" fill="#080808"/>
            <path id="Path_50537_-_Outline" data-name="Path 50537 - Outline" d="M221.275,557.876a.25.25,0,1,0,0-.5h-.1a.25.25,0,0,0,0,.5h.1m0,.15h-.1a.4.4,0,1,1,0-.8h.1a.4.4,0,1,1,0,.8Z" transform="translate(-219.371 -547.485)" fill="#080808"/>
            <path id="Path_50538" data-name="Path 50538" d="M281.664,557.32h-.732a.25.25,0,1,0,0,.5h.732a.25.25,0,1,0,0-.5Z" transform="translate(-278.062 -547.429)" fill="#080808"/>
            <path id="Path_50538_-_Outline" data-name="Path 50538 - Outline" d="M280.982,557.37a.25.25,0,1,0,0,.5h.732a.25.25,0,0,0,0-.5h-.732m0-.15h.732a.4.4,0,1,1,0,.8h-.732a.4.4,0,1,1,0-.8Z" transform="translate(-278.112 -547.479)" fill="#080808"/>
            <path id="Path_50539" data-name="Path 50539" d="M382.576,557.32h-5.248a.25.25,0,1,0,0,.5h5.248a.25.25,0,0,0,0-.5Z" transform="translate(-372.743 -547.429)" fill="#080808"/>
            <path id="Path_50539_-_Outline" data-name="Path 50539 - Outline" d="M377.378,557.37a.25.25,0,1,0,0,.5h5.248a.25.25,0,0,0,0-.5h-5.248m0-.15h5.248a.4.4,0,1,1,0,.8h-5.248a.4.4,0,1,1,0-.8Z" transform="translate(-372.793 -547.479)" fill="#080808"/>
            <path id="Path_50540" data-name="Path 50540" d="M221.128,441.756h.1a.25.25,0,1,0,0-.5h-.1a.25.25,0,0,0,0,.5Z" transform="translate(-219.321 -433.429)" fill="#080808"/>
            <path id="Path_50540_-_Outline" data-name="Path 50540 - Outline" d="M221.275,441.806a.25.25,0,1,0,0-.5h-.1a.25.25,0,0,0,0,.5h.1m0,.15h-.1a.4.4,0,0,1,0-.8h.1a.4.4,0,1,1,0,.8Z" transform="translate(-219.371 -433.479)" fill="#080808"/>
            <path id="Path_50541" data-name="Path 50541" d="M281.664,441.25h-.732a.25.25,0,1,0,0,.5h.732a.25.25,0,1,0,0-.5Z" transform="translate(-278.062 -433.424)" fill="#080808"/>
            <path id="Path_50541_-_Outline" data-name="Path 50541 - Outline" d="M280.982,441.3a.25.25,0,1,0,0,.5h.732a.25.25,0,1,0,0-.5h-.732m0-.15h.732a.4.4,0,1,1,0,.8h-.732a.4.4,0,1,1,0-.8Z" transform="translate(-278.112 -433.474)" fill="#080808"/>
            <path id="Path_50542" data-name="Path 50542" d="M382.576,441.25h-5.248a.25.25,0,1,0,0,.5h5.248a.25.25,0,0,0,0-.5Z" transform="translate(-372.743 -433.424)" fill="#080808"/>
            <path id="Path_50542_-_Outline" data-name="Path 50542 - Outline" d="M377.378,441.3a.25.25,0,1,0,0,.5h5.248a.25.25,0,0,0,0-.5h-5.248m0-.15h5.248a.4.4,0,0,1,0,.8h-5.248a.4.4,0,1,1,0-.8Z" transform="translate(-372.793 -433.474)" fill="#080808"/>
            <path id="Path_50543" data-name="Path 50543" d="M221.128,697.326h.1a.25.25,0,1,0,0-.5h-.1a.25.25,0,1,0,0,.5Z" transform="translate(-219.321 -684.453)" fill="#080808"/>
            <path id="Path_50543_-_Outline" data-name="Path 50543 - Outline" d="M221.275,697.376a.25.25,0,1,0,0-.5h-.1a.25.25,0,1,0,0,.5h.1m0,.15h-.1a.4.4,0,1,1,0-.8h.1a.4.4,0,1,1,0,.8Z" transform="translate(-219.371 -684.503)" fill="#080808"/>
            <path id="Path_50544" data-name="Path 50544" d="M281.912,697.078a.25.25,0,0,0-.25-.25h-.732a.25.25,0,1,0,0,.5h.732A.25.25,0,0,0,281.912,697.078Z" transform="translate(-278.06 -684.455)" fill="#080808"/>
            <path id="Path_50544_-_Outline" data-name="Path 50544 - Outline" d="M280.98,696.878a.25.25,0,1,0,0,.5h.732a.25.25,0,1,0,0-.5h-.732m0-.15h.732a.4.4,0,1,1,0,.8h-.732a.4.4,0,1,1,0-.8Z" transform="translate(-278.11 -684.505)" fill="#080808"/>
            <path id="Path_50545" data-name="Path 50545" d="M221.128,163.486h4.13a.25.25,0,0,0,.25-.25v-3.18a.25.25,0,0,0-.25-.25h-4.13a.25.25,0,0,0-.25.25v3.18h0a.25.25,0,0,0,.25.25Zm.25-3.18h3.629v2.679h-3.629Z" transform="translate(-219.321 -156.986)" fill="#080808"/>
            <path id="Path_50545_-_Outline" data-name="Path 50545 - Outline" d="M225.308,163.536a.25.25,0,0,0,.25-.25v-3.18a.25.25,0,0,0-.25-.25h-4.13a.25.25,0,0,0-.25.25v3.18h0a.25.25,0,0,0,.25.25h4.13m-3.879-3.18h3.629v2.679h-3.629v-2.679m3.879,3.33h-4.13a.4.4,0,0,1-.4-.4v-3.18a.4.4,0,0,1,.4-.4h4.13a.4.4,0,0,1,.4.4v3.18A.4.4,0,0,1,225.308,163.686Zm-3.729-.8h3.329v-2.379h-3.329Z" transform="translate(-219.371 -157.036)" fill="#080808"/>
            <path id="Union_180" data-name="Union 180" d="M10.071,21.18a5.412,5.412,0,0,1-2.9-1.687l-1.1.878a.413.413,0,0,1-.5,0l-1.107-.885-1.1.885a.418.418,0,0,1-.5,0l-1.1-.885-1.1.885a.414.414,0,0,1-.424.047A.4.4,0,0,1,0,20.057V.4A.393.393,0,0,1,.227.043.4.4,0,0,1,.648.086L1.755.975l1.1-.889a.408.408,0,0,1,.5,0l1.1.889,1.1-.889a.418.418,0,0,1,.5,0l1.1.889L8.281.086a.413.413,0,0,1,.5,0L9.886.975l1.1-.889a.418.418,0,0,1,.425-.048A.406.406,0,0,1,11.641.4V10.516A5.4,5.4,0,0,1,11.2,21.3,5.289,5.289,0,0,1,10.071,21.18Zm.032-.143a5.252,5.252,0,0,0,6.349-5.2,5.25,5.25,0,0,1-9.265,3.443l-1.209.967a.253.253,0,0,1-.313,0l-1.2-.957-1.2.957a.253.253,0,0,1-.313,0l-1.2-.957-1.2.957a.248.248,0,0,1-.405-.2.248.248,0,0,0,.405.2l1.2-.957,1.2.957a.253.253,0,0,0,.313,0l1.2-.957,1.2.957a.253.253,0,0,0,.313,0l1.209-.967A5.266,5.266,0,0,0,10.1,21.037ZM7.943,12.645A4.6,4.6,0,1,0,11.2,11.3,4.574,4.574,0,0,0,7.943,12.645ZM4.717,18.659l1.1.888.858-.689a5.4,5.4,0,0,1-.054-5.834H4.586a.4.4,0,1,1,0-.8H7.241a5.417,5.417,0,0,1,3.6-1.717V1.232l-.705.564a.4.4,0,0,1-.249.09.4.4,0,0,1-.252-.09L8.53.912l-1.1.885a.417.417,0,0,1-.5,0L5.821.912,4.713,1.8a.413.413,0,0,1-.5,0L3.111.912,2,1.8a.413.413,0,0,1-.5,0L.8,1.232V19.225l.705-.565a.413.413,0,0,1,.5,0l1.107.888,1.1-.888a.4.4,0,0,1,.249-.083A.412.412,0,0,1,4.717,18.659Zm-4.066.878V.923l.948.756a.25.25,0,0,0,.313,0l1.2-.956,1.2.956a.25.25,0,0,0,.313,0l1.2-.956,1.2.956a.25.25,0,0,0,.313,0L8.53.723l1.2.956a.25.25,0,0,0,.313,0L10.99.923l-.948.756a.25.25,0,0,1-.313,0L8.53.723l-1.2.956a.25.25,0,0,1-.313,0L5.821.723l-1.2.956a.25.25,0,0,1-.313,0L3.111.723l-1.2.956a.25.25,0,0,1-.313,0L.651.923Zm5.294-3.661a5.261,5.261,0,0,0,.935,3.013,5.261,5.261,0,0,1-.935-3.013Zm8.613-3.337a4.74,4.74,0,0,1,1.395,3.36,4.753,4.753,0,1,0-9.506,0,4.752,4.752,0,0,1,8.112-3.36Zm-10.221.086a.249.249,0,0,0,.249.248h0a.249.249,0,0,1-.249-.248Zm7.155-1.973v0Z" fill="#080808"/>
            <path id="Path_50549" data-name="Path 50549" d="M647.2,756.281l-1.456,1.355v-3.962a.25.25,0,0,0-.5,0v3.962l-1.456-1.355a.25.25,0,0,0-.341.366l1.876,1.746a.25.25,0,0,0,.341,0l1.876-1.746a.25.25,0,1,0-.341-.366Z" transform="translate(-634.291 -740.044)" fill="#080808"/>
            <path id="Path_50549_-_Outline" data-name="Path 50549 - Outline" d="M645.539,758.511a.25.25,0,0,0,.17-.067l1.876-1.746a.25.25,0,1,0-.341-.366l-1.456,1.355v-3.962a.25.25,0,0,0-.5,0v3.962l-1.456-1.355a.25.25,0,0,0-.341.366l1.876,1.746a.249.249,0,0,0,.17.067m0,.15a.4.4,0,0,1-.273-.107l-1.876-1.746a.4.4,0,1,1,.545-.586l1.2,1.12v-3.618a.4.4,0,0,1,.8,0v3.618l1.2-1.12a.4.4,0,1,1,.545.586l-1.876,1.746A.4.4,0,0,1,645.539,758.661Z" transform="translate(-634.341 -740.094)" fill="#080808"/>
            <path id="Path_50550" data-name="Path 50550" d="M214.454,828.825h0a.25.25,0,1,0,0-.5l-1.071-.011-.429,0h0a.25.25,0,0,0,0,.5l.429,0a.392.392,0,0,1,.277.118l.025.029-.733-.008h0a.25.25,0,0,0,0,.5l.733.008h0a.389.389,0,0,1-.305.14l-.429,0h0a.25.25,0,0,0-.174.43l1.062,1.026a.25.25,0,0,0,.348-.36l-.629-.607h0a.895.895,0,0,0,.684-.618l.213,0h0a.25.25,0,1,0,0-.5l-.213,0a.879.879,0,0,0-.055-.144Z" transform="translate(-211.136 -813.597)" fill="#080808"/>
          </g>
        </g>
      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="InvoiceDownloadIcon">
            {props.tooltip ? props.tooltip : 'Invoice Download'}
        </UncontrolledTooltip>
    </React.Fragment>
}



export const Chip = (props) => {
    return <React.Fragment>
        <div className="chip">
            <div className="me-3">Doemstic Non Trade</div>
            <div role="button" className="css-v7duua" aria-label="Remove Doemstic  Non Trade">
                <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                </svg>
            </div>
        </div>
    </React.Fragment>
}


export const Radio = (props) => {
    return <React.Fragment>
        <div className="form-check d-inline-flex mx-3">
            <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.onCLick} checked={props.checked} />
            <label className="form-check-label ms-2" for="flexRadioDefault1">
                {props.name}
            </label>
        </div>

    </React.Fragment>
}

export const CompleteCall = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id="CompleteCall" className="icon-hover btn-sm btn">
	        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
	        <g id="complete-call-icn-16" transform="translate(4537 -20426)">
	          <rect id="Rectangle_12079" data-name="Rectangle 12079" width="16" height="16" rx="4" transform="translate(-4537 20426)" fill="none"/>
	          <g id="call-icn" transform="translate(-4535.667 20427.125)">
	            <path id="Subtraction_71" data-name="Subtraction 71" d="M10.759,13.749c-2.113,0-4.83-1.4-7.091-3.666C.974,7.389-.449,4.131.127,1.977A2.768,2.768,0,0,1,.84.708,2.149,2.149,0,0,1,1.025.541L1.3.347A2.856,2.856,0,0,1,1.827.085,1.452,1.452,0,0,1,2.321,0,1.58,1.58,0,0,1,3.6.665L4.99,2.659a1.549,1.549,0,0,1-.382,2.157l-.66.459.14.2a17.786,17.786,0,0,0,1.93,2.26,17.78,17.78,0,0,0,2.26,1.93l.2.14.458-.66A1.583,1.583,0,0,1,10.226,8.5a1.5,1.5,0,0,1,.864.263l2,1.393a1.52,1.52,0,0,1,.578,1.768,2.778,2.778,0,0,1-.24.5l-.2.28a1.99,1.99,0,0,1-.188.214,2.772,2.772,0,0,1-1.266.71A3.928,3.928,0,0,1,10.759,13.749ZM2.323.63a.789.789,0,0,0-.273.047,2.089,2.089,0,0,0-.4.194L1.4,1.047,1.4,1.052a1.466,1.466,0,0,0-.113.1,2.152,2.152,0,0,0-.548.984A5.467,5.467,0,0,0,1.3,5.688,13.959,13.959,0,0,0,4.114,9.636c2.148,2.148,4.695,3.482,6.646,3.482a3.283,3.283,0,0,0,.851-.1,2.162,2.162,0,0,0,.982-.547,1.266,1.266,0,0,0,.129-.144l.174-.25,0,0a2.058,2.058,0,0,0,.166-.35l.007-.017a.89.89,0,0,0-.349-1.03l-2-1.395a.9.9,0,0,0-.512-.157.962.962,0,0,0-.171.016.919.919,0,0,0-.59.368l-.634.907a.321.321,0,0,1-.429.089A17.056,17.056,0,0,1,5.57,8.18,17.007,17.007,0,0,1,3.252,5.356a.312.312,0,0,1,.087-.426L4.245,4.3a.917.917,0,0,0,.227-1.276L3.078,1.027A.933.933,0,0,0,2.323.63Z" transform="translate(0)" fill="#11b094"/>
	            <path id="call-done" d="M13.626,5.967A2.935,2.935,0,1,1,16.561,8.9a2.935,2.935,0,0,1-2.936-2.936Zm.452,0a2.484,2.484,0,1,0,2.484-2.483A2.484,2.484,0,0,0,14.077,5.967Zm1.74-.16.518.518.969-.969a.226.226,0,0,1,.319.32L16.495,6.8a.226.226,0,0,1-.32,0L15.5,6.126a.226.226,0,0,1,.319-.319Z" transform="translate(-5.959 -2.657)" fill="#11b094" stroke="#11b094" stroke-width="0.25" fill-rule="evenodd"/>
	          </g>
	        </g>
	      </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="CompleteCall">
            {props.tooltip ? props.tooltip : 'Complete Call'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PaymentAwaited = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id="PaymentAwaited" className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="payment-awaited-icn-16" transform="translate(4669 -20426)">
                <rect id="Rectangle_12076" data-name="Rectangle 12076" width="16" height="16" rx="4" transform="translate(-4669 20426)" fill="none"/>
                <path id="Union_199" data-name="Union 199" d="M6.477,13.728a.287.287,0,0,1,.268-.307h0c.129-.006.256-.021.373-.035h0c.016,0,.026,0,.038,0a.289.289,0,0,1,.038.576l-.1.012c-.1.011-.21.02-.318.026a.033.033,0,0,1-.018,0A.288.288,0,0,1,6.477,13.728ZM5.947,14c-.137-.009-.278-.023-.418-.044a.278.278,0,0,1-.19-.111.274.274,0,0,1-.056-.213.286.286,0,0,1,.11-.19A.308.308,0,0,1,5.6,13.38l.006,0c.1.015.213.026.325.035l.052,0a.287.287,0,0,1,.269.307A.291.291,0,0,1,5.964,14Zm1.714-.421a.291.291,0,0,1,.21-.336l.012,0c.115-.029.235-.064.354-.105a.331.331,0,0,1,.093-.015.282.282,0,0,1,.271.2.289.289,0,0,1-.181.366l-.012,0c-.126.041-.254.079-.386.114l-.038.009c-.015,0-.027,0-.038,0A.293.293,0,0,1,7.661,13.576Zm-2.952.213c-.141-.038-.276-.082-.4-.123A.29.29,0,0,1,4.13,13.3a.28.28,0,0,1,.146-.167.289.289,0,0,1,.22-.012c.116.041.239.079.366.111a.283.283,0,0,1,.171.134.273.273,0,0,1,.03.22.291.291,0,0,1-.135.175.277.277,0,0,1-.143.038A.307.307,0,0,1,4.709,13.789Zm4.263-.413a.3.3,0,0,1-.164-.146.306.306,0,0,1-.015-.222.29.29,0,0,1,.146-.164c.114-.056.228-.117.337-.179a.3.3,0,0,1,.219-.029.3.3,0,0,1,.2.357.27.27,0,0,1-.135.172c-.119.07-.242.135-.368.2a.274.274,0,0,1-.125.029A.365.365,0,0,1,8.972,13.377Zm-5.436-.035c-.126-.064-.251-.131-.369-.2a.292.292,0,0,1-.135-.175.307.307,0,0,1,.032-.22.287.287,0,0,1,.249-.143.339.339,0,0,1,.147.038c.11.065.221.126.334.182a.278.278,0,0,1,.145.167.3.3,0,0,1-.017.222.285.285,0,0,1-.258.158A.281.281,0,0,1,3.536,13.342Zm6.319-.69a.3.3,0,0,1-.059-.213.3.3,0,0,1,.115-.193c.1-.076.2-.155.292-.24a.281.281,0,0,1,.19-.07.293.293,0,0,1,.22.1.3.3,0,0,1,.07.208.2.2,0,0,1-.01.047h.083l-.173.152c-.1.091-.213.179-.324.263a.275.275,0,0,1-.173.062A.284.284,0,0,1,9.856,12.651Zm-7.383.024c-.11-.088-.219-.176-.321-.266a.288.288,0,0,1-.1-.2A.3.3,0,0,1,2.125,12a.3.3,0,0,1,.22-.1.286.286,0,0,1,.191.073l.058.052c.079.068.155.132.235.191a.287.287,0,0,1,.052.4.287.287,0,0,1-.229.114A.293.293,0,0,1,2.473,12.675ZM1.545,7.6A4.856,4.856,0,0,1,6.4,2.753h.012a4.83,4.83,0,0,1,1.427.216A3.083,3.083,0,0,1,10.819,0V0h.1a3.083,3.083,0,0,1,.112,6.165,4.8,4.8,0,0,1,.219,1.44,4.851,4.851,0,0,1-9.7,0Zm.579,0A4.277,4.277,0,0,0,6.4,11.876h.025A4.277,4.277,0,0,0,10.668,7.6,4.152,4.152,0,0,0,10.4,6.124,3.09,3.09,0,0,1,7.878,3.6,4.2,4.2,0,0,0,6.406,3.33H6.4A4.278,4.278,0,0,0,2.125,7.6ZM9.144,1.311A2.511,2.511,0,1,0,10.917.579,2.5,2.5,0,0,0,9.144,1.311Zm1.625,10.565a.287.287,0,0,1-.025-.406c.085-.1.167-.2.24-.293a.288.288,0,0,1,.407-.053.293.293,0,0,1,.112.193.3.3,0,0,1-.059.214c-.084.108-.175.216-.269.322a.28.28,0,0,1-.213.1A.3.3,0,0,1,10.768,11.876Zm-9.135,0-.011.009-.061-.067c-.088-.105-.179-.214-.263-.325a.289.289,0,0,1,.23-.465.3.3,0,0,1,.2.079h0l.023.032,0,0,.012.015c.067.091.146.184.228.281a.291.291,0,0,1-.026.407.281.281,0,0,1-.19.07A.287.287,0,0,1,1.634,11.876Zm9.883-.936a.317.317,0,0,1-.087-.079l-.03.047v-.1a.285.285,0,0,1,.012-.266l.031-.056c.052-.094.1-.187.15-.281a.288.288,0,0,1,.258-.158.281.281,0,0,1,.128.029.293.293,0,0,1,.132.389c-.064.129-.132.252-.2.369a.284.284,0,0,1-.248.14A.275.275,0,0,1,11.517,10.94ZM.836,10.8l-.074-.129h0c-.047-.082-.088-.164-.126-.24a.288.288,0,0,1,.132-.386A.285.285,0,0,1,.9,10.012a.28.28,0,0,1,.257.161l.007.006c.052.109.11.22.171.331a.27.27,0,0,1,.03.22.293.293,0,0,1-.135.173.277.277,0,0,1-.143.041A.286.286,0,0,1,.836,10.8Zm6.132-.228a.292.292,0,0,1-.2-.088L4.926,8.552a.292.292,0,0,1-.076-.261.3.3,0,0,1,.175-.208l.015-.006a.349.349,0,0,1,.108-.02H5.6A1.084,1.084,0,0,0,6.64,7.271H5.127a.29.29,0,1,1,0-.579H6.646A1.089,1.089,0,0,0,5.6,5.884H5.127a.288.288,0,1,1,0-.576H7.669a.277.277,0,0,1,.2.085.284.284,0,0,1,0,.407.277.277,0,0,1-.2.085H6.857a1.667,1.667,0,0,1,.379.808h.433a.29.29,0,0,1,0,.579H7.233A1.682,1.682,0,0,1,5.795,8.625l1.389,1.454a.293.293,0,0,1-.009.41.3.3,0,0,1-.2.079Zm5.1-.693a.283.283,0,0,1-.167-.146.3.3,0,0,1-.011-.222c.038-.114.076-.237.11-.363a.29.29,0,0,1,.53-.068.3.3,0,0,1,.039.167l0,.006-.012.047c-.038.134-.078.269-.123.4a.295.295,0,0,1-.276.2A.252.252,0,0,1,12.067,9.875ZM.468,9.819a.287.287,0,0,1-.144-.167C.279,9.529.241,9.395.2,9.251a.276.276,0,0,1,.028-.219A.273.273,0,0,1,.407,8.9a.218.218,0,0,1,.075-.012.294.294,0,0,1,.28.216c.029.12.068.243.108.363a.305.305,0,0,1-.015.222.308.308,0,0,1-.167.146.329.329,0,0,1-.094.015A.283.283,0,0,1,.468,9.819ZM12.4,8.722a.3.3,0,0,1-.193-.108.281.281,0,0,1-.056-.217l.008-.073c.012-.105.025-.208.03-.3a.29.29,0,0,1,.3-.269h0a.286.286,0,0,1,.2.1.29.29,0,0,1,.07.208c-.01.137-.023.278-.041.418a.294.294,0,0,1-.115.19.283.283,0,0,1-.172.059A.145.145,0,0,1,12.4,8.722ZM.154,8.623a.27.27,0,0,1-.11-.193V8.423C.026,8.286.011,8.148,0,8.014a.279.279,0,0,1,.073-.208.275.275,0,0,1,.2-.1.285.285,0,0,1,.3.269c.009.129.02.251.035.372l0,.006a.3.3,0,0,1-.058.216.29.29,0,0,1-.193.108.141.141,0,0,1-.036,0A.272.272,0,0,1,.154,8.623ZM12.511,7.528H12.48a.285.285,0,0,1-.191-.07.277.277,0,0,1-.1-.2l0-.064c-.01-.105-.02-.211-.036-.316V6.867a.3.3,0,0,1,.056-.217.291.291,0,0,1,.193-.108l.006,0a.3.3,0,0,1,.26.111l.032-.032.032.231c.018.129.03.255.036.374a.293.293,0,0,1-.251.3ZM.274,7.487a.3.3,0,0,1-.2-.1A.294.294,0,0,1,0,7.18c.009-.141.023-.281.041-.418a.289.289,0,0,1,.287-.249H.369a.294.294,0,0,1,.249.328C.6,6.967.59,7.092.58,7.218a.29.29,0,0,1-.1.2.3.3,0,0,1-.187.07ZM.414,6.3a.3.3,0,0,1-.175-.134.292.292,0,0,1-.03-.22c.041-.143.083-.278.126-.4a.289.289,0,0,1,.147-.167A.282.282,0,0,1,.7,5.36a.309.309,0,0,1,.167.146.28.28,0,0,1,.011.222c-.041.12-.076.243-.112.363a.269.269,0,0,1-.135.175.272.272,0,0,1-.143.038A.321.321,0,0,1,.414,6.3ZM.786,5.155a.269.269,0,0,1-.143-.167.273.273,0,0,1,.015-.22c.064-.129.128-.252.2-.369a.29.29,0,0,1,.175-.135.3.3,0,0,1,.22.03.292.292,0,0,1,.106.395c-.062.109-.123.22-.182.337a.307.307,0,0,1-.166.146.337.337,0,0,1-.095.015A.287.287,0,0,1,.786,5.155Zm8.985-.325a.288.288,0,1,1,0-.577h.155V3.645a.564.564,0,0,1,.281-.486l.131-.076-.131-.076a.564.564,0,0,1-.281-.486V1.913H9.771a.288.288,0,1,1,0-.576h2.293a.288.288,0,1,1,0,.576h-.155v.609a.565.565,0,0,1-.28.486l-.135.076.135.076a.565.565,0,0,1,.28.486v.609h.155a.288.288,0,1,1,0,.577ZM10.5,3.654v.6h.825v-.6l-.413-.237Zm0-1.144.412.24.413-.24v-.6H10.5Zm-9.128,1.6a.269.269,0,0,1-.112-.191.289.289,0,0,1,.059-.213c.087-.117.179-.225.266-.322a.291.291,0,0,1,.2-.1.291.291,0,0,1,.307.272.29.29,0,0,1-.069.208c-.083.093-.165.193-.243.3a.29.29,0,0,1-.229.111A.274.274,0,0,1,1.377,4.111Zm.731-.98A.284.284,0,0,1,2.179,2.8l0,0c.11-.1.219-.184.324-.266a.31.31,0,0,1,.214-.055.27.27,0,0,1,.19.111.289.289,0,0,1,.059.214.3.3,0,0,1-.114.193c-.1.076-.2.158-.293.24a.274.274,0,0,1-.154.067.128.128,0,0,1-.035,0A.291.291,0,0,1,2.108,3.131Zm.962-.723A.29.29,0,0,1,3.2,2.066c.123-.07.245-.138.368-.2a.3.3,0,0,1,.22-.015A.288.288,0,0,1,3.957,2a.307.307,0,0,1,.015.222.32.32,0,0,1-.145.167c-.115.053-.225.114-.338.179A.345.345,0,0,1,3.38,2.6l-.035,0A.291.291,0,0,1,3.07,2.408ZM4.152,1.89a.3.3,0,0,1,.133-.31V1.571l.058-.021c.135-.044.269-.082.4-.12a.3.3,0,0,1,.074-.009.289.289,0,0,1,.28.216.281.281,0,0,1-.029.219.277.277,0,0,1-.114.109v.009l-.065.018c-.121.03-.243.067-.362.109a.276.276,0,0,1-.057.011.141.141,0,0,1-.035,0A.293.293,0,0,1,4.152,1.89Zm3.006-.044c-.126-.018-.256-.029-.382-.038a.284.284,0,0,1-.2-.1.29.29,0,0,1,.233-.48c.138.009.279.024.418.041a.289.289,0,0,1-.037.576A.164.164,0,0,1,7.158,1.846ZM5.315,1.595a.294.294,0,0,1,.058-.214.315.315,0,0,1,.117-.088V1.279l.088-.009c.134-.018.271-.03.4-.038H6a.288.288,0,0,1,.037.574.027.027,0,0,1-.015,0h0c-.118.006-.241.018-.369.035H5.64a.173.173,0,0,1-.038,0A.292.292,0,0,1,5.315,1.595Z" transform="translate(-4668 20427)" fill="#080808"/>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target="PaymentAwaited">
            {props.tooltip ? props.tooltip : 'Payment Awaited'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PurchaseInvoiceIcon = (props) =>{
    return <React.Fragment>
        <a href="javascript:void(0)" onClick={props.handleOnClick} id={`purchaseInvoice${props.id ? '_' + props.id : ''}`} className={`icon-hover btn-sm btn ${props?.isDisabled && `disabled`}`} disabled={props?.isDisabled ? props?.isDisabled : false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="purchase-invoice-icn-32" transform="translate(4713 -20426)">
                    <rect id="Rectangle_12075" data-name="Rectangle 12075" width="20" height="20" rx="4" transform="translate(-4713 20426)" fill="none" />
                    <g id="purchase-invoice-icn" transform="translate(-4709.717 20427.096)">
                        <path id="Union_207" data-name="Union 207" d="M2.679.73a.365.365,0,1,1,0-.73H7.052a.365.365,0,1,1,0,.73ZM2.47.365a.209.209,0,0,0,.209.209H7.052A.209.209,0,0,0,7.261.365a.209.209,0,0,1-.209.209H2.679A.209.209,0,0,1,2.47.365ZM1.25.73a.365.365,0,0,1,0-.73h.61a.365.365,0,0,1,0,.73ZM1.042.365A.209.209,0,0,0,1.25.574h.61A.208.208,0,0,0,2.069.365.208.208,0,0,1,1.86.574H1.25A.209.209,0,0,1,1.042.365ZM.365.73a.365.365,0,0,1,0-.73h.08a.365.365,0,0,1,0,.73ZM.156.365A.208.208,0,0,0,.365.574h.08A.208.208,0,0,0,.653.365.208.208,0,0,1,.444.574H.365A.208.208,0,0,1,.156.365Z" transform="translate(1.172 8.117)" fill="#080808" />
                        <path id="Union_206" data-name="Union 206" d="M2.679.73a.365.365,0,1,1,0-.73H7.052a.365.365,0,1,1,0,.73ZM2.47.365a.209.209,0,0,0,.209.209H7.052A.209.209,0,0,0,7.261.365a.209.209,0,0,1-.209.209H2.679A.209.209,0,0,1,2.47.365ZM1.25.73a.365.365,0,0,1,0-.73h.61a.365.365,0,0,1,0,.73ZM1.042.365A.209.209,0,0,0,1.25.574h.61A.208.208,0,0,0,2.069.365.208.208,0,0,1,1.86.574H1.25A.209.209,0,0,1,1.042.365ZM.365.73a.365.365,0,0,1,0-.73h.08a.365.365,0,0,1,0,.73ZM.156.365A.208.208,0,0,0,.365.574h.08A.208.208,0,0,0,.653.365.208.208,0,0,1,.444.574H.365A.208.208,0,0,1,.156.365Z" transform="translate(1.172 6.396)" fill="#080808" />
                        <path id="Union_208" data-name="Union 208" d="M8.416,17.711A4.55,4.55,0,0,1,6,16.316l-.891.714a.368.368,0,0,1-.456,0l-.9-.721-.9.721a.368.368,0,0,1-.456,0l-.9-.721-.9.721a.352.352,0,0,1-.229.079.351.351,0,0,1-.155-.036A.36.36,0,0,1,0,16.743V.365A.361.361,0,0,1,.207.036.354.354,0,0,1,.362,0,.373.373,0,0,1,.591.079l.9.72.9-.72A.363.363,0,0,1,2.62,0a.372.372,0,0,1,.228.079l.9.72.9-.72A.371.371,0,0,1,4.881,0a.375.375,0,0,1,.227.079l.9.72.9-.72a.368.368,0,0,1,.457,0l.9.72.9-.72A.369.369,0,0,1,9.4,0a.351.351,0,0,1,.155.036.365.365,0,0,1,.207.329v8.4a4.534,4.534,0,1,1-1.344,8.949Zm.951-.056h0Zm.426-.021c.121-.012.243-.029.362-.051C10.037,17.605,9.915,17.622,9.794,17.634ZM8.45,17.558a4.31,4.31,0,0,0,.457.073,4.31,4.31,0,0,1-.457-.073A4.369,4.369,0,0,1,6.019,16.1l-1.009.8a.2.2,0,0,1-.259,0l-1-.8-1,.8a.2.2,0,0,1-.259,0l-1-.8-1,.8-.015.011.015-.011,1-.8,1,.8a.2.2,0,0,0,.259,0l1-.8,1,.8a.2.2,0,0,0,.259,0l1.009-.8A4.369,4.369,0,0,0,8.45,17.558Zm1.707.026a4.3,4.3,0,0,0,.723-.2A4.3,4.3,0,0,1,10.156,17.583ZM6.672,10.59a3.8,3.8,0,1,0,2.69-1.115A3.784,3.784,0,0,0,6.672,10.59ZM.363,16.953a.221.221,0,0,1-.071-.012A.221.221,0,0,0,.363,16.953Zm-.09-.02a.212.212,0,0,1-.117-.19A.212.212,0,0,0,.273,16.933Zm3.706-1.377.9.721.674-.54A4.517,4.517,0,0,1,5.5,10.914H3.85a.364.364,0,0,1,0-.728h2.2a4.426,4.426,0,0,1,1.39-1.014,4.537,4.537,0,0,1,1.59-.415V1.122l-.538.43a.352.352,0,0,1-.229.079.361.361,0,0,1-.228-.079l-.9-.721-.9.721a.369.369,0,0,1-.457,0l-.9-.721-.9.721a.359.359,0,0,1-.228.079.353.353,0,0,1-.228-.079l-.9-.721-.9.721a.35.35,0,0,1-.225.079.363.363,0,0,1-.231-.079l-.535-.43V15.987l.538-.43a.353.353,0,0,1,.229-.079.362.362,0,0,1,.228.079l.9.721.9-.721a.367.367,0,0,1,.456,0Zm1.785.214a4.382,4.382,0,0,1-.781-2.51A4.382,4.382,0,0,0,5.765,15.771Zm6.4-5.291a3.959,3.959,0,0,1,1.16,2.8,3.961,3.961,0,0,0-7.922,0,3.961,3.961,0,0,1,6.762-2.8Zm-8.313.279h0a.209.209,0,0,1-.207-.209A.209.209,0,0,0,3.85,10.758ZM8.138,1.429a.2.2,0,0,0,.13.047.2.2,0,0,1-.13-.047l-1-.8-1,.8a.2.2,0,0,1-.26,0l-1-.8-1,.8a.207.207,0,0,1-.262,0,.207.207,0,0,0,.262,0l1-.8,1,.8a.2.2,0,0,0,.26,0l1-.8ZM2.424,10.914a.364.364,0,1,1,0-.728h.607a.364.364,0,1,1,0,.728Zm-.209-.365a.209.209,0,0,0,.209.209h.607a.21.21,0,0,0,.21-.209.21.21,0,0,1-.21.209H2.424a.209.209,0,0,1-.209-.209Zm-.677.365a.364.364,0,1,1,0-.728h.079a.364.364,0,1,1,0,.728Zm-.209-.365a.209.209,0,0,0,.209.209h.079a.209.209,0,0,0,.209-.209.209.209,0,0,1-.209.209H1.537a.209.209,0,0,1-.209-.209Z" fill="#080808" />
                        <path id="Union_205" data-name="Union 205" d="M.367,3.378A.366.366,0,0,1,0,3.014V.365A.366.366,0,0,1,.367,0H3.808a.366.366,0,0,1,.365.365V3.014a.366.366,0,0,1-.365.365ZM.158,3.014a.207.207,0,0,0,.209.209H3.808a.206.206,0,0,0,.206-.209v0a.206.206,0,0,1-.206.209H.367A.207.207,0,0,1,.158,3.014ZM.573,2.8V.573h0Zm.156-.156H3.442V.729H.729Z" transform="translate(1.17 2.225)" fill="#080808" />
                        <path id="Subtraction_128" data-name="Subtraction 128" d="M1.839,3.956a.281.281,0,0,1-.2-.081L.087,2.375a.294.294,0,0,1-.068-.314.292.292,0,0,1,.267-.18l.631.007h.01a.641.641,0,0,0,.5-.233l.1-.127L.293,1.517a.28.28,0,0,1-.2-.085A.288.288,0,0,1,.3.941L1.538.955l-.1-.129C1.426.815,1.417.805,1.408.8L1.4.788,1.392.777A.657.657,0,0,0,.932.583L.3.576A.285.285,0,0,1,.1.49a.3.3,0,0,1-.081-.2A.287.287,0,0,1,.306,0L2.5.024a.285.285,0,0,1,.2.085.277.277,0,0,1,.081.2A.288.288,0,0,1,2.5.6L1.977.593l.055.115a1.613,1.613,0,0,1,.075.2L2.124.96l.369,0a.288.288,0,1,1,0,.576l-.371,0L2.1,1.591a1.218,1.218,0,0,1-.352.557,1.237,1.237,0,0,1-.588.3l.007.084-.048.048.919.887a.283.283,0,0,1,.089.2.287.287,0,0,1-.081.206A.276.276,0,0,1,1.839,3.956Z" transform="translate(8.039 11.224)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={`purchaseInvoice${props.id ? '_' + props.id : ''}`}>
            {props.tooltip ? props.tooltip : 'Edit'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const Unclaim = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={props.id?props.id:"Unclaim"} className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="unclaim-icn-24" transform="translate(-367 -484)">
            <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#ff9e9f"/>
            <g id="unclaim-icn-32" transform="translate(370 488)">
                <g id="Group_34320" data-name="Group 34320" transform="translate(0)">
                <path id="Subtraction_118" data-name="Subtraction 118" d="M8.664,10.58H1.247A1.207,1.207,0,0,1,0,9.389v-8.2A1.207,1.207,0,0,1,1.247,0H13.431a1.207,1.207,0,0,1,1.247,1.191V3.935a4.975,4.975,0,0,0-.831-.164V1.192a.4.4,0,0,0-.416-.361L1.247.833a.4.4,0,0,0-.416.36v8.2a.366.366,0,0,0,.416.36H8.413a4.956,4.956,0,0,0,.251.829Z" transform="translate(0 2.076)" fill="#080808"/>
                <path id="Path_51583" data-name="Path 51583" d="M46.073,27.51H41.2V25.294c0-.387.387-.692.941-.692h2.991c.526,0,.941.305.941.692Zm-4.044-.831h3.213V25.433H42.031Z" transform="translate(-36.298 -24.602)" fill="#080808"/>
                <path id="Path_51584" data-name="Path 51584" d="M34.867,69.516a.982.982,0,0,1-.969-.969V67.3h1.967v1.246A.97.97,0,0,1,34.867,69.516Zm-.138-1.385v.415a.131.131,0,0,0,.138.138.155.155,0,0,0,.167-.138v-.415Z" transform="translate(-31.018 -55.477)" fill="#080808"/>
                </g>
                <g id="Group_34319" data-name="Group 34319" transform="translate(9.139 6.646)">
                <path id="Path_51586" data-name="Path 51586" d="M42.146,41.394l1.7,1.7c.021.021.021.041.041.062a.021.021,0,0,0,.021.021.063.063,0,0,0,.021.041v.269a.063.063,0,0,1-.021.041.021.021,0,0,1-.021.021c0,.021-.021.041-.041.062L42.167,45.29a.388.388,0,0,1-.539,0,.329.329,0,0,1-.1-.248.382.382,0,0,1,.1-.248l1.057-1.079H39.97a.373.373,0,1,1,0-.746h2.714l-1.057-1.057a.329.329,0,0,1-.1-.248.382.382,0,0,1,.1-.248.348.348,0,0,1,.519-.02Z" transform="translate(-37.286 -38.72)" fill="#080808"/>
                <path id="Ellipse_1237" data-name="Ellipse 1237" d="M3.181-1.25A4.427,4.427,0,0,1,7.611,3.181,4.427,4.427,0,0,1,3.181,7.611,4.427,4.427,0,0,1-1.25,3.181,4.427,4.427,0,0,1,3.181-1.25Zm0,8.219A3.789,3.789,0,0,0,6.969,3.181,3.789,3.789,0,0,0,3.181-.608,3.789,3.789,0,0,0-.608,3.181,3.789,3.789,0,0,0,3.181,6.969Z" transform="translate(1.25 1.25)" fill="#080808"/>
                </g>
            </g>
            </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={props.id?props.id:"Unclaim"}>
            {props.tooltip ? props.tooltip : 'Unclaim'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const Claim = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={props.id?props.id:"Claim"} className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="claim-icn-24" transform="translate(-367 -484)">
            <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#a7b2f8"/>
            <g id="claim-icn-32" transform="translate(370 488)">
                <g id="Group_34320" data-name="Group 34320" transform="translate(0)">
                <path id="Subtraction_118" data-name="Subtraction 118" d="M8.664,10.58H1.247A1.207,1.207,0,0,1,0,9.389v-8.2A1.207,1.207,0,0,1,1.247,0H13.431a1.207,1.207,0,0,1,1.247,1.191V3.935a4.975,4.975,0,0,0-.831-.164V1.192a.4.4,0,0,0-.416-.361H1.247a.4.4,0,0,0-.416.361v8.2a.366.366,0,0,0,.416.36H8.413a4.956,4.956,0,0,0,.251.829Z" transform="translate(0 2.076)" fill="#080808"/>
                <path id="Path_51583" data-name="Path 51583" d="M46.073,27.51H41.2V25.294c0-.387.387-.692.941-.692h2.991c.526,0,.941.305.941.692Zm-4.044-.831h3.213V25.433H42.031Z" transform="translate(-36.298 -24.602)" fill="#080808"/>
                <path id="Path_51584" data-name="Path 51584" d="M34.867,69.516a.982.982,0,0,1-.969-.969V67.3h1.967v1.246A.97.97,0,0,1,34.867,69.516Zm-.138-1.385v.415a.131.131,0,0,0,.138.138.155.155,0,0,0,.167-.138v-.415Z" transform="translate(-31.018 -55.477)" fill="#080808"/>
                </g>
                <g id="Group_34319" data-name="Group 34319" transform="translate(9.139 6.646)">
                <path id="Path_51586" data-name="Path 51586" d="M41.379,41.394l-1.7,1.7c-.021.021-.021.041-.041.062a.021.021,0,0,1-.021.021.063.063,0,0,1-.021.041v.269a.063.063,0,0,0,.021.041.021.021,0,0,0,.021.021c0,.021.021.041.041.062l1.678,1.678a.388.388,0,0,0,.539,0,.329.329,0,0,0,.1-.248.382.382,0,0,0-.1-.248l-1.057-1.078h2.714a.373.373,0,0,0,0-.746H40.841L41.9,41.911a.329.329,0,0,0,.1-.248.382.382,0,0,0-.1-.248A.348.348,0,0,0,41.379,41.394Z" transform="translate(-37.286 -38.72)" fill="#080808"/>
                <path id="Ellipse_1237" data-name="Ellipse 1237" d="M3.181-1.25A4.427,4.427,0,0,1,7.611,3.181,4.427,4.427,0,0,1,3.181,7.611,4.427,4.427,0,0,1-1.25,3.181,4.427,4.427,0,0,1,3.181-1.25Zm0,8.219A3.789,3.789,0,0,0,6.969,3.181,3.789,3.789,0,0,0,3.181-.608,3.789,3.789,0,0,0-.608,3.181,3.789,3.789,0,0,0,3.181,6.969Z" transform="translate(1.25 1.25)" fill="#080808"/>
                </g>
            </g>
            </g>
            </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={props.id?props.id:"Claim"}>
            {props.tooltip ? props.tooltip : 'Claim'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const Claimed = (props) => {
    return <React.Fragment>
        <a   href="javascript:void(0)" onClick={props.handleOnClick} id={props.id?props.id:"Claimed"} className="icon-hover btn-sm btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="claimed-icn-24" transform="translate(-367 -484)">
        <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#adddd4"/>
        <g id="claimed-icn-32" transform="translate(370 488)">
            <g id="Group_34320" data-name="Group 34320" transform="translate(0)">
            <path id="Subtraction_118" data-name="Subtraction 118" d="M8.665,10.58H1.247A1.207,1.207,0,0,1,0,9.389v-8.2A1.207,1.207,0,0,1,1.247,0H13.432a1.206,1.206,0,0,1,1.246,1.191V3.934a4.975,4.975,0,0,0-.831-.164V1.192a.4.4,0,0,0-.415-.361L1.247.833a.4.4,0,0,0-.416.36v8.2a.366.366,0,0,0,.416.36H8.413a4.96,4.96,0,0,0,.251.829Z" transform="translate(0 2.076)" fill="#080808"/>
            <path id="Path_51583" data-name="Path 51583" d="M46.074,27.51H41.2V25.294c0-.387.387-.692.941-.692h2.991c.526,0,.941.305.941.692Zm-4.044-.831h3.213V25.433H42.031Z" transform="translate(-36.298 -24.602)" fill="#080808"/>
            <path id="Path_51584" data-name="Path 51584" d="M34.867,69.516a.982.982,0,0,1-.969-.969V67.3h1.967v1.246A.97.97,0,0,1,34.867,69.516Zm-.138-1.385v.415a.131.131,0,0,0,.138.138.155.155,0,0,0,.167-.138v-.415Z" transform="translate(-31.018 -55.476)" fill="#080808"/>
            </g>
            <g id="Group_34319" data-name="Group 34319" transform="translate(9.138 6.646)">
            <path id="Ellipse_1237" data-name="Ellipse 1237" d="M3.181-1.25A4.427,4.427,0,0,1,7.612,3.181,4.427,4.427,0,0,1,3.181,7.612,4.427,4.427,0,0,1-1.25,3.181,4.427,4.427,0,0,1,3.181-1.25Zm0,8.22A3.789,3.789,0,0,0,6.97,3.181,3.789,3.789,0,0,0,3.181-.608,3.789,3.789,0,0,0-.608,3.181,3.789,3.789,0,0,0,3.181,6.97Z" transform="translate(1.25 1.25)" fill="#080808"/>
            <g id="approve-icn-16" transform="translate(1.79 1.711)">
                <path id="Icon_feather-check" data-name="Icon feather-check" d="M6.05,10.6a.463.463,0,0,1-.316-.122L4.627,9.44a.386.386,0,0,1,.006-.577.47.47,0,0,1,.626.005l.791.742L8.17,7.622A.47.47,0,0,1,8.8,7.617a.386.386,0,0,1,.006.577L6.366,10.478A.463.463,0,0,1,6.05,10.6Z" transform="translate(-4.223 -6.214)" fill="#080808"/>
            </g>
            </g>
        </g>
        </g>
        </svg>
        </a>
        <UncontrolledTooltip placement="bottom" target={props.id?props.id:"Claimed"}>
            {props.tooltip ? props.tooltip : 'Claimed'}
        </UncontrolledTooltip>
    </React.Fragment>
}
export const BadgesCircle = (props) => {
    return <React.Fragment>
        <span className={props.className} text={props.bgText}></span>
    </React.Fragment>
}

export const FormSearchIcon = (props) => {
    return <React.Fragment>
        <button variant="" onClick={props.handleOnClick} className="btn btn-link p-1 icon-hover" title={props.tooltip ? props.tooltip : "Search"} >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <g id="Search_black_icon_24px" transform="translate(-48.941 -105.819)">
                    <rect id="Rectangle_3285" data-name="Rectangle 3285" width="24" height="24" transform="translate(48.941 105.819)" fill="none" />
                    <path id="Path_22916" data-name="Path 22916" d="M72.711,128.457l-7.162-7.132a9.455,9.455,0,1,0-1.1,1.1l7.164,7.133a.78.78,0,1,0,1.1-1.1ZM50.5,115.262a7.853,7.853,0,1,1,7.853,7.853A7.862,7.862,0,0,1,50.5,115.262Z" fill="#000000" />
                </g>
            </svg>
        </button>
    </React.Fragment>
}

export const FormCloseIcon = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="light" title={props.tooltip ? props.tooltip : "Close"} className="btn btn-link p-1 icon-hover" >
            <svg xmlns="http://www.w3.org/2000/svg" id="delete" width="18" height="18" viewBox="0 0 12 12">
                <path id="Path_47170" data-name="Path 47170" d="M36,30a6,6,0,1,0,6,6A6.005,6.005,0,0,0,36,30Zm0,11.179A5.179,5.179,0,1,1,41.179,36,5.186,5.186,0,0,1,36,41.179Z" transform="translate(-30 -30)" fill="#3f3f3f" />
                <path id="Path_47171" data-name="Path 47171" d="M385.182,382.022a.4.4,0,0,0-.581,0l-1.592,1.592-1.6-1.592a.411.411,0,0,0-.581.581l1.6,1.592-1.592,1.6a.4.4,0,0,0,0,.581.428.428,0,0,0,.581,0l1.592-1.6,1.6,1.6a.428.428,0,0,0,.581,0,.4.4,0,0,0,0-.581l-1.6-1.6,1.6-1.6a.4.4,0,0,0-.013-.568Z" transform="translate(-377.009 -378.194)" fill="#3f3f3f" />
            </svg>
        </button>
    </React.Fragment>
}

export const ToastCloseIcon = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" title={props.tooltip ? props.tooltip : "Close"} className="btn btn-sm p-1 pointer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <g id="close_white_icon_24px" transform="translate(-48.941 -281.937)">
                    <rect id="Rectangle_3290" data-name="Rectangle 3290" width="24" height="24" transform="translate(48.941 281.937)" fill="none" />
                    <path id="Path_1951" data-name="Path 1951" d="M72.622,304.007,62.517,293.924,72.6,283.84a1.108,1.108,0,0,0-1.567-1.566L60.945,292.356l-10.083-10.1a1.109,1.109,0,0,0-1.567,1.568l10.083,10.1L49.295,304.007a1.108,1.108,0,1,0,1.509,1.624c.02-.018.039-.037.058-.057L60.945,295.49l10.084,10.084a1.108,1.108,0,0,0,1.566,0h0a1.09,1.09,0,0,0,.052-1.541Z" fill="#fff" />
                </g>
            </svg>
        </button>
    </React.Fragment>
}

export const AssignInventory = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" id={`assign_inventory_${props.id ? props.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="assign-inventory-icn-24" transform="translate(4669 -20425)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="24" height="24" rx="4" transform="translate(-4669 20425)" fill="none" />
                    <path id="inventory" d="M13.435,0a.614.614,0,0,0-.347.108L4.838,5.781a.609.609,0,0,0-.261.5V18.893a.609.609,0,0,0,.607.607h16.5a.609.609,0,0,0,.612-.607V6.284a.61.61,0,0,0-.265-.5L13.782.108A.614.614,0,0,0,13.435,0Zm0,1.354L21.074,6.6V18.281H19.926V13.009a.61.61,0,0,0-.607-.607H16.791V7.126a.609.609,0,0,0-.612-.607H10.3a.61.61,0,0,0-.607.607V12.4h-2.2a.61.61,0,0,0-.548.607v5.273H5.8V6.6ZM10.907,7.737h.832v1.7a.61.61,0,0,0,.607.607h1.782a.611.611,0,0,0,.612-.607v-1.7h.832V12.4H10.907Zm2.047,0h.567V8.827h-.566ZM8.162,13.62H8.99v1.7h0a.609.609,0,0,0,.612.612h1.782A.609.609,0,0,0,12,15.317v-1.7h.827v4.661H8.163Zm2.047,0h.567v1.089H10.21Zm3.832,0h.832v1.7h0a.609.609,0,0,0,.612.612h1.782a.609.609,0,0,0,.607-.612v-1.7h.833v4.661H14.042Zm2.052,0h.562v1.089h-.561Z" transform="translate(-4670.578 20427.25)" />
                </g>
            </svg>
        </button>
        <UncontrolledTooltip placement="bottom" target={`assign_inventory_${props.id ? props.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Assign Inventory'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const OrderReceive = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" id={`order_receive_${props.id ? props.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="order-receive-icn-24" transform="translate(4669 -20425)">
                    <rect id="Rectangle_12076" data-name="Rectangle 12076" width="24" height="24" rx="4" transform="translate(-4669 20425)" fill="none" />
                    <g id="order-receive" transform="translate(-4674 20424.957)">
                        <path id="Union_225" data-name="Union 225" d="M18265.832-3799.885a3.372,3.372,0,0,1-2.045-1.921l-2.42,1.124c-.033.014-.061.023-.088.032h-.027a.433.433,0,0,1-.187,0h-.033a.681.681,0,0,1-.086-.032l-7.648-3.567a.519.519,0,0,1-.3-.458v-8.937l.006-.014a.327.327,0,0,1,.037-.1v-.009l0-.023a.375.375,0,0,1,.041-.092c0-.009.01-.018.014-.028a.465.465,0,0,1,.078-.092l.037-.037h0a.377.377,0,0,1,.055-.037l.033-.018h.018l7.631-3.815a.523.523,0,0,1,.453,0l7.625,3.815h.023l.027.018c.014.009.027.014.041.023h0l.051.046a.543.543,0,0,1,.084.1l.014.023,0,.028c.01.018.018.041.027.064v.023a.066.066,0,0,1,0,.027.371.371,0,0,1,.01.105v8.176a3.368,3.368,0,0,1,.953,2.724,3.362,3.362,0,0,1-1.535,2.49,3.389,3.389,0,0,1-1.824.536A3.488,3.488,0,0,1,18265.832-3799.885Zm-.6-4.892a2.357,2.357,0,0,0-.514,2.577,2.367,2.367,0,0,0,2.188,1.458,2.349,2.349,0,0,0,1.668-.692,2.351,2.351,0,0,0,.693-1.669,2.365,2.365,0,0,0-1.459-2.187,2.367,2.367,0,0,0-.9-.179A2.363,2.363,0,0,0,18265.232-3804.777Zm-3.562-4.714v7.552l1.871-.871c-.01-.1-.014-.2-.014-.293a3.387,3.387,0,0,1,1.641-2.9,3.354,3.354,0,0,1,1.738-.481,3.374,3.374,0,0,1,1.4.307v-6.635Zm-7.652,4.461,6.639,3.09v-7.552l-2.811-1.4v3a.512.512,0,0,1-.51.509.51.51,0,0,1-.508-.509v-3.512l-2.811-1.408Zm4.406-6.713,2.736,1.371,6.521-3.26-3.082-1.541Zm-3.783-1.889,2.691,1.339,6.168-3.439-2.34-1.16Z" transform="translate(-18245.125 3820.875)" fill="#080808" />
                        <path id="Path_53538" data-name="Path 53538" d="M75.338,74.045h-.957v-.033l.27-.272h0a.383.383,0,0,0-.54-.54l-.957.957a.36.36,0,0,0-.048.059.228.228,0,0,0-.017.029l-.019.038-.011.038a.242.242,0,0,0,0,.033.383.383,0,0,0,0,.149.241.241,0,0,0,0,.033l.011.038.019.038a.187.187,0,0,0,.017.029.36.36,0,0,0,.048.059l.957.957a.383.383,0,0,0,.54-.54l-.27-.275v-.033h.957a.383.383,0,0,0,0-.765Z" transform="translate(-52.603 -56.659)" fill="#080808" />
                    </g>
                </g>
            </svg>
        </button>
        <UncontrolledTooltip placement="bottom" target={`order_receive_${props.id ? props.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Order Receive'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const PurchaseOrder = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" id={`purchase_order_${props.id ? props.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="purchase-order-icn-24" transform="translate(4537 -20426)">
                    <rect id="Rectangle_12079" data-name="Rectangle 12079" width="24" height="24" rx="4" transform="translate(-4537 20426)" fill="none" />
                    <g id="np_purchase-order_5030571_000000" transform="translate(-4533.751 20429.25)">
                        <path id="Path_53517" data-name="Path 53517" d="M11.774,45.312a.837.837,0,1,0,.837.837A.837.837,0,0,0,11.774,45.312Zm0,1.116a.279.279,0,1,1,.279-.279.279.279,0,0,1-.279.279Z" transform="translate(-9.048 -37.288)" fill="#080808" />
                        <path id="Path_53518" data-name="Path 53518" d="M11.774,60.938a.837.837,0,1,0,.837.837A.837.837,0,0,0,11.774,60.938Zm0,1.116a.279.279,0,1,1,.279-.279.279.279,0,0,1-.279.279Z" transform="translate(-9.048 -50.125)" fill="#080808" />
                        <path id="Union_223" data-name="Union 223" d="M1.035,18.222A1.038,1.038,0,0,1,0,17.186V2.989A1.038,1.038,0,0,1,1.035,1.954H2.509V1.72A.744.744,0,0,1,3.252.977H5.06a1.3,1.3,0,0,1,2.522,0H9.388a.744.744,0,0,1,.743.743v.234h1.474a1.04,1.04,0,0,1,1.038,1.036v3.8l-.181.006a4.634,4.634,0,0,0-.541.038l-.208.023V2.989a.108.108,0,0,0-.108-.105H10.132v.231a.744.744,0,0,1-.743.743H3.252a.744.744,0,0,1-.742-.743V2.884H1.035a.1.1,0,0,0-.105.105v14.2a.1.1,0,0,0,.105.105H9.178l.05.035a5.651,5.651,0,0,0,.926.541l-.078.354ZM3.44,2.931H9.2V1.907H7.145a.463.463,0,0,1-.456-.547.422.422,0,0,0,0-.058.372.372,0,0,0-.743,0,.452.452,0,0,0,.006.058.462.462,0,0,1-.459.547H3.44Z" transform="translate(-0.249 -0.251)" fill="#080808" />
                        <path id="Path_53521" data-name="Path 53521" d="M27,48.438H23.716a.279.279,0,1,0,0,.558H26.6a6.157,6.157,0,0,1,.4-.558Z" transform="translate(-19.317 -39.856)" fill="#080808" />
                        <path id="Path_53522" data-name="Path 53522" d="M23.716,64.621h1.968q.02-.282.065-.558H23.716a.279.279,0,1,0,0,.558Z" transform="translate(-19.317 -52.692)" fill="#080808" />
                        <path id="Union_224" data-name="Union 224" d="M1.65,9.6a5.624,5.624,0,1,1,9.6-3.977A5.625,5.625,0,0,1,1.65,9.6ZM2.3,2.3A4.7,4.7,0,1,0,5.628.93,4.677,4.677,0,0,0,2.3,2.3Z" transform="translate(6.751 6.751)" fill="#080808" />
                        <path id="Path_53526" data-name="Path 53526" d="M11.774,29.688a.837.837,0,1,0,.837.837A.837.837,0,0,0,11.774,29.688Zm0,1.116a.279.279,0,1,1,.279-.279.279.279,0,0,1-.279.279Z" transform="translate(-9.048 -24.453)" fill="#080808" />
                        <path id="Path_53527" data-name="Path 53527" d="M29.573,33.091a.279.279,0,0,0-.279-.279H23.716a.279.279,0,1,0,0,.558h5.578A.279.279,0,0,0,29.573,33.091Z" transform="translate(-19.317 -27.02)" fill="#080808" />
                        <g id="np_package_1886048_000000" transform="translate(0.766 2.602)">
                            <path id="Path_53533" data-name="Path 53533" d="M15.409,19.386l-.058.028-.759.365c-.1.049-.2.094-.306.144l-.174-.083-.058-.028-.612-.294-.113-.054-.219-.106-.658-.317-.759-.365-.011-.006-.035-.017-.082-.04.052-.025.726-.348.343-.164c.092.041.185.087.276.132l.725.349.878.422.76.365.083.039Z" transform="translate(-2.398 -10.156)" />
                            <path id="Path_53534" data-name="Path 53534" d="M37.987,8.459l-.053.025h0l-.725.349L36.864,9l-.276-.133-.725-.349L34.984,8.1l-.76-.365-.083-.04.058-.028.76-.365c.1-.049.207-.1.308-.148l.229.111.725.35.878.423.76.365.128.061h0Z" transform="translate(-23.376)" />
                            <path id="Path_53535" data-name="Path 53535" d="M11.75,33.052c0,.069,0,.137,0,.206l-.093-.045-.725-.35-.878-.423-.76-.365c-.1-.049-.2-.1-.308-.15V28.993c0-.068,0-.136,0-.2l.1.047.29.14.435.21h0l.883.426.755.364c.1.048.2.1.3.144Z" transform="translate(0 -20.109)" />
                            <path id="Path_53536" data-name="Path 53536" d="M51.955,30.089l1.174-.564s0,.667,0,.707a.207.207,0,0,0,.415,0c0-.28,0-.907,0-.907l1.176-.567,0,3.139-2.762,1.33Z" transform="translate(-39.927 -20.081)" />
                        </g>
                    </g>
                </g>
            </svg>
        </button>
        <UncontrolledTooltip placement="bottom" target={`purchase_order_${props.id ? props.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Purchase Order'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const SendStore = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" id={`send_store_${props.id ? props.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="send-store-icn-24" transform="translate(4537 -20426)">
                    <rect id="Rectangle_12079" data-name="Rectangle 12079" width="24" height="24" rx="4" transform="translate(-4537 20426)" fill="none" />
                    <path id="Union_222" data-name="Union 222" d="M16570.791-3402.5a4.956,4.956,0,0,1-3.369-1.306h-10.092a.494.494,0,0,1-.5-.5v-10.042a1.784,1.784,0,0,1-.17-.158,2.218,2.218,0,0,1-.666-1.581v-1.514a.512.512,0,0,1,.066-.246l1.693-2.912a.5.5,0,0,1,.428-.245h14.182a.5.5,0,0,1,.43.245l1.688,2.912a.46.46,0,0,1,.072.246v1.514a2.244,2.244,0,0,1-.838,1.739v2.912a4.937,4.937,0,0,1,2.043,3.99,4.9,4.9,0,0,1-1.43,3.469,4.941,4.941,0,0,1-3.471,1.473Zm-2.82-7.742a3.916,3.916,0,0,0-1.164,2.8,3.916,3.916,0,0,0,1.164,2.8,4.024,4.024,0,0,0,2.816,1.161,4,4,0,0,0,2.816-1.161,3.944,3.944,0,0,0,1.168-2.8,3.968,3.968,0,0,0-1.168-2.8,3.968,3.968,0,0,0-2.816-1.161A3.964,3.964,0,0,0,16567.971-3410.243Zm-3.307-1.989a.5.5,0,0,1,.494.491v6.947h1.432a4.905,4.905,0,0,1-.629-3.848,4.925,4.925,0,0,1,2.775-3.3,4.979,4.979,0,0,1,2.051-.441,5.006,5.006,0,0,1,1.941.391v-1.893a2.093,2.093,0,0,1-.428.042,2.269,2.269,0,0,1-1.756-.84,2.25,2.25,0,0,1-1.756.84,2.243,2.243,0,0,1-1.754-.84,2.264,2.264,0,0,1-1.76.84,2.244,2.244,0,0,1-1.756-.84,2.253,2.253,0,0,1-1.756.84,2.252,2.252,0,0,1-1.76-.84,2.251,2.251,0,0,1-1.756.84,2.069,2.069,0,0,1-.424-.042v9.094h.674v-6.947a.5.5,0,0,1,.5-.491Zm-5.176,7.438h4.676v-2.7a.489.489,0,0,1-.471.349.493.493,0,0,1-.494-.491v-.895a.493.493,0,0,1,.494-.491.5.5,0,0,1,.475.349v-2.583h-4.68Zm11.553-11.29a1.257,1.257,0,0,0,1.26,1.252,1.259,1.259,0,0,0,1.266-1.252v-1.023h-2.525Zm-3.512-.021v.021a1.262,1.262,0,0,0,1.266,1.252,1.258,1.258,0,0,0,1.26-1.252v-1.023h-2.525Zm-3.512.021a1.259,1.259,0,0,0,1.262,1.252,1.257,1.257,0,0,0,1.26-1.252v-1.023h-2.525Zm-3.514,0a1.257,1.257,0,0,0,1.26,1.252,1.259,1.259,0,0,0,1.266-1.252v-1.023h-2.525Zm-3.512,0a1.246,1.246,0,0,0,.371.886l0,0a1.256,1.256,0,0,0,.885.362,1.262,1.262,0,0,0,.482-.092,1.249,1.249,0,0,0,.779-1.161v-1.023h-2.521Zm.361-2.005h15.846l-1.119-1.926h-13.607Zm12.252,13.071a.211.211,0,0,1-.133-.2v-.624l1.813-2.267a.11.11,0,0,0-.012-.154.111.111,0,0,0-.154,0l-2.092,1.776-1.1-.424a.27.27,0,0,1-.174-.237.279.279,0,0,1,.141-.254l4.586-2.567a.232.232,0,0,1,.232.012.221.221,0,0,1,.1.208l-.4,4.193a.264.264,0,0,1-.129.208.274.274,0,0,1-.248.021l-1.344-.52-.846.79a.2.2,0,0,1-.145.061A.2.2,0,0,1,16569.605-3405.018Z" transform="translate(-21092 23850)" fill="#080808" />
                </g>
            </svg>
        </button>
        <UncontrolledTooltip placement="bottom" target={`send_store_${props.id ? props.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Send To Store'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const DoctorIcon = (props) => {
    return <React.Fragment>
        <button onClick={props.handleOnClick} variant="" id={`doctor_${props.id ? props.id : 'icn'}`} className={`btn btn-sm p-1 pointer icon-hover ${props?.isDisabled ? `disabled` : ''}`} disabled={props?.isDisabled ? props?.isDisabled : false} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <g id="doctor-icn-24" transform="translate(-367 -484)">
                    <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#ff9e9f" />
                    <path id="doctor-icn" d="M23.182,14.332a2.256,2.256,0,0,0-2.1-1.5,2.21,2.21,0,0,0-2.25,2.25,2.185,2.185,0,0,0,1.5,2.1v1.275a3.375,3.375,0,1,1-6.749,0v-.75l2.325-1.875a3.8,3.8,0,0,0,1.424-2.924V9.082a.709.709,0,0,0-.75-.75h-1.5a.75.75,0,0,0,0,1.5h.75v3.075a2.134,2.134,0,0,1-.825,1.725l-2.175,1.725-2.175-1.725a2.134,2.134,0,0,1-.825-1.725V9.832h.75a.75.75,0,1,0,0-1.5h-1.5a.709.709,0,0,0-.75.75v3.825a3.7,3.7,0,0,0,1.425,2.925l2.325,1.875v.75a4.875,4.875,0,1,0,9.749,0V17.183a2.144,2.144,0,0,0,1.35-2.85Z" transform="translate(363.668 480.668)" fill="#080808" />
                </g>
            </svg>
        </button>
        <UncontrolledTooltip placement="bottom" target={`doctor_${props.id ? props.id : 'icn'}`}>
            {props.tooltip ? props.tooltip : 'Registered Doctor'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const GenderRestrictTypeIcon = (props) => {
    return <React.Fragment>
        <button type="button" onClick={props.handleOnClick} id={`UncontrolledTooltipExample04_${props?.id}`} className="icon-hover btn-sm btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <g id="gender-specific-icn-24" transform="translate(-367 -484)">
                    <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 484)" fill="#efc3e6" />
                    <g id="np_gender_5399083_000000" transform="translate(360.071 475.461)">
                        <path id="Path_53540" data-name="Path 53540" d="M16.791,33.3h-.56V31.826a4.659,4.659,0,0,0,3.212-2,4.633,4.633,0,0,0,0-5.228,2.7,2.7,0,0,0-1.1.662,3.382,3.382,0,0,1-2.2,5.289,3.492,3.492,0,0,1-.553.045,3.38,3.38,0,1,1,0-6.76,3.492,3.492,0,0,1,.553.045q.178-.216.374-.413a5.045,5.045,0,0,1,.726-.608,4.658,4.658,0,1,0-2.294,8.968V33.3h-.56a.64.64,0,1,0,0,1.28h.56V35a.64.64,0,1,0,1.28,0v-.419h.56a.64.64,0,1,0,0-1.28Z" transform="translate(0 -7.17)" />
                        <path id="Path_53541" data-name="Path 53541" d="M44.92,13.74a.706.706,0,0,0-.454-.2s-.006,0-.01,0h-2.38a.64.64,0,0,0,0,1.28h.781l-1.6,1.523a4.659,4.659,0,0,0-6.677,6.322,2.714,2.714,0,0,0,1.1-.665,3.381,3.381,0,0,1,.029-3.945,3.668,3.668,0,0,1,.342-.4c.061-.061.125-.122.189-.176.038-.035.08-.067.118-.1s.07-.051.1-.077.07-.051.106-.074c.093-.061.186-.118.282-.17.048-.026.1-.051.147-.074a1.548,1.548,0,0,1,.15-.067c.051-.019.1-.042.154-.058a3.286,3.286,0,0,1,.6-.154,3.323,3.323,0,0,1,.537-.045,3.38,3.38,0,1,1,0,6.76,3.678,3.678,0,0,1-.563-.045,5.205,5.205,0,0,1-1.1,1.021,4.7,4.7,0,0,0,1.664.3,4.653,4.653,0,0,0,3.721-7.455l1.66-1.58v.893a.64.64,0,0,0,1.28,0V14.178a.664.664,0,0,0-.176-.438Z" transform="translate(-18.166)" />
                    </g>
                </g>
            </svg>
        </button>
<UncontrolledTooltip placement="bottom" target={`UncontrolledTooltipExample04_${props?.id}`}>
            {props.tooltip ? props.tooltip : 'Gender Restrict'}
        </UncontrolledTooltip>
    </React.Fragment>
}

export const ProfileIcon = (props) => {
    return <React.Fragment>
        <button type="button" onClick={props.handleOnClick} id={`UncontrolledTooltipExample05_${props?.id}`} className="icon-hover btn-sm btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="lab-profile-icn-24" transform="translate(-367 -521)">
    <circle id="Ellipse_1194" data-name="Ellipse 1194" cx="12" cy="12" r="12" transform="translate(367 521)" fill="#ffdf80"/>
    <g id="Group_36540" data-name="Group 36540" transform="translate(373 525.5)">
      <g id="sample-collected-icn" transform="translate(0 0)">
        <g id="np_blood-sample_3241671_080808" transform="translate(0 0)">
          <path id="Path_50518" data-name="Path 50518" d="M42.11,53.834a1.917,1.917,0,0,1-1.919,1.931,1.95,1.95,0,0,1-1.934-1.948l0-.747h1.282a1.265,1.265,0,0,0,1.273-1.257V48.77H42.1Z" transform="translate(-36.89 -41.469)" fill="#080808"/>
          <path id="Path_50519" data-name="Path 50519" d="M36.344,5.8l-.009-1.507a.65.65,0,0,0-.647-.649l-5.227-.014h0A.649.649,0,0,0,30,3.813a.639.639,0,0,0-.188.459l.008,1.507a.653.653,0,0,0,.633.649l0,1.479h.352l0-1.476,4.557.012.023,9.546a2.269,2.269,0,0,1-2.267,2.285h0a2.3,2.3,0,0,1-2.285-2.3l0-.747h-.352l0,.75a2.654,2.654,0,0,0,2.634,2.648h.007a2.621,2.621,0,0,0,2.618-2.637l-.023-9.546a.645.645,0,0,0,.629-.647ZM31.085,5.6h0a.175.175,0,0,1-.176-.174l-.006-.8a.175.175,0,0,1,.174-.177h0a.175.175,0,0,1,.176.174l.006.8A.175.175,0,0,1,31.085,5.6Zm1,0h0a.175.175,0,0,1-.176-.174l-.006-.8a.175.175,0,0,1,.174-.177h0a.175.175,0,0,1,.176.174l.006.8A.176.176,0,0,1,32.085,5.606Zm1,0h0a.175.175,0,0,1-.176-.174l-.006-.8a.175.175,0,0,1,.174-.177h0a.175.175,0,0,1,.176.174l.006.8A.176.176,0,0,1,33.085,5.609Zm1,0h0a.175.175,0,0,1-.176-.174l-.006-.8a.175.175,0,0,1,.174-.177h0a.175.175,0,0,1,.176.174l.006.8A.176.176,0,0,1,34.085,5.611Zm1,0h0a.175.175,0,0,1-.176-.174l-.006-.8a.175.175,0,0,1,.174-.177.17.17,0,0,1,.177.174l.006.8a.176.176,0,0,1-.174.177Z" transform="translate(-29.817 -3.625)" fill="#080808"/>
          <path id="Path_50520" data-name="Path 50520" d="M36.706,33.18v4.806a.916.916,0,0,1-.921.906H33.778V32.274h2.007a.917.917,0,0,1,.921.906Z" transform="translate(-33.137 -27.64)" fill="#080808"/>
        </g>
      </g>
      <g id="sample-collected-icn-2" data-name="sample-collected-icn" transform="translate(7.143 2.143)">
        <g id="np_blood-sample_3241671_080808-2" data-name="np_blood-sample_3241671_080808" transform="translate(0 0)">
          <path id="Path_50518-2" data-name="Path 50518" d="M41.559,53.111a1.643,1.643,0,0,1-1.645,1.655A1.671,1.671,0,0,1,38.256,53.1l0-.641h1.1a1.084,1.084,0,0,0,1.091-1.077V48.77h1.105Z" transform="translate(-37.085 -42.512)" fill="#080808"/>
          <path id="Path_50519-2" data-name="Path 50519" d="M35.412,5.485,35.4,4.194a.557.557,0,0,0-.555-.557l-4.48-.012h0a.556.556,0,0,0-.39.161.548.548,0,0,0-.161.394l.007,1.291a.559.559,0,0,0,.543.557l0,1.268h.3l0-1.265,3.906.01.019,8.182a1.945,1.945,0,0,1-1.943,1.959h0a1.974,1.974,0,0,1-1.959-1.971l0-.641h-.3l0,.643a2.275,2.275,0,0,0,2.258,2.27h.006a2.246,2.246,0,0,0,2.244-2.26l-.02-8.182a.553.553,0,0,0,.539-.554ZM30.9,5.32h0a.15.15,0,0,1-.151-.149l-.005-.684a.15.15,0,0,1,.149-.152h0a.15.15,0,0,1,.151.149l.005.684A.15.15,0,0,1,30.9,5.32Zm.857,0h0a.15.15,0,0,1-.151-.149L31.6,4.489a.15.15,0,0,1,.149-.152h0a.15.15,0,0,1,.151.149l.005.684A.151.151,0,0,1,31.761,5.323Zm.857,0h0a.15.15,0,0,1-.151-.149l-.005-.684a.15.15,0,0,1,.149-.152h0a.15.15,0,0,1,.151.149l.005.684A.151.151,0,0,1,32.618,5.325Zm.857,0h0a.15.15,0,0,1-.151-.149l-.005-.684a.15.15,0,0,1,.149-.152h0a.15.15,0,0,1,.151.149l.005.684A.151.151,0,0,1,33.475,5.328Zm.857,0h0a.15.15,0,0,1-.151-.149L34.175,4.5a.15.15,0,0,1,.149-.152.145.145,0,0,1,.152.149l.005.684a.151.151,0,0,1-.149.152Z" transform="translate(-29.817 -3.625)" fill="#080808"/>
          <path id="Path_50520-2" data-name="Path 50520" d="M36.288,33.05v4.119a.785.785,0,0,1-.79.777h-1.72V32.274H35.5a.786.786,0,0,1,.79.777Z" transform="translate(-33.229 -28.302)" fill="#080808"/>
        </g>
      </g>
    </g>
  </g>
</svg>
        </button>
<UncontrolledTooltip placement="bottom" target={`UncontrolledTooltipExample05_${props?.id}`}>
        {props.tooltip ? props.tooltip : 'Profile'}
    </UncontrolledTooltip>
</React.Fragment>
}