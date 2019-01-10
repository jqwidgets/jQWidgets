import * as React from 'react';
declare class JqxDocking extends React.PureComponent<IDockingProps, IState> {
    protected static defaultProps: IDockingProps;
    protected static getDerivedStateFromProps(props: IDockingProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDockingProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDockingProps): void;
    setOptions(options: IDockingProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addWindow(windowId: string, mode: any, panel: number, position: any): void;
    closeWindow(windowId: string): void;
    collapseWindow(windowId: string): void;
    destroy(): void;
    disableWindowResize(windowId: string): void;
    disable(): void;
    exportLayout(): string;
    enable(): void;
    expandWindow(windowId: string): void;
    enableWindowResize(windowId: string): void;
    focus(): void;
    hideAllCloseButtons(): void;
    hideAllCollapseButtons(): void;
    hideCollapseButton(windowId: string): void;
    hideCloseButton(windowId: string): void;
    importLayout(Json: string): void;
    move(windowId: string, panel: number, position: number): void;
    pinWindow(windowId: string): void;
    setWindowMode(windowId: string, mode: any): void;
    showCloseButton(windowId: string): void;
    showCollapseButton(windowId: string): void;
    setWindowPosition(windowId: string, top: any, left: number): void;
    showAllCloseButtons(): void;
    showAllCollapseButtons(): void;
    unpinWindow(windowId: string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDocking;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IDockingCookieOptions {
    domain?: string;
    expires?: number;
}
interface IDockingWindowsMode {
    windowID?: 'default' | 'docked' | 'floating';
}
interface IDockingOptions {
    cookies?: boolean;
    cookieOptions?: IDockingCookieOptions;
    disabled?: boolean;
    floatingWindowOpacity?: number;
    height?: number | string;
    keyboardNavigation?: boolean;
    mode?: 'default' | 'docked' | 'floating';
    orientation?: 'horizontal' | 'vertical';
    rtl?: boolean;
    theme?: string;
    width?: number | string;
    windowsMode?: IDockingWindowsMode;
    windowsOffset?: number;
}
export interface IDockingProps extends IDockingOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
}
