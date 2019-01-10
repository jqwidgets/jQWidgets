import * as React from 'react';
declare class JqxCheckBox extends React.PureComponent<ICheckBoxProps, IState> {
    protected static defaultProps: ICheckBoxProps;
    protected static getDerivedStateFromProps(props: ICheckBoxProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ICheckBoxProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ICheckBoxProps): void;
    setOptions(options: ICheckBoxProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    check(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    focus(): void;
    indeterminate(): void;
    renderWidget(): void;
    toggle(): void;
    uncheck(): void;
    val(value?: boolean): boolean;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxCheckBox;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ICheckBoxOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean | null;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    height?: number | string;
    hasThreeStates?: boolean;
    locked?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: number | string;
}
export interface ICheckBoxProps extends ICheckBoxOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onIndeterminate?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
