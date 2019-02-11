
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDataTable extends React.PureComponent<IDataTableProps, IState> {
    protected static getDerivedStateFromProps(props: IDataTableProps, state: IState): null | IState {
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

    constructor(props: IDataTableProps) {
        super(props);

        this._id = 'JqxDataTable' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDataTableProps;
        this._jqx(this._componentSelector).jqxDataTable(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDataTableProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDataTableProps): void {
        this._jqx(this._componentSelector).jqxDataTable(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDataTable(option);
    }

    public addRow(rowIndex: number | null, rowData: any, rowPosition: any): void {
        this._jqx(this._componentSelector).jqxDataTable('addRow' , rowIndex, rowData, rowPosition);
    };

    public addFilter(dataField: string, filerGroup: any): void {
        this._jqx(this._componentSelector).jqxDataTable('addFilter' , dataField, filerGroup);
    };

    public applyFilters(): void {
        this._jqx(this._componentSelector).jqxDataTable('applyFilters' );
    };

    public beginUpdate(): void {
        this._jqx(this._componentSelector).jqxDataTable('beginUpdate' );
    };

    public beginRowEdit(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('beginRowEdit' , rowIndex);
    };

    public beginCellEdit(rowIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxDataTable('beginCellEdit' , rowIndex, dataField);
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxDataTable('clearSelection' );
    };

    public clearFilters(): void {
        this._jqx(this._componentSelector).jqxDataTable('clearFilters' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxDataTable('clear' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDataTable('destroy' );
    };

    public deleteRow(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('deleteRow' , rowIndex);
    };

    public endUpdate(): void {
        this._jqx(this._componentSelector).jqxDataTable('endUpdate' );
    };

    public ensureRowVisible(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('ensureRowVisible' , rowIndex);
    };

    public endRowEdit(rowIndex: number, cancelChanges: boolean): void {
        this._jqx(this._componentSelector).jqxDataTable('endRowEdit' , rowIndex, cancelChanges);
    };

    public endCellEdit(rowIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxDataTable('endCellEdit' , rowIndex, dataField);
    };

    public exportData(exportDataType: any): any {
        return this._jqx(this._componentSelector).jqxDataTable('exportData' , exportDataType);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxDataTable('focus' );
    };

    public getColumnProperty(dataField: string, propertyName: string): any {
        return this._jqx(this._componentSelector).jqxDataTable('getColumnProperty' , dataField, propertyName);
    };

    public goToPage(pageIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('goToPage' , pageIndex);
    };

    public goToPrevPage(): void {
        this._jqx(this._componentSelector).jqxDataTable('goToPrevPage' );
    };

    public goToNextPage(): void {
        this._jqx(this._componentSelector).jqxDataTable('goToNextPage' );
    };

    public getSelection(): any[] {
        return this._jqx(this._componentSelector).jqxDataTable('getSelection' );
    };

    public getRows(): any[] {
        return this._jqx(this._componentSelector).jqxDataTable('getRows' );
    };

    public getView(): any[] {
        return this._jqx(this._componentSelector).jqxDataTable('getView' );
    };

    public getCellValue(rowIndex: number, dataField: string): any {
        return this._jqx(this._componentSelector).jqxDataTable('getCellValue' , rowIndex, dataField);
    };

    public hideColumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxDataTable('hideColumn' , dataField);
    };

    public hideDetails(rowIndex: boolean): void {
        this._jqx(this._componentSelector).jqxDataTable('hideDetails' , rowIndex);
    };

    public isBindingCompleted(): boolean {
        return this._jqx(this._componentSelector).jqxDataTable('isBindingCompleted' );
    };

    public lockRow(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('lockRow' , rowIndex);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxDataTable('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxDataTable('render' );
    };

    public removeFilter(dataField: string): void {
        this._jqx(this._componentSelector).jqxDataTable('removeFilter' , dataField);
    };

    public scrollOffset(top: number, left: number): void {
        this._jqx(this._componentSelector).jqxDataTable('scrollOffset' , top, left);
    };

    public setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void {
        this._jqx(this._componentSelector).jqxDataTable('setColumnProperty' , dataField, propertyName, propertyValue);
    };

    public showColumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxDataTable('showColumn' , dataField);
    };

    public selectRow(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('selectRow' , rowIndex);
    };

    public showDetails(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('showDetails' , rowIndex);
    };

    public setCellValue(rowIndex: number, dataField: string, value: any): void {
        this._jqx(this._componentSelector).jqxDataTable('setCellValue' , rowIndex, dataField, value);
    };

    public sortBy(dataField: string, sortOrder: any): void {
        this._jqx(this._componentSelector).jqxDataTable('sortBy' , dataField, sortOrder);
    };

    public updating(): boolean {
        return this._jqx(this._componentSelector).jqxDataTable('updating' );
    };

    public updateBoundData(): void {
        this._jqx(this._componentSelector).jqxDataTable('updateBoundData' );
    };

    public unselectRow(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('unselectRow' , rowIndex);
    };

    public updateRow(rowIndex: number, rowData: any): void {
        this._jqx(this._componentSelector).jqxDataTable('updateRow' , rowIndex, rowData);
    };

    public unlockRow(rowIndex: number): void {
        this._jqx(this._componentSelector).jqxDataTable('unlockRow' , rowIndex);
    };

    private _manageProps(): IDataTableProps {
        const widgetProps: string[] = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','groups','groupsRenderer','height','initRowDetails','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','renderToolbar','renderStatusBar','rendering','rendered','rtl','source','sortable','showAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','serverProcessing','showHeader','theme','toolbarHeight','width'];

        const options = {} as IDataTableProps;

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

export default JqxDataTable;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IDataTableColumns {
    text?: string;
    dataField?: string;
    displayField?: string;
    sortable?: boolean;
    filterable?: boolean;
    hidden?: boolean;
    columnGroup ?: string;
    autoCellHeight?: boolean;
    renderer?: (text:string, align?:string, height?: string | number) => string;
    rendered?: (element:any, align?:string, height?: string | number) => boolean;
    cellsRenderer?: (row:number, column?:any, value?: any, rowData?:any) => string;
    columnType?: string;
    validation?: (cell:number, value?:any) => any;
    initEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
    createEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
    getEditorValue?: (row:number, cellValue?:any, editor?:any) => void;
    cellsFormat?: 'd2' | 'n2' | 'f2' | 'f5' | 'c2' | 'f' | 'n' | 'c' | 'p' | 'd' | 'dd' | 'ddd' | 'dddd' | 'D' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy' | 'dd/MM/yyyy' | 'yyyy-MM-dd';
    aggregates?: any[];
    aggregatesRenderer?: (aggregates: Array<any>, column: any, element: any) => string[] | string;
    align?: 'left' | 'right' | 'center';
    cellsAlign?: 'left' | 'right' | 'center';
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    resizable?: boolean;
    draggable?: boolean;
    editable?: boolean;
    className?: string;
    cellClassName?: any;
    pinned?: boolean;
}

export interface IDataTableColumnGroups {
    text?: string;
    parentGroup?: string;
    align?: string;
    name?: string;
}

export interface IDataTableGroupsRenderer {
    value?: string;
    rowdata?: object;
    level?: number;
}

export interface IDataTableInitRowDetails {
    id?: number;
    row?: number;
    element?: object;
    rowinfo?: object;
}

export interface IDataTableRenderToolbar {
    toolbar?: object;
}

export interface IDataTableRenderStatusBar {
    statusbar?: object;
}

export interface IDataTableEditSettings {
    saveOnPageChange?: boolean;
    saveOnBlur?: boolean;
    saveOnSelectionChange?: boolean;
    cancelOnEsc?: boolean;
    saveOnEnter?: boolean;
    editSingleCell?: boolean;
    editOnDoubleClick?: boolean;
    editOnF2?: boolean;
}

export interface IDataTableExportSettings {
    columnsHeader?: boolean;
    hiddenColumns?: boolean;
    serverURL?: any;
    characterSet?: any;
    recordsInView?: boolean;
    fileName?: string | null;
}

interface IDataTableOptions {
    altRows?: boolean;
    autoRowHeight?: boolean;
    aggregatesHeight?: number;
    autoShowLoadElement?: boolean;
    columnsHeight?: number;
    columns?: IDataTableColumns[];
    columnGroups?: IDataTableColumnGroups[];
    columnsResize?: boolean;
    columnsReorder?: boolean;
    disabled?: boolean;
    editable?: boolean;
    editSettings?: IDataTableEditSettings;
    exportSettings?: IDataTableExportSettings;
    enableHover?: boolean;
    enableBrowserSelection?: boolean;
    filterable?: boolean;
    filterHeight?: number;
    filterMode?: 'default' | 'simple' | 'advanced';
    groups?: any[];
    groupsRenderer?: (value?:IDataTableGroupsRenderer['value'], rowData?:IDataTableGroupsRenderer['rowdata'], level?:IDataTableGroupsRenderer['level']) => string;
    height?: number | string;
    initRowDetails?: (id?:IDataTableInitRowDetails['id'], row?:IDataTableInitRowDetails['row'], element?:IDataTableInitRowDetails['element'], rowInfo?:IDataTableInitRowDetails['rowinfo']) => void;
    incrementalSearch?: boolean;
    localization?: any;
    pagerHeight?: number;
    pageSize?: number;
    pageSizeOptions?: Array<string | number>;
    pageable?: boolean;
    pagerPosition?: 'top' | 'bottom' | 'both';
    pagerMode?: 'default' | 'advanced';
    pagerButtonsCount?: number;
    pagerRenderer?: () => any;
    ready?: () => void;
    rowDetails?: boolean;
    renderToolbar?: (toolbar?:IDataTableRenderToolbar['toolbar']) => void;
    renderStatusBar?: (statusbar?:IDataTableRenderStatusBar['statusbar']) => void;
    rendering?: () => void;
    rendered?: () => void;
    rtl?: boolean;
    source?: any;
    sortable?: boolean;
    showAggregates?: boolean;
    showToolbar?: boolean;
    showStatusbar?: boolean;
    statusBarHeight?: number;
    scrollBarSize?: number | string;
    selectionMode?: 'multipleRows' | 'singleRow' | 'custom' | 'none';
    serverProcessing?: boolean;
    showHeader?: boolean;
    theme?: string;
    toolbarHeight?: number;
    width?: string | number;
}

export interface IDataTableProps extends IDataTableOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBindingComplete?: (e?: Event) => void;
    onCellBeginEdit?: (e?: Event) => void;
    onCellEndEdit?: (e?: Event) => void;
    onCellValueChanged?: (e?: Event) => void;
    onColumnResized?: (e?: Event) => void;
    onColumnReordered?: (e?: Event) => void;
    onSort?: (e?: Event) => void;
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
}
