import * as React from 'react';
declare class JqxTreeGrid extends React.PureComponent<ITreeGridProps, IState> {
    protected static defaultProps: ITreeGridProps;
    protected static getDerivedStateFromProps(props: ITreeGridProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ITreeGridProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ITreeGridProps): void;
    setOptions(options: ITreeGridProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addRow(rowKey: string, rowData: any, rowPosition: string, parent?: string): void;
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
    deleteRow(rowKey: string[] | string): void;
    expandRow(rowKey: Array<number | string> | string | number): void;
    expandAll(): void;
    endUpdate(): void;
    ensureRowVisible(rowKey: string): void;
    endRowEdit(rowKey: string, cancelChanges?: boolean): void;
    endCellEdit(rowKey: string, dataField: string, cancelChanges?: boolean): void;
    exportData(exportDataType: any): any;
    focus(): void;
    getColumnProperty(dataField: string, propertyName: string): any;
    goToPage(pageIndex: number): void;
    goToPrevPage(): void;
    goToNextPage(): void;
    getSelection(): any[];
    getKey(row: any): string;
    getRow(rowKey: string): ITreeGridGetRow;
    getRows(): ITreeGridGetRow[];
    getCheckedRows(): ITreeGridGetRow[];
    getView(): ITreeGridGetRow[];
    getCellValue(rowKey: string, dataField: string): any;
    hideColumn(dataField: string): void;
    isBindingCompleted(): boolean;
    lockRow(rowKey: string | number | Array<number | string>): void;
    refresh(): void;
    renderWidget(): void;
    removeFilter(dataField: string): void;
    scrollOffset(top?: number, left?: number): ITreeGridScrollOffset;
    setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
    showColumn(dataField: string): void;
    selectRow(rowId: string | number | Array<number | string>): void;
    setCellValue(rowId: string, dataField: string, cellValue: any): void;
    sortBy(dataField: number | string, sortOrder?: string): void;
    updating(): boolean;
    updateBoundData(): void;
    unselectRow(rowId: string | number | Array<number | string>): void;
    uncheckRow(rowId: string): void;
    updateRow(rowId: number | string, data: any): void;
    unlockRow(rowId: string | number | Array<number | string>): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxTreeGrid;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ITreeGridEditSettings {
    saveOnPageChange?: boolean;
    saveOnBlur?: boolean;
    saveOnSelectionChange?: boolean;
    cancelOnEsc?: boolean;
    editSingleCell?: boolean;
    editOnDoubleClick?: boolean;
    editOnF2?: boolean;
}
interface ITreeGridExportSettings {
    columnsHeader?: boolean;
    hiddenColumns?: boolean;
    serverURL?: string | any;
    characterSet?: string;
    collapsedRecords?: boolean;
    recordsInView?: boolean;
    fileName?: string;
}
interface ITreeGridGetRow {
    type?: string;
    checked?: boolean;
    expanded?: boolean;
    icon?: string;
    leaf?: boolean;
    level?: number;
    parent?: any;
    records?: any[];
    selected?: boolean;
    uid?: number | string;
}
interface ITreeGridRowDetailsRenderer {
    key?: number;
    dataRow?: number;
}
interface ITreeGridRenderStatusBar {
    statusbar?: object;
}
interface ITreeGridRenderToolbar {
    toolbar?: object;
}
interface ITreeGridScrollOffset {
    top?: number;
    left?: number;
}
interface ITreeGridOptions {
    altRows?: boolean;
    autoRowHeight?: boolean;
    aggregatesHeight?: number;
    autoShowLoadElement?: boolean;
    checkboxes?: boolean;
    columnsHeight?: number;
    columns?: any[];
    columnGroups?: any[];
    columnsResize?: boolean;
    columnsReorder?: boolean;
    disabled?: boolean;
    editable?: boolean;
    editSettings?: ITreeGridEditSettings;
    exportSettings?: ITreeGridExportSettings;
    enableHover?: boolean;
    enableBrowserSelection?: boolean;
    filterable?: boolean;
    filterHeight?: number;
    filterMode?: 'default' | 'simple' | 'advanced';
    height?: number | string;
    hierarchicalCheckboxes?: boolean;
    icons?: any;
    incrementalSearch?: boolean;
    localization?: any;
    pagerHeight?: number;
    pageSize?: number;
    pageSizeOptions?: Array<number | string>;
    pageable?: boolean;
    pagerPosition?: 'top' | 'bottom' | 'both';
    pagerMode?: 'default' | 'advanced';
    pageSizeMode?: 'default' | 'root';
    pagerButtonsCount?: number;
    pagerRenderer?: () => any;
    ready?: () => void;
    rowDetails?: boolean;
    rowDetailsRenderer?: (key: ITreeGridRowDetailsRenderer['key'], dataRow: ITreeGridRowDetailsRenderer['dataRow']) => any;
    renderToolbar?: (toolBar?: ITreeGridRenderToolbar['toolbar']) => void;
    renderStatusBar?: (statusBar?: ITreeGridRenderStatusBar['statusbar']) => void;
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
    selectionMode?: 'multipleRows' | 'singleRow' | 'custom';
    showHeader?: boolean;
    theme?: string;
    toolbarHeight?: number;
    width?: string | number;
    virtualModeCreateRecords?: (expandedRecord?: any, done?: any) => void;
    virtualModeRecordCreating?: (record?: any) => any;
}
export interface ITreeGridProps extends ITreeGridOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onBindingComplete?: (e?: Event) => void;
    onCellBeginEdit?: (e?: Event) => void;
    onCellEndEdit?: (e?: Event) => void;
    onCellValueChanged?: (e?: Event) => void;
    onColumnResized?: (e?: Event) => void;
    onColumnReordered?: (e?: Event) => void;
    onFilter?: (e?: Event) => void;
    onPageChanged?: (e?: Event) => void;
    onPageSizeChanged?: (e?: Event) => void;
    onRowClick?: (e?: Event) => void;
    onRowDoubleClick?: (e?: Event) => void;
    onRowSelect?: (e?: Event) => void;
    onRowUnselect?: (e?: Event) => void;
    onRowBeginEdit?: (e?: Event) => void;
    onRowEndEdit?: (e?: Event) => void;
    onRowExpand?: (e?: Event) => void;
    onRowCollapse?: (e?: Event) => void;
    onRowCheck?: (e?: Event) => void;
    onRowUncheck?: (e?: Event) => void;
    onSort?: (e?: Event) => void;
}
