/*
   jQWidgets TypeScript definitions

   Copyright (c) 2011-2017 jQWidgets.
   License: http://jqwidgets.com/license/
*/

interface JQueryStatic {
    jqx: any;
}

declare var generatedata: any;
declare var jqx;

declare module jqwidgets {
    export function createInstance(selector: string, widgetName: string, params?: any): any;
    
    export class widget
    {
        constructor(selector: string, options?: Object);
        refresh(): void;
        destroy(): void;
        getInstance(): any;
        addEventHandler(event: string, funcEventHandler: (any: any) => void): void;
        removeEventHandler(event: string): void;
        setOptions(params?: any): any;
    }


    export interface BarGaugeLabelsFont {
        // BarGaugeLabelsFont properties
        color?: undefined;
        size?: number | string;
        family?: undefined;
    }// BarGaugeLabelsFont

    export interface BarGaugeLabels {
        // BarGaugeLabels properties
        connectorColor?: undefined;
        connectorWidth?: undefined;
        font?: BarGaugeLabelsFont;
        formatFunction?: (value?: number, index?: number) => string;
        indent?: undefined;
        precision?: undefined;
        visible?: undefined;
    }// BarGaugeLabels

    export interface BarGaugeTextFont {
        // BarGaugeTextFont properties
        color?: undefined;
        family?: undefined;
        opacity?: undefined;
        size?: number | string;
        weight?: undefined;
    }// BarGaugeTextFont

    export interface BarGaugeTitleMargin {
        // BarGaugeTitleMargin properties
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        top?: undefined;
    }// BarGaugeTitleMargin

    export interface BarGaugeTitleSubtitle {
        // BarGaugeTitleSubtitle properties
        text?: undefined;
        font?: BarGaugeTextFont;
    }// BarGaugeTitleSubtitle

    export interface BarGaugeTitle {
        // BarGaugeTitle properties
        text?: undefined;
        font?: BarGaugeTextFont;
        horizontalAlignment?: string;
        margin?: BarGaugeTitleMargin;
        subtitle?: BarGaugeTitleSubtitle;
        verticalAlignment?: string;
    }// BarGaugeTitle

    export interface BarGaugeFormatFunction {
        // BarGaugeFormatFunction properties
        value?: undefined;
        index?: undefined;
        color?: undefined;
    }// BarGaugeFormatFunction

    export interface BarGaugeTooltip {
        // BarGaugeTooltip properties
        classname?: undefined;
        formatFunction?: (value?: any, index?: number) => string;
        visible?: undefined;
        precision?: undefined;
    }// BarGaugeTooltip

    export interface BarGaugeCustomColorScheme {
        // BarGaugeCustomColorScheme properties
        name: undefined;
        colors: Array<string>;
    }// BarGaugeCustomColorScheme

    export interface BarGaugeOptions {
        // BarGaugeOptions properties
        animationDuration?: undefined;
        backgroundColor?: undefined;
        barSpacing?: undefined;
        baseValue?: undefined;
        colorScheme?: undefined;
        customColorScheme?: BarGaugeCustomColorScheme;
        disabled?: undefined;
        endAngle?: undefined;
        formatFunction?: any;
        height?: string | number;
        labels?: BarGaugeLabels;
        max?: number | string;
        min?: undefined;
        relativeInnerRadius?: number | string;
        rendered?: () => void;
        startAngle?: undefined;
        title?: BarGaugeTitle;
        tooltip?: BarGaugeTooltip;
        useGradient?: undefined;
        values?: Array<number>;
        width?: string | number;
    }// BarGaugeOptions

    export interface jqxBarGauge extends widget, BarGaugeOptions {

        // jqxBarGauge functions
        refresh(): void;
        render(): void;
        val(value: Array<number>): Array<number>;
    }// jqxBarGauge

    export interface PivotDesignerOptions {
        // PivotDesignerOptions properties
        type?: undefined;
        target: any;
    }// PivotDesignerOptions

    export interface jqxPivotDesigner extends widget, PivotDesignerOptions {

        // jqxPivotDesigner functions
        refresh(): void;
        destroy(): void;
    }// jqxPivotDesigner

    export interface PivotGridField {
        // PivotGridField properties
        dataField: undefined;
        text?: undefined;
        align?: undefined;
        className?: undefined;
        classNameSelected?: undefined;
    }// PivotGridField

    export interface PivotGridFilterField {
        // PivotGridFilterField properties
        dataField: undefined;
        text?: undefined;
        filterFunction: (value: any) => boolean;
    }// PivotGridFilterField

    export interface PivotGridCellFormatSettings {
        // PivotGridCellFormatSettings properties
        prefix?: undefined;
        sufix?: undefined;
        decimalSeparator?: undefined;
        thousandsSeparator?: undefined;
        decimalPlaces?: undefined;
        negativeWithBrackets?: undefined;
    }// PivotGridCellFormatSettings

    export interface PivotGridValueField {
        // PivotGridValueField properties
        dataField: undefined;
        function: any;
        text?: undefined;
        align?: undefined;
        className?: undefined;
        classNameSelected?: undefined;
        cellsClassName?: undefined;
        cellsClassNameSelected?: undefined;
        formatSettings?: PivotGridCellFormatSettings;
    }// PivotGridValueField

    export interface PivotGridSettings {
        // PivotGridSettings properties
        pivotValuesOnRows?: undefined;
        rows: Array<PivotGridField>;
        columns: Array<PivotGridField>;
        values: Array<PivotGridValueField>;
        filters?: Array<PivotGridFilterField>;
        theme?: undefined;
    }// PivotGridSettings

    export interface PivotGridPoint {
        // PivotGridPoint properties
        x: undefined;
        y: undefined;
    }// PivotGridPoint

    export interface PivotGridItem {
        // PivotGridItem properties
        isExpanded: undefined;
        isHidden: undefined;
        isSelected: undefined;
        parentItem: PivotGridItem;
        hierarchy: any;
        parentPivotGrid: jqxPivotGrid;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        // PivotGridItem functions
        getWidth(): undefined;
        getDisplayWidth(): undefined;
        autoResize(): void;
        getHeight(): undefined;
        getDisplayHeight(): undefined;
        setHeight(height: undefined): void;
        expand(): void;
        collapse(): void;
    }// PivotGridItem

    export interface PivotGridRows {
        // PivotGridRows properties
        resizable: undefined;
        sortable: undefined;
        showExpandCollapseButtons: undefined;
        parentPivotGrid: jqxPivotGrid;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        isHidden?: undefined;
        // PivotGridRows functions
        show(): void;
        hide(): void;
        refresh(): void;
        getHierarchyDepth(): number;
        autoResize(autoResizeMode: undefined): void;
        getSortItem(): any;
        getSortOrder(): any;
        sortBy(pivotItem: PivotGridItem, sortOrder: undefined): void;
        removeSort(): void;
        selectItem(pivotItem: PivotGridItem): void;
        unselectItem(pivotItem: PivotGridItem): void;
        clearSelection(): void;
        getSelectedItems(): Array<any>;
    }// PivotGridRows

    export interface PivotGridColumns {
        // PivotGridColumns properties
        resizable: undefined;
        sortable: undefined;
        showExpandCollapseButtons: undefined;
        parentPivotGrid: jqxPivotGrid;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        isHidden: undefined;
        // PivotGridColumns functions
        show(): void;
        hide(): void;
        refresh(): void;
        getHierarchyDepth(): undefined;
        autoResize(autoResizeMode: undefined): void;
        getSortItem(): any;
        getSortOrder(): any;
        sortBy(pivotItem: PivotGridItem, sortOrder: undefined): void;
        removeSort(): void;
        selectItem(pivotItem: PivotGridItem): void;
        unselectItem(pivotItem: PivotGridItem): void;
        clearSelection(): void;
        getSelectedItems(): Array<any>;
    }// PivotGridColumns

    export interface PivotGridCell {
        // PivotGridCell properties
        pivotRow: PivotGridItem;
        pivotColumn: PivotGridItem;
    }// PivotGridCell

    export interface PivotGridCells {
        // PivotGridCells properties

        // PivotGridCells functions
        hitTest(point: PivotGridPoint): any;
        clear(): void;
        setCellValue(pivotRow: PivotGridItem, pivotColumn: PivotGridItem, value: any): void;
        getCellValue(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): any;
        drillThroughCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): Array<any>;
        selectCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): void;
        unselectCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): void;
        clearSelection(): void;
        isCellSelected(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): boolean;
        getSelectedCellsCount(): number;
        getSelectedCells(): Array<PivotGridCell>;
        getNextCell(pivotCell: PivotGridCell, position: undefined): any;
    }// PivotGridCells

    export interface PivotGridOptions {
        // PivotGridOptions properties
        source: any;
        localization?: any;
        scrollBarsEnabled?: undefined;
        selectionEnabled?: undefined;
        multipleSelectionEnabled?: undefined;
        treeStyleRows?: undefined;
        autoResize?: undefined;
        itemsRenderer?: (pivotItem: any) => string;
        cellsRenderer?: (pivotCell: any) => string;
    }// PivotGridOptions

    export interface jqxPivotGrid extends widget, PivotGridOptions {

        // jqxPivotGrid functions
        getInstance(): any;
        refresh(): void;
        destroy(): void;
        getPivotRows(): PivotGridRows;
        getPivotColumns(): PivotGridColumns;
        getPivotCells(): PivotGridCells;
    }// jqxPivotGrid

    export interface BulletChartPointer {
        // BulletChartPointer properties
        value?: undefined;
        label?: undefined;
        size?: number | string;
        color?: undefined;
    }// BulletChartPointer

    export interface BulletChartRanges {
        // BulletChartRanges properties
        startValue: undefined;
        endValue: undefined;
        opacity?: undefined;
        color?: undefined;
    }// BulletChartRanges

    export interface BulletChartTicks {
        // BulletChartTicks properties
        position?: string;
        interval?: undefined;
        size?: number | string;
    }// BulletChartTicks

    export interface BulletChartOptions {
        // BulletChartOptions properties
        animationDuration?: undefined;
        barSize?: number | string;
        description?: undefined;
        disabled?: undefined;
        height?: string | number;
        labelsFormat?: string;
        labelsFormatFunction?: (value?: number, position?:string ) => any;
        orientation?: string;
        pointer?: BulletChartPointer;
        rtl?: undefined;
        ranges?: Array<BulletChartRanges>;
        showTooltip?: undefined;
        target?: BulletChartPointer;
        ticks?: BulletChartTicks;
        title?: undefined;
        tooltipFormatFunction?: (pointerValue:number , targetValue:number) => string;
        width?: string | number;
    }// BulletChartOptions

    export interface jqxBulletChart extends widget, BulletChartOptions {

        // jqxBulletChart functions
        destroy(): void;
        render(): void;
        refresh(): void;
        val(value: undefined): undefined;
    }// jqxBulletChart

    export interface ButtonOptions {
        // ButtonOptions properties
        delay?: undefined;
        disabled?: undefined;
        height?: number | string;
        imgSrc?: undefined;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: undefined;
        textPosition?: string;
        textImageRelation?: string;
        theme?: undefined;
        template?: string;
        toggled?: undefined;
        width?: number | string;
        value?: undefined;
    }// ButtonOptions

    export interface jqxButton extends widget, ButtonOptions {

        // jqxButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: undefined): undefined;
    }// jqxButton

    export interface ButtonGroupOptions {
        // ButtonGroupOptions properties
        disabled?: undefined;
        enableHover?: undefined;
        mode?: string;
        rtl?: undefined;
        template?: string;
        theme?: undefined;
    }// ButtonGroupOptions

    export interface jqxButtonGroup extends widget, ButtonGroupOptions {

        // jqxButtonGroup functions
        disableAt(index: undefined): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        enableAt(index: undefined): void;
        focus(): void;
        getSelection(): any;
        render(): void;
        setSelection(index: undefined): void;
    }// jqxButtonGroup

    export interface CalendarOptions {
        // CalendarOptions properties
        backText?: undefined;
        columnHeaderHeight?: undefined;
        clearstring?: undefined;
        culture?: undefined;
        dayNameFormat?: string;
        disabled?: undefined;
        enableWeekend?: undefined;
        enableViews?: undefined;
        enableOtherMonthDays?: undefined;
        enableFastNavigation?: undefined;
        enableHover?: undefined;
        enableAutoNavigation?: undefined;
        enableTooltips?: undefined;
        forwardText?: undefined;
        firstDayOfWeek?: undefined;
        height?: string | number;
        min?: any;
        max?: any;
        navigationDelay?: undefined;
        rowHeaderWidth?: number | string;
        readOnly?: undefined;
        restrictedDates?: Array<Date>;
        rtl?: undefined;
        stepMonths?: undefined;
        showWeeknumbers?: undefined;
        showDayNames?: undefined;
        showOtherMonthDays?: undefined;
        showFooter?: undefined;
        selectionMode?: string;
        specialDates?: Array<any>;
        theme?: undefined;
        titleHeight?: undefined;
        titleFormat?: string;
        todaystring?: undefined;
        value?: Date;
        width?: string | number;
    }// CalendarOptions

    export interface jqxCalendar extends widget, CalendarOptions {

        // jqxCalendar functions
        clear(): void;
        destroy(): void;
        focus(): void;
        addSpecialDate(date: any, tooltip: any, text: any): void;
        getMinDate(): any;
        getMaxDate(): any;
        getDate(): any;
        getRange(): any;
        navigateForward(months: undefined): void;
        navigateBackward(months: undefined): void;
        render(): void;
        refresh(): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        setRange(date: any, date2: any): void;
        today(): void;
        val(value: any, value2: any): any;
    }// jqxCalendar

    export interface DrawOptions {
        // DrawOptions properties
        renderEngine?: string;
    }// DrawOptions

    export interface jqxDraw extends widget, DrawOptions {

        // jqxDraw functions
        attr(element: any, attributes: any): void;
        circle(cx: undefined, cy: undefined, r: undefined, attributes: any): any;
        clear(): void;
        getAttr(element: any, attributes: any): undefined;
        getSize(): any;
        line(x1: undefined, y1: undefined, x2: undefined, y2: undefined, attributes: any): any;
        measureText(text: undefined, angle: undefined, attributes: any): any;
        on(element: any, event: undefined, func: any): void;
        off(element: any, event: undefined, func: any): void;
        path(path: undefined, attributes: any): any;
        pieslice(cx: undefined, xy: undefined, innerRadius: any, outerRadius: any, fromAngle: undefined, endAngle: undefined, centerOffset: undefined, attributes: any): any;
        refresh(): void;
        rect(x: undefined, y: undefined, width: number | string, height: number | string, attributes: any): any;
        saveAsJPEG(image: undefined, url: undefined): void;
        saveAsPNG(image: undefined, url: undefined): void;
        text(text: undefined, x: undefined, y: undefined, width: number | string, height: number | string, angle: undefined, attributes: any, clip: undefined, halign: undefined, valign: undefined, rotateAround: undefined): any;
    }// jqxDraw

    export interface ChartOffset {
        // ChartOffset properties
        x: undefined;
        y: undefined;
    }// ChartOffset

    export interface ChartRect {
        // ChartRect properties
        x: undefined;
        y: undefined;
        width: number | string;
        height: number | string;
    }// ChartRect

    export interface ChartPadding {
        // ChartPadding properties
        left: undefined;
        right: undefined;
        top: undefined;
        bottom: undefined;
    }// ChartPadding

    export interface ChartTickMarks {
        // ChartTickMarks properties
        visible?: any;
        color?: undefined;
        step?: undefined;
        dashStyle?: undefined;
        lineWidth?: undefined;
        size?: number | string;
        interval?: any;
        custom?: Array<ChartCustomOffset>;
    }// ChartTickMarks

    export interface ChartGridLines {
        // ChartGridLines properties
        visible?: any;
        color?: undefined;
        step?: undefined;
        dashStyle?: undefined;
        lineWidth?: undefined;
        interval?: any;
        custom?: Array<ChartCustomOffset>;
    }// ChartGridLines

    export interface ChartAxisLine {
        // ChartAxisLine properties
        visible?: any;
        color?: undefined;
        dashStyle?: undefined;
        lineWidth?: undefined;
    }// ChartAxisLine

    export interface ChartCustomOffset {
        // ChartCustomOffset properties
        value?: any;
        offset?: number;
    }// ChartCustomOffset

    export interface ChartAxisLabels {
        // ChartAxisLabels properties
        visible?: any;
        class?: undefined;
        step?: undefined;
        angle?: undefined;
        rotationPoint?: string;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        custom?: Array<ChartCustomOffset>;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        autoRotate?: boolean;
    }// ChartAxisLabels

    export interface ChartFormatSettings {
        // ChartFormatSettings properties
        prefix?: undefined;
        sufix?: undefined;
        decimalSeparator?: undefined;
        thousandsSeparator?: undefined;
        decimalPlaces?: undefined;
        negativeWithBrackets?: undefined;
        dateFormat?: undefined;
    }// ChartFormatSettings

    export interface ChartSeriesLabels {
        // ChartSeriesLabels properties
        visible?: undefined;
        class?: undefined;
        angle?: undefined;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        backgroundColor?: undefined;
        backgroundOpacity?: undefined;
        borderColor?: undefined;
        borderOpacity?: undefined;
        padding?: ChartPadding;
        linesEnabled?: undefined;
        linesAngles?: undefined;
        autoRotate?: undefined;
        radius?: any;
    }// ChartSeriesLabels

    export interface ChartAxisTitle {
        // ChartAxisTitle properties
        visible?: undefined;
        text?: undefined;
        class?: undefined;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        angle?: undefined;
        rotationPoint?: string;
        offset?: ChartOffset;
    }// ChartAxisTitle

    export interface ChartColorBand {
        // ChartColorBand properties
        minValue?: undefined;
        maxValue?: undefined;
        fillColor?: undefined;
        opacity?: undefined;
        lineColor?: undefined;
        lineWidth?: undefined;
        dashStyle?: undefined;
    }// ChartColorBand

    export interface ChartXAxis {
        // ChartXAxis properties
        visible?: undefined;
        unitInterval?: undefined;
        dataField?: undefined;
        type?: string;
        baseUnit?: string;
        valuesOnTicks?: undefined;
        dateFormat?: undefined;
        axisSize?: number | string;
        customDraw?: undefined;
        flip?: undefined;
        position?: string;
        padding?: ChartPadding;
        title?: ChartAxisTitle;
        tickMarks?: ChartTickMarks;
        gridLines?: ChartGridLines;
        line?: ChartAxisLine;
        labels?: ChartAxisLabels;
        logarithmicScale?: undefined;
        logarithmicScaleBase?: undefined;
        minValue?: any;
        maxValue?: any;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: undefined;
        alternatingBackgroundColor2?: undefined;
        alternatingBackgroundOpacity?: undefined;
        formatSettings?: any;
        formatFunction?: any;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: any;
        rangeSelector?: any;
    }// ChartXAxis

    export interface ChartSerie {
        // ChartSerie properties
        dataField?: undefined;
        displayText?: undefined;
        dataFieldFrom?: undefined;
        displayTextFrom?: undefined;
        dataFieldTo?: undefined;
        displayTextTo?: undefined;
        dataFieldOpen?: undefined;
        displayTextOpen?: undefined;
        dataFieldLow?: undefined;
        displayTextLow?: undefined;
        dataFieldHigh?: undefined;
        displayTextHigh?: undefined;
        dataFieldClose?: undefined;
        displayTextClose?: undefined;
        lineWidth?: undefined;
        dashStyle?: undefined;
        symbolType?: string;
        symbolSize?: undefined;
        symbolSizeSelected?: undefined;
        emptyPointsDisplay?: string;
        linesUnselectMode?: string;
        opacity?: undefined;
        useGradientColors?: undefined;
        greyScale?: undefined;
        lineColor?: undefined;
        lineColorSelected?: undefined;
        fillColor?: undefined;
        fillColorSelected?: undefined;
        lineColorSymbol?: undefined;
        lineColorSymbolSelected?: undefined;
        fillColorSymbol?: undefined;
        fillColorSymbolSelected?: undefined;
        fillColorAlt?: undefined;
        fillColorAltSelected?: undefined;
        colorFunction?: (dataValue: any, itemIndex?: number, serie?: any, group?: any) => any;
        labels?: ChartSeriesLabels;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendFormatSettings?: ChartFormatSettings;
        legendFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendLineColor?: undefined;
        legnedFillColor?: undefined;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        toolTipLineColor?: undefined;
        toolTipBackground?: undefined;
        toolTipClass?: undefined;
        radius?: any;
        innerRadius?: any;
        startAngle?: undefined;
        endAngle?: undefined;
        offsetX?: undefined;
        offsetY?: undefined;
        hiddenPointsDisplay?: undefined;
        enableSeriesToggle?: undefined;
        enableSelection?: undefined;
        radiusDataField?: undefined;
        minRadius?: any;
        maxRadius?: any;
        summary?: undefined;
        labelRadius?: any;
        initialAngle?: undefined;
        centerOffset?: undefined;
    }// ChartSerie

    export interface ChartValueAxis {
        // ChartValueAxis properties
        visible?: undefined;
        flip?: undefined;
        position?: string;
        axisSize?: undefined;
        minValue?: undefined;
        maxValue?: undefined;
        baselineValue?: undefined;
        logarithmicScale?: undefined;
        logarithmicScaleBase?: undefined;
        valuesOnTicks?: undefined;
        unitInterval?: undefined;
        title?: ChartAxisTitle;
        labels?: ChartAxisLabels;
        gridLines?: ChartGridLines;
        tickMarks?: ChartTickMarks;
        padding?: ChartPadding;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: undefined;
        alternatingBackgroundColor2?: undefined;
        alternatingBackgroundOpacity?: undefined;
        toolTipFormatSettings?: ChartFormatSettings;
    }// ChartValueAxis

    export interface ChartSeriesGroup {
        // ChartSeriesGroup properties
        type: string;
        orientation?: string;
        valueAxis?: ChartValueAxis;
        series: Array<ChartSerie>;
        formatSettings?: ChartFormatSettings;
        columnsGapPercent?: undefined;
        seriesGapPercent?: undefined;
        columnsMinWidth?: undefined;
        columnsMaxWidth?: undefined;
        columnsTopWidthPercent?: undefined;
        columnsBottomWidthPercent?: undefined;
        skipOverlappingPoints?: undefined;
        polar?: undefined;
        spider?: undefined;
        radius?: any;
        startAngle?: undefined;
        endAngle?: undefined;
        offsetX?: undefined;
        offsetY?: undefined;
        source?: any;
        xAxis?: ChartXAxis;
        colorScheme?: undefined;
        showLabels?: undefined;
    }// ChartSeriesGroup

    export interface ChartLegendLayout {
        // ChartLegendLayout properties
        left: undefined;
        top: undefined;
        width: number | string;
        height: number | string;
        flow: string;
    }// ChartLegendLayout

    export interface ChartOptions {
        // ChartOptions properties
        title?: undefined;
        description?: undefined;
        source?: any;
        showBorderLine?: undefined;
        borderLineColor?: undefined;
        borderLineWidth?: undefined;
        backgroundColor?: undefined;
        backgroundImage?: undefined;
        showLegend?: undefined;
        legendLayout?: ChartLegendLayout;
        categoryAxis?: any;
        padding?: ChartPadding;
        titlePadding?: ChartPadding;
        colorScheme?: undefined;
        greyScale?: undefined;
        showToolTips?: undefined;
        toolTipShowDelay?: undefined;
        toolTipHideDelay?: undefined;
        toolTipMoveDuration?: undefined;
        drawBefore?: (renderer: any, rect: any) => { };
        draw?: (renderer: any, rect: any) => { };
        rtl?: undefined;
        enableCrosshairs?: undefined;
        crosshairsColor?: undefined;
        crosshairsDashStyle?: undefined;
        crosshairsLineWidth?: undefined;
        columnSeriesOverlap?: undefined;
        enabled?: undefined;
        enableAnimations?: undefined;
        animationDuration?: undefined;
        enableAxisTextAnimation?: undefined;
        renderEngine?: string;
        xAxis?: ChartXAxis;
        valueAxis?: ChartValueAxis;
        seriesGroups: Array<ChartSeriesGroup>;
    }// ChartOptions

    export interface jqxChart extends widget, ChartOptions {

        // jqxChart functions
        getInstance(): any;
        refresh(): void;
        update(): void;
        destroy(): void;
        addColorScheme(schemeName: undefined, colors: Array<string>): void;
        removeColorScheme(schemeName: undefined): void;
        getItemsCount(groupIndex: undefined, serieIndex: undefined): number;
        getItemCoord(groupIndex: undefined, serieIndex: undefined, itemIndex: undefined): any;
        getXAxisRect(groupIndex: undefined): ChartRect;
        getXAxisLabels(groupIndex: undefined): Array<any>;
        getValueAxisRect(groupIndex: undefined): ChartRect;
        getValueAxisLabels(groupIndex: undefined): Array<any>;
        getColorScheme(colorScheme: undefined): Array<string>;
        hideSerie(groupIndex: undefined, serieIndex: undefined, itemIndex?: undefined): void;
        showSerie(groupIndex: undefined, serieIndex: undefined, itemIndex?: undefined): void;
        hideToolTip(hideDelay: undefined): void;
        showToolTip(groupIndex: undefined, serieIndex: undefined, itemIndex: undefined, showDelay?: undefined, hideDelay?: undefined): void;
        saveAsJPEG(fileName: undefined, exportServerUrl?: undefined): void;
        saveAsPNG(fileName: undefined, exportServerUrl?: undefined): void;
        saveAsPDF(fileName: undefined, exportServerUrl?: undefined): void;
        getXAxisValue(offset: undefined, groupIndex: undefined): any;
        getValueAxisValue(offset: undefined, groupIndex: undefined): any;
    }// jqxChart

    export interface CheckBoxOptions {
        // CheckBoxOptions properties
        animationShowDelay?: undefined;
        animationHideDelay?: undefined;
        boxSize?: number | string;
        checked?: undefined;
        disabled?: undefined;
        enableContainerClick?: undefined;
        groupName?: undefined;
        height?: number | string;
        hasThreeStates?: undefined;
        locked?: undefined;
        rtl?: undefined;
        theme?: undefined;
        width?: number | string;
    }// CheckBoxOptions

    export interface jqxCheckBox extends widget, CheckBoxOptions {

        // jqxCheckBox functions
        check(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        focus(): void;
        indeterminate(): void;
        render(): void;
        toggle(): void;
        uncheck(): void;
        val(value: undefined): undefined;
    }// jqxCheckBox

    export interface ColorPickerOptions {
        // ColorPickerOptions properties
        color?: undefined;
        colorMode?: string;
        disabled?: undefined;
        height?: string | number;
        showTransparent?: undefined;
        width?: string | number;
    }// ColorPickerOptions

    export interface jqxColorPicker extends widget, ColorPickerOptions {

        // jqxColorPicker functions
        getColor(): undefined;
        setColor(color: any): void;
    }// jqxColorPicker

    export interface ComboBoxOptions {
        // ComboBoxOptions properties
        animationType?: string;
        autoComplete?: undefined;
        autoOpen?: undefined;
        autoItemsHeight?: undefined;
        autoDropDownHeight?: undefined;
        closeDelay?: undefined;
        checkboxes?: undefined;
        disabled?: undefined;
        displayMember?: undefined;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownHeight?: number | string;
        dropDownWidth?: number | string;
        enableHover?: undefined;
        enableSelection?: undefined;
        enableBrowserBoundsDetection?: undefined;
        height?: string | number;
        itemHeight?: undefined;
        multiSelect?: undefined;
        minLength?: undefined;
        openDelay?: undefined;
        popupZIndex?: undefined;
        placeHolder?: undefined;
        remoteAutoComplete?: undefined;
        remoteAutoCompleteDelay?: undefined;
        renderer?: (index:number, label?:string, value?:any) => string;
        renderSelectedItem?: (index:number, item?:any) => string;
        rtl?: undefined;
        selectedIndex?: undefined;
        showArrow?: undefined;
        showCloseButtons?: undefined;
        searchMode?: string;
        search?: (searchstring:string) => void;
        source?: Array<any>;
        scrollBarSize?: number | string;
        template?: string;
        theme?: undefined;
        validateSelection?: (itemValue:string) => boolean;
        valueMember?: undefined;
        width?: string | number;
    }// ComboBoxOptions

    export interface jqxComboBox extends widget, ComboBoxOptions {

        // jqxComboBox functions
        addItem(item: any): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: undefined): void;
        checkItem(item: any): void;
        checkAll(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: undefined): void;
        enableItem(item: any): void;
        enableAt(index: undefined): void;
        ensureVisible(index: undefined): void;
        focus(): void;
        getItem(index: undefined): any;
        getItemByValue(value: undefined): any;
        getVisibleItems(): Array<any>;
        getItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getSelectedItem(): any;
        getSelectedItems(): Array<any>;
        getSelectedIndex(): undefined;
        insertAt(item: any, index: undefined): boolean;
        isOpened(): undefined;
        indeterminateIndex(index: undefined): void;
        indeterminateItem(item: any): void;
        loadFromSelect(selectTagId: undefined): void;
        open(): void;
        removeItem(item: any): undefined;
        removeAt(index: undefined): undefined;
        selectIndex(index: undefined): void;
        selectItem(item: any): void;
        searchstring(): undefined;
        updateItem(item: any, itemValue: undefined): void;
        updateAt(item: any, index: any): void;
        unselectIndex(index: undefined): void;
        unselectItem(item: any): void;
        uncheckIndex(index: undefined): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: undefined): undefined;
    }// jqxComboBox

    export interface ComplexInputOptions {
        // ComplexInputOptions properties
        decimalNotation?: string;
        disabled?: undefined;
        height?: string | number;
        placeHolder?: undefined;
        roundedCorners?: undefined;
        rtl?: undefined;
        spinButtons?: undefined;
        spinButtonsStep?: undefined;
        template?: string;
        theme?: undefined;
        value?: undefined;
        width?: string | number;
    }// ComplexInputOptions

    export interface jqxComplexInput extends widget, ComplexInputOptions {

        // jqxComplexInput functions
        destroy(): void;
        getReal(complexnumber: undefined): undefined;
        getImaginary(complexnumber: undefined): undefined;
        getDecimalNotation(part: undefined, type: undefined): undefined;
        render(): void;
        refresh(): void;
        val(value: any): undefined;
    }// jqxComplexInput

    export interface DataTableColumns {
        // DataTableColumns properties
        text: undefined;
        dataField: undefined;
        displayField?: undefined;
        sortable?: undefined;
        filterable?: undefined;
        hidden?: undefined;
        columnGroup ?: undefined;
        autoCellHeight?: undefined;
        renderer?: (text:string, align?:string, height?: string | number) => string;
        rendered?: (element:any, align?:string, height?: string | number) => boolean;
        cellsRenderer?: (row:number, column?:any, value?: any, rowData?:any) => string;
        columnType?: undefined;
        validation?: (cell:number, value?:any) => any;
        initEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
        createEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
        getEditorValue?: (row:number, cellValue?:any, editor?:any) => void;
        cellsFormat?: string;
        aggregates?: Array<string>;
        aggregatesRenderer?: (aggregates:Array<any>) => string;
        align?: string;
        cellsAlign?: string;
        width?: number | string;
        minWidth?: number | string;
        maxWidth?: number | string;
        resizable?: undefined;
        draggable?: undefined;
        editable?: undefined;
        className?: undefined;
        cellClassName?: any;
        pinned?: undefined;
    }// DataTableColumns

    export interface DataTableColumnGroups {
        // DataTableColumnGroups properties
        text?: undefined;
        parentGroup?: undefined;
        align?: undefined;
        name?: undefined;
    }// DataTableColumnGroups

    export interface DataTableEditSettings {
        // DataTableEditSettings properties
        saveOnPageChange?: undefined;
        saveOnBlur?: undefined;
        saveOnSelectionChange?: undefined;
        cancelOnEsc?: undefined;
        saveOnEnter?: undefined;
        editSingleCell?: undefined;
        editOnDoubleClick?: undefined;
        editOnF2?: undefined;
    }// DataTableEditSettings

    export interface DataTableExportSettings {
        // DataTableExportSettings properties
        columnsHeader?: undefined;
        hiddenColumns?: undefined;
        serverURL?: any;
        characterSet?: any;
        recordsInView?: undefined;
        fileName?: undefined;
    }// DataTableExportSettings

    export interface DataTableOptions {
        // DataTableOptions properties
        altRows?: undefined;
        autoRowHeight?: undefined;
        aggregatesHeight?: undefined;
        autoShowLoadElement?: undefined;
        columnsHeight?: undefined;
        columns?: Array<DataTableColumns>;
        columnGroups?: Array<DataTableColumnGroups>;
        columnsResize?: undefined;
        columnsReorder?: undefined;
        disabled?: undefined;
        editable?: undefined;
        editSettings?: DataTableEditSettings;
        exportSettings?: DataTableExportSettings;
        enableHover?: undefined;
        enableBrowserSelection?: undefined;
        filterable?: undefined;
        filterHeight?: undefined;
        filterMode?: string;
        groups?: Array<any>;
        groupsRenderer?: (value:any, rowData?:any, level?:number) => string;
        height?: number | string;
        initRowDetails?: (id:number, row?:any, element?:any, rowInfo?:any) => void;
        incrementalSearch?: undefined;
        localization?: any;
        pagerHeight?: undefined;
        pageSize?: undefined;
        pageSizeOptions?: Array<string | number>;
        pageable?: undefined;
        pagerPosition?: string;
        pagerMode?: string;
        pagerButtonsCount?: undefined;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: undefined;
        renderToolbar?: (toolbar:any) => void;
        renderStatusbar?: (statusbar:any) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: undefined;
        source?: any;
        sortable?: undefined;
        showAggregates?: undefined;
        showToolbar?: undefined;
        showStatusbar?: undefined;
        statusBarHeight?: undefined;
        scrollBarSize?: number | string;
        selectionMode?: string;
        serverProcessing?: undefined;
        showHeader?: undefined;
        theme?: undefined;
        toolbarHeight?: undefined;
        width?: string | number;
    }// DataTableOptions

    export interface jqxDataTable extends widget, DataTableOptions {

        // jqxDataTable functions
        addRow(rowIndex: undefined, rowData: any, rowPosition: any): void;
        addFilter(dataField: undefined, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowIndex: undefined): void;
        beginCellEdit(rowIndex: undefined, dataField: undefined): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        destroy(): void;
        deleteRow(rowIndex: undefined): void;
        endUpdate(): void;
        ensureRowVisible(rowIndex: undefined): void;
        endRowEdit(rowIndex: undefined, cancelChanges: undefined): void;
        endCellEdit(rowIndex: undefined, dataField: undefined): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: undefined, propertyName: undefined): any;
        goToPage(pageIndex: undefined): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getRows(): Array<any>;
        getView(): Array<any>;
        getCellValue(rowIndex: undefined, dataField: undefined): any;
        hideColumn(dataField: undefined): void;
        hideDetails(rowIndex: undefined): void;
        isBindingCompleted(): undefined;
        lockRow(rowIndex: undefined): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: undefined): void;
        scrollOffset(top: undefined, left: undefined): any;
        setColumnProperty(dataField: undefined, propertyName: undefined, propertyValue: any): void;
        showColumn(dataField: undefined): void;
        selectRow(rowIndex: undefined): void;
        showDetails(rowIndex: undefined): void;
        setCellValue(rowIndex: undefined, dataField: undefined, value: any): void;
        sortBy(dataField: undefined, sortOrder: any): void;
        updating(): undefined;
        updateBoundData(): void;
        unselectRow(rowIndex: undefined): void;
        updateRow(rowIndex: undefined, rowData: any): void;
        unlockRow(rowIndex: undefined): void;
    }// jqxDataTable

    export interface DateTimeInputOptions {
        // DateTimeInputOptions properties
        animationType?: string;
        allowNullDate?: undefined;
        allowKeyboardDelete?: undefined;
        clearstring?: undefined;
        culture?: undefined;
        closeDelay?: undefined;
        closeCalendarAfterSelection?: undefined;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        disabled?: undefined;
        enableBrowserBoundsDetection?: undefined;
        enableAbsoluteSelection?: undefined;
        firstDayOfWeek?: undefined;
        formatstring?: string;
        height?: string | number;
        min?: Date;
        max?: Date;
        openDelay?: undefined;
        placeHolder?: undefined;
        popupZIndex?: undefined;
        rtl?: undefined;
        readonly?: undefined;
        showFooter?: undefined;
        selectionMode?: string;
        showWeeknumbers?: undefined;
        showTimeButton?: undefined;
        showCalendarButton?: undefined;
        theme?: undefined;
        template?: string;
        textAlign?: string;
        todaystring?: undefined;
        value?: Date;
        width?: string | number;
    }// DateTimeInputOptions

    export interface jqxDateTimeInput extends widget, DateTimeInputOptions {

        // jqxDateTimeInput functions
        close(): void;
        destroy(): void;
        focus(): void;
        getRange(date: any): any;
        getText(): undefined;
        getDate(): any;
        getMaxDate(): any;
        getMinDate(): any;
        open(): void;
        setRange(date: any, date2: any): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        val(value: any, value2: any): any;
    }// jqxDateTimeInput

    export interface LayoutLayout {
        // LayoutLayout properties
        type: string;
        alignment?: string;
        allowClose?: undefined;
        allowPin?: undefined;
        allowUnpin?: undefined;
        contentContainer?: undefined;
        height?: number | string;
        initContent?: () => void;
        minHeight?: number | string;
        minWidth?: number | string;
        orientation?: string;
        pinnedHeight?: number | string;
        pinnedWidth?: number | string;
        selected?: undefined;
        title?: number | string;
        unpinnedHeight?: number | string;
        unpinnedWidth?: number | string;
        width?: number | string;
        items?: Array<LayoutLayout>;
    }// LayoutLayout

    export interface LayoutOptions {
        // LayoutOptions properties
        contextMenu?: undefined;
        height?: string | number;
        layout?: Array<LayoutLayout>;
        minGroupHeight?: number | string;
        minGroupWidth?: number | string;
        resizable?: undefined;
        rtl?: undefined;
        theme?: undefined;
        width?: string | number;
    }// LayoutOptions

    export interface jqxLayout extends widget, LayoutOptions {

        // jqxLayout functions
        destroy(): void;
        loadLayout(Layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxLayout

    export interface DockingLayoutLayout {
        // DockingLayoutLayout properties
        type: string;
        alignment?: string;
        allowClose?: undefined;
        allowPin?: undefined;
        allowUnpin?: undefined;
        contentContainer?: undefined;
        height?: number | string;
        initContent?: () => void;
        minHeight?: number | string;
        minWidth?: number | string;
        orientation?: string;
        pinnedHeight?: number | string;
        pinnedWidth?: number | string;
        position?: DockingLayoutLayoutPosition;
        selected?: undefined;
        title?: undefined;
        unpinnedHeight?: number | string;
        unpinnedWidth?: number | string;
        width?: number | string;
        items?: Array<DockingLayoutLayout>;
    }// DockingLayoutLayout

    export interface DockingLayoutLayoutPosition {
        // DockingLayoutLayoutPosition properties
        x: undefined;
        y: undefined;
    }// DockingLayoutLayoutPosition

    export interface DockingLayoutOptions {
        // DockingLayoutOptions properties
        contextMenu?: undefined;
        height?: string | number;
        layout?: Array<DockingLayoutLayout>;
        minGroupHeight?: number | string;
        minGroupWidth?: number | string;
        resizable?: undefined;
        rtl?: undefined;
        theme?: undefined;
        width?: string | number;
    }// DockingLayoutOptions

    export interface jqxDockingLayout extends widget, DockingLayoutOptions {

        // jqxDockingLayout functions
        addFloatGroup(width: number | string, height: number | string, position: DockingLayoutLayoutPosition, panelType: undefined, title: undefined, content: undefined, initContent: any): void;
        destroy(): void;
        loadLayout(layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxDockingLayout

    export interface DockPanelOptions {
        // DockPanelOptions properties
        disabled?: undefined;
        height?: string | number;
        lastchildfill?: undefined;
        width?: string | number;
    }// DockPanelOptions

    export interface jqxDockPanel extends widget, DockPanelOptions {

        // jqxDockPanel functions
        refresh(): void;
    }// jqxDockPanel

    export interface DockingCookieOptions {
        // DockingCookieOptions properties
        domain?: undefined;
        expires?: undefined;
    }// DockingCookieOptions

    export interface DockingWindowsMode {
        // DockingWindowsMode properties
        windowID: string;
    }// DockingWindowsMode

    export interface DockingOptions {
        // DockingOptions properties
        cookies?: undefined;
        cookieOptions?: DockingCookieOptions;
        disabled?: undefined;
        floatingWindowOpacity?: undefined;
        height?: number | string;
        keyboardNavigation?: undefined;
        mode?: string;
        orientation?: string;
        rtl?: undefined;
        theme?: undefined;
        width?: number | string;
        windowsMode?: DockingWindowsMode;
        windowsOffset?: undefined;
    }// DockingOptions

    export interface jqxDocking extends widget, DockingOptions {

        // jqxDocking functions
        addWindow(windowId: undefined, mode: any, panel: undefined, position: any): void;
        closeWindow(windowId: undefined): void;
        collapseWindow(windowId: undefined): void;
        destroy(): void;
        disableWindowResize(windowId: undefined): void;
        disable(): void;
        exportLayout(): undefined;
        enable(): void;
        expandWindow(windowId: undefined): void;
        enableWindowResize(windowId: undefined): void;
        focus(): void;
        hideAllCloseButtons(): void;
        hideAllCollapseButtons(): void;
        hideCollapseButton(windowId: undefined): void;
        hideCloseButton(windowId: undefined): void;
        importLayout(Json: undefined): void;
        move(windowId: undefined, panel: undefined, position: undefined): void;
        pinWindow(windowId: undefined): void;
        setWindowMode(windowId: undefined, mode: any): void;
        showCloseButton(windowId: undefined): void;
        showCollapseButton(windowId: undefined): void;
        setWindowPosition(windowId: undefined, top: any, left: undefined): void;
        showAllCloseButtons(): void;
        showAllCollapseButtons(): void;
        unpinWindow(windowId: undefined): void;
    }// jqxDocking

    export interface DragDropOptions {
        // DragDropOptions properties
        appendTo?: undefined;
        disabled?: undefined;
        distance?: undefined;
        data?: any;
        dropAction?: string;
        dropTarget?: any;
        dragZIndex?: undefined;
        feedback?: string;
        initFeedback?: (feedback?:any) => void;
        opacity?: undefined;
        onDragEnd?: () => void;
        onDrag?: (data?: any, position?: any) => void;
        onDragStart?: (position?: any) => void;
        onTargetDrop?: (data?: any) => void;
        onDropTargetEnter?: () => void;
        onDropTargetLeave?: (data?: any) => void;
        restricter?: string;
        revert?: undefined;
        revertDuration?: undefined;
        tolerance?: string;
    }// DragDropOptions

    export interface jqxDragDrop extends widget, DragDropOptions {

        // jqxDragDrop functions

    }// jqxDragDrop

    export interface DropDownButtonOptions {
        // DropDownButtonOptions properties
        animationType?: string;
        arrowSize?: undefined;
        autoOpen?: undefined;
        closeDelay?: undefined;
        disabled?: undefined;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownWidth?: number | string;
        enableBrowserBoundsDetection?: undefined;
        height?: string | number;
        initContent?: () => void;
        openDelay?: undefined;
        popupZIndex?: undefined;
        rtl?: undefined;
        template?: string;
        theme?: undefined;
        width?: string | number;
    }// DropDownButtonOptions

    export interface jqxDropDownButton extends widget, DropDownButtonOptions {

        // jqxDropDownButton functions
        close(): void;
        destroy(): void;
        focus(): void;
        getContent(): any;
        isOpened(): undefined;
        open(): void;
        setContent(content: undefined): void;
    }// jqxDropDownButton

    export interface DropDownListItem {
        // DropDownListItem properties
        label?: undefined;
        value?: any;
        disabled?: undefined;
        checked?: any;
        hasThreeStates?: undefined;
        html?: undefined;
        group?: undefined;
    }// DropDownListItem

    export interface DropDownListOptions {
        // DropDownListOptions properties
        autoOpen?: undefined;
        autoDropDownHeight?: undefined;
        animationType?: string;
        checkboxes?: undefined;
        closeDelay?: undefined;
        disabled?: undefined;
        displayMember?: undefined;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownHeight?: number | string;
        dropDownWidth?: number | string;
        enableSelection?: undefined;
        enableBrowserBoundsDetection?: undefined;
        enableHover?: undefined;
        filterable?: undefined;
        filterHeight?: undefined;
        filterDelay?: undefined;
        filterPlaceHolder?: undefined;
        height?: number | string;
        incrementalSearch?: undefined;
        incrementalSearchDelay?: undefined;
        itemHeight?: number;
        openDelay?: undefined;
        placeHolder?: undefined;
        popupZIndex?: undefined;
        rtl?: undefined;
        renderer?: (index: number, label?: string, value?: any) => string;
        selectionRenderer?: (object?: any, index?: number, label?: string) => string;
        searchMode?: string;
        scrollBarSize?: number | string;
        source?: Array<any>;
        selectedIndex?: undefined;
        theme?: undefined;
        template?: undefined;
        valueMember?: undefined;
        width?: number | string;
    }// DropDownListOptions

    export interface jqxDropDownList extends widget, DropDownListOptions {

        // jqxDropDownList functions
        addItem(item: DropDownListItem): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: undefined): void;
        checkItem(item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: undefined): void;
        enableItem(item: any): void;
        enableAt(index: undefined): void;
        ensureVisible(index: undefined): void;
        focus(): void;
        getItem(index: undefined): DropDownListItem;
        getItemByValue(itemValue: undefined): DropDownListItem;
        getItems(): Array<DropDownListItem>;
        getCheckedItems(): Array<DropDownListItem>;
        getSelectedItem(): DropDownListItem;
        getSelectedIndex(): undefined;
        insertAt(item: DropDownListItem, index: undefined): void;
        isOpened(): undefined;
        indeterminateIndex(index: undefined): void;
        indeterminateItem(item: any): void;
        loadFromSelect(arg: undefined): void;
        open(): void;
        removeItem(item: any): void;
        removeAt(index: undefined): void;
        selectIndex(index: undefined): void;
        selectItem(item: DropDownListItem): void;
        setContent(content: undefined): void;
        updateItem(newItem: DropDownListItem, item: any): void;
        updateAt(item: DropDownListItem, index: undefined): void;
        unselectIndex(index: undefined): void;
        unselectItem(item: any): void;
        uncheckIndex(index: undefined): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: undefined): undefined;
    }// jqxDropDownList

    export interface EditorLocalization {
        // EditorLocalization properties
        bold?: undefined;
        italic?: undefined;
        underline?: undefined;
        format?: undefined;
        size?: number | string;
        font?: undefined;
        color?: undefined;
        background?: undefined;
        left?: undefined;
        center?: undefined;
        right?: undefined;
        outdent?: undefined;
        indent?: undefined;
        ul?: undefined;
        ol?: undefined;
        image?: undefined;
        link?: undefined;
        clean?: undefined;
    }// EditorLocalization

    export interface EditorOptions {
        // EditorOptions properties
        createCommand?: (name:any) => void;
        disabled?: undefined;
        editable?: undefined;
        height?: string  | number;
        lineBreak?: string;
        localization?: EditorLocalization;
        pasteMode?: string;
        rtl?: undefined;
        stylesheets?: Array<any>;
        theme?: undefined;
        toolbarPosition?: string;
        tools?: undefined;
        width?: string | number;
    }// EditorOptions

    export interface jqxEditor extends widget, EditorOptions {

        // jqxEditor functions
        destroy(): void;
        focus(): void;
        print(): void;
        setMode(mode: undefined): void;
        val(value: undefined): undefined;
    }// jqxEditor

    export interface ExpanderOptions {
        // ExpanderOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: undefined;
        disabled?: undefined;
        expanded?: undefined;
        expandAnimationDuration?: undefined;
        height?: number | string;
        headerPosition?: string;
        initContent?: () => void;
        rtl?: undefined;
        showArrow?: undefined;
        theme?: undefined;
        toggleMode?: string;
        width?: number | string;
    }// ExpanderOptions

    export interface jqxExpander extends widget, ExpanderOptions {

        // jqxExpander functions
        collapse(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        expand(): void;
        focus(): void;
        getContent(): undefined;
        getHeaderContent(): undefined;
        invalidate(): void;
        refresh(): void;
        render(): void;
        setHeaderContent(headerContent: undefined): void;
        setContent(content: undefined): void;
    }// jqxExpander

    export interface FileUploadLocalization {
        // FileUploadLocalization properties
        browseButton?: undefined;
        uploadButton?: undefined;
        cancelButton?: undefined;
        uploadFileTooltip?: undefined;
        cancelFileTooltip?: undefined;
    }// FileUploadLocalization

    export interface FileUploadOptions {
        // FileUploadOptions properties
        autoUpload?: undefined;
        accept?: undefined;
        browseTemplate?: string;
        cancelTemplate?: string;
        disabled?: undefined;
        fileInputName?: undefined;
        height?: number | string;
        localization?: FileUploadLocalization;
        multipleFilesUpload?: undefined;
        renderFiles?: (filename:any) => void;
        rtl?: undefined;
        theme?: undefined;
        uploadUrl?: undefined;
        uploadTemplate?: string;
        width?: string | number;
    }// FileUploadOptions

    export interface jqxFileUpload extends widget, FileUploadOptions {

        // jqxFileUpload functions
        browse(): void;
        cancelFile(): void;
        cancelAll(): void;
        destroy(): void;
        render(): void;
        refresh(): void;
        uploadFile(fileIndex: undefined): void;
        uploadAll(): void;
    }// jqxFileUpload

    export interface FormattedInputOptions {
        // FormattedInputOptions properties
        disabled?: undefined;
        decimalNotation?: string;
        dropDown?: undefined;
        dropDownWidth?: number | string;
        height?: number | string;
        min?: number | string;
        max?: number | string;
        placeHolder?: undefined;
        popupZIndex?: undefined;
        roundedCorners?: undefined;
        rtl?: undefined;
        radix?: number | string;
        spinButtons?: undefined;
        spinButtonsStep?: undefined;
        template?: string;
        theme?: undefined;
        upperCase?: undefined;
        value?: undefined;
        width?: number | string;
    }// FormattedInputOptions

    export interface jqxFormattedInput extends widget, FormattedInputOptions {

        // jqxFormattedInput functions
        close(): void;
        destroy(): void;
        focus(): void;
        open(): void;
        render(): void;
        refresh(): void;
        selectAll(): void;
        selectFirst(): void;
        selectLast(): void;
        val(value: number | string): any;
    }// jqxFormattedInput

    export interface GaugeStyle {
        // GaugeStyle properties
        fill?: undefined;
        stroke?: undefined;
    }// GaugeStyle

    export interface GaugeBorder {
        // GaugeBorder properties
        size?: number | string;
        visible?: undefined;
        style?: GaugeStyle;
        showGradient?: undefined;
    }// GaugeBorder

    export interface GaugeCaption {
        // GaugeCaption properties
        value?: undefined;
        position?: string;
        offset?: Array<number>;
        visible?: undefined;
    }// GaugeCaption

    export interface GaugeCap {
        // GaugeCap properties
        size?: number | string;
        visible?: boolean;
        style?: GaugeStyle;
    }// GaugeCap

    export interface GaugeLabels {
        // GaugeLabels properties
        distance?: undefined;
        position?: string;
        interval?: number | string;
        offset?: Array<number>;
        visible?: undefined;
        formatValue?: (value?: number) => string;
    }// GaugeLabels

    export interface GaugePointer {
        // GaugePointer properties
        pointerType?: undefined;
        style?: GaugeStyle;
        width?: number | string;
        length?: number | string;
        visible?: undefined;
    }// GaugePointer

    export interface GaugeRanges {
        // GaugeRanges properties
        startValue: number | string;
        endValue: number | string;
        startWidth: number | string;
        endWidth: number | string;
        startDistance?: number | string;
        endDistance?: number | string;
        style: GaugeStyle;
    }// GaugeRanges

    export interface GaugeTicks {
        // GaugeTicks properties
        size: number | string;
        interval: number | string;
        visible?: undefined;
        style?: GaugeStyle;
    }// GaugeTicks

    export interface GaugeOptions {
        // GaugeOptions properties
        animationDuration?: string | number;
        border?: GaugeBorder;
        caption?: GaugeCaption;
        cap?: GaugeCap;
        colorScheme?: undefined;
        disabled?: undefined;
        easing?: string;
        endAngle?: number | string;
        height?: number | string;
        int64?: undefined;
        labels?: GaugeLabels;
        min?: undefined;
        max?: number | string;
        pointer?: GaugePointer;
        radius?: number | string;
        ranges?: Array<GaugeRanges>;
        startAngle?: number | string;
        showRanges?: undefined;
        style?: GaugeStyle;
        ticksMajor?: GaugeTicks;
        ticksMinor?: GaugeTicks;
        ticksDistance?: undefined;
        value?: undefined;
        width?: number | string;
    }// GaugeOptions

    export interface jqxGauge extends widget, GaugeOptions {

        // jqxGauge functions
        disable(): void;
        enable(): void;
        val(value: undefined): undefined;
    }// jqxGauge

    export interface GridColumnType {
        // GridColumnType properties
        number?: undefined;
        checkbox?: string;
        numberinput?: undefined;
        dropdownlist?: undefined;
        combobox?: undefined;
        datetimeinput?: undefined;
        textbox?: undefined;
        template?: undefined;
        custom?: undefined;
    }// GridColumnType

    export interface ValidationResult {
        // ValidationResult properties
        result: undefined;
        message?: undefined;
    }// ValidationResult

    export interface GridColumn {
        // GridColumn properties
        text?: undefined;
        datafield?: undefined;
        displayfield?: undefined;
        sortable?: undefined;
        filterable?: undefined;
        filter?: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: any) => any;
        hideable?: undefined;
        hidden?: undefined;
        groupable?: undefined;
        menu?: undefined;
        exportable?: undefined;
        columngroup?: undefined;
        enabletooltips?: undefined;
        renderer?: (defaultText?: string, alignment?: string, height?: number) => string;
        rendered?: (columnHeaderElement?: any) => void;
        cellsrenderer?: (row?: number, columnfield?: string, value?: any, defaulthtml?: string, columnproperties?: any, rowdata?: any) => string;
        columntype?: GridColumnType;
        validation?: (cell?: any, value?: number) => any;
        createwidget?: (row: any, column: any, value: string, cellElement: any) => void;
        initwidget?: (row: number, column: string, value: string, cellElement: any) => void;
        createfilterwidget?: (column: any, htmlElement: any, editor: any) => void;
        createfilterpanel?: (datafield: string, filterPanel: any) => void;
        initeditor?: (row: number, cellvalue: any, editor: any, celltext: any, pressedChar: string, callback: any) => void;
        createeditor?: (row: number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => void;
        destroyeditor?: (row: number, callback: any) => void;
        geteditorvalue?: (row: number, cellvalue:any, editor:any) => any;
        cellbeginedit?: (row: number, datafield: string, columntype: string) => boolean;
        cellendedit?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => boolean;
        cellvaluechanging?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => string;
        createeverpresentrowwidget?: (datafield: string, htmlElement: any, popup: any, addRowCallback: any) => any;
        initeverpresentrowwidget?: (datafield: string, htmlElement: any, popup: any) => void;
        reseteverpresentrowwidgetvalue?: (htmlElement: any) => void;
        geteverpresentrowwidgetvalue?: (datafield: string, htmlElement: any) => any;
        destroyeverpresentrowwidget?: (htmlElement: any) => void;
        validateeverpresentrowwidgetvalue?: (datafield: string, value: any, rowValues: any) => boolean;
        cellsformat?: string;
        cellclassname?: string;
        aggregates?: any;
        align?: string;
        cellsalign?: string;
        width?: number | string;
        minwidth?: any;
        maxwidth?: any;
        resizable?: undefined;
        draggable?: undefined;
        editable?: undefined;
        classname?: undefined;
        pinned?: undefined;
        nullable?: undefined;
        filteritems?: any;
        filterdelay?: undefined;
        filtertype?: string;
        filtercondition?: string;
    }// GridColumn

    export interface GridSourceDataFields {
        // GridSourceDataFields properties
        name: undefined;
        type?: string;
        format?: undefined;
        map?: undefined;
        id?: undefined;
        text?: undefined;
        source?: Array<any>;
    }// GridSourceDataFields

    export interface GridSource {
        // GridSource properties
        url?: undefined;
        data?: any;
        localdata?: any;
        datatype?: string;
        type?: string;
        id?: undefined;
        root?: undefined;
        record?: undefined;
        datafields?: Array<GridSourceDataFields>;
        pagenum?: undefined;
        pagesize?: undefined;
        pager?: (pagenum?: number, pagesize?: number, oldpagenum?: number) => any;
        sortcolumn?: undefined;
        sortdirection?: string;
        sort?: (column?: any, direction?: any) => void;
        filter?: (filters?: any, recordsArray?: any) => void;
        addrow?: (rowid?: any, rowdata?: any, position?: any, commit?: boolean) => void;
        deleterow?: (rowid?: any, commit?: boolean) => void;
        updaterow?: (rowid?: any, newdata?: any, commit? : any) => void;
        processdata?: (data: any) => void;
        formatdata?: (data: any) => any;
        async?: undefined;
    }// GridSource

    export interface GridGetColumn {
        // GridGetColumn properties
        datafield?: undefined;
        displayfield?: undefined;
        text?: undefined;
        sortable?: undefined;
        filterable?: undefined;
        exportable?: undefined;
        editable?: undefined;
        groupable?: undefined;
        resizable?: undefined;
        draggable?: undefined;
        classname?: undefined;
        cellclassname?: undefined;
        width?: number | string;
        menu?: undefined;
    }// GridGetColumn

    export interface GridGetDataInformation {
        // GridGetDataInformation properties
        rowscount?: undefined;
        sortinformation?: any;
        sortcolumn?: any;
        sortdirection?: any;
        paginginformation?: any;
        pagenum?: any;
        pagesize?: any;
        pagescount?: any;
    }// GridGetDataInformation

    export interface GridGetSortInformation {
        // GridGetSortInformation properties
        sortcolumn?: undefined;
        sortdirection?: any;
    }// GridGetSortInformation

    export interface GridGetPagingInformation {
        // GridGetPagingInformation properties
        pagenum?: undefined;
        pagesize?: any;
        pagescount?: any;
    }// GridGetPagingInformation

    export interface GridDateNaming {
        // GridDateNaming properties
        names?: Array<string>;
        namesAbbr?: Array<string>;
        namesShort?: Array<string>;
    }// GridDateNaming

    export interface GridLocalizationobject {
        // GridLocalizationobject properties
        filterstringcomparisonoperators?: any;
        filternumericcomparisonoperators?: any;
        filterdatecomparisonoperators?: any;
        filterbooleancomparisonoperators?: any;
        pagergotopagestring?: undefined;
        pagershowrowsstring?: undefined;
        pagerrangestring?: undefined;
        pagernextbuttonstring?: undefined;
        pagerpreviousbuttonstring?: undefined;
        sortascendingstring?: undefined;
        sortdescendingstring?: undefined;
        sortremovestring?: undefined;
        firstDay?: undefined;
        percentsymbol?: undefined;
        currencysymbol?: undefined;
        currencysymbolposition?: undefined;
        decimalseparator?: undefined;
        thousandsseparator?: undefined;
        days?: GridDateNaming;
        months?: GridDateNaming;
    }// GridLocalizationobject

    export interface GridScrollPosition {
        // GridScrollPosition properties
        top?: undefined;
        left?: undefined;
    }// GridScrollPosition

    export interface GridGetGroup {
        // GridGetGroup properties
        group?: undefined;
        level?: undefined;
        expanded?: undefined;
        subgroups?: undefined;
        subrows?: undefined;
    }// GridGetGroup

    export interface GridGetCell {
        // GridGetCell properties
        value?: undefined;
        row?: undefined;
        column?: undefined;
    }// GridGetCell

    export interface GridGetSelectedCell {
        // GridGetSelectedCell properties
        rowindex?: undefined;
        datafield?: undefined;
    }// GridGetSelectedCell

    export interface GridGetStateColumns {
        // GridGetStateColumns properties
        width?: number | string;
        hidden?: undefined;
        index?: undefined;
        pinned?: undefined;
        groupable?: undefined;
        resizable?: undefined;
        draggable?: undefined;
        text?: undefined;
        align?: undefined;
        cellsalign?: undefined;
    }// GridGetStateColumns

    export interface GridGetState {
        // GridGetState properties
        width?: number | string;
        height?: number | string;
        pagenum?: undefined;
        pagesize?: undefined;
        pagesizeoptions?: Array<string>;
        sortcolumn?: any;
        sortdirection?: any;
        filters?: any;
        groups?: any;
        columns?: GridGetStateColumns;
    }// GridGetState

    export interface GridOptions {
        // GridOptions properties
        altrows?: undefined;
        altstart?: undefined;
        altstep?: undefined;
        autoshowloadelement?: undefined;
        autoshowfiltericon?: undefined;
        autoshowcolumnsmenubutton?: undefined;
        clipboard?: undefined;
        closeablegroups?: undefined;
        columnsmenuwidth?: undefined;
        columnmenuopening?: (menu?: any, datafield?: string, height?: number | string) => boolean;
        columnmenuclosing?: (menu?: any, datafield?: string, height?: number | string) => boolean;
        cellhover?: (cellhtmlElement?: any, x?: number, y?: number) => void;
        enablekeyboarddelete?: undefined;
        enableellipsis?: undefined;
        enablemousewheel?: undefined;
        enableanimations?: undefined;
        enabletooltips?: undefined;
        enablehover?: undefined;
        enablebrowserselection?: undefined;
        everpresentrowposition?: string;
        everpresentrowheight?: undefined;
        everpresentrowactions?: undefined;
        everpresentrowactionsmode?: string;
        filterrowheight?: undefined;
        filtermode?: string;
        groupsrenderer?: (text?: string, group?: number, expanded?: boolean, data?: any) => string;
        groupcolumnrenderer?: (text?: string, group?: number, expanded?: boolean, data?: any) => string;
        groupsexpandedbydefault?: undefined;
        handlekeyboardnavigation?: (event: any) => boolean;
        pagerrenderer?: () => any[];
        rtl?: undefined;
        showdefaultloadelement?: undefined;
        showfiltercolumnbackground?: undefined;
        showfiltermenuitems?: undefined;
        showpinnedcolumnbackground?: undefined;
        showsortcolumnbackground?: undefined;
        showsortmenuitems?: undefined;
        showgroupmenuitems?: undefined;
        showrowdetailscolumn?: undefined;
        showheader?: undefined;
        showgroupsheader?: undefined;
        showaggregates?: undefined;
        showgroupaggregates?: undefined;
        showeverpresentrow?: undefined;
        showfilterrow?: undefined;
        showemptyrow?: undefined;
        showstatusbar?: undefined;
        statusbarheight?: undefined;
        showtoolbar?: undefined;
        selectionmode?: string;
        updatefilterconditions?: (type?: string, defaultconditions?: any) => any;
        updatefilterpanel?: (filtertypedropdown1?: any, filtertypedropdown2?: any, filteroperatordropdown?: any, filterinputfield1?: any, filterinputfield2?: any, filterbutton?: any, clearbutton?: any, columnfilter?: any, filtertype?: any, filterconditions?: any) => any;
        theme?: undefined;
        toolbarheight?: undefined;
        autoheight?: undefined;
        autorowheight?: undefined;
        columnsheight?: undefined;
        deferreddatafields?: Array<string>;
        groupsheaderheight?: undefined;
        groupindentwidth?: undefined;
        height?: number | string;
        pagerheight?: number | string;
        rowsheight?: undefined;
        scrollbarsize?: number | string;
        scrollmode?: string;
        scrollfeedback?: (row: any) => string;
        width?: string | number;
        autosavestate?: undefined;
        autoloadstate?: undefined;
        columns?: Array<GridColumn>;
        columngroups?: Array<any>;
        columnsmenu?: undefined;
        columnsresize?: undefined;
        columnsautoresize?: undefined;
        columnsreorder?: undefined;
        disabled?: undefined;
        editable?: undefined;
        editmode?: string;
        filter?: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: boolean) => any;
        filterable?: undefined;
        groupable?: undefined;
        groups?: Array<string>;
        horizontalscrollbarstep?: undefined;
        horizontalscrollbarlargestep?: undefined;
        initrowdetails?: (index?: number, parentElement?: any, gridElement?: any, datarecord?: any) => void;
        keyboardnavigation?: undefined;
        localization?: any;
        pagesize?: undefined;
        pagesizeoptions?: Array<number | string>;
        pagermode?: string;
        pagerbuttonscount?: undefined;
        pageable?: undefined;
        rowdetails?: undefined;
        rowdetailstemplate?: any;
        ready?: () => void;
        rendered?: () => void;
        renderstatusbar?: (statusbar?: any) => void;
        rendertoolbar?: (toolbar?: any) => void;
        rendergridrows?: (params?: any) => any;
        sortable?: undefined;
        selectedrowindex?: undefined;
        selectedrowindexes?: Array<number>;
        source?: any;
        sorttogglestates?: string;
        updatedelay?: undefined;
        virtualmode?: undefined;
        verticalscrollbarstep?: undefined;
        verticalscrollbarlargestep?: undefined;
    }// GridOptions

    export interface jqxGrid extends widget, GridOptions {

        // jqxGrid functions
        autoresizecolumns(type: undefined): void;
        autoresizecolumn(dataField: undefined, type: undefined): void;
        beginupdate(): void;
        clear(): void;
        destroy(): void;
        endupdate(): void;
        ensurerowvisible(rowBoundIndex: undefined): void;
        focus(): void;
        getcolumnindex(dataField: undefined): undefined;
        getcolumn(dataField: undefined): GridGetColumn;
        getcolumnproperty(dataField: undefined, propertyName: undefined): any;
        getrowid(rowBoundIndex: undefined): undefined;
        getrowdata(rowBoundIndex: undefined): any;
        getrowdatabyid(rowID: undefined): any;
        getrowboundindexbyid(rowID: undefined): undefined;
        getrowboundindex(rowDisplayIndex: undefined): undefined;
        getrows(): Array<any>;
        getboundrows(): Array<any>;
        getdisplayrows(): Array<any>;
        getdatainformation(): GridGetDataInformation;
        getsortinformation(): GridGetSortInformation;
        getpaginginformation(): GridGetPagingInformation;
        hidecolumn(dataField: undefined): void;
        hideloadelement(): void;
        hiderowdetails(rowBoundIndex: undefined): void;
        iscolumnvisible(dataField: undefined): undefined;
        iscolumnpinned(dataField: undefined): undefined;
        localizestrings(localizationobject: GridLocalizationobject): void;
        pincolumn(dataField: undefined): void;
        refreshdata(): void;
        refresh(): void;
        render(): void;
        scrolloffset(top: undefined, left: undefined): void;
        scrollposition(): GridScrollPosition;
        showloadelement(): void;
        showrowdetails(rowBoundIndex: undefined): void;
        setcolumnindex(dataField: undefined, index: undefined): void;
        setcolumnproperty(dataField: undefined, propertyName: any, propertyValue: any): void;
        showcolumn(dataField: undefined): void;
        unpincolumn(dataField: undefined): void;
        updatebounddata(type: any): void;
        updating(): undefined;
        getsortcolumn(): undefined;
        removesort(): void;
        sortby(dataField: undefined, sortOrder: undefined): void;
        addgroup(dataField: undefined): void;
        cleargroups(): void;
        collapsegroup(group: number | string): void;
        collapseallgroups(): void;
        expandallgroups(): void;
        expandgroup(group: number | string): void;
        getrootgroupscount(): undefined;
        getgroup(groupIndex: undefined): GridGetGroup;
        insertgroup(groupIndex: undefined, dataField: undefined): void;
        iscolumngroupable(): undefined;
        removegroupat(groupIndex: undefined): void;
        removegroup(dataField: undefined): void;
        addfilter(dataField: undefined, filterGroup: any, refreshGrid: undefined): void;
        applyfilters(): void;
        clearfilters(): void;
        getfilterinformation(): any;
        getcolumnat(index: undefined): any;
        removefilter(dataField: undefined, refreshGrid: undefined): void;
        refreshfilterrow(): void;
        gotopage(pagenumber: undefined): void;
        gotoprevpage(): void;
        gotonextpage(): void;
        addrow(rowIds: any, data: any, rowPosition: any): void;
        begincelledit(rowBoundIndex: undefined, dataField: undefined): void;
        beginrowedit(rowBoundIndex: undefined): void;
        closemenu(): void;
        deleterow(rowIds: string | number | Array<number | string>): void;
        endcelledit(rowBoundIndex: undefined, dataField: undefined, confirmChanges: undefined): void;
        endrowedit(rowBoundIndex: undefined, confirmChanges: undefined): void;
        getcell(rowBoundIndex: undefined, datafield: undefined): GridGetCell;
        getcellatposition(left: undefined, top: undefined): GridGetCell;
        getcelltext(rowBoundIndex: undefined, dataField: undefined): undefined;
        getcelltextbyid(rowID: undefined, dataField: undefined): undefined;
        getcellvaluebyid(rowID: undefined, dataField: undefined): any;
        getcellvalue(rowBoundIndex: undefined, dataField: undefined): any;
        isBindingCompleted(): undefined;
        openmenu(dataField: undefined): void;
        setcellvalue(rowBoundIndex: undefined, dataField: undefined, value: any): void;
        setcellvaluebyid(rowID: undefined, dataField: undefined, value: any): void;
        showvalidationpopup(rowBoundIndex: undefined, dataField: undefined, validationMessage: undefined): void;
        updaterow(rowIds: string | number | Array<number | string>, data: any): void;
        clearselection(): void;
        getselectedrowindex(): undefined;
        getselectedrowindexes(): Array<number>;
        getselectedcell(): GridGetSelectedCell;
        getselectedcells(): Array<GridGetSelectedCell>;
        selectcell(rowBoundIndex: undefined, dataField: undefined): void;
        selectallrows(): void;
        selectrow(rowBoundIndex: undefined): void;
        unselectrow(rowBoundIndex: undefined): void;
        unselectcell(rowBoundIndex: undefined, dataField: undefined): void;
        getcolumnaggregateddata(dataField: undefined, aggregates: Array<any>): undefined;
        refreshaggregates(): void;
        renderaggregates(): void;
        exportdata(dataType: undefined, fileName: undefined, exportHeader: undefined, rows: Array<number>, exportHiddenColumns: undefined, serverURL: undefined, charSet: undefined): undefined;
        getstate(): GridGetState;
        loadstate(stateobject: any): void;
        savestate(): GridGetState;
    }// jqxGrid

    export interface InputOptions {
        // InputOptions properties
        disabled?: undefined;
        dropDownWidth?: number | string;
        displayMember?: undefined;
        height?: string | number;
        items?: undefined;
        minLength?: undefined;
        maxLength?: undefined;
        opened?: undefined;
        placeHolder?: undefined;
        popupZIndex?: undefined;
        query?: undefined;
        renderer?: (itemValue?: string, inputValue?: string) => string;
        rtl?: undefined;
        searchMode?: string;
        source?: any;
        theme?: undefined;
        valueMember?: undefined;
        width?: string | number;
        value?: number | string;
    }// InputOptions

    export interface jqxInput extends widget, InputOptions {

        // jqxInput functions
        destroy(): void;
        focus(): void;
        selectAll(): void;
        val(value: number | string): undefined;
    }// jqxInput

    export interface KanbanColumns {
        // KanbanColumns properties
        text?: undefined;
        dataField?: undefined;
        maxItems?: undefined;
        collapsible?: undefined;
        collapseDirection?: string;
        headerElement?: any;
        collapsedHeaderElement?: any;
        iconClassName?: undefined;
    }// KanbanColumns

    export interface KanbanSource {
        // KanbanSource properties
        id?: undefined;
        status?: undefined;
        text?: undefined;
        content?: any;
        tags?: undefined;
        color?: undefined;
        resourceId?: any;
        className?: undefined;
    }// KanbanSource

    export interface KanbanUpdateItem {
        // KanbanUpdateItem properties
        status?: undefined;
        text?: undefined;
        content?: any;
        tags?: undefined;
        color?: undefined;
        resourceId?: any;
        className?: undefined;
    }// KanbanUpdateItem

    export interface KanbanOptions {
        // KanbanOptions properties
        columnRenderer?: (element?: any, collapsedElement?: any, column?: any) => void;
        columns?: Array<KanbanColumns>;
        connectWith?: undefined;
        headerHeight?: number | string;
        headerWidth?: undefined;
        height?: string | number;
        itemRenderer?: (element?: Array<any>, item?: any, resource?: any) => void;
        ready?: () => void;
        rtl?: undefined;
        source?: Array<any>;
        resources?: Array<any>;
        template?: undefined;
        templateContent?: any;
        theme?: undefined;
        width?: string | number;
    }// KanbanOptions

    export interface jqxKanban extends widget, KanbanOptions {

        // jqxKanban functions
        addItem(newItem: any): void;
        destroy(): void;
        getColumn(dataField: undefined): KanbanColumns;
        getColumnItems(dataField: undefined): Array<KanbanSource>;
        getItems(): KanbanSource;
        removeItem(itemId: undefined): void;
        updateItem(itemId: undefined, newContent: KanbanUpdateItem): void;
    }// jqxKanban

    export interface KnobLabelsFormatFunction {
        // KnobLabelsFormatFunction properties
        formatFunction?: (label: string | number) => string | number;
    }// KnobLabelsFormatFunction

    export interface KnobMarks {
        // KnobMarks properties
        colorProgress?: any;
        colorRemaining?: any;
        drawAboveProgressBar?: undefined;
        minorInterval?: undefined;
        majorInterval?: undefined;
        majorSize?: number | string;
        offset?: undefined;
        rotate?: undefined;
        size?: number | string;
        type?: string;
        thickness?: undefined;
        visible?: undefined;
    }// KnobMarks

    export interface KnobDial {
        // KnobDial properties
        innerRadius?: any;
        outerRadius?: any;
        style?: any;
        startAngle?: undefined;
        endAngle?: undefined;
    }// KnobDial

    export interface KnobLabels {
        // KnobLabels properties
        rotate?: any;
        offset?: number | string;
        visible?: undefined;
        step?: undefined;
        style?: any;
        formatFunction?: (label: string | number) => string | number;
    }// KnobLabels

    export interface KnobProgressBar {
        // KnobProgressBar properties
        offset?: number | string;
        style?: any;
        size?: number | string;
        background?: any;
        ranges?: Array<any>;
    }// KnobProgressBar

    export interface KnobPointer {
        // KnobPointer properties
        offset?: number | string;
        type?: undefined;
        style?: any;
        size?: number | string;
        thickness?: undefined;
        visible?: undefined;
    }// KnobPointer

    export interface KnobSpinner {
        // KnobSpinner properties
        innerRadius?: any;
        outerRadius?: any;
        style?: any;
        marks?: KnobMarks;
    }// KnobSpinner

    export interface KnobStyle {
        // KnobStyle properties
        fill?: any;
        stroke?: undefined;
        strokeWidth?: undefined;
    }// KnobStyle

    export interface KnobOptions {
        // KnobOptions properties
        allowValueChangeOnClick?: undefined;
        allowValueChangeOnDrag?: undefined;
        allowValueChangeOnMouseWheel?: undefined;
        changing?: (oldValue: string | number, newValue: string | number) => boolean;
        dragEndAngle?: undefined;
        dragStartAngle?: undefined;
        disabled?: undefined;
        dial?: KnobDial;
        endAngle?: undefined;
        height?: number | string;
        labels?: KnobLabels;
        marks?: KnobMarks;
        min?: undefined;
        max?: undefined;
        progressBar?: KnobProgressBar;
        pointer?: KnobPointer;
        pointerGrabAction?: string;
        rotation?: string;
        startAngle?: undefined;
        spinner?: KnobSpinner;
        style?: KnobStyle;
        step?: undefined;
        snapToStep?: undefined;
        value?: undefined;
        width?: number | string;
    }// KnobOptions

    export interface jqxKnob extends widget, KnobOptions {

        // jqxKnob functions
        destroy(): void;
        val(value: number | string): undefined;
    }// jqxKnob

    export interface LinearGaugeRanges {
        // LinearGaugeRanges properties
        startValue?: undefined;
        endValue?: undefined;
        style?: any;
    }// LinearGaugeRanges

    export interface LinearGaugeBackground {
        // LinearGaugeBackground properties
        borderType?: string;
        borderRadius?: any;
        visible?: undefined;
        style?: any;
        showGradient?: undefined;
    }// LinearGaugeBackground

    export interface LinearGaugeLabels {
        // LinearGaugeLabels properties
        position?: string;
        style?: any;
        interval?: undefined;
        offset?: undefined;
        formatValue?: (value:any, position:string) => any;
        visible?: undefined;
    }// LinearGaugeLabels

    export interface LinearGaugePointer {
        // LinearGaugePointer properties
        pointerType?: string;
        style?: any;
        size?: number | string;
        offset?: undefined;
        visible?: undefined;
    }// LinearGaugePointer

    export interface LinearGaugeTicks {
        // LinearGaugeTicks properties
        size?: number | string;
        interval?: undefined;
        visible?: undefined;
        style?: any;
    }// LinearGaugeTicks

    export interface LinearGaugeOptions {
        // LinearGaugeOptions properties
        animationDuration?: undefined;
        background?: LinearGaugeBackground;
        colorScheme?: undefined;
        disabled?: undefined;
        easing?: string;
        height?: number | string;
        int64?: undefined;
        labels?: undefined;
        min?: undefined;
        max?: undefined;
        orientation?: string;
        pointer?: LinearGaugePointer;
        rangesOffset?: undefined;
        rangeSize?: number | string;
        ranges?: Array<LinearGaugeRanges>;
        showRanges?: undefined;
        scaleStyle?: any;
        scaleLength?: number | string;
        ticksOffset?: Array<number | string>;
        ticksPosition?: string;
        ticksMinor?: LinearGaugeTicks;
        ticksMajor?: LinearGaugeTicks;
        value?: undefined;
        width?: number | string;
    }// LinearGaugeOptions

    export interface jqxLinearGauge extends widget, LinearGaugeOptions {

        // jqxLinearGauge functions
        disable(): void;
        enable(): void;
        val(value: number | string): undefined;
    }// jqxLinearGauge

    export interface LinkButtonOptions {
        // LinkButtonOptions properties
        delay?: undefined;
        disabled?: undefined;
        height?: string | number;
        imgSrc?: undefined;
        imgWidth?: string | number;
        imgHeight?: string | number;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: undefined;
        textPosition?: string;
        textImageRelation?: string;
        theme?: undefined;
        template?: string;
        toggled?: undefined;
        width?: string | number;
        value?: undefined;
    }// LinkButtonOptions

    export interface jqxLinkButton extends widget, LinkButtonOptions {

        // jqxLinkButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: undefined): undefined;
    }// jqxLinkButton

    export interface ListBoxOptions {
        // ListBoxOptions properties
        autoHeight?: undefined;
        allowDrag?: undefined;
        allowDrop?: undefined;
        checkboxes?: undefined;
        disabled?: undefined;
        displayMember?: number | string;
        dropAction?: string;
        dragStart?: (item:any) => boolean;
        dragEnd?: (dragItem: any, dropItem: any) => boolean;
        enableHover?: undefined;
        enableSelection?: undefined;
        equalItemsWidth?: undefined;
        filterable?: undefined;
        filterHeight?: undefined;
        filterDelay?: number | string;
        filterPlaceHolder?: number | string;
        height?: string | number;
        hasThreeStates?: undefined;
        itemHeight?: undefined;
        incrementalSearch?: undefined;
        incrementalSearchDelay?: number | string;
        multiple?: undefined;
        multipleextended?: undefined;
        renderer?: (index: number, label: string | number, value: string | number) => string;
        rendered?: () => any;
        rtl?: undefined;
        selectedIndex?: number | string;
        selectedIndexes?: any;
        source?: Array<any>;
        scrollBarSize?: undefined;
        searchMode?: string;
        theme?: undefined;
        valueMember?: number | string;
        width?: string | number;
    }// ListBoxOptions

    export interface jqxListBox extends widget, ListBoxOptions {

        // jqxListBox functions
        addItem(Item: any): boolean;
        beginUpdate(): void;
        clear(): void;
        clearSelection(): void;
        checkIndex(Index: undefined): void;
        checkItem(Item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(Item: any): void;
        disableAt(Index: undefined): void;
        enableItem(Item: any): void;
        enableAt(Index: number | string): void;
        ensureVisible(item: any): void;
        endUpdate(): void;
        focus(): void;
        getItems(): Array<any>;
        getSelectedItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getItem(Index: undefined): any;
        getItemByValue(Item: any): any;
        getSelectedItem(): any;
        getSelectedIndex(): undefined;
        insertAt(Item: any, Index: number | string): void;
        invalidate(): void;
        indeterminateItem(Item: any): void;
        indeterminateIndex(Index: undefined): void;
        loadFromSelect(selector: undefined): void;
        removeItem(Item: any): void;
        removeAt(Index: number | string): void;
        render(): void;
        refresh(): void;
        selectItem(Item: any): void;
        selectIndex(Index: number | string): void;
        updateItem(Item: any, Value: number | string): void;
        updateAt(item: any, index: number | string): void;
        unselectIndex(index: number | string): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number | string): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: number | string): undefined;
    }// jqxListBox

    export interface ListMenuOptions {
        // ListMenuOptions properties
        alwaysShowNavigationArrows?: undefined;
        animationType?: string;
        animationDuration?: number | string;
        autoSeparators?: undefined;
        backLabel?: number | string;
        disabled?: undefined;
        enableScrolling?: undefined;
        filterCallback?: (text:string, seachValue:string | number) => boolean;
        height?: number | string;
        headerAnimationDuration?: number | string;
        placeHolder?: number | string;
        readOnly?: undefined;
        rtl?: undefined;
        roundedCorners?: undefined;
        showNavigationArrows?: undefined;
        showFilter?: undefined;
        showHeader?: undefined;
        showBackButton?: undefined;
        theme?: undefined;
        width?: string | number;
    }// ListMenuOptions

    export interface jqxListMenu extends widget, ListMenuOptions {

        // jqxListMenu functions
        back(): void;
        changePage(Item: any): void;
        destroy(): void;
    }// jqxListMenu

    export interface LoaderOptions {
        // LoaderOptions properties
        autoOpen?: undefined;
        height?: string | number;
        html?: undefined;
        isModal?: undefined;
        imagePosition?: string;
        rtl?: undefined;
        text?: number | string;
        textPosition?: string;
        theme?: undefined;
        width?: string | number;
    }// LoaderOptions

    export interface jqxLoader extends widget, LoaderOptions {

        // jqxLoader functions
        close(): void;
        open(): void;
    }// jqxLoader

    export interface MaskedInputOptions {
        // MaskedInputOptions properties
        disabled?: undefined;
        height?: string | number;
        mask?: undefined;
        promptChar?: number | string;
        readOnly?: undefined;
        rtl?: undefined;
        theme?: undefined;
        textAlign?: string;
        value?: number | string;
        width?: string | number;
    }// MaskedInputOptions

    export interface jqxMaskedInput extends widget, MaskedInputOptions {

        // jqxMaskedInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        val(value: number | string): undefined;
    }// jqxMaskedInput

    export interface MenuOptions {
        // MenuOptions properties
        animationShowDuration?: undefined;
        animationHideDuration?: undefined;
        animationHideDelay?: undefined;
        animationShowDelay?: undefined;
        autoCloseInterval?: undefined;
        autoSizeMainItems?: undefined;
        autoCloseOnClick?: undefined;
        autoOpenPopup?: undefined;
        autoOpen?: undefined;
        autoCloseOnMouseLeave?: undefined;
        clickToOpen?: undefined;
        disabled?: undefined;
        enableHover?: undefined;
        easing?: undefined;
        height?: string | number;
        keyboardNavigation?: undefined;
        minimizeWidth?: number | string;
        mode?: string;
        popupZIndex?: number | string;
        rtl?: undefined;
        showTopLevelArrows?: undefined;
        source?: any;
        theme?: undefined;
        width?: string | number;
    }// MenuOptions

    export interface jqxMenu extends widget, MenuOptions {

        // jqxMenu functions
        closeItem(itemID: number | string): void;
        close(): void;
        disable(itemID: number | string, value: undefined): void;
        destroy(): void;
        focus(): void;
        minimize(): void;
        open(left: undefined, top: undefined): void;
        openItem(itemID: number | string): void;
        restore(): void;
        setItemOpenDirection(item: number | string, horizontaldirection: undefined, verticaldirection: undefined): void;
    }// jqxMenu

    export interface NavBarOptions {
        // NavBarOptions properties
        columns?: Array<string>;
        disabled?: undefined;
        height?: string | number;
        minimized?: undefined;
        minimizeButtonPosition?: string;
        minimizedHeight?: number | string;
        minimizedTitle?: number | string;
        orientation?: string;
        popupAnimationDelay?: undefined;
        rtl?: undefined;
        selection?: undefined;
        selectedItem?: number | string;
        theme?: undefined;
        width?: string | number;
    }// NavBarOptions

    export interface jqxNavBar extends widget, NavBarOptions {

        // jqxNavBar functions
        close(): void;
        destroy(): void;
        getSelectedIndex(): undefined;
        open(): void;
        selectAt(index: number | string): void;
    }// jqxNavBar

    export interface NavigationBarOptions {
        // NavigationBarOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: undefined;
        disabled?: undefined;
        expandAnimationDuration?: undefined;
        expandMode?: string;
        expandedIndexes?: Array<number>;
        height?: string | number;
        initContent?: (index:number) => void;
        rtl?: undefined;
        showArrow?: undefined;
        theme?: undefined;
        toggleMode?: string;
        width?: string | number;
    }// NavigationBarOptions

    export interface jqxNavigationBar extends widget, NavigationBarOptions {

        // jqxNavigationBar functions
        add(header: number | string, content: number | string): void;
        collapseAt(index: number | string): void;
        disableAt(index: number | string): void;
        disable(): void;
        destroy(): void;
        expandAt(index: number | string): void;
        enableAt(index: number | string): void;
        enable(): void;
        focus(): void;
        getHeaderContentAt(index: number | string): undefined;
        getContentAt(index: number | string): undefined;
        hideArrowAt(index: number | string): void;
        invalidate(): void;
        insert(Index: undefined, header: number | string, content: number | string): void;
        refresh(): void;
        render(): void;
        remove(index: number | string): void;
        setContentAt(index: undefined, item: number | string): void;
        setHeaderContentAt(index: undefined, item: number | string): void;
        showArrowAt(index: number | string): void;
        update(index: undefined, header: number | string, content: number | string): void;
        val(value: number | string): string | number;
    }// jqxNavigationBar

    export interface NotificationIcon {
        // NotificationIcon properties
        width?: number | string;
        height?: number | string;
        url?: undefined;
        padding?: number | string;
    }// NotificationIcon

    export interface NotificationOptions {
        // NotificationOptions properties
        appendContainer?: undefined;
        autoOpen?: undefined;
        animationOpenDelay?: undefined;
        animationCloseDelay?: undefined;
        autoClose?: undefined;
        autoCloseDelay?: number | string;
        blink?: undefined;
        browserBoundsOffset?: undefined;
        closeOnClick?: undefined;
        disabled?: undefined;
        height?: number | string;
        hoverOpacity?: undefined;
        icon?: NotificationIcon;
        notificationOffset?: undefined;
        opacity?: undefined;
        position?: string;
        rtl?: undefined;
        showCloseButton?: undefined;
        template?: string;
        theme?: undefined;
        width?: string | number;
    }// NotificationOptions

    export interface jqxNotification extends widget, NotificationOptions {

        // jqxNotification functions
        closeAll(): void;
        closeLast(): void;
        destroy(): void;
        open(): void;
        refresh(): void;
        render(): void;
    }// jqxNotification

    export interface NumberInputOptions {
        // NumberInputOptions properties
        allowNull?: undefined;
        decimal?: number | string;
        disabled?: undefined;
        decimalDigits?: number | string;
        decimalSeparator?: number | string;
        digits?: number | string;
        groupSeparator?: string;
        groupSize?: number | string;
        height?: string | number;
        inputMode?: string;
        min?: number | string;
        max?: number | string;
        negativeSymbol?: undefined;
        placeHolder?: number | string;
        promptChar?: string;
        rtl?: undefined;
        readOnly?: undefined;
        spinMode?: string;
        spinButtons?: undefined;
        spinButtonsWidth?: undefined;
        spinButtonsStep?: number | string;
        symbol?: undefined;
        symbolPosition?: string;
        textAlign?: string;
        template?: string;
        theme?: undefined;
        value?: number | string;
        width?: string | number;
    }// NumberInputOptions

    export interface jqxNumberInput extends widget, NumberInputOptions {

        // jqxNumberInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        getDecimal(): undefined;
        setDecimal(index: number | string): void;
        val(value: number | string): undefined;
    }// jqxNumberInput

    export interface PanelOptions {
        // PanelOptions properties
        autoUpdate?: undefined;
        disabled?: undefined;
        height?: string | number;
        rtl?: undefined;
        sizeMode?: string;
        scrollBarSize?: number | string;
        theme?: undefined;
        width?: string | number;
    }// PanelOptions

    export interface jqxPanel extends widget, PanelOptions {

        // jqxPanel functions
        append(HTMLElement: any): void;
        clearcontent(): void;
        destroy(): void;
        focus(): void;
        getScrollHeight(): undefined;
        getVScrollPosition(): undefined;
        getScrollWidth(): undefined;
        getHScrollPosition(): undefined;
        prepend(HTMLElement: any): void;
        remove(HTMLElement: any): void;
        scrollTo(top: number | string, left: number | string): void;
    }// jqxPanel

    export interface PasswordInputLocalization {
        // PasswordInputLocalization properties
        passwordStrengthstring?: undefined;
        tooShort?: undefined;
        weak?: undefined;
        fair?: undefined;
        good?: undefined;
        strong?: undefined;
    }// PasswordInputLocalization

    export interface PasswordInputStrengthColors {
        // PasswordInputStrengthColors properties
        tooShort?: undefined;
        weak?: undefined;
        fair?: undefined;
        good?: undefined;
        strong?: undefined;
    }// PasswordInputStrengthColors

    export interface PasswordInputOptions {
        // PasswordInputOptions properties
        disabled?: undefined;
        height?: string | number;
        localization?: PasswordInputLocalization;
        maxLength?: number | string;
        placeHolder?: number | string;
        passwordStrength?: (password:string | number, characters:any, defaultStrength:string) => string;
        rtl?: undefined;
        strengthColors?: PasswordInputStrengthColors;
        showStrength?: undefined;
        showStrengthPosition?: string;
        strengthTypeRenderer?: (password:string | number, characters:any, defaultStrength:string) => string;
        showPasswordIcon?: undefined;
        theme?: undefined;
        width?: string | number;
    }// PasswordInputOptions

    export interface jqxPasswordInput extends widget, PasswordInputOptions {

        // jqxPasswordInput functions
        render(): void;
        refresh(): void;
        val(value: undefined): undefined;
    }// jqxPasswordInput

    export interface PopoverOptions {
        // PopoverOptions properties
        arrowOffsetValue?: undefined;
        animationOpenDelay?: number | string;
        animationCloseDelay?: number | string;
        autoClose?: undefined;
        animationType?: string;
        height?: number | string;
        initContent?: () => void;
        isModal?: undefined;
        offset?: any;
        position?: string;
        rtl?: undefined;
        selector?: undefined;
        showArrow?: undefined;
        showCloseButton?: undefined;
        width?: number | string;
        title?: string | number;
        theme?: undefined;
    }// PopoverOptions

    export interface jqxPopover extends widget, PopoverOptions {

        // jqxPopover functions
        close(): void;
        destroy(): void;
        open(): void;
    }// jqxPopover

    export interface ProgressBarColorRanges {
        // ProgressBarColorRanges properties
        stop: number | string;
        color: undefined;
    }// ProgressBarColorRanges

    export interface ProgressBarOptions {
        // ProgressBarOptions properties
        animationDuration?: undefined;
        colorRanges?: Array<ProgressBarColorRanges>;
        disabled?: undefined;
        height?: string  | number;
        layout?: string;
        max?: string  | number;
        min?: number | string;
        orientation?: string;
        rtl?: undefined;
        renderText?: any;
        showText?: undefined;
        template?: string;
        theme?: undefined;
        value?: string | number;
        width?: string | number;
    }// ProgressBarOptions

    export interface jqxProgressBar extends widget, ProgressBarOptions {

        // jqxProgressBar functions
        actualValue(value: number | string): void;
        destroy(): void;
        val(value: number | string): undefined;
    }// jqxProgressBar

    export interface RadioButtonOptions {
        // RadioButtonOptions properties
        animationShowDelay?: undefined;
        animationHideDelay?: undefined;
        boxSize?: number | string;
        checked?: undefined;
        disabled?: undefined;
        enableContainerClick?: undefined;
        groupName?: undefined;
        hasThreeStates?: undefined;
        height?: string | number;
        rtl?: undefined;
        theme?: undefined;
        width?: string | number;
    }// RadioButtonOptions

    export interface jqxRadioButton extends widget, RadioButtonOptions {

        // jqxRadioButton functions
        check(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        focus(): void;
        render(): void;
        uncheck(): void;
        val(value: undefined): undefined;
    }// jqxRadioButton

    export interface RangeSelectorRange {
        // RangeSelectorRange properties
        from?: number | string;
        to?: number | string;
        min?: number | string;
        max?: number | string;
    }// RangeSelectorRange

    export interface RangeSelectorGetRange {
        // RangeSelectorGetRange properties
        from?: number | string;
        to?: number | string;
    }// RangeSelectorGetRange

    export interface RangeSelectorOptions {
        // RangeSelectorOptions properties
        disabled?: undefined;
        showGroupLabels?: undefined;
        labelsOnTicks?: undefined;
        markersFormatFunction?: any;
        height?: string | number;
        labelsFormat?: string;
        labelsFormatFunction?: any;
        labelPrecision?: undefined;
        moveOnClick?: undefined;
        markerRenderer?: any;
        markerPrecision?: undefined;
        majorLabelRenderer?: any;
        markersFormat?: string;
        majorTicksInterval?: string | number;
        minorTicksInterval?: undefined;
        max?: string | number;
        min?: string | number;
        padding?: number | string;
        range?: RangeSelectorRange;
        resizable?: undefined;
        rtl?: undefined;
        showMinorTicks?: undefined;
        snapToTicks?: undefined;
        showMajorLabels?: undefined;
        showMarkers?: undefined;
        theme?: undefined;
        width?: string | number;
    }// RangeSelectorOptions

    export interface jqxRangeSelector extends widget, RangeSelectorOptions {

        // jqxRangeSelector functions
        destroy(): void;
        getRange(): RangeSelectorGetRange;
        render(): void;
        refresh(): void;
        setRange(from: any, to: any): void;
    }// jqxRangeSelector

    export interface RatingOptions {
        // RatingOptions properties
        count?: undefined;
        disabled?: undefined;
        height?: string | number;
        itemHeight?: undefined;
        itemWidth?: undefined;
        precision?: undefined;
        singleVote?: undefined;
        value?: undefined;
        width?: string | number;
    }// RatingOptions

    export interface jqxRating extends widget, RatingOptions {

        // jqxRating functions
        disable(): void;
        enable(): void;
        getValue(): undefined;
        setValue(value: undefined): void;
        val(value: undefined): undefined;
    }// jqxRating

    export interface RepeatButtonOptions {
        // RepeatButtonOptions properties
        delay?: undefined;
        disabled?: undefined;
        height?: number | string;
        imgSrc?: undefined;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: undefined;
        textPosition?: string;
        textImageRelation?: string;
        theme?: undefined;
        template?: string;
        toggled?: undefined;
        width?: string | number;
        value?: undefined;
    }// RepeatButtonOptions

    export interface jqxRepeatButton extends widget, RepeatButtonOptions {

        // jqxRepeatButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: undefined): undefined;
    }// jqxRepeatButton

    export interface ResponsivePanelOptions {
        // ResponsivePanelOptions properties
        animationDirection?: string;
        animationHideDelay?: number | string;
        animationShowDelay?: number | string;
        animationType?: string;
        autoClose?: undefined;
        collapseBreakpoint?: undefined;
        collapseWidth?: undefined;
        height?: string | number;
        initContent?: () => void;
        theme?: undefined;
        toggleButton?: string | any;
        toggleButtonSize?: number | string;
        width?: string | number;
    }// ResponsivePanelOptions

    export interface jqxResponsivePanel extends widget, ResponsivePanelOptions {

        // jqxResponsivePanel functions
        close(): void;
        destroy(): void;
        isCollapsed(): undefined;
        isOpened(): undefined;
        open(): void;
        refresh(): void;
        render(): void;
    }// jqxResponsivePanel

    export interface RibbonItem {

    }// RibbonItem

    export interface RibbonOptions {
        // RibbonOptions properties
        animationType?: string;
        animationDelay?: number | string;
        disabled?: undefined;
        height?: number | string;
        initContent?: (index: any) => void;
        mode?: string;
        popupCloseMode?: string;
        position?: string;
        rtl?: undefined;
        selectedIndex?: undefined;
        selectionMode?: string;
        scrollPosition?: string;
        scrollStep?: undefined;
        scrollDelay?: undefined;
        theme?: undefined;
        width?: string | number;
    }// RibbonOptions

    export interface jqxRibbon extends widget, RibbonOptions {

        // jqxRibbon functions
        addAt(index: undefined, item: RibbonItem): void;
        clearSelection(): void;
        disableAt(index: undefined): void;
        destroy(): void;
        enableAt(index: undefined): void;
        hideAt(index: undefined): void;
        removeAt(index: undefined): void;
        render(): void;
        refresh(): void;
        selectAt(index: undefined): void;
        showAt(index: undefined): void;
        setPopupLayout(index: undefined, layout: any, width: number | string, height: number | string): void;
        updateAt(index: undefined, item: RibbonItem): void;
        val(value: undefined): undefined;
    }// jqxRibbon

    export interface SchedulerAppointmentDataFields {
        // SchedulerAppointmentDataFields properties
        allDay?: undefined;
        background?: undefined;
        borderColor?: undefined;
        color?: undefined;
        description?: undefined;
        draggable?: undefined;
        from?: undefined;
        hidden?: undefined;
        id?: number | string;
        location?: undefined;
        recurrencePattern?: SchedulerRecurrencePattern;
        recurrenceException?: undefined;
        resizable?: undefined;
        resourceId?: number | string;
        readOnly?: undefined;
        subject?: undefined;
        style?: undefined;
        status?: undefined;
        to?: undefined;
        tooltip?: undefined;
        timeZone?: undefined;
    }// SchedulerAppointmentDataFields

    export interface SchedulerRecurrencePattern {
        // SchedulerRecurrencePattern properties
        FREQ?: string;
        COUNT?: undefined;
        UNTIL?: undefined;
        BYDAY?: undefined;
        BYMONTHDAY?: undefined;
        BYMONTH?: undefined;
        INTERVAL?: undefined;
    }// SchedulerRecurrencePattern

    export interface SchedulerChangedAppointments {
        // SchedulerChangedAppointments properties
        type?: string;
        appointment?: SchedulerAppointmentDataFields;
    }// SchedulerChangedAppointments

    export interface SchedulerExportSettings {
        // SchedulerExportSettings properties
        serverURL?: undefined;
        characterSet?: undefined;
        fileName?: undefined;
        dateTimeFormatstring?: undefined;
        resourcesInMultipleICSFiles?: undefined;
    }// SchedulerExportSettings

    export interface SchedulerResources {
        // SchedulerResources properties
        source?: undefined;
        colorScheme?: undefined;
        orientation?: string;
        dataField?: undefined;
        resourceColumnWidth?: undefined;
        resourceRowHeight?: undefined;
    }// SchedulerResources

    export interface SchedulerStatuses {
        // SchedulerStatuses properties
        free?: undefined;
        tentative?: undefined;
        busy?: undefined;
        doNotDisturb?: undefined;
        outOfOffice?: undefined;
    }// SchedulerStatuses

    export interface SchedulerGetSelection {
        // SchedulerGetSelection properties
        from?: any;
        to?: any;
        ResourceId?: any;
    }// SchedulerGetSelection

    export interface SchedulerOptions {
        // SchedulerOptions properties
        appointmentOpacity?: undefined;
        appointmentsMinHeight?: undefined;
        appointmentDataFields?: SchedulerAppointmentDataFields;
        appointmentTooltips?: undefined;
        columnsHeight?: undefined;
        contextMenu?: undefined;
        contextMenuOpen?: (menu: any, appointment: any, event: any) => void;
        contextMenuClose?: (menu: any, appointment: any, event: any) => void;
        contextMenuItemClick?: (menu: any, appointment: any, event: any) => boolean;
        contextMenuCreate?: (menu: any, appointment: any, event: any) => void;
        changedAppointments?: Array<SchedulerChangedAppointments>;
        disabled?: undefined;
        date?: any;
        dayNameFormat?: undefined;
        enableHover?: undefined;
        editDialog?: undefined;
        editDialogDateTimeFormatstring?: undefined;
        editDialogDateFormatstring?: undefined;
        editDialogOpen?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        editDialogCreate?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        editDialogKeyDown?: (dialog?: any, fields?: any, editAppointment?: any, event?: any) => boolean;
        editDialogClose?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        exportSettings?: SchedulerExportSettings;
        height?: number | string;
        legendPosition?: undefined;
        legendHeight?: undefined;
        localization?: any;
        min?: any;
        max?: any;
        ready?: () => void;
        renderAppointment?: (data: any) => any;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: undefined;
        resources?: SchedulerResources;
        rowsHeight?: undefined;
        showToolbar?: undefined;
        showLegend?: undefined;
        scrollBarSize?: undefined;
        source?: any;
        statuses?: SchedulerStatuses;
        touchRowsHeight?: undefined;
        theme?: undefined;
        touchAppointmentsMinHeight?: undefined;
        touchScrollBarSize?: undefined;
        timeZone?: undefined;
        touchDayNameFormat?: string;
        toolBarRangeFormat?: undefined;
        toolBarRangeFormatAbbr?: undefined;
        toolbarHeight?: undefined;
        views?: Array<any>;
        view?: string;
        width?: number | string;
    }// SchedulerOptions

    export interface jqxScheduler extends widget, SchedulerOptions {

        // jqxScheduler functions
        addAppointment(item: SchedulerAppointmentDataFields): void;
        beginAppointmentsUpdate(): void;
        clearAppointmentsSelection(): void;
        clearSelection(): void;
        closeMenu(): void;
        closeDialog(): void;
        deleteAppointment(appointmenId: undefined): void;
        destroy(): void;
        endAppointmentsUpdate(): void;
        ensureAppointmentVisible(id: undefined): void;
        ensureVisible(item: any, resourceId: undefined): void;
        exportData(format: undefined): any;
        focus(): void;
        getAppointmentProperty(appointmentId: undefined, name: undefined): any;
        getSelection(): SchedulerGetSelection;
        getAppointments(): Array<SchedulerAppointmentDataFields>;
        getDataAppointments(): Array<any>;
        hideAppointmentsByResource(resourcesId: undefined): void;
        openMenu(left: undefined, top: undefined): void;
        openDialog(left: undefined, top: undefined): void;
        selectAppointment(appointmentId: undefined): void;
        setAppointmentProperty(appointmentId: undefined, name: undefined, value: any): void;
        selectCell(date: any, allday: undefined, resourceId: undefined): void;
        showAppointmentsByResource(resourceId: undefined): void;
        scrollWidth(): undefined;
        scrollHeight(): undefined;
        scrollLeft(left: undefined): void;
        scrollTop(top: undefined): void;
    }// jqxScheduler

    export interface ScrollBarOptions {
        // ScrollBarOptions properties
        disabled?: undefined;
        height?: string | number;
        largestep?: undefined;
        min?: undefined;
        max?: undefined;
        rtl?: undefined;
        step?: undefined;
        showButtons?: undefined;
        thumbMinSize?: undefined;
        theme?: undefined;
        vertical?: undefined;
        value?: undefined;
        width?: string | number;
    }// ScrollBarOptions

    export interface jqxScrollBar extends widget, ScrollBarOptions {

        // jqxScrollBar functions
        destroy(): void;
        isScrolling(): undefined;
        setPosition(index: undefined): void;
    }// jqxScrollBar

    export interface ScrollViewOptions {
        // ScrollViewOptions properties
        animationDuration?: undefined;
        bounceEnabled?: undefined;
        buttonsOffset?: Array<number>;
        currentPage?: undefined;
        disabled?: undefined;
        height?: string | number;
        moveThreshold?: undefined;
        showButtons?: undefined;
        slideShow?: undefined;
        slideDuration?: undefined;
        theme?: undefined;
        width?: string | number;
    }// ScrollViewOptions

    export interface jqxScrollView extends widget, ScrollViewOptions {

        // jqxScrollView functions
        back(): void;
        changePage(index: undefined): void;
        forward(): void;
        refresh(): void;
    }// jqxScrollView

    export interface SliderOptions {
        // SliderOptions properties
        buttonsPosition?: string;
        disabled?: undefined;
        height?: string | number;
        layout?: string;
        mode?: string;
        minorTicksFrequency?: undefined;
        minorTickSize?: undefined;
        max?: undefined;
        min?: undefined;
        orientation?: undefined;
        rangeSlider?: undefined;
        rtl?: undefined;
        step?: undefined;
        showTicks?: undefined;
        showMinorTicks?: undefined;
        showTickLabels?: undefined;
        showButtons?: undefined;
        showRange?: undefined;
        template?: string;
        theme?: undefined;
        ticksPosition?: string;
        ticksFrequency?: undefined;
        tickSize?: undefined;
        tickLabelFormatFunction?: (value: any) => string;
        tooltip?: undefined;
        tooltipHideDelay?: undefined;
        tooltipPosition?: string;
        tooltipFormatFunction?: (value: any) => any;
        value?: any;
        values?: Array<number>;
        width?: number | string;
    }// SliderOptions

    export interface jqxSlider extends widget, SliderOptions {

        // jqxSlider functions
        destroy(): void;
        decrementValue(): void;
        disable(): void;
        enable(): void;
        focus(): void;
        getValue(): undefined;
        incrementValue(): void;
        setValue(index: number | number[]): void;
        val(value: undefined): undefined;
    }// jqxSlider

    export interface SortableCursorAt {
        // SortableCursorAt properties
        left?: undefined;
        top?: undefined;
        right?: undefined;
        bottom?: undefined;
    }// SortableCursorAt

    export interface SortableOptions {
        // SortableOptions properties
        appendTo?: undefined;
        axis?: number | string;
        cancelProperty?: undefined;
        connectWith?: string | boolean;
        containment?: string | boolean;
        cursor?: undefined;
        cursorAt?: SortableCursorAt;
        delay?: undefined;
        disabled?: undefined;
        distance?: undefined;
        dropOnEmpty?: undefined;
        forceHelperSize?: undefined;
        forcePlaceholderSize?: undefined;
        grid?: Array<number>;
        handle?: string | boolean;
        helper?: string;
        items?: undefined;
        opacity?: number | boolean;
        placeholderShow?: string | boolean;
        revert?: number | boolean;
        scroll?: undefined;
        scrollSensitivity?: undefined;
        scrollSpeed?: undefined;
        tolerance?: string;
        zIndex?: undefined;
    }// SortableOptions

    export interface jqxSortable extends widget, SortableOptions {

        // jqxSortable functions
        cancelMethod(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        refresh(): void;
        refreshPositions(): void;
        serialize(): void;
        toArray(): Array<any>;
    }// jqxSortable

    export interface SplitterPanel {
        // SplitterPanel properties
        size?: number | string;
        min?: number | string;
        collapsible?: undefined;
        collapsed?: undefined;
    }// SplitterPanel

    export interface SplitterOptions {
        // SplitterOptions properties
        disabled?: undefined;
        height?: string | number;
        orientation?: string;
        panels?: Array<SplitterPanel>;
        resizable?: undefined;
        splitBarSize?: undefined;
        showSplitBar?: undefined;
        theme?: undefined;
        width?: string | number;
    }// SplitterOptions

    export interface jqxSplitter extends widget, SplitterOptions {

        // jqxSplitter functions
        collapse(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        expand(): void;
        render(): void;
        refresh(): void;
    }// jqxSplitter

    export interface SwitchButtonOptions {
        // SwitchButtonOptions properties
        checked?: undefined;
        disabled?: undefined;
        height?: string | number;
        orientation?: string;
        onLabel?: undefined;
        offLabel?: undefined;
        thumbSize?: undefined;
        rtl?: undefined;
        width?: string | number;
    }// SwitchButtonOptions

    export interface jqxSwitchButton extends widget, SwitchButtonOptions {

        // jqxSwitchButton functions
        check(): void;
        disable(): void;
        enable(): void;
        toggle(): void;
        uncheck(): void;
        val(value: undefined): undefined;
    }// jqxSwitchButton

    export interface TabsOptions {
        // TabsOptions properties
        animationType?: string;
        autoHeight?: undefined;
        closeButtonSize?: undefined;
        collapsible?: undefined;
        contentTransitionDuration?: undefined;
        disabled?: undefined;
        enabledHover?: undefined;
        enableScrollAnimation?: undefined;
        enableDropAnimation?: undefined;
        height?: string | number;
        initTabContent?: (tab?: number) => void;
        keyboardNavigation?: undefined;
        next?: any;
        previous?: any;
        position?: string;
        reorder?: undefined;
        rtl?: undefined;
        scrollAnimationDuration?: undefined;
        selectedItem?: undefined;
        selectionTracker?: undefined;
        scrollable?: undefined;
        scrollPosition?: string;
        scrollStep?: undefined;
        showCloseButtons?: undefined;
        toggleMode?: string;
        theme?: undefined;
        width?: string | number;
    }// TabsOptions

    export interface jqxTabs extends widget, TabsOptions {

        // jqxTabs functions
        addAt(index: undefined, title: undefined, content: undefined): void;
        addFirst(htmlElement: any): void;
        addLast(htmlElement1: any, htmlElemen2t: any): void;
        collapse(): void;
        disable(): void;
        disableAt(index: undefined): void;
        destroy(): void;
        ensureVisible(index: undefined): void;
        enableAt(index: undefined): void;
        expand(): void;
        enable(): void;
        focus(): void;
        getTitleAt(index: undefined): undefined;
        getContentAt(index: undefined): any;
        getDisabledTabsCount(): any;
        hideCloseButtonAt(index: undefined): void;
        hideAllCloseButtons(): void;
        length(): undefined;
        removeAt(index: undefined): void;
        removeFirst(): void;
        removeLast(): void;
        select(index: undefined): void;
        setContentAt(index: undefined, htmlElement: undefined): void;
        setTitleAt(index: undefined, htmlElement: undefined): void;
        showCloseButtonAt(index: undefined): void;
        showAllCloseButtons(): void;
        val(value: undefined): undefined;
    }// jqxTabs

    export interface TagCloudSource {
        // TagCloudSource properties
        url?: undefined;
        data?: any;
        localdata?: undefined;
        datatype?: string;
        type?: undefined;
        id?: undefined;
        root?: undefined;
        record?: undefined;
    }// TagCloudSource

    export interface TagCloudOptions {
        // TagCloudOptions properties
        alterTextCase?: string;
        disabled?: undefined;
        displayLimit?: undefined;
        displayMember?: undefined;
        displayValue?: undefined;
        fontSizeUnit?: string;
        height?: number | string;
        maxColor?: undefined;
        maxFontSize?: undefined;
        maxValueToDisplay?: undefined;
        minColor?: undefined;
        minFontSize?: undefined;
        minValueToDisplay?: undefined;
        rtl?: undefined;
        sortBy?: string;
        sortOrder?: string;
        source?: TagCloudSource;
        tagRenderer?: (itemData: any, minValue: number, valueRange: number) => any;
        takeTopWeightedItems?: undefined;
        textColor?: undefined;
        urlBase?: undefined;
        urlMember?: undefined;
        valueMember?: undefined;
        width?: string | number;
    }// TagCloudOptions

    export interface jqxTagCloud extends widget, TagCloudOptions {

        // jqxTagCloud functions
        destroy(): void;
        findTagIndex(tag: undefined): undefined;
        getHiddenTagsList(): Array<any>;
        getRenderedTags(): Array<any>;
        getTagsList(): Array<any>;
        hideItem(index: undefined): void;
        insertAt(index: undefined, item: any): void;
        removeAt(index: undefined): void;
        updateAt(index: undefined, item: any): void;
        showItem(index: undefined): void;
    }// jqxTagCloud

    export interface ToggleButtonOptions {
        // ToggleButtonOptions properties
        disabled?: undefined;
        height?: number | string;
        imgSrc?: undefined;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: undefined;
        textPosition?: string;
        textImageRelation?: string;
        theme?: undefined;
        template?: string;
        toggled?: undefined;
        width?: string | number;
        value?: undefined;
    }// ToggleButtonOptions

    export interface jqxToggleButton extends widget, ToggleButtonOptions {

        // jqxToggleButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: undefined): undefined;
    }// jqxToggleButton

    export interface TextAreaOptions {
        // TextAreaOptions properties
        disabled?: undefined;
        displayMember?: undefined;
        dropDownWidth?: number | string;
        height?: string | number;
        items?: undefined;
        maxLength?: undefined;
        minLength?: undefined;
        opened?: undefined;
        placeHolder?: undefined;
        popupZIndex?: undefined;
        query?: undefined;
        renderer?: (itemValue: any, inputValue: any) => any;
        roundedCorners?: undefined;
        rtl?: undefined;
        scrollBarSize?: undefined;
        searchMode?: string;
        source?: Array<any>;
        theme?: undefined;
        valueMember?: undefined;
        width?: string | number;
    }// TextAreaOptions

    export interface jqxTextArea extends widget, TextAreaOptions {

        // jqxTextArea functions
        destroy(): void;
        focus(): void;
        refresh(): void;
        render(): void;
        selectAll(): void;
        val(value: undefined): undefined;
    }// jqxTextArea

    export interface ToolBarToolItem {
        // ToolBarToolItem properties
        type?: undefined;
        tool?: any;
        separatorAfterWidget?: undefined;
        minimizable?: undefined;
        minimized?: undefined;
        menuTool?: any;
        menuSeparator?: any;
    }// ToolBarToolItem

    export interface ToolBarOptions {
        // ToolBarOptions properties
        disabled?: undefined;
        height?: string | number;
        initTools?: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void;
        minimizeWidth?: undefined;
        minWidth?: number | string;
        maxWidth?: number | string;
        rtl?: undefined;
        tools?: string;
        theme?: undefined;
        width?: string | number;
    }// ToolBarOptions

    export interface jqxToolBar extends widget, ToolBarOptions {

        // jqxToolBar functions
        addTool(type: undefined, position: undefined, separator: undefined, menuToolIninitialization: (type?: string, tool?: any, menuToolIninitialization?: boolean) => void): void;
        disableTool(index: undefined, disable: undefined): void;
        destroy(): void;
        destroyTool(index: undefined): void;
        getTools(): Array<ToolBarToolItem>;
        render(): void;
        refresh(): void;
    }// jqxToolBar

    export interface TooltipOptions {
        // TooltipOptions properties
        absolutePositionX?: undefined;
        absolutePositionY?: undefined;
        autoHide?: undefined;
        autoHideDelay?: undefined;
        animationShowDelay?: number | string;
        animationHideDelay?: number | string;
        content?: undefined;
        closeOnClick?: undefined;
        disabled?: undefined;
        enableBrowserBoundsDetection?: undefined;
        height?: number | string;
        left?: undefined;
        name?: undefined;
        opacity?: undefined;
        position?: string;
        rtl?: undefined;
        showDelay?: undefined;
        showArrow?: undefined;
        top?: number | string;
        trigger?: string;
        theme?: undefined;
        width?: number | string;
    }// TooltipOptions

    export interface jqxTooltip extends widget, TooltipOptions {

        // jqxTooltip functions
        close(index: undefined): void;
        destroy(): void;
        open(left: undefined, top: undefined): void;
        refresh(): void;
    }// jqxTooltip

    export interface TreeItem {
        // TreeItem properties
        label?: undefined;
        value?: undefined;
        disabled?: undefined;
        checked?: undefined;
        element?: any;
        parentElement?: any;
        isExpanded?: undefined;
        selected?: undefined;
    }// TreeItem

    export interface TreeOffset {
        // TreeOffset properties
        top?: undefined;
        left?: undefined;
    }// TreeOffset

    export interface TreeOptions {
        // TreeOptions properties
        animationShowDuration?: undefined;
        animationHideDuration?: undefined;
        allowDrag?: undefined;
        allowDrop?: undefined;
        checkboxes?: undefined;
        dragStart?: (item: any) => boolean;
        dragEnd?: (dragItem?: any, dropItem?: any, args?: any, dropPosition?: any, tree?: any) => boolean;
        disabled?: undefined;
        easing?: undefined;
        enableHover?: undefined;
        height?: number | string;
        hasThreeStates?: undefined;
        incrementalSearch?: undefined;
        keyboardNavigation?: undefined;
        rtl?: undefined;
        selectedItem?: any;
        source?: any;
        toggleIndicatorSize?: undefined;
        toggleMode?: string;
        theme?: undefined;
        width?: string | number;
    }// TreeOptions

    export interface jqxTree extends widget, TreeOptions {

        // jqxTree functions
        addBefore(item: any, id: undefined): void;
        addAfter(item: any, id: undefined): void;
        addTo(item: any, id: undefined): void;
        clear(): void;
        checkAll(): void;
        checkItem(item: any, checked: undefined): void;
        collapseAll(): void;
        collapseItem(item: any): void;
        destroy(): void;
        disableItem(item: any): void;
        ensureVisible(item: undefined): void;
        enableItem(item: any): void;
        enableAll(): void;
        expandAll(): void;
        expandItem(item: any): void;
        focus(): void;
        getCheckedItems(): Array<TreeItem>;
        getUncheckedItems(): Array<TreeItem>;
        getItems(): Array<TreeItem>;
        getItem(element: any): TreeItem;
        getSelectedItem(): TreeItem;
        getPrevItem(): TreeItem;
        getNextItem(): TreeItem;
        hitTest(left: undefined, top: undefined): any;
        removeItem(item: any): void;
        render(): void;
        refresh(): void;
        selectItem(item: any): void;
        uncheckAll(): void;
        uncheckItem(item: any): void;
        updateItem(item: any, newItem: any): void;
        val(value: undefined): undefined;
    }// jqxTree

    export interface TreeGridEditSettings {
        // TreeGridEditSettings properties
        saveOnPageChange?: undefined;
        saveOnBlur?: undefined;
        saveOnSelectionChange?: undefined;
        cancelOnEsc?: undefined;
        editSingleCell?: undefined;
        editOnDoubleClick?: undefined;
        editOnF2?: undefined;
    }// TreeGridEditSettings

    export interface TreeGridExportSettings {
        // TreeGridExportSettings properties
        columnsHeader?: undefined;
        hiddenColumns?: undefined;
        serverURL?: string | any;
        characterSet?: undefined;
        collapsedRecords?: undefined;
        recordsInView?: undefined;
        fileName?: undefined;
    }// TreeGridExportSettings

    export interface TreeGridGetRow {
        // TreeGridGetRow properties
        type?: undefined;
        checked?: undefined;
        expanded?: undefined;
        icon?: undefined;
        leaf?: undefined;
        level?: undefined;
        parent?: any;
        records?: Array<any>;
        selected?: undefined;
        uid?: number | string;
    }// TreeGridGetRow

    export interface TreeGridScrollOffset {
        // TreeGridScrollOffset properties
        top?: undefined;
        left?: undefined;
    }// TreeGridScrollOffset

    export interface TreeGridOptions {
        // TreeGridOptions properties
        altRows?: undefined;
        autoRowHeight?: undefined;
        aggregatesHeight?: undefined;
        autoShowLoadElement?: undefined;
        checkboxes?: undefined;
        columnsHeight?: undefined;
        columns?: Array<any>;
        columnGroups?: Array<any>;
        columnsResize?: undefined;
        columnsReorder?: undefined;
        disabled?: undefined;
        editable?: undefined;
        editSettings?: TreeGridEditSettings;
        exportSettings?: TreeGridExportSettings;
        enableHover?: undefined;
        enableBrowserSelection?: undefined;
        filterable?: undefined;
        filterHeight?: undefined;
        filterMode?: string;
        height?: number | string;
        hierarchicalCheckboxes?: undefined;
        icons?: undefined;
        incrementalSearch?: undefined;
        localization?: any;
        pagerHeight?: undefined;
        pageSize?: undefined;
        pageSizeOptions?: Array<number | string>;
        pageable?: undefined;
        pagerPosition?: string;
        pagerMode?: string;
        pageSizeMode?: string;
        pagerButtonsCount?: undefined;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: undefined;
        rowDetailsRenderer?: (key: number, dataRow: number) => any;
        renderToolbar?: (toolBar?: any) => void;
        renderStatusbar?: (statusBar?: any) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: undefined;
        source?: any;
        sortable?: undefined;
        showAggregates?: undefined;
        showSubAggregates?: undefined;
        showToolbar?: undefined;
        showStatusbar?: undefined;
        statusBarHeight?: undefined;
        scrollBarSize?: undefined;
        selectionMode?: string;
        showHeader?: undefined;
        theme?: undefined;
        toolbarHeight?: undefined;
        width?: string | number;
        virtualModeCreateRecords?: (expandedRecord?: any, done?: any) => void;
        virtualModeRecordCreating?: (record?: any) => any;
    }// TreeGridOptions

    export interface jqxTreeGrid extends widget, TreeGridOptions {

        // jqxTreeGrid functions
        addRow(rowKey: undefined, rowData: any, rowPosition: undefined, parent: undefined): void;
        addFilter(dataField: undefined, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowKey: undefined): void;
        beginCellEdit(rowKey: undefined, dataField: undefined): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        checkRow(rowKey: undefined): void;
        collapseRow(rowKey: undefined): void;
        collapseAll(): void;
        destroy(): void;
        deleteRow(rowKey: Array<string> | string): void;
        expandRow(rowKey: Array<number | string> | string | number): void;
        expandAll(): void;
        endUpdate(): void;
        ensureRowVisible(rowKey: undefined): void;
        endRowEdit(rowKey: undefined, cancelChanges: undefined): void;
        endCellEdit(rowKey: undefined, dataField: undefined, cancelChanges: undefined): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: undefined, propertyName: undefined): any;
        goToPage(pageIndex: undefined): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getKey(row: any): undefined;
        getRow(rowKey: undefined): TreeGridGetRow;
        getRows(): Array<TreeGridGetRow>;
        getCheckedRows(): Array<TreeGridGetRow>;
        getView(): Array<TreeGridGetRow>;
        getCellValue(rowKey: undefined, dataField: undefined): any;
        hideColumn(dataField: undefined): void;
        isBindingCompleted(): undefined;
        lockRow(rowKey: string | number | Array<number | string>): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: undefined): void;
        scrollOffset(top: undefined, left: undefined): TreeGridScrollOffset;
        setColumnProperty(dataField: undefined, propertyName: undefined, propertyValue: any): void;
        showColumn(dataField: undefined): void;
        selectRow(rowId: string | number | Array<number | string>): void;
        setCellValue(rowId: undefined, dataField: undefined, cellValue: any): void;
        sortBy(dataField: number | string, sortOrder: undefined): void;
        updating(): undefined;
        updateBoundData(): void;
        unselectRow(rowId: string | number | Array<number | string>): void;
        uncheckRow(rowId: undefined): void;
        updateRow(rowId: number | string, data: any): void;
        unlockRow(rowId: string | number | Array<number | string>): void;
    }// jqxTreeGrid

    export interface TreeMapColorRanges {
        // TreeMapColorRanges properties
        color?: undefined;
        min?: undefined;
        max?: undefined;
    }// TreeMapColorRanges

    export interface TreeMapLegendPosition {
        // TreeMapLegendPosition properties
        x?: number | string;
        y?: number | string;
    }// TreeMapLegendPosition

    export interface TreeMapOptions {
        // TreeMapOptions properties
        baseColor?: undefined;
        colorRanges?: Array<TreeMapColorRanges>;
        colorRange?: undefined;
        colorMode?: string;
        displayMember?: undefined;
        height?: string | number;
        hoverEnabled?: undefined;
        headerHeight?: undefined;
        legendLabel?: undefined;
        legendPosition?: TreeMapLegendPosition;
        legendScaleCallback?: any;
        renderCallbacks?: any;
        selectionEnabled?: undefined;
        showLegend?: undefined;
        source?: any;
        theme?: undefined;
        valueMember?: undefined;
        width?: string | number;
    }// TreeMapOptions

    export interface jqxTreeMap extends widget, TreeMapOptions {

        // jqxTreeMap functions
        destroy(): void;
        render(): void;
    }// jqxTreeMap

    export interface ValidatorRule {
        // ValidatorRule properties
        input?: undefined;
        message?: undefined;
        action?: undefined;
        rule?: string | any;
        position?: undefined;
        hintRender?: any;
    }// ValidatorRule

    export interface ValidatorOptions {
        // ValidatorOptions properties
        arrow?: undefined;
        animation?: string;
        animationDuration?: undefined;
        closeOnClick?: undefined;
        focus?: undefined;
        hintType?: string;
        onError?: () => void;
        onSuccess?: () => void;
        position?: undefined;
        rules?: Array<ValidatorRule>;
        rtl?: undefined;
    }// ValidatorOptions

    export interface jqxValidator extends widget, ValidatorOptions {

        // jqxValidator functions
        hideHint(id: undefined): void;
        hide(): void;
        updatePosition(): void;
        validate(htmlElement: any): void;
        validateInput(id: undefined): void;
    }// jqxValidator

    export interface WindowDragArea {
        // WindowDragArea properties
        left: undefined;
        top: undefined;
        width: number | string;
        height: number | string;
    }// WindowDragArea

    export interface WindowOptions {
        // WindowOptions properties
        autoOpen?: undefined;
        animationType?: string;
        collapsed?: undefined;
        collapseAnimationDuration?: undefined;
        content?: undefined;
        closeAnimationDuration?: undefined;
        closeButtonSize?: undefined;
        closeButtonAction?: string;
        cancelButton?: any;
        dragArea?: WindowDragArea;
        draggable?: undefined;
        disabled?: undefined;
        height?: string | number;
        initContent?: () => void;
        isModal?: undefined;
        keyboardCloseKey?: number | string;
        keyboardNavigation?: undefined;
        minHeight?: string | number;
        maxHeight?: string | number;
        minWidth?: number | string;
        maxWidth?: number | string;
        modalOpacity?: undefined;
        modalZIndex?: undefined;
        modalBackgroundZIndex?: undefined;
        okButton?: any;
        position?: string | any;
        rtl?: undefined;
        resizable?: undefined;
        showAnimationDuration?: undefined;
        showCloseButton?: undefined;
        showCollapseButton?: undefined;
        theme?: undefined;
        title?: undefined;
        width?: string | number;
        zIndex?: undefined;
    }// WindowOptions

    export interface jqxWindow extends widget, WindowOptions {

        // jqxWindow functions
        bringToFront(): void;
        close(): void;
        collapse(): void;
        closeAll(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        expand(): void;
        focus(): void;
        isOpen(): undefined;
        move(top: undefined, left: undefined): void;
        open(): void;
        hide(): void;
        resize(top: undefined, left: undefined): void;
        setTitle(title: undefined): void;
        setContent(content: undefined): void;
    }// jqxWindow



} // module jqwidgets