/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularKanban',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKanbanComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxKanban;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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

   source(arg?: Array<jqwidgets.any> | KanbanSource) : any {
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
   @Output() OnColumnAttrClicked = new EventEmitter();
   @Output() OnColumnCollapsed = new EventEmitter();
   @Output() OnColumnExpanded = new EventEmitter();
   @Output() OnItemAttrClicked = new EventEmitter();
   @Output() OnItemMoved = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('columnAttrClicked', (eventData) => { this.OnColumnAttrClicked.emit(eventData); });
      this.host.on('columnCollapsed', (eventData) => { this.OnColumnCollapsed.emit(eventData); });
      this.host.on('columnExpanded', (eventData) => { this.OnColumnExpanded.emit(eventData); });
      this.host.on('itemAttrClicked', (eventData) => { this.OnItemAttrClicked.emit(eventData); });
      this.host.on('itemMoved', (eventData) => { this.OnItemMoved.emit(eventData); });
   }

} //jqxKanbanComponent
