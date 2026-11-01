import * as React from 'react';
declare class JqxColorPicker extends React.PureComponent<IColorPickerProps> {
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
    constructor(props: IColorPickerProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IColorPickerProps): void;
    getOptions(option: string): any;
    getColor(): any;
    setColor(color: object | string): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxColorPicker;
export declare const jqx: any;
export declare const JQXLite: any;
interface IColorPickerOptions {
    color?: string;
    colorMode?: 'hue' | 'saturation';
    colorBarString?: string;
    colorMapString?: string;
    disabled?: boolean;
    hexString?: string;
    redString?: string;
    greenString?: string;
    blueString?: string;
    height?: string | number;
    showTransparent?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IColorPickerProps extends IColorPickerOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onColorchange?: (e?: any) => void;
}
