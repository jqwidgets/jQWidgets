/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDraw',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDrawComponent implements OnChanges
{
   @Input('renderEngine') attrRenderEngine;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['renderEngine'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDraw;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDraw(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDraw(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDraw(this.properties[i])) {
                  this.host.jqxDraw(this.properties[i], this[attrName]); 
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
      this.host.append('div');
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDraw('setOptions', options);
   }

   // jqxDrawComponent properties
   renderEngine(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDraw('renderEngine', arg);
      } else {
          return this.host.jqxDraw('renderEngine');
      }
   }


   // jqxDrawComponent functions
   attr(element: any, attributes: any): void {
      this.host.jqxDraw('attr', element, attributes);
   }
   circle(cx: number, cy: number, r: number, attributes: any): any {
      return this.host.jqxDraw('circle', cx, cy, r, attributes);
   }
   clear(): void {
      this.host.jqxDraw('clear');
   }
   getAttr(element: any, attributes: any): string {
      return this.host.jqxDraw('getAttr', element, attributes);
   }
   getSize(): any {
      return this.host.jqxDraw('getSize');
   }
   line(x1: number, y1: number, x2: number, y2: number, attributes: any): any {
      return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
   }
   measureText(text: string, angle: number, attributes: any): any {
      return this.host.jqxDraw('measureText', text, angle, attributes);
   }
   on(element: any, event: string, func: any): void {
      this.host.jqxDraw('on', element, event, func);
   }
   off(element: any, event: string, func: any): void {
      this.host.jqxDraw('off', element, event, func);
   }
   path(path: string, attributes: any): any {
      return this.host.jqxDraw('path', path, attributes);
   }
   pieslice(cx: number, xy: number, innerRadius: any, outerRadius: any, fromAngle: number, endAngle: number, centerOffset: number, attributes: any): any {
      return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
   }
   refresh(): void {
      this.host.jqxDraw('refresh');
   }
   rect(x: number, y: number, width: jqwidgets.Size, height: jqwidgets.Size, attributes: any): any {
      return this.host.jqxDraw('rect', x, y, width, height, attributes);
   }
   saveAsJPEG(image: string, url: string): void {
      this.host.jqxDraw('saveAsJPEG', image, url);
   }
   saveAsPNG(image: string, url: string): void {
      this.host.jqxDraw('saveAsPNG', image, url);
   }
   text(x: number, y: number, width: jqwidgets.Size, height: jqwidgets.Size, angle: number, attributes: Array<any>, clip: boolean, halign: string, valign: string, rotateAround: string): any {
      return this.host.jqxDraw('text', x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
   }

   // jqxDrawComponent events


   __wireEvents__(): void {

   }

} //jqxDrawComponent
