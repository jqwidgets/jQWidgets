
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxChart extends React.PureComponent<IChartProps, IState> {
    protected static getDerivedStateFromProps(props: IChartProps, state: IState): null | IState {
        if (!Object.is) {
            Object.is = function (x, y) {
                if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                } else {
                    return x !== x && y !== y;
                }
            };
        }

        const areEqual = Object.is(props, state.lastProps) as boolean;

        if (!areEqual) {
            const newState = { lastProps: props } as IState;
            return newState;
        }

        return null;
    }

    /* tslint:disable:variable-name */
    private _jqx = JQXLite as any;
    /* tslint:disable:variable-name */
    private _id: string;
    /* tslint:disable:variable-name */
    private _componentSelector: string;

    constructor(props: IChartProps) {
        super(props);

        this._id = 'JqxChart' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IChartProps;
        this._jqx(this._componentSelector).jqxChart(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IChartProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IChartProps): void {
        this._jqx(this._componentSelector).jqxChart(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxChart(option);
    }

    public getInstance(): any {
        return this._jqx(this._componentSelector).jqxChart('getInstance' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxChart('refresh' );
    };

    public update(): void {
        this._jqx(this._componentSelector).jqxChart('update' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxChart('destroy' );
    };

    public addColorScheme(schemeName?: string, colors?: string[]): void {
        this._jqx(this._componentSelector).jqxChart('addColorScheme' , schemeName, colors);
    };

    public removeColorScheme(schemeName?: string): void {
        this._jqx(this._componentSelector).jqxChart('removeColorScheme' , schemeName);
    };

    public getItemsCount(groupIndex?: number, serieIndex?: number): number {
        return this._jqx(this._componentSelector).jqxChart('getItemsCount' , groupIndex, serieIndex);
    };

    public getItemCoord(groupIndex?: number, serieIndex?: number, itemIndex?: number): any {
        return this._jqx(this._componentSelector).jqxChart('getItemCoord' , groupIndex, serieIndex, itemIndex);
    };

    public getXAxisRect(groupIndex?: number): IChartRect {
        return this._jqx(this._componentSelector).jqxChart('getXAxisRect' , groupIndex);
    };

    public getXAxisLabels(groupIndex?: number): any[] {
        return this._jqx(this._componentSelector).jqxChart('getXAxisLabels' , groupIndex);
    };

    public getValueAxisRect(groupIndex?: number): IChartRect {
        return this._jqx(this._componentSelector).jqxChart('getValueAxisRect' , groupIndex);
    };

    public getValueAxisLabels(groupIndex?: number): any[] {
        return this._jqx(this._componentSelector).jqxChart('getValueAxisLabels' , groupIndex);
    };

    public getColorScheme(colorScheme?: string): string[] {
        return this._jqx(this._componentSelector).jqxChart('getColorScheme' , colorScheme);
    };

    public hideSerie(groupIndex?: number, serieIndex?: number, itemIndex?: number): void {
        this._jqx(this._componentSelector).jqxChart('hideSerie' , groupIndex, serieIndex, itemIndex);
    };

    public showSerie(groupIndex?: number, serieIndex?: number, itemIndex?: number): void {
        this._jqx(this._componentSelector).jqxChart('showSerie' , groupIndex, serieIndex, itemIndex);
    };

    public hideToolTip(hideDelay?: number): void {
        this._jqx(this._componentSelector).jqxChart('hideToolTip' , hideDelay);
    };

    public showToolTip(groupIndex?: number, serieIndex?: number, itemIndex?: number, showDelay?: number, hideDelay?: number): void {
        this._jqx(this._componentSelector).jqxChart('showToolTip' , groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    };

    public saveAsJPEG(fileName?: string, exportServerUrl?: string): void {
        this._jqx(this._componentSelector).jqxChart('saveAsJPEG' , fileName, exportServerUrl);
    };

    public saveAsPNG(fileName?: string, exportServerUrl?: string): void {
        this._jqx(this._componentSelector).jqxChart('saveAsPNG' , fileName, exportServerUrl);
    };

    public saveAsPDF(fileName?: string, exportServerUrl?: string): void {
        this._jqx(this._componentSelector).jqxChart('saveAsPDF' , fileName, exportServerUrl);
    };

    public getXAxisValue(offset?: number, groupIndex?: number): any {
        return this._jqx(this._componentSelector).jqxChart('getXAxisValue' , offset, groupIndex);
    };

    public getValueAxisValue(offset?: number, groupIndex?: number): any {
        return this._jqx(this._componentSelector).jqxChart('getValueAxisValue' , offset, groupIndex);
    };

    private _manageProps(): IChartProps {
        const widgetProps: string[] = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','drawBefore','draw','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','categoryAxis','seriesGroups'];

        const options = {} as IChartProps;

        for (const prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                 options[prop] = this.props[prop];
            }
        }

        return options;
    }

    private _wireEvents(): void {
        for (const prop in this.props) {
            if (prop.indexOf('on') === 0) {
                let originalEventName = prop.slice(2) as string;
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    }
}

export default JqxChart;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IChartDraw {
    renderer?: object;
    rect?: object;
}

export interface IChartDrawBefore {
    renderer?: object;
    rect?: object;
}

export interface IChartOffset {
    x?: number;
    y?: number;
}

export interface IChartRect {
    x?: number;
    y?: number;
    width?: number | string;
    height?: number | string;
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
    formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: IChartXAxis) => string;
    autoRotate?: boolean;
}

export interface IChartFormatSettings {
    prefix?: string;
    sufix?: string;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    decimalPlaces?: number;
    negativeWithBrackets?: boolean;
    dateFormat?: string;
}

export interface IChartSeriesLabels {
    visible?: boolean;
    class?: string;
    angle?: number;
    horizontalAlignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
    offset?: IChartOffset;
    backgroundColor?: string;
    backgroundOpacity?: number;
    borderColor?: string;
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
    colorFunction?: (dataValue: any, itemIndex?: number, serie?: any, group?: any) => any;
    labels?: IChartSeriesLabels;
    formatSettings?: IChartFormatSettings;
    formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: IChartXAxis) => string;
    legendFormatSettings?: IChartFormatSettings;
    legendFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: IChartXAxis) => string;
    legendLineColor?: string;
    legnedFillColor?: string;
    toolTipFormatSettings?: IChartFormatSettings;
    toolTipFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: IChartXAxis) => string;
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
    colorScheme?: string;
    greyScale?: boolean;
    showToolTips?: boolean;
    toolTipShowDelay?: number;
    toolTipHideDelay?: number;
    toolTipMoveDuration?: number;
    drawBefore?: (renderer?: IChartDrawBefore['renderer'], rect?: IChartDrawBefore['rect']) => void;
    draw?: (renderer?: IChartDraw['renderer'], rect?: IChartDraw['rect']) => void;
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
    renderEngine?: 'auto' | 'SVG' | 'HTML5' | 'VML';
    xAxis?: IChartXAxis;
    valueAxis?: IChartValueAxis;
    categoryAxis?: any;
    seriesGroups?: IChartSeriesGroup[];
}

export interface IChartProps extends IChartOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onToggle?: (e?: Event) => void;
    onClick?: (e?: Event) => void;
    onRefreshBegin?: (e?: Event) => void;
    onRefreshEnd?: (e?: Event) => void;
    onRangeSelectionChanging?: (e?: Event) => void;
    onRangeSelectionChanged?: (e?: Event) => void;
}
