import * as React from 'react';
declare class JqxBarGauge extends React.PureComponent<IBarGaugeProps, IState> {
    protected static defaultProps: IBarGaugeProps;
    protected static getDerivedStateFromProps(props: IBarGaugeProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IBarGaugeProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IBarGaugeProps): void;
    setOptions(options: IBarGaugeProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    refresh(): void;
    renderWidget(): void;
    val(value?: number[]): number[];
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxBarGauge;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IBarGaugeLabelsFont {
    color?: string;
    size?: number | string;
    family?: string;
}
interface IBarGaugeLabels {
    connectorColor?: string;
    connectorWidth?: number;
    font?: IBarGaugeLabelsFont;
    formatFunction?: (value?: number, index?: number) => string;
    indent?: number;
    precision?: number;
    visible?: boolean;
}
interface IBarGaugeTextFont {
    color?: string;
    family?: string;
    opacity?: number;
    size?: number | string;
    weight?: number;
}
interface IBarGaugeTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
interface IBarGaugeTitleSubtitle {
    text?: string;
    font?: IBarGaugeTextFont;
}
interface IBarGaugeTitle {
    text?: string;
    font?: IBarGaugeTextFont;
    horizontalAlignment?: 'left' | 'center' | 'right';
    margin?: IBarGaugeTitleMargin;
    subtitle?: IBarGaugeTitleSubtitle;
    verticalAlignment?: 'top' | 'bottom';
}
interface IBarGaugeFormatFunction {
    value?: number | string;
    index?: number;
    color?: string;
}
interface IBarGaugeTooltip {
    classname?: string;
    formatFunction?: (value?: IBarGaugeFormatFunction['value'], index?: IBarGaugeFormatFunction['index'], color?: IBarGaugeFormatFunction['color']) => string;
    visible?: boolean;
    precision?: number;
}
interface IBarGaugeCustomColorScheme {
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
    formatFunction?: (value?: IBarGaugeFormatFunction['value'], index?: IBarGaugeFormatFunction['index'], color?: IBarGaugeFormatFunction['color']) => string;
    height?: string | number;
    labels?: IBarGaugeLabels;
    max?: number | string;
    min?: number;
    relativeInnerRadius?: number | string;
    rendered?: () => void;
    startAngle?: number;
    title?: IBarGaugeTitle;
    tooltip?: IBarGaugeTooltip;
    useGradient?: boolean;
    values?: number[];
    width?: string | number;
}
export interface IBarGaugeProps extends IBarGaugeOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onDrawEnd?: (e?: Event) => void;
    onDrawStart?: (e?: Event) => void;
    onInitialized?: (e?: Event) => void;
    onTooltipClose?: (e?: Event) => void;
    onTooltipOpen?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
