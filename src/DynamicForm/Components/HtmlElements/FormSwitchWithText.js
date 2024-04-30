import React , {useEffect,useState} from "react";

const FormSwitchWithText = (props) => {
    const [width,setWidth] = useState(2);
    const [height,setHeight] = useState(1);
    const [animationClass, setAnimationClass] = useState()
    useEffect(()=>{
        if(props.unCheckedText || props.CheckedText) {
            var fontSize = 12;
            let test = document.getElementById(props.InnerTextElementId ? props.InnerTextElementId:"InnerTextElement")
            test.style.fontSize = fontSize;
            setWidth(test.offsetWidth/16 + 3.25 )
            setHeight(test.offsetHeight /16 + 1)
        }
    },[props.checked])

    const clickaction = () =>{
        if(props.checked){
            setAnimationClass('fadeInLeftAnimation')
        } else{
            setAnimationClass('fadeInRightAnimation')
        }
        setTimeout(() => {
            setAnimationClass('')
        }, "280");

        props.onClick()
    }
    return (
        <React.Fragment>
            <div className={`${props.className ? props.className:`form-check form-switch d-flex position-relative custom-text-form-switch`}`}>
                <input className={`form-check-input ${props.inputClassName ? props.inputClassName : ''}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" name={props.name} checked={props.checked} value={props.value} onClick={() => {clickaction()}} onBlur={props.onBlur} onFocus={props.onFocus} style={{'width':width+'rem','height':height + 'rem'}}/>
                <span className={`${props.innerTextClassName ? props.innerTextClassName + animationClass :animationClass }`} id={props.InnerTextElementId ? props.InnerTextElementId:'InnerTextElement'}>{props.checked ? props.CheckedText: props.unCheckedText}</span>
                {props.labelText && <label class="form-check-label" for="flexSwitchCheckDefault">{props.labelText}</label>}
            </div>
        </React.Fragment>
    )
}
export default FormSwitchWithText