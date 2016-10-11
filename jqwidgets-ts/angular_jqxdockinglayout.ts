/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDockingLayout',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDockingLayoutComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxDockingLayout;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDockingLayout('setOptions', options);
   }

   // jqxDockingLayoutComponent properties
   contextMenu(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('contextMenu', arg);
      } else {
          return this.host.jqxDockingLayout('contextMenu');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('height', arg);
      } else {
          return this.host.jqxDockingLayout('height');
      }
   }

   layout(arg?: Array<jqwidgets.DockingLayoutLayout>) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('layout', arg);
      } else {
          return this.host.jqxDockingLayout('layout');
      }
   }

   minGroupHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('minGroupHeight', arg);
      } else {
          return this.host.jqxDockingLayout('minGroupHeight');
      }
   }

   minGroupWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('minGroupWidth', arg);
      } else {
          return this.host.jqxDockingLayout('minGroupWidth');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('resizable', arg);
      } else {
          return this.host.jqxDockingLayout('resizable');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('rtl', arg);
      } else {
          return this.host.jqxDockingLayout('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('theme', arg);
      } else {
          return this.host.jqxDockingLayout('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockingLayout('width', arg);
      } else {
          return this.host.jqxDockingLayout('width');
      }
   }


   // jqxDockingLayoutComponent functions
   addFloatGroup(width: jqwidgets.Size, height: jqwidgets.Size, position: jqwidgets.DockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void {
      this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);

   }
   destroy(): void {
      this.host.jqxDockingLayout('destroy');

   }
   loadLayout(layout: any): void {
      this.host.jqxDockingLayout('loadLayout', layout);

   }
   refresh(): void {
      this.host.jqxDockingLayout('refresh');

   }
   render(): void {
      this.host.jqxDockingLayout('render');

   }
   saveLayout(): any {
      return this.host.jqxDockingLayout('saveLayout');

   }

   // jqxDockingLayoutComponent events
   @Output() OnCreate = new EventEmitter();
   @Output() OnDock = new EventEmitter();
   @Output() OnFloatGroupClosed = new EventEmitter();
   @Output() OnFloat = new EventEmitter();
   @Output() OnPin = new EventEmitter();
   @Output() OnResize = new EventEmitter();
   @Output() OnUnpin = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData) => { this.OnCreate.emit(eventData); });
      this.host.on('dock', (eventData) => { this.OnDock.emit(eventData); });
      this.host.on('floatGroupClosed', (eventData) => { this.OnFloatGroupClosed.emit(eventData); });
      this.host.on('float', (eventData) => { this.OnFloat.emit(eventData); });
      this.host.on('pin', (eventData) => { this.OnPin.emit(eventData); });
      this.host.on('resize', (eventData) => { this.OnResize.emit(eventData); });
      this.host.on('unpin', (eventData) => { this.OnUnpin.emit(eventData); });
   }

} //jqxDockingLayoutComponent
