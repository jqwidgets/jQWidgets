import * as React from 'react';
declare class JqxLinearGauge extends React.PureComponent<ILinearGaugeProps, IState> {
    protected static defaultProps: ILinearGaugeProps;
    protected static getDerivedStateFromProps(props: ILinearGaugeProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ILinearGaugeProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ILinearGaugeProps): void;
    setOptions(options: ILinearGaugeProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    disable(): void;
    enable(): void;
    val(value?: number | string): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxLinearGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ILinearGaugeRanges {
    startValue?: number;
    endValue?: number;
    style?: any;
}
interface ILinearGaugeBackground {
    borderType?: 'rectangle' | 'roundedRectangle';
    borderRadius?: any;
    visible?: boolean;
    style?: any;
    showGradient?: boolean;
}
interface ILinearGaugeLabels {
    position?: 'far' | 'near' | 'both';
    style?: any;
    interval?: number;
    offset?: number;
    formatValue?: (value: any, position: string) => any;
    visible?: boolean;
}
interface ILinearGaugePointer {
    pointerType?: 'default' | 'rectangle';
    style?: any;
    size?: number | string;
    offset?: number;
    visible?: boolean;
}
interface ILinearGaugeTicks {
    size?: number | string;
    interval?: number;
    visible?: boolean;
    style?: any;
}
interface ILinearGaugeOptions {
    animationDuration?: number;
    background?: ILinearGaugeBackground;
    colorScheme?: string;
    disabled?: boolean;
    easing?: 'linear' | 'easeOutBack' | 'easeInQuad' | 'easeInOutCirc' | 'easeInOutSine' | 'easeOutCubic';
    height?: number | string;
    int64?: boolean;
    labels?: ILinearGaugeLabels | ILinearGaugeLabels[];
    min?: number;
    max?: number;
    orientation?: 'vertical' | 'horizontal';
    pointer?: ILinearGaugePointer;
    rangesOffset?: number;
    rangeSize?: number | string;
    ranges?: ILinearGaugeRanges[];
    showRanges?: boolean;
    scaleStyle?: any;
    scaleLength?: number | string;
    ticksOffset?: Array<number | string>;
    ticksPosition?: 'far' | 'near' | 'both';
    ticksMinor?: ILinearGaugeTicks;
    ticksMajor?: ILinearGaugeTicks;
    value?: number;
    width?: number | string;
}
export interface ILinearGaugeProps extends ILinearGaugeOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onValueChanging?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
