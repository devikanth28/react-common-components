import React, { useMemo } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { Highlighter } from 'react-bootstrap-typeahead';
import { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';
import { useDebouncedCallback } from 'use-debounce';
import Validate from '../../../LocalityComponent/helpers/Validate';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';
import ReactSelectHelper from '../../helpers/ReactSelectHelper';

const AsyncReactSelectElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {
    const { label, id, name, className, message, labelClassName, originalId, placeholder, defaultOptions, value, attributes, hidden, actions, multiple, disabled, helperText, onInputChangeEnable, reactSelectClassName, inputText, ...rest } = htmlElement;
    const { maxLength, minLength, considerInputText, minSearchTextLength, ...filteredAttributes } = rest;

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

    const loadDebounceOptions = useDebouncedCallback(async (inputText, callback) => {
        const payload = [{ type: 'search', target: { value: inputText } }, htmlElement, formId];
        observers['ALL'][0][1](payload);
        let searchCallback;
        for (const [key, configs] of Object.entries(observers)) {
            if ((id == key || key == originalId) && key != 'ALL') {
                for (const [eve, callBack] of configs) {
                    if (eve === 'search' && key !== 'ALL') {
                        searchCallback = callBack;
                        break;
                    }
                }
            }
        }

        if (validate.isEmpty(searchCallback) || validate.isEmpty(inputText)) {
            callback([]);
            return;
        }
        const options = await searchCallback(payload);
        callback(convertToReactSelectOptions(options));
    }, 1000);

    const onLoadOptions = (inputText, callback) => {
        if (validate.isEmpty(inputText) || validate.isNotEmpty(minSearchTextLength) && inputText && inputText.length < minSearchTextLength) {
            callback([]);
            return;
        }
        loadDebounceOptions(inputText, callback);
    }

    const handleOnChange = (value, actionMeta) => {
        let e = { type: {}, target: { value: [] } }
        const valueArray = value ? Array.isArray(value) ? value : [value] : [];
        e.type = "select"
        e.target.value = valueArray.map(({ label, value, id }) => helpers.createReactSelectOption(label, value, id));
        action(e);
    }

    const CustomIndicatorContainer = (props) => {
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
                    <AsyncSelect
                        id={id}
                        value={convertToReactSelectOptions(value)}
                        className={`custom-floating-select form-select groups-flex-nowrap ${isDisabled ? "disabled-background" : ""} ${message ? 'is-invalid' : ''} ${className || ''}`}
                        classNamePrefix="datalist"
                        placeholder={placeholder || ''}
                        isMulti={multiple}
                        name={name}
                        cacheOptions={false}
                        defaultOptions={convertToReactSelectOptions(defaultOptions)}
                        onInputChange={(inputValue) => { helpers.updateSingleKeyValueIntoField("inputText", inputValue, id, false); action({ type: 'change', target: { value: inputValue } }) }}
                        loadOptions={onLoadOptions}
                        isSearchable={true}
                        isDisabled={isDisabled}
                        isClearable={true}
                        onChange={handleOnChange}
                        onBlur={action}
                        onFocus={() => helpers.updateSingleKeyValueIntoField("message", null, id, false)}
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

export default AsyncReactSelectElement;
