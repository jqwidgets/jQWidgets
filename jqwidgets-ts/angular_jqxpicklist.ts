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
import '../jqwidgets/jqxpicklist.js';

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxPickList',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPickListComponent implements OnChanges
{
   @Input('source') attrSource: any;
   @Input('selectedItems') attrSelectedItems: any[];
   @Input('displayMember') attrDisplayMember: string;
   @Input('valueMember') attrValueMember: string;
   @Input('sourceHeader') attrSourceHeader: string;
   @Input('targetHeader') attrTargetHeader: string;
   @Input('showCounts') attrShowCounts: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterPlaceHolder') attrFilterPlaceHolder: string;
   @Input('searchMode') attrSearchMode: string;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('reorderable') attrReorderable: boolean;
   @Input('renderer') attrRenderer: (item: jqwidgets.PickListRenderer['item'], label: jqwidgets.PickListRenderer['label'], value: jqwidgets.PickListRenderer['value'], index: jqwidgets.PickListRenderer['index']) => string;
   @Input('buttons') attrButtons: string[];
   @Input('itemHeight') attrItemHeight: number;
   @Input('sourceLabel') attrSourceLabel: string;
   @Input('targetLabel') attrTargetLabel: string;
   @Input('disabled') attrDisabled: boolean;
   @Input('rtl') attrRtl: boolean;
   @Input('theme') attrTheme: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['width','height','source','selectedItems','displayMember','valueMember','sourceHeader','targetHeader','showCounts','filterable','filterPlaceHolder','searchMode','checkboxes','reorderable','renderer','buttons','itemHeight','sourceLabel','targetLabel','disabled','rtl','theme'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPickList;

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
         this.host.jqxPickList('destroy');
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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxPickList(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxPickList(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxPickList(this.properties[i])) {
                  this.host.jqxPickList(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPickList', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxPickList('setOptions', options);
   }

   // jqxPickListComponent properties
   width(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxPickList('width', arg);
      } else {
          return this.host.jqxPickList('width');
      }
   }

   height(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxPickList('height', arg);
      } else {
          return this.host.jqxPickList('height');
      }
   }

   source(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxPickList('source', arg);
      } else {
          return this.host.jqxPickList('source');
      }
   }

   selectedItems(arg?: any[]): any[] {
      if (arg !== undefined) {
          this.host.jqxPickList('selectedItems', arg);
      } else {
          return this.host.jqxPickList('selectedItems');
      }
   }

   displayMember(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('displayMember', arg);
      } else {
          return this.host.jqxPickList('displayMember');
      }
   }

   valueMember(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('valueMember', arg);
      } else {
          return this.host.jqxPickList('valueMember');
      }
   }

   sourceHeader(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('sourceHeader', arg);
      } else {
          return this.host.jqxPickList('sourceHeader');
      }
   }

   targetHeader(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('targetHeader', arg);
      } else {
          return this.host.jqxPickList('targetHeader');
      }
   }

   showCounts(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('showCounts', arg);
      } else {
          return this.host.jqxPickList('showCounts');
      }
   }

   filterable(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('filterable', arg);
      } else {
          return this.host.jqxPickList('filterable');
      }
   }

   filterPlaceHolder(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('filterPlaceHolder', arg);
      } else {
          return this.host.jqxPickList('filterPlaceHolder');
      }
   }

   searchMode(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('searchMode', arg);
      } else {
          return this.host.jqxPickList('searchMode');
      }
   }

   checkboxes(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('checkboxes', arg);
      } else {
          return this.host.jqxPickList('checkboxes');
      }
   }

   reorderable(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('reorderable', arg);
      } else {
          return this.host.jqxPickList('reorderable');
      }
   }

   renderer(arg?: (item: jqwidgets.PickListRenderer['item'], label: jqwidgets.PickListRenderer['label'], value: jqwidgets.PickListRenderer['value'], index: jqwidgets.PickListRenderer['index']) => string): (item: jqwidgets.PickListRenderer['item'], label: jqwidgets.PickListRenderer['label'], value: jqwidgets.PickListRenderer['value'], index: jqwidgets.PickListRenderer['index']) => string {
      if (arg !== undefined) {
          this.host.jqxPickList('renderer', arg);
      } else {
          return this.host.jqxPickList('renderer');
      }
   }

   buttons(arg?: string[]): string[] {
      if (arg !== undefined) {
          this.host.jqxPickList('buttons', arg);
      } else {
          return this.host.jqxPickList('buttons');
      }
   }

   itemHeight(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxPickList('itemHeight', arg);
      } else {
          return this.host.jqxPickList('itemHeight');
      }
   }

   sourceLabel(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('sourceLabel', arg);
      } else {
          return this.host.jqxPickList('sourceLabel');
      }
   }

   targetLabel(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('targetLabel', arg);
      } else {
          return this.host.jqxPickList('targetLabel');
      }
   }

   disabled(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('disabled', arg);
      } else {
          return this.host.jqxPickList('disabled');
      }
   }

   rtl(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxPickList('rtl', arg);
      } else {
          return this.host.jqxPickList('rtl');
      }
   }

   theme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxPickList('theme', arg);
      } else {
          return this.host.jqxPickList('theme');
      }
   }


   // jqxPickListComponent functions
   getSelectedItems(): any[] {
      return this.host.jqxPickList('getSelectedItems');
   }

   getSelectedValues(): any[] {
      return this.host.jqxPickList('getSelectedValues');
   }

   getSource(): any[] {
      return this.host.jqxPickList('getSource');
   }

   add(values: any): void {
      this.host.jqxPickList('add', values);
   }

   remove(values: any): void {
      this.host.jqxPickList('remove', values);
   }

   addAll(): void {
      this.host.jqxPickList('addAll');
   }

   removeAll(): void {
      this.host.jqxPickList('removeAll');
   }

   moveUp(): void {
      this.host.jqxPickList('moveUp');
   }

   moveDown(): void {
      this.host.jqxPickList('moveDown');
   }

   val(value?: any): any {
      if (value !== undefined) {
         return this.host.jqxPickList('val', value);
      } else {
         return this.host.jqxPickList('val');
      }
   };

   focus(): void {
      this.host.jqxPickList('focus');
   }

   refresh(): void {
      this.host.jqxPickList('refresh');
   }

   render(): void {
      this.host.jqxPickList('render');
   }

   destroy(): void {
      this.host.jqxPickList('destroy');
   }


   // jqxPickListComponent events
   @Output() onCreate = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onItemsAdded = new EventEmitter();
   @Output() onItemsRemoved = new EventEmitter();
   @Output() onReordered = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData: any) => { this.onCreate.emit(eventData); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
      this.host.on('itemsAdded', (eventData: any) => { this.onItemsAdded.emit(eventData); });
      this.host.on('itemsRemoved', (eventData: any) => { this.onItemsRemoved.emit(eventData); });
      this.host.on('reordered', (eventData: any) => { this.onReordered.emit(eventData); });
   }

} //jqxPickListComponent


