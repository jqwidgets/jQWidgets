import * as React from 'react';
declare class JqxDockingLayout extends React.PureComponent<IDockingLayoutProps> {
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
    constructor(props: IDockingLayoutProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDockingLayoutProps): void;
    getOptions(option: string): any;
    addFloatGroup(width: number | string, height: number | string, position: IDockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent?: any): void;
    destroy(): void;
    loadLayout(layout: any): void;
    refresh(): void;
    renderWidget(): void;
    saveLayout(): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDockingLayout;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IDockingLayoutLayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel' | 'floatGroup';
    alignment?: 'left' | 'right' | 'top' | 'bottom';
    allowClose?: boolean;
    allowPin?: boolean;
    allowUnpin?: boolean;
    contentContainer?: string;
    height?: number | string;
    initContent?: (panel: any) => void;
    minHeight?: number | string;
    minWidth?: number | string;
    orientation?: 'horizontal' | 'vertical';
    pinnedHeight?: number | string;
    pinnedWidth?: number | string;
    position?: IDockingLayoutLayoutPosition;
    selected?: boolean;
    title?: string;
    unpinnedHeight?: number | string;
    unpinnedWidth?: number | string;
    width?: number | string;
    items?: IDockingLayoutLayout[];
}
export interface IDockingLayoutLayoutPosition {
    x?: number;
    y?: number;
}
interface IDockingLayoutOptions {
    contextMenu?: boolean;
    height?: string | number;
    layout?: IDockingLayoutLayout[];
    minGroupHeight?: number | string;
    minGroupWidth?: number | string;
    resizable?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IDockingLayoutProps extends IDockingLayoutOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onDock?: (e?: any) => void;
    onFloatGroupClosed?: (e?: any) => void;
    onFloat?: (e?: any) => void;
    onPin?: (e?: any) => void;
    onResize?: (e?: any) => void;
    onUnpin?: (e?: any) => void;
}
