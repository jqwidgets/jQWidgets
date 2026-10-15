import * as React from 'react';
declare class JqxSplitLayout extends React.PureComponent<ISplitLayoutProps> {
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
    constructor(props: ISplitLayoutProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ISplitLayoutProps): void;
    getOptions(option: string): any;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxSplitLayout;
export declare const jqx: any;
export declare const JQXLite: any;
interface ISplitLayoutOptions {
    dataSource?: any;
    ready?: any;
    orientation?: string;
    theme?: string;
}
export interface ISplitLayoutProps extends ISplitLayoutOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onResize?: (e?: any) => void;
    onStateChange?: (e?: any) => void;
}
