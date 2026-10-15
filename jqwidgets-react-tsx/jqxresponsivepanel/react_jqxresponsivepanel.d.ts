import * as React from 'react';
declare class JqxResponsivePanel extends React.PureComponent<IResponsivePanelProps> {
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
    constructor(props: IResponsivePanelProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IResponsivePanelProps): void;
    getOptions(option: string): any;
    close(): void;
    destroy(): void;
    isCollapsed(): boolean;
    isOpened(): boolean;
    open(): void;
    refresh(): void;
    renderWidget(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxResponsivePanel;
export declare const jqx: any;
export declare const JQXLite: any;
interface IResponsivePanelOptions {
    animationDirection?: 'left' | 'right' | 'top' | 'bottom';
    animationHideDelay?: number | string;
    animationShowDelay?: number | string;
    animationType?: 'fade' | 'slide' | 'none';
    autoClose?: boolean;
    collapseBreakpoint?: number;
    collapseWidth?: number;
    height?: string | number;
    initContent?: () => void;
    theme?: string;
    toggleButton?: string | any;
    toggleButtonSize?: number | string;
    width?: string | number;
}
export interface IResponsivePanelProps extends IResponsivePanelOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: (e?: any) => void;
    onCollapse?: (e?: any) => void;
    onExpand?: (e?: any) => void;
    onOpen?: (e?: any) => void;
}
