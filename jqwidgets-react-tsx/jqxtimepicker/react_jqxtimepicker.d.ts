import * as React from 'react';
declare class JqxTimePicker extends React.PureComponent<ITimePickerProps> {
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
    private _changedInARow;
    private _warned;
    constructor(props: ITimePickerProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ITimePickerProps): void;
    getOptions(option: string): any;
    setHours(hours: number): void;
    setMinutes(minutes: number): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxTimePicker;
export declare const jqx: any;
export declare const JQXLite: any;
interface ITimePickerOptions {
    animation?: boolean;
    autoSwitchToMinutes?: boolean;
    disabled?: boolean;
    footer?: boolean;
    footerTemplate?: string;
    format?: string;
    height?: number | string;
    minuteInterval?: number;
    name?: string;
    readonly?: boolean;
    selection?: 'hour' | 'minute';
    theme?: string;
    unfocusable?: boolean;
    value?: any;
    view?: 'landscape' | 'portrait';
    width?: number | string;
}
export interface ITimePickerProps extends ITimePickerOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
