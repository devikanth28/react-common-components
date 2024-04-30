import React from 'react';



const ClearIcon = (props) => {

    return <React.Fragment>
                    <a title="Close" href="javascript:void(0);" onClick={props.handleOnClick} class="btn btn-sm form-input-height d-flex align-items-center clearicon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17 17.001"><g id="deleteforchip_black_icon_18px" transform="translate(-759.5 -1223.5)"><g id="Group_15960" data-name="Group 15960" transform="translate(760 1224)"><path id="Subtraction_35" data-name="Subtraction 35" d="M8,16a8,8,0,1,1,8-8A8.009,8.009,0,0,1,8,16ZM4.784,4.445a.314.314,0,0,0-.233.1A.326.326,0,0,0,4.55,5L7.538,8,4.55,10.985a.321.321,0,0,0-.106.226.327.327,0,0,0,.09.24.334.334,0,0,0,.242.106A.328.328,0,0,0,5,11.467l.016-.016L8,8.462l2.987,2.989a.331.331,0,0,0,.464,0,.323.323,0,0,0,.1-.229.316.316,0,0,0-.087-.229.036.036,0,0,0,0-.007L8.468,8l2.989-2.987a.334.334,0,0,0-.017-.466.323.323,0,0,0-.446,0L8,7.53,5.013,4.539A.329.329,0,0,0,4.784,4.445Z" transform="translate(0 0)" fill="none" stroke="#6c757d" stroke-width="1"></path></g></g></svg></a>
            </React.Fragment>
}


export default  ClearIcon