import * as React from 'react';
declare class JqxSwitchButton extends React.PureComponent<ISwitchButtonProps> {
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
    constructor(props: ISwitchButtonProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ISwitchButtonProps): void;
    getOptions(option: string): any;
    check(): void;
    disable(): void;
    enable(): void;
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
export default JqxSwitchButton;
export declare const jqx: any;
export declare const JQXLite: any;
interface ISwitchButtonOptions {
    checked?: boolean;
    disabled?: boolean;
    height?: string | number;
    orientation?: 'horizontal' | 'vertical';
    onLabel?: string;
    offLabel?: string;
    theme?: string;
    thumbSize?: string;
    rtl?: boolean;
    width?: string | number;
}
export interface ISwitchButtonProps extends ISwitchButtonOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChecked?: (e?: any) => void;
    onChange?: (e?: any) => void;
    onUnchecked?: (e?: any) => void;
}
