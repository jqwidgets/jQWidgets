import * as React from 'react';
declare class JqxInput extends React.PureComponent<IInputProps, IState> {
    protected static defaultProps: IInputProps;
    protected static getDerivedStateFromProps(props: IInputProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IInputProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IInputProps): void;
    setOptions(options: IInputProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    focus(): void;
    selectAll(): void;
    val(value?: number | string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxInput;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IInputOptions {
    disabled?: boolean;
    dropDownWidth?: number | string;
    displayMember?: string;
    height?: string | number;
    items?: number;
    minLength?: number;
    maxLength?: number;
    opened?: boolean;
    placeHolder?: string;
    popupZIndex?: number;
    query?: string;
    renderer?: (itemValue?: string, inputValue?: string) => string;
    rtl?: boolean;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
    value?: number | string;
}
export interface IInputProps extends IInputOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
}
