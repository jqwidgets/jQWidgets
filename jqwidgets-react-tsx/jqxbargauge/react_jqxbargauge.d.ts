import * as React from 'react';
declare class JqxBarGauge extends React.PureComponent<IBarGaugeProps> {
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
    constructor(props: IBarGaugeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IBarGaugeProps): void;
    getOptions(option: string): any;
    destroy(): void;
    refresh(): void;
    renderWidget(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxBarGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IBarGaugeLabelsFont {
    color?: string;
    size?: number | string;
    family?: string;
}
export interface IBarGaugeLabels {
    connectorColor?: string;
    connectorWidth?: number;
    font?: IBarGaugeLabelsFont;
    formatFunction?: (value: number, index?: number) => string;
    indent?: number;
    precision?: number;
    visible?: boolean;
}
export interface IBarGaugeTextFont {
    color?: string;
    family?: string;
    opacity?: number;
    size?: number | string;
    weight?: number;
}
export interface IBarGaugeTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
export interface IBarGaugeTitleSubtitle {
    text?: string;
    font?: IBarGaugeTextFont;
}
export interface IBarGaugeTitle {
    text?: string;
    font?: IBarGaugeTextFont;
    horizontalAlignment?: 'left' | 'center' | 'right';
    margin?: IBarGaugeTitleMargin;
    subtitle?: IBarGaugeTitleSubtitle;
    verticalAlignment?: 'top' | 'bottom';
}
export interface IBarGaugeTooltip {
    classname?: string;
    formatFunction?: (value: string, index: number) => string;
    visible?: boolean;
    precision?: number;
}
export interface IBarGaugeCustomColorScheme {
    name?: string;
    colors?: string[];
}
interface IBarGaugeOptions {
    animationDuration?: number;
    backgroundColor?: string;
    barSpacing?: number;
    baseValue?: number;
    colorScheme?: string;
    customColorScheme?: IBarGaugeCustomColorScheme;
    disabled?: boolean;
    endAngle?: number;
    formatFunction?: (value: number, index: number, color: string) => string;
    height?: string | number;
    labels?: IBarGaugeLabels;
    max?: number | string;
    min?: number;
    relativeInnerRadius?: number | string;
    rendered?: () => void;
    startAngle?: number;
    theme?: string;
    title?: IBarGaugeTitle;
    tooltip?: IBarGaugeTooltip;
    useGradient?: boolean;
    values?: number[];
    width?: string | number;
}
export interface IBarGaugeProps extends IBarGaugeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onDrawEnd?: (e?: any) => void;
    onDrawStart?: (e?: any) => void;
    onInitialized?: (e?: any) => void;
    onTooltipClose?: (e?: any) => void;
    onTooltipOpen?: (e?: any) => void;
    onValueChanged?: (e?: any) => void;
}
