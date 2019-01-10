import * as React from 'react';
declare class JqxSwitchButton extends React.PureComponent<ISwitchButtonProps, IState> {
    protected static defaultProps: ISwitchButtonProps;
    protected static getDerivedStateFromProps(props: ISwitchButtonProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ISwitchButtonProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ISwitchButtonProps): void;
    setOptions(options: ISwitchButtonProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    check(): void;
    disable(): void;
    enable(): void;
    toggle(): void;
    uncheck(): void;
    val(value?: boolean): boolean;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxSwitchButton;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ISwitchButtonOptions {
    checked?: boolean;
    disabled?: boolean;
    height?: string | number;
    orientation?: 'horizontal' | 'vertical';
    onLabel?: string;
    offLabel?: string;
    thumbSize?: string;
    rtl?: boolean;
    width?: string | number;
}
export interface ISwitchButtonProps extends ISwitchButtonOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
