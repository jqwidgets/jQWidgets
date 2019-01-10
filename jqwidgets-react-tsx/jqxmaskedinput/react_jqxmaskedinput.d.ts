import * as React from 'react';
declare class JqxMaskedInput extends React.PureComponent<IMaskedInputProps, IState> {
    protected static defaultProps: IMaskedInputProps;
    protected static getDerivedStateFromProps(props: IMaskedInputProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IMaskedInputProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IMaskedInputProps): void;
    setOptions(options: IMaskedInputProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    clear(): void;
    destroy(): void;
    focus(): void;
    val(value?: number | string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxMaskedInput;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IMaskedInputOptions {
    disabled?: boolean;
    height?: string | number;
    mask?: string;
    promptChar?: number | string;
    readOnly?: boolean;
    rtl?: boolean;
    theme?: string;
    textAlign?: 'left' | 'right';
    value?: number | string;
    width?: string | number;
}
export interface IMaskedInputProps extends IMaskedInputOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
