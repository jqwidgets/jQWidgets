/*
jQWidgets v27.2.0 (2026-Oct)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />

import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxpanel.js';
import '../jqwidgets/jqxdragdrop.js';
import '../jqwidgets/jqxtree.js';
import '../jqwidgets/jqxcheckbox.js';

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxTree',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTreeComponent implements OnChanges
{
   @Input('animationShowDuration') attrAnimationShowDuration: number;
   @Input('animationHideDuration') attrAnimationHideDuration: number;
   @Input('allowDrag') attrAllowDrag: boolean;
   @Input('allowDrop') attrAllowDrop: boolean;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('checkSize') attrCheckSize: number;
   @Input('dragStart') attrDragStart: (item: jqwidgets.TreeDragStart['item']) => boolean;
   @Input('dragEnd') attrDragEnd: (dragItem: jqwidgets.TreeDragEnd['dragItem'], dropItem?: jqwidgets.TreeDragEnd['dropItem'], args?: jqwidgets.TreeDragEnd['args'], dropPosition?: jqwidgets.TreeDragEnd['dropPosition'], tree?: jqwidgets.TreeDragEnd['tree']) => boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('displayMember') attrDisplayMember: string;
   @Input('easing') attrEasing: string;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('hasThreeStates') attrHasThreeStates: boolean;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('itemsMember') attrItemsMember: string;
   @Input('keyboardNavigation') attrKeyboardNavigation: boolean;
   @Input('rtl') attrRtl: boolean;
   @Input('source') attrSource: any;
   @Input('submitCheckedItems') attrSubmitCheckedItems: boolean;
   @Input('toggleIndicatorSize') attrToggleIndicatorSize: number;
   @Input('toggleMode') attrToggleMode: string;
   @Input('theme') attrTheme: string;
   @Input('valueMember') attrValueMember: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','checkSize','dragStart','dragEnd','disabled','displayMember','easing','enableHover','height','hasThreeStates','incrementalSearch','itemsMember','keyboardNavigation','rtl','source','submitCheckedItems','toggleIndicatorSize','toggleMode','theme','valueMember','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTree;

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
         this.host.jqxTree('destroy');
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxTree('setOptions', options);
   }

   // jqxTreeComponent properties
   animationShowDuration(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxTree('animationShowDuration', arg);
      } else {
          return this.host.jqxTree('animationShowDuration');
      }
   }

   animationHideDuration(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxTree('animationHideDuration', arg);
      } else {
          return this.host.jqxTree('animationHideDuration');
      }
   }

   allowDrag(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('allowDrag', arg);
      } else {
          return this.host.jqxTree('allowDrag');
      }
   }

   allowDrop(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('allowDrop', arg);
      } else {
          return this.host.jqxTree('allowDrop');
      }
   }

   checkboxes(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('checkboxes', arg);
      } else {
          return this.host.jqxTree('checkboxes');
      }
   }

   checkSize(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxTree('checkSize', arg);
      } else {
          return this.host.jqxTree('checkSize');
      }
   }

   dragStart(arg?: (item: jqwidgets.TreeDragStart['item']) => boolean): (item: jqwidgets.TreeDragStart['item']) => boolean {
      if (arg !== undefined) {
          this.host.jqxTree('dragStart', arg);
      } else {
          return this.host.jqxTree('dragStart');
      }
   }

   dragEnd(arg?: (dragItem: jqwidgets.TreeDragEnd['dragItem'], dropItem?: jqwidgets.TreeDragEnd['dropItem'], args?: jqwidgets.TreeDragEnd['args'], dropPosition?: jqwidgets.TreeDragEnd['dropPosition'], tree?: jqwidgets.TreeDragEnd['tree']) => boolean): (dragItem: jqwidgets.TreeDragEnd['dragItem'], dropItem?: jqwidgets.TreeDragEnd['dropItem'], args?: jqwidgets.TreeDragEnd['args'], dropPosition?: jqwidgets.TreeDragEnd['dropPosition'], tree?: jqwidgets.TreeDragEnd['tree']) => boolean {
      if (arg !== undefined) {
          this.host.jqxTree('dragEnd', arg);
      } else {
          return this.host.jqxTree('dragEnd');
      }
   }

   disabled(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('disabled', arg);
      } else {
          return this.host.jqxTree('disabled');
      }
   }

   displayMember(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('displayMember', arg);
      } else {
          return this.host.jqxTree('displayMember');
      }
   }

   easing(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('easing', arg);
      } else {
          return this.host.jqxTree('easing');
      }
   }

   enableHover(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('enableHover', arg);
      } else {
          return this.host.jqxTree('enableHover');
      }
   }

   height(arg?: number | string): number | string {
      if (arg !== undefined) {
          this.host.jqxTree('height', arg);
      } else {
          return this.host.jqxTree('height');
      }
   }

   hasThreeStates(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('hasThreeStates', arg);
      } else {
          return this.host.jqxTree('hasThreeStates');
      }
   }

   incrementalSearch(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('incrementalSearch', arg);
      } else {
          return this.host.jqxTree('incrementalSearch');
      }
   }

   itemsMember(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('itemsMember', arg);
      } else {
          return this.host.jqxTree('itemsMember');
      }
   }

   keyboardNavigation(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('keyboardNavigation', arg);
      } else {
          return this.host.jqxTree('keyboardNavigation');
      }
   }

   rtl(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('rtl', arg);
      } else {
          return this.host.jqxTree('rtl');
      }
   }

   source(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxTree('source', arg);
      } else {
          return this.host.jqxTree('source');
      }
   }

   submitCheckedItems(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTree('submitCheckedItems', arg);
      } else {
          return this.host.jqxTree('submitCheckedItems');
      }
   }

   toggleIndicatorSize(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxTree('toggleIndicatorSize', arg);
      } else {
          return this.host.jqxTree('toggleIndicatorSize');
      }
   }

   toggleMode(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('toggleMode', arg);
      } else {
          return this.host.jqxTree('toggleMode');
      }
   }

   theme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('theme', arg);
      } else {
          return this.host.jqxTree('theme');
      }
   }

   valueMember(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTree('valueMember', arg);
      } else {
          return this.host.jqxTree('valueMember');
      }
   }

   width(arg?: string | number): string | number {
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

   addTo(item: any, id: string | null): void {
      this.host.jqxTree('addTo', item, id);
   }

   clear(): void {
      this.host.jqxTree('clear');
   }

   clearSelection(): void {
      this.host.jqxTree('clearSelection');
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

   disableCheckbox(item: any): void {
      this.host.jqxTree('disableCheckbox', item);
   }

   disableItem(item: any): void {
      this.host.jqxTree('disableItem', item);
   }

   ensureVisible(item: any): void {
      this.host.jqxTree('ensureVisible', item);
   }

   enableCheckbox(item: any): void {
      this.host.jqxTree('enableCheckbox', item);
   }

   enableItem(item: any): void {
      this.host.jqxTree('enableItem', item);
   }

   enableAll(): void {
      this.host.jqxTree('enableAll');
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

   getSelectedItem(): jqwidgets.TreeItem {
      return this.host.jqxTree('getSelectedItem');
   }

   getPrevItem(item: any): jqwidgets.TreeItem {
      return this.host.jqxTree('getPrevItem', item);
   }

   getNextItem(item: any): jqwidgets.TreeItem {
      return this.host.jqxTree('getNextItem', item);
   }

   hitTest(left: number, top: number): any {
      return this.host.jqxTree('hitTest', left, top);
   }

   isExpanded(element: any): boolean {
      return this.host.jqxTree('isExpanded', element);
   }

   isSelected(element: any): boolean {
      return this.host.jqxTree('isSelected', element);
   }

   lockItem(element: any): void {
      this.host.jqxTree('lockItem', element);
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

   unlockItem(element: any): void {
      this.host.jqxTree('unlockItem', element);
   }

   updateItem(item: any, newItem: any): void {
      this.host.jqxTree('updateItem', item, newItem);
   }

   val(value?: string): any {
      if (value !== undefined) {
         return this.host.jqxTree('val', value);
      } else {
         return this.host.jqxTree('val');
      }
   };


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
      this.host.on('added', (eventData: any) => { this.onAdded.emit(eventData); });
      this.host.on('checkChange', (eventData: any) => { this.onCheckChange.emit(eventData); });
      this.host.on('collapse', (eventData: any) => { this.onCollapse.emit(eventData); });
      this.host.on('dragStart', (eventData: any) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData: any) => { this.onDragEnd.emit(eventData); });
      this.host.on('expand', (eventData: any) => { this.onExpand.emit(eventData); });
      this.host.on('initialized', (eventData: any) => { this.onInitialized.emit(eventData); });
      this.host.on('itemClick', (eventData: any) => { this.onItemClick.emit(eventData); });
      this.host.on('removed', (eventData: any) => { this.onRemoved.emit(eventData); });
      this.host.on('select', (eventData: any) => { this.onSelect.emit(eventData); });
   }

} //jqxTreeComponent


