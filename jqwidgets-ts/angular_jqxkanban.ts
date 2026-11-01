/*
jQWidgets v27.2.0 (2026-Oct)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />

import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxsortable.js';
import '../jqwidgets/jqxsplitter.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxkanban.js';

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxKanban',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKanbanComponent implements OnChanges
{
   @Input('animationDelay') attrAnimationDelay: number;
   @Input('columnRenderer') attrColumnRenderer: (element: jqwidgets.KanbanColumnRenderer['element'], collapsedElement: jqwidgets.KanbanColumnRenderer['collapsedElement'], column: jqwidgets.KanbanColumnRenderer['column']) => void;
   @Input('columns') attrColumns: Array<jqwidgets.KanbanColumns>;
   @Input('connectWith') attrConnectWith: string;
   @Input('headerHeight') attrHeaderHeight: number | string;
   @Input('headerWidth') attrHeaderWidth: number;
   @Input('handle') attrHandle: string;
   @Input('itemRenderer') attrItemRenderer: (element: jqwidgets.KanbanItemRenderer['element'], item: jqwidgets.KanbanItemRenderer['item'], resource: jqwidgets.KanbanItemRenderer['resource']) => void;
   @Input('ready') attrReady: () => void;
   @Input('rtl') attrRtl: boolean;
   @Input('source') attrSource: any;
   @Input('resources') attrResources: any;
   @Input('template') attrTemplate: string;
   @Input('templateContent') attrTemplateContent: any;
   @Input('verticalTextOrientation') attrVerticalTextOrientation: string;
   @Input('theme') attrTheme: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationDelay','columnRenderer','columns','connectWith','headerHeight','headerWidth','handle','height','itemRenderer','ready','rtl','source','resources','template','templateContent','verticalTextOrientation','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxKanban;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnDestroy(): void {
      if (typeof JQXLite === 'undefined') { return; }
      if (!this.host) { return; }

      this.host.off();
      try {
         this.host.jqxKanban('destroy');
      } catch (e) {
         /* widget was already destroyed or never created */
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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxKanban(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxKanban(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxKanban(this.properties[i])) {
                  this.host.jqxKanban(this.properties[i], this[attrName]); 
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
      if (this.host) {
         return;
      }
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxKanban('setOptions', options);
   }

   // jqxKanbanComponent properties
   animationDelay(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxKanban('animationDelay', arg);
      } else {
          return this.host.jqxKanban('animationDelay');
      }
   }

   columnRenderer(arg?: (element: jqwidgets.KanbanColumnRenderer['element'], collapsedElement: jqwidgets.KanbanColumnRenderer['collapsedElement'], column: jqwidgets.KanbanColumnRenderer['column']) => void): (element: jqwidgets.KanbanColumnRenderer['element'], collapsedElement: jqwidgets.KanbanColumnRenderer['collapsedElement'], column: jqwidgets.KanbanColumnRenderer['column']) => void {
      if (arg !== undefined) {
          this.host.jqxKanban('columnRenderer', arg);
      } else {
          return this.host.jqxKanban('columnRenderer');
      }
   }

   columns(arg?: Array<jqwidgets.KanbanColumns>): Array<jqwidgets.KanbanColumns> {
      if (arg !== undefined) {
          this.host.jqxKanban('columns', arg);
      } else {
          return this.host.jqxKanban('columns');
      }
   }

   connectWith(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxKanban('connectWith', arg);
      } else {
          return this.host.jqxKanban('connectWith');
      }
   }

   headerHeight(arg?: number | string): number | string {
      if (arg !== undefined) {
          this.host.jqxKanban('headerHeight', arg);
      } else {
          return this.host.jqxKanban('headerHeight');
      }
   }

   headerWidth(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxKanban('headerWidth', arg);
      } else {
          return this.host.jqxKanban('headerWidth');
      }
   }

   handle(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxKanban('handle', arg);
      } else {
          return this.host.jqxKanban('handle');
      }
   }

   height(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxKanban('height', arg);
      } else {
          return this.host.jqxKanban('height');
      }
   }

   itemRenderer(arg?: (element: jqwidgets.KanbanItemRenderer['element'], item: jqwidgets.KanbanItemRenderer['item'], resource: jqwidgets.KanbanItemRenderer['resource']) => void): (element: jqwidgets.KanbanItemRenderer['element'], item: jqwidgets.KanbanItemRenderer['item'], resource: jqwidgets.KanbanItemRenderer['resource']) => void {
      if (arg !== undefined) {
          this.host.jqxKanban('itemRenderer', arg);
      } else {
          return this.host.jqxKanban('itemRenderer');
      }
   }

   ready(arg?: () => void): () => void {
      if (arg !== undefined) {
          this.host.jqxKanban('ready', arg);
      } else {
          return this.host.jqxKanban('ready');
      }
   }

   rtl(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxKanban('rtl', arg);
      } else {
          return this.host.jqxKanban('rtl');
      }
   }

   source(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxKanban('source', arg);
      } else {
          return this.host.jqxKanban('source');
      }
   }

   resources(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxKanban('resources', arg);
      } else {
          return this.host.jqxKanban('resources');
      }
   }

   template(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxKanban('template', arg);
      } else {
          return this.host.jqxKanban('template');
      }
   }

   templateContent(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxKanban('templateContent', arg);
      } else {
          return this.host.jqxKanban('templateContent');
      }
   }

   verticalTextOrientation(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxKanban('verticalTextOrientation', arg);
      } else {
          return this.host.jqxKanban('verticalTextOrientation');
      }
   }

   theme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxKanban('theme', arg);
      } else {
          return this.host.jqxKanban('theme');
      }
   }

   width(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxKanban('width', arg);
      } else {
          return this.host.jqxKanban('width');
      }
   }


   // jqxKanbanComponent functions
   addItem(newItem: any): void {
      this.host.jqxKanban('addItem', newItem);
   }

   collapseColumn(dataField: string): boolean {
      return this.host.jqxKanban('collapseColumn', dataField);
   }

   destroy(): void {
      this.host.jqxKanban('destroy');
   }

   expandColumn(dataField: string): boolean {
      return this.host.jqxKanban('expandColumn', dataField);
   }

   getColumn(dataField: string): jqwidgets.KanbanColumns {
      return this.host.jqxKanban('getColumn', dataField);
   }

   getColumnItems(dataField: string): Array<jqwidgets.KanbanSource> {
      return this.host.jqxKanban('getColumnItems', dataField);
   }

   getItems(): jqwidgets.KanbanSource {
      return this.host.jqxKanban('getItems');
   }

   getSelectedColumn(): string {
      return this.host.jqxKanban('getSelectedColumn');
   }

   getSelectedItem(): jqwidgets.KanbanSource {
      return this.host.jqxKanban('getSelectedItem');
   }

   removeItem(itemId: string | number): void {
      this.host.jqxKanban('removeItem', itemId);
   }

   selectItem(itemId: string | number): void {
      this.host.jqxKanban('selectItem', itemId);
   }

   updateItem(itemId: string, newContent: jqwidgets.KanbanUpdateItem): void {
      this.host.jqxKanban('updateItem', itemId, newContent);
   }


   // jqxKanbanComponent events
   @Output() onColumnAttrClicked = new EventEmitter();
   @Output() onColumnCollapsed = new EventEmitter();
   @Output() onColumnExpanded = new EventEmitter();
   @Output() onColumnSelected = new EventEmitter();
   @Output() onColumnUnselected = new EventEmitter();
   @Output() onItemAttrClicked = new EventEmitter();
   @Output() onItemCreated = new EventEmitter();
   @Output() onItemMoved = new EventEmitter();
   @Output() onItemReceived = new EventEmitter();
   @Output() onItemSelected = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('columnAttrClicked', (eventData: any) => { this.onColumnAttrClicked.emit(eventData); });
      this.host.on('columnCollapsed', (eventData: any) => { this.onColumnCollapsed.emit(eventData); });
      this.host.on('columnExpanded', (eventData: any) => { this.onColumnExpanded.emit(eventData); });
      this.host.on('columnSelected', (eventData: any) => { this.onColumnSelected.emit(eventData); });
      this.host.on('columnUnselected', (eventData: any) => { this.onColumnUnselected.emit(eventData); });
      this.host.on('itemAttrClicked', (eventData: any) => { this.onItemAttrClicked.emit(eventData); });
      this.host.on('itemCreated', (eventData: any) => { this.onItemCreated.emit(eventData); });
      this.host.on('itemMoved', (eventData: any) => { this.onItemMoved.emit(eventData); });
      this.host.on('itemReceived', (eventData: any) => { this.onItemReceived.emit(eventData); });
      this.host.on('itemSelected', (eventData: any) => { this.onItemSelected.emit(eventData); });
   }

} //jqxKanbanComponent


