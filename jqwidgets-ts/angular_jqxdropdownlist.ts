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
import '../jqwidgets/jqxdropdownlist.js';

import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDropDownListComponent),
    multi: true
}

@Component({
    selector: 'jqxDropDownList',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxDropDownListComponent implements ControlValueAccessor, OnChanges, AfterViewInit, AfterViewChecked 
{
   @Input('arrowSize') attrArrowSize: number;
   @Input('autoOpen') attrAutoOpen: boolean;
   @Input('autoDropDownHeight') attrAutoDropDownHeight: boolean;
   @Input('autoItemsHeight') attrAutoItemsHeight: boolean;
   @Input('animationType') attrAnimationType: string;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('closeDelay') attrCloseDelay: number;
   @Input('disabled') attrDisabled: boolean;
   @Input('displayMember') attrDisplayMember: string;
   @Input('dropDownHorizontalAlignment') attrDropDownHorizontalAlignment: string;
   @Input('dropDownVerticalAlignment') attrDropDownVerticalAlignment: string;
   @Input('dropDownHeight') attrDropDownHeight: number | string;
   @Input('dropDownWidth') attrDropDownWidth: number | string;
   @Input('dropDownContainer') attrDropDownContainer: string;
   @Input('emptyString') attrEmptyString: string;
   @Input('enableSelection') attrEnableSelection: boolean;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection: boolean;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('equalItemsWidth') attrEqualItemsWidth: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterHeight') attrFilterHeight: number;
   @Input('filterDelay') attrFilterDelay: number;
   @Input('filterPlaceHolder') attrFilterPlaceHolder: string;
   @Input('focusable') attrFocusable: boolean;
   @Input('groupMember') attrGroupMember: string;
   @Input('hint') attrHint: boolean;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('incrementalSearchDelay') attrIncrementalSearchDelay: number;
   @Input('itemHeight') attrItemHeight: number;
   @Input('keyboardSelection') attrKeyboardSelection: boolean;
   @Input('openDelay') attrOpenDelay: number;
   @Input('placeHolder') attrPlaceHolder: string;
   @Input('popupZIndex') attrPopupZIndex: number;
   @Input('ready') attrReady: () => void;
   @Input('rtl') attrRtl: boolean;
   @Input('renderer') attrRenderer: (index: jqwidgets.DropDownListRenderer['index'], label: jqwidgets.DropDownListRenderer['label'], value: jqwidgets.DropDownListRenderer['value']) => string;
   @Input('selectionRenderer') attrSelectionRenderer: (element: jqwidgets.DropDownListSelectionRenderer['element'], index: jqwidgets.DropDownListSelectionRenderer['index'], label: jqwidgets.DropDownListSelectionRenderer['label'], value: jqwidgets.DropDownListSelectionRenderer['value']) => string;
   @Input('searchMode') attrSearchMode: string;
   @Input('searchMember') attrSearchMember: string;
   @Input('source') attrSource: Array<any>;
   @Input('selectedIndex') attrSelectedIndex: number;
   @Input('scrollBarSize') attrScrollBarSize: number;
   @Input('theme') attrTheme: string;
   @Input('template') attrTemplate: string;
   @Input('touchMode') attrTouchMode: boolean | string;
   @Input('valueMember') attrValueMember: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['arrowSize','autoOpen','autoDropDownHeight','autoItemsHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','dropDownContainer','emptyString','enableSelection','enableBrowserBoundsDetection','enableHover','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','focusable','groupMember','height','hint','incrementalSearch','incrementalSearchDelay','itemHeight','keyboardSelection','openDelay','placeHolder','popupZIndex','ready','rtl','renderer','selectionRenderer','searchMode','searchMember','source','selectedIndex','scrollBarSize','theme','template','touchMode','valueMember','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDropDownList;

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
         this.host.jqxDropDownList('destroy');
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

            this.host.jqxDropDownList({source: result.items});
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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDropDownList(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                  this.host.jqxDropDownList(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);

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
               this.host.jqxDropDownList('val', '');
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
      this.host.jqxDropDownList('setOptions', options);
   }

   // jqxDropDownListComponent properties
   arrowSize(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('arrowSize', arg);
      } else {
          return this.host.jqxDropDownList('arrowSize');
      }
   }

   autoOpen(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('autoOpen', arg);
      } else {
          return this.host.jqxDropDownList('autoOpen');
      }
   }

   autoDropDownHeight(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('autoDropDownHeight', arg);
      } else {
          return this.host.jqxDropDownList('autoDropDownHeight');
      }
   }

   autoItemsHeight(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('autoItemsHeight', arg);
      } else {
          return this.host.jqxDropDownList('autoItemsHeight');
      }
   }

   animationType(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('animationType', arg);
      } else {
          return this.host.jqxDropDownList('animationType');
      }
   }

   checkboxes(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('checkboxes', arg);
      } else {
          return this.host.jqxDropDownList('checkboxes');
      }
   }

   closeDelay(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('closeDelay', arg);
      } else {
          return this.host.jqxDropDownList('closeDelay');
      }
   }

   disabled(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('disabled', arg);
      } else {
          return this.host.jqxDropDownList('disabled');
      }
   }

   displayMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('displayMember', arg);
      } else {
          return this.host.jqxDropDownList('displayMember');
      }
   }

   dropDownHorizontalAlignment(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxDropDownList('dropDownHorizontalAlignment');
      }
   }

   dropDownVerticalAlignment(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
      } else {
          return this.host.jqxDropDownList('dropDownVerticalAlignment');
      }
   }

   dropDownHeight(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownHeight', arg);
      } else {
          return this.host.jqxDropDownList('dropDownHeight');
      }
   }

   dropDownWidth(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownWidth', arg);
      } else {
          return this.host.jqxDropDownList('dropDownWidth');
      }
   }

   dropDownContainer(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownContainer', arg);
      } else {
          return this.host.jqxDropDownList('dropDownContainer');
      }
   }

   emptyString(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('emptyString', arg);
      } else {
          return this.host.jqxDropDownList('emptyString');
      }
   }

   enableSelection(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('enableSelection', arg);
      } else {
          return this.host.jqxDropDownList('enableSelection');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxDropDownList('enableBrowserBoundsDetection');
      }
   }

   enableHover(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('enableHover', arg);
      } else {
          return this.host.jqxDropDownList('enableHover');
      }
   }

   equalItemsWidth(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('equalItemsWidth', arg);
      } else {
          return this.host.jqxDropDownList('equalItemsWidth');
      }
   }

   filterable(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('filterable', arg);
      } else {
          return this.host.jqxDropDownList('filterable');
      }
   }

   filterHeight(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('filterHeight', arg);
      } else {
          return this.host.jqxDropDownList('filterHeight');
      }
   }

   filterDelay(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('filterDelay', arg);
      } else {
          return this.host.jqxDropDownList('filterDelay');
      }
   }

   filterPlaceHolder(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('filterPlaceHolder', arg);
      } else {
          return this.host.jqxDropDownList('filterPlaceHolder');
      }
   }

   focusable(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('focusable', arg);
      } else {
          return this.host.jqxDropDownList('focusable');
      }
   }

   groupMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('groupMember', arg);
      } else {
          return this.host.jqxDropDownList('groupMember');
      }
   }

   height(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('height', arg);
      } else {
          return this.host.jqxDropDownList('height');
      }
   }

   hint(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('hint', arg);
      } else {
          return this.host.jqxDropDownList('hint');
      }
   }

   incrementalSearch(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('incrementalSearch', arg);
      } else {
          return this.host.jqxDropDownList('incrementalSearch');
      }
   }

   incrementalSearchDelay(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('incrementalSearchDelay', arg);
      } else {
          return this.host.jqxDropDownList('incrementalSearchDelay');
      }
   }

   itemHeight(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('itemHeight', arg);
      } else {
          return this.host.jqxDropDownList('itemHeight');
      }
   }

   keyboardSelection(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('keyboardSelection', arg);
      } else {
          return this.host.jqxDropDownList('keyboardSelection');
      }
   }

   openDelay(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('openDelay', arg);
      } else {
          return this.host.jqxDropDownList('openDelay');
      }
   }

   placeHolder(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('placeHolder', arg);
      } else {
          return this.host.jqxDropDownList('placeHolder');
      }
   }

   popupZIndex(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('popupZIndex', arg);
      } else {
          return this.host.jqxDropDownList('popupZIndex');
      }
   }

   ready(arg?: () => void): () => void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('ready', arg);
      } else {
          return this.host.jqxDropDownList('ready');
      }
   }

   rtl(arg?: boolean): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('rtl', arg);
      } else {
          return this.host.jqxDropDownList('rtl');
      }
   }

   renderer(arg?: (index: jqwidgets.DropDownListRenderer['index'], label: jqwidgets.DropDownListRenderer['label'], value: jqwidgets.DropDownListRenderer['value']) => string): (index: jqwidgets.DropDownListRenderer['index'], label: jqwidgets.DropDownListRenderer['label'], value: jqwidgets.DropDownListRenderer['value']) => string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('renderer', arg);
      } else {
          return this.host.jqxDropDownList('renderer');
      }
   }

   selectionRenderer(arg?: (element: jqwidgets.DropDownListSelectionRenderer['element'], index: jqwidgets.DropDownListSelectionRenderer['index'], label: jqwidgets.DropDownListSelectionRenderer['label'], value: jqwidgets.DropDownListSelectionRenderer['value']) => string): (element: jqwidgets.DropDownListSelectionRenderer['element'], index: jqwidgets.DropDownListSelectionRenderer['index'], label: jqwidgets.DropDownListSelectionRenderer['label'], value: jqwidgets.DropDownListSelectionRenderer['value']) => string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('selectionRenderer', arg);
      } else {
          return this.host.jqxDropDownList('selectionRenderer');
      }
   }

   searchMode(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('searchMode', arg);
      } else {
          return this.host.jqxDropDownList('searchMode');
      }
   }

   searchMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('searchMember', arg);
      } else {
          return this.host.jqxDropDownList('searchMember');
      }
   }

   source(arg?: Array<any>): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('source', arg);
      } else {
          return this.host.jqxDropDownList('source');
      }
   }

   selectedIndex(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('selectedIndex', arg);
      } else {
          return this.host.jqxDropDownList('selectedIndex');
      }
   }

   scrollBarSize(arg?: number): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('scrollBarSize', arg);
      } else {
          return this.host.jqxDropDownList('scrollBarSize');
      }
   }

   theme(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('theme', arg);
      } else {
          return this.host.jqxDropDownList('theme');
      }
   }

   template(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('template', arg);
      } else {
          return this.host.jqxDropDownList('template');
      }
   }

   touchMode(arg?: boolean | string): boolean | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('touchMode', arg);
      } else {
          return this.host.jqxDropDownList('touchMode');
      }
   }

   valueMember(arg?: string): string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('valueMember', arg);
      } else {
          return this.host.jqxDropDownList('valueMember');
      }
   }

   width(arg?: number | string): number | string {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      if (arg !== undefined) {
          this.host.jqxDropDownList('width', arg);
      } else {
          return this.host.jqxDropDownList('width');
      }
   }


   // jqxDropDownListComponent functions
   addItem(item: jqwidgets.DropDownListItem | string): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('addItem', item);
   }

   clearSelection(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('clearSelection');
   }

   clear(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('clear');
   }

   close(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('close');
   }

   checkIndex(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('checkIndex', index);
   }

   checkItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('checkItem', item);
   }

   checkAll(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('checkAll');
   }

   clearFilter(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('clearFilter');
   }

   destroy(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('destroy');
   }

   disableItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('disableItem', item);
   }

   disableAt(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('disableAt', index);
   }

   enableItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('enableItem', item);
   }

   enableAt(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('enableAt', index);
   }

   ensureVisible(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('ensureVisible', index);
   }

   focus(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('focus');
   }

   getItem(index: number): jqwidgets.DropDownListItem {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getItem', index);
   }

   getItemByValue(itemValue: string): jqwidgets.DropDownListItem {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getItemByValue', itemValue);
   }

   getItems(): Array<jqwidgets.DropDownListItem> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getItems');
   }

   getVisibleItems(): Array<any> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getVisibleItems');
   }

   getCheckedItems(): Array<jqwidgets.DropDownListItem> {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getCheckedItems');
   }

   getSelectedItem(): jqwidgets.DropDownListItem {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getSelectedItem');
   }

   getSelectedIndex(): number {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('getSelectedIndex');
   }

   insertAt(item: jqwidgets.DropDownListItem | string, index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('insertAt', item, index);
   }

   isOpened(): boolean {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      return this.host.jqxDropDownList('isOpened');
   }

   indeterminateIndex(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('indeterminateIndex', index);
   }

   indeterminateItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('indeterminateItem', item);
   }

   loadFromSelect(arg: string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('loadFromSelect', arg);
   }

   open(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('open');
   }

   removeItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('removeItem', item);
   }

   removeAt(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('removeAt', index);
   }

   selectIndex(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('selectIndex', index);
   }

   selectItem(item: jqwidgets.DropDownListItem | string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('selectItem', item);
   }

   setContent(content: string): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('setContent', content);
   }

   updateItem(newItem: jqwidgets.DropDownListItem | string, item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('updateItem', newItem, item);
   }

   updateAt(item: jqwidgets.DropDownListItem | string, index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('updateAt', item, index);
   }

   unselectIndex(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('unselectIndex', index);
   }

   unselectItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('unselectItem', item);
   }

   uncheckIndex(index: number): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('uncheckIndex', index);
   }

   uncheckItem(item: any): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('uncheckItem', item);
   }

   uncheckAll(): void {

      if (this.autoCreate && !this.host) {
         this.createComponent(); 
      }

      this.host.jqxDropDownList('uncheckAll');
   }

   val(value?: string): any {
      if (value !== undefined) {
         return this.host.jqxDropDownList('val', value);
      } else {
         return this.host.jqxDropDownList('val');
      }
   };


   // jqxDropDownListComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();
   @Output() onItemAdd = new EventEmitter();
   @Output() onItemRemove = new EventEmitter();
   @Output() onItemUpdate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('checkChange', (eventData: any) => { this.onCheckChange.emit(eventData); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.item.value); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
      this.host.on('select', (eventData: any) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData: any) => { this.onUnselect.emit(eventData); });
      this.host.on('itemAdd', (eventData: any) => { this.onItemAdd.emit(eventData); });
      this.host.on('itemRemove', (eventData: any) => { this.onItemRemove.emit(eventData); });
      this.host.on('itemUpdate', (eventData: any) => { this.onItemUpdate.emit(eventData); });
   }

} //jqxDropDownListComponent


