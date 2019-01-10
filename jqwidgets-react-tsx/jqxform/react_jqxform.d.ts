import * as React from 'react';
declare class JqxForm extends React.PureComponent<IFormProps, IState> {
    protected static defaultProps: IFormProps;
    protected static getDerivedStateFromProps(props: IFormProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IFormProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IFormProps): void;
    setOptions(options: IFormProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    getInstance(): any;
    refresh(): void;
    destroy(): void;
    hideComponent(name?: string): void;
    showComponent(name?: string): void;
    val(value?: any): any;
    submit(action?: string, target?: string, method?: string): void;
    getComponentByName(name?: string): any;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxForm;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IFormPadding {
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
}
interface IFormTemplateItem {
    type?: string;
    bind?: string;
    submit?: boolean;
    required?: boolean;
    requiredPosition?: string;
    info?: string;
    infoPosition?: string;
    component?: string;
    init?: (value: any) => void;
    label?: string;
    labelPosition?: string;
    labelAlign?: string;
    align?: string;
    valign?: string;
    labelValign?: string;
    height?: number | string;
    rowHeight?: number | string;
    width?: number | string;
    columnWidth?: number | string;
    labelWidth?: number | string;
    labelHeight?: number | string;
    padding?: IFormPadding;
    labelPadding?: IFormPadding;
    columns?: IFormTemplateItem[];
    optionsLayout?: string;
    options?: any[];
}
interface IFormOptions {
    padding?: IFormPadding;
    backgroundColor?: string;
    borderColor?: string;
    value?: any;
    template?: IFormTemplateItem[];
}
export interface IFormProps extends IFormOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onFormDataChange?: (e?: Event) => void;
    onButtonClick?: (e?: Event) => void;
}
