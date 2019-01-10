import * as React from 'react';
declare class JqxGauge extends React.PureComponent<IGaugeProps, IState> {
    protected static defaultProps: IGaugeProps;
    protected static getDerivedStateFromProps(props: IGaugeProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IGaugeProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IGaugeProps): void;
    setOptions(options: IGaugeProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    disable(): void;
    enable(): void;
    val(value?: number): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IGaugeStyle {
    fill?: string;
    stroke?: string;
}
interface IGaugeBorder {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
    showGradient?: boolean;
}
interface IGaugeCaption {
    value?: string;
    position?: 'top' | 'bottom';
    offset?: number[];
    visible?: boolean;
}
interface IGaugeCap {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
}
interface IGaugeLabels {
    distance?: string;
    position?: 'none' | 'inside' | 'outside';
    interval?: number | string;
    offset?: number[];
    visible?: boolean;
    formatValue?: (value?: number) => string;
}
interface IGaugePointer {
    pointerType?: string;
    style?: IGaugeStyle;
    width?: number | string;
    length?: number | string;
    visible?: boolean;
}
interface IGaugeRanges {
    startValue?: number | string;
    endValue?: number | string;
    startWidth?: number | string;
    endWidth?: number | string;
    startDistance?: number | string;
    endDistance?: number | string;
    style?: IGaugeStyle;
}
interface IGaugeTicks {
    size?: number | string;
    interval?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
}
interface IGaugeOptions {
    animationDuration?: string | number;
    border?: IGaugeBorder;
    caption?: IGaugeCaption;
    cap?: IGaugeCap;
    colorScheme?: string;
    disabled?: boolean;
    easing?: 'linear' | 'easeOutBack' | 'easeInQuad' | 'easeInOutCirc' | 'easeInOutSine' | 'easeOutCubic';
    endAngle?: number | string;
    height?: number | string;
    int64?: boolean;
    labels?: IGaugeLabels;
    min?: number;
    max?: number | string;
    pointer?: IGaugePointer;
    radius?: number | string;
    ranges?: IGaugeRanges[];
    startAngle?: number | string;
    showRanges?: boolean;
    styles?: IGaugeStyle;
    ticksMajor?: IGaugeTicks;
    ticksMinor?: IGaugeTicks;
    ticksDistance?: string;
    value?: number;
    width?: number | string;
}
export interface IGaugeProps extends IGaugeOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onValueChanging?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
