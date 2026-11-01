import * as React from 'react';
declare class JqxChart extends React.PureComponent<IChartProps> {
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
    constructor(props: IChartProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IChartProps): void;
    getOptions(option: string): any;
    getInstance(): any;
    refresh(): void;
    update(): void;
    destroy(): void;
    clear(): void;
    addColorScheme(schemeName?: string, colors?: string[]): void;
    removeColorScheme(schemeName?: string): void;
    getItemsCount(groupIndex?: number, serieIndex?: number): number;
    getItemCoord(groupIndex?: number, serieIndex?: number, itemIndex?: number): any;
    getXAxisRect(groupIndex?: number): IChartRect;
    getXAxisLabels(groupIndex?: number): any[];
    getValueAxisRect(groupIndex?: number): IChartRect;
    getValueAxisLabels(groupIndex?: number): any[];
    getColorScheme(colorScheme?: string): string[];
    hideSerie(groupIndex?: number, serieIndex?: number, itemIndex?: number): void;
    showSerie(groupIndex?: number, serieIndex?: number, itemIndex?: number): void;
    hideToolTip(hideDelay?: number): void;
    showToolTip(groupIndex?: number, serieIndex?: number, itemIndex?: number, showDelay?: number, hideDelay?: number): void;
    saveAsJPEG(fileName?: string, exportServerUrl?: string): void;
    saveAsPNG(fileName?: string, exportServerUrl?: string): void;
    saveAsPDF(fileName?: string, exportServerUrl?: string): void;
    getXAxisValue(offset?: number, groupIndex?: number): any;
    getValueAxisValue(offset?: number, groupIndex?: number): any;
    getXAxisDataPointOffset(value: number, groupIndex: number): number;
    getValueAxisDataPointOffset(value: number, groupIndex: number): number;
    getPolarDataPointOffset(xValue: number, yValue: number, groupIndex: number): object;
    getPlotAreaRect(): object;
    getRect(): object;
    isSerieVisible(groupIndex: number, serieIndex: number, itemIndex?: number): boolean;
    isGroupVisible(groupIndex: number): boolean;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxChart;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IChartDraw {
    renderer: IChartRenderer;
    rect: IChartRect;
}
export interface IChartDrawBefore {
    renderer: IChartRenderer;
    rect: IChartRect;
}
export interface IChartRenderer {
    attr: (element: object, attributes: object) => void;
    getAttr: (element: object, attributeName: string) => string;
    circle: (cx: number, cy: number, r: number, attributes?: object) => object;
    line: (x1: number, y1: number, x2: number, y2: number, attributes?: object) => object;
    path: (path: string, attributes?: object) => object;
    pieslice: (cx: number, cy: number, innerRadius: number, outerRadius: number, fromAngle: number, endAngle: number, centerOffset?: number, attributes?: object) => object;
    rect: (x: number, y: number, width: number | string, height: number | string, attributes?: object) => object;
    text: (text: string, x: number, y: number, width?: number | string, height?: number | string, angle?: number, attributes?: object, clip?: boolean, halign?: string, valign?: string, rotateAround?: string) => object;
    measureText: (text: string, angle?: number, attributes?: object) => {
        width: number;
        height: number;
    };
    on: (element: object, event: string, handler: Function) => void;
    off: (element: object, event: string, handler: Function) => void;
}
export interface IChartOffset {
    x?: number;
    y?: number;
}
export interface IChartRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IChartPadding {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface IChartTickMarks {
    visible?: any;
    color?: string;
    step?: number;
    dashStyle?: string;
    lineWidth?: number;
    size?: number | string;
    interval?: any;
    custom?: IChartCustomOffset[];
}
export interface IChartGridLines {
    visible?: any;
    color?: string;
    step?: number;
    dashStyle?: string;
    lineWidth?: number;
    interval?: any;
    custom?: IChartCustomOffset[];
}
export interface IChartAxisLine {
    visible?: any;
    color?: string;
    dashStyle?: string;
    lineWidth?: number;
}
export interface IChartCustomOffset {
    value?: any;
    offset?: number;
}
export interface IChartAxisLabels {
    visible?: any;
    class?: string;
    step?: number;
    angle?: number;
    rotationPoint?: 'topleft' | 'middleleft' | 'bottomleft' | 'topcenter' | 'middlecenter' | 'bottomcenter' | 'topright' | 'middleright' | 'bottomright';
    horizontalAlignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
    offset?: IChartOffset;
    custom?: IChartCustomOffset[];
    formatSettings?: IChartFormatSettings;
    formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: IChartXAxis) => string | number;
    autoRotate?: boolean;
}
export interface IChartFormatSettings {
    prefix?: string;
    sufix?: string;
    suffix?: string;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    decimalPlaces?: number;
    negativeWithBrackets?: boolean;
    dateFormat?: string;
}
export interface IChartSeriesLabels {
    visible?: boolean;
    class?: string | ((value: any, itemIndex: number, serie: any, group: any) => string);
    angle?: number;
    horizontalAlignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
    offset?: IChartOffset;
    backgroundColor?: string | ((value: any, itemIndex: number, serie: any, group: any) => string);
    backgroundOpacity?: number;
    borderColor?: string | ((value: any, itemIndex: number, serie: any, group: any) => string);
    borderOpacity?: number;
    padding?: IChartPadding;
    linesEnabled?: boolean;
    linesAngles?: boolean;
    autoRotate?: boolean;
    radius?: any;
}
export interface IChartAxisTitle {
    visible?: boolean;
    text?: string;
    class?: string;
    horizontalAlignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
    angle?: number;
    rotationPoint?: 'topleft' | 'middleleft' | 'bottomleft' | 'topcenter' | 'middlecenter' | 'bottomcenter' | 'topright' | 'middleright' | 'bottomright';
    offset?: IChartOffset;
}
export interface IChartColorBand {
    minValue?: number;
    maxValue?: number;
    fillColor?: string;
    opacity?: number;
    lineColor?: string;
    lineWidth?: number;
    dashStyle?: string;
}
export interface IChartXAxis {
    visible?: boolean;
    unitInterval?: number;
    dataField?: string;
    displayText?: string;
    type?: 'default' | 'date' | 'basic';
    baseUnit?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
    valuesOnTicks?: boolean;
    dateFormat?: string;
    axisSize?: number | string;
    customDraw?: boolean;
    flip?: boolean;
    position?: 'left' | 'top' | 'right' | 'bottom';
    padding?: IChartPadding;
    description?: string;
    title?: IChartAxisTitle;
    tickMarks?: IChartTickMarks;
    gridLines?: IChartGridLines;
    line?: IChartAxisLine;
    labels?: IChartAxisLabels;
    logarithmicScale?: boolean;
    logarithmicScaleBase?: number;
    minValue?: any;
    maxValue?: any;
    bands?: IChartColorBand[];
    alternatingBackgroundColor?: string;
    alternatingBackgroundColor2?: string;
    alternatingBackgroundOpacity?: number;
    formatSettings?: any;
    formatFunction?: any;
    toolTipFormatSettings?: IChartFormatSettings;
    toolTipFormatFunction?: any;
    rangeSelector?: any;
    textRotationAngle?: number;
}
export interface IChartSerie {
    dataField?: string;
    displayText?: string;
    dataFieldFrom?: string;
    displayTextFrom?: string;
    dataFieldTo?: string;
    displayTextTo?: string;
    dataFieldOpen?: string;
    displayTextOpen?: string;
    dataFieldLow?: string;
    displayTextLow?: string;
    dataFieldHigh?: string;
    displayTextHigh?: string;
    dataFieldClose?: string;
    displayTextClose?: string;
    lineWidth?: number;
    dashStyle?: string;
    symbolType?: 'none' | 'circle' | 'square' | 'diamond' | 'triangle_up' | 'triangle_down' | 'triangle_left' | 'triangle_right';
    symbolSize?: number;
    symbolSizeSelected?: number;
    emptyPointsDisplay?: 'skip' | 'connect' | 'zero';
    linesUnselectMode?: 'default' | 'click';
    opacity?: number;
    useGradientColors?: boolean;
    greyScale?: boolean;
    lineColor?: string;
    lineColorSelected?: string;
    fillColor?: string;
    fillColorSelected?: string;
    lineColorSymbol?: string;
    lineColorSymbolSelected?: string;
    fillColorSymbol?: string;
    fillColorSymbolSelected?: string;
    fillColorAlt?: string;
    fillColorAltSelected?: string;
    colorFunction?: (dataValue: any, itemIndex: number, serie: any, group: any) => any;
    labels?: IChartSeriesLabels;
    formatSettings?: IChartFormatSettings;
    formatFunction?: (value: any, itemIndex: number, serieIndex: number, groupIndex: number) => string | number;
    legendFormatSettings?: IChartFormatSettings;
    legendFormatFunction?: (value: any, itemIndex: number, serieIndex: number, groupIndex: number) => string;
    legendLineColor?: string;
    legnedFillColor?: string;
    toolTipFormatSettings?: IChartFormatSettings;
    toolTipFormatFunction?: (value: any, itemIndex: number, serie?: any, group?: any, xAxisValue?: any, xAxis?: IChartXAxis) => string;
    toolTipLineColor?: string;
    toolTipBackground?: string;
    toolTipClass?: string;
    radius?: any;
    innerRadius?: any;
    startAngle?: number;
    endAngle?: number;
    offsetX?: number;
    offsetY?: number;
    hiddenPointsDisplay?: boolean;
    enableSeriesToggle?: boolean;
    enableSelection?: boolean;
    radiusDataField?: string;
    minRadius?: any;
    maxRadius?: any;
    summary?: string;
    labelRadius?: any;
    initialAngle?: number;
    centerOffset?: number;
}
export interface IChartValueAxis {
    visible?: boolean;
    flip?: boolean;
    position?: 'left' | 'top' | 'right' | 'bottom';
    axisSize?: number | string;
    minValue?: number;
    maxValue?: number;
    baselineValue?: number;
    logarithmicScale?: boolean;
    logarithmicScaleBase?: number;
    valuesOnTicks?: boolean;
    unitInterval?: number;
    description?: string;
    title?: IChartAxisTitle;
    labels?: IChartAxisLabels;
    gridLines?: IChartGridLines;
    tickMarks?: IChartTickMarks;
    padding?: IChartPadding;
    bands?: IChartColorBand[];
    alternatingBackgroundColor?: string;
    alternatingBackgroundColor2?: string;
    alternatingBackgroundOpacity?: number;
    toolTipFormatSettings?: IChartFormatSettings;
    formatFunction?: any;
}
export interface IChartSeriesGroup {
    type?: 'line' | 'stackedline' | 'stackedline100' | 'spline' | 'stackedspline' | 'stackedspline100' | 'stepline' | 'stackedstepline' | 'stackedstepline100' | 'area' | 'stackedarea' | 'stackedarea100' | 'splinearea' | 'stackedsplinearea' | 'stackedsplinearea100' | 'steparea' | 'stackedsteparea' | 'stackedsteparea100' | 'rangearea' | 'splinerangearea' | 'steprangearea' | 'column' | 'stackedcolumn' | 'stackedcolumn100' | 'rangecolumn' | 'scatter' | 'stackedscatter' | 'stackedscatter100' | 'bubble' | 'stackedbubble' | 'stackedbubble100' | 'pie' | 'donut' | 'candlestick' | 'ohlc' | 'waterfall' | 'stackedwaterfall';
    orientation?: 'vertical' | 'horizontal';
    valueAxis?: IChartValueAxis;
    series?: IChartSerie[];
    formatSettings?: IChartFormatSettings;
    toolTipFormatFunction?: any;
    columnsGapPercent?: number;
    seriesGapPercent?: number;
    columnsMinWidth?: number;
    columnsMaxWidth?: number;
    columnsTopWidthPercent?: number;
    columnsBottomWidthPercent?: number;
    skipOverlappingPoints?: boolean;
    polar?: boolean;
    spider?: boolean;
    radius?: any;
    startAngle?: number;
    endAngle?: number;
    offsetX?: number;
    offsetY?: number;
    source?: any;
    xAxis?: IChartXAxis;
    colorScheme?: string;
    showLabels?: boolean;
    alignEndPointsWithIntervals?: boolean;
    annotations?: any;
}
export interface IChartLegendLayout {
    left?: number;
    top?: number;
    width?: number | string;
    height?: number | string;
    flow?: 'vertical' | 'horizontal';
}
interface IChartOptions {
    title?: string;
    description?: string;
    source?: any;
    showBorderLine?: boolean;
    borderLineColor?: string;
    borderLineWidth?: number;
    backgroundColor?: string;
    backgroundImage?: string;
    showLegend?: boolean;
    legendLayout?: IChartLegendLayout;
    padding?: IChartPadding;
    titlePadding?: IChartPadding;
    theme?: string;
    colorScheme?: string;
    greyScale?: boolean;
    showToolTips?: boolean;
    showToolTipsOnAllSeries?: boolean;
    toolTipShowDelay?: number;
    toolTipHideDelay?: number;
    toolTipMoveDuration?: number;
    toolTipFormatFunction?: (value?: any, itemIndex?: number, serie?: any, group?: any, xAxisValue?: any, xAxis?: any) => string;
    drawBefore?: (renderer: IChartRenderer, rect: IChartRect) => void;
    draw?: (renderer: IChartRenderer, rect: IChartRect) => void;
    rtl?: boolean;
    enableCrosshairs?: boolean;
    crosshairsColor?: string;
    crosshairsDashStyle?: string;
    crosshairsLineWidth?: number;
    columnSeriesOverlap?: boolean;
    enabled?: boolean;
    enableAnimations?: boolean;
    animationDuration?: number;
    enableAxisTextAnimation?: boolean;
    enableEvents?: boolean;
    enableSampling?: boolean;
    renderEngine?: 'auto' | 'SVG' | 'HTML5' | 'VML';
    axisPadding?: number;
    localization?: any;
    xAxis?: IChartXAxis;
    valueAxis?: IChartValueAxis;
    categoryAxis?: any;
    seriesGroups?: IChartSeriesGroup[];
}
export interface IChartProps extends IChartOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onToggle?: (e?: any) => void;
    onClick?: (e?: any) => void;
    onRefreshBegin?: (e?: any) => void;
    onRefreshEnd?: (e?: any) => void;
    onRangeSelectionChanging?: (e?: any) => void;
    onRangeSelectionChanged?: (e?: any) => void;
}
