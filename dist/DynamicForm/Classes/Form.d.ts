export default Form;
declare class Form extends HtmlElement {
    constructor(label: any, id: any);
    htmlGroups: any[];
    submitDisabled: boolean;
    atleastOneFieldRequired: boolean;
}
import HtmlElement from "./HtmlElement";
