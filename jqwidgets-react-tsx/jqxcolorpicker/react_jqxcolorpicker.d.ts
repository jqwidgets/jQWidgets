import * as React from 'react';
declare class JqxColorPicker extends React.PureComponent<IColorPickerProps, IState> {
    protected static defaultProps: IColorPickerProps;
    protected static getDerivedStateFromProps(props: IColorPickerProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IColorPickerProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IColorPickerProps): void;
    setOptions(options: IColorPickerProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    getColor(): any;
    setColor(color: object | string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxColorPicker;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IColorPickerOptions {
    color?: string;
    colorMode?: 'hue' | 'saturation';
    disabled?: boolean;
    height?: string | number;
    showTransparent?: boolean;
    width?: string | number;
}
export interface IColorPickerProps extends IColorPickerOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onColorchange?: (e?: Event) => void;
}
