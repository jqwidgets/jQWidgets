import * as React from 'react';
declare class JqxLinearGauge extends React.PureComponent<ILinearGaugeProps> {
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
    constructor(props: ILinearGaugeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ILinearGaugeProps): void;
    getOptions(option: string): any;
    destroy(): void;
    disable(): void;
    enable(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxLinearGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ILinearGaugeRanges {
    startValue?: number;
    endValue?: number;
    style?: any;
}
export interface ILinearGaugeBackground {
    borderType?: 'rectangle' | 'roundedRectangle';
    borderRadius?: any;
    visible?: boolean;
    style?: any;
    showGradient?: boolean;
}
export interface ILinearGaugeLabels {
    position?: 'far' | 'near' | 'both';
    style?: any;
    interval?: number;
    number?: number | string;
    offset?: number;
    formatValue?: (value: any, position: string) => any;
    visible?: boolean;
}
export interface ILinearGaugePointer {
    pointerType?: 'default' | 'arrow';
    style?: any;
    size?: number | string;
    offset?: number;
    visible?: boolean;
}
export interface ILinearGaugeTicks {
    size?: number | string;
    interval?: number;
    number?: number | string;
    visible?: boolean;
    style?: any;
}
interface ILinearGaugeOptions {
    animationDuration?: number;
    background?: ILinearGaugeBackground;
    colorScheme?: string;
    disabled?: boolean;
    displayTank?: boolean;
    easing?: 'linear' | 'easeOutBack' | 'easeInQuad' | 'easeInOutCirc' | 'easeInOutSine' | 'easeOutCubic';
    editableLabels?: boolean;
    height?: number | string;
    int64?: boolean;
    labels?: ILinearGaugeLabels | ILinearGaugeLabels[];
    min?: number;
    max?: number;
    niceInterval?: boolean;
    orientation?: 'vertical' | 'horizontal';
    pointer?: ILinearGaugePointer;
    rangesOffset?: number;
    rangeSize?: number | string;
    ranges?: ILinearGaugeRanges[];
    showRanges?: boolean;
    tankStyle?: object;
    scaleStyle?: any;
    scaleLength?: number | string;
    theme?: string;
    tickMode?: string;
    ticksOffset?: Array<number | string>;
    ticksPosition?: 'far' | 'near' | 'both';
    ticksMinor?: ILinearGaugeTicks;
    ticksMajor?: ILinearGaugeTicks;
    value?: number;
    width?: number | string;
}
export interface ILinearGaugeProps extends ILinearGaugeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onValueChanging?: (e?: any) => void;
    onValueChanged?: (e?: any) => void;
}
