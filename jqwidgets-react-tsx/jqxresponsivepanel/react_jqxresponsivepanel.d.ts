import * as React from 'react';
declare class JqxResponsivePanel extends React.PureComponent<IResponsivePanelProps, IState> {
    protected static defaultProps: IResponsivePanelProps;
    protected static getDerivedStateFromProps(props: IResponsivePanelProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IResponsivePanelProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IResponsivePanelProps): void;
    setOptions(options: IResponsivePanelProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    destroy(): void;
    isCollapsed(): boolean;
    isOpened(): boolean;
    open(): void;
    refresh(): void;
    renderWidget(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxResponsivePanel;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
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
export interface IResponsivePanelProps extends IResponsivePanelOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: (e?: Event) => void;
    onCollapse?: (e?: Event) => void;
    onExpand?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
