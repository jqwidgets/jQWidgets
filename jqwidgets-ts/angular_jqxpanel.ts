/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularPanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPanelComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxPanel;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
