/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTree',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTreeComponent implements OnChanges
{
   @Input('animationShowDuration') attrAnimationShowDuration;
   @Input('animationHideDuration') attrAnimationHideDuration;
   @Input('allowDrag') attrAllowDrag;
   @Input('allowDrop') attrAllowDrop;
   @Input('checkboxes') attrCheckboxes;
   @Input('dragStart') attrDragStart;
   @Input('dragEnd') attrDragEnd;
   @Input('disabled') attrDisabled;
   @Input('easing') attrEasing;
   @Input('enableHover') attrEnableHover;
   @Input('hasThreeStates') attrHasThreeStates;
   @Input('incrementalSearch') attrIncrementalSearch;
   @Input('keyboardNavigation') attrKeyboardNavigation;
   @Input('rtl') attrRtl;
   @Input('source') attrSource;
   @Input('toggleIndicatorSize') attrToggleIndicatorSize;
   @Input('toggleMode') attrToggleMode;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','source','toggleIndicatorSize','toggleMode','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTree;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTree(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                  this.host.jqxTree(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() onAdded = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onCollapse = new EventEmitter();
   @Output() onDragStart = new EventEmitter();
   @Output() onDragEnd = new EventEmitter();
   @Output() onExpand = new EventEmitter();
   @Output() onInitialized = new EventEmitter();
   @Output() onItemClick = new EventEmitter();
   @Output() onRemoved = new EventEmitter();
   @Output() onSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('added', (eventData) => { this.onAdded.emit(eventData); });
      this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
      this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
      this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
      this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
      this.host.on('initialized', (eventData) => { this.onInitialized.emit(eventData); });
      this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
      this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
   }

} //jqxTreeComponent
