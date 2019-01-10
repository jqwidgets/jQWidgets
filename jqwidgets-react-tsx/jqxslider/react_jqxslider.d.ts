import * as React from 'react';
declare class JqxSlider extends React.PureComponent<ISliderProps, IState> {
    protected static defaultProps: ISliderProps;
    protected static getDerivedStateFromProps(props: ISliderProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ISliderProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ISliderProps): void;
    setOptions(options: ISliderProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    decrementValue(): void;
    disable(): void;
    enable(): void;
    focus(): void;
    getValue(): number;
    incrementValue(): void;
    setValue(index: number | number[]): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxSlider;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ISliderTickLabelFormatFunction {
    value?: number;
}
interface ISliderTooltipFormatFunction {
    value?: number;
}
interface ISliderOptions {
    buttonsPosition?: 'both' | 'left' | 'right';
    disabled?: boolean;
    height?: string | number;
    layout?: 'normal' | 'reverse';
    mode?: 'default' | 'fixed';
    minorTicksFrequency?: number;
    minorTickSize?: number;
    max?: number;
    min?: number;
    orientation?: string;
    rangeSlider?: boolean;
    rtl?: boolean;
    step?: number;
    showTicks?: boolean;
    showMinorTicks?: boolean;
    showTickLabels?: boolean;
    showButtons?: boolean;
    showRange?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    ticksPosition?: 'top' | 'bottom' | 'both';
    ticksFrequency?: number;
    tickSize?: number;
    tickLabelFormatFunction?: (value: ISliderTickLabelFormatFunction['value']) => string;
    tooltip?: boolean;
    tooltipHideDelay?: number;
    tooltipPosition?: 'near' | 'far';
    tooltipFormatFunction?: (value: ISliderTooltipFormatFunction['value']) => any;
    value?: any;
    values?: number[];
    width?: number | string;
}
export interface ISliderProps extends ISliderOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onSlide?: (e?: Event) => void;
    onSlideStart?: (e?: Event) => void;
    onSlideEnd?: (e?: Event) => void;
}
