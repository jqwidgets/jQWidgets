import * as React from 'react';
declare class JqxRadioButton extends React.PureComponent<IRadioButtonProps, IState> {
    protected static defaultProps: IRadioButtonProps;
    protected static getDerivedStateFromProps(props: IRadioButtonProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IRadioButtonProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IRadioButtonProps): void;
    setOptions(options: IRadioButtonProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    check(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    focus(): void;
    renderWidget(): void;
    uncheck(): void;
    val(value?: boolean): boolean;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxRadioButton;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IRadioButtonOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    hasThreeStates?: boolean;
    height?: string | number;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IRadioButtonProps extends IRadioButtonOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
