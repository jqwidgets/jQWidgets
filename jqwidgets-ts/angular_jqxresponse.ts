/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularResponse',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxResponseComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxResponse;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponse', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxResponse('setOptions', options);
   }

   // jqxResponseComponent properties
   browser(arg?: jqwidgets.ResponseBrowser) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('browser', arg);
      } else {
          return this.host.jqxResponse('browser');
      }
   }

   device(arg?: jqwidgets.ResponseDevice) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('device', arg);
      } else {
          return this.host.jqxResponse('device');
      }
   }

   document(arg?: jqwidgets.ResponseDocument) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('document', arg);
      } else {
          return this.host.jqxResponse('document');
      }
   }

   destroyProperty(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('destroyProperty', arg);
      } else {
          return this.host.jqxResponse('destroyProperty');
      }
   }

   resize(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('resize', arg);
      } else {
          return this.host.jqxResponse('resize');
      }
   }

   isHidden(arg?: jqwidgets.(id: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('isHidden', arg);
      } else {
          return this.host.jqxResponse('isHidden');
      }
   }

   inViewPort(arg?: jqwidgets.(id: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('inViewPort', arg);
      } else {
          return this.host.jqxResponse('inViewPort');
      }
   }

   os(arg?: jqwidgets.ResponseOs) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('os', arg);
      } else {
          return this.host.jqxResponse('os');
      }
   }

   pointerDown(arg?: jqwidgets.(id: any, callback: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('pointerDown', arg);
      } else {
          return this.host.jqxResponse('pointerDown');
      }
   }

   pointerMove(arg?: jqwidgets.(id: any, callback: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('pointerMove', arg);
      } else {
          return this.host.jqxResponse('pointerMove');
      }
   }

   pointerUp(arg?: jqwidgets.(id: any, callback: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('pointerUp', arg);
      } else {
          return this.host.jqxResponse('pointerUp');
      }
   }


   // jqxResponseComponent functions
   refresh(): void {
      this.host.jqxResponse('refresh');

   }
   responsive(container: string, colWidths: Array<Number>, colOffsets: Array<Number>, colClass: string, deviceTypes: string, margin: jqwidgets.ResponseOffset, padding: jqwidgets.ResponseOffset, breakpoints: Array<jqwidgets.ResponseBreakpoint>): void {
      this.host.jqxResponse('responsive', container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints);

   }
   scroll(): Object {
      return this.host.jqxResponse('scroll');

   }
   viewPort(): Object {
      return this.host.jqxResponse('viewPort');

   }

   // jqxResponseComponent events


   __wireEvents__(): void {

   }

} //jqxResponseComponent
