import * as React from 'react';
declare class JqxTooltip extends React.PureComponent<ITooltipProps, IState> {
    protected static defaultProps: ITooltipProps;
    protected static getDerivedStateFromProps(props: ITooltipProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ITooltipProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ITooltipProps): void;
    setOptions(options: ITooltipProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(index?: number): void;
    destroy(): void;
    open(left?: number, top?: number): void;
    refresh(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxTooltip;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ITooltipOptions {
    absolutePositionX?: number;
    absolutePositionY?: number;
    autoHide?: boolean;
    autoHideDelay?: number;
    animationShowDelay?: number | string;
    animationHideDelay?: number | string;
    content?: string;
    closeOnClick?: boolean;
    disabled?: boolean;
    enableBrowserBoundsDetection?: boolean;
    height?: number | string;
    left?: number;
    name?: string;
    opacity?: number;
    position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' | 'absolute' | 'mouse' | 'mouseenter' | 'default';
    rtl?: boolean;
    showDelay?: number;
    showArrow?: boolean;
    top?: number | string;
    trigger?: 'hover' | 'click';
    theme?: string;
    width?: number | string;
}
export interface ITooltipProps extends ITooltipOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: (e?: Event) => void;
    onClosing?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onOpening?: (e?: Event) => void;
}
