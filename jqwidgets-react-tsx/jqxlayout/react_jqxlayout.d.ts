import * as React from 'react';
declare class JqxLayout extends React.PureComponent<ILayoutProps> {
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
    constructor(props: ILayoutProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ILayoutProps): void;
    getOptions(option: string): any;
    destroy(): void;
    loadLayout(Layout: any): void;
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
export default JqxLayout;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ILayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel';
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
    selected?: boolean;
    title?: number | string;
    unpinnedHeight?: number | string;
    unpinnedWidth?: number | string;
    width?: number | string;
    items?: ILayout[];
}
interface ILayoutOptions {
    contextMenu?: boolean;
    height?: string | number;
    layout?: ILayout[];
    minGroupHeight?: number | string;
    minGroupWidth?: number | string;
    resizable?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}
export interface ILayoutProps extends ILayoutOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onPin?: (e?: any) => void;
    onResize?: (e?: any) => void;
    onUnpin?: (e?: any) => void;
}
