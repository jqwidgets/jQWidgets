import * as React from 'react';
declare class JqxBulletChart extends React.PureComponent<IBulletChartProps> {
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
    constructor(props: IBulletChartProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IBulletChartProps): void;
    getOptions(option: string): any;
    destroy(): void;
    renderWidget(): void;
    refresh(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxBulletChart;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IBulletChartLabelsFormatFunction {
    value: number;
    position: string;
}
export interface IBulletChartTooltipFormatFunction {
    pointerValue: number;
    targetValue: number;
}
export interface IBulletChartPointer {
    value?: number;
    label?: string;
    size?: number | string;
    color?: string;
}
export interface IBulletChartRanges {
    startValue?: number;
    endValue?: number;
    opacity?: number;
    color?: string;
}
export interface IBulletChartTicks {
    position?: 'near' | 'far' | 'both' | 'none';
    interval?: number;
    size?: number | string;
}
interface IBulletChartOptions {
    animationDuration?: number;
    barSize?: number | string;
    description?: string;
    disabled?: boolean;
    height?: string | number;
    labelsFormat?: 'null' | 'd' | 'f' | 'n' | 'c' | 'p';
    labelsFormatFunction?: (value: number, position: 'near' | 'far') => any;
    orientation?: 'horizontal' | 'vertical';
    pointer?: IBulletChartPointer;
    rtl?: boolean;
    ranges?: IBulletChartRanges[];
    showTooltip?: boolean;
    target?: IBulletChartPointer;
    theme?: string;
    ticks?: IBulletChartTicks;
    title?: string;
    tooltipFormatFunction?: (pointerValue: number, targetValue: number) => string;
    width?: string | number;
}
export interface IBulletChartProps extends IBulletChartOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
