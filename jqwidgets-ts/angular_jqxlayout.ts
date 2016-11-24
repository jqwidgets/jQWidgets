/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularLayout',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLayoutComponent implements OnChanges
{
   @Input('contextMenu') attrContextMenu;
   @Input('layout') attrLayout;
   @Input('minGroupHeight') attrMinGroupHeight;
   @Input('minGroupWidth') attrMinGroupWidth;
   @Input('resizable') attrResizable;
   @Input('rtl') attrRtl;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxLayout;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxLayout(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxLayout(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxLayout(this.properties[i])) {
                  this.host.jqxLayout(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLayout', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxLayout('setOptions', options);
   }

   // jqxLayoutComponent properties
   contextMenu(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('contextMenu', arg);
      } else {
          return this.host.jqxLayout('contextMenu');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('height', arg);
      } else {
          return this.host.jqxLayout('height');
      }
   }

   layout(arg?: Array<jqwidgets.LayoutLayout>) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('layout', arg);
      } else {
          return this.host.jqxLayout('layout');
      }
   }

   minGroupHeight(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('minGroupHeight', arg);
      } else {
          return this.host.jqxLayout('minGroupHeight');
      }
   }

   minGroupWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('minGroupWidth', arg);
      } else {
          return this.host.jqxLayout('minGroupWidth');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('resizable', arg);
      } else {
          return this.host.jqxLayout('resizable');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('rtl', arg);
      } else {
          return this.host.jqxLayout('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('theme', arg);
      } else {
          return this.host.jqxLayout('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLayout('width', arg);
      } else {
          return this.host.jqxLayout('width');
      }
   }


   // jqxLayoutComponent functions
   destroy(): void {
      this.host.jqxLayout('destroy');
   }
   loadLayout(Layout: any): void {
      this.host.jqxLayout('loadLayout', Layout);
   }
   refresh(): void {
      this.host.jqxLayout('refresh');
   }
   render(): void {
      this.host.jqxLayout('render');
   }
   saveLayout(): any {
      return this.host.jqxLayout('saveLayout');
   }

   // jqxLayoutComponent events
   @Output() onCreate = new EventEmitter();
   @Output() onPin = new EventEmitter();
   @Output() onResize = new EventEmitter();
   @Output() onUnpin = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData) => { this.onCreate.emit(eventData); });
      this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
      this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
      this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
   }

} //jqxLayoutComponent
