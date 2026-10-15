import * as React from 'react';
declare class JqxDocking extends React.PureComponent<IDockingProps> {
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
    constructor(props: IDockingProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDockingProps): void;
    getOptions(option: string): any;
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
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDocking;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IDockingCookieOptions {
    domain?: string;
    expires?: number;
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
    windowsMode?: object;
    windowsOffset?: number;
}
export interface IDockingProps extends IDockingOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onDragStart?: (e?: any) => void;
    onDragEnd?: (e?: any) => void;
}
