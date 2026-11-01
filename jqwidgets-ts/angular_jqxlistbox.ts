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
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxdragdrop.js';

import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxListBoxComponent),
    multi: true
}

@Component({
    selector: 'jqxListBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxListBoxComponent implements ControlValueAccessor, OnChanges, AfterViewInit, AfterViewChecked 
{
   @Input('autoHeight') attrAutoHeight: boolean;
   @Input('autoItemsHeight') attrAutoItemsHeight: boolean;
   @Input('allowDrag') attrAllowDrag: boolean;
   @Input('allowDrop') attrAllowDrop: boolean;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('checkboxSize') attrCheckboxSize: number;
   @Input('disabled') attrDisabled: boolean;
   @Input('displayMember') attrDisplayMember: number | string;
   @Input('dropAction') attrDropAction: string;
   @Input('dragStart') attrDragStart: (item:jqwidgets.ListBoxDragStart['item']) => boolean;
   @Input('dragEnd') attrDragEnd: (dragItem: jqwidgets.ListBoxDragEnd['dragItem'], dropItem: jqwidgets.ListBoxDragEnd['dropItem']) => boolean;
   @Input('emptyGroupText') attrEmptyGroupText: string;
   @Input('emptyString') attrEmptyString: string;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('enableMouseWheel') attrEnableMouseWheel: boolean;
   @Input('enableSelection') attrEnableSelection: boolean;
   @Input('equalItemsWidth') attrEqualItemsWidth: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterHeight') attrFilterHeight: number;
   @Input('filterDelay') attrFilterDelay: number | string;
   @Input('filterPlaceHolder') attrFilterPlaceHolder: number | string;
   @Input('filterChange') attrFilterChange: (value: string) => void;
   @Input('focusable') attrFocusable: boolean;
   @Input('groupMember') attrGroupMember: string;
   @Input('hasThreeStates') attrHasThreeStates: boolean;
   @Input('itemHeight') attrItemHeight: number;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('incrementalSearchDelay') attrIncrementalSearchDelay: number | string;
   @Input('incrementalSearchKeyDownDelay') attrIncrementalSearchKeyDownDelay: number;
   @Input('keyboardNavigation') attrKeyboardNavigation: boolean;
   @Input('multiple') attrMultiple: boolean;
   @Input('multipleextended') attrMultipleextended: boolean;
   @Input('ready') attrReady: () => void;
   @Input('renderer') attrRenderer: (index: jqwidgets.ListBoxRenderer['index'], label: jqwidgets.ListBoxRenderer['label'], value: jqwidgets.ListBoxRenderer['value']) => string;
   @Input('rendered') attrRendered: () => any;
   @Input('rtl') attrRtl: boolean;
   @Input('selectedIndex') attrSelectedIndex: number | string;
   @Input('selectedIndexes') attrSelectedIndexes: any;
   @Input('source') attrSource: Array<any>;
   @Input('scrollBarSize') attrScrollBarSize: number;
   @Input('searchMode') attrSearchMode: string;
   @Input('searchMember') attrSearchMember: string;
   @Input('theme') attrTheme: string;
   @Input('touchMode') attrTouchMode: boolean | string;
   @Input('valueMember') attrValueMember: number | string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['autoHeight','autoItemsHeight','allowDrag','allowDrop','checkboxes','checkboxSize','disabled','displayMember','dropAction','dragStart','dragEnd','emptyGroupText','emptyString','enableHover','enableMouseWheel','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','filterChange','focusable','groupMember','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','incrementalSearchKeyDownDelay','keyboardNavigation','multiple','multipleextended','ready','renderer','rendered','rtl','selectedIndex','selectedIndexes','source','scrollBarSize','searchMode','searchMember','theme','touchMode','valueMember','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxListBox;

   content: String;
   container: HTMLDivElement;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   private modelReady: boolean = false;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
   }; 

   ngOnDestroy(): void {
      if (typeof JQXLite === 'undefined') { return; }
      if (!this.host) { return; }

      this.host.off();
      try {
         this.host.jqxListBox('destroy');
      } catch (e) {
         /* widget was already destroyed or never created */
      }
   }; 

    ngAfterViewInit() {
       let children = JQXLite(this.elementRef.nativeElement.children).find('li'); 
       let html = ''; 
       let options = {}; 

       if (children.length > 0) {
           this.container = document.createElement('div');
           html = this.elementRef.nativeElement.innerHTML;
           this.container.appendChild(this.elementRef.nativeElement.firstChild);
           this.elementRef.nativeElement.innerHTML = html;
           this.content = html;

           let result = JQXLite.jqx.parseSourceTag(this.container);
                options['source'] = result.items;      }

      if (this.autoCreate) {
         this.createComponent(options); 
      }
   }; 

 ngAfterViewChecked() {
    if (typeof JQXLite === 'undefined') { return; } 
    if (this.container) {
        if (this.content !== this.container.innerHTML) {
            this.content = this.container.innerHTML;
            let result = JQXLite.jqx.parseSourceTag(this.container);

            this.host.jqxListBox({source: result.items});
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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxListBox(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                  this.host.jqxListBox(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   writeValue(value: any): void {
       if ((value === null || value === undefined) && !this.modelReady) {
           if (this.widgetObject) this.onChangeCallback(this.host.val());
           return;
       }
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
        this.widgetObject.clearSelection();
           if ( value ) {
               this.widgetObject.selectItem(this.widgetObject.getItemByValue(value));
           }       }
       if (this.host && (value === null || value === undefined)) {
               this.host.jqxListBox('val', '');
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
       setTimeout(() => { this.modelReady = true; });
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxListBox('setOptions', options);
   }

   // jqxListBoxComponent properties
   autoHeight(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('autoHeight', arg);
      } else {
          return this.host.jqxListBox('autoHeight');
      }
   }

   autoItemsHeight(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('autoItemsHeight', arg);
      } else {
          return this.host.jqxListBox('autoItemsHeight');
      }
   }

   allowDrag(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('allowDrag', arg);
      } else {
          return this.host.jqxListBox('allowDrag');
      }
   }

   allowDrop(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('allowDrop', arg);
      } else {
          return this.host.jqxListBox('allowDrop');
      }
   }

   checkboxes(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('checkboxes', arg);
      } else {
          return this.host.jqxListBox('checkboxes');
      }
   }

   checkboxSize(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('checkboxSize', arg);
      } else {
          return this.host.jqxListBox('checkboxSize');
      }
   }

   disabled(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('disabled', arg);
      } else {
          return this.host.jqxListBox('disabled');
      }
   }

   displayMember(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('displayMember', arg);
      } else {
          return this.host.jqxListBox('displayMember');
      }
   }

   dropAction(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('dropAction', arg);
      } else {
          return this.host.jqxListBox('dropAction');
      }
   }

   dragStart(arg?: (item:jqwidgets.ListBoxDragStart['item']) => boolean): (item:jqwidgets.ListBoxDragStart['item']) => boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('dragStart', arg);
      } else {
          return this.host.jqxListBox('dragStart');
      }
   }

   dragEnd(arg?: (dragItem: jqwidgets.ListBoxDragEnd['dragItem'], dropItem: jqwidgets.ListBoxDragEnd['dropItem']) => boolean): (dragItem: jqwidgets.ListBoxDragEnd['dragItem'], dropItem: jqwidgets.ListBoxDragEnd['dropItem']) => boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('dragEnd', arg);
      } else {
          return this.host.jqxListBox('dragEnd');
      }
   }

   emptyGroupText(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('emptyGroupText', arg);
      } else {
          return this.host.jqxListBox('emptyGroupText');
      }
   }

   emptyString(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('emptyString', arg);
      } else {
          return this.host.jqxListBox('emptyString');
      }
   }

   enableHover(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('enableHover', arg);
      } else {
          return this.host.jqxListBox('enableHover');
      }
   }

   enableMouseWheel(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('enableMouseWheel', arg);
      } else {
          return this.host.jqxListBox('enableMouseWheel');
      }
   }

   enableSelection(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('enableSelection', arg);
      } else {
          return this.host.jqxListBox('enableSelection');
      }
   }

   equalItemsWidth(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('equalItemsWidth', arg);
      } else {
          return this.host.jqxListBox('equalItemsWidth');
      }
   }

   filterable(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('filterable', arg);
      } else {
          return this.host.jqxListBox('filterable');
      }
   }

   filterHeight(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('filterHeight', arg);
      } else {
          return this.host.jqxListBox('filterHeight');
      }
   }

   filterDelay(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('filterDelay', arg);
      } else {
          return this.host.jqxListBox('filterDelay');
      }
   }

   filterPlaceHolder(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('filterPlaceHolder', arg);
      } else {
          return this.host.jqxListBox('filterPlaceHolder');
      }
   }

   filterChange(arg?: (value: string) => void): (value: string) => void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('filterChange', arg);
      } else {
          return this.host.jqxListBox('filterChange');
      }
   }

   focusable(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('focusable', arg);
      } else {
          return this.host.jqxListBox('focusable');
      }
   }

   groupMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('groupMember', arg);
      } else {
          return this.host.jqxListBox('groupMember');
      }
   }

   height(arg?: string | number): string | number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('height', arg);
      } else {
          return this.host.jqxListBox('height');
      }
   }

   hasThreeStates(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('hasThreeStates', arg);
      } else {
          return this.host.jqxListBox('hasThreeStates');
      }
   }

   itemHeight(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('itemHeight', arg);
      } else {
          return this.host.jqxListBox('itemHeight');
      }
   }

   incrementalSearch(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('incrementalSearch', arg);
      } else {
          return this.host.jqxListBox('incrementalSearch');
      }
   }

   incrementalSearchDelay(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('incrementalSearchDelay', arg);
      } else {
          return this.host.jqxListBox('incrementalSearchDelay');
      }
   }

   incrementalSearchKeyDownDelay(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('incrementalSearchKeyDownDelay', arg);
      } else {
          return this.host.jqxListBox('incrementalSearchKeyDownDelay');
      }
   }

   keyboardNavigation(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('keyboardNavigation', arg);
      } else {
          return this.host.jqxListBox('keyboardNavigation');
      }
   }

   multiple(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('multiple', arg);
      } else {
          return this.host.jqxListBox('multiple');
      }
   }

   multipleextended(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('multipleextended', arg);
      } else {
          return this.host.jqxListBox('multipleextended');
      }
   }

   ready(arg?: () => void): () => void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('ready', arg);
      } else {
          return this.host.jqxListBox('ready');
      }
   }

   renderer(arg?: (index: jqwidgets.ListBoxRenderer['index'], label: jqwidgets.ListBoxRenderer['label'], value: jqwidgets.ListBoxRenderer['value']) => string): (index: jqwidgets.ListBoxRenderer['index'], label: jqwidgets.ListBoxRenderer['label'], value: jqwidgets.ListBoxRenderer['value']) => string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('renderer', arg);
      } else {
          return this.host.jqxListBox('renderer');
      }
   }

   rendered(arg?: () => any): () => any {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('rendered', arg);
      } else {
          return this.host.jqxListBox('rendered');
      }
   }

   rtl(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('rtl', arg);
      } else {
          return this.host.jqxListBox('rtl');
      }
   }

   selectedIndex(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('selectedIndex', arg);
      } else {
          return this.host.jqxListBox('selectedIndex');
      }
   }

   selectedIndexes(arg?: any): any {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('selectedIndexes', arg);
      } else {
          return this.host.jqxListBox('selectedIndexes');
      }
   }

   source(arg?: Array<any>): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('source', arg);
      } else {
          return this.host.jqxListBox('source');
      }
   }

   scrollBarSize(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('scrollBarSize', arg);
      } else {
          return this.host.jqxListBox('scrollBarSize');
      }
   }

   searchMode(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('searchMode', arg);
      } else {
          return this.host.jqxListBox('searchMode');
      }
   }

   searchMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('searchMember', arg);
      } else {
          return this.host.jqxListBox('searchMember');
      }
   }

   theme(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('theme', arg);
      } else {
          return this.host.jqxListBox('theme');
      }
   }

   touchMode(arg?: boolean | string): boolean | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('touchMode', arg);
      } else {
          return this.host.jqxListBox('touchMode');
      }
   }

   valueMember(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('valueMember', arg);
      } else {
          return this.host.jqxListBox('valueMember');
      }
   }

   width(arg?: string | number): string | number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxListBox('width', arg);
      } else {
          return this.host.jqxListBox('width');
      }
   }


   // jqxListBoxComponent functions
   addItem(Item: any): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('addItem', Item);
   }

   beginUpdate(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('beginUpdate');
   }

   clear(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('clear');
   }

   clearSelection(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('clearSelection');
   }

   checkIndex(Index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('checkIndex', Index);
   }

   checkItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('checkItem', Item);
   }

   checkAll(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('checkAll');
   }

   clearFilter(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('clearFilter');
   }

   destroy(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('destroy');
   }

   disableItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('disableItem', Item);
   }

   disableAt(Index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('disableAt', Index);
   }

   enableItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('enableItem', Item);
   }

   enableAt(Index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('enableAt', Index);
   }

   ensureVisible(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('ensureVisible', item);
   }

   endUpdate(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('endUpdate');
   }

   focus(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('focus');
   }

   getItems(): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getItems');
   }

   getVisibleItems(): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getVisibleItems');
   }

   findItems(text: string): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('findItems', text);
   }

   getSelectedItems(): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getSelectedItems');
   }

   getCheckedItems(): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getCheckedItems');
   }

   getItem(Index: number): any {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getItem', Index);
   }

   getItemByValue(Item: any): any {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getItemByValue', Item);
   }

   getSelectedItem(): any {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getSelectedItem');
   }

   getSelectedIndex(): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxListBox('getSelectedIndex');
   }

   insertAt(Item: any, Index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('insertAt', Item, Index);
   }

   invalidate(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('invalidate');
   }

   indeterminateItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('indeterminateItem', Item);
   }

   indeterminateIndex(Index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('indeterminateIndex', Index);
   }

   loadFromSelect(selector: string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('loadFromSelect', selector);
   }

   removeItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('removeItem', Item);
   }

   removeAt(Index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('removeAt', Index);
   }

   render(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('render');
   }

   refresh(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('refresh');
   }

   scrollTo(left: number, top: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('scrollTo', left, top);
   }

   selectItem(Item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('selectItem', Item);
   }

   selectIndex(Index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('selectIndex', Index);
   }

   updateItem(Item: any, Value: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('updateItem', Item, Value);
   }

   updateAt(item: any, index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('updateAt', item, index);
   }

   unselectIndex(index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('unselectIndex', index);
   }

   unselectItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('unselectItem', item);
   }

   uncheckIndex(index: number | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('uncheckIndex', index);
   }

   uncheckItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('uncheckItem', item);
   }

   uncheckAll(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxListBox('uncheckAll');
   }

   val(value?: number | string): any {
      if (value !== undefined) {
         return this.host.jqxListBox('val', value);
      } else {
         return this.host.jqxListBox('val');
      }
   };


   // jqxListBoxComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onDragStart = new EventEmitter();
   @Output() onDragEnd = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();
   @Output() onItemAdd = new EventEmitter();
   @Output() onItemRemove = new EventEmitter();
   @Output() onItemUpdate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.item.value); });
      this.host.on('checkChange', (eventData: any) => { this.onCheckChange.emit(eventData); });
      this.host.on('dragStart', (eventData: any) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData: any) => { this.onDragEnd.emit(eventData); });
      this.host.on('select', (eventData: any) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData: any) => { this.onUnselect.emit(eventData); });
      this.host.on('itemAdd', (eventData: any) => { this.onItemAdd.emit(eventData); });
      this.host.on('itemRemove', (eventData: any) => { this.onItemRemove.emit(eventData); });
      this.host.on('itemUpdate', (eventData: any) => { this.onItemUpdate.emit(eventData); });
   }

} //jqxListBoxComponent


