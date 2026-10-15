import * as React from 'react';
declare class JqxForm extends React.PureComponent<IFormProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    constructor(props: IFormProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IFormProps): void;
    getOptions(option: string): any;
    getInstance(): any;
    refresh(): void;
    destroy(): void;
    hideComponent(name?: string): void;
    showComponent(name?: string): void;
    val(value?: any): any;
    submit(action?: string, target?: string, method?: string): void;
    getComponentByName(name?: string): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxForm;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IFormPadding {
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
}
export interface IFormTemplateItem {
    name?: string;
    text?: string;
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
    theme?: string;
    value?: any;
    template?: IFormTemplateItem[];
    enableSmartPaste?: boolean;
    aiKey?: string;
    aiUrl?: string;
}
export interface IFormProps extends IFormOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onFormDataChange?: (e?: any) => void;
    onButtonClick?: (e?: any) => void;
}
