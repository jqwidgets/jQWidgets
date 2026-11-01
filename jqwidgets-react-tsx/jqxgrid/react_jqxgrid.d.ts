import * as React from 'react';
declare class JqxGrid<T = any> extends React.PureComponent<IGridProps<T>> {
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
    private _cellComponents;
    private _cellRenderers;
    private _cellData;
    private _cellContainers;
    private _cellKeyData;
    private _cellCount;
    private _cellObserver;
    private _cellFlushPending;
    private _editorComponents;
    private _editorHooks;
    private _activeEditor;
    private _editCount;
    private _columnFunctions;
    private _columnWrappers;
    private _redrawPending;
    private _newComponents;
    private _headerComponents;
    private _headerRenderers;
    private _headerContainers;
    private _toolbarContainer;
    private _statusbarContainer;
    private _detailContainers;
    private _partRenderers;
    private _stateApplying;
    private _selectionReportPending;
    private _sortReportPending;
    private _selectionApplied;
    private _sortApplied;
    private _stateCheck;
    private _totalApplied;
    private _queryReportPending;
    private _lastQuery;
    private _loadingShown;
    private _serverRowsRenderer;
    private _columnsIn;
    private _columnsOut;
    private _rowsSource;
    private _rowsAdapter;
    private _rowsApplied;
    private _readyHandler;
    constructor(props: IGridProps<T>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    private _prepareColumns;
    private _originalRow;
    private _indexOfKey;
    private _plainCopy;
    private _columnFunction;
    private _watchComponent;
    private _cellRenderer;
    private _scheduleCells;
    private _flushCells;
    private _editorHooksOf;
    private _renderCells;
    private _headerRenderer;
    private _columnByName;
    private _partRenderer;
    private _detailsTemplate;
    private _serverRows;
    private _query;
    private _reportQuery;
    private _watchQuery;
    private _showLoading;
    private _selectedKeys;
    private _sortState;
    private _watchState;
    private _reportSelection;
    private _checkState;
    private _reportSort;
    private _applyState;
    private _getRowsAdapter;
    private _rowFields;
    private _typedRow;
    private _refreshFields;
    private _keepFilterFocus;
    private _rebind;
    private _syncRows;
    private _onReady;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IGridProps): void;
    getOptions(option: string): any;
    aiConfig(config?: object): object;
    aiCommand(text: string, callback?: any): Object;
    aiAsk(text: string, callback?: any): Object;
    aiSummarize(rows?: any, callback?: any): Object;
    aiExplainRow(rowindex: number, callback?: any): Object;
    aiClassifyColumn(options: object, callback?: any): Object;
    autoresizecolumns(type?: string): void;
    autoresizecolumn(dataField: string, type?: string): void;
    beginupdate(): void;
    clear(): void;
    createChart(type: string, dataSource?: any): void;
    destroy(): void;
    endupdate(): void;
    ensurerowvisible(rowBoundIndex: number): void;
    ensurecellvisible(rowBoundIndex: number, dataField: string): void;
    focus(): void;
    getcolumnindex(dataField: string): number;
    getcolumn(dataField: string): IGridColumn;
    getcolumnproperty(dataField: string, propertyName: string): any;
    getrowid(rowBoundIndex: number): string;
    getrowdata(rowBoundIndex: number): any;
    getrowdatabyid(rowID: number | string): any;
    getrowboundindexbyid(rowID: number | string): number;
    getrowboundindex(rowDisplayIndex: number): number;
    getrowheight(rowBoundIndex: number): number;
    getrowvisibleindex(rowBoundIndex: number): number;
    getrows(): any[];
    getboundrows(): any[];
    getdisplayrows(): any[];
    getdatainformation(): IGridGetDataInformation;
    getsortinformation(): IGridGetSortInformation;
    getpaginginformation(): IGridGetPagingInformation;
    hidecolumn(dataField: string): void;
    hideloadelement(): void;
    hiderowdetails(rowBoundIndex: number): void;
    hiderow(rowBoundIndex: number): void;
    isrowhiddenat(rowBoundIndex: number): boolean;
    iscolumnvisible(dataField: string): boolean;
    iscolumnpinned(dataField: string): boolean;
    localizestrings(localizationobject: IGridLocalizationobject): void;
    pincolumn(dataField: string): void;
    refreshdata(): void;
    refresh(): void;
    renderWidget(): void;
    scrolloffset(top: number, left: number): void;
    scrollto(left: number, top: number): void;
    scrollposition(): IGridScrollPosition;
    showloadelement(): void;
    showrowdetails(rowBoundIndex: number): void;
    showrow(rowBoundIndex: number): void;
    setcolumnindex(dataField: string, index: number): void;
    setcolumnproperty(dataField: string, propertyName: any, propertyValue: any): void;
    showcolumn(dataField: string): void;
    unpincolumn(dataField: string): void;
    updatebounddata(type?: any): void;
    updating(): boolean;
    getsortcolumn(): string;
    getsortcolumns(): {
        dataField: string;
        ascending: boolean;
    }[];
    removesort(): void;
    sortby(dataField: string, sortOrder: string): void;
    addgroup(dataField: string): void;
    cleargroups(): void;
    collapsegroup(group: number | string): void;
    collapseallgroups(): void;
    expandallgroups(): void;
    expandgroup(group: number | string): void;
    getrootgroupscount(): number;
    getgroup(groupIndex: number): IGridGetGroup;
    isgroupexpanded(groupIndex: number): boolean;
    insertgroup(groupIndex: number, dataField: string): void;
    iscolumngroupable(dataField: string): boolean;
    removegroupat(groupIndex: number): void;
    removegroup(dataField: string): void;
    addfilter(dataField: string, filterGroup: any, refreshGrid?: boolean): void;
    applyfilters(): void;
    clearfilters(): void;
    getfilterinformation(): any;
    getcolumnat(index: number): any;
    removefilter(dataField: string, refreshGrid?: boolean): void;
    refreshfilterrow(): void;
    gotopage(pagenumber: number): void;
    gotoprevpage(): void;
    gotonextpage(): void;
    addrow(rowIds: any, data: any, rowPosition?: any): void;
    begincelledit(rowBoundIndex: number, dataField: string): void;
    beginrowedit(rowBoundIndex: number): void;
    closemenu(): void;
    deleterow(rowIds: string | number | Array<number | string>): void;
    endcelledit(rowBoundIndex: number, dataField: string, confirmChanges: boolean): void;
    endrowedit(rowBoundIndex: number, confirmChanges: boolean): void;
    getcell(rowBoundIndex: number, datafield: string): IGridGetCell;
    getcellatposition(left: number, top: number): IGridGetCell;
    getcelltext(rowBoundIndex: number, dataField: string): string;
    getcelltextbyid(rowID: number | string, dataField: string): string;
    getcellvaluebyid(rowID: number | string, dataField: string): any;
    getcellvalue(rowBoundIndex: number, dataField: string): any;
    isBindingCompleted(): boolean;
    openmenu(dataField: string): void;
    setcellvalue(rowBoundIndex: number, dataField: string, value: any): void;
    setcellvaluebyid(rowID: number | string, dataField: string, value: any): void;
    setrowheight(rowBoundIndex: number, height: number): void;
    showvalidationpopup(rowBoundIndex: number, dataField: string, validationMessage: string): void;
    updaterow(rowIds: string | number | Array<number | string>, data: any): void;
    clearselection(): void;
    getselectedrowindex(): number;
    getselectedrowindexes(): number[];
    getselectedcell(): IGridGetSelectedCell;
    getselectedcells(): IGridGetSelectedCell[];
    showSidePanel(selector: string | HTMLElement, width?: number, callbackFn?: any): void;
    closeSidePanel(): void;
    selectcell(rowBoundIndex: number, dataField: string): void;
    selectallrows(): void;
    selectrow(rowBoundIndex: number): void;
    unselectrow(rowBoundIndex: number): void;
    unselectcell(rowBoundIndex: number, dataField: string): void;
    getcolumnaggregateddata(dataField: string, aggregates: any[]): string;
    refreshaggregates(): void;
    renderaggregates(): void;
    exportdata(dataType: string, fileName?: string, exportHeader?: boolean, rows?: number[], exportHiddenColumns?: boolean, serverURL?: string, charSet?: string): any;
    exportview(dataType: string, fileName?: string): any;
    openColumnChooser(columns?: any, header?: string): void;
    getstate(): IGridGetState;
    loadstate(stateobject?: any): void;
    savestate(): IGridGetState;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxGrid;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IGridCharting {
    appendTo?: string;
    colorScheme?: string;
    dialog?: (width: number, height: number, header: string, position: any, enabled: boolean) => void;
    formatSettings?: any;
    ready?: any;
}
/** A column's filter: its conditions, joined by and / or. */
export interface IGridFilterState {
    datafield: string;
    conditions: Array<{
        condition: string;
        value: any;
        operator: 'and' | 'or';
    }>;
}
/** What a server-mode grid asks the app for: the page, its size, the sort and the filters. */
export interface IGridQuery {
    page: number;
    pageSize: number;
    sort: IGridSortState | null;
    filters: IGridFilterState[];
}
/** A sort: the column's datafield and the direction. */
export interface IGridSortState {
    datafield: string;
    direction: 'asc' | 'desc';
}
/** What a column's headerComponent gets. */
export interface IGridHeaderProps {
    text: string;
    datafield: string;
}
/** What toolbarComponent and statusbarComponent get: the grid, to call its methods. */
export interface IGridBarProps<T = any> {
    grid: JqxGrid<T>;
}
/** What rowDetailsComponent gets: the row and its index. */
export interface IGridRowDetailsProps<T = any> {
    row: T;
    rowIndex: number;
}
/** A grid event: event.args has what the grid passes with it. */
export declare type IGridEvent<A> = Event & {
    args: A;
};
/** What a column's cellComponent gets: the cell's value, its row's data and index, the column. */
export interface IGridCellProps<T = any> {
    value: any;
    row: T;
    rowIndex: number;
    datafield: string;
}
/** What a column's editorComponent gets: the value to edit, the row, and the calls that report the
    new value (onChange), end the edit with it (onCommit), or end it with the old value (onCancel). */
export interface IGridEditorProps<T = any> {
    /** The value to edit; after onChange, the value it reported. */
    value: any;
    row: T;
    rowIndex: number;
    datafield: string;
    /** The character typed to start editing, if the edit began with one. */
    typed?: string;
    onChange: (value: any) => void;
    onCommit: (value?: any) => void;
    onCancel: () => void;
}
export interface IGridColumn<T = any> {
    /** A React component in the column's header, with its text and datafield. */
    headerComponent?: React.ComponentType<IGridHeaderProps>;
    /** A React component rendered in each cell of the column, with the cell's value and row. */
    cellComponent?: React.ComponentType<IGridCellProps<T>>;
    /** A React component that edits the column's cells (a custom editor): it gets the value and onChange, onCommit, onCancel. */
    editorComponent?: React.ComponentType<IGridEditorProps<T>>;
    text?: string;
    datafield?: string;
    displayfield?: string;
    threestatecheckbox?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    filter?: any;
    buttonclick?: (row: number) => void;
    hideable?: boolean;
    hidden?: boolean;
    groupable?: boolean;
    menu?: boolean;
    exportable?: boolean;
    columngroup?: string;
    enabletooltips?: boolean;
    columntype?: 'number' | 'checkbox' | 'button' | 'numberinput' | 'dropdownlist' | 'combobox' | 'datetimeinput' | 'textbox' | 'rating' | 'progressbar' | 'template' | 'custom';
    renderer?: (defaultText: string, alignment: string, height: number) => string;
    rendered?: (columnHeaderElement: any) => void;
    cellTemplate?: string | {
        type?: string;
        [prop: string]: any;
    } | ((value: any, rowData: any) => string);
    cellsrenderer?: (row: number, columnfield: string, value: any, defaulthtml: string, columnproperties: any, rowdata: any) => string;
    aggregatesrenderer?: (aggregates: any, column: any, element: any, summaryData: any) => string;
    validation?: (cell: any, value: any) => any;
    createwidget?: (row: any, column: any, value: string, cellElement: any) => void;
    initwidget?: (row: number, column: string, value: string, cellElement: any) => void;
    createfilterwidget?: (column: any, htmlElement: HTMLElement, editor: any) => void;
    createfilterpanel?: (datafield: string, filterPanel: any) => void;
    initeditor?: (row: number, cellvalue: any, editor: any, celltext: any, pressedChar: string, callback: any) => void;
    createeditor?: (row: number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => void;
    destroyeditor?: (row: number, callback: any) => void;
    geteditorvalue?: (row: number, cellvalue: any, editor: any) => any;
    cellbeginedit?: (row: number, datafield: string, columntype: string, value: any) => boolean;
    cellendedit?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => boolean;
    cellvaluechanging?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => string | void;
    createeverpresentrowwidget?: (datafield: string, htmlElement: any, popup: any, addRowCallback: any) => any;
    initeverpresentrowwidget?: (datafield: string, htmlElement: any, popup: any) => void;
    reseteverpresentrowwidgetvalue?: (datafield: string, htmlElement: any) => void;
    geteverpresentrowwidgetvalue?: (datafield: string, htmlElement: any) => any;
    destroyeverpresentrowwidget?: (htmlElement: any) => void;
    validateeverpresentrowwidgetvalue?: (datafield: string, value: any, rowValues: any) => boolean | object;
    cellsformat?: string;
    cellclassname?: any;
    aggregates?: Array<string | {
        [name: string]: (aggregatedValue: any, currentValue: any, column: string, record: any, level: number) => any;
    }>;
    align?: 'left' | 'center' | 'right';
    cellsalign?: 'left' | 'center' | 'right';
    width?: number | string;
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
    filtertype?: 'textbox' | 'input' | 'checkedlist' | 'list' | 'number' | 'bool' | 'date' | 'range' | 'custom';
    filtercondition?: 'EMPTY' | 'NOT_EMPTY' | 'CONTAINS' | 'CONTAINS_CASE_SENSITIVE' | 'DOES_NOT_CONTAIN' | 'DOES_NOT_CONTAIN_CASE_SENSITIVE' | 'STARTS_WITH' | 'STARTS_WITH_CASE_SENSITIVE' | 'ENDS_WITH' | 'ENDS_WITH_CASE_SENSITIVE' | 'EQUAL' | 'EQUAL_CASE_SENSITIVE' | 'NULL' | 'NOT_NULL' | 'EQUAL' | 'NOT_EQUAL' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'NULL' | 'NOT_NULL';
}
export interface IGridSourceDataFields {
    name?: string;
    type?: 'string' | 'date' | 'int' | 'float' | 'number' | 'bool';
    format?: string;
    map?: string;
    id?: string;
    text?: string;
    source?: any[];
}
export interface IGridSource {
    url?: string;
    data?: any;
    localdata?: any;
    datatype?: 'xml' | 'json' | 'jsonp' | 'tsv' | 'csv' | 'local' | 'array' | 'observablearray';
    type?: 'GET' | 'POST';
    id?: string;
    root?: string;
    record?: string;
    datafields?: IGridSourceDataFields[];
    pagenum?: number;
    pagesize?: number;
    pager?: (pageNumber: number, pageSize: number, oldPageNumber: number) => any;
    sortcolumn?: string;
    sortdirection?: 'asc' | 'desc';
    sort?: (column: any, direction: any) => void;
    filter?: (filters: any, recordsArray: any) => void;
    addrow?: (rowid: any, rowdata: any, position: any, commit: (result: boolean) => void) => void;
    deleterow?: (rowid: any, commit: (result: boolean) => void) => void;
    updaterow?: (rowid: any, newdata: any, commit: (result: boolean) => void) => void;
    processdata?: (data: any) => void;
    formatdata?: (data: any) => any;
    async?: boolean;
    totalrecords?: number;
    unboundmode?: boolean;
}
export interface IGridGetColumn {
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
    cellclassname?: any;
    width?: number | string;
    menu?: boolean;
}
export interface IGridGetDataInformation {
    rowscount?: string;
    sortinformation?: any;
    sortcolumn?: any;
    sortdirection?: any;
    paginginformation?: any;
    pagenum?: any;
    pagesize?: any;
    pagescount?: any;
}
export interface IGridGetSortInformation {
    sortcolumn?: string;
    sortdirection?: any;
}
export interface IGridGetPagingInformation {
    pagenum?: number;
    pagesize?: number;
    pagescount?: number;
}
export interface IGridDateNaming {
    names?: string[];
    namesAbbr?: string[];
    namesShort?: string[];
}
export interface IGridLocalizationobject {
    filterstringcomparisonoperators?: any;
    filternumericcomparisonoperators?: any;
    filterdatecomparisonoperators?: any;
    filterbooleancomparisonoperators?: any;
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
    days?: IGridDateNaming;
    months?: IGridDateNaming;
    addrowstring?: string;
    updaterowstring?: string;
    deleterowstring?: string;
    resetrowstring?: string;
    everpresentrowplaceholder?: string;
    emptydatastring?: string;
}
export interface IGridScrollPosition {
    top?: number;
    left?: number;
}
export interface IGridGetGroup {
    group?: number;
    level?: number;
    expanded?: number;
    subgroups?: number;
    subrows?: number;
}
export interface IGridGetCell {
    value?: any;
    row?: number;
    column?: string;
}
export interface IGridGetSelectedCell {
    rowindex?: number;
    datafield?: string;
}
export interface IGridGetStateColumns {
    width?: number | string;
    hidden?: boolean;
    index?: number;
    pinned?: boolean;
    groupable?: boolean;
    resizable?: boolean;
    draggable?: boolean;
    text?: string;
    align?: string;
    cellsalign?: string;
}
export interface IGridGetState {
    width?: number | string;
    height?: number | string;
    pagenum?: number;
    pagesize?: number;
    pagesizeoptions?: string[];
    sortcolumn?: any;
    sortdirection?: any;
    filters?: any;
    groups?: any;
    columns?: IGridGetStateColumns;
}
export interface IGridColumnmenuopening {
    menu: any;
    datafield: any;
    height: any;
}
export interface IGridColumnmenuclosing {
    menu: any;
    datafield: any;
    height: any;
}
export interface IGridCellhover {
    cellhtmlElement: any;
    x: any;
    y: any;
}
export interface IGridGroupsrenderer {
    text: string;
    group: any;
    expanded: boolean;
    data: any;
}
export interface IGridGroupcolumnrenderer {
    text: any;
}
export interface IGridHandlekeyboardnavigation {
    event?: any;
}
export interface IGridScrollfeedback {
    row: any;
}
export interface IGridFilter {
    cellValue: any;
    rowData: any;
    dataField: string;
    filterGroup: any;
    defaultFilterResult: boolean;
}
export interface IGridRendertoolbar {
    toolbar: any;
}
export interface IGridRenderstatusbar {
    statusbar: any;
}
interface IGridOptions {
    altrows?: boolean;
    altstart?: number;
    altstep?: number;
    autoselectfirstrow?: boolean;
    autoshowloadelement?: boolean;
    autoshowfiltericon?: boolean;
    autoshowcolumnsmenubutton?: boolean;
    showcolumnlines?: boolean;
    showrowlines?: boolean;
    showcolumnheaderlines?: boolean;
    adaptive?: boolean;
    compact?: boolean;
    contextmenuitems?: Array<string | object>;
    contextmenuenabled?: boolean;
    contextmenuwidth?: number | string;
    contextmenuheight?: number | string;
    contextmenuitemclick?: (event: any, cell: IGridGetCell) => void;
    adaptivewidth?: number;
    commandcolumn?: boolean;
    commandcolumnrenderer?: (row: number, columnfield: string, active: any) => string;
    clipboard?: boolean;
    clipboardbegin?: (action: string, text?: string) => boolean | void;
    clipboardend?: (action: string) => void;
    copytoclipboardwithheaders?: boolean;
    copytoclipboardhiddencolumns?: boolean;
    closeablegroups?: boolean;
    columnsmenuwidth?: number;
    columnmenuopening?: (menu: IGridColumnmenuopening['menu'], datafield: IGridColumnmenuopening['datafield'], height: IGridColumnmenuopening['height']) => boolean | void;
    columnmenuclosing?: (menu: IGridColumnmenuclosing['menu'], datafield: IGridColumnmenuclosing['datafield'], height: IGridColumnmenuclosing['height']) => boolean | void;
    cellhover?: (cellhtmlElement: IGridCellhover['cellhtmlElement'], x: IGridCellhover['x'], y: IGridCellhover['y']) => void;
    enablekeyboarddelete?: boolean;
    enableellipsis?: boolean;
    enablemousewheel?: boolean;
    enableanimations?: boolean;
    enabletooltips?: boolean;
    enablehover?: boolean;
    enablebrowserselection?: boolean;
    everpresentrowposition?: 'top' | 'bottom' | 'topAboveFilterRow';
    everpresentrowheight?: number;
    everpresentrowactions?: string;
    everpresentrowactionsmode?: 'popup' | 'columns';
    filterrowheight?: number;
    filtermode?: 'default' | 'excel';
    groupsrenderer?: (text: IGridGroupsrenderer['text'], group: IGridGroupsrenderer['group'], expanded: IGridGroupsrenderer['expanded'], data: IGridGroupsrenderer['data']) => string;
    groupcolumnrenderer?: (text: IGridGroupcolumnrenderer['text']) => string;
    groupsexpandedbydefault?: boolean;
    handlekeyboardnavigation?: (event: IGridHandlekeyboardnavigation['event']) => boolean | void;
    pagerrenderer?: () => any;
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
    showfilterbar?: boolean;
    filterbarmode?: string;
    selectionmode?: 'none' | 'singlerow' | 'multiplerows' | 'multiplerowsextended' | 'singlecell' | 'multiplecells' | 'multiplecellsextended' | 'multiplecellsadvanced' | 'checkbox';
    multipleselectionbegins?: (event?: any) => boolean | void;
    updatefilterconditions?: (type: string, defaultconditions: any) => any;
    updatefilterpanel?: (filtertypedropdown1: any, filtertypedropdown2: any, filteroperatordropdown: any, filterinputfield1: any, filterinputfield2: any, filterbutton: any, clearbutton: any, columnfilter: any, filtertype: any, filterconditions: any) => any;
    theme?: string;
    toolbarheight?: number;
    autoheight?: boolean;
    autorowheight?: boolean;
    columnsheight?: number;
    deferreddatafields?: string[];
    groupsheaderheight?: number;
    groupindentwidth?: number;
    height?: number | string;
    pagerheight?: number | string;
    rowsheight?: number;
    scrollbarsize?: number | string;
    scrollmode?: 'default' | 'logical' | 'deferred';
    scrollfeedback?: (row: IGridScrollfeedback['row']) => string;
    width?: string | number;
    autosavestate?: boolean;
    autoloadstate?: boolean;
    columns?: IGridColumn[];
    autogeneratecolumns?: boolean;
    enableSanitize?: boolean;
    enableSanitizeAll?: boolean;
    cardview?: boolean;
    cardviewcolumns?: any;
    cardheight?: number;
    cardsize?: number;
    columngroups?: any[];
    columnsmenu?: boolean;
    columnsresize?: boolean;
    columnsautoresize?: boolean;
    columnsreorder?: boolean;
    charting?: IGridCharting;
    disabled?: boolean;
    editable?: boolean;
    batcheditable?: boolean;
    editmode?: 'click' | 'selectedcell' | 'selectedrow' | 'dblclick' | 'programmatic';
    filter?: (cellValue: IGridFilter['cellValue'], rowData: IGridFilter['rowData'], dataField: IGridFilter['dataField'], filterGroup: IGridFilter['filterGroup'], defaultFilterResult: IGridFilter['defaultFilterResult']) => any;
    filterable?: boolean;
    filternlpinput?: string;
    aiKey?: string;
    aiUrl?: string;
    aiProvider?: string;
    aiModel?: string;
    aiProxyUrl?: string;
    aiHeaders?: object;
    aiSendRequest?: any;
    aiMaxRows?: number;
    groupable?: boolean;
    groups?: string[];
    horizontalscrollbarstep?: number;
    horizontalscrollbarlargestep?: number;
    initrowdetails?: (index: number, parentElement: any, gridElement: any, datarecord: any) => void;
    layoutrowdetails?: (index?: number, detailsElement?: any, gridElement?: any, datarecord?: any) => void;
    enablerowdetailsindent?: boolean;
    disablerowdetails?: (index: number) => boolean;
    keyboardnavigation?: boolean;
    localization?: IGridLocalizationobject;
    pagesize?: number;
    pagesizeoptions?: Array<number | string>;
    pagermode?: 'simple' | 'default' | 'material';
    pagerbuttonscount?: number;
    pageable?: boolean;
    autofill?: boolean;
    rowdetails?: boolean;
    rowdetailstemplate?: any;
    ready?: () => void;
    rendered?: (type: any) => void;
    renderstatusbar?: (statusbar: IGridRenderstatusbar['statusbar']) => void;
    rendertoolbar?: (toolbar: IGridRendertoolbar['toolbar']) => void;
    rendergridrows?: (params: any) => any;
    rendergroups?: (params: any) => any;
    sortable?: boolean;
    sortmode?: string;
    sortmodekey?: string;
    selectedrowindex?: number;
    selectedrowindexes?: number[];
    source?: IGridSource;
    sorttogglestates?: '0' | '1' | '2';
    updatedelay?: number;
    virtualmode?: boolean;
    verticalscrollbarstep?: number;
    verticalscrollbarlargestep?: number;
}
export interface IGridProps<T = any> extends IGridOptions, React.AriaAttributes {
    /** The rows, from React state: a new array updates the grid (keeping its sort, filters and groups). In place of source. */
    rows?: T[];
    /** The field that identifies a row: with it, a new rows array updates only the rows that changed. */
    rowKey?: string;
    /** The type of a field of the rows ('string', 'number', 'bool', 'date'...). Without it: the column's filtertype or columntype, else the first value's type. */
    fieldTypes?: {
        [field: string]: string;
    };
    columns?: Array<IGridColumn<T>>;
    /** The keys (rowKey's values; without it, the rows' indexes) of the rows to select. Set when it changes. */
    selectedRowKeys?: any[];
    /** Called with the keys of the selected rows when the user changes the selection. */
    onSelectionChange?: (keys: any[]) => void;
    /** The sort to apply (null: none). Set when it changes. */
    sort?: IGridSortState | null;
    /** Called with the sort when the user changes it. */
    onSortChange?: (sort: IGridSortState | null) => void;
    /** A React component in the toolbar (showtoolbar is then true unless set). */
    toolbarComponent?: React.ComponentType<IGridBarProps<T>>;
    /** A React component in the status bar (showstatusbar is then true unless set). */
    statusbarComponent?: React.ComponentType<IGridBarProps<T>>;
    /** A React component shown in each row's details (rowdetails is then true). */
    rowDetailsComponent?: React.ComponentType<IGridRowDetailsProps<T>>;
    /** The height of the row details, in pixels (200). */
    rowDetailsHeight?: number;
    /** Server mode: the number of rows the server has; rows is then the page it sent. The grid pages, sorts and filters through onQueryChange. */
    totalRows?: number;
    /** Server mode: called with the page, page size, sort and filters to fetch, at the start and when the user changes them. */
    onQueryChange?: (query: IGridQuery) => void;
    /** Shows the grid's loading indicator while true. */
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onGridaiResult?: (e?: any) => void;
    onGridaiError?: (e?: any) => void;
    onBindingcomplete?: (e?: any) => void;
    onColumnresized?: (e?: any) => void;
    onColumnreordered?: (e?: any) => void;
    onColumnclick?: (e?: any) => void;
    onColumnchooserokclick?: (e?: any) => void;
    onColumnchoosercancelclick?: (e?: any) => void;
    onCellclick?: (e?: any) => void;
    onCelldoubleclick?: (e?: any) => void;
    onCellselect?: (e?: any) => void;
    onCellunselect?: (e?: any) => void;
    onCellvaluechanged?: (e?: any) => void;
    onCellbeginedit?: (e?: any) => void;
    onCellendedit?: (e?: any) => void;
    onFilter?: (e?: any) => void;
    onGroupschanged?: (e?: any) => void;
    onGroupexpand?: (e?: any) => void;
    onGroupcollapse?: (e?: any) => void;
    onPagechanged?: (e?: any) => void;
    onPagechanging?: (e?: any) => void;
    onPagesizechanged?: (e?: any) => void;
    onRowclick?: (e?: any) => void;
    onRowdoubleclick?: (e?: any) => void;
    onRowselect?: (e?: any) => void;
    onRowunselect?: (e?: any) => void;
    onRowexpand?: (e?: any) => void;
    onRowcollapse?: (e?: any) => void;
    onSort?: (e?: any) => void;
}
/** The grid's events, each with what its event.args has: (event: IGridEvents<Order>['cellendedit']) => ... */
export interface IGridEvents<T = any> {
    bindingcomplete: IGridEvent<any>;
    columnresized: IGridEvent<{
        columntext: string;
        column: any;
        datafield: string;
        displayfield?: string;
        oldwidth: number;
        newwidth: number;
    }>;
    columnreordered: IGridEvent<{
        columntext: string;
        datafield: string;
        oldindex: number;
        newindex: number;
    }>;
    columnclick: IGridEvent<{
        column: any;
        datafield: string;
        originalEvent: Event;
    }>;
    columnchooserokclick: IGridEvent<any>;
    columnchoosercancelclick: IGridEvent<any>;
    cellclick: IGridEvent<{
        rowindex: number;
        column: any;
        row: T;
        visibleindex: number;
        datafield: string;
        columnindex: any;
        value: any;
        rightclick: any;
        originalEvent: Event;
    }>;
    celldoubleclick: IGridEvent<{
        rowindex: number;
        row: T;
        visibleindex: number;
        column: any;
        datafield: string;
        columnindex: any;
        value: any;
        rightclick: any;
        originalEvent: Event;
    }>;
    cellselect: IGridEvent<any>;
    cellunselect: IGridEvent<{
        rowindex: number;
        datafield: string;
    }>;
    cellvaluechanged: IGridEvent<{
        rowindex: number;
        datafield: string;
        newvalue: any;
        value: any;
        oldvalue: any;
    }>;
    cellbeginedit: IGridEvent<{
        rowindex: number;
        row?: T;
        datafield: string;
        value: any;
        columntype?: string;
    }>;
    cellendedit: IGridEvent<{
        rowindex: number;
        row?: T;
        datafield: string;
        oldvalue: any;
        value: any;
        columntype?: string;
        displayfield?: string;
    }>;
    filter: IGridEvent<{
        filters: any[];
    }>;
    groupschanged: IGridEvent<{
        type: string;
        index: number;
        groups: any[];
    }>;
    groupexpand: IGridEvent<{
        group: any;
        parentgroup: any;
        level: number;
        visibleindex: number;
    }>;
    groupcollapse: IGridEvent<{
        group: any;
        parentgroup: any;
        level: number;
        visibleindex: number;
    }>;
    pagechanged: IGridEvent<{
        pagenum: number;
        oldpagenum: number;
        pagesize: number;
    }>;
    pagechanging: IGridEvent<{
        oldpagenum: number;
        pagenum: number;
        pagesize: number;
    }>;
    pagesizechanged: IGridEvent<{
        pagenum: number;
        oldpagesize: number;
        pagesize: number;
    }>;
    rowclick: IGridEvent<{
        rowindex: number;
        visibleindex: number;
        row: T;
        group: any;
        rightclick: any;
        originalEvent: Event;
    }>;
    rowdoubleclick: IGridEvent<{
        rowindex: number;
        row: T;
        visibleindex: number;
        group: any;
        rightclick: any;
        originalEvent: Event;
    }>;
    rowselect: IGridEvent<{
        rowindex: number | number[];
        row?: T;
    }>;
    rowunselect: IGridEvent<{
        rowindex: number | number[];
        row?: T;
    }>;
    rowexpand: IGridEvent<{
        rowindex: number;
        details: any;
        height: number;
    }>;
    rowcollapse: IGridEvent<{
        rowindex: number;
        details: any;
        height: number;
    }>;
    sort: IGridEvent<{
        sortinformation: any;
    }>;
}
