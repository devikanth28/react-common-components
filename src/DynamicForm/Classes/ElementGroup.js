import HtmlElement from "./HtmlElement";

class ElementGroup extends HtmlElement {

    //List of ElementGroups
    groups = [];
    //List of htmlElementss
    groupElements = [];

    constructor(label, id) {
        super('ELEMENTGROUP', label, id);
    }

}

export default ElementGroup;