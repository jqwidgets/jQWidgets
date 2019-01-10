import * as React from 'react';
declare class JqxFormattedInput extends React.PureComponent<IFormattedInputProps, IState> {
    protected static defaultProps: IFormattedInputProps;
    protected static getDerivedStateFromProps(props: IFormattedInputProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IFormattedInputProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IFormattedInputProps): void;
    setOptions(options: IFormattedInputProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    destroy(): void;
    focus(): void;
    open(): void;
    renderWidget(): void;
    refresh(): void;
    selectAll(): void;
    selectFirst(): void;
    selectLast(): void;
    val(value?: number | string): any;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxFormattedInput;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IFormattedInputOptions {
    disabled?: boolean;
    decimalNotation?: 'default' | 'exponential';
    dropDown?: boolean;
    dropDownWidth?: number | string;
    height?: number | string;
    min?: number | string;
    max?: number | string;
    placeHolder?: string;
    popupZIndex?: number;
    roundedCorners?: boolean;
    rtl?: boolean;
    radix?: number | string;
    spinButtons?: boolean;
    spinButtonsStep?: number;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    upperCase?: boolean;
    value?: number | string;
    width?: number | string;
}
export interface IFormattedInputProps extends IFormattedInputOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onRadixChange?: (e?: Event) => void;
}
