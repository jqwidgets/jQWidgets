import * as React from 'react';
declare class JqxPopover extends React.PureComponent<IPopoverProps> {
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
    constructor(props: IPopoverProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPopoverProps): void;
    getOptions(option: string): any;
    close(): void;
    destroy(): void;
    open(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPopover;
export declare const jqx: any;
export declare const JQXLite: any;
interface IPopoverOptions {
    arrowOffsetValue?: number;
    animationOpenDelay?: number | string;
    animationCloseDelay?: number | string;
    autoClose?: boolean;
    animationType?: 'none' | 'fade';
    height?: number | string;
    initContent?: () => void;
    isModal?: boolean;
    offset?: any;
    position?: 'top' | 'bottom' | 'left' | 'right';
    rtl?: boolean;
    selector?: string;
    showArrow?: boolean;
    showCloseButton?: boolean;
    width?: number | string;
    title?: string | number;
    theme?: string;
}
export interface IPopoverProps extends IPopoverOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: (e?: any) => void;
    onOpen?: (e?: any) => void;
}
