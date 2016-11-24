/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularResponse',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxResponseComponent implements OnChanges
{
   @Input('browser') attrBrowser;
   @Input('device') attrDevice;
   @Input('document') attrDocument;
   @Input('destroyProperty') attrDestroyProperty;
   @Input('resize') attrResize;
   @Input('os') attrOs;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['browser','device','document','destroyProperty','resize','os'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxResponse;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxResponse(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxResponse(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxResponse(this.properties[i])) {
                  this.host.jqxResponse(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponse', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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

   os(arg?: jqwidgets.ResponseOs) : any {
      if (arg !== undefined) {
          this.host.jqxResponse('os', arg);
      } else {
          return this.host.jqxResponse('os');
      }
   }


   // jqxResponseComponent functions
   refresh(): void {
      this.host.jqxResponse('refresh');
   }
   responsive(container: string, colWidths: Array<Number>, colOffsets: Array<Number>, colClass: string, deviceTypes: string, margin: jqwidgets.ResponseOffset, padding: jqwidgets.ResponseOffset, breakpoints: Array<jqwidgets.ResponseBreakpoint>): void {
      this.host.jqxResponse('responsive', container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints);
   }
   isHidden(element: any): boolean {
      return this.host.jqxResponse('isHidden', element);
   }
   inViewPort(element: any): boolean {
      return this.host.jqxResponse('inViewPort', element);
   }
   pointerDown(element: any, callback: any): void {
      this.host.jqxResponse('pointerDown', element, callback);
   }
   pointerMove(element: any, callback: any): void {
      this.host.jqxResponse('pointerMove', element, callback);
   }
   pointerUp(element: any, callback: any): void {
      this.host.jqxResponse('pointerUp', element, callback);
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
