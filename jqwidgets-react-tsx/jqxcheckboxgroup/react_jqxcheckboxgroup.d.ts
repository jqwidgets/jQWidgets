import * as React from 'react';
declare class JqxCheckBoxGroup extends React.PureComponent<ICheckBoxGroupProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: ICheckBoxGroupProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ICheckBoxGroupProps): void;
    getOptions(option: string): any;
    getValue(): [];
    getValueAt(index: number): string;
    enableAt(index: number): void;
    disableAt(index: number): void;
    checkAt(index: number): void;
    uncheckAt(index: number): void;
    uncheckAll(): void;
    checkAll(): void;
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
export default JqxCheckBoxGroup;
export declare const jqx: any;
export declare const JQXLite: any;
interface ICheckBoxGroupOptions {
    change?: (item: any) => void;
    disabled?: boolean;
    items?: [];
    value?: [];
    layout?: string;
    labelPosition?: string;
    rtl?: boolean;
    theme?: string;
}
export interface ICheckBoxGroupProps extends ICheckBoxGroupOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
