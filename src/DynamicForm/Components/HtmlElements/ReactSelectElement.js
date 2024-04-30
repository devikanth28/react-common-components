import React, { useMemo } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { Highlighter } from 'react-bootstrap-typeahead';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import Validate from '../../../LocalityComponent/helpers/Validate';
import ReactSelectHelper from '../../helpers/ReactSelectHelper';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';

const ReactSelectElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {
    const { label, id, name, className, message, labelClassName, originalId, placeholder, options, value, attributes, hidden, actions, multiple, disabled, helperText, onInputChangeEnable, reactSelectClassName, inputText, ...rest } = htmlElement;
    const { maxLength, minLength, considerInputText, ...filteredAttributes } = rest;

    const animatedComponents = makeAnimated();
    const validate = Validate();

    const { convertToReactSelectOptions } = ReactSelectHelper();

    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).forEach(([key, configs]) => {
            if ((id == key || key == originalId) && key != 'ALL') {
                configs.forEach(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }

    const handleOnChange = (value, actionMeta) => {
        let e = { type: {}, target: { value: [] } }
        const valueArray = value ? Array.isArray(value) ? value : [value] : [];
        e.type = "select"
        e.target.value = valueArray.map(({ label, value, id }) => helpers.createReactSelectOption(label, value, id));
        action(e);
    }

    const CustomIndicatorContainer = props => {
        return (
            !multiple && validate.isNotEmpty(value) && <div {...props.innerProps}>
                <div class="rbt-aux">
                    <button
                        aria-label="Clear"
                        class="close btn-close rbt-close"
                        type="button"
                        disabled={disabled}
                        {...props.clearIndicatorProps}
                        onClick={() => props.clearValue()}
                    >
                        <span class="sr-only visually-hidden">Clear</span>
                    </button>
                </div>
            </div>
        );
    };

    const isDisabled = useMemo(() => (!multiple && validate.isNotEmpty(value) || disabled), [multiple, value, disabled])

    return (
        <React.Fragment>
            {!hidden &&
                <FloatingLabel className={labelClassName} controlId={id} label={label}>
                    <Select
                        id={id}
                        value={convertToReactSelectOptions(value)}
                        options={convertToReactSelectOptions(options)}
                        className={`custom-floating-select form-select groups-flex-nowrap ${isDisabled ? "disabled-background" : ""} ${message ? 'is-invalid' : ''} ${className || ''}`}
                        classNamePrefix="datalist"
                        placeholder={placeholder || ''}
                        isMulti={multiple}
                        name={name}
                        isSearchable={true}
                        isDisabled={isDisabled}
                        isClearable={true}
                        onChange={handleOnChange}
                        onBlur={action}
                        onFocus={() => helpers.updateSingleKeyValueIntoField("message", null, id, false)}
                        onInputChange={(inputValue) => { helpers.updateSingleKeyValueIntoField("inputText", inputValue, id, false); action({ type: 'change', target: { value: inputValue } }) }}
                        components={{
                            ...animatedComponents,
                            IndicatorsContainer: CustomIndicatorContainer,
                            Option: (props) => (
                                <components.Option {...props}>
                                    <Highlighter search={props.selectProps.inputValue} >
                                        {props.children}
                                    </Highlighter>
                                </components.Option>
                            )
                        }}
                        {...filteredAttributes}
                    />
                    {message && <ErrorMessage errorMessage={message} />}
                    {helperText && !message && <HelperText helperText={helperText} />}
                </FloatingLabel>
            }
        </React.Fragment>
    )
}

export default ReactSelectElement;
