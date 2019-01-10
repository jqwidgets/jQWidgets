import * as React from 'react';
declare class JqxDropDownButton extends React.PureComponent<IDropDownButtonProps, IState> {
    protected static defaultProps: IDropDownButtonProps;
    protected static getDerivedStateFromProps(props: IDropDownButtonProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDropDownButtonProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDropDownButtonProps): void;
    setOptions(options: IDropDownButtonProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    destroy(): void;
    focus(): void;
    getContent(): any;
    isOpened(): boolean;
    open(): void;
    setContent(content: string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDropDownButton;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
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
export interface IDropDownButtonProps extends IDropDownButtonOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
