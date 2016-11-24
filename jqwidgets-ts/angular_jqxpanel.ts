/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularPanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPanelComponent implements OnChanges
{
   @Input('autoUpdate') attrAutoUpdate;
   @Input('disabled') attrDisabled;
   @Input('rtl') attrRtl;
   @Input('sizeMode') attrSizeMode;
   @Input('scrollBarSize') attrScrollBarSize;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPanel;

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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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

   height(arg?: String | Number) : any {
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

   scrollBarSize(arg?: String | Number) : any {
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

   width(arg?: String | Number) : any {
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
   scrollTo(top: String | Number, left: String | Number): void {
      this.host.jqxPanel('scrollTo', top, left);
   }

   // jqxPanelComponent events


   __wireEvents__(): void {

   }

} //jqxPanelComponent
