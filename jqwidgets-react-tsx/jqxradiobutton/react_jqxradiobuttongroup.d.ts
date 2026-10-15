import * as React from 'react';
declare class JqxRadioButtonGroup extends React.PureComponent<IRadioButtonGroupProps> {
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
    constructor(props: IRadioButtonGroupProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IRadioButtonGroupProps): void;
    getOptions(option: string): any;
    getValue(): [];
    getValueAt(index: number): string;
    enableAt(index: number): void;
    disableAt(index: number): void;
    checkAt(index: number): void;
    uncheckAt(index: number): void;
    uncheckAll(): void;
    checkValue(value: string): void;
    uncheckValue(value: string): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    renderWidget(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxRadioButtonGroup;
export declare const jqx: any;
export declare const JQXLite: any;
interface IRadioButtonGroupOptions {
    change?: (item: any) => void;
    disabled?: boolean;
    items?: [];
    value?: [];
    layout?: string;
    labelPosition?: string;
    rtl?: boolean;
    theme?: string;
}
export interface IRadioButtonGroupProps extends IRadioButtonGroupOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
