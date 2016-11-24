/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularKanban',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKanbanComponent implements OnChanges
{
   @Input('columnRenderer') attrColumnRenderer;
   @Input('columns') attrColumns;
   @Input('connectWith') attrConnectWith;
   @Input('headerHeight') attrHeaderHeight;
   @Input('headerWidth') attrHeaderWidth;
   @Input('itemRenderer') attrItemRenderer;
   @Input('ready') attrReady;
   @Input('rtl') attrRtl;
   @Input('source') attrSource;
   @Input('resources') attrResources;
   @Input('template') attrTemplate;
   @Input('templateContent') attrTemplateContent;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['columnRenderer','columns','connectWith','headerHeight','headerWidth','height','itemRenderer','ready','rtl','source','resources','template','templateContent','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxKanban;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnChanges(changes) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
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
   createWidget(options?: any): void {
      if (options) {
         $.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = $(this.elementRef.nativeElement.firstChild);
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxKanban('setOptions', options);
   }

   // jqxKanbanComponent properties
   columnRenderer(arg?: (element?: any, collapsedElement?: any, column?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('columnRenderer', arg);
      } else {
          return this.host.jqxKanban('columnRenderer');
      }
   }

   columns(arg?: Array<jqwidgets.KanbanColumns>) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('columns', arg);
      } else {
          return this.host.jqxKanban('columns');
      }
   }

   connectWith(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('connectWith', arg);
      } else {
          return this.host.jqxKanban('connectWith');
      }
   }

   headerHeight(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('headerHeight', arg);
      } else {
          return this.host.jqxKanban('headerHeight');
      }
   }

   headerWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('headerWidth', arg);
      } else {
          return this.host.jqxKanban('headerWidth');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('height', arg);
      } else {
          return this.host.jqxKanban('height');
      }
   }

   itemRenderer(arg?: (element?: Array<any>, item?: any, resource?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('itemRenderer', arg);
      } else {
          return this.host.jqxKanban('itemRenderer');
      }
   }

   ready(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('ready', arg);
      } else {
          return this.host.jqxKanban('ready');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('rtl', arg);
      } else {
          return this.host.jqxKanban('rtl');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('source', arg);
      } else {
          return this.host.jqxKanban('source');
      }
   }

   resources(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('resources', arg);
      } else {
          return this.host.jqxKanban('resources');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('template', arg);
      } else {
          return this.host.jqxKanban('template');
      }
   }

   templateContent(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('templateContent', arg);
      } else {
          return this.host.jqxKanban('templateContent');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxKanban('theme', arg);
      } else {
          return this.host.jqxKanban('theme');
      }
   }

   width(arg?: String | Number) : any {
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
   destroy(): void {
      this.host.jqxKanban('destroy');
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
   removeItem(itemId: string): void {
      this.host.jqxKanban('removeItem', itemId);
   }
   updateItem(itemId: string, newContent: jqwidgets.KanbanUpdateItem): void {
      this.host.jqxKanban('updateItem', itemId, newContent);
   }

   // jqxKanbanComponent events
   @Output() onColumnAttrClicked = new EventEmitter();
   @Output() onColumnCollapsed = new EventEmitter();
   @Output() onColumnExpanded = new EventEmitter();
   @Output() onItemAttrClicked = new EventEmitter();
   @Output() onItemMoved = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('columnAttrClicked', (eventData) => { this.onColumnAttrClicked.emit(eventData); });
      this.host.on('columnCollapsed', (eventData) => { this.onColumnCollapsed.emit(eventData); });
      this.host.on('columnExpanded', (eventData) => { this.onColumnExpanded.emit(eventData); });
      this.host.on('itemAttrClicked', (eventData) => { this.onItemAttrClicked.emit(eventData); });
      this.host.on('itemMoved', (eventData) => { this.onItemMoved.emit(eventData); });
   }

} //jqxKanbanComponent
