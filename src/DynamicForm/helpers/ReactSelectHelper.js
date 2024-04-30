import Validate from "../../LocalityComponent/helpers/Validate"

const ReactSelectHelper = () => {

    const validate= Validate();

    const createReactSelectOption = (displayValue, value, optionId, idx, disabled) => {
        return {
            label: `${displayValue}`,
            isDisabled: disabled,
            value: `${value}`,
            id: optionId,
            key: idx
        }
    }

    const convertToReactSelectOptions = (optionsList) => {
        if (validate.isEmpty(optionsList)) {
            return [];
        }
        return optionsList.map(({ displayValue, value, id: optionId, disabled }, index) => createReactSelectOption(displayValue, value, optionId, index, disabled));
    }


    return Object.freeze({
        createReactSelectOption,
        convertToReactSelectOptions

    })

}

export default ReactSelectHelper