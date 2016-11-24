/*
   jQWidgets TypeScript definitions

   Copyright (c) 2011-2016 jQWidgets.
   License: http://jqwidgets.com/license/
*/

declare var generatedata: any;
declare var $: any;

declare module jqwidgets {
    export function createInstance(selector: string, widgetName: string, params?: any): any;
    
    export class widget
    {
        constructor(selector: string, options?: Object);
        refresh(): void;
        destroy(): void;
        getInstance(): any;
        addEventHandler(event: string, funcEventHandler: ( any ) => void): void;
        removeEventHandler(event: string): void;
        setOptions(params?: any): any;
    }


    export interface Size {
        // Size properties
        size?: String | Number;
    }// Size

    export interface BarGaugeLabelsFont {
        // BarGaugeLabelsFont properties
        color?: string;
        size?: number;
        family?: string;
    }// BarGaugeLabelsFont

    export interface BarGaugeLabels {
        // BarGaugeLabels properties
        connectorColor?: string;
        connectorWidth?: number;
        font?: BarGaugeLabelsFont;
        formatFunction?: (value?: number, index?: number) => string;
        indent?: number;
        precision?: number;
        visible?: boolean;
    }// BarGaugeLabels

    export interface BarGaugeTextFont {
        // BarGaugeTextFont properties
        color?: string;
        family?: string;
        opacity?: number;
        size?: number;
        weight?: number;
    }// BarGaugeTextFont

    export interface BarGaugeTitleMargin {
        // BarGaugeTitleMargin properties
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }// BarGaugeTitleMargin

    export interface BarGaugeTitleSubtitle {
        // BarGaugeTitleSubtitle properties
        text?: string;
        font?: BarGaugeTextFont;
    }// BarGaugeTitleSubtitle

    export interface BarGaugeTitle {
        // BarGaugeTitle properties
        text?: string;
        font?: BarGaugeTextFont;
        horizontalAlignment?: string;
        margin?: BarGaugeTitleMargin;
        subtitle?: BarGaugeTitleSubtitle;
        verticalAlignment?: string;
    }// BarGaugeTitle

    export interface BarGaugeFormatFunction {
        // BarGaugeFormatFunction properties
        value?: number;
        index?: number;
        color?: string;
    }// BarGaugeFormatFunction

    export interface BarGaugeTooltip {
        // BarGaugeTooltip properties
        classname?: string;
        formatFunction?: (value?: any, index?: number) => string;
        visible?: boolean;
        precision?: number;
    }// BarGaugeTooltip

    export interface BarGaugeCustomColorScheme {
        // BarGaugeCustomColorScheme properties
        name: string;
        colors: Array<String>;
    }// BarGaugeCustomColorScheme

    export interface BarGaugeOptions {
        // BarGaugeOptions properties
        animationDuration?: number;
        backgroundColor?: string;
        barSpacing?: number;
        baseValue?: number;
        colorScheme?: string;
        customColorScheme?: BarGaugeCustomColorScheme;
        disabled?: boolean;
        endAngle?: number;
        formatFunction?: BarGaugeFormatFunction;
        height?: Size;
        labels?: BarGaugeLabels;
        max?: number;
        min?: number;
        relativeInnerRadius?: any;
        rendered?: () => void;
        startAngle?: number;
        title?: BarGaugeTitle;
        tooltip?: BarGaugeTooltip;
        useGradient?: boolean;
        values?: Array<Number>;
        width?: Size;
    }// BarGaugeOptions

    export interface jqxBarGauge extends widget, BarGaugeOptions {

        // jqxBarGauge functions
        refresh(): void;
        render(): void;
        val(value: Array<Number>): Array<Number>;
    }// jqxBarGauge

    export interface BulletChartPointer {
        // BulletChartPointer properties
        value?: number;
        label?: string;
        size?: Size;
        color?: string;
    }// BulletChartPointer

    export interface BulletChartRanges {
        // BulletChartRanges properties
        startValue: number;
        endValue: number;
        opacity?: number;
        color?: string;
    }// BulletChartRanges

    export interface BulletChartTicks {
        // BulletChartTicks properties
        position?: string;
        interval?: number;
        size?: number;
    }// BulletChartTicks

    export interface BulletChartOptions {
        // BulletChartOptions properties
        animationDuration?: number;
        barSize?: Size;
        description?: string;
        disabled?: boolean;
        height?: Size;
        labelsFormat?: string;
        labelsFormatFunction?: (value?: number, position?:string ) => any;
        orientation?: string;
        pointer?: BulletChartPointer;
        rtl?: boolean;
        ranges?: Array<BulletChartRanges>;
        showTooltip?: boolean;
        target?: BulletChartPointer;
        ticks?: BulletChartTicks;
        title?: string;
        tooltipFormatFunction?: (pointerValue:number , targetValue:number) => String;
        width?: Size;
    }// BulletChartOptions

    export interface jqxBulletChart extends widget, BulletChartOptions {

        // jqxBulletChart functions
        destroy(): void;
        render(): void;
        refresh(): void;
        val(value: number): number;
    }// jqxBulletChart

    export interface ButtonOptions {
        // ButtonOptions properties
        delay?: number;
        disabled?: boolean;
        height?: Size;
        imgSrc?: string;
        imgWidth?: Size;
        imgHeight?: Size;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: boolean;
        textPosition?: string;
        textImageRelation?: string;
        theme?: string;
        template?: string;
        toggled?: boolean;
        width?: Size;
        value?: string;
    }// ButtonOptions

    export interface jqxButton extends widget, ButtonOptions {

        // jqxButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: string): string;
    }// jqxButton

    export interface ButtonGroupOptions {
        // ButtonGroupOptions properties
        disabled?: boolean;
        enableHover?: boolean;
        mode?: string;
        rtl?: boolean;
        template?: string;
        theme?: string;
    }// ButtonGroupOptions

    export interface jqxButtonGroup extends widget, ButtonGroupOptions {

        // jqxButtonGroup functions
        disableAt(index: number): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        enableAt(index: number): void;
        focus(): void;
        getSelection(): any;
        render(): void;
        setSelection(index: number): void;
    }// jqxButtonGroup

    export interface CalendarOptions {
        // CalendarOptions properties
        backText?: string;
        columnHeaderHeight?: number;
        clearString?: string;
        culture?: string;
        dayNameFormat?: string;
        disabled?: boolean;
        enableWeekend?: boolean;
        enableViews?: boolean;
        enableOtherMonthDays?: boolean;
        enableFastNavigation?: boolean;
        enableHover?: boolean;
        enableAutoNavigation?: boolean;
        enableTooltips?: boolean;
        forwardText?: string;
        firstDayOfWeek?: number;
        height?: Size;
        min?: any;
        max?: any;
        navigationDelay?: number;
        rowHeaderWidth?: Size;
        readOnly?: boolean;
        restrictedDates?: Array<any>;
        rtl?: boolean;
        stepMonths?: number;
        showWeekNumbers?: boolean;
        showDayNames?: boolean;
        showOtherMonthDays?: boolean;
        showFooter?: boolean;
        selectionMode?: string;
        specialDates?: Array<any>;
        theme?: string;
        titleHeight?: number;
        titleFormat?: string;
        todayString?: string;
        value?: any;
        width?: number;
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
        navigateForward(months: number): void;
        navigateBackward(months: number): void;
        render(): void;
        refresh(): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        setRange(date: any, date2: any): void;
        today(): void;
        val(date: any, date2: any): any;
    }// jqxCalendar

    export interface ChartOffset {
        // ChartOffset properties
        x: number;
        y: number;
    }// ChartOffset

    export interface ChartRect {
        // ChartRect properties
        x: number;
        y: number;
        width: number;
        height: number;
    }// ChartRect

    export interface ChartPadding {
        // ChartPadding properties
        left: number;
        right: number;
        top: number;
        bottom: number;
    }// ChartPadding

    export interface ChartTickMarks {
        // ChartTickMarks properties
        visible?: any;
        color?: string;
        step?: number;
        dashStyle?: string;
        lineWidth?: number;
        size?: number;
        custom?: Array<ChartCustomOffset>;
    }// ChartTickMarks

    export interface ChartGridLines {
        // ChartGridLines properties
        visible?: any;
        color?: string;
        step?: number;
        dashStyle?: string;
        lineWidth?: number;
        custom?: Array<ChartCustomOffset>;
    }// ChartGridLines

    export interface ChartAxisLine {
        // ChartAxisLine properties
        visible?: any;
        color?: string;
        dashStyle?: string;
        lineWidth?: number;
    }// ChartAxisLine

    export interface ChartCustomOffset {
        // ChartCustomOffset properties
        value?: any;
        offset?: number;
    }// ChartCustomOffset

    export interface ChartAxisLabels {
        // ChartAxisLabels properties
        visible?: any;
        class?: string;
        step?: number;
        angle?: number;
        rotationPoint?: string;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        custom?: Array<ChartCustomOffset>;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        autoRotate?: Boolean;
    }// ChartAxisLabels

    export interface ChartFormatSettings {
        // ChartFormatSettings properties
        prefix?: string;
        sufix?: string;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        decimalPlaces?: number;
        negativeWithBrackets?: boolean;
        dateFormat?: string;
    }// ChartFormatSettings

    export interface ChartSeriesLabels {
        // ChartSeriesLabels properties
        visible?: boolean;
        class?: string;
        angle?: number;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        backgroundColor?: string;
        backgroundOpacity?: number;
        borderColor?: string;
        borderOpacity?: number;
        padding?: ChartPadding;
        linesEnabled?: boolean;
        linesAngles?: boolean;
        autoRotate?: boolean;
        radius?: any;
    }// ChartSeriesLabels

    export interface ChartAxisTitle {
        // ChartAxisTitle properties
        visible?: boolean;
        text?: string;
        class?: string;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        angle?: number;
        rotationPoint?: string;
        offset?: ChartOffset;
    }// ChartAxisTitle

    export interface ChartColorBand {
        // ChartColorBand properties
        minValue?: number;
        maxValue?: number;
        fillColor?: string;
        opacity?: string;
        lineColor?: string;
        lineWidth?: number;
        dashStyle?: string;
    }// ChartColorBand

    export interface ChartXAxis {
        // ChartXAxis properties
        visible?: boolean;
        unitInterval?: number;
        dataField?: string;
        type?: string;
        baseUnit?: string;
        valuesOnTicks?: boolean;
        dateFormat?: string;
        axisSize?: String | Number;
        customDraw?: boolean;
        flip?: boolean;
        position?: string;
        padding?: ChartPadding;
        title?: ChartAxisTitle;
        tickMarks?: ChartTickMarks;
        gridLines?: ChartGridLines;
        line?: ChartAxisLine;
        labels?: ChartAxisLabels;
        logarithmicScale?: boolean;
        logarithmicScaleBase?: number;
        minValue?: number;
        maxValue?: number;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: string;
        alternatingBackgroundColor2?: string;
        alternatingBackgroundOpacity?: number;
        formatSettings?: any;
        formatFunction?: any;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: any;
        rangeSelector?: any;
    }// ChartXAxis

    export interface ChartSerie {
        // ChartSerie properties
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
        symbolType?: string;
        symbolSize?: number;
        symbolSizeSelected?: number;
        emptyPointsDisplay?: string;
        linesUnselectMode?: string;
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
        labels?: ChartSeriesLabels;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendFormatSettings?: ChartFormatSettings;
        legendFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendLineColor?: string;
        legnedFillColor?: string;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
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
    }// ChartSerie

    export interface ChartValueAxis {
        // ChartValueAxis properties
        visible?: boolean;
        flip?: boolean;
        position?: string;
        axisSize?: number;
        minValue?: number;
        maxValue?: number;
        baselineValue?: number;
        logarithmicScale?: boolean;
        logarithmicScaleBase?: number;
        valuesOnTicks?: boolean;
        unitInterval?: number;
        title?: ChartAxisTitle;
        labels?: ChartAxisLabels;
        gridLines?: ChartGridLines;
        tickMarks?: ChartTickMarks;
        padding?: ChartPadding;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: string;
        alternatingBackgroundColor2?: string;
        alternatingBackgroundOpacity?: number;
        toolTipFormatSettings?: ChartFormatSettings;
    }// ChartValueAxis

    export interface ChartSeriesGroup {
        // ChartSeriesGroup properties
        type: string;
        orientation?: string;
        valueAxis?: ChartValueAxis;
        series: Array<ChartSerie>;
        formatSettings?: ChartFormatSettings;
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
        xAxis?: ChartXAxis;
        colorScheme?: string;
        showLabels?: boolean;
    }// ChartSeriesGroup

    export interface ChartLegendLayout {
        // ChartLegendLayout properties
        left: number;
        top: number;
        width: Size;
        height: Size;
        flow: string;
    }// ChartLegendLayout

    export interface ChartOptions {
        // ChartOptions properties
        title?: string;
        description?: string;
        source?: any;
        showBorderLine?: boolean;
        borderLineColor?: string;
        borderLineWidth?: number;
        backgroundColor?: string;
        backgroundImage?: string;
        showLegend?: boolean;
        legendLayout?: ChartLegendLayout;
        padding?: ChartPadding;
        titlePadding?: ChartPadding;
        colorScheme?: string;
        greyScale?: boolean;
        showToolTips?: boolean;
        toolTipShowDelay?: number;
        toolTipHideDelay?: number;
        toolTipMoveDuration?: number;
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
        renderEngine?: string;
        xAxis?: ChartXAxis;
        valueAxis?: ChartValueAxis;
        seriesGroups: Array<ChartSeriesGroup>;
    }// ChartOptions

    export interface jqxChart extends widget, ChartOptions {

        // jqxChart functions
        refresh(): void;
        update(): void;
        destroy(): void;
        addColorScheme(schemeName: string, colors: Array<string>): void;
        removeColorScheme(schemeName: string): void;
        getItemsCount(groupIndex: number, serieIndex: number): number;
        getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
        getXAxisRect(groupIndex: number): ChartRect;
        getXAxisLabels(groupIndex: number): Array<any>;
        getValueAxisRect(groupIndex: number): ChartRect;
        getValueAxisLabels(groupIndex: number): Array<any>;
        getColorScheme(colorScheme: string): Array<string>;
        hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
        showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
        hideToolTip(hideDelay: number): void;
        showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
        saveAsJPEG(fileName: string, exportServerUrl: string): void;
        saveAsPDF(fileName: string, exportServerUrl: string): void;
        getXAxisValue(offset: number, groupIndex: number): any;
        getValueAxisValue(offset: number, groupIndex: number): any;
    }// jqxChart

    export interface CheckBoxOptions {
        // CheckBoxOptions properties
        animationShowDelay?: number;
        animationHideDelay?: number;
        boxSize?: Size;
        checked?: boolean;
        disabled?: boolean;
        enableContainerClick?: boolean;
        groupName?: string;
        height?: Size;
        hasThreeStates?: boolean;
        locked?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: Size;
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
        val(value: boolean): boolean;
    }// jqxCheckBox

    export interface ColorPickerOptions {
        // ColorPickerOptions properties
        color?: any;
        colorMode?: string;
        disabled?: boolean;
        height?: Size;
        showTransparent?: boolean;
        width?: Size;
    }// ColorPickerOptions

    export interface jqxColorPicker extends widget, ColorPickerOptions {

        // jqxColorPicker functions
        getColor(): Object;
        setColor(color: any): void;
    }// jqxColorPicker

    export interface ComboBoxOptions {
        // ComboBoxOptions properties
        animationType?: string;
        autoComplete?: boolean;
        autoOpen?: boolean;
        autoItemsHeight?: boolean;
        autoDropDownHeight?: boolean;
        closeDelay?: number;
        checkboxes?: boolean;
        disabled?: boolean;
        displayMember?: string;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownHeight?: Size;
        dropDownWidth?: Size;
        enableHover?: boolean;
        enableSelection?: boolean;
        enableBrowserBoundsDetection?: boolean;
        height?: Size;
        itemHeight?: number;
        multiSelect?: boolean;
        minLength?: number;
        openDelay?: number;
        popupZIndex?: number;
        placeHolder?: string;
        remoteAutoComplete?: boolean;
        remoteAutoCompleteDelay?: number;
        renderer?: (index:number, label?:string, value?:any) => string;
        renderSelectedItem?: (index:number, item?:any) => string;
        rtl?: boolean;
        selectedIndex?: number;
        showArrow?: boolean;
        showCloseButtons?: boolean;
        searchMode?: string;
        search?: (searchString:string) => void;
        source?: Array<any>;
        scrollBarSize?: Size;
        template?: string;
        theme?: string;
        validateSelection?: (itemValue:string) => boolean;
        valueMember?: string;
        width?: Size;
    }// ComboBoxOptions

    export interface jqxComboBox extends widget, ComboBoxOptions {

        // jqxComboBox functions
        addItem(item: any): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: number): void;
        checkItem(item: any): void;
        checkAll(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: number): void;
        enableItem(item: any): void;
        enableAt(index: number): void;
        ensureVisible(index: number): void;
        focus(): void;
        getItem(index: number): any;
        getItemByValue(value: string): any;
        getVisibleItems(): Array<any>;
        getItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getSelectedItem(): any;
        getSelectedItems(): Array<any>;
        getSelectedIndex(): number;
        insertAt(item: any, index: number): boolean;
        isOpened(): boolean;
        indeterminateIndex(index: number): void;
        indeterminateItem(item: any): void;
        loadFromSelect(selectTagId: string): void;
        open(): void;
        removeItem(item: any): boolean;
        removeAt(index: number): boolean;
        selectIndex(index: number): void;
        selectItem(item: any): void;
        updateItem(item: any, itemValue: string): void;
        updateAt(item: any, index: any): void;
        unselectIndex(index: number): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: string): string;
    }// jqxComboBox

    export interface ComplexInputOptions {
        // ComplexInputOptions properties
        decimalNotation?: string;
        disabled?: boolean;
        height?: Size;
        placeHolder?: string;
        roundedCorners?: boolean;
        rtl?: boolean;
        spinButtons?: boolean;
        spinButtonsStep?: number;
        template?: string;
        theme?: string;
        value?: string;
        width?: Size;
    }// ComplexInputOptions

    export interface jqxComplexInput extends widget, ComplexInputOptions {

        // jqxComplexInput functions
        destroy(): void;
        getReal(complexNumber: number): number;
        getImaginary(complexNumber: number): number;
        render(): void;
        refresh(): void;
        val(): string;
    }// jqxComplexInput

    export interface DataAdapterDataFields {
        // DataAdapterDataFields properties
        name: string;
        type?: string;
        map?: string;
        format?: string;
        values?: Array<any>;
    }// DataAdapterDataFields

    export interface DataAdapterData {
        // DataAdapterData properties
        featureClass?: string;
        style?: string;
        maxRows?: number;
        username?: string;
    }// DataAdapterData

    export interface DataAdapterOptions {
        // DataAdapterOptions properties
        columnDelimiter?: string;
        datafields?: Array<DataAdapterDataFields>;
        data?: DataAdapterData;
        datatype?: string;
        type?: string;
        id?: string;
        localdata?: any;
        mapChar?: string;
        rowDelimiter?: string;
        root?: string;
        record?: string;
        url?: string;
        async?: boolean;
        autoBind?: boolean;
        beforeSend?: (jqXHR:any , settings?:any) => void;
        beforeLoadComplete?: (records:Array<any> , originalData?:Array<any>) => Array<any>;
        contentType?: string;
        formatData?: (data:any) => any;
        loadError?: (jqXHR?:any, status?: any, error?: String) => void;
        loadComplete?: (records:Array<any>) => void;
        loadServerData?: (serverdata:any, source:any, callback:any) => void;
        processData?: (data:any) => void;
        beginUpdate?: () => void;
        dataBind?: () => void;
        endUpdate?: (automaticDataBind?: boolean ) => void;
        formatDate?: (value: any, format:string, calendar:any ) => string;
        formatNumber?: (value: number, format:string, calendar:any ) => string;
        getRecordsHierarchy?: (id:number, parentField:number, name?:string, map?:any ) => any[];
        getGroupedRecords?: (groupingFields:Array<any>, items:any, name:string, map:any ) => any[];
        getAggregatedData?: (data : Array<any>) => any;
        records?: Array<any>;
    }// DataAdapterOptions

    export interface jqxDataAdapter extends widget, DataAdapterOptions {

        // jqxDataAdapter functions

    }// jqxDataAdapter

    export interface DataTableColumns {
        // DataTableColumns properties
        text: string;
        dataField: string;
        displayField?: string;
        sortable?: boolean;
        filterable?: boolean;
        hidden?: boolean;
        columnGroup ?: string;
        autoCellHeight?: boolean;
        renderer?: (text:String, align?:string, height?: Size) => string;
        rendered?: (element:any, align?:string, height?: Size) => boolean;
        cellsRenderer?: (row:number, column?:any, value?: any, rowData?:any) => string;
        columnType?: string;
        validation?: (cell:number, value?:any) => any;
        initEditor?: (row:number, cellValue?:any, editor?:any, cellText?:String, width?:Size, height?:Size) => void;
        createEditor?: (row:number, cellValue?:any, editor?:any, cellText?:String, width?:Size, height?:Size) => void;
        getEditorValue?: (row:number, cellValue?:any, editor?:any) => void;
        cellsFormat?: string;
        aggregates?: Array<String>;
        aggregatesRenderer?: (aggregates:Array<any>) => string;
        align?: string;
        cellsAlign?: string;
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        resizable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        className?: string;
        cellClassName?: any;
        pinned?: boolean;
    }// DataTableColumns

    export interface DataTableColumnGroups {
        // DataTableColumnGroups properties
        text?: string;
        parentGroup?: string;
        align?: string;
        name?: string;
    }// DataTableColumnGroups

    export interface DataTableEditSettings {
        // DataTableEditSettings properties
        saveOnPageChange?: boolean;
        saveOnBlur?: boolean;
        saveOnSelectionChange?: boolean;
        cancelOnEsc?: boolean;
        saveOnEnter?: boolean;
        editSingleCell?: boolean;
        editOnDoubleClick?: boolean;
        editOnF2?: boolean;
    }// DataTableEditSettings

    export interface DataTableExportSettings {
        // DataTableExportSettings properties
        columnsHeader?: boolean;
        hiddenColumns?: boolean;
        serverURL?: any;
        characterSet?: any;
        recordsInView?: boolean;
        fileName?: string;
    }// DataTableExportSettings

    export interface DataTableOptions {
        // DataTableOptions properties
        altRows?: boolean;
        autoRowHeight?: boolean;
        aggregatesHeight?: number;
        autoShowLoadElement?: boolean;
        columnsHeight?: number;
        columns?: Array<DataTableColumns>;
        columnGroups?: Array<DataTableColumnGroups>;
        columnsResize?: boolean;
        columnsReorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editSettings?: DataTableEditSettings;
        exportSettings?: DataTableExportSettings;
        enableHover?: boolean;
        enableBrowserSelection?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterMode?: string;
        groups?: Array<any>;
        groupsRenderer?: (value:any, rowData?:any, level?:number) => string;
        height?: Size;
        initRowDetails?: (id:number, row?:any, element?:any, rowInfo?:any) => void;
        incrementalSearch?: boolean;
        localization?: any;
        pagerHeight?: number;
        pageSize?: number;
        pageSizeOptions?: Array<String>;
        pageable?: boolean;
        pagerPosition?: string;
        pagerMode?: string;
        pagerButtonsCount?: number;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: boolean;
        renderToolbar?: (toolbar:any) => void;
        renderStatusbar?: (statusbar:any) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        source?: any;
        sortable?: boolean;
        showAggregates?: boolean;
        showToolbar?: boolean;
        showStatusbar?: boolean;
        statusBarHeight?: number;
        scrollBarSize?: Size;
        selectionMode?: string;
        serverProcessing?: boolean;
        showHeader?: boolean;
        theme?: string;
        toolbarHeight?: number;
        width?: Size;
    }// DataTableOptions

    export interface jqxDataTable extends widget, DataTableOptions {

        // jqxDataTable functions
        addRow(rowIndex: number, rowData: any, rowPosition: any): void;
        addFilter(dataField: string, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowIndex: number): void;
        beginCellEdit(rowIndex: number, dataField: string): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        destroy(): void;
        deleteRow(rowIndex: number): void;
        endUpdate(): void;
        ensureRowVisible(rowIndex: number): void;
        endRowEdit(rowIndex: number, cancelChanges: boolean): void;
        endCellEdit(rowIndex: number, dataField: string): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: string, propertyName: string): any;
        goToPage(pageIndex: number): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getRows(): Array<any>;
        getView(): Array<any>;
        getCellValue(rowIndex: number, dataField: string): any;
        hideColumn(dataField: string): void;
        hideDetails(rowIndex: boolean): void;
        isBindingCompleted(): boolean;
        lockRow(rowIndex: number): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: string): void;
        scrollOffset(top: number, left: number): any;
        setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
        showColumn(dataField: string): void;
        selectRow(rowIndex: number): void;
        showDetails(rowIndex: number): void;
        setCellValue(rowIndex: number, dataField: string, value: any): void;
        sortBy(dataField: string, sortOrder: any): void;
        updating(): boolean;
        updateBoundData(): void;
        unselectRow(rowIndex: number): void;
        updateRow(rowIndex: number, rowData: any): void;
        unlockRow(rowIndex: number): void;
    }// jqxDataTable

    export interface DateTimeInputOptions {
        // DateTimeInputOptions properties
        animationType?: string;
        allowNullDate?: boolean;
        allowKeyboardDelete?: boolean;
        clearString?: string;
        culture?: string;
        closeDelay?: number;
        closeCalendarAfterSelection?: boolean;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        disabled?: boolean;
        enableBrowserBoundsDetection?: boolean;
        enableAbsoluteSelection?: boolean;
        firstDayOfWeek?: number;
        formatString?: string;
        height?: Size;
        min?: any;
        max?: any;
        openDelay?: number;
        placeHolder?: string;
        popupZIndex?: number;
        rtl?: boolean;
        readonly?: boolean;
        showFooter?: boolean;
        selectionMode?: string;
        showWeekNumbers?: boolean;
        showTimeButton?: boolean;
        showCalendarButton?: boolean;
        theme?: string;
        template?: string;
        textAlign?: string;
        todayString?: string;
        value?: any;
        width?: Size;
    }// DateTimeInputOptions

    export interface jqxDateTimeInput extends widget, DateTimeInputOptions {

        // jqxDateTimeInput functions
        close(): void;
        destroy(): void;
        focus(): void;
        getRange(date: any): any;
        getText(): string;
        getDate(): any;
        getMaxDate(): any;
        getMinDate(): any;
        open(): void;
        setRange(date: any, date2: any): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        val(date: any, date2: any): any;
    }// jqxDateTimeInput

    export interface DockingLayoutLayout {
        // DockingLayoutLayout properties
        type: string;
        alignment?: string;
        allowClose?: boolean;
        allowPin?: boolean;
        allowUnpin?: boolean;
        contentContainer?: string;
        height?: Size;
        initContent?: () => void;
        minHeight?: Size;
        minWidth?: Size;
        orientation?: string;
        pinnedHeight?: Size;
        pinnedWidth?: Size;
        position?: DockingLayoutLayoutPosition;
        selected?: boolean;
        title?: string;
        unpinnedHeight?: Size;
        unpinnedWidth?: Size;
        width?: Size;
        items?: Array<DockingLayoutLayout>;
    }// DockingLayoutLayout

    export interface DockingLayoutLayoutPosition {
        // DockingLayoutLayoutPosition properties
        x: number;
        y: number;
    }// DockingLayoutLayoutPosition

    export interface DockingLayoutOptions {
        // DockingLayoutOptions properties
        contextMenu?: boolean;
        height?: Size;
        layout?: Array<DockingLayoutLayout>;
        minGroupHeight?: Size;
        minGroupWidth?: Size;
        resizable?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: Size;
    }// DockingLayoutOptions

    export interface jqxDockingLayout extends widget, DockingLayoutOptions {

        // jqxDockingLayout functions
        addFloatGroup(width: Size, height: Size, position: DockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void;
        destroy(): void;
        loadLayout(layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxDockingLayout

    export interface DockPanelOptions {
        // DockPanelOptions properties
        disabled?: boolean;
        height?: Size;
        lastchildfill?: boolean;
        width?: Size;
    }// DockPanelOptions

    export interface jqxDockPanel extends widget, DockPanelOptions {

        // jqxDockPanel functions
        refresh(): void;
    }// jqxDockPanel

    export interface DockingCookieOptions {
        // DockingCookieOptions properties
        domain?: string;
        expires?: number;
    }// DockingCookieOptions

    export interface DockingWindowsMode {
        // DockingWindowsMode properties
        windowID: string;
    }// DockingWindowsMode

    export interface DockingOptions {
        // DockingOptions properties
        cookies?: boolean;
        cookieOptions?: DockingCookieOptions;
        disabled?: boolean;
        floatingWindowOpacity?: number;
        height?: Size;
        keyboardNavigation?: boolean;
        mode?: string;
        orientation?: string;
        rtl?: boolean;
        theme?: string;
        width?: Size;
        windowsMode?: DockingWindowsMode;
        windowsOffset?: number;
    }// DockingOptions

    export interface jqxDocking extends widget, DockingOptions {

        // jqxDocking functions
        addWindow(windowId: string, mode: any, panel: number, position: any): void;
        closeWindow(windowId: string): void;
        collapseWindow(windowId: string): void;
        destroy(): void;
        disableWindowResize(windowId: string): void;
        disable(): void;
        exportLayout(): string;
        enable(): void;
        expandWindow(windowId: string): void;
        enableWindowResize(windowId: string): void;
        focus(): void;
        hideAllCloseButtons(): void;
        hideAllCollapseButtons(): void;
        hideCollapseButton(windowId: string): void;
        hideCloseButton(windowId: string): void;
        importLayout(Json: string): void;
        move(windowId: string, panel: number, position: number): void;
        pinWindow(windowId: string): void;
        setWindowMode(windowId: string, mode: any): void;
        showCloseButton(windowId: string): void;
        showCollapseButton(windowId: string): void;
        setWindowPosition(windowId: string, top: any, left: number): void;
        showAllCloseButtons(): void;
        showAllCollapseButtons(): void;
        unpinWindow(windowId: string): void;
    }// jqxDocking

    export interface DragDropOptions {
        // DragDropOptions properties
        appendTo?: string;
        disabled?: boolean;
        distance?: number;
        data?: any;
        dropAction?: string;
        dropTarget?: any;
        dragZIndex?: number;
        feedback?: string;
        initFeedback?: (feedback?:any) => void;
        opacity?: number;
        onDragEnd?: () => void;
        onDrag?: (data?: any, position?: any) => void;
        onDragStart?: (position?: any) => void;
        onTargetDrop?: (data?: any) => void;
        onDropTargetEnter?: () => void;
        onDropTargetLeave?: (data?: any) => void;
        restricter?: any;
        revert?: boolean;
        revertDuration?: number;
        tolerance?: string;
    }// DragDropOptions

    export interface jqxDragDrop extends widget, DragDropOptions {

        // jqxDragDrop functions

    }// jqxDragDrop

    export interface DrawOptions {
        // DrawOptions properties
        renderEngine?: string;
    }// DrawOptions

    export interface jqxDraw extends widget, DrawOptions {

        // jqxDraw functions
        attr(element: any, attributes: any): void;
        circle(cx: number, cy: number, r: number, attributes: any): any;
        clear(): void;
        getAttr(element: any, attributes: any): string;
        getSize(): any;
        line(x1: number, y1: number, x2: number, y2: number, attributes: any): any;
        measureText(text: string, angle: number, attributes: any): any;
        on(element: any, event: string, func: any): void;
        off(element: any, event: string, func: any): void;
        path(path: string, attributes: any): any;
        pieslice(cx: number, xy: number, innerRadius: any, outerRadius: any, fromAngle: number, endAngle: number, centerOffset: number, attributes: any): any;
        refresh(): void;
        rect(x: number, y: number, width: Size, height: Size, attributes: any): any;
        saveAsJPEG(image: string, url: string): void;
        saveAsPNG(image: string, url: string): void;
        text(x: number, y: number, width: Size, height: Size, angle: number, attributes: Array<any>, clip: boolean, halign: string, valign: string, rotateAround: string): any;
    }// jqxDraw

    export interface DropDownButtonOptions {
        // DropDownButtonOptions properties
        animationType?: string;
        arrowSize?: number;
        autoOpen?: boolean;
        closeDelay?: number;
        disabled?: boolean;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownWidth?: any;
        enableBrowserBoundsDetection?: boolean;
        height?: Size;
        initContent?: () => void;
        openDelay?: number;
        popupZIndex?: number;
        rtl?: boolean;
        template?: string;
        theme?: string;
        width?: Size;
    }// DropDownButtonOptions

    export interface jqxDropDownButton extends widget, DropDownButtonOptions {

        // jqxDropDownButton functions
        close(): void;
        destroy(): void;
        focus(): void;
        getContent(): any;
        isOpened(): boolean;
        open(): void;
        setContent(content: string): void;
    }// jqxDropDownButton

    export interface DropDownListItem {
        // DropDownListItem properties
        label?: string;
        value?: any;
        disabled?: boolean;
        checked?: any;
        hasThreeStates?: boolean;
        html?: string;
        group?: string;
    }// DropDownListItem

    export interface DropDownListOptions {
        // DropDownListOptions properties
        autoOpen?: boolean;
        autoDropDownHeight?: boolean;
        animationType?: string;
        checkboxes?: boolean;
        closeDelay?: number;
        disabled?: boolean;
        displayMember?: string;
        dropDownHorizontalAlignment?: string;
        dropDownHeight?: any;
        dropDownWidth?: any;
        enableSelection?: boolean;
        enableBrowserBoundsDetection?: boolean;
        enableHover?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterDelay?: number;
        filterPlaceHolder?: string;
        height?: any;
        incrementalSearch?: boolean;
        incrementalSearchDelay?: number;
        itemHeight?: any;
        openDelay?: number;
        placeHolder?: string;
        popupZIndex?: number;
        rtl?: boolean;
        renderer?: (index: Number, label?: String, value?: any) => String;
        selectionRenderer?: (object?: any, index?: Number, label?: String) => String;
        searchMode?: string;
        scrollBarSize?: any;
        source?: any;
        selectedIndex?: number;
        theme?: string;
        valueMember?: string;
        width?: any;
    }// DropDownListOptions

    export interface jqxDropDownList extends widget, DropDownListOptions {

        // jqxDropDownList functions
        addItem(item: DropDownListItem): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: number): void;
        checkItem(item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: number): void;
        enableItem(item: any): void;
        enableAt(index: number): void;
        ensureVisible(index: number): void;
        focus(): void;
        getItem(index: number): DropDownListItem;
        getItemByValue(itemValue: string): DropDownListItem;
        getItems(): Array<DropDownListItem>;
        getCheckedItems(): Array<DropDownListItem>;
        getSelectedItem(): DropDownListItem;
        getSelectedIndex(): number;
        insertAt(item: DropDownListItem, index: number): void;
        isOpened(): boolean;
        indeterminateIndex(index: number): void;
        indeterminateItem(item: any): void;
        loadFromSelect(arg: string): void;
        open(): void;
        removeItem(item: any): void;
        removeAt(index: number): void;
        selectIndex(index: number): void;
        selectItem(item: DropDownListItem): void;
        setContent(content: string): void;
        updateItem(newItem: DropDownListItem, item: any): void;
        updateAt(item: DropDownListItem, index: number): void;
        unselectIndex(index: number): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: string): string;
    }// jqxDropDownList

    export interface EditorLocalization {
        // EditorLocalization properties
        bold?: string;
        italic?: string;
        underline?: string;
        format?: string;
        size?: string;
        font?: string;
        color?: string;
        background?: string;
        left?: string;
        center?: string;
        right?: string;
        outdent?: string;
        indent?: string;
        ul?: string;
        ol?: string;
        image?: string;
        link?: string;
        clean?: string;
    }// EditorLocalization

    export interface EditorOptions {
        // EditorOptions properties
        createCommand?: (name:any) => void;
        disabled?: boolean;
        editable?: boolean;
        height?: String  | Number;
        lineBreak?: string;
        localization?: EditorLocalization;
        pasteMode?: string;
        rtl?: boolean;
        stylesheets?: Array<any>;
        theme?: string;
        toolbarPosition?: string;
        tools?: string;
        width?: Size;
    }// EditorOptions

    export interface jqxEditor extends widget, EditorOptions {

        // jqxEditor functions
        destroy(): void;
        focus(): void;
        print(): void;
        setMode(mode: boolean): void;
        val(htmlValue: string): string;
    }// jqxEditor

    export interface ExpanderOptions {
        // ExpanderOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: number;
        disabled?: boolean;
        expanded?: boolean;
        expandAnimationDuration?: number;
        height?: Size;
        headerPosition?: string;
        initContent?: () => void;
        rtl?: boolean;
        showArrow?: boolean;
        theme?: string;
        toggleMode?: string;
        width?: Size;
    }// ExpanderOptions

    export interface jqxExpander extends widget, ExpanderOptions {

        // jqxExpander functions
        collapse(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        expand(): void;
        focus(): void;
        getContent(): string;
        getHeaderContent(): string;
        invalidate(): void;
        refresh(): void;
        render(): void;
        setHeaderContent(headerContent: string): void;
        setContent(content: string): void;
    }// jqxExpander

    export interface FileUploadLocalization {
        // FileUploadLocalization properties
        browseButton?: string;
        uploadButton?: string;
        cancelButton?: string;
        uploadFileTooltip?: string;
        cancelFileTooltip?: string;
    }// FileUploadLocalization

    export interface FileUploadOptions {
        // FileUploadOptions properties
        autoUpload?: boolean;
        accept?: string;
        browseTemplate?: string;
        cancelTemplate?: string;
        disabled?: boolean;
        fileInputName?: string;
        height?: Size;
        localization?: FileUploadLocalization;
        multipleFilesUpload?: boolean;
        renderFiles?: (filename:any) => void;
        rtl?: boolean;
        theme?: string;
        uploadUrl?: string;
        uploadTemplate?: string;
        width?: Size;
    }// FileUploadOptions

    export interface jqxFileUpload extends widget, FileUploadOptions {

        // jqxFileUpload functions
        browse(): void;
        cancelFile(): void;
        cancelAll(): void;
        destroy(): void;
        render(): void;
        refresh(): void;
        uploadFile(fileIndex: number): void;
        uploadAll(): void;
    }// jqxFileUpload

    export interface FormattedInputOptions {
        // FormattedInputOptions properties
        disabled?: boolean;
        decimalNotation?: string;
        dropDown?: boolean;
        dropDownWidth?: any;
        height?: any;
        min?: string;
        max?: string;
        placeHolder?: string;
        popupZIndex?: number;
        roundedCorners?: boolean;
        rtl?: boolean;
        radix?: any;
        spinButtons?: boolean;
        spinButtonsStep?: number;
        template?: string;
        theme?: string;
        upperCase?: boolean;
        value?: string;
        width?: any;
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
        val(value: String | Number): any;
    }// jqxFormattedInput

    export interface GaugeStyle {
        // GaugeStyle properties
        fill?: string;
        stroke?: string;
    }// GaugeStyle

    export interface GaugeBorder {
        // GaugeBorder properties
        size?: String | Number;
        visible?: boolean;
        style?: GaugeStyle;
        showGradient?: boolean;
    }// GaugeBorder

    export interface GaugeCaption {
        // GaugeCaption properties
        value?: string;
        position?: string;
        offset?: Array<Number>;
        visible?: boolean;
    }// GaugeCaption

    export interface GaugeCap {
        // GaugeCap properties
        size?: String | Number;
        visible?: Boolean;
        style?: GaugeStyle;
    }// GaugeCap

    export interface GaugeLabels {
        // GaugeLabels properties
        distance?: string;
        position?: string;
        interval?: String | Number;
        offset?: Array<Number>;
        visible?: boolean;
        formatValue?: (value?: number) => string;
    }// GaugeLabels

    export interface GaugePointer {
        // GaugePointer properties
        pointerType?: string;
        style?: GaugeStyle;
        width?: String | Number;
        length?: String | Number;
        visible?: boolean;
    }// GaugePointer

    export interface GaugeRanges {
        // GaugeRanges properties
        startValue: String | Number;
        endValue: String | Number;
        startWidth: String | Number;
        endWidth: String | Number;
        startDistance?: String | Number;
        endDistance?: String | Number;
        style: GaugeStyle;
    }// GaugeRanges

    export interface GaugeTicks {
        // GaugeTicks properties
        size: String | Number;
        interval: String | Number;
        visible?: boolean;
        style?: GaugeStyle;
    }// GaugeTicks

    export interface GaugeOptions {
        // GaugeOptions properties
        animationDuration?: String | Number;
        border?: GaugeBorder;
        caption?: GaugeCaption;
        cap?: GaugeCap;
        colorScheme?: string;
        disabled?: boolean;
        easing?: string;
        endAngle?: String | Number;
        height?: String | Number;
        int64?: boolean;
        labels?: GaugeLabels;
        min?: number;
        max?: String | Number;
        pointer?: GaugePointer;
        radius?: String | Number;
        ranges?: Array<GaugeRanges>;
        startAngle?: String | Number;
        showRanges?: boolean;
        style?: GaugeStyle;
        ticksMajor?: GaugeTicks;
        ticksMinor?: GaugeTicks;
        ticksDistance?: String | Number;
        value?: number;
        width?: String | Number;
    }// GaugeOptions

    export interface jqxGauge extends widget, GaugeOptions {

        // jqxGauge functions
        disable(): void;
        enable(): void;
        val(value: number): number;
    }// jqxGauge

    export interface GridColumnType {
        // GridColumnType properties
        Number?: string;
        checkbox?: (threestatecheckbox: Boolean) => void;
        numberinput?: string;
        dropdownlist?: string;
        combobox?: string;
        datetimeinput?: string;
        textbox?: string;
        template?: string;
        custom?: string;
    }// GridColumnType

    export interface ValidationResult {
        // ValidationResult properties
        result: boolean;
        message?: string;
    }// ValidationResult

    export interface GridColumn {
        // GridColumn properties
        text?: string;
        datafield?: string;
        displayfield?: string;
        sortable?: boolean;
        filterable?: boolean;
        filter?: (cellValue?: any, rowData?: any, dataField?: String, filterGroup?: any, defaultFilterResult?: any) => any;
        hideable?: boolean;
        hidden?: boolean;
        groupable?: boolean;
        menu?: boolean;
        exportable?: boolean;
        columngroup?: string;
        enabletooltips?: boolean;
        renderer?: (defaultText?: String, alignment?: String, height?: Number) => String;
        rendered?: (columnHeaderElement?: any) => void;
        cellsrenderer?: (row?: Number, columnfield?: String, value?: any, defaulthtml?: String, columnproperties?: any, rowdata?: any) => String;
        columntype?: GridColumnType;
        validation?: (cell?: any, value?: Number) => any;
        createwidget?: (row: any, column: any, value: String, cellElement: any) => void;
        initwidget?: (row: Number, column: String, value: String, cellElement: any) => void;
        createfilterwidget?: (column: any, htmlElement: any, editor: any) => void;
        createfilterpanel?: (datafield: String, filterPanel: any) => void;
        initeditor?: (row: Number, cellvalue: any, editor: any, celltext: any, pressedChar: String, callback: any) => void;
        createeditor?: (row: Number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => void;
        destroyeditor?: (row: Number, callback: any) => void;
        geteditorvalue?: (row: Number, cellvalue:any, editor:any) => any;
        cellbeginedit?: (row: Number, datafield: String, columntype: String) => Boolean;
        cellendedit?: (row: Number, datafield: String, columntype: String, oldvalue: any, newvalue: any) => Boolean;
        cellvaluechanging?: (row: Number, datafield: String, columntype: String, oldvalue: any, newvalue: any) => String;
        createeverpresentrowwidget?: (datafield: String, htmlElement: any, popup: any, addRowCallback: any) => any;
        initeverpresentrowwidget?: (datafield: String, htmlElement: any, popup: any) => void;
        reseteverpresentrowwidgetvalue?: (htmlElement: any) => void;
        geteverpresentrowwidgetvalue?: (datafield: String, htmlElement: any) => any;
        destroyeverpresentrowwidget?: (htmlElement: any) => void;
        validateeverpresentrowwidgetvalue?: (datafield: String, value: any, rowValues: any) => Boolean;
        cellsformat?: string;
        aggregates?: any;
        align?: string;
        cellsalign?: string;
        width?: any;
        minwidth?: any;
        maxwidth?: any;
        resizable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        classname?: string;
        pinned?: boolean;
        nullable?: boolean;
        filteritems?: any;
        filterdelay?: number;
        filtertype?: string;
        filtercondition?: string;
    }// GridColumn

    export interface GridSourceDataFields {
        // GridSourceDataFields properties
        name: string;
        type?: string;
        format?: string;
        map?: string;
        id?: string;
        text?: string;
        source?: Array<any>;
    }// GridSourceDataFields

    export interface GridSource {
        // GridSource properties
        url?: string;
        data?: any;
        localdata?: any;
        datatype?: string;
        type?: string;
        id?: string;
        root?: string;
        record?: string;
        datafields?: Array<GridSourceDataFields>;
        pagenum?: number;
        pagesize?: number;
        pager?: (pagenum?: Number, pagesize?: Number, oldpagenum?: Number) => any;
        sortcolumn?: string;
        sortdirection?: string;
        sort?: (column?: any, direction?: any) => void;
        filter?: (filters?: any, recordsArray?: any) => void;
        addrow?: (rowid?: any, rowdata?: any, position?: any, commit?: Boolean) => void;
        deleterow?: (rowid?: any, commit?: Boolean) => void;
        updaterow?: (rowid, newdata, commit) => void;
        processdata?: (data) => void;
        formatdata?: (data) => any;
        async?: boolean;
    }// GridSource

    export interface GridGetColumn {
        // GridGetColumn properties
        datafield?: string;
        displayfield?: string;
        text?: string;
        sortable?: boolean;
        filterable?: boolean;
        exportable?: boolean;
        editable?: boolean;
        groupable?: boolean;
        resizable?: boolean;
        draggable?: boolean;
        classname?: string;
        cellclassname?: string;
        width?: number;
        menu?: boolean;
    }// GridGetColumn

    export interface GridGetDataInformation {
        // GridGetDataInformation properties
        rowscount?: string;
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
        sortcolumn?: string;
        sortdirection?: any;
    }// GridGetSortInformation

    export interface GridGetPagingInformation {
        // GridGetPagingInformation properties
        pagenum?: string;
        pagesize?: any;
        pagescount?: any;
    }// GridGetPagingInformation

    export interface GridDateNaming {
        // GridDateNaming properties
        names?: Array<String>;
        namesAbbr?: Array<String>;
        namesShort?: Array<String>;
    }// GridDateNaming

    export interface GridLocalizationObject {
        // GridLocalizationObject properties
        pagergotopagestring?: string;
        pagershowrowsstring?: string;
        pagerrangestring?: string;
        pagernextbuttonstring?: string;
        pagerpreviousbuttonstring?: string;
        sortascendingstring?: string;
        sortdescendingstring?: string;
        sortremovestring?: string;
        firstDay?: number;
        percentsymbol?: string;
        currencysymbol?: string;
        currencysymbolposition?: string;
        decimalseparator?: string;
        thousandsseparator?: string;
        days?: GridDateNaming;
        months?: GridDateNaming;
    }// GridLocalizationObject

    export interface GridScrollPosition {
        // GridScrollPosition properties
        top?: number;
        left?: number;
    }// GridScrollPosition

    export interface GridGetGroup {
        // GridGetGroup properties
        group?: number;
        level?: number;
        expanded?: number;
        subgroups?: number;
        subrows?: number;
    }// GridGetGroup

    export interface GridGetCell {
        // GridGetCell properties
        value?: number;
        row?: number;
        column?: number;
    }// GridGetCell

    export interface GridGetSelectedCell {
        // GridGetSelectedCell properties
        rowindex?: number;
        datafield?: string;
    }// GridGetSelectedCell

    export interface GridGetStateColumns {
        // GridGetStateColumns properties
        width?: String | Number;
        hidden?: boolean;
        index?: number;
        pinned?: boolean;
        groupable?: boolean;
        resizable?: boolean;
        draggable?: boolean;
        text?: string;
        align?: string;
        cellsalign?: string;
    }// GridGetStateColumns

    export interface GridGetState {
        // GridGetState properties
        width?: String | Number;
        height?: String | Number;
        pagenum?: number;
        pagesize?: number;
        pagesizeoptions?: Array<String>;
        sortcolumn?: any;
        sortdirection?: any;
        filters?: any;
        groups?: any;
        columns?: GridGetStateColumns;
    }// GridGetState

    export interface GridOptions {
        // GridOptions properties
        altrows?: boolean;
        altstart?: number;
        altstep?: number;
        autoshowloadelement?: boolean;
        autoshowfiltericon?: boolean;
        autoshowcolumnsmenubutton?: boolean;
        clipboard?: boolean;
        closeablegroups?: boolean;
        columnsmenuwidth?: number;
        columnmenuopening?: (menu?: any, datafield?: String, height?: Number) => Boolean;
        columnmenuclosing?: (menu?: any, datafield?: String, height?: Number) => Boolean;
        cellhover?: (cellhtmlElement?: any, x?: Number, y?: Number) => void;
        enablekeyboarddelete?: boolean;
        enableellipsis?: boolean;
        enablemousewheel?: boolean;
        enableanimations?: boolean;
        enabletooltips?: boolean;
        enablehover?: boolean;
        enablebrowserselection?: boolean;
        everpresentrowposition?: string;
        everpresentrowheight?: number;
        everpresentrowactions?: string;
        everpresentrowactionsmode?: string;
        filterrowheight?: number;
        filtermode?: string;
        groupsrenderer?: (text?: String, group?: Number, expanded?: Boolean, data?: any) => String;
        groupcolumnrenderer?: (text?: String, group?: Number, expanded?: Boolean, data?: any) => String;
        groupsexpandedbydefault?: boolean;
        handlekeyboardnavigation?: (event: any) => Boolean;
        pagerrenderer?: () => any[];
        rtl?: boolean;
        showdefaultloadelement?: boolean;
        showfiltercolumnbackground?: boolean;
        showfiltermenuitems?: boolean;
        showpinnedcolumnbackground?: boolean;
        showsortcolumnbackground?: boolean;
        showsortmenuitems?: boolean;
        showgroupmenuitems?: boolean;
        showrowdetailscolumn?: boolean;
        showheader?: boolean;
        showgroupsheader?: boolean;
        showaggregates?: boolean;
        showgroupaggregates?: boolean;
        showeverpresentrow?: boolean;
        showfilterrow?: boolean;
        showemptyrow?: boolean;
        showstatusbar?: boolean;
        statusbarheight?: number;
        showtoolbar?: boolean;
        selectionmode?: string;
        theme?: string;
        toolbarheight?: number;
        autoheight?: boolean;
        autorowheight?: boolean;
        columnsheight?: number;
        deferreddatafields?: Array<String>;
        groupsheaderheight?: number;
        groupindentwidth?: number;
        height?: String | Number;
        pagerheight?: String | Number;
        rowsheight?: number;
        scrollbarsize?: String | Number;
        scrollmode?: string;
        scrollfeedback?: (row: any) => String;
        width?: String | Number;
        autosavestate?: boolean;
        autoloadstate?: boolean;
        columns?: Array<GridColumn>;
        columngroups?: Array<any>;
        columnsmenu?: boolean;
        columnsresize?: boolean;
        columnsautoresize?: boolean;
        columnsreorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editmode?: string;
        filter?: (cellValue?: any, rowData?: any, dataField?: String, filterGroup?: any, defaultFilterResult?: Boolean) => Boolean | any;
        filterable?: boolean;
        groupable?: boolean;
        groups?: Array<String>;
        horizontalscrollbarstep?: number;
        horizontalscrollbarlargestep?: number;
        initrowdetails?: (index?: Number, parentElement?: any, gridElement?: any, datarecord?: any) => void;
        keyboardnavigation?: boolean;
        pagesize?: number;
        pagesizeoptions?: Array<String | Number>;
        pagermode?: string;
        pagerbuttonscount?: number;
        pageable?: boolean;
        rowdetails?: boolean;
        rowdetailstemplate?: any;
        ready?: () => void;
        rendered?: () => void;
        renderstatusbar?: (statusbar?: any) => void;
        rendertoolbar?: (toolbar?: any) => void;
        rendergridrows?: (params?: any) => any;
        sortable?: boolean;
        selectedrowindex?: number;
        selectedrowindexes?: Array<Number>;
        source?: GridSource | any;
        sorttogglestates?: string;
        updatedelay?: number;
        virtualmode?: boolean;
        verticalscrollbarstep?: number;
        verticalscrollbarlargestep?: number;
    }// GridOptions

    export interface jqxGrid extends widget, GridOptions {

        // jqxGrid functions
        autoresizecolumns(type: string): void;
        autoresizecolumn(dataField: string, type: string): void;
        beginupdate(): void;
        clear(): void;
        destroy(): void;
        endupdate(): void;
        ensurerowvisible(rowBoundIndex: number): void;
        focus(): void;
        getcolumnindex(dataField: string): number;
        getcolumn(dataField: string): GridGetColumn;
        getcolumnproperty(dataField: string, propertyName: string): any;
        getrowid(rowBoundIndex: number): string;
        getrowdata(rowBoundIndex: number): any;
        getrowdatabyid(rowID: string): any;
        getrowboundindexbyid(rowID: string): number;
        getrowboundindex(rowDisplayIndex: number): number;
        getrows(): Array<any>;
        getboundrows(): Array<any>;
        getdisplayrows(): Array<any>;
        getdatainformation(): GridGetDataInformation;
        getsortinformation(): GridGetSortInformation;
        getpaginginformation(): GridGetPagingInformation;
        hidecolumn(dataField: string): void;
        hideloadelement(): void;
        hiderowdetails(rowBoundIndex: number): void;
        iscolumnvisible(dataField: string): boolean;
        iscolumnpinned(dataField: string): boolean;
        localizestrings(localizationObject: GridLocalizationObject): void;
        pincolumn(dataField: string): void;
        refreshdata(): void;
        refresh(): void;
        render(): void;
        scrolloffset(top: number, left: number): void;
        scrollposition(): GridScrollPosition;
        showloadelement(): void;
        showrowdetails(rowBoundIndex: number): void;
        setcolumnindex(dataField: string, index: number): void;
        setcolumnproperty(dataField: string, propertyName: any, propertyValue: any): void;
        showcolumn(dataField: string): void;
        unpincolumn(dataField: string): void;
        updatebounddata(type: any): void;
        updating(): boolean;
        getsortcolumn(): string;
        removesort(): void;
        sortby(dataField: string, sortOrder: string): void;
        addgroup(dataField: string): void;
        cleargroups(): void;
        collapsegroup(group: String | Number): void;
        collapseallgroups(): void;
        expandallgroups(): void;
        expandgroup(group: String | Number): void;
        getrootgroupscount(): number;
        getgroup(groupIndex: number): GridGetGroup;
        insertgroup(groupIndex: number, dataField: string): void;
        iscolumngroupable(): boolean;
        removegroupat(groupIndex: number): void;
        removegroup(dataField: string): void;
        addfilter(dataField: string, filterGroup: any, refreshGrid: boolean): void;
        applyfilters(): void;
        clearfilters(): void;
        getfilterinformation(): any;
        removefilter(dataField: string, refreshGrid: boolean): void;
        refreshfilterrow(): void;
        gotopage(pageNumber: number): void;
        gotoprevpage(): void;
        gotonextpage(): void;
        addrow(rowIds: any, data: any, rowPosition: any): void;
        begincelledit(rowBoundIndex: number, dataField: string): void;
        beginrowedit(rowBoundIndex: number): void;
        closemenu(): void;
        deleterow(rowIds: String | Number | Array<String | Number>): void;
        endcelledit(rowBoundIndex: number, dataField: string, confirmChanges: boolean): void;
        endrowedit(rowBoundIndex: number, confirmChanges: boolean): void;
        getcell(rowBoundIndex: number, datafield: string): GridGetCell;
        getcellatposition(left: number, top: number): GridGetCell;
        getcelltext(rowBoundIndex: number, dataField: string): string;
        getcelltextbyid(rowID: string, dataField: string): string;
        getcellvaluebyid(rowID: string, dataField: string): any;
        getcellvalue(rowBoundIndex: number, dataField: string): any;
        isBindingCompleted(): boolean;
        openmenu(dataField: string): void;
        setcellvalue(rowBoundIndex: number, dataField: string, value: any): void;
        setcellvaluebyid(rowID: string, dataField: string, value: any): void;
        showvalidationpopup(rowBoundIndex: number, dataField: string, validationMessage: string): void;
        updaterow(rowIds: String | Number | Array<String | Number>, data: any): void;
        clearselection(): void;
        getselectedrowindex(): number;
        getselectedrowindexes(): Array<Number>;
        getselectedcell(): GridGetSelectedCell;
        getselectedcells(): Array<GridGetSelectedCell>;
        selectcell(rowBoundIndex: number, dataField: string): void;
        selectallrows(): void;
        selectrow(rowBoundIndex: number): void;
        unselectrow(rowBoundIndex: number): void;
        unselectcell(rowBoundIndex: number, dataField: string): void;
        getcolumnaggregateddata(dataField: string, aggregates: Array<any>): string;
        refreshaggregates(): void;
        renderaggregates(): void;
        exportdata(dataType: string, fileName: string, exportHeader: boolean, rows: Array<Number>, exportHiddenColumns: boolean, serverURL: string, charSet: string): void;
        getstate(): GridGetState;
        loadstate(stateObject: any): void;
        savestate(): GridGetState;
    }// jqxGrid

    export interface InputOptions {
        // InputOptions properties
        disabled?: boolean;
        dropDownWidth?: String | Number;
        displayMember?: string;
        height?: String | Number;
        items?: number;
        minLength?: number;
        maxLength?: number;
        opened?: boolean;
        placeHolder?: string;
        popupZIndex?: number;
        query?: string;
        renderer?: (itemValue?: String, inputValue?: String) => String;
        rtl?: boolean;
        searchMode?: string;
        source?: Array<String> | any;
        theme?: string;
        valueMember?: string;
        width?: String | Number;
    }// InputOptions

    export interface jqxInput extends widget, InputOptions {

        // jqxInput functions
        destroy(): void;
        focus(): void;
        selectAll(): void;
        val(value: String | Number): string;
    }// jqxInput

    export interface KanbanColumns {
        // KanbanColumns properties
        text?: string;
        dataField?: string;
        maxItems?: number;
        collapsible?: boolean;
        collapseDirection?: string;
        headerElement?: any;
        collapsedHeaderElement?: any;
        iconClassName?: string;
    }// KanbanColumns

    export interface KanbanSource {
        // KanbanSource properties
        id?: number;
        status?: string;
        text?: string;
        content?: any;
        tags?: string;
        color?: string;
        resourceId?: any;
        className?: string;
    }// KanbanSource

    export interface KanbanUpdateItem {
        // KanbanUpdateItem properties
        status?: string;
        text?: string;
        content?: any;
        tags?: string;
        color?: string;
        resourceId?: any;
        className?: string;
    }// KanbanUpdateItem

    export interface KanbanOptions {
        // KanbanOptions properties
        columnRenderer?: (element?: any, collapsedElement?: any, column?: any) => void;
        columns?: Array<KanbanColumns>;
        connectWith?: string;
        headerHeight?: String | Number;
        headerWidth?: number;
        height?: String | Number;
        itemRenderer?: (element?: Array<any>, item?: any, resource?: any) => void;
        ready?: () => void;
        rtl?: boolean;
        source?: any;
        resources?: Array<any>;
        template?: string;
        templateContent?: any;
        theme?: string;
        width?: String | Number;
    }// KanbanOptions

    export interface jqxKanban extends widget, KanbanOptions {

        // jqxKanban functions
        addItem(newItem: any): void;
        destroy(): void;
        getColumn(dataField: string): KanbanColumns;
        getColumnItems(dataField: string): Array<KanbanSource>;
        getItems(): KanbanSource;
        removeItem(itemId: string): void;
        updateItem(itemId: string, newContent: KanbanUpdateItem): void;
    }// jqxKanban

    export interface KnobLabelsFormatFunction {
        // KnobLabelsFormatFunction properties
        formatFunction?: (label: String | Number) => String | Number;
    }// KnobLabelsFormatFunction

    export interface KnobMarks {
        // KnobMarks properties
        colorProgress?: any;
        colorRemaining?: any;
        drawAboveProgressBar?: boolean;
        minorInterval?: number;
        majorInterval?: number;
        majorSize?: String | Number;
        offset?: string;
        rotate?: boolean;
        size?: String | Number;
        type?: string;
        thickness?: number;
        visible?: boolean;
    }// KnobMarks

    export interface KnobDial {
        // KnobDial properties
        innerRadius?: any;
        outerRadius?: any;
        style?: any;
        startAngle?: number;
        endAngle?: number;
    }// KnobDial

    export interface KnobLabels {
        // KnobLabels properties
        rotate?: any;
        offset?: String | Number;
        visible?: boolean;
        step?: number;
        style?: any;
        formatFunction?: (label: String | Number) => String | Number;
    }// KnobLabels

    export interface KnobProgressBar {
        // KnobProgressBar properties
        offset?: String | Number;
        style?: any;
        size?: String | Number;
        background?: any;
        ranges?: Array<any>;
    }// KnobProgressBar

    export interface KnobPointer {
        // KnobPointer properties
        offset?: String | Number;
        type?: string;
        style?: any;
        size?: number;
        thickness?: number;
        visible?: boolean;
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
        stroke?: string;
        strokeWidth?: number;
    }// KnobStyle

    export interface KnobOptions {
        // KnobOptions properties
        allowValueChangeOnClick?: boolean;
        allowValueChangeOnDrag?: boolean;
        allowValueChangeOnMouseWheel?: boolean;
        changing?: (oldValue: String | Number, newValue: String | Number) => Boolean;
        dragEndAngle?: number;
        dragStartAngle?: number;
        disabled?: boolean;
        dial?: KnobDial;
        endAngle?: number;
        height?: String | Number;
        labels?: KnobLabels;
        marks?: KnobMarks;
        min?: number;
        max?: number;
        progressBar?: KnobProgressBar;
        pointer?: KnobPointer;
        pointerGrabAction?: string;
        rotation?: string;
        startAngle?: number;
        spinner?: KnobSpinner;
        style?: KnobStyle;
        step?: number;
        snapToStep?: boolean;
        value?: number;
        width?: String | Number;
    }// KnobOptions

    export interface jqxKnob extends widget, KnobOptions {

        // jqxKnob functions
        destroy(): void;
        val(value: String | Number): number;
    }// jqxKnob

    export interface LayoutLayout {
        // LayoutLayout properties
        type: string;
        alignment?: string;
        allowClose?: boolean;
        allowPin?: boolean;
        allowUnpin?: boolean;
        contentContainer?: string;
        height?: String | Number;
        initContent?: () => void;
        minHeight?: String | Number;
        minWidth?: String | Number;
        orientation?: string;
        pinnedHeight?: String | Number;
        pinnedWidth?: String | Number;
        selected?: boolean;
        title?: String | Number;
        unpinnedHeight?: String | Number;
        unpinnedWidth?: String | Number;
        width?: String | Number;
        items?: Array<LayoutLayout>;
    }// LayoutLayout

    export interface LayoutOptions {
        // LayoutOptions properties
        contextMenu?: boolean;
        height?: String | Number;
        layout?: Array<LayoutLayout>;
        minGroupHeight?: String | Number;
        minGroupWidth?: String | Number;
        resizable?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: String | Number;
    }// LayoutOptions

    export interface jqxLayout extends widget, LayoutOptions {

        // jqxLayout functions
        destroy(): void;
        loadLayout(Layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxLayout

    export interface LinearGaugeRanges {
        // LinearGaugeRanges properties
        startValue?: number;
        endValue?: number;
        style?: any;
    }// LinearGaugeRanges

    export interface LinearGaugeBackground {
        // LinearGaugeBackground properties
        borderType?: string;
        borderRadius?: any;
        visible?: boolean;
        style?: any;
        showGradient?: boolean;
    }// LinearGaugeBackground

    export interface LinearGaugeLabels {
        // LinearGaugeLabels properties
        position?: string;
        style?: any;
        interval?: number;
        offset?: number;
        formatValue?: (value:any, position:string) => any;
        visible?: boolean;
    }// LinearGaugeLabels

    export interface LinearGaugePointer {
        // LinearGaugePointer properties
        pointerType?: string;
        style?: any;
        size?: String | Number;
        offset?: number;
        visible?: boolean;
    }// LinearGaugePointer

    export interface LinearGaugeTicks {
        // LinearGaugeTicks properties
        size?: String | Number;
        interval?: number;
        visible?: boolean;
        style?: any;
    }// LinearGaugeTicks

    export interface LinearGaugeOptions {
        // LinearGaugeOptions properties
        animationDuration?: number;
        background?: LinearGaugeBackground;
        colorScheme?: string;
        disabled?: boolean;
        easing?: string;
        height?: String | Number;
        int64?: boolean;
        labels?: LinearGaugeLabels;
        min?: number;
        max?: number;
        orientation?: string;
        pointer?: LinearGaugePointer;
        rangesOffset?: number;
        rangeSize?: String | Number;
        ranges?: Array<LinearGaugeRanges>;
        showRanges?: boolean;
        scaleStyle?: any;
        scaleLength?: String | Number;
        ticksOffset?: Array<Number | String>;
        ticksPosition?: string;
        ticksMinor?: LinearGaugeTicks;
        ticksMajor?: LinearGaugeTicks;
        value?: number;
        width?: String | Number;
        disable?: boolean;
        enable?: boolean;
    }// LinearGaugeOptions

    export interface jqxLinearGauge extends widget, LinearGaugeOptions {

        // jqxLinearGauge functions
        val(value: String | Number): number;
    }// jqxLinearGauge

    export interface ListBoxOptions {
        // ListBoxOptions properties
        autoHeight?: boolean;
        allowDrag?: boolean;
        allowDrop?: boolean;
        checkboxes?: boolean;
        disabled?: boolean;
        displayMember?: String | Number;
        dropAction?: string;
        dragStart?: (item:any) => Boolean;
        dragEnd?: (dragItem: any, dropItem: any) => Boolean;
        enableHover?: boolean;
        enableSelection?: boolean;
        equalItemsWidth?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterDelay?: String | Number;
        filterPlaceHolder?: String | Number;
        height?: String | Number;
        hasThreeStates?: boolean;
        itemHeight?: number;
        incrementalSearch?: boolean;
        incrementalSearchDelay?: String | Number;
        multiple?: boolean;
        multipleextended?: boolean;
        renderer?: (index: Number, label: String | Number, value: String | Number) => String;
        rtl?: boolean;
        selectedIndex?: String | Number;
        source?: Array<any>;
        scrollBarSize?: number;
        searchMode?: string;
        theme?: string;
        valueMember?: String | Number;
        width?: String | Number;
    }// ListBoxOptions

    export interface jqxListBox extends widget, ListBoxOptions {

        // jqxListBox functions
        addItem(Item: any): boolean;
        beginUpdate(): void;
        clear(): void;
        clearSelection(): void;
        checkIndex(Index: number): void;
        checkItem(Item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(Item: any): void;
        disableAt(Index: number): void;
        enableItem(Item: any): void;
        enableAt(Index: String | Number): void;
        ensureVisible(item: any): void;
        endUpdate(): void;
        focus(): void;
        getItems(): Array<any>;
        getSelectedItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getItem(Index: number): any;
        getItemByValue(Item: any): any;
        getSelectedItem(): any;
        getSelectedIndex(): number;
        insertAt(Item: any, Index: String | Number): void;
        invalidate(): void;
        indeterminateItem(Item: any): void;
        indeterminateIndex(Index: number): void;
        removeItem(Item: any): void;
        removeAt(Index: String | Number): void;
        render(): void;
        refresh(): void;
        selectItem(Item: any): void;
        selectIndex(Index: String | Number): void;
        updateItem(Item: any, Value: String | Number): void;
        updateAt(item: any, index: String | Number): void;
        unselectIndex(index: String | Number): void;
        unselectItem(item: any): void;
        uncheckIndex(index: String | Number): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: String | Number): string;
    }// jqxListBox

    export interface ListMenuOptions {
        // ListMenuOptions properties
        alwaysShowNavigationArrows?: boolean;
        animationType?: string;
        animationDuration?: String | Number;
        autoSeparators?: boolean;
        backLabel?: String | Number;
        disabled?: boolean;
        enableScrolling?: boolean;
        filterCallback?: (text:string, seachValue:String | Number) => boolean;
        height?: String | Number;
        headerAnimationDuration?: String | Number;
        placeHolder?: String | Number;
        readOnly?: boolean;
        rtl?: boolean;
        roundedCorners?: boolean;
        showNavigationArrows?: boolean;
        showFilter?: boolean;
        showHeader?: boolean;
        showBackButton?: boolean;
        theme?: string;
        width?: String | Number;
    }// ListMenuOptions

    export interface jqxListMenu extends widget, ListMenuOptions {

        // jqxListMenu functions
        back(): void;
        changePage(Item: any): void;
        destroy(): void;
    }// jqxListMenu

    export interface LoaderOptions {
        // LoaderOptions properties
        autoOpen?: boolean;
        height?: String | Number;
        html?: string;
        isModal?: boolean;
        imagePosition?: string;
        rtl?: boolean;
        text?: String | Number;
        textPosition?: string;
        theme?: string;
        width?: String | Number;
    }// LoaderOptions

    export interface jqxLoader extends widget, LoaderOptions {

        // jqxLoader functions
        close(): void;
        open(): void;
    }// jqxLoader

    export interface MaskedInputOptions {
        // MaskedInputOptions properties
        disabled?: boolean;
        height?: String | Number;
        mask?: string;
        promptChar?: String | Number;
        readOnly?: boolean;
        rtl?: boolean;
        theme?: string;
        textAlign?: string;
        value?: String | Number;
        width?: String | Number;
    }// MaskedInputOptions

    export interface jqxMaskedInput extends widget, MaskedInputOptions {

        // jqxMaskedInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        val(value: String | Number): string;
    }// jqxMaskedInput

    export interface MenuOptions {
        // MenuOptions properties
        animationShowDuration?: number;
        animationHideDuration?: number;
        animationHideDelay?: number;
        animationShowDelay?: number;
        autoCloseInterval?: number;
        autoSizeMainItems?: boolean;
        autoCloseOnClick?: boolean;
        autoOpenPopup?: boolean;
        autoOpen?: boolean;
        clickToOpen?: boolean;
        disabled?: boolean;
        enableHover?: boolean;
        easing?: string;
        height?: String | Number;
        keyboardNavigation?: boolean;
        minimizeWidth?: String | Number;
        mode?: string;
        popupZIndex?: String | Number;
        rtl?: boolean;
        showTopLevelArrows?: boolean;
        source?: any;
        theme?: string;
        width?: String | Number;
    }// MenuOptions

    export interface jqxMenu extends widget, MenuOptions {

        // jqxMenu functions
        closeItem(itemID: String | Number): void;
        close(): void;
        disable(itemID: String | Number, value: boolean): void;
        destroy(): void;
        focus(): void;
        minimize(): void;
        open(left: number, top: number): void;
        openItem(itemID: String | Number): void;
        restore(): void;
        setItemOpenDirection(item: String | Number, horizontaldirection: string, verticaldirection: string): void;
    }// jqxMenu

    export interface NavBarOptions {
        // NavBarOptions properties
        columns?: Array<String>;
        disabled?: boolean;
        height?: String | Number;
        minimized?: boolean;
        minimizeButtonPosition?: string;
        minimizedHeight?: String | Number;
        minimizedTitle?: String | Number;
        orientation?: string;
        popupAnimationDelay?: number;
        rtl?: boolean;
        selection?: boolean;
        selectedItem?: String | Number;
        theme?: string;
        width?: String | Number;
    }// NavBarOptions

    export interface jqxNavBar extends widget, NavBarOptions {

        // jqxNavBar functions
        close(): void;
        destroy(): void;
        getSelectedIndex(): number;
        open(): void;
        selectAt(index: String | Number): void;
    }// jqxNavBar

    export interface NavigationBarOptions {
        // NavigationBarOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: number;
        disabled?: boolean;
        expandAnimationDuration?: number;
        expandMode?: string;
        expandedIndexes?: Array<Number>;
        height?: String | Number;
        initContent?: (index:number) => void;
        rtl?: boolean;
        showArrow?: boolean;
        theme?: string;
        toggleMode?: string;
        width?: String | Number;
    }// NavigationBarOptions

    export interface jqxNavigationBar extends widget, NavigationBarOptions {

        // jqxNavigationBar functions
        add(header: String | Number, content: String | Number): void;
        collapseAt(index: String | Number): void;
        disableAt(index: String | Number): void;
        disable(): void;
        destroy(): void;
        expandAt(index: String | Number): void;
        enableAt(index: String | Number): void;
        enable(): void;
        focus(): void;
        getHeaderContentAt(index: String | Number): string;
        getContentAt(index: String | Number): string;
        hideArrowAt(index: String | Number): void;
        invalidate(): void;
        insert(Index: number, header: String | Number, content: String | Number): void;
        refresh(): void;
        render(): void;
        remove(index: String | Number): void;
        setContentAt(index: number, item: String | Number): void;
        setHeaderContentAt(index: number, item: String | Number): void;
        showArrowAt(index: String | Number): void;
        update(index: number, header: String | Number, content: String | Number): void;
        val(value: String | Number): String | Number;
    }// jqxNavigationBar

    export interface NotificationIcon {
        // NotificationIcon properties
        width?: String | Number;
        height?: String | Number;
        url?: string;
        padding?: String | Number;
    }// NotificationIcon

    export interface NotificationOptions {
        // NotificationOptions properties
        appendContainer?: string;
        autoOpen?: boolean;
        animationOpenDelay?: number;
        animationCloseDelay?: number;
        autoClose?: boolean;
        autoCloseDelay?: String | Number;
        blink?: boolean;
        browserBoundsOffset?: number;
        closeOnClick?: boolean;
        disabled?: boolean;
        height?: String | Number;
        hoverOpacity?: number;
        icon?: NotificationIcon;
        notificationOffset?: number;
        opacity?: number;
        position?: string;
        rtl?: boolean;
        showCloseButton?: boolean;
        template?: string;
        theme?: string;
        width?: String | Number;
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
        allowNull?: boolean;
        decimal?: String | Number;
        disabled?: boolean;
        decimalDigits?: String | Number;
        decimalSeparator?: String | Number;
        digits?: String | Number;
        groupSeparator?: String;
        groupSize?: String | Number;
        height?: String | Number;
        inputMode?: string;
        min?: String | Number;
        max?: String | Number;
        negativeSymbol?: string;
        placeHolder?: String | Number;
        promptChar?: string;
        rtl?: boolean;
        readOnly?: boolean;
        spinMode?: string;
        spinButtons?: boolean;
        spinButtonsWidth?: number;
        spinButtonsStep?: String | Number;
        symbol?: string;
        symbolPosition?: string;
        textAlign?: string;
        template?: string;
        theme?: string;
        width?: String | Number;
    }// NumberInputOptions

    export interface jqxNumberInput extends widget, NumberInputOptions {

        // jqxNumberInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        getDecimal(): number;
        setDecimal(index: String | Number): void;
        val(value: String | Number): number;
    }// jqxNumberInput

    export interface PanelOptions {
        // PanelOptions properties
        autoUpdate?: boolean;
        disabled?: boolean;
        height?: String | Number;
        rtl?: boolean;
        sizeMode?: string;
        scrollBarSize?: String | Number;
        theme?: string;
        width?: String | Number;
    }// PanelOptions

    export interface jqxPanel extends widget, PanelOptions {

        // jqxPanel functions
        append(HTMLElement: any): void;
        clearcontent(): void;
        destroy(): void;
        focus(): void;
        getScrollHeight(): number;
        getVScrollPosition(): number;
        getScrollWidth(): number;
        getHScrollPosition(): number;
        prepend(HTMLElement: any): void;
        remove(HTMLElement: any): void;
        scrollTo(top: String | Number, left: String | Number): void;
    }// jqxPanel

    export interface PasswordInpitLocalization {
        // PasswordInpitLocalization properties
        passwordStrengthString?: string;
        tooShort?: string;
        weak?: string;
        fair?: string;
        good?: string;
        strong?: string;
    }// PasswordInpitLocalization

    export interface PasswordInpitStrengthColors {
        // PasswordInpitStrengthColors properties
        tooShort?: string;
        weak?: string;
        fair?: string;
        good?: string;
        strong?: string;
    }// PasswordInpitStrengthColors

    export interface PasswordInputOptions {
        // PasswordInputOptions properties
        disabled?: boolean;
        height?: String | Number;
        localization?: PasswordInpitLocalization;
        maxLength?: String | Number;
        placeHolder?: String | Number;
        passwordStrength?: (password:String | Number, characters:any, defaultStrength:String) => string;
        rtl?: boolean;
        strengthColors?: PasswordInpitStrengthColors;
        showStrength?: boolean;
        showStrengthPosition?: string;
        strengthTypeRenderer?: (password:String | Number, characters:any, defaultStrength:String) => string;
        showPasswordIcon?: boolean;
        theme?: string;
        width?: String | Number;
    }// PasswordInputOptions

    export interface jqxPasswordInput extends widget, PasswordInputOptions {

        // jqxPasswordInput functions
        render(): void;
        refresh(): void;
        val(value: string): string;
    }// jqxPasswordInput

    export interface PopoverOptions {
        // PopoverOptions properties
        arrowOffsetValue?: number;
        animationOpenDelay?: string;
        animationCloseDelay?: String | Number;
        autoClose?: boolean;
        animationType?: string;
        height?: String | Number;
        initContent?: () => void;
        isModal?: boolean;
        offset?: any;
        position?: string;
        rtl?: boolean;
        selector?: string;
        showArrow?: boolean;
        showCloseButton?: boolean;
        width?: String | Number;
        title?: String | Number;
        theme?: string;
    }// PopoverOptions

    export interface jqxPopover extends widget, PopoverOptions {

        // jqxPopover functions
        close(): void;
        destroy(): void;
        open(): void;
    }// jqxPopover

    export interface ProgressBarColorRanges {
        // ProgressBarColorRanges properties
        stop: String | Number;
        color: string;
    }// ProgressBarColorRanges

    export interface ProgressBarOptions {
        // ProgressBarOptions properties
        animationDuration?: number;
        colorRanges?: Array<ProgressBarColorRanges>;
        disabled?: boolean;
        height?: String  | Number;
        layout?: string;
        max?: String  | Number;
        min?: String | Number;
        orientation?: string;
        rtl?: boolean;
        renderText?: any;
        showText?: boolean;
        template?: string;
        theme?: string;
        value?: String | Number;
        width?: String | Number;
    }// ProgressBarOptions

    export interface jqxProgressBar extends widget, ProgressBarOptions {

        // jqxProgressBar functions
        actualValue(value: String | Number): void;
        destroy(): void;
        val(value: String | Number): number;
    }// jqxProgressBar

    export interface RadioButtonOptions {
        // RadioButtonOptions properties
        animationShowDelay?: number;
        animationHideDelay?: number;
        boxSize?: Size;
        checked?: boolean;
        disabled?: boolean;
        enableContainerClick?: boolean;
        groupName?: string;
        hasThreeStates?: boolean;
        height?: Size;
        rtl?: boolean;
        theme?: string;
        width?: Size;
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
        val(value: boolean): boolean;
    }// jqxRadioButton

    export interface RangeSelectorRange {
        // RangeSelectorRange properties
        from?: String | Number;
        to?: String | Number;
        min?: String | Number;
        max?: String | Number;
    }// RangeSelectorRange

    export interface RangeSelectorGetRange {
        // RangeSelectorGetRange properties
        from?: String | Number;
        to?: String | Number;
    }// RangeSelectorGetRange

    export interface RangeSelectorOptions {
        // RangeSelectorOptions properties
        disabled?: boolean;
        height?: String | Number;
        labelFormat?: string;
        labelsFormatFunction?: any;
        labelPrecision?: number;
        moveOnClick?: boolean;
        markerRenderer?: any;
        markerPrecision?: number;
        majorLabelRenderer?: any;
        markerFormat?: string;
        majorTicksInterval?: String | Number;
        minorTicksInterval?: number;
        max?: String | Number;
        min?: String | Number;
        padding?: String | Number;
        range?: RangeSelectorRange;
        resizable?: boolean;
        rtl?: boolean;
        showMinorTicks?: boolean;
        snapToTicks?: boolean;
        showMajorLabels?: boolean;
        showMarkers?: boolean;
        theme?: string;
        width?: String | Number;
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
        count?: number;
        disabled?: boolean;
        height?: String | Number;
        itemHeight?: number;
        itemWidth?: number;
        precision?: number;
        singleVote?: boolean;
        value?: number;
        width?: String | Number;
    }// RatingOptions

    export interface jqxRating extends widget, RatingOptions {

        // jqxRating functions
        disable(): void;
        enable(): void;
        getValue(): number;
        setValue(value: number): void;
        val(value: number): number;
    }// jqxRating

    export interface ResponseBrowser {
        // ResponseBrowser properties
        name: string;
        accessName: string;
        version: string;
        canvas: boolean;
        svg: boolean;
        vml: boolean;
    }// ResponseBrowser

    export interface ResponseDevice {
        // ResponseDevice properties
        type: string;
        touch: boolean;
        width: number;
        height: number;
        availWidth: number;
        availHeight: number;
    }// ResponseDevice

    export interface ResponseDocument {
        // ResponseDocument properties
        width: number;
        height: number;
    }// ResponseDocument

    export interface ResponseOs {
        // ResponseOs properties
        name: string;
        version: string;
        platform: string;
    }// ResponseOs

    export interface ResponsePointerPosition {
        // ResponsePointerPosition properties
        left: number;
        top: number;
    }// ResponsePointerPosition

    export interface ResponseViewPort {
        // ResponseViewPort properties
        width: number;
        height: number;
    }// ResponseViewPort

    export interface ResponseOffset {
        // ResponseOffset properties
        left: number;
        top: number;
        right: number;
        bottom: number;
    }// ResponseOffset

    export interface ResponseBreakpoint {
        // ResponseBreakpoint properties
        colWidths?: Array<Number>;
        colOffsets?: Array<Number>;
        colClass?: string;
        margin?: ResponseOffset;
        padding?: ResponseOffset;
    }// ResponseBreakpoint

    export interface ResponseOptions {
        // ResponseOptions properties
        browser?: ResponseBrowser;
        device?: ResponseDevice;
        document?: ResponseDocument;
        destroyProperty?: () => void;
        resize?: any;
        os?: ResponseOs;
    }// ResponseOptions

    export interface jqxResponse extends widget, ResponseOptions {

        // jqxResponse functions
        refresh(): void;
        responsive(container: string, colWidths: Array<Number>, colOffsets: Array<Number>, colClass: string, deviceTypes: string, margin: ResponseOffset, padding: ResponseOffset, breakpoints: Array<ResponseBreakpoint>): void;
        isHidden(element: any): boolean;
        inViewPort(element: any): boolean;
        pointerDown(element: any, callback: any): void;
        pointerMove(element: any, callback: any): void;
        pointerUp(element: any, callback: any): void;
        scroll(): Object;
        viewPort(): Object;
    }// jqxResponse

    export interface ResponsivePanelOptions {
        // ResponsivePanelOptions properties
        animationDirection?: string;
        animationHideDelay?: String | Number;
        animationShowDelay?: String | Number;
        animationType?: string;
        autoClose?: boolean;
        collapseBreakpoint?: number;
        collapseWidth?: number;
        height?: String | Number;
        initContent?: () => void;
        theme?: string;
        toggleButton?: String | any;
        toggleButtonSize?: String | Number;
        width?: String | Number;
    }// ResponsivePanelOptions

    export interface jqxResponsivePanel extends widget, ResponsivePanelOptions {

        // jqxResponsivePanel functions
        close(): void;
        destroy(): void;
        isCollapsed(): boolean;
        isOpened(): boolean;
        open(): void;
        refresh(): void;
        render(): void;
    }// jqxResponsivePanel

    export interface RibbonItem {

    }// RibbonItem

    export interface RibbonOptions {
        // RibbonOptions properties
        animationType?: string;
        animationDelay?: String | Number;
        disabled?: boolean;
        height?: String | Number;
        initContent?: (index: any) => void;
        mode?: string;
        popupCloseMode?: string;
        position?: string;
        rtl?: boolean;
        selectedIndex?: number;
        selectionMode?: string;
        scrollPosition?: string;
        scrollStep?: number;
        scrollDelay?: number;
        theme?: string;
        width?: String | Number;
    }// RibbonOptions

    export interface jqxRibbon extends widget, RibbonOptions {

        // jqxRibbon functions
        addAt(index: number, item: RibbonItem): void;
        clearSelection(): void;
        disableAt(index: number): void;
        destroy(): void;
        enableAt(index: number): void;
        hideAt(index: number): void;
        removeAt(index: number): void;
        render(): void;
        refresh(): void;
        selectAt(index: number): void;
        showAt(index: number): void;
        setPopupLayout(index: number, layout: any, width: String | Number, height: String | Number): void;
        updateAt(index: number, item: RibbonItem): void;
        val(value: string): string;
    }// jqxRibbon

    export interface SchedulerAppointmentDataFields {
        // SchedulerAppointmentDataFields properties
        allDay?: boolean;
        background?: string;
        borderColor?: string;
        color?: string;
        description?: string;
        draggable?: boolean;
        from?: string;
        hidden?: boolean;
        id?: String | Number;
        location?: string;
        recurrencePattern?: SchedulerRecurrencePattern;
        recurrenceException?: string;
        resizable?: boolean;
        resourceId?: String | Number;
        readOnly?: boolean;
        subject?: string;
        style?: string;
        status?: string;
        to?: string;
        tooltip?: string;
        timeZone?: string;
    }// SchedulerAppointmentDataFields

    export interface SchedulerRecurrencePattern {

    }// SchedulerRecurrencePattern

    export interface SchedulerChangedAppointments {

    }// SchedulerChangedAppointments

    export interface SchedulerExportSettings {

    }// SchedulerExportSettings

    export interface SchedulerResources {

    }// SchedulerResources

    export interface SchedulerStatuses {

    }// SchedulerStatuses

    export interface SchedulerGetSelection {

    }// SchedulerGetSelection

    export interface SchedulerOptions {
        // SchedulerOptions properties
        appointmentOpacity?: boolean;
        appointmentsMinHeight?: number;
        appointmentDataFields?: SchedulerAppointmentDataFields;
        appointmentTooltips?: boolean;
        columnsHeight?: number;
        contextMenu?: boolean;
        contextMenuOpen?: (menu: any, appointment: any, event: any) => void;
        contextMenuClose?: (menu: any, appointment: any, event: any) => void;
        contextMenuItemClick?: (menu: any, appointment: any, event: any) => Boolean;
        contextMenuCreate?: (menu: any, appointment: any, event: any) => void;
        changedAppointments?: Array<SchedulerChangedAppointments>;
        disabled?: boolean;
        date?: any;
        dayNameFormat?: string;
        enableHover?: boolean;
        editDialog?: boolean;
        editDialogDateTimeFormatString?: string;
        editDialogDateFormatString?: string;
        editDialogOpen?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        editDialogCreate?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        editDialogKeyDown?: (dialog?: any, fields?: any, editAppointment?: any, event?: any) => Boolean;
        editDialogClose?: (dialog?: any, fields?: any, editAppointment?: any) => void;
        exportSettings?: SchedulerExportSettings;
        height?: String | Number;
        legendPosition?: string;
        legendHeight?: number;
        localization?: any;
        min?: any;
        max?: any;
        ready?: () => void;
        renderAppointment?: (data: any) => any;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        resources?: SchedulerResources;
        rowsHeight?: number;
        showToolbar?: boolean;
        showLegend?: boolean;
        scrollBarSize?: number;
        source?: any;
        statuses?: SchedulerStatuses;
        touchRowsHeight?: number;
        theme?: string;
        touchAppointmentsMinHeight?: number;
        touchScrollBarSize?: number;
        timeZone?: string;
        touchDayNameFormat?: string;
        toolBarRangeFormat?: string;
        toolBarRangeFormatAbbr?: string;
        toolbarHeight?: number;
        views?: Array<any>;
        view?: string;
        width?: String | Number;
    }// SchedulerOptions

    export interface jqxScheduler extends widget, SchedulerOptions {

        // jqxScheduler functions
        addAppointment(item: SchedulerAppointmentDataFields): void;
        beginAppointmentsUpdate(): void;
        clearAppointmentsSelection(): void;
        clearSelection(): void;
        closeMenu(): void;
        closeDialog(): void;
        deleteAppointment(appointmenId: string): void;
        destroy(): void;
        endAppointmentsUpdate(): void;
        ensureAppointmentVisible(id: string): void;
        ensureVisible(item: any, resourceId: string): void;
        exportData(format: string): any;
        focus(): void;
        getAppointmentProperty(appointmentId: string, name: string): any;
        getSelection(): SchedulerGetSelection;
        getAppointments(): Array<SchedulerAppointmentDataFields>;
        getDataAppointments(): Array<any>;
        hideAppointmentsByResource(resourcesId: string): void;
        openMenu(left: number, top: number): void;
        openDialog(left: number, top: number): void;
        selectAppointment(appointmentId: string): void;
        setAppointmentProperty(appointmentId: string, name: string, value: any): void;
        selectCell(date: any, allday: boolean, resourceId: string): void;
        showAppointmentsByResource(resourceId: string): void;
        scrollWidth(): number;
        scrollHeight(): number;
        scrollLeft(left: number): void;
        scrollTop(top: number): void;
    }// jqxScheduler

    export interface ScrollBarOptions {
        // ScrollBarOptions properties
        disabled?: boolean;
        height?: String | Number;
        largestep?: number;
        min?: number;
        max?: number;
        rtl?: boolean;
        step?: number;
        showButtons?: boolean;
        thumbMinSize?: number;
        theme?: string;
        vertical?: boolean;
        value?: number;
        width?: String | Number;
    }// ScrollBarOptions

    export interface jqxScrollBar extends widget, ScrollBarOptions {

        // jqxScrollBar functions
        destroy(): void;
        isScrolling(): boolean;
        setPosition(index: number): void;
    }// jqxScrollBar

    export interface ScrollViewOptions {
        // ScrollViewOptions properties
        animationDuration?: number;
        bounceEnabled?: boolean;
        buttonsOffset?: Array<Number>;
        currentPage?: number;
        disabled?: boolean;
        height?: String | Number;
        moveThreshold?: number;
        showButtons?: boolean;
        slideShow?: boolean;
        slideDuration?: number;
        theme?: string;
        width?: String | Number;
    }// ScrollViewOptions

    export interface jqxScrollView extends widget, ScrollViewOptions {

        // jqxScrollView functions
        back(): void;
        changePage(index: number): void;
        forward(): void;
        refresh(): void;
    }// jqxScrollView

    export interface SliderOptions {
        // SliderOptions properties
        buttonsPosition?: string;
        disabled?: boolean;
        height?: String | Number;
        layout?: string;
        mode?: string;
        minorTicksFrequency?: number;
        minorTickSize?: number;
        max?: number;
        min?: number;
        rangeSlider?: boolean;
        rtl?: boolean;
        step?: number;
        showTicks?: boolean;
        showMinorTicks?: boolean;
        showTickLabels?: boolean;
        showButtons?: boolean;
        showRange?: boolean;
        template?: string;
        theme?: string;
        ticksPosition?: string;
        ticksFrequency?: number;
        tickSize?: number;
        tickLabelFormatFunction?: (value: any) => String;
        tooltip?: boolean;
        tooltipHideDelay?: number;
        tooltipPosition?: string;
        tooltipFormatFunction?: (value: any) => string;
        value?: any;
        values?: Array<Number>;
        width?: String | Number;
    }// SliderOptions

    export interface jqxSlider extends widget, SliderOptions {

        // jqxSlider functions
        destroy(): void;
        decrementValue(): void;
        disable(): void;
        enable(): void;
        focus(): void;
        getValue(): number;
        incrementValue(): void;
        setValue(index: number): void;
        val(value: string): string;
    }// jqxSlider

    export interface SortableCursorAt {
        // SortableCursorAt properties
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }// SortableCursorAt

    export interface SortableOptions {
        // SortableOptions properties
        appendTo?: string;
        axis?: String | Number;
        cancelProperty?: string;
        connectWith?: String | Boolean;
        containment?: String | Boolean;
        cursor?: string;
        cursorAt?: SortableCursorAt;
        delay?: number;
        disabled?: boolean;
        distance?: number;
        dropOnEmpty?: boolean;
        forceHelperSize?: boolean;
        forcePlaceholderSize?: boolean;
        grid?: Array<Number>;
        handle?: String | Boolean;
        helper?: string;
        items?: string;
        opacity?: Number | Boolean;
        placeholderShow?: String | Boolean;
        revert?: Number | Boolean;
        scroll?: boolean;
        scrollSensitivity?: number;
        scrollSpeed?: number;
        tolerance?: string;
        zIndex?: number;
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
        size?: number;
        min?: number;
        collapsible?: boolean;
        collapsed?: boolean;
    }// SplitterPanel

    export interface SplitterOptions {
        // SplitterOptions properties
        disabled?: boolean;
        height?: String | Number;
        orientation?: string;
        panels?: Array<SplitterPanel>;
        resizable?: boolean;
        splitBarSize?: number;
        showSplitBar?: boolean;
        theme?: string;
        width?: String | Number;
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
        checked?: boolean;
        disabled?: boolean;
        height?: String | Number;
        orientation?: string;
        onLabel?: string;
        offLabel?: string;
        thumbSize?: string;
        width?: String | Number;
    }// SwitchButtonOptions

    export interface jqxSwitchButton extends widget, SwitchButtonOptions {

        // jqxSwitchButton functions
        check(): void;
        disable(): void;
        enable(): void;
        toggle(): void;
        uncheck(): void;
        val(value: boolean): boolean;
    }// jqxSwitchButton

    export interface TabsOptions {
        // TabsOptions properties
        animationType?: string;
        autoHeight?: boolean;
        closeButtonSize?: number;
        collapsible?: boolean;
        contentTransitionDuration?: number;
        disabled?: boolean;
        enabledHover?: boolean;
        enableScrollAnimation?: boolean;
        height?: String | Number;
        initTabContent?: (tab?: Number) => void;
        keyboardNavigation?: boolean;
        position?: string;
        reorder?: boolean;
        rtl?: boolean;
        scrollAnimationDuration?: number;
        selectedItem?: number;
        selectionTracker?: boolean;
        scrollable?: boolean;
        scrollPosition?: string;
        scrollStep?: number;
        showCloseButtons?: boolean;
        toggleMode?: string;
        theme?: string;
        width?: String | Number;
    }// TabsOptions

    export interface jqxTabs extends widget, TabsOptions {

        // jqxTabs functions
        addAt(index: number, title: string, content: string): void;
        addFirst(htmlElement: any): void;
        addLast(htmlElement: any): void;
        collapse(): void;
        disable(): void;
        disableAt(index: number): void;
        destroy(): void;
        ensureVisible(index: number): void;
        enableAt(index: number): void;
        expand(): void;
        enable(): void;
        focus(): void;
        getTitleAt(index: number): string;
        getContentAt(index: number): any;
        hideCloseButtonAt(index: number): void;
        hideAllCloseButtons(): void;
        length(): number;
        removeAt(index: number): void;
        removeFirst(): void;
        removeLast(): void;
        select(index: number): void;
        setContentAt(index: number, htmlElement: string): void;
        setTitleAt(index: number, htmlElement: string): void;
        showCloseButtonAt(index: number): void;
        showAllCloseButtons(): void;
        val(value: string): string;
    }// jqxTabs

    export interface TagCloudSource {
        // TagCloudSource properties
        url?: string;
        data?: any;
        localdata?: string;
        datatype?: string;
        type?: string;
        id?: string;
        root?: string;
        record?: string;
    }// TagCloudSource

    export interface TagCloudOptions {
        // TagCloudOptions properties
        alterTextCase?: string;
        disabled?: boolean;
        displayLimit?: number;
        displayMember?: string;
        displayValue?: boolean;
        fontSizeUnit?: string;
        height?: String | Number;
        maxColor?: string;
        maxFontSize?: number;
        maxValueToDisplay?: number;
        minColor?: string;
        minFontSize?: number;
        minValueToDisplay?: number;
        rtl?: boolean;
        sortBy?: string;
        sortOrder?: string;
        source?: TagCloudSource;
        tagRenderer?: (itemData: any, minValue: Number, valueRange: Number) => any;
        takeTopWeightedItems?: boolean;
        textColor?: string;
        urlBase?: string;
        urlMember?: string;
        valueMember?: string;
        width?: String | Number;
    }// TagCloudOptions

    export interface jqxTagCloud extends widget, TagCloudOptions {

        // jqxTagCloud functions
        destroy(): void;
        findTagIndex(tag: string): number;
        getHiddenTagsList(): Array<any>;
        getRenderedTags(): Array<any>;
        getTagsList(): Array<any>;
        hideItem(index: number): void;
        insertAt(index: number, item: any): void;
        removeAt(index: number): void;
        updateAt(index: number, item: any): void;
        showItem(index: number): void;
    }// jqxTagCloud

    export interface ToggleButtonOptions {
        // ToggleButtonOptions properties
        delay?: number;
        disabled?: boolean;
        height?: Size;
        imgSrc?: string;
        imgWidth?: Size;
        imgHeight?: Size;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: boolean;
        textPosition?: string;
        textImageRelation?: string;
        theme?: string;
        template?: string;
        toggled?: boolean;
        width?: Size;
        value?: string;
    }// ToggleButtonOptions

    export interface jqxToggleButton extends widget, ToggleButtonOptions {

        // jqxToggleButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: string): string;
    }// jqxToggleButton

    export interface TextAreaOptions {
        // TextAreaOptions properties
        disabled?: boolean;
        displayMember?: string;
        dropDownWidth?: String | Number;
        height?: String | Number;
        items?: number;
        maxLength?: number;
        minLength?: number;
        opened?: boolean;
        placeHolder?: string;
        popupZIndex?: number;
        query?: string;
        renderer?: (itemValue: any, inputValue: any) => any;
        roundedCorners?: boolean;
        rtl?: boolean;
        scrollBarSize?: number;
        searchMode?: string;
        source?: any;
        theme?: string;
        valueMember?: string;
        width?: String | Number;
    }// TextAreaOptions

    export interface jqxTextArea extends widget, TextAreaOptions {

        // jqxTextArea functions
        destroy(): void;
        focus(): void;
        refresh(): void;
        render(): void;
        selectAll(): void;
        val(value: string): string;
    }// jqxTextArea

    export interface ToolBarToolItem {
        // ToolBarToolItem properties
        type?: string;
        tool?: any;
        separatorAfterWidget?: boolean;
        minimizable?: boolean;
        minimized?: boolean;
        menuTool?: any;
        menuSeparator?: any;
    }// ToolBarToolItem

    export interface ToolBarOptions {
        // ToolBarOptions properties
        disabled?: boolean;
        height?: String | Number;
        initTools?: (type?: String, index?: Number, tool?: any, menuToolIninitialization?: Boolean) => void;
        minimizeWidth?: number;
        minWidth?: String | Number;
        maxWidth?: String | Number;
        rtl?: boolean;
        tools?: string;
        theme?: string;
        width?: String | Number;
    }// ToolBarOptions

    export interface jqxToolBar extends widget, ToolBarOptions {

        // jqxToolBar functions
        addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: String, tool?: any, menuToolIninitialization?: Boolean) => void): void;
        disableTool(index: number, disable: boolean): void;
        destroy(): void;
        destroyTool(index: number): void;
        getTools(): Array<ToolBarToolItem>;
        render(): void;
        refresh(): void;
    }// jqxToolBar

    export interface TooltipOptions {
        // TooltipOptions properties
        absolutePositionX?: number;
        absolutePositionY?: number;
        autoHide?: boolean;
        autoHideDelay?: number;
        animationShowDelay?: String | Number;
        animationHideDelay?: String | Number;
        content?: string;
        closeOnClick?: boolean;
        disabled?: boolean;
        enableBrowserBoundsDetection?: boolean;
        height?: String | Number;
        left?: number;
        name?: string;
        opacity?: number;
        position?: string;
        rtl?: boolean;
        showDelay?: number;
        showArrow?: boolean;
        top?: String | Number;
        trigger?: string;
        theme?: string;
        width?: String | Number;
    }// TooltipOptions

    export interface jqxTooltip extends widget, TooltipOptions {

        // jqxTooltip functions
        close(index: number): void;
        destroy(): void;
        open(): void;
        refresh(): void;
    }// jqxTooltip

    export interface TouchOptions {
        // TouchOptions properties
        orientationChangeEnabled?: boolean;
        swipeMin?: number;
        swipeMax?: number;
        swipeDelay?: number;
        tapHoldDelay?: number;
    }// TouchOptions

    export interface jqxTouch extends widget, TouchOptions {

        // jqxTouch functions

    }// jqxTouch

    export interface TreeItem {
        // TreeItem properties
        label?: string;
        value?: string;
        disabled?: boolean;
        checked?: boolean;
        element?: any;
        parentElement?: any;
        isExpanded?: boolean;
        selected?: boolean;
    }// TreeItem

    export interface TreeOffset {
        // TreeOffset properties
        top?: number;
        left?: number;
    }// TreeOffset

    export interface TreeOptions {
        // TreeOptions properties
        animationShowDuration?: number;
        animationHideDuration?: number;
        allowDrag?: boolean;
        allowDrop?: boolean;
        checkboxes?: boolean;
        dragStart?: (item: any) => Boolean;
        dragEnd?: (dragItem?: any, dropItem?: any, args?: any, dropPosition?: any, tree?: any) => Boolean;
        disabled?: boolean;
        easing?: string;
        enableHover?: boolean;
        height?: String | Number;
        hasThreeStates?: boolean;
        incrementalSearch?: boolean;
        keyboardNavigation?: boolean;
        rtl?: boolean;
        source?: any;
        toggleIndicatorSize?: number;
        toggleMode?: string;
        theme?: string;
        width?: String | Number;
    }// TreeOptions

    export interface jqxTree extends widget, TreeOptions {

        // jqxTree functions
        addBefore(item: any, id: string): void;
        addAfter(item: any, id: string): void;
        addTo(item: any, id: string): void;
        clear(): void;
        checkAll(): void;
        checkItem(item: any, checked: boolean): void;
        collapseAll(): void;
        collapseItem(item: any): void;
        destroy(): void;
        disableItem(item: any): void;
        ensureVisible(item: Object): void;
        enableItem(item: any): void;
        expandAll(): void;
        expandItem(item: any): void;
        focus(): void;
        getCheckedItems(): Array<TreeItem>;
        getUncheckedItems(): Array<TreeItem>;
        getItems(): Array<TreeItem>;
        getItem(element: any): TreeItem;
        getSelectedItem(): Array<TreeItem>;
        getPrevItem(): Array<TreeItem>;
        getNextItem(): Array<TreeItem>;
        hitTest(left: number, top: number): any;
        removeItem(item: any): void;
        render(): void;
        refresh(): void;
        selectItem(item: any): void;
        uncheckAll(): void;
        uncheckItem(item: any): void;
        updateItem(item: any, newItem: any): void;
        val(value: string): string;
    }// jqxTree

    export interface TreeGridEditSettings {
        // TreeGridEditSettings properties
        saveOnPageChange?: boolean;
        saveOnBlur?: boolean;
        saveOnSelectionChange?: boolean;
        cancelOnEsc?: boolean;
        editSingleCell?: boolean;
        editOnDoubleClick?: boolean;
        editOnF2?: boolean;
    }// TreeGridEditSettings

    export interface TreeGridExportSettings {
        // TreeGridExportSettings properties
        columnsHeader?: boolean;
        hiddenColumns?: boolean;
        serverURL?: String | any;
        characterSet?: string;
        collapsedRecords?: boolean;
        recordsInView?: boolean;
        fileName?: string;
    }// TreeGridExportSettings

    export interface TreeGridGetRow {
        // TreeGridGetRow properties
        checked?: boolean;
        expanded?: boolean;
        icon?: string;
        leaf?: boolean;
        level?: number;
        parent?: any;
        records?: Array<any>;
        selected?: boolean;
        uid?: String | Number;
    }// TreeGridGetRow

    export interface TreeGridScrollOffset {
        // TreeGridScrollOffset properties
        top?: number;
        left?: number;
    }// TreeGridScrollOffset

    export interface TreeGridOptions {
        // TreeGridOptions properties
        altRows?: boolean;
        autoRowHeight?: boolean;
        aggregatesHeight?: number;
        autoShowLoadElement?: boolean;
        checkboxes?: boolean;
        columnsHeight?: number;
        columns?: Array<any>;
        columnGroups?: Array<any>;
        columnsResize?: boolean;
        columnsReorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editSettings?: TreeGridEditSettings;
        exportSettings?: TreeGridExportSettings;
        enableHover?: boolean;
        enableBrowserSelection?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterMode?: string;
        height?: String | Number;
        hierarchicalCheckboxes?: boolean;
        icons?: boolean;
        incrementalSearch?: boolean;
        localization?: any;
        pagerHeight?: number;
        pageSize?: number;
        pageSizeOptions?: Array<Number | String>;
        pageable?: boolean;
        pagerPosition?: string;
        pagerMode?: string;
        pageSizeMode?: string;
        pagerButtonsCount?: number;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: boolean;
        rowDetailsRenderer?: (key: number, dataRow: number) => any;
        renderToolbar?: (toolBar?: any) => void;
        renderStatusbar?: (statusBar?: any) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        source?: any;
        sortable?: boolean;
        showAggregates?: boolean;
        showSubAggregates?: boolean;
        showToolbar?: boolean;
        showStatusbar?: boolean;
        statusBarHeight?: number;
        scrollBarSize?: number;
        selectionMode?: string;
        showHeader?: boolean;
        theme?: string;
        toolbarHeight?: number;
        width?: String | Number;
        virtualModeCreateRecords?: (expandedRecord?: any, done?: any) => void;
        virtualModeRecordCreating?: (record?: any) => any;
    }// TreeGridOptions

    export interface jqxTreeGrid extends widget, TreeGridOptions {

        // jqxTreeGrid functions
        addRow(rowKey: string, rowData: any, rowPosition: string, parent: string): void;
        addFilter(dataField: string, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowKey: string): void;
        beginCellEdit(rowKey: string, dataField: string): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        checkRow(rowKey: string): void;
        collapseRow(rowKey: string): void;
        collapseAll(): void;
        destroy(): void;
        deleteRow(rowKey: string): void;
        expandRow(rowKey: String | Number): void;
        expandAll(): void;
        endUpdate(): void;
        ensureRowVisible(rowKey: string): void;
        endRowEdit(rowKey: string, cancelChanges: boolean): void;
        endCellEdit(rowKey: string, dataField: string, cancelChanges: boolean): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: string, propertyName: string): any;
        goToPage(pageIndex: number): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getKey(row: any): string;
        getRow(rowKey: string): TreeGridGetRow;
        getRows(): Array<TreeGridGetRow>;
        getCheckedRows(): Array<TreeGridGetRow>;
        getView(): Array<TreeGridGetRow>;
        getCellValue(rowKey: string, dataField: string): any;
        hideColumn(dataField: string): void;
        isBindingCompleted(): boolean;
        lockRow(rowKey: string): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: string): void;
        scrollOffset(top: number, left: number): TreeGridScrollOffset;
        setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
        showColumn(dataField: string): void;
        selectRow(rowId: string): void;
        setCellValue(rowId: string, dataField: string, cellValue: any): void;
        sortBy(dataField: string, sortOrder: string): void;
        updating(): boolean;
        updateBoundData(): void;
        unselectRow(rowId: string): void;
        uncheckRow(rowId: string): void;
        updateRow(rowId: string, data: any): void;
        unlockRow(rowId: string): void;
    }// jqxTreeGrid

    export interface TreeMapColorRanges {
        // TreeMapColorRanges properties
        color?: string;
        min?: number;
        max?: number;
    }// TreeMapColorRanges

    export interface TreeMapLegendPosition {
        // TreeMapLegendPosition properties
        x?: String | Number;
        y?: String | Number;
    }// TreeMapLegendPosition

    export interface TreeMapOptions {
        // TreeMapOptions properties
        baseColor?: string;
        colorRanges?: Array<TreeMapColorRanges>;
        colorRange?: number;
        colorMode?: string;
        displayMember?: string;
        height?: String | Number;
        hoverEnabled?: boolean;
        headerHeight?: number;
        legendLabel?: string;
        legendPosition?: TreeMapLegendPosition;
        legendScaleCallback?: any;
        renderCallbacks?: any;
        selectionEnabled?: boolean;
        showLegend?: boolean;
        source?: any;
        theme?: string;
        valueMember?: string;
        width?: String | Number;
    }// TreeMapOptions

    export interface jqxTreeMap extends widget, TreeMapOptions {

        // jqxTreeMap functions
        destroy(): void;
        render(): void;
    }// jqxTreeMap

    export interface ValidatorRule {
        // ValidatorRule properties
        input?: string;
        message?: string;
        action?: string;
        rule?: String | any;
        position?: string;
        hintRender?: any;
    }// ValidatorRule

    export interface ValidatorOptions {
        // ValidatorOptions properties
        arrow?: boolean;
        animation?: string;
        animationDuration?: number;
        closeOnClick?: boolean;
        focus?: boolean;
        hintType?: string;
        onError?: () => void;
        onSuccess?: () => void;
        position?: string;
        rules?: Array<ValidatorRule>;
        rtl?: boolean;
    }// ValidatorOptions

    export interface jqxValidator extends widget, ValidatorOptions {

        // jqxValidator functions
        hideHint(id: string): void;
        hide(): void;
        updatePosition(): void;
        validate(htmlElement: any): void;
        validateInput(id: string): void;
    }// jqxValidator

    export interface WindowDragArea {
        // WindowDragArea properties
        left: number;
        top: number;
        width: number;
        height: number;
    }// WindowDragArea

    export interface WindowOptions {
        // WindowOptions properties
        autoOpen?: boolean;
        animationType?: string;
        collapsed?: boolean;
        collapseAnimationDuration?: number;
        content?: string;
        closeAnimationDuration?: number;
        closeButtonSize?: number;
        closeButtonAction?: string;
        cancelButton?: any;
        dragArea?: WindowDragArea;
        draggable?: boolean;
        disabled?: boolean;
        height?: String | Number;
        initContent?: () => void;
        isModal?: boolean;
        keyboardCloseKey?: String | Number;
        keyboardNavigation?: boolean;
        minHeight?: String | Number;
        maxHeight?: String | Number;
        minWidth?: String | Number;
        maxWidth?: String | Number;
        modalOpacity?: number;
        modalZIndex?: number;
        modalBackgroundZIndex?: number;
        okButton?: any;
        position?: String | any;
        rtl?: boolean;
        resizable?: boolean;
        showAnimationDuration?: number;
        showCloseButton?: boolean;
        showCollapseButton?: boolean;
        theme?: string;
        title?: string;
        width?: String | Number;
        zIndex?: number;
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
        isOpen(): boolean;
        move(top: number, left: number): void;
        open(): void;
        resize(top: number, left: number): void;
        setTitle(title: string): void;
        setContent(content: string): void;
    }// jqxWindow



} // module jqwidgets