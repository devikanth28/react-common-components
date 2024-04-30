import React from 'react';
import { Button } from 'react-bootstrap';
import CustomHtmlRender from '../CommonComponents/CustomHtmlRender';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import HelperText from '../CommonComponents/HelperText';
import Loader from '../CommonComponents/Loader';

const ButtonElement = ({ htmlElement, formId, helpers, customHtml, observers }) => {

    const { label, hidden, id, attributes, className = "", originalId, helperText, message, reset, submit, isLoading,loaderClassName,loaderSize,loaderVariant, ...rest } = htmlElement;

    const { htmlActions, elementSize,style, defaultValue, required, ...filteredAttributes } = rest;

    const spinnerContent = () => {
        return (<span className="visually-hidden">Loading...</span>);
    }

    const action = (e) => {
        const payload = [e, htmlElement, formId];
        observers['ALL'][0][1](payload);
        Object.entries(observers).map(([key, configs]) => {
            if ((id == key || key == originalId)
                && key != 'ALL') {
                configs.map(config => {
                    const [eve, callBack] = config;
                    if (e.type == eve && key != 'ALL') {
                        callBack(payload);
                    }
                })
            }
        })
    }

    return (
        <React.Fragment>
            {!hidden &&
                <React.Fragment>
                    <Button
                        onClick={action}
                        onBlur={action}
                        {...filteredAttributes}
                        {...attributes}
                        style={style}
                        className={className}
                        id={id}>
                        {label && <span className={isLoading ? 'invisible':'visible'}>{label}</span>}
                        {isLoading && <Loader spinnerClassName={`loader ${loaderClassName}` } size={loaderSize} variant={loaderVariant} animation={"border"} role={"status"} spinnerContent={spinnerContent} />}
                        {<CustomHtmlRender customHtml={customHtml} id={id} position="INSERT_IN" />}
                    </Button>
                    {message && <ErrorMessage errorMessage={message} />}
                    {helperText && !message && <HelperText helperText={helperText} />}
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default ButtonElement;