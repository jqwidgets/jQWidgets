import * as React from 'react';
declare class JqxNotification extends React.PureComponent<INotificationProps> {
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
    constructor(props: INotificationProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: INotificationProps): void;
    getOptions(option: string): any;
    closeAll(): void;
    closeLast(): void;
    destroy(): void;
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
export default JqxNotification;
export declare const jqx: any;
export declare const JQXLite: any;
export interface INotificationIcon {
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
    template?: 'info' | 'warning' | 'success' | 'error' | 'mail' | 'time' | null;
    theme?: string;
    width?: string | number;
    zIndex?: number;
}
export interface INotificationProps extends INotificationOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: (e?: any) => void;
    onClick?: (e?: any) => void;
    onOpen?: (e?: any) => void;
}
