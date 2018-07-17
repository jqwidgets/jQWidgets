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
import '../jqwidgets/jqxtreegrid.js';
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxTreeGrid',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTreeGridComponent implements OnChanges, AfterViewInit, AfterViewChecked
{
   @Input('altRows') attrAltRows: boolean;
   @Input('autoRowHeight') attrAutoRowHeight: boolean;
   @Input('aggregatesHeight') attrAggregatesHeight: number;
   @Input('autoShowLoadElement') attrAutoShowLoadElement: boolean;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('columnsHeight') attrColumnsHeight: number;
   @Input('columns') attrColumns: Array<any>;
   @Input('columnGroups') attrColumnGroups: Array<any>;
   @Input('columnsResize') attrColumnsResize: boolean;
   @Input('columnsReorder') attrColumnsReorder: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('editable') attrEditable: boolean;
   @Input('editSettings') attrEditSettings: jqwidgets.TreeGridEditSettings;
   @Input('exportSettings') attrExportSettings: jqwidgets.TreeGridExportSettings;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('enableBrowserSelection') attrEnableBrowserSelection: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterHeight') attrFilterHeight: number;
   @Input('filterMode') attrFilterMode: any;
   @Input('hierarchicalCheckboxes') attrHierarchicalCheckboxes: boolean;
   @Input('icons') attrIcons: boolean;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('localization') attrLocalization: any;
   @Input('pagerHeight') attrPagerHeight: number;
   @Input('pageSize') attrPageSize: number;
   @Input('pageSizeOptions') attrPageSizeOptions: Array<number | string>;
   @Input('pageable') attrPageable: boolean;
   @Input('pagerPosition') attrPagerPosition: any;
   @Input('pagerMode') attrPagerMode: any;
   @Input('pageSizeMode') attrPageSizeMode: any;
   @Input('pagerButtonsCount') attrPagerButtonsCount: number;
   @Input('pagerRenderer') attrPagerRenderer: () => any;
   @Input('ready') attrReady: () => void;
   @Input('rowDetails') attrRowDetails: boolean;
   @Input('rowDetailsRenderer') attrRowDetailsRenderer: (key: number, dataRow: number) => any;
   @Input('renderToolbar') attrRenderToolbar: (toolBar?: any) => void;
   @Input('renderStatusbar') attrRenderStatusbar: (statusBar?: any) => void;
   @Input('rendering') attrRendering: () => void;
   @Input('rendered') attrRendered: () => void;
   @Input('rtl') attrRtl: boolean;
   @Input('source') attrSource: any;
   @Input('sortable') attrSortable: boolean;
   @Input('showAggregates') attrShowAggregates: boolean;
   @Input('showSubAggregates') attrShowSubAggregates: boolean;
   @Input('showToolbar') attrShowToolbar: boolean;
   @Input('showStatusbar') attrShowStatusbar: boolean;
   @Input('statusBarHeight') attrStatusBarHeight: number;
   @Input('scrollBarSize') attrScrollBarSize: number;
   @Input('selectionMode') attrSelectionMode: any;
   @Input('showHeader') attrShowHeader: boolean;
   @Input('theme') attrTheme: string;
   @Input('toolbarHeight') attrToolbarHeight: number;
   @Input('virtualModeCreateRecords') attrVirtualModeCreateRecords: (expandedRecord?: any, done?: any) => void;
   @Input('virtualModeRecordCreating') attrVirtualModeRecordCreating: (record?: any) => any;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','checkboxes','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','height','hierarchicalCheckboxes','icons','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pageSizeMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','rowDetailsRenderer','renderToolbar','renderStatusbar','rendering','rendered','rtl','source','sortable','showAggregates','showSubAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','showHeader','theme','toolbarHeight','width','virtualModeCreateRecords','virtualModeRecordCreating'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTreeGrid;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeGrid(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTreeGrid(this.properties[i])) {
                  this.host.jqxTreeGrid(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeGrid', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxTreeGrid('setOptions', options);
   }

   // jqxTreeGridComponent properties
   altRows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('altRows', arg);
      } else {
          return this.host.jqxTreeGrid('altRows');
      }
   }

   autoRowHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('autoRowHeight', arg);
      } else {
          return this.host.jqxTreeGrid('autoRowHeight');
      }
   }

   aggregatesHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('aggregatesHeight', arg);
      } else {
          return this.host.jqxTreeGrid('aggregatesHeight');
      }
   }

   autoShowLoadElement(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('autoShowLoadElement', arg);
      } else {
          return this.host.jqxTreeGrid('autoShowLoadElement');
      }
   }

   checkboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('checkboxes', arg);
      } else {
          return this.host.jqxTreeGrid('checkboxes');
      }
   }

   columnsHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('columnsHeight', arg);
      } else {
          return this.host.jqxTreeGrid('columnsHeight');
      }
   }

   columns(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('columns', arg);
      } else {
          return this.host.jqxTreeGrid('columns');
      }
   }

   columnGroups(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('columnGroups', arg);
      } else {
          return this.host.jqxTreeGrid('columnGroups');
      }
   }

   columnsResize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('columnsResize', arg);
      } else {
          return this.host.jqxTreeGrid('columnsResize');
      }
   }

   columnsReorder(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('columnsReorder', arg);
      } else {
          return this.host.jqxTreeGrid('columnsReorder');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('disabled', arg);
      } else {
          return this.host.jqxTreeGrid('disabled');
      }
   }

   editable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('editable', arg);
      } else {
          return this.host.jqxTreeGrid('editable');
      }
   }

   editSettings(arg?: jqwidgets.TreeGridEditSettings) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('editSettings', arg);
      } else {
          return this.host.jqxTreeGrid('editSettings');
      }
   }

   exportSettings(arg?: jqwidgets.TreeGridExportSettings) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('exportSettings', arg);
      } else {
          return this.host.jqxTreeGrid('exportSettings');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('enableHover', arg);
      } else {
          return this.host.jqxTreeGrid('enableHover');
      }
   }

   enableBrowserSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('enableBrowserSelection', arg);
      } else {
          return this.host.jqxTreeGrid('enableBrowserSelection');
      }
   }

   filterable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('filterable', arg);
      } else {
          return this.host.jqxTreeGrid('filterable');
      }
   }

   filterHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('filterHeight', arg);
      } else {
          return this.host.jqxTreeGrid('filterHeight');
      }
   }

   filterMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('filterMode', arg);
      } else {
          return this.host.jqxTreeGrid('filterMode');
      }
   }

   height(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('height', arg);
      } else {
          return this.host.jqxTreeGrid('height');
      }
   }

   hierarchicalCheckboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
      } else {
          return this.host.jqxTreeGrid('hierarchicalCheckboxes');
      }
   }

   icons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('icons', arg);
      } else {
          return this.host.jqxTreeGrid('icons');
      }
   }

   incrementalSearch(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('incrementalSearch', arg);
      } else {
          return this.host.jqxTreeGrid('incrementalSearch');
      }
   }

   localization(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('localization', arg);
      } else {
          return this.host.jqxTreeGrid('localization');
      }
   }

   pagerHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pagerHeight', arg);
      } else {
          return this.host.jqxTreeGrid('pagerHeight');
      }
   }

   pageSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pageSize', arg);
      } else {
          return this.host.jqxTreeGrid('pageSize');
      }
   }

   pageSizeOptions(arg?: Array<number | string>) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pageSizeOptions', arg);
      } else {
          return this.host.jqxTreeGrid('pageSizeOptions');
      }
   }

   pageable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pageable', arg);
      } else {
          return this.host.jqxTreeGrid('pageable');
      }
   }

   pagerPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pagerPosition', arg);
      } else {
          return this.host.jqxTreeGrid('pagerPosition');
      }
   }

   pagerMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pagerMode', arg);
      } else {
          return this.host.jqxTreeGrid('pagerMode');
      }
   }

   pageSizeMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pageSizeMode', arg);
      } else {
          return this.host.jqxTreeGrid('pageSizeMode');
      }
   }

   pagerButtonsCount(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pagerButtonsCount', arg);
      } else {
          return this.host.jqxTreeGrid('pagerButtonsCount');
      }
   }

   pagerRenderer(arg?: () => any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('pagerRenderer', arg);
      } else {
          return this.host.jqxTreeGrid('pagerRenderer');
      }
   }

   ready(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('ready', arg);
      } else {
          return this.host.jqxTreeGrid('ready');
      }
   }

   rowDetails(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('rowDetails', arg);
      } else {
          return this.host.jqxTreeGrid('rowDetails');
      }
   }

   rowDetailsRenderer(arg?: (key: number, dataRow: number) => any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('rowDetailsRenderer', arg);
      } else {
          return this.host.jqxTreeGrid('rowDetailsRenderer');
      }
   }

   renderToolbar(arg?: (toolBar?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('renderToolbar', arg);
      } else {
          return this.host.jqxTreeGrid('renderToolbar');
      }
   }

   renderStatusbar(arg?: (statusBar?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('renderStatusbar', arg);
      } else {
          return this.host.jqxTreeGrid('renderStatusbar');
      }
   }

   rendering(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('rendering', arg);
      } else {
          return this.host.jqxTreeGrid('rendering');
      }
   }

   rendered(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('rendered', arg);
      } else {
          return this.host.jqxTreeGrid('rendered');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('rtl', arg);
      } else {
          return this.host.jqxTreeGrid('rtl');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('source', arg);
      } else {
          return this.host.jqxTreeGrid('source');
      }
   }

   sortable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('sortable', arg);
      } else {
          return this.host.jqxTreeGrid('sortable');
      }
   }

   showAggregates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('showAggregates', arg);
      } else {
          return this.host.jqxTreeGrid('showAggregates');
      }
   }

   showSubAggregates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('showSubAggregates', arg);
      } else {
          return this.host.jqxTreeGrid('showSubAggregates');
      }
   }

   showToolbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('showToolbar', arg);
      } else {
          return this.host.jqxTreeGrid('showToolbar');
      }
   }

   showStatusbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('showStatusbar', arg);
      } else {
          return this.host.jqxTreeGrid('showStatusbar');
      }
   }

   statusBarHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('statusBarHeight', arg);
      } else {
          return this.host.jqxTreeGrid('statusBarHeight');
      }
   }

   scrollBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('scrollBarSize', arg);
      } else {
          return this.host.jqxTreeGrid('scrollBarSize');
      }
   }

   selectionMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('selectionMode', arg);
      } else {
          return this.host.jqxTreeGrid('selectionMode');
      }
   }

   showHeader(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('showHeader', arg);
      } else {
          return this.host.jqxTreeGrid('showHeader');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('theme', arg);
      } else {
          return this.host.jqxTreeGrid('theme');
      }
   }

   toolbarHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('toolbarHeight', arg);
      } else {
          return this.host.jqxTreeGrid('toolbarHeight');
      }
   }

   width(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('width', arg);
      } else {
          return this.host.jqxTreeGrid('width');
      }
   }

   virtualModeCreateRecords(arg?: (expandedRecord?: any, done?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
      } else {
          return this.host.jqxTreeGrid('virtualModeCreateRecords');
      }
   }

   virtualModeRecordCreating(arg?: (record?: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
      } else {
          return this.host.jqxTreeGrid('virtualModeRecordCreating');
      }
   }


   // jqxTreeGridComponent functions
   addRow(rowKey: string, rowData: any, rowPosition: string, parent?: string): void {
      this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
   }

   addFilter(dataField: string, filerGroup: any): void {
      this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
   }

   applyFilters(): void {
      this.host.jqxTreeGrid('applyFilters');
   }

   beginUpdate(): void {
      this.host.jqxTreeGrid('beginUpdate');
   }

   beginRowEdit(rowKey: string): void {
      this.host.jqxTreeGrid('beginRowEdit', rowKey);
   }

   beginCellEdit(rowKey: string, dataField: string): void {
      this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
   }

   clearSelection(): void {
      this.host.jqxTreeGrid('clearSelection');
   }

   clearFilters(): void {
      this.host.jqxTreeGrid('clearFilters');
   }

   clear(): void {
      this.host.jqxTreeGrid('clear');
   }

   checkRow(rowKey: string): void {
      this.host.jqxTreeGrid('checkRow', rowKey);
   }

   collapseRow(rowKey: string): void {
      this.host.jqxTreeGrid('collapseRow', rowKey);
   }

   collapseAll(): void {
      this.host.jqxTreeGrid('collapseAll');
   }

   destroy(): void {
      this.host.jqxTreeGrid('destroy');
   }

   deleteRow(rowKey: Array<string> | string): void {
      this.host.jqxTreeGrid('deleteRow', rowKey);
   }

   expandRow(rowKey: Array<number | string> | string | number): void {
      this.host.jqxTreeGrid('expandRow', rowKey);
   }

   expandAll(): void {
      this.host.jqxTreeGrid('expandAll');
   }

   endUpdate(): void {
      this.host.jqxTreeGrid('endUpdate');
   }

   ensureRowVisible(rowKey: string): void {
      this.host.jqxTreeGrid('ensureRowVisible', rowKey);
   }

   endRowEdit(rowKey: string, cancelChanges?: boolean): void {
      this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
   }

   endCellEdit(rowKey: string, dataField: string, cancelChanges?: boolean): void {
      this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
   }

   exportData(exportDataType: any): any {
      return this.host.jqxTreeGrid('exportData', exportDataType);
   }

   focus(): void {
      this.host.jqxTreeGrid('focus');
   }

   getColumnProperty(dataField: string, propertyName: string): any {
      return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
   }

   goToPage(pageIndex: number): void {
      this.host.jqxTreeGrid('goToPage', pageIndex);
   }

   goToPrevPage(): void {
      this.host.jqxTreeGrid('goToPrevPage');
   }

   goToNextPage(): void {
      this.host.jqxTreeGrid('goToNextPage');
   }

   getSelection(): Array<any> {
      return this.host.jqxTreeGrid('getSelection');
   }

   getKey(row: any): string {
      return this.host.jqxTreeGrid('getKey', row);
   }

   getRow(rowKey: string): jqwidgets.TreeGridGetRow {
      return this.host.jqxTreeGrid('getRow', rowKey);
   }

   getRows(): Array<jqwidgets.TreeGridGetRow> {
      return this.host.jqxTreeGrid('getRows');
   }

   getCheckedRows(): Array<jqwidgets.TreeGridGetRow> {
      return this.host.jqxTreeGrid('getCheckedRows');
   }

   getView(): Array<jqwidgets.TreeGridGetRow> {
      return this.host.jqxTreeGrid('getView');
   }

   getCellValue(rowKey: string, dataField: string): any {
      return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
   }

   hideColumn(dataField: string): void {
      this.host.jqxTreeGrid('hideColumn', dataField);
   }

   isBindingCompleted(): boolean {
      return this.host.jqxTreeGrid('isBindingCompleted');
   }

   lockRow(rowKey: string | number | Array<number | string>): void {
      this.host.jqxTreeGrid('lockRow', rowKey);
   }

   refresh(): void {
      this.host.jqxTreeGrid('refresh');
   }

   render(): void {
      this.host.jqxTreeGrid('render');
   }

   removeFilter(dataField: string): void {
      this.host.jqxTreeGrid('removeFilter', dataField);
   }

   scrollOffset(top?: number, left?: number): jqwidgets.TreeGridScrollOffset {
      if (top !== undefined || left !== undefined) {
         this.host.jqxTreeGrid('scrollOffset', top, left);
      } else {
         return this.host.jqxTreeGrid('scrollOffset');
      }
   };

   setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void {
      this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
   }

   showColumn(dataField: string): void {
      this.host.jqxTreeGrid('showColumn', dataField);
   }

   selectRow(rowId: string | number | Array<number | string>): void {
      this.host.jqxTreeGrid('selectRow', rowId);
   }

   setCellValue(rowId: string, dataField: string, cellValue: any): void {
      this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
   }

   sortBy(dataField: number | string, sortOrder?: string): void {
      this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
   }

   updating(): boolean {
      return this.host.jqxTreeGrid('updating');
   }

   updateBoundData(): void {
      this.host.jqxTreeGrid('updateBoundData');
   }

   unselectRow(rowId: string | number | Array<number | string>): void {
      this.host.jqxTreeGrid('unselectRow', rowId);
   }

   uncheckRow(rowId: string): void {
      this.host.jqxTreeGrid('uncheckRow', rowId);
   }

   updateRow(rowId: number | string, data: any): void {
      this.host.jqxTreeGrid('updateRow', rowId, data);
   }

   unlockRow(rowId: string | number | Array<number | string>): void {
      this.host.jqxTreeGrid('unlockRow', rowId);
   }


   // jqxTreeGridComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onCellBeginEdit = new EventEmitter();
   @Output() onCellEndEdit = new EventEmitter();
   @Output() onCellValueChanged = new EventEmitter();
   @Output() onColumnResized = new EventEmitter();
   @Output() onColumnReordered = new EventEmitter();
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
   @Output() onRowCheck = new EventEmitter();
   @Output() onRowUncheck = new EventEmitter();
   @Output() onSort = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('cellBeginEdit', (eventData: any) => { this.onCellBeginEdit.emit(eventData); });
      this.host.on('cellEndEdit', (eventData: any) => { this.onCellEndEdit.emit(eventData); });
      this.host.on('cellValueChanged', (eventData: any) => { this.onCellValueChanged.emit(eventData); });
      this.host.on('columnResized', (eventData: any) => { this.onColumnResized.emit(eventData); });
      this.host.on('columnReordered', (eventData: any) => { this.onColumnReordered.emit(eventData); });
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
      this.host.on('rowCheck', (eventData: any) => { this.onRowCheck.emit(eventData); });
      this.host.on('rowUncheck', (eventData: any) => { this.onRowUncheck.emit(eventData); });
      this.host.on('sort', (eventData: any) => { this.onSort.emit(eventData); });
   }

} //jqxTreeGridComponent


