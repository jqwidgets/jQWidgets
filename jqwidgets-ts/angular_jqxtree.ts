/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTree',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTreeComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTree;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTree('setOptions', options);
   }

   // jqxTreeComponent properties
   animationShowDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTree('animationShowDuration', arg);
      } else {
          return this.host.jqxTree('animationShowDuration');
      }
   }

   animationHideDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTree('animationHideDuration', arg);
      } else {
          return this.host.jqxTree('animationHideDuration');
      }
   }

   allowDrag(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('allowDrag', arg);
      } else {
          return this.host.jqxTree('allowDrag');
      }
   }

   allowDrop(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('allowDrop', arg);
      } else {
          return this.host.jqxTree('allowDrop');
      }
   }

   checkboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('checkboxes', arg);
      } else {
          return this.host.jqxTree('checkboxes');
      }
   }

   dragStart(arg?: (item: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('dragStart', arg);
      } else {
          return this.host.jqxTree('dragStart');
      }
   }

   dragEnd(arg?: (dragItem?: any, dropItem?: any, args?: any, dropPosition?: any, tree?: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('dragEnd', arg);
      } else {
          return this.host.jqxTree('dragEnd');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('disabled', arg);
      } else {
          return this.host.jqxTree('disabled');
      }
   }

   easing(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTree('easing', arg);
      } else {
          return this.host.jqxTree('easing');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('enableHover', arg);
      } else {
          return this.host.jqxTree('enableHover');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTree('height', arg);
      } else {
          return this.host.jqxTree('height');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('hasThreeStates', arg);
      } else {
          return this.host.jqxTree('hasThreeStates');
      }
   }

   incrementalSearch(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('incrementalSearch', arg);
      } else {
          return this.host.jqxTree('incrementalSearch');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('keyboardNavigation', arg);
      } else {
          return this.host.jqxTree('keyboardNavigation');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTree('rtl', arg);
      } else {
          return this.host.jqxTree('rtl');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTree('source', arg);
      } else {
          return this.host.jqxTree('source');
      }
   }

   toggleIndicatorSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTree('toggleIndicatorSize', arg);
      } else {
          return this.host.jqxTree('toggleIndicatorSize');
      }
   }

   toggleMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTree('toggleMode', arg);
      } else {
          return this.host.jqxTree('toggleMode');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTree('theme', arg);
      } else {
          return this.host.jqxTree('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTree('width', arg);
      } else {
          return this.host.jqxTree('width');
      }
   }


   // jqxTreeComponent functions
   addBefore(item: any, id: string): void {
      this.host.jqxTree('addBefore', item, id);

   }
   addAfter(item: any, id: string): void {
      this.host.jqxTree('addAfter', item, id);

   }
   addTo(item: any, id: string): void {
      this.host.jqxTree('addTo', item, id);

   }
   clear(): void {
      this.host.jqxTree('clear');

   }
   checkAll(): void {
      this.host.jqxTree('checkAll');

   }
   checkItem(item: any, checked: boolean): void {
      this.host.jqxTree('checkItem', item, checked);

   }
   collapseAll(): void {
      this.host.jqxTree('collapseAll');

   }
   collapseItem(item: any): void {
      this.host.jqxTree('collapseItem', item);

   }
   destroy(): void {
      this.host.jqxTree('destroy');

   }
   disableItem(item: any): void {
      this.host.jqxTree('disableItem', item);

   }
   ensureVisible(item: Object): void {
      this.host.jqxTree('ensureVisible', item);

   }
   enableItem(item: any): void {
      this.host.jqxTree('enableItem', item);

   }
   expandAll(): void {
      this.host.jqxTree('expandAll');

   }
   expandItem(item: any): void {
      this.host.jqxTree('expandItem', item);

   }
   focus(): void {
      this.host.jqxTree('focus');

   }
   getCheckedItems(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getCheckedItems');

   }
   getUncheckedItems(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getUncheckedItems');

   }
   getItems(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getItems');

   }
   getItem(element: any): jqwidgets.TreeItem {
      return this.host.jqxTree('getItem', element);

   }
   getSelectedItem(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getSelectedItem');

   }
   getPrevItem(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getPrevItem');

   }
   getNextItem(): Array<jqwidgets.TreeItem> {
      return this.host.jqxTree('getNextItem');

   }
   hitTest(left: number, top: number): any {
      return this.host.jqxTree('hitTest', left, top);

   }
   removeItem(item: any): void {
      this.host.jqxTree('removeItem', item);

   }
   render(): void {
      this.host.jqxTree('render');

   }
   refresh(): void {
      this.host.jqxTree('refresh');

   }
   selectItem(item: any): void {
      this.host.jqxTree('selectItem', item);

   }
   uncheckAll(): void {
      this.host.jqxTree('uncheckAll');

   }
   uncheckItem(item: any): void {
      this.host.jqxTree('uncheckItem', item);

   }
   updateItem(item: any, newItem: any): void {
      this.host.jqxTree('updateItem', item, newItem);

   }
   val(value: string): string {
      return this.host.jqxTree('val', value);

   }

   // jqxTreeComponent events
   @Output() OnAdded = new EventEmitter();
   @Output() OnCheckChange = new EventEmitter();
   @Output() OnCollapse = new EventEmitter();
   @Output() OnDragStart = new EventEmitter();
   @Output() OnDragEnd = new EventEmitter();
   @Output() OnExpand = new EventEmitter();
   @Output() OnInitialized = new EventEmitter();
   @Output() OnItemClick = new EventEmitter();
   @Output() OnRemoved = new EventEmitter();
   @Output() OnSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('added', (eventData) => { this.OnAdded.emit(eventData); });
      this.host.on('checkChange', (eventData) => { this.OnCheckChange.emit(eventData); });
      this.host.on('collapse', (eventData) => { this.OnCollapse.emit(eventData); });
      this.host.on('dragStart', (eventData) => { this.OnDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.OnDragEnd.emit(eventData); });
      this.host.on('expand', (eventData) => { this.OnExpand.emit(eventData); });
      this.host.on('initialized', (eventData) => { this.OnInitialized.emit(eventData); });
      this.host.on('itemClick', (eventData) => { this.OnItemClick.emit(eventData); });
      this.host.on('removed', (eventData) => { this.OnRemoved.emit(eventData); });
      this.host.on('select', (eventData) => { this.OnSelect.emit(eventData); });
   }

} //jqxTreeComponent
