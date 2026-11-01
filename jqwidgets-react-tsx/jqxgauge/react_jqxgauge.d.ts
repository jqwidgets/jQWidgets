import * as React from 'react';
declare class JqxGauge extends React.PureComponent<IGaugeProps> {
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
    constructor(props: IGaugeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IGaugeProps): void;
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
export default JqxGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IGaugeStyle {
    fill?: string;
    stroke?: string;
}
export interface IGaugeBorder {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
    showGradient?: boolean;
}
export interface IGaugeCaption {
    value?: string;
    position?: 'top' | 'bottom';
    offset?: number[];
    visible?: boolean;
}
export interface IGaugeCap {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
}
export interface IGaugeLabels {
    distance?: string;
    position?: 'none' | 'inside' | 'outside';
    interval?: number | string;
    number?: number | string;
    offset?: number[];
    visible?: boolean;
    formatValue?: (value: any) => string | number;
}
export interface IGaugePointer {
    pointerType?: string;
    style?: IGaugeStyle;
    width?: number | string;
    length?: number | string;
    visible?: boolean;
}
export interface IGaugeRanges {
    startValue?: number | string;
    endValue?: number | string;
    startWidth?: number | string;
    endWidth?: number | string;
    startDistance?: number | string;
    endDistance?: number | string;
    style?: IGaugeStyle;
}
export interface IGaugeTicks {
    size?: number | string;
    interval?: number | string;
    number?: number | string;
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
    editableLabels?: boolean;
    endAngle?: number | string;
    height?: number | string;
    int64?: boolean;
    labels?: IGaugeLabels;
    min?: number;
    max?: number | string;
    niceInterval?: boolean;
    pointer?: IGaugePointer;
    radius?: number | string;
    ranges?: IGaugeRanges[];
    startAngle?: number | string;
    showRanges?: boolean;
    styles?: IGaugeStyle;
    theme?: string;
    tickMode?: string;
    ticksMajor?: IGaugeTicks;
    ticksMinor?: IGaugeTicks;
    ticksDistance?: string;
    value?: number;
    width?: number | string;
}
export interface IGaugeProps extends IGaugeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onValueChanging?: (e?: any) => void;
    onValueChanged?: (e?: any) => void;
}
