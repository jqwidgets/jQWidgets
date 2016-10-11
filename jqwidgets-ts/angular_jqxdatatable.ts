/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDataTable',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDataTableComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxDataTable;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.__wireEvents__();
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDataTable('setOptions', options);
   }

   // jqxDataTableComponent properties
   altRows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('altRows', arg);
      } else {
          return this.host.jqxDataTable('altRows');
      }
   }

   autoRowHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('autoRowHeight', arg);
      } else {
          return this.host.jqxDataTable('autoRowHeight');
      }
   }

   aggregatesHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('aggregatesHeight', arg);
      } else {
          return this.host.jqxDataTable('aggregatesHeight');
      }
   }

   autoShowLoadElement(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('autoShowLoadElement', arg);
      } else {
          return this.host.jqxDataTable('autoShowLoadElement');
      }
   }

   columnsHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('columnsHeight', arg);
      } else {
          return this.host.jqxDataTable('columnsHeight');
      }
   }

   columns(arg?: Array<jqwidgets.DataTableColumns>) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('columns', arg);
      } else {
          return this.host.jqxDataTable('columns');
      }
   }

   columnGroups(arg?: Array<jqwidgets.DataTableColumnGroups>) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('columnGroups', arg);
      } else {
          return this.host.jqxDataTable('columnGroups');
      }
   }

   columnsResize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('columnsResize', arg);
      } else {
          return this.host.jqxDataTable('columnsResize');
      }
   }

   columnsReorder(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('columnsReorder', arg);
      } else {
          return this.host.jqxDataTable('columnsReorder');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('disabled', arg);
      } else {
          return this.host.jqxDataTable('disabled');
      }
   }

   editable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('editable', arg);
      } else {
          return this.host.jqxDataTable('editable');
      }
   }

   editSettings(arg?: jqwidgets.DataTableEditSettings) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('editSettings', arg);
      } else {
          return this.host.jqxDataTable('editSettings');
      }
   }

   exportSettings(arg?: jqwidgets.DataTableExportSettings) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('exportSettings', arg);
      } else {
          return this.host.jqxDataTable('exportSettings');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('enableHover', arg);
      } else {
          return this.host.jqxDataTable('enableHover');
      }
   }

   enableBrowserSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('enableBrowserSelection', arg);
      } else {
          return this.host.jqxDataTable('enableBrowserSelection');
      }
   }

   filterable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('filterable', arg);
      } else {
          return this.host.jqxDataTable('filterable');
      }
   }

   filterHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('filterHeight', arg);
      } else {
          return this.host.jqxDataTable('filterHeight');
      }
   }

   filterMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('filterMode', arg);
      } else {
          return this.host.jqxDataTable('filterMode');
      }
   }

   groups(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('groups', arg);
      } else {
          return this.host.jqxDataTable('groups');
      }
   }

   groupsRenderer(arg?: (value:any, rowData?:any, level?:number) => string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('groupsRenderer', arg);
      } else {
          return this.host.jqxDataTable('groupsRenderer');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('height', arg);
      } else {
          return this.host.jqxDataTable('height');
      }
   }

   initRowDetails(arg?: (id:number, row?:any, element?:any, rowInfo?:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('initRowDetails', arg);
      } else {
          return this.host.jqxDataTable('initRowDetails');
      }
   }

   incrementalSearch(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('incrementalSearch', arg);
      } else {
          return this.host.jqxDataTable('incrementalSearch');
      }
   }

   localization(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('localization', arg);
      } else {
          return this.host.jqxDataTable('localization');
      }
   }

   pagerHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pagerHeight', arg);
      } else {
          return this.host.jqxDataTable('pagerHeight');
      }
   }

   pageSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pageSize', arg);
      } else {
          return this.host.jqxDataTable('pageSize');
      }
   }

   pageSizeOptions(arg?: Array<String>) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pageSizeOptions', arg);
      } else {
          return this.host.jqxDataTable('pageSizeOptions');
      }
   }

   pageable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pageable', arg);
      } else {
          return this.host.jqxDataTable('pageable');
      }
   }

   pagerPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pagerPosition', arg);
      } else {
          return this.host.jqxDataTable('pagerPosition');
      }
   }

   pagerMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pagerMode', arg);
      } else {
          return this.host.jqxDataTable('pagerMode');
      }
   }

   pagerButtonsCount(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pagerButtonsCount', arg);
      } else {
          return this.host.jqxDataTable('pagerButtonsCount');
      }
   }

   pagerRenderer(arg?: () => any) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('pagerRenderer', arg);
      } else {
          return this.host.jqxDataTable('pagerRenderer');
      }
   }

   ready(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('ready', arg);
      } else {
          return this.host.jqxDataTable('ready');
      }
   }

   rowDetails(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('rowDetails', arg);
      } else {
          return this.host.jqxDataTable('rowDetails');
      }
   }

   renderToolbar(arg?: (toolbar:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('renderToolbar', arg);
      } else {
          return this.host.jqxDataTable('renderToolbar');
      }
   }

   renderStatusbar(arg?: (statusbar:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('renderStatusbar', arg);
      } else {
          return this.host.jqxDataTable('renderStatusbar');
      }
   }

   rendering(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('rendering', arg);
      } else {
          return this.host.jqxDataTable('rendering');
      }
   }

   rendered(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('rendered', arg);
      } else {
          return this.host.jqxDataTable('rendered');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('rtl', arg);
      } else {
          return this.host.jqxDataTable('rtl');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('source', arg);
      } else {
          return this.host.jqxDataTable('source');
      }
   }

   sortable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('sortable', arg);
      } else {
          return this.host.jqxDataTable('sortable');
      }
   }

   showAggregates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('showAggregates', arg);
      } else {
          return this.host.jqxDataTable('showAggregates');
      }
   }

   showToolbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('showToolbar', arg);
      } else {
          return this.host.jqxDataTable('showToolbar');
      }
   }

   showStatusbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('showStatusbar', arg);
      } else {
          return this.host.jqxDataTable('showStatusbar');
      }
   }

   statusBarHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('statusBarHeight', arg);
      } else {
          return this.host.jqxDataTable('statusBarHeight');
      }
   }

   scrollBarSize(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('scrollBarSize', arg);
      } else {
          return this.host.jqxDataTable('scrollBarSize');
      }
   }

   selectionMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('selectionMode', arg);
      } else {
          return this.host.jqxDataTable('selectionMode');
      }
   }

   serverProcessing(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('serverProcessing', arg);
      } else {
          return this.host.jqxDataTable('serverProcessing');
      }
   }

   showHeader(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('showHeader', arg);
      } else {
          return this.host.jqxDataTable('showHeader');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('theme', arg);
      } else {
          return this.host.jqxDataTable('theme');
      }
   }

   toolbarHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('toolbarHeight', arg);
      } else {
          return this.host.jqxDataTable('toolbarHeight');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDataTable('width', arg);
      } else {
          return this.host.jqxDataTable('width');
      }
   }


   // jqxDataTableComponent functions
   addRow(rowIndex: number, rowData: any, rowPosition: any): void {
      this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);

   }
   addFilter(dataField: string, filerGroup: any): void {
      this.host.jqxDataTable('addFilter', dataField, filerGroup);

   }
   applyFilters(): void {
      this.host.jqxDataTable('applyFilters');

   }
   beginUpdate(): void {
      this.host.jqxDataTable('beginUpdate');

   }
   beginRowEdit(rowIndex: number): void {
      this.host.jqxDataTable('beginRowEdit', rowIndex);

   }
   beginCellEdit(rowIndex: number, dataField: string): void {
      this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);

   }
   clearSelection(): void {
      this.host.jqxDataTable('clearSelection');

   }
   clearFilters(): void {
      this.host.jqxDataTable('clearFilters');

   }
   clear(): void {
      this.host.jqxDataTable('clear');

   }
   destroy(): void {
      this.host.jqxDataTable('destroy');

   }
   deleteRow(rowIndex: number): void {
      this.host.jqxDataTable('deleteRow', rowIndex);

   }
   endUpdate(): void {
      this.host.jqxDataTable('endUpdate');

   }
   ensureRowVisible(rowIndex: number): void {
      this.host.jqxDataTable('ensureRowVisible', rowIndex);

   }
   endRowEdit(rowIndex: number, cancelChanges: boolean): void {
      this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);

   }
   endCellEdit(rowIndex: number, dataField: string): void {
      this.host.jqxDataTable('endCellEdit', rowIndex, dataField);

   }
   exportData(exportDataType: any): any {
      return this.host.jqxDataTable('exportData', exportDataType);

   }
   focus(): void {
      this.host.jqxDataTable('focus');

   }
   getColumnProperty(dataField: string, propertyName: string): any {
      return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);

   }
   goToPage(pageIndex: number): void {
      this.host.jqxDataTable('goToPage', pageIndex);

   }
   goToPrevPage(): void {
      this.host.jqxDataTable('goToPrevPage');

   }
   goToNextPage(): void {
      this.host.jqxDataTable('goToNextPage');

   }
   getSelection(): Array<any> {
      return this.host.jqxDataTable('getSelection');

   }
   getRows(): Array<any> {
      return this.host.jqxDataTable('getRows');

   }
   getView(): Array<any> {
      return this.host.jqxDataTable('getView');

   }
   getCellValue(rowIndex: number, dataField: string): any {
      return this.host.jqxDataTable('getCellValue', rowIndex, dataField);

   }
   hideColumn(dataField: string): void {
      this.host.jqxDataTable('hideColumn', dataField);

   }
   hideDetails(rowIndex: boolean): void {
      this.host.jqxDataTable('hideDetails', rowIndex);

   }
   isBindingCompleted(): boolean {
      return this.host.jqxDataTable('isBindingCompleted');

   }
   lockRow(rowIndex: number): void {
      this.host.jqxDataTable('lockRow', rowIndex);

   }
   refresh(): void {
      this.host.jqxDataTable('refresh');

   }
   render(): void {
      this.host.jqxDataTable('render');

   }
   removeFilter(dataField: string): void {
      this.host.jqxDataTable('removeFilter', dataField);

   }
   scrollOffset(top: number, left: number): any {
      return this.host.jqxDataTable('scrollOffset', top, left);

   }
   setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void {
      this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);

   }
   showColumn(dataField: string): void {
      this.host.jqxDataTable('showColumn', dataField);

   }
   selectRow(rowIndex: number): void {
      this.host.jqxDataTable('selectRow', rowIndex);

   }
   showDetails(rowIndex: number): void {
      this.host.jqxDataTable('showDetails', rowIndex);

   }
   setCellValue(rowIndex: number, dataField: string, value: any): void {
      this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);

   }
   sortBy(dataField: string, sortOrder: any): void {
      this.host.jqxDataTable('sortBy', dataField, sortOrder);

   }
   updating(): boolean {
      return this.host.jqxDataTable('updating');

   }
   updateBoundData(): void {
      this.host.jqxDataTable('updateBoundData');

   }
   unselectRow(rowIndex: number): void {
      this.host.jqxDataTable('unselectRow', rowIndex);

   }
   updateRow(rowIndex: number, rowData: any): void {
      this.host.jqxDataTable('updateRow', rowIndex, rowData);

   }
   unlockRow(rowIndex: number): void {
      this.host.jqxDataTable('unlockRow', rowIndex);

   }

   // jqxDataTableComponent events
   @Output() OnBindingComplete = new EventEmitter();
   @Output() OnCellBeginEdit = new EventEmitter();
   @Output() OnCellEndEdit = new EventEmitter();
   @Output() OnCellValueChanged = new EventEmitter();
   @Output() OnColumnResized = new EventEmitter();
   @Output() OnColumnReordered = new EventEmitter();
   @Output() OnSort = new EventEmitter();
   @Output() OnFilter = new EventEmitter();
   @Output() OnPageChanged = new EventEmitter();
   @Output() OnPageSizeChanged = new EventEmitter();
   @Output() OnRowClick = new EventEmitter();
   @Output() OnRowDoubleClick = new EventEmitter();
   @Output() OnRowSelect = new EventEmitter();
   @Output() OnRowUnselect = new EventEmitter();
   @Output() OnRowBeginEdit = new EventEmitter();
   @Output() OnRowEndEdit = new EventEmitter();
   @Output() OnRowExpand = new EventEmitter();
   @Output() OnRowCollapse = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.OnBindingComplete.emit(eventData); });
      this.host.on('cellBeginEdit', (eventData) => { this.OnCellBeginEdit.emit(eventData); });
      this.host.on('cellEndEdit', (eventData) => { this.OnCellEndEdit.emit(eventData); });
      this.host.on('cellValueChanged', (eventData) => { this.OnCellValueChanged.emit(eventData); });
      this.host.on('columnResized', (eventData) => { this.OnColumnResized.emit(eventData); });
      this.host.on('columnReordered', (eventData) => { this.OnColumnReordered.emit(eventData); });
      this.host.on('sort', (eventData) => { this.OnSort.emit(eventData); });
      this.host.on('filter', (eventData) => { this.OnFilter.emit(eventData); });
      this.host.on('pageChanged', (eventData) => { this.OnPageChanged.emit(eventData); });
      this.host.on('pageSizeChanged', (eventData) => { this.OnPageSizeChanged.emit(eventData); });
      this.host.on('rowClick', (eventData) => { this.OnRowClick.emit(eventData); });
      this.host.on('rowDoubleClick', (eventData) => { this.OnRowDoubleClick.emit(eventData); });
      this.host.on('rowSelect', (eventData) => { this.OnRowSelect.emit(eventData); });
      this.host.on('rowUnselect', (eventData) => { this.OnRowUnselect.emit(eventData); });
      this.host.on('rowBeginEdit', (eventData) => { this.OnRowBeginEdit.emit(eventData); });
      this.host.on('rowEndEdit', (eventData) => { this.OnRowEndEdit.emit(eventData); });
      this.host.on('rowExpand', (eventData) => { this.OnRowExpand.emit(eventData); });
      this.host.on('rowCollapse', (eventData) => { this.OnRowCollapse.emit(eventData); });
   }

} //jqxDataTableComponent
