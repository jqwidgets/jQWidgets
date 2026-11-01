import * as React from 'react';
declare class JqxBarcode extends React.PureComponent<IBarcodeProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _changedInARow;
    private _warned;
    constructor(props: IBarcodeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IBarcodeProps): void;
    getOptions(option: string): any;
    export(format: string, fileName?: string): any;
    getDataURL(format: string): string;
    getDataURLAsync(format: string): object;
    isValid(): boolean;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxBarcode;
export declare const jqx: any;
export declare const JQXLite: any;
interface IBarcodeOptions {
    backgroundColor?: string;
    displayLabel?: boolean;
    labelColor?: string;
    labelFont?: string;
    labelFontSize?: number;
    labelMarginBottom?: number;
    labelMarginTop?: number;
    labelPosition?: string;
    lineColor?: string;
    lineHeight?: number;
    lineWidth?: number;
    renderAs?: string;
    type?: string;
    value?: string;
}
export interface IBarcodeProps extends IBarcodeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onInvalid?: (e?: any) => void;
}
