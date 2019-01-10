import * as React from 'react';
declare class JqxLayout extends React.PureComponent<ILayoutProps, IState> {
    protected static defaultProps: ILayoutProps;
    protected static getDerivedStateFromProps(props: ILayoutProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ILayoutProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ILayoutProps): void;
    setOptions(options: ILayoutProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    loadLayout(Layout: any): void;
    refresh(): void;
    renderWidget(): void;
    saveLayout(): any;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxLayout;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ILayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel';
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
export interface ILayoutProps extends ILayoutOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onPin?: (e?: Event) => void;
    onResize?: (e?: Event) => void;
    onUnpin?: (e?: Event) => void;
}
