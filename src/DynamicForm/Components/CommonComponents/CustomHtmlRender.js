import React from "react";

const CustomHtmlRender = ({ customHtml, id, position }) => {

    return (
        <React.Fragment>
            {customHtml && Object.entries(customHtml).map(([elementId, config]) => {
                return config.map(currentConfig => {
                    const [currentPosition, func] = currentConfig;
                    if (id == elementId && currentPosition == position) {
                        return func(id);
                    }
                })
            })}
        </React.Fragment>
    );

}

export default CustomHtmlRender;