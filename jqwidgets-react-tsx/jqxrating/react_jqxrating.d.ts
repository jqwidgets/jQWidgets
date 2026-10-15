import * as React from 'react';
declare class JqxRating extends React.PureComponent<IRatingProps> {
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
    constructor(props: IRatingProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IRatingProps): void;
    getOptions(option: string): any;
    disable(): void;
    enable(): void;
    getValue(): number;
    setValue(value: number): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxRating;
export declare const jqx: any;
export declare const JQXLite: any;
interface IRatingOptions {
    count?: number;
    disabled?: boolean;
    height?: string | number;
    itemHeight?: number;
    itemWidth?: number;
    precision?: number;
    singleVote?: boolean;
    theme?: string;
    value?: number;
    width?: string | number;
}
export interface IRatingProps extends IRatingOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
