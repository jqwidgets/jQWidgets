import * as React from 'react';
declare class JqxSplitter extends React.PureComponent<ISplitterProps> {
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
    constructor(props: ISplitterProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ISplitterProps): void;
    getOptions(option: string): any;
    collapse(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    expand(): void;
    renderWidget(): void;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxSplitter;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ISplitterPanel {
    size?: number | string;
    min?: number | string;
    collapsible?: boolean;
    collapsed?: boolean;
}
interface ISplitterOptions {
    disabled?: boolean;
    height?: string | number;
    initContent?: () => void;
    orientation?: 'horizontal' | 'vertical';
    panels?: ISplitterPanel[];
    resizable?: boolean;
    splitBarSize?: number;
    showSplitBar?: boolean;
    theme?: string;
    touchSplitBarSize?: number;
    width?: string | number;
}
export interface ISplitterProps extends ISplitterOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onCollapsed?: (e?: any) => void;
    onExpanded?: (e?: any) => void;
    onResize?: (e?: any) => void;
    onResizeStart?: (e?: any) => void;
}
