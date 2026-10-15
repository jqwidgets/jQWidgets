import * as React from 'react';
declare class JqxDropDownButton extends React.PureComponent<IDropDownButtonProps> {
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
    constructor(props: IDropDownButtonProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDropDownButtonProps): void;
    getOptions(option: string): any;
    close(): void;
    destroy(): void;
    focus(): void;
    getContent(): any;
    isOpened(): boolean;
    open(): void;
    setContent(content: string | HTMLElement): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDropDownButton;
export declare const jqx: any;
export declare const JQXLite: any;
interface IDropDownButtonOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowSize?: number;
    autoOpen?: boolean;
    closeDelay?: number;
    disabled?: boolean;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'top' | 'bottom';
    dropDownWidth?: number | string;
    enableBrowserBoundsDetection?: boolean;
    height?: string | number;
    initContent?: () => void;
    openDelay?: number;
    popupZIndex?: number;
    rtl?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    width?: string | number;
}
export interface IDropDownButtonProps extends IDropDownButtonOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: (e?: any) => void;
    onOpen?: (e?: any) => void;
}
