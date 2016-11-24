/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDockingLayout',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDockingLayoutComponent implements OnChanges
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
   widgetObject:  jqwidgets.jqxDockingLayout;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                  this.host.jqxDockingLayout(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() onCreate = new EventEmitter();
   @Output() onDock = new EventEmitter();
   @Output() onFloatGroupClosed = new EventEmitter();
   @Output() onFloat = new EventEmitter();
   @Output() onPin = new EventEmitter();
   @Output() onResize = new EventEmitter();
   @Output() onUnpin = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData) => { this.onCreate.emit(eventData); });
      this.host.on('dock', (eventData) => { this.onDock.emit(eventData); });
      this.host.on('floatGroupClosed', (eventData) => { this.onFloatGroupClosed.emit(eventData); });
      this.host.on('float', (eventData) => { this.onFloat.emit(eventData); });
      this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
      this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
      this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
   }

} //jqxDockingLayoutComponent
