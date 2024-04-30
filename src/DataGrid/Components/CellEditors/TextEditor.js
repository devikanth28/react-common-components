import React from 'react';
import { textEditorClassname } from '@medplus/npm-data-grid';


const autoFocusAndSelect = (input) => {
    input?.focus();
    input?.select();
}

const TextEditor = (props) => {

    const {onChange,inputAttributes,onBlur,selectedValue ,...rest} = props;

    const handleOnChange = (e) => {
        if(e.target.pattern  && e.target.value && !e.target.value.match(e.target.pattern)) {
            return;
        }
        if(e.target.maxlength && e.target.value && (e.target.value.length > e.target.maxlength)) {
            return;
        }
        onChange(e);
    }

    return <React.Fragment>
             <input
                className={textEditorClassname}
                ref={autoFocusAndSelect}
                value={selectedValue}
                onChange={handleOnChange}
                onBlur={onBlur}
                {...inputAttributes}
                {...rest}
            />

    </React.Fragment>
}


export default TextEditor;