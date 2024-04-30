export default ReactSelectHelper;
declare function ReactSelectHelper(): Readonly<{
    createReactSelectOption: (displayValue: any, value: any, optionId: any, idx: any, disabled: any) => {
        label: string;
        isDisabled: any;
        value: string;
        id: any;
        key: any;
    };
    convertToReactSelectOptions: (optionsList: any) => any;
}>;
