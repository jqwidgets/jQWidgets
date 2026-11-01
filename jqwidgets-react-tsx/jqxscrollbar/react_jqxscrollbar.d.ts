import * as React from 'react';
declare class JqxScrollBar extends React.PureComponent<IScrollBarProps> {
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
    constructor(props: IScrollBarProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IScrollBarProps): void;
    getOptions(option: string): any;
    destroy(): void;
    isScrolling(): boolean;
    setPosition(index: number): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxScrollBar;
export declare const jqx: any;
export declare const JQXLite: any;
interface IScrollBarOptions {
    disabled?: boolean;
    height?: string | number;
    largestep?: number;
    min?: number;
    max?: number;
    rtl?: boolean;
    step?: number;
    showButtons?: boolean;
    thumbMinSize?: number;
    thumbSize?: number;
    thumbStep?: number | string;
    theme?: string;
    vertical?: boolean;
    value?: number;
    width?: string | number;
}
export interface IScrollBarProps extends IScrollBarOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onValueChanged?: (e?: any) => void;
    onComplete?: (e?: any) => void;
}
