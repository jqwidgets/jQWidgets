import * as React from 'react';
declare class JqxLoader extends React.PureComponent<ILoaderProps> {
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
    constructor(props: ILoaderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ILoaderProps): void;
    getOptions(option: string): any;
    close(): void;
    open(left?: number | string, top?: number | string): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxLoader;
export declare const jqx: any;
export declare const JQXLite: any;
interface ILoaderOptions {
    autoOpen?: boolean;
    height?: string | number;
    html?: string;
    isModal?: boolean;
    imagePosition?: 'center' | 'top' | 'bottom';
    rtl?: boolean;
    text?: number | string;
    textPosition?: 'top' | 'bottom' | 'left' | 'right';
    theme?: string;
    width?: string | number;
}
export interface ILoaderProps extends ILoaderOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
