/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxdata.export.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxcheckbox.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxcombobox.js';
import '../jqwidgets/jqxnumberinput.js';
import '../jqwidgets/jqxdropdownlist.js';
import '../jqwidgets/jqxdatatable.js';
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxDataTable',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDataTableComponent implements OnChanges, AfterViewInit, AfterViewChecked
{
   @Input('altRows') attrAltRows: boolean;
   @Input('autoRowHeight') attrAutoRowHeight: boolean;
   @Input('aggregatesHeight') attrAggregatesHeight: number;
   @Input('autoShowLoadElement') attrAutoShowLoadElement: boolean;
   @Input('columnsHeight') attrColumnsHeight: number;
   @Input('columns') attrColumns: Array<jqwidgets.DataTableColumns>;
   @Input('columnGroups') attrColumnGroups: Array<jqwidgets.DataTableColumnGroups>;
   @Input('columnsResize') attrColumnsResize: boolean;
   @Input('columnsReorder') attrColumnsReorder: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('editable') attrEditable: boolean;
   @Input('editSettings') attrEditSettings: jqwidgets.DataTableEditSettings;
   @Input('exportSettings') attrExportSettings: jqwidgets.DataTableExportSettings;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('enableBrowserSelection') attrEnableBrowserSelection: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterHeight') attrFilterHeight: number;
   @Input('filterMode') attrFilterMode: any;
   @Input('groups') attrGroups: Array<any>;
   @Input('groupsRenderer') attrGroupsRenderer: (value:any, rowData?:any, level?:number) => string;
   @Input('initRowDetails') attrInitRowDetails: (id:number, row?:any, element?:any, rowInfo?:any) => void;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('localization') attrLocalization: any;
   @Input('pagerHeight') attrPagerHeight: number;
   @Input('pageSize') attrPageSize: number;
   @Input('pageSizeOptions') attrPageSizeOptions: Array<string | number>;
   @Input('pageable') attrPageable: boolean;
   @Input('pagerPosition') attrPagerPosition: any;
   @Input('pagerMode') attrPagerMode: any;
   @Input('pagerButtonsCount') attrPagerButtonsCount: number;
   @Input('pagerRenderer') attrPagerRenderer: () => any;
   @Input('ready') attrReady: () => void;
   @Input('rowDetails') attrRowDetails: boolean;
   @Input('renderToolbar') attrRenderToolbar: (toolbar:any) => void;
   @Input('renderStatusbar') attrRenderStatusbar: (statusbar:any) => void;
   @Input('rendering') attrRendering: () => void;
   @Input('rendered') attrRendered: () => void;
   @Input('rtl') attrRtl: boolean;
   @Input('source') attrSource: any;
   @Input('sortable') attrSortable: boolean;
   @Input('showAggregates') attrShowAggregates: boolean;
   @Input('showToolbar') attrShowToolbar: boolean;
   @Input('showStatusbar') attrShowStatusbar: boolean;
   @Input('statusBarHeight') attrStatusBarHeight: number;
   @Input('scrollBarSize') attrScrollBarSize: number | string;
   @Input('selectionMode') attrSelectionMode: any;
   @Input('serverProcessing') attrServerProcessing: boolean;
   @Input('showHeader') attrShowHeader: boolean;
   @Input('theme') attrTheme: string;
   @Input('toolbarHeight') attrToolbarHeight: number;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','groups','groupsRenderer','height','initRowDetails','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','renderToolbar','renderStatusbar','rendering','rendered','rtl','source','sortable','showAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','serverProcessing','showHeader','theme','toolbarHeight','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDataTable;

   content: String;
   container: HTMLDivElement;
   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
   }; 

    ngAfterViewInit() {
       let children = JQXLite(this.elementRef.nativeElement.children).find("tr"); 
       let html = ""; 
       let options = {}; 

       if (children.length > 0) {
           this.container = document.createElement('div');
           html = this.elementRef.nativeElement.innerHTML;
           this.container.appendChild(this.elementRef.nativeElement.firstChild);
           this.elementRef.nativeElement.innerHTML = html;
           this.content = html;

           let result = JQXLite.jqx.parseSourceTag(this.container);
           if (this['attrColumns'] !== undefined) {  
;                options['source'] = result.source;                
           }
           else {
                options['source'] = result.source;
                options['columns'] = result.columns;
           }
      }

      if (this.autoCreate) {
         this.createComponent(options); 
      }
   }; 

 ngAfterViewChecked() {
    if (this.container) {
        if (this.content !== this.container.innerHTML) {
            this.content = this.container.innerHTML;
            let result = JQXLite.jqx.parseSourceTag(this.container);

            let columns = this.host.jqxGrid('columns');

            if (columns.length === 0) {
                this.host.jqxGrid({ source: result.source, columns: result.columns });
            }
            else {
                this.host.jqxGrid({ source: result.source });
            }
        }
    }
    };

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDataTable(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDataTable(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDataTable(this.properties[i])) {
                  this.host.jqxDataTable(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
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

   height(arg?: number | string) : any {
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

   pageSizeOptions(arg?: Array<string | number>) : any {
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

   scrollBarSize(arg?: number | string) : any {
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

   width(arg?: string | number) : any {
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
   @Output() onBindingComplete = new EventEmitter();
   @Output() onCellBeginEdit = new EventEmitter();
   @Output() onCellEndEdit = new EventEmitter();
   @Output() onCellValueChanged = new EventEmitter();
   @Output() onColumnResized = new EventEmitter();
   @Output() onColumnReordered = new EventEmitter();
   @Output() onSort = new EventEmitter();
   @Output() onFilter = new EventEmitter();
   @Output() onPageChanged = new EventEmitter();
   @Output() onPageSizeChanged = new EventEmitter();
   @Output() onRowClick = new EventEmitter();
   @Output() onRowDoubleClick = new EventEmitter();
   @Output() onRowSelect = new EventEmitter();
   @Output() onRowUnselect = new EventEmitter();
   @Output() onRowBeginEdit = new EventEmitter();
   @Output() onRowEndEdit = new EventEmitter();
   @Output() onRowExpand = new EventEmitter();
   @Output() onRowCollapse = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('cellBeginEdit', (eventData: any) => { this.onCellBeginEdit.emit(eventData); });
      this.host.on('cellEndEdit', (eventData: any) => { this.onCellEndEdit.emit(eventData); });
      this.host.on('cellValueChanged', (eventData: any) => { this.onCellValueChanged.emit(eventData); });
      this.host.on('columnResized', (eventData: any) => { this.onColumnResized.emit(eventData); });
      this.host.on('columnReordered', (eventData: any) => { this.onColumnReordered.emit(eventData); });
      this.host.on('sort', (eventData: any) => { this.onSort.emit(eventData); });
      this.host.on('filter', (eventData: any) => { this.onFilter.emit(eventData); });
      this.host.on('pageChanged', (eventData: any) => { this.onPageChanged.emit(eventData); });
      this.host.on('pageSizeChanged', (eventData: any) => { this.onPageSizeChanged.emit(eventData); });
      this.host.on('rowClick', (eventData: any) => { this.onRowClick.emit(eventData); });
      this.host.on('rowDoubleClick', (eventData: any) => { this.onRowDoubleClick.emit(eventData); });
      this.host.on('rowSelect', (eventData: any) => { this.onRowSelect.emit(eventData); });
      this.host.on('rowUnselect', (eventData: any) => { this.onRowUnselect.emit(eventData); });
      this.host.on('rowBeginEdit', (eventData: any) => { this.onRowBeginEdit.emit(eventData); });
      this.host.on('rowEndEdit', (eventData: any) => { this.onRowEndEdit.emit(eventData); });
      this.host.on('rowExpand', (eventData: any) => { this.onRowExpand.emit(eventData); });
      this.host.on('rowCollapse', (eventData: any) => { this.onRowCollapse.emit(eventData); });
   }

} //jqxDataTableComponent


