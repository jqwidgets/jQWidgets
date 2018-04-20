/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxpanel.js';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxPanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPanelComponent implements OnChanges
{
   @Input('autoUpdate') attrAutoUpdate: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('rtl') attrRtl: boolean;
   @Input('sizeMode') attrSizeMode: any;
   @Input('scrollBarSize') attrScrollBarSize: number | string;
   @Input('theme') attrTheme: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPanel;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxPanel(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                  this.host.jqxPanel(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxPanel('setOptions', options);
   }

   // jqxPanelComponent properties
   autoUpdate(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('autoUpdate', arg);
      } else {
          return this.host.jqxPanel('autoUpdate');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('disabled', arg);
      } else {
          return this.host.jqxPanel('disabled');
      }
   }

   height(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('height', arg);
      } else {
          return this.host.jqxPanel('height');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('rtl', arg);
      } else {
          return this.host.jqxPanel('rtl');
      }
   }

   sizeMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('sizeMode', arg);
      } else {
          return this.host.jqxPanel('sizeMode');
      }
   }

   scrollBarSize(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('scrollBarSize', arg);
      } else {
          return this.host.jqxPanel('scrollBarSize');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('theme', arg);
      } else {
          return this.host.jqxPanel('theme');
      }
   }

   width(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxPanel('width', arg);
      } else {
          return this.host.jqxPanel('width');
      }
   }


   // jqxPanelComponent functions
   append(HTMLElement: any): void {
      this.host.jqxPanel('append', HTMLElement);
   }

   clearcontent(): void {
      this.host.jqxPanel('clearcontent');
   }

   destroy(): void {
      this.host.jqxPanel('destroy');
   }

   focus(): void {
      this.host.jqxPanel('focus');
   }

   getScrollHeight(): number {
      return this.host.jqxPanel('getScrollHeight');
   }

   getVScrollPosition(): number {
      return this.host.jqxPanel('getVScrollPosition');
   }

   getScrollWidth(): number {
      return this.host.jqxPanel('getScrollWidth');
   }

   getHScrollPosition(): number {
      return this.host.jqxPanel('getHScrollPosition');
   }

   prepend(HTMLElement: any): void {
      this.host.jqxPanel('prepend', HTMLElement);
   }

   remove(HTMLElement: any): void {
      this.host.jqxPanel('remove', HTMLElement);
   }

   scrollTo(top: number | string, left: number | string): void {
      this.host.jqxPanel('scrollTo', top, left);
   }


   // jqxPanelComponent events


   __wireEvents__(): void {

   }

} //jqxPanelComponent


