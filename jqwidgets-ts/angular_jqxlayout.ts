/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularLayout',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLayoutComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxLayout;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLayout', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
   @Output() OnCreate = new EventEmitter();
   @Output() OnPin = new EventEmitter();
   @Output() OnResize = new EventEmitter();
   @Output() OnUnpin = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData) => { this.OnCreate.emit(eventData); });
      this.host.on('pin', (eventData) => { this.OnPin.emit(eventData); });
      this.host.on('resize', (eventData) => { this.OnResize.emit(eventData); });
      this.host.on('unpin', (eventData) => { this.OnUnpin.emit(eventData); });
   }

} //jqxLayoutComponent
