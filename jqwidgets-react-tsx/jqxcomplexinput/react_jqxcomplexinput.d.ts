import * as React from 'react';
declare class JqxComplexInput extends React.PureComponent<IComplexInputProps> {
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
    constructor(props: IComplexInputProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IComplexInputProps): void;
    getOptions(option: string): any;
    destroy(): void;
    getDecimalNotation(part: string, decimalNotation: string): string;
    getReal(complexnumber?: number): number;
    getImaginary(complexnumber?: number): number;
    renderWidget(): void;
    refresh(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxComplexInput;
export declare const jqx: any;
export declare const JQXLite: any;
interface IComplexInputOptions {
    decimalNotation?: 'default' | 'exponential' | 'scientific' | 'engineering';
    disabled?: boolean;
    height?: string | number;
    placeHolder?: string;
    roundedCorners?: boolean;
    rtl?: boolean;
    spinButtons?: boolean;
    spinButtonsStep?: number;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: string;
    width?: string | number;
}
export interface IComplexInputProps extends IComplexInputOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: any) => void;
}
