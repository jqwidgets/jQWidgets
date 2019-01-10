import * as React from 'react';
declare class JqxTextArea extends React.PureComponent<ITextAreaProps, IState> {
    protected static defaultProps: ITextAreaProps;
    protected static getDerivedStateFromProps(props: ITextAreaProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ITextAreaProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ITextAreaProps): void;
    setOptions(options: ITextAreaProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    focus(): void;
    refresh(): void;
    renderWidget(): void;
    selectAll(): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxTextArea;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ITextAreaOptions {
    disabled?: boolean;
    displayMember?: string;
    dropDownWidth?: number | string;
    height?: string | number;
    items?: number;
    maxLength?: number;
    minLength?: number;
    opened?: boolean;
    placeHolder?: string;
    popupZIndex?: number;
    query?: string;
    renderer?: (itemValue: any, inputValue: any) => any;
    roundedCorners?: boolean;
    rtl?: boolean;
    scrollBarSize?: number;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
}
export interface ITextAreaProps extends ITextAreaOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
}
