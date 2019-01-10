import * as React from 'react';
declare class JqxBulletChart extends React.PureComponent<IBulletChartProps, IState> {
    protected static defaultProps: IBulletChartProps;
    protected static getDerivedStateFromProps(props: IBulletChartProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IBulletChartProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IBulletChartProps): void;
    setOptions(options: IBulletChartProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    renderWidget(): void;
    refresh(): void;
    val(value?: number): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxBulletChart;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IBulletChartLabelsFormatFunction {
    value?: string;
    position?: string;
}
interface IBulletChartTooltipFormatFunction {
    pointerValue?: number;
    targetValue?: number;
}
interface IBulletChartPointer {
    value?: number;
    label?: string;
    size?: number | string;
    color?: string;
}
interface IBulletChartRanges {
    startValue?: number;
    endValue?: number;
    opacity?: number;
    color?: string;
}
interface IBulletChartTicks {
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
    labelsFormatFunction?: (value?: IBulletChartLabelsFormatFunction['value'], position?: IBulletChartLabelsFormatFunction['position']) => any;
    orientation?: 'horizontal' | 'vertical';
    pointer?: IBulletChartPointer;
    rtl?: boolean;
    ranges?: IBulletChartRanges[];
    showTooltip?: boolean;
    target?: IBulletChartPointer;
    ticks?: IBulletChartTicks;
    title?: string;
    tooltipFormatFunction?: (pointerValue?: IBulletChartTooltipFormatFunction['pointerValue'], targetValue?: IBulletChartTooltipFormatFunction['targetValue']) => string;
    width?: string | number;
}
export interface IBulletChartProps extends IBulletChartOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
