import React from "react";
import { Button } from "react-bootstrap";
import { UncontrolledTooltip } from "reactstrap";



const FormButton = (props) => {

    const {handleOnClick , id , toolTip} = props;


    return <React.Fragment>
            <Button variant="link" id={id} className={`rounded-5 icon-hover`} onClick={(e) => handleOnClick(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <g id="forms-icn-18" transform="translate(-20 -431)">
                        <rect id="Rectangle_9937" data-name="Rectangle 9937" width="18" height="18" transform="translate(20 431)" fill="none" />
                        <g id="forms-icn" transform="translate(21 432)">
                            <path id="Path_47202" data-name="Path 47202" d="M37.5,264.63H52.86v.512H37.5Z" transform="translate(-37.244 -261.272)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47203" data-name="Path 47203" d="M34.366,34.7H19.006a.256.256,0,0,1-.256-.256V18.956a.256.256,0,0,1,.256-.256h15.36a.256.256,0,0,1,.256.256V34.444A.256.256,0,0,1,34.366,34.7Zm-15.1-.512H34.11V19.212H19.263Z" transform="translate(-18.75 -18.7)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47204" data-name="Path 47204" d="M142.561,142.472h-1.269a.256.256,0,1,1,0-.512h1.269a.256.256,0,0,1,0,.512Z" transform="translate(-139.366 -140.277)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47205" data-name="Path 47205" d="M327.821,142.472h-1.269a.256.256,0,1,1,0-.512h1.269a.256.256,0,1,1,0,.512Z" transform="translate(-322.097 -140.277)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47206" data-name="Path 47206" d="M584.806,142.472H579.1a.256.256,0,0,1,0-.512h5.71a.256.256,0,1,1,0,.512Z" transform="translate(-571.193 -140.277)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47207" data-name="Path 47207" d="M162.18,524.976h-1.724a.256.256,0,0,1-.256-.256V523a.256.256,0,0,1,.256-.256h1.724a.256.256,0,0,1,.256.256v1.724a.256.256,0,0,1-.256.256Zm-1.468-.512h1.212v-1.212h-1.212Z" transform="translate(-158.269 -515.858)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47208" data-name="Path 47208" d="M162.18,778.106h-1.724a.256.256,0,0,1-.256-.256v-1.724a.256.256,0,0,1,.256-.256h1.724a.256.256,0,0,1,.256.256v1.724A.256.256,0,0,1,162.18,778.106Zm-1.468-.512h1.212v-1.212h-1.212Z" transform="translate(-158.269 -765.532)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47209" data-name="Path 47209" d="M421.667,524.976h-8.041a.256.256,0,0,1-.256-.256V523a.256.256,0,0,1,.256-.256h8.041a.256.256,0,0,1,.256.256v1.724a.256.256,0,0,1-.256.256Zm-7.785-.512h7.529v-1.212h-7.529Z" transform="translate(-407.982 -515.858)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                            <path id="Path_47210" data-name="Path 47210" d="M421.667,778.106h-8.041a.256.256,0,0,1-.256-.256v-1.724a.256.256,0,0,1,.256-.256h8.041a.256.256,0,0,1,.256.256v1.724A.256.256,0,0,1,421.667,778.106Zm-7.785-.512h7.529v-1.212h-7.529Z" transform="translate(-407.982 -765.532)" fill="#404040" stroke="#404040" stroke-width="0.05" />
                        </g>
                    </g>
                </svg>
            </Button>
            <UncontrolledTooltip placement="bottom" target={id}>
                {toolTip}
            </UncontrolledTooltip>
    </React.Fragment>
}


export default FormButton;