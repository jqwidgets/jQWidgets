import * as React from 'react';
declare class JqxQRcode extends React.PureComponent<IQRcodeProps> {
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
    constructor(props: IQRcodeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IQRcodeProps): void;
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
export default JqxQRcode;
export declare const jqx: any;
export declare const JQXLite: any;
interface IQRcodeOptions {
    backgroundColor?: string;
    displayLabel?: boolean;
    embedImage?: string;
    errorLevel?: string;
    imageHeight?: number;
    imageWidth?: number;
    labelColor?: string;
    labelFont?: string;
    labelFontSize?: number;
    labelMarginBottom?: number;
    labelMarginTop?: number;
    labelPosition?: string;
    lineColor?: string;
    squareWidth?: number;
    renderAs?: string;
    value?: string;
}
export interface IQRcodeProps extends IQRcodeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onInvalid?: (e?: any) => void;
}
