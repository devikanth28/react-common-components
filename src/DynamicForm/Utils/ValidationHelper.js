import Validate from "../../LocalityComponent/helpers/Validate";

export const regexPatterns = {
    '^[0-9]+$': { errorMessage: 'Enter Only Numbers', doesValueUpdate: false },
    '^[A-Za-z]+$': { errorMessage: 'Enter Only Alphabets', doesValueUpdate: false },
    '^[0-9a-zA-Z]+$': { errorMessage: 'Enter Only Alphabets and Numbers', doesValueUpdate: false },
    '^[1-9][0-9]{9}$': { errorMessage: 'PhoneNumber Should not start with 0 and should be of length 10', doesValueUpdate: false },
    '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$': { errorMessage: 'Email is not valid', doesValueUpdate: false },
}

const validateAlphabetic = (regex, value, eventType) => {
    const { errorMessage } = regexPatterns[regex];

    if (eventType === "change" && value === "") {
        return [true, ""]
    }
    if (!validateRegex(regex, value)) {
        return [false, errorMessage]
    }
    return [true, ""];
}

const validateAlphanumeric = (regex, value, eventType) => {
    const { errorMessage } = regexPatterns[regex];

    if (eventType === "change" && value === "") {
        return [true, ""]
    }
    if (!validateRegex(regex, value)) {
        return [false, errorMessage]
    }
    return [true, ""];
}
const validateNumeric = (regex, value, eventType) => {
    const { errorMessage } = regexPatterns[regex];

    if (eventType === "change" && value === "") {
        return [true, ""]
    }
    if (!validateRegex(regex, value)) {
        return [false, errorMessage]
    }
    return [true, ""];
}


const validateEmailId = (regex, value, type) => {
    const { errorMessage } = regexPatterns[regex];
    if ((type === "change" && value === "") || (type === "blur" && value === "")) {
        return [true, ""];
    }
    if (type === "blur" && !validateRegex(regex, value)) {
        return [true, errorMessage];
    }
    return [true, ""];
}

const validatePhoneNumber = (regex, value, eventType) => {
    try {
        const numericRegex = '^[0-9]+$';
        const { errorMessage } = regexPatterns[regex];
        if (eventType === "change" && value === "") {
            return [true, ""]
        }
        if (value.length < 10 && !validateRegex(numericRegex, value)) {
            return [false, errorMessage];
        }
        if (value.length < 10 && validateRegex(numericRegex, value)) {
            return [true, errorMessage];
        }
        if (!validateRegex(regex, value)) {
            return [false, errorMessage];
        }
        return [true, ""]
    }
    catch (error) {
        console.log(error + "error occured while validating regex")
    }

}
const validateRegex = (regex, value) => {
    const re = new RegExp(regex, 'g');
    if (re && !re.test(value)) {
        if (regexPatterns[regex]) {
            const { doesValueUpdate } = regexPatterns[regex];
            return doesValueUpdate;
        }
        return false;
    }
    return true;
}

const handleFileChange = (event, filesMaxLimit, fileSizeLimit, field, type) => {
    let stateFileNames = []
    let currentFileNames = []
    let sizeLimitExceeded = false;
    let maxLimitExceeded = false;
    let valueLength = field?.value?.length;
    valueLength = valueLength || 0
    if (filesMaxLimit && type === "change") {
        if ((!field.addMoreFiles) && ((event?.target?.files?.length) > filesMaxLimit || (field?.value?.length > filesMaxLimit && type !== "change"))) {
            maxLimitExceeded = true;
        }
        else if ((field.addMoreFiles) && ((event?.target?.files?.length) + (valueLength) > filesMaxLimit || (field?.value?.length > filesMaxLimit && type !== "change"))) {
            maxLimitExceeded = true;
        }

        if (maxLimitExceeded) {
            return [false, `Cannot upload files more than ${filesMaxLimit}`];
        }
    }
    if (fileSizeLimit && event && type === "change") {
        Array.from(event?.target?.files).map((file) => {
            if ((file.size / (1024 * 1024)) > fileSizeLimit) {
                sizeLimitExceeded = (true);
            }
        })
        if (sizeLimitExceeded) {
            return [false, `Cannot upload files of size more than ${fileSizeLimit} MB`];
        }
    }
    if (field?.value && type === 'change') {
        let duplicateFiles = null
        for (let i = 0; i < field?.value.length; i++) {
            stateFileNames.push(field.value[i].name)
        }

        for (let i = 0; i < event?.target?.files?.length; i++) {
            currentFileNames.push(event?.target?.files[i].name)
        }
        let tempFileNames = currentFileNames.concat(stateFileNames);
        if (field.addMoreFiles) {
            duplicateFiles = tempFileNames.filter((name, position) => tempFileNames.indexOf(name) !== position)
        }
        else if (!field.addMoreFiles) {
            duplicateFiles = currentFileNames.filter((name, position) => currentFileNames.indexOf(name) !== position)
        }
        if (duplicateFiles.length) {
            return [false, `Duplicate files cannot be uploaded`];
        }
    }
    if (field.required && !field.value?.length && type !== "change") {
        return [true, 'This field is mandatory']
    }
    if (field.required && !event?.target?.files?.length === 0 && type === "change") {
        return [true, 'This field is mandatory']
    }
    if (!maxLimitExceeded && !sizeLimitExceeded) {
        if (field.addMoreFiles && (((event?.target?.files?.length) + (valueLength) === filesMaxLimit && type === "change") || (field?.value?.length === filesMaxLimit && type === "change"))) {
            document.getElementById(field.id).disabled = true;
        }
        else if (field?.value?.length < filesMaxLimit) {
            document.getElementById(field.id).disabled = false;
        }
        return [true, ""];
    }
}

export const validateField = (field, value, type, event, helpers) => {
    const { required, minLength, maxLength, min, max, regex, readOnly, filesMaxLimit, fileSizeLimit } = field;
    if (field.htmlElementType === "FILE") {
        return handleFileChange(event, filesMaxLimit, fileSizeLimit, field, type);
    }

    if ((!required && !value) || (readOnly)) {
        return [true, ""];
    }

    else if (field.htmlElementType === "INPUT") {
        if (required && !value) {
            return [true, "This field is mandatory"]
        }
        else if ((field.type === "date" && value) || (field.htmlElementType === "INPUT" && !minLength && !maxLength && !min && !max && !regex && field.type !== "date")) {
            return [true, ""]
        }

    }
    else if (field.htmlElementType === "SELECT") {
        if (value && value != field.defaultPlaceHolder) {
            return [true, ""];
        }
        else if ((!value || value == field.defaultPlaceHolder) && required && type == "blur") {
            return [true, "This field is mandatory"];
        }
    }
    else if ((field.htmlElementType === "RADIO") && (value)) {
        return [true, ""];
    }
    else if (field.htmlElementType === "DATALIST") {
        let emptyValue = false
        if (field.considerInputText) {
            if ((value && value.length == 0 || !value) && !field.inputText && required && type == "blur") {
                return [true, "This field is mandatory"]
            }
            else if (value && value.length != 0 && required && type == "blur") {
                return [true, ""]
            }
            else {
                return [true, ""]
            }

        }
        if (!field.considerInputText) {
            if (type == "change") {
                return [true, ""]
            }
        }
        if (Array.isArray(field.value)) {
            field.value.forEach(dataValue => {
                if (!dataValue || (dataValue && (!Array.isArray(dataValue) && !dataValue.trim()) || (Array.isArray(dataValue) && !dataValue[0].trim()))) {
                    emptyValue = true
                }
            })
            if (field.value && field.value.length == 0) {
                emptyValue = true
            }
        }
        if (required && (event && event.target && event.target.value) && field.value && field.value.length == 0 && type == 'blur') {
            return [true, "This field is mandatory"]
        }
        if (required && ((event && event.target && event.target.value) || (Array.isArray(value) && value[0] && value[0].trim() != "") || (!Array.isArray(value) && value && value.trim() != ""))) {
            return [true, ""]
        }
        if (required && (!field.value || emptyValue || (event && event.target && !event.target.value)) && type != "change") {
            return [true, "This field is mandatory"]
        }
        else {
            return [true, ""]
        }
    } else if (field.htmlElementType == "REACTSELECT" || field.htmlElementType == "ASYNCREACTSELECT") {
        if (event) {
            if (field.considerInputText) {
                if (required && type == "blur" && Validate().isEmpty(event?.target?.value) && Validate().isEmpty(field.value)) {
                    return [true, "This field is mandatory"]
                } else {
                    return [true, ""]
                }
            }else{
                if (required && type == "blur" && Validate().isEmpty(field.value)) {
                    return [true, "This field is mandatory"]
                } else {
                    return [true, ""]
                } 
            }
        } else {
            if (required && Validate().isEmpty(value)) {
                return [true, "This field is mandatory"]
            } else {
                return [true, ""]
            }
        }
    }else if ((field.htmlElementType === "CHECKBOX")) {
        if (type === "change") {
            if ((field.switchType === true && required && (!event.target.checked)) || (field.switchType === false && required && (value.length === 0) && (!event.target.checked))) {
                return [true, "This field is mandatory"]
            }
            return [true, ""]
        }
        else {
            if (required && (!value || Array.isArray(value) && value.length==0)) {
                return [true, "This field is mandatory"]
            }
            return [true, ""]
        }
    }
    else if (field.htmlElementType === "TEXTAREA") {
        if (required && (!value || !value?.trim())) {
            return [true, "This field is mandatory"]
        }
        else {
            return [true, ""]
        }
    }
    else if (field.htmlElementType === "DATERANGE") {
        if (required && (!value)) {
            return [true, "This field is mandatory"]
        }
        else if (value && field.dateInterval) {
            if (value[0]) {
                var maxDate = calculateUnixForGivenDays(value[0], field.dateInterval);
                helpers.updateSingleKeyValueIntoField("maxRange", maxDate, field.id);
            }
            return [true, ""]
        }
        else {
            return [true, ""]
        }
    }

    else if (required && (!value || value?.length === 0 || !value?.trim())) {
        return [true, 'This field is mandatory']
    }
    let [doesValueUpdate, errorMessage] = [false, ""]
    if (regex) {
        switch (regex) {
            case '^[0-9]+$':
                [doesValueUpdate, errorMessage] = validateNumeric(regex, value, type);
                break;
            case '^[A-Za-z]+$':
                [doesValueUpdate, errorMessage] = validateAlphabetic(regex, value, type);
                break;
            case '^[0-9a-zA-Z]+$':
                [doesValueUpdate, errorMessage] = validateAlphanumeric(regex, value, type);
                break;
            case '^[1-9][0-9]{9}$':
                [doesValueUpdate, errorMessage] = validatePhoneNumber(regex, value, type);
                break;
            case '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$':
                [doesValueUpdate, errorMessage] = validateEmailId(regex, value, type);
                break;
            default:
                if (!validateRegex(regex, value) && type == "change") {
                    [doesValueUpdate, errorMessage] = [false, "Enter valid input"]
                }
                else {
                    [doesValueUpdate, errorMessage] = [true, ""];
                }
                break;

        }
    }
    if (!errorMessage) {
        if (minLength || maxLength) {
            if (minLength && value.length < minLength) {
                [doesValueUpdate, errorMessage] = [true, `${field.label} must be atleast ${minLength} characters`];
            }
            else if (maxLength && value.length > maxLength) {
                [doesValueUpdate, errorMessage] = [false, `${field.label} should be atmost ${maxLength} characters`];
            }
            else {
                [doesValueUpdate, errorMessage] = [true, ''];
            }
        }
        if (min || max) {
            if (min && parseInt(value) < min) {
                [doesValueUpdate, errorMessage] = [true, `${field.label} should not be less than ${min}`];
            }
            else if (max && parseInt(value) > max) {
                [doesValueUpdate, errorMessage] = [true, `${field.label} should not be greater than ${max}`];
            }
            else {
                [doesValueUpdate, errorMessage] = [true, ''];
            }
        }

    }
    return [doesValueUpdate, errorMessage];

}

export const prepareEventKey = (eventType, elementId) => {
    let key = `EVENT_${eventType}_${elementId}`.trim();
    key = key.replaceAll("[^a-zA-Z0-9]", "");
    return key.toUpperCase();
}

export const prepareSubscribers = (event, elementIds, handler) => {
    const keys = elementIds.map(id => {
        return prepareEventKey(event, id);
    });
    const result = {};
    keys.map(key => {
        return result[key] = handler;
    });
    return result;
}


export const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const calculateUnixForGivenDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    result =parseInt((new Date(result).getTime()).toFixed(0));
    return result
}