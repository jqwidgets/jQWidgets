import * as React from 'react';
declare class JqxCheckBox extends React.PureComponent<ICheckBoxProps> {
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
    constructor(props: ICheckBoxProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ICheckBoxProps): void;
    getOptions(option: string): any;
    check(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    focus(): void;
    indeterminate(): void;
    renderWidget(): void;
    toggle(): void;
    uncheck(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxCheckBox;
export declare const jqx: any;
export declare const JQXLite: any;
interface ICheckBoxOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean | null;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    height?: number | string;
    hasThreeStates?: boolean;
    locked?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: number | string;
}
export interface ICheckBoxProps extends ICheckBoxOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChecked?: (e?: any) => void;
    onChange?: (e?: any) => void;
    onIndeterminate?: (e?: any) => void;
    onUnchecked?: (e?: any) => void;
}
