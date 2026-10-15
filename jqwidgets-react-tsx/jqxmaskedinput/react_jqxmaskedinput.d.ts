import * as React from 'react';
declare class JqxMaskedInput extends React.PureComponent<IMaskedInputProps> {
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
    constructor(props: IMaskedInputProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IMaskedInputProps): void;
    getOptions(option: string): any;
    clear(): void;
    destroy(): void;
    focus(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxMaskedInput;
export declare const jqx: any;
export declare const JQXLite: any;
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
export interface IMaskedInputProps extends IMaskedInputOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
    onValueChanged?: (e?: any) => void;
}
