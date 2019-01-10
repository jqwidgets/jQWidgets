import * as React from 'react';
declare class JqxNotification extends React.PureComponent<INotificationProps, IState> {
    protected static defaultProps: INotificationProps;
    protected static getDerivedStateFromProps(props: INotificationProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: INotificationProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: INotificationProps): void;
    setOptions(options: INotificationProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    closeAll(): void;
    closeLast(): void;
    destroy(): void;
    open(): void;
    refresh(): void;
    renderWidget(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxNotification;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface INotificationIcon {
    width?: number | string;
    height?: number | string;
    url?: string;
    padding?: number | string;
}
interface INotificationOptions {
    appendContainer?: string;
    autoOpen?: boolean;
    animationOpenDelay?: number;
    animationCloseDelay?: number;
    autoClose?: boolean;
    autoCloseDelay?: number | string;
    blink?: boolean;
    browserBoundsOffset?: number;
    closeOnClick?: boolean;
    disabled?: boolean;
    height?: number | string;
    hoverOpacity?: number;
    icon?: INotificationIcon;
    notificationOffset?: number;
    opacity?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    rtl?: boolean;
    showCloseButton?: boolean;
    template?: 'info' | 'warning' | 'success' | 'error' | 'mail' | 'time' | 'null';
    theme?: string;
    width?: string | number;
}
export interface INotificationProps extends INotificationOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: (e?: Event) => void;
    onClick?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
