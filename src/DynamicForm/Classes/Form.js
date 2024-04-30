import HtmlElement from "./HtmlElement";

class Form extends HtmlElement {

    //List of groups
    htmlGroups = [];
    submitDisabled = false;
    atleastOneFieldRequired = false;

    constructor(label, id) {
        super('FORM', label, id);
    }



}
export default Form;