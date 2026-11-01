import * as React from 'react';
declare class JqxPanel extends React.PureComponent<IPanelProps> {
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
    constructor(props: IPanelProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPanelProps): void;
    getOptions(option: string): any;
    append(HTMLElement: any): void;
    clearcontent(): void;
    destroy(): void;
    focus(): void;
    getScrollHeight(): number;
    getVScrollPosition(): number;
    getScrollWidth(): number;
    getHScrollPosition(): number;
    prepend(HTMLElement: any): void;
    remove(HTMLElement: any): void;
    scrollTo(left: number | string, top: number | string): void;
    setcontent(html: string): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPanel;
export declare const jqx: any;
export declare const JQXLite: any;
interface IPanelOptions {
    autoUpdate?: boolean;
    autoUpdateInterval?: number;
    disabled?: boolean;
    height?: string | number;
    horizontalScrollBarMax?: number;
    rtl?: boolean;
    sizeMode?: 'fixed' | 'wrap';
    scrollBarSize?: number | string;
    theme?: string;
    verticalScrollBarMax?: number;
    width?: string | number;
}
export interface IPanelProps extends IPanelOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
