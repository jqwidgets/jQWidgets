import * as React from 'react';
declare class JqxInput extends React.PureComponent<IInputProps> {
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
    constructor(props: IInputProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IInputProps): void;
    getOptions(option: string): any;
    destroy(): void;
    focus(): void;
    selectAll(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxInput;
export declare const jqx: any;
export declare const JQXLite: any;
interface IInputOptions {
    aiKey?: string;
    disabled?: boolean;
    dropDownWidth?: number | string;
    displayMember?: string;
    height?: string | number;
    items?: number;
    inlineAutoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    opened?: boolean;
    placeHolder?: string;
    popupZIndex?: number;
    query?: string;
    renderer?: (itemValue: string, inputValue: string) => string;
    rtl?: boolean;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
    value?: number | string;
}
export interface IInputProps extends IInputOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: any) => void;
    onClose?: (e?: any) => void;
    onOpen?: (e?: any) => void;
    onSelect?: (e?: any) => void;
}
