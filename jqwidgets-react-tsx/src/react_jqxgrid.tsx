
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxGrid extends React.PureComponent<IGridProps, IState> {
    protected static getDerivedStateFromProps(props: IGridProps, state: IState): null | IState {
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

    constructor(props: IGridProps) {
        super(props);

        this._id = 'JqxGrid' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IGridProps;
        this._jqx(this._componentSelector).jqxGrid(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IGridProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IGridProps): void {
        this._jqx(this._componentSelector).jqxGrid(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxGrid(option);
    }

    public autoresizecolumns(type?: string): void {
        this._jqx(this._componentSelector).jqxGrid('autoresizecolumns' , type);
    };

    public autoresizecolumn(dataField: string, type?: string): void {
        this._jqx(this._componentSelector).jqxGrid('autoresizecolumn' , dataField, type);
    };

    public beginupdate(): void {
        this._jqx(this._componentSelector).jqxGrid('beginupdate' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxGrid('clear' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxGrid('destroy' );
    };

    public endupdate(): void {
        this._jqx(this._componentSelector).jqxGrid('endupdate' );
    };

    public ensurerowvisible(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('ensurerowvisible' , rowBoundIndex);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxGrid('focus' );
    };

    public getcolumnindex(dataField: string): number {
        return this._jqx(this._componentSelector).jqxGrid('getcolumnindex' , dataField);
    };

    public getcolumn(dataField: string): IGridGetColumn {
        return this._jqx(this._componentSelector).jqxGrid('getcolumn' , dataField);
    };

    public getcolumnproperty(dataField: string, propertyName: string): any {
        return this._jqx(this._componentSelector).jqxGrid('getcolumnproperty' , dataField, propertyName);
    };

    public getrowid(rowBoundIndex: number): string {
        return this._jqx(this._componentSelector).jqxGrid('getrowid' , rowBoundIndex);
    };

    public getrowdata(rowBoundIndex: number): any {
        return this._jqx(this._componentSelector).jqxGrid('getrowdata' , rowBoundIndex);
    };

    public getrowdatabyid(rowID: string): any {
        return this._jqx(this._componentSelector).jqxGrid('getrowdatabyid' , rowID);
    };

    public getrowboundindexbyid(rowID: string): number {
        return this._jqx(this._componentSelector).jqxGrid('getrowboundindexbyid' , rowID);
    };

    public getrowboundindex(rowDisplayIndex: number): number {
        return this._jqx(this._componentSelector).jqxGrid('getrowboundindex' , rowDisplayIndex);
    };

    public getrows(): any[] {
        return this._jqx(this._componentSelector).jqxGrid('getrows' );
    };

    public getboundrows(): any[] {
        return this._jqx(this._componentSelector).jqxGrid('getboundrows' );
    };

    public getdisplayrows(): any[] {
        return this._jqx(this._componentSelector).jqxGrid('getdisplayrows' );
    };

    public getdatainformation(): IGridGetDataInformation {
        return this._jqx(this._componentSelector).jqxGrid('getdatainformation' );
    };

    public getsortinformation(): IGridGetSortInformation {
        return this._jqx(this._componentSelector).jqxGrid('getsortinformation' );
    };

    public getpaginginformation(): IGridGetPagingInformation {
        return this._jqx(this._componentSelector).jqxGrid('getpaginginformation' );
    };

    public hidecolumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('hidecolumn' , dataField);
    };

    public hideloadelement(): void {
        this._jqx(this._componentSelector).jqxGrid('hideloadelement' );
    };

    public hiderowdetails(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('hiderowdetails' , rowBoundIndex);
    };

    public iscolumnvisible(dataField: string): boolean {
        return this._jqx(this._componentSelector).jqxGrid('iscolumnvisible' , dataField);
    };

    public iscolumnpinned(dataField: string): boolean {
        return this._jqx(this._componentSelector).jqxGrid('iscolumnpinned' , dataField);
    };

    public localizestrings(localizationobject: IGridLocalizationobject): void {
        this._jqx(this._componentSelector).jqxGrid('localizestrings' , localizationobject);
    };

    public pincolumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('pincolumn' , dataField);
    };

    public refreshdata(): void {
        this._jqx(this._componentSelector).jqxGrid('refreshdata' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxGrid('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxGrid('render' );
    };

    public scrolloffset(top: number, left: number): void {
        this._jqx(this._componentSelector).jqxGrid('scrolloffset' , top, left);
    };

    public scrollposition(): IGridScrollPosition {
        return this._jqx(this._componentSelector).jqxGrid('scrollposition' );
    };

    public showloadelement(): void {
        this._jqx(this._componentSelector).jqxGrid('showloadelement' );
    };

    public showrowdetails(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('showrowdetails' , rowBoundIndex);
    };

    public setcolumnindex(dataField: string, index: number): void {
        this._jqx(this._componentSelector).jqxGrid('setcolumnindex' , dataField, index);
    };

    public setcolumnproperty(dataField: string, propertyName: any, propertyValue: any): void {
        this._jqx(this._componentSelector).jqxGrid('setcolumnproperty' , dataField, propertyName, propertyValue);
    };

    public showcolumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('showcolumn' , dataField);
    };

    public unpincolumn(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('unpincolumn' , dataField);
    };

    public updatebounddata(type?: any): void {
        this._jqx(this._componentSelector).jqxGrid('updatebounddata' , type);
    };

    public updating(): boolean {
        return this._jqx(this._componentSelector).jqxGrid('updating' );
    };

    public getsortcolumn(): string {
        return this._jqx(this._componentSelector).jqxGrid('getsortcolumn' );
    };

    public removesort(): void {
        this._jqx(this._componentSelector).jqxGrid('removesort' );
    };

    public sortby(dataField: string, sortOrder: string): void {
        this._jqx(this._componentSelector).jqxGrid('sortby' , dataField, sortOrder);
    };

    public addgroup(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('addgroup' , dataField);
    };

    public cleargroups(): void {
        this._jqx(this._componentSelector).jqxGrid('cleargroups' );
    };

    public collapsegroup(group: number | string): void {
        this._jqx(this._componentSelector).jqxGrid('collapsegroup' , group);
    };

    public collapseallgroups(): void {
        this._jqx(this._componentSelector).jqxGrid('collapseallgroups' );
    };

    public expandallgroups(): void {
        this._jqx(this._componentSelector).jqxGrid('expandallgroups' );
    };

    public expandgroup(group: number | string): void {
        this._jqx(this._componentSelector).jqxGrid('expandgroup' , group);
    };

    public getrootgroupscount(): number {
        return this._jqx(this._componentSelector).jqxGrid('getrootgroupscount' );
    };

    public getgroup(groupIndex: number): IGridGetGroup {
        return this._jqx(this._componentSelector).jqxGrid('getgroup' , groupIndex);
    };

    public insertgroup(groupIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('insertgroup' , groupIndex, dataField);
    };

    public iscolumngroupable(): boolean {
        return this._jqx(this._componentSelector).jqxGrid('iscolumngroupable' );
    };

    public removegroupat(groupIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('removegroupat' , groupIndex);
    };

    public removegroup(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('removegroup' , dataField);
    };

    public addfilter(dataField: string, filterGroup: any, refreshGrid?: boolean): void {
        this._jqx(this._componentSelector).jqxGrid('addfilter' , dataField, filterGroup, refreshGrid);
    };

    public applyfilters(): void {
        this._jqx(this._componentSelector).jqxGrid('applyfilters' );
    };

    public clearfilters(): void {
        this._jqx(this._componentSelector).jqxGrid('clearfilters' );
    };

    public getfilterinformation(): any {
        return this._jqx(this._componentSelector).jqxGrid('getfilterinformation' );
    };

    public getcolumnat(index: number): any {
        return this._jqx(this._componentSelector).jqxGrid('getcolumnat' , index);
    };

    public removefilter(dataField: string, refreshGrid: boolean): void {
        this._jqx(this._componentSelector).jqxGrid('removefilter' , dataField, refreshGrid);
    };

    public refreshfilterrow(): void {
        this._jqx(this._componentSelector).jqxGrid('refreshfilterrow' );
    };

    public gotopage(pagenumber: number): void {
        this._jqx(this._componentSelector).jqxGrid('gotopage' , pagenumber);
    };

    public gotoprevpage(): void {
        this._jqx(this._componentSelector).jqxGrid('gotoprevpage' );
    };

    public gotonextpage(): void {
        this._jqx(this._componentSelector).jqxGrid('gotonextpage' );
    };

    public addrow(rowIds: any, data: any, rowPosition?: any): void {
        this._jqx(this._componentSelector).jqxGrid('addrow' , rowIds, data, rowPosition);
    };

    public begincelledit(rowBoundIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('begincelledit' , rowBoundIndex, dataField);
    };

    public beginrowedit(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('beginrowedit' , rowBoundIndex);
    };

    public closemenu(): void {
        this._jqx(this._componentSelector).jqxGrid('closemenu' );
    };

    public deleterow(rowIds: string | number | Array<number | string>): void {
        this._jqx(this._componentSelector).jqxGrid('deleterow' , rowIds);
    };

    public endcelledit(rowBoundIndex: number, dataField: string, confirmChanges: boolean): void {
        this._jqx(this._componentSelector).jqxGrid('endcelledit' , rowBoundIndex, dataField, confirmChanges);
    };

    public endrowedit(rowBoundIndex: number, confirmChanges: boolean): void {
        this._jqx(this._componentSelector).jqxGrid('endrowedit' , rowBoundIndex, confirmChanges);
    };

    public getcell(rowBoundIndex: number, datafield: string): IGridGetCell {
        return this._jqx(this._componentSelector).jqxGrid('getcell' , rowBoundIndex, datafield);
    };

    public getcellatposition(left: number, top: number): IGridGetCell {
        return this._jqx(this._componentSelector).jqxGrid('getcellatposition' , left, top);
    };

    public getcelltext(rowBoundIndex: number, dataField: string): string {
        return this._jqx(this._componentSelector).jqxGrid('getcelltext' , rowBoundIndex, dataField);
    };

    public getcelltextbyid(rowID: string, dataField: string): string {
        return this._jqx(this._componentSelector).jqxGrid('getcelltextbyid' , rowID, dataField);
    };

    public getcellvaluebyid(rowID: string, dataField: string): any {
        return this._jqx(this._componentSelector).jqxGrid('getcellvaluebyid' , rowID, dataField);
    };

    public getcellvalue(rowBoundIndex: number, dataField: string): any {
        return this._jqx(this._componentSelector).jqxGrid('getcellvalue' , rowBoundIndex, dataField);
    };

    public isBindingCompleted(): boolean {
        return this._jqx(this._componentSelector).jqxGrid('isBindingCompleted' );
    };

    public openmenu(dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('openmenu' , dataField);
    };

    public setcellvalue(rowBoundIndex: number, dataField: string, value: any): void {
        this._jqx(this._componentSelector).jqxGrid('setcellvalue' , rowBoundIndex, dataField, value);
    };

    public setcellvaluebyid(rowID: string, dataField: string, value: any): void {
        this._jqx(this._componentSelector).jqxGrid('setcellvaluebyid' , rowID, dataField, value);
    };

    public showvalidationpopup(rowBoundIndex: number, dataField: string, validationMessage: string): void {
        this._jqx(this._componentSelector).jqxGrid('showvalidationpopup' , rowBoundIndex, dataField, validationMessage);
    };

    public updaterow(rowIds: string | number | Array<number | string>, data: any): void {
        this._jqx(this._componentSelector).jqxGrid('updaterow' , rowIds, data);
    };

    public clearselection(): void {
        this._jqx(this._componentSelector).jqxGrid('clearselection' );
    };

    public getselectedrowindex(): number {
        return this._jqx(this._componentSelector).jqxGrid('getselectedrowindex' );
    };

    public getselectedrowindexes(): number[] {
        return this._jqx(this._componentSelector).jqxGrid('getselectedrowindexes' );
    };

    public getselectedcell(): IGridGetSelectedCell {
        return this._jqx(this._componentSelector).jqxGrid('getselectedcell' );
    };

    public getselectedcells(): IGridGetSelectedCell[] {
        return this._jqx(this._componentSelector).jqxGrid('getselectedcells' );
    };

    public selectcell(rowBoundIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('selectcell' , rowBoundIndex, dataField);
    };

    public selectallrows(): void {
        this._jqx(this._componentSelector).jqxGrid('selectallrows' );
    };

    public selectrow(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('selectrow' , rowBoundIndex);
    };

    public unselectrow(rowBoundIndex: number): void {
        this._jqx(this._componentSelector).jqxGrid('unselectrow' , rowBoundIndex);
    };

    public unselectcell(rowBoundIndex: number, dataField: string): void {
        this._jqx(this._componentSelector).jqxGrid('unselectcell' , rowBoundIndex, dataField);
    };

    public getcolumnaggregateddata(dataField: string, aggregates: any[]): string {
        return this._jqx(this._componentSelector).jqxGrid('getcolumnaggregateddata' , dataField, aggregates);
    };

    public refreshaggregates(): void {
        this._jqx(this._componentSelector).jqxGrid('refreshaggregates' );
    };

    public renderaggregates(): void {
        this._jqx(this._componentSelector).jqxGrid('renderaggregates' );
    };

    public exportdata(dataType: string, fileName?: string, exportHeader?: boolean, rows?: number[], exportHiddenColumns?: boolean, serverURL?: string, charSet?: string): any {
        return this._jqx(this._componentSelector).jqxGrid('exportdata' , dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    };

    public getstate(): IGridGetState {
        return this._jqx(this._componentSelector).jqxGrid('getstate' );
    };

    public loadstate(stateobject: any): void {
        this._jqx(this._componentSelector).jqxGrid('loadstate' , stateobject);
    };

    public savestate(): IGridGetState {
        return this._jqx(this._componentSelector).jqxGrid('savestate' );
    };

    private _manageProps(): IGridProps {
        const widgetProps: string[] = ['altrows','altstart','altstep','autoshowloadelement','autoshowfiltericon','autoshowcolumnsmenubutton','showcolumnlines','showrowlines','showcolumnheaderlines','adaptive','adaptivewidth','clipboard','closeablegroups','columnsmenuwidth','columnmenuopening','columnmenuclosing','cellhover','enablekeyboarddelete','enableellipsis','enablemousewheel','enableanimations','enabletooltips','enablehover','enablebrowserselection','everpresentrowposition','everpresentrowheight','everpresentrowactions','everpresentrowactionsmode','filterrowheight','filtermode','groupsrenderer','groupcolumnrenderer','groupsexpandedbydefault','handlekeyboardnavigation','pagerrenderer','rtl','showdefaultloadelement','showfiltercolumnbackground','showfiltermenuitems','showpinnedcolumnbackground','showsortcolumnbackground','showsortmenuitems','showgroupmenuitems','showrowdetailscolumn','showheader','showgroupsheader','showaggregates','showgroupaggregates','showeverpresentrow','showfilterrow','showemptyrow','showstatusbar','statusbarheight','showtoolbar','selectionmode','updatefilterconditions','updatefilterpanel','theme','toolbarheight','autoheight','autorowheight','columnsheight','deferreddatafields','groupsheaderheight','groupindentwidth','height','pagerheight','rowsheight','scrollbarsize','scrollmode','scrollfeedback','width','autosavestate','autoloadstate','columns','columngroups','columnsmenu','columnsresize','columnsautoresize','columnsreorder','disabled','editable','editmode','filter','filterable','groupable','groups','horizontalscrollbarstep','horizontalscrollbarlargestep','initrowdetails','keyboardnavigation','localization','pagesize','pagesizeoptions','pagermode','pagerbuttonscount','pageable','rowdetails','rowdetailstemplate','ready','rendered','renderstatusbar','rendertoolbar','rendergridrows','sortable','sortmode','selectedrowindex','selectedrowindexes','source','sorttogglestates','updatedelay','virtualmode','verticalscrollbarstep','verticalscrollbarlargestep'];

        const options = {} as IGridProps;

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

export default JqxGrid;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IGridColumn {
    text?: string;
    datafield?: string;
    displayfield?: string;
    sortable?: boolean;
    filterable?: boolean;
    filter?: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: any) => any;
    hideable?: boolean;
    hidden?: boolean;
    groupable?: boolean;
    menu?: boolean;
    exportable?: boolean;
    columngroup?: string;
    enabletooltips?: boolean;
    columntype?: 'number' | 'checkbox' | 'numberinput' | 'dropdownlist' | 'combobox' | 'datetimeinput' | 'textbox' | 'template' | 'custom';
    renderer?: (defaultText?: string, alignment?: string, height?: number) => string;
    rendered?: (columnHeaderElement?: any) => void;
    cellsrenderer?: (row?: number, columnfield?: string, value?: any, defaulthtml?: string, columnproperties?: any, rowdata?: any) => string;
    aggregatesrenderer?: (aggregates?: any, column?: any, element?: any, summaryData?: any)  => string;
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
    cellsformat?: 'n2' | 'f2' | 'c2' | 'f' | 'n' | 'c' | 'p' | 'd' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    cellclassname?: string;
    aggregates?: any;
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
    filtertype?: 'textbox' | 'input' | 'checkedlist' | 'list' | 'number' | 'checkbox' | 'date' | 'range' | 'custom';
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
    pager?: (pagenum?: number, pagesize?: number, oldpagenum?: number) => any;
    sortcolumn?: string;
    sortdirection?: 'asc' | 'desc';
    sort?: (column?: any, direction?: any) => void;
    filter?: (filters?: any, recordsArray?: any) => void;
    addrow?: (rowid?: any, rowdata?: any, position?: any, commit?: boolean) => void;
    deleterow?: (rowid?: any, commit?: boolean) => void;
    updaterow?: (rowid?: any, newdata?: any, commit? : any) => void;
    processdata?: (data: any) => void;
    formatdata?: (data: any) => any;
    async?: boolean;
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
    cellclassname?: string;
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
    pagenum?: string;
    pagesize?: any;
    pagescount?: any;
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
    value?: number;
    row?: number;
    column?: number;
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
    menu?: any;
    datafield?: any;
    height?: any;
}

export interface IGridColumnmenuclosing {
    menu?: any;
    datafield?: any;
    height?: any;
}

export interface IGridCellhover {
    cellhtmlElement?: any;
    x?: any;
    y?: any;
}

export interface IGridGroupsrenderer {
    text?: string;
    group?: number;
    expanded?: boolean;
    data?: object;
}

export interface IGridGroupcolumnrenderer {
    text?: any;
}

export interface IGridHandlekeyboardnavigation  {
    event?: any;
}

export interface IGridScrollfeedback {
    row?: object;
}

export interface IGridFilter {
    cellValue?: any;
    rowData?: any;
    dataField?: string;
    filterGroup?: any;
    defaultFilterResult?: boolean;
}

export interface IGridRendertoolbar {
    toolbar?: any;
}

export interface IGridRenderstatusbar {
    statusbar?: any;
}

interface IGridOptions {
    altrows?: boolean;
    altstart?: number;
    altstep?: number;
    autoshowloadelement?: boolean;
    autoshowfiltericon?: boolean;
    autoshowcolumnsmenubutton?: boolean;
    showcolumnlines?: boolean;
    showrowlines?: boolean;
    showcolumnheaderlines?: boolean;
    adaptive?: boolean;
    adaptivewidth?: number;
    clipboard?: boolean;
    closeablegroups?: boolean;
    columnsmenuwidth?: number;
    columnmenuopening?: (menu?: IGridColumnmenuopening['menu'], datafield?: IGridColumnmenuopening['datafield'], height?: IGridColumnmenuopening['height']) => boolean;
    columnmenuclosing?: (menu?: IGridColumnmenuclosing['menu'], datafield?: IGridColumnmenuclosing['datafield'], height?: IGridColumnmenuclosing['height']) => boolean;
    cellhover?: (cellhtmlElement?: IGridCellhover['cellhtmlElement'], x?: IGridCellhover['x'], y?: IGridCellhover['y']) => void;
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
    groupsrenderer?: (text?: IGridGroupsrenderer['text'], group?: IGridGroupsrenderer['group'], expanded?: IGridGroupsrenderer['expanded'], data?: IGridGroupsrenderer['data']) => string;
    groupcolumnrenderer?: (text?: IGridGroupcolumnrenderer['text']) => string;
    groupsexpandedbydefault?: boolean;
    handlekeyboardnavigation?: (event: IGridHandlekeyboardnavigation['event']) => boolean;
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
    selectionmode?: 'none' | 'singlerow' | 'multiplerows' | 'multiplerowsextended' | 'singlecell' | 'multiplecells' | 'multiplecellsextended' | 'multiplecellsadvanced' | 'checkbox';
    updatefilterconditions?: (type?: string, defaultconditions?: any) => any;
    updatefilterpanel?: (filtertypedropdown1?: any, filtertypedropdown2?: any, filteroperatordropdown?: any, filterinputfield1?: any, filterinputfield2?: any, filterbutton?: any, clearbutton?: any, columnfilter?: any, filtertype?: any, filterconditions?: any) => any;
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
    columngroups?: any[];
    columnsmenu?: boolean;
    columnsresize?: boolean;
    columnsautoresize?: boolean;
    columnsreorder?: boolean;
    disabled?: boolean;
    editable?: boolean;
    editmode?: 'click' | 'selectedcell' | 'selectedrow' | 'dblclick' | 'programmatic';
    filter?: (cellValue?: IGridFilter['cellValue'], rowData?: IGridFilter['rowData'], dataField?: IGridFilter['dataField'], filterGroup?: IGridFilter['filterGroup'], defaultFilterResult?: IGridFilter['defaultFilterResult']) => any;
    filterable?: boolean;
    groupable?: boolean;
    groups?: string[];
    horizontalscrollbarstep?: number;
    horizontalscrollbarlargestep?: number;
    initrowdetails?: (index?: number, parentElement?: any, gridElement?: any, datarecord?: any) => void;
    keyboardnavigation?: boolean;
    localization?: IGridLocalizationobject;
    pagesize?: number;
    pagesizeoptions?: Array<number | string>;
    pagermode?: 'simple' | 'default';
    pagerbuttonscount?: number;
    pageable?: boolean;
    rowdetails?: boolean;
    rowdetailstemplate?: any;
    ready?: () => void;
    rendered?: () => void;
    renderstatusbar?: (statusbar?: IGridRenderstatusbar['statusbar']) => void;
    rendertoolbar?: (toolbar?: IGridRendertoolbar['toolbar']) => void;
    rendergridrows?: (params?: any) => any;
    sortable?: boolean;
    sortmode?: string;
    selectedrowindex?: number;
    selectedrowindexes?: number[];
    source?: IGridSource;
    sorttogglestates?: '0' | '1' | '2';
    updatedelay?: number;
    virtualmode?: boolean;
    verticalscrollbarstep?: number;
    verticalscrollbarlargestep?: number;
}

export interface IGridProps extends IGridOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBindingcomplete?: (e?: Event) => void;
    onColumnresized?: (e?: Event) => void;
    onColumnreordered?: (e?: Event) => void;
    onColumnclick?: (e?: Event) => void;
    onCellclick?: (e?: Event) => void;
    onCelldoubleclick?: (e?: Event) => void;
    onCellselect?: (e?: Event) => void;
    onCellunselect?: (e?: Event) => void;
    onCellvaluechanged?: (e?: Event) => void;
    onCellbeginedit?: (e?: Event) => void;
    onCellendedit?: (e?: Event) => void;
    onFilter?: (e?: Event) => void;
    onGroupschanged?: (e?: Event) => void;
    onGroupexpand?: (e?: Event) => void;
    onGroupcollapse?: (e?: Event) => void;
    onPagechanged?: (e?: Event) => void;
    onPagesizechanged?: (e?: Event) => void;
    onRowclick?: (e?: Event) => void;
    onRowdoubleclick?: (e?: Event) => void;
    onRowselect?: (e?: Event) => void;
    onRowunselect?: (e?: Event) => void;
    onRowexpand?: (e?: Event) => void;
    onRowcollapse?: (e?: Event) => void;
    onSort?: (e?: Event) => void;
}
