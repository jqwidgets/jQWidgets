
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTreeGrid extends React.PureComponent<ITreeGridProps, IState> {
    protected static getDerivedStateFromProps(props: ITreeGridProps, state: IState): null | IState {
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

    constructor(props: ITreeGridProps) {
        super(props);

        this._id = 'JqxTreeGrid' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITreeGridProps;
        this._jqx(this._componentSelector).jqxTreeGrid(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITreeGridProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITreeGridProps): void {
        this._jqx(this._componentSelector).jqxTreeGrid(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTreeGrid(option);
    }

    public addRow(rowKey: number | string, rowData: any, rowPosition: string, parent?: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('addRow' , rowKey, rowData, rowPosition, parent);
    };

    public addFilter(dataField: string, filerGroup: any): void {
        this._jqx(this._componentSelector).jqxTreeGrid('addFilter' , dataField, filerGroup);
    };

    public applyFilters(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('applyFilters' );
    };

    public beginUpdate(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('beginUpdate' );
    };

    public beginRowEdit(rowKey: number | string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('beginRowEdit' , rowKey);
    };

    public beginCellEdit(rowKey: number | string, dataField: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('beginCellEdit' , rowKey, dataField);
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('clearSelection' );
    };

    public clearFilters(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('clearFilters' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('clear' );
    };

    public checkRow(rowKey: number | string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('checkRow' , rowKey);
    };

    public collapseRow(rowKey: number | string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('collapseRow' , rowKey);
    };

    public collapseAll(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('collapseAll' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('destroy' );
    };

    public deleteRow(rowKey: string[] | string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('deleteRow' , rowKey);
    };

    public expandRow(rowKey: Array<number | string> | string | number): void {
        this._jqx(this._componentSelector).jqxTreeGrid('expandRow' , rowKey);
    };

    public expandAll(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('expandAll' );
    };

    public endUpdate(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('endUpdate' );
    };

    public ensureRowVisible(rowKey: number | string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('ensureRowVisible' , rowKey);
    };

    public endRowEdit(rowKey: number | string, cancelChanges?: boolean): void {
        this._jqx(this._componentSelector).jqxTreeGrid('endRowEdit' , rowKey, cancelChanges);
    };

    public endCellEdit(rowKey: number | string, dataField: string, cancelChanges?: boolean): void {
        this._jqx(this._componentSelector).jqxTreeGrid('endCellEdit' , rowKey, dataField, cancelChanges);
    };

    public exportData(exportDataType: any): any {
        return this._jqx(this._componentSelector).jqxTreeGrid('exportData' , exportDataType);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('focus' );
    };

    public getColumnProperty(dataField: string, propertyName: string): any {
        return this._jqx(this._componentSelector).jqxTreeGrid('getColumnProperty' , dataField, propertyName);
    };

    public goToPage(pageIndex: number): void {
        this._jqx(this._componentSelector).jqxTreeGrid('goToPage' , pageIndex);
    };

    public goToPrevPage(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('goToPrevPage' );
    };

    public goToNextPage(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('goToNextPage' );
    };

    public getSelection(): any[] {
        return this._jqx(this._componentSelector).jqxTreeGrid('getSelection' );
    };

    public getKey(row: any): string {
        return this._jqx(this._componentSelector).jqxTreeGrid('getKey' , row);
    };

    public getRow(rowKey: number | string): ITreeGridGetRow {
        return this._jqx(this._componentSelector).jqxTreeGrid('getRow' , rowKey);
    };

    public getRows(): ITreeGridGetRow[] {
        return this._jqx(this._componentSelector).jqxTreeGrid('getRows' );
    };

    public getCheckedRows(): ITreeGridGetRow[] {
        return this._jqx(this._componentSelector).jqxTreeGrid('getCheckedRows' );
    };

    public getView(): ITreeGridGetRow[] {
        return this._jqx(this._componentSelector).jqxTreeGrid('getView' );
    };

    public getCellValue(rowKey: number | string, dataField: string): any {
        return this._jqx(this._componentSelector).jqxTreeGrid('getCellValue' , rowKey, dataField);
    };

    public hideColumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('hideColumn' , dataField);
    };

    public isBindingCompleted(): boolean {
        return this._jqx(this._componentSelector).jqxTreeGrid('isBindingCompleted' );
    };

    public lockRow(rowKey: string | number | Array<number | string>): void {
        this._jqx(this._componentSelector).jqxTreeGrid('lockRow' , rowKey);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('render' );
    };

    public removeFilter(dataField: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('removeFilter' , dataField);
    };

    public scrollOffset(top?: number, left?: number): ITreeGridScrollOffset {
        return this._jqx(this._componentSelector).jqxTreeGrid('scrollOffset' , top, left);
    };

    public setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void {
        this._jqx(this._componentSelector).jqxTreeGrid('setColumnProperty' , dataField, propertyName, propertyValue);
    };

    public showColumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('showColumn' , dataField);
    };

    public selectRow(rowId: string | number | Array<number | string>): void {
        this._jqx(this._componentSelector).jqxTreeGrid('selectRow' , rowId);
    };

    public setCellValue(rowId: string, dataField: string, cellValue: any): void {
        this._jqx(this._componentSelector).jqxTreeGrid('setCellValue' , rowId, dataField, cellValue);
    };

    public sortBy(dataField: number | string, sortOrder?: 'asc' | 'desc' | null): void {
        this._jqx(this._componentSelector).jqxTreeGrid('sortBy' , dataField, sortOrder);
    };

    public updating(): boolean {
        return this._jqx(this._componentSelector).jqxTreeGrid('updating' );
    };

    public updateBoundData(): void {
        this._jqx(this._componentSelector).jqxTreeGrid('updateBoundData' );
    };

    public unselectRow(rowId: string | number | Array<number | string>): void {
        this._jqx(this._componentSelector).jqxTreeGrid('unselectRow' , rowId);
    };

    public uncheckRow(rowId: string): void {
        this._jqx(this._componentSelector).jqxTreeGrid('uncheckRow' , rowId);
    };

    public updateRow(rowId: number | string, data: any): void {
        this._jqx(this._componentSelector).jqxTreeGrid('updateRow' , rowId, data);
    };

    public unlockRow(rowId: string | number | Array<number | string>): void {
        this._jqx(this._componentSelector).jqxTreeGrid('unlockRow' , rowId);
    };

    private _manageProps(): ITreeGridProps {
        const widgetProps: string[] = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','checkboxes','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','height','hierarchicalCheckboxes','icons','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pageSizeMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','rowDetailsRenderer','renderToolbar','renderStatusBar','rendering','rendered','rtl','source','sortable','showAggregates','showSubAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','showHeader','theme','toolbarHeight','width','virtualModeCreateRecords','virtualModeRecordCreating'];

        const options = {} as ITreeGridProps;

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

export default JqxTreeGrid;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ITreeGridEditSettings {
    saveOnEnter?: boolean;
    saveOnPageChange?: boolean;
    saveOnBlur?: boolean;
    saveOnSelectionChange?: boolean;
    cancelOnEsc?: boolean;
    editSingleCell?: boolean;
    editOnDoubleClick?: boolean;
    editOnF2?: boolean;
}

export interface ITreeGridExportSettings {
    columnsHeader?: boolean;
    hiddenColumns?: boolean;
    serverURL?: string | any;
    characterSet?: string;
    collapsedRecords?: boolean;
    recordsInView?: boolean;
    fileName?: string | null;
}

export interface ITreeGridGetRow {
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

export interface ITreeGridRowDetailsRenderer {
    key?: number;
    dataRow?: number;
}

export interface ITreeGridRenderStatusBar {
    statusbar?: object;
}

export interface ITreeGridRenderToolbar {
    toolbar?: object;
}

export interface ITreeGridScrollOffset {
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
    selectionMode?: 'multipleRows' | 'singleRow' | 'custom' | 'none';
    showHeader?: boolean;
    theme?: string;
    toolbarHeight?: number;
    width?: string | number;
    virtualModeCreateRecords?: (expandedRecord?: any, done?: any) => void;
    virtualModeRecordCreating?: (record?: any) => any;
}

export interface ITreeGridProps extends ITreeGridOptions {
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
