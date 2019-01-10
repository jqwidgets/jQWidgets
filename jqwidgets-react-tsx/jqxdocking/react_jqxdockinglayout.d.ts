import * as React from 'react';
declare class JqxDockingLayout extends React.PureComponent<IDockingLayoutProps, IState> {
    protected static defaultProps: IDockingLayoutProps;
    protected static getDerivedStateFromProps(props: IDockingLayoutProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDockingLayoutProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDockingLayoutProps): void;
    setOptions(options: IDockingLayoutProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addFloatGroup(width: number | string, height: number | string, position: IDockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void;
    destroy(): void;
    loadLayout(layout: any): void;
    refresh(): void;
    renderWidget(): void;
    saveLayout(): any;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDockingLayout;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IDockingLayoutLayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel' | 'floatGroup';
    alignment?: 'left' | 'right' | 'top' | 'bottom';
    allowClose?: boolean;
    allowPin?: boolean;
    allowUnpin?: boolean;
    contentContainer?: string;
    height?: number | string;
    initContent?: () => void;
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
interface IDockingLayoutLayoutPosition {
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
export interface IDockingLayoutProps extends IDockingLayoutOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onDock?: (e?: Event) => void;
    onFloatGroupClosed?: (e?: Event) => void;
    onFloat?: (e?: Event) => void;
    onPin?: (e?: Event) => void;
    onResize?: (e?: Event) => void;
    onUnpin?: (e?: Event) => void;
}
