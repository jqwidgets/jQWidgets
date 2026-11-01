import * as React from 'react';
declare class JqxSlider extends React.PureComponent<ISliderProps> {
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
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: ISliderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ISliderProps): void;
    getOptions(option: string): any;
    destroy(): void;
    decrementValue(): void;
    disable(): void;
    enable(): void;
    focus(): void;
    getValue(): number;
    incrementValue(): void;
    setValue(index: number | number[]): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxSlider;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ISliderTickLabelFormatFunction {
    value: any;
}
export interface ISliderTooltipFormatFunction {
    value: number;
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
    int64?: boolean | string;
    orientation?: string;
    rangeSlider?: boolean;
    rtl?: boolean;
    step?: number;
    showTicks?: boolean;
    showMinorTicks?: boolean;
    showTickLabels?: boolean;
    editableLabels?: boolean;
    showButtons?: boolean;
    sliderButtonSize?: number;
    showRange?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    ticksPosition?: 'top' | 'bottom' | 'both';
    ticksFrequency?: number;
    tickSize?: number;
    tickMode?: string;
    tickNumber?: number;
    minorTickNumber?: number;
    niceInterval?: boolean;
    tickLabelFormatFunction?: (value: ISliderTickLabelFormatFunction['value']) => string | number;
    tickLabelFormatSettings?: object;
    tickLabelStyleSettings?: object;
    tooltip?: boolean;
    tooltipHideDelay?: number;
    tooltipPosition?: 'near' | 'far';
    tooltipFormatFunction?: (value: ISliderTooltipFormatFunction['value']) => any;
    tooltipFormatSettings?: object;
    value?: any;
    values?: number[];
    width?: number | string;
}
export interface ISliderProps extends ISliderOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
    onSlide?: (e?: any) => void;
    onSlideStart?: (e?: any) => void;
    onSlideEnd?: (e?: any) => void;
}
