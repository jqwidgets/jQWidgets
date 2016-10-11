/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularResponsivePanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxResponsivePanelComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxResponsivePanel;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxResponsivePanel('setOptions', options);
   }

   // jqxResponsivePanelComponent properties
   animationDirection(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationDirection', arg);
      } else {
          return this.host.jqxResponsivePanel('animationDirection');
      }
   }

   animationHideDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationHideDelay', arg);
      } else {
          return this.host.jqxResponsivePanel('animationHideDelay');
      }
   }

   animationShowDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationShowDelay', arg);
      } else {
          return this.host.jqxResponsivePanel('animationShowDelay');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationType', arg);
      } else {
          return this.host.jqxResponsivePanel('animationType');
      }
   }

   autoClose(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('autoClose', arg);
      } else {
          return this.host.jqxResponsivePanel('autoClose');
      }
   }

   collapseBreakpoint(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('collapseBreakpoint', arg);
      } else {
          return this.host.jqxResponsivePanel('collapseBreakpoint');
      }
   }

   collapseWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('collapseWidth', arg);
      } else {
          return this.host.jqxResponsivePanel('collapseWidth');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('height', arg);
      } else {
          return this.host.jqxResponsivePanel('height');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('initContent', arg);
      } else {
          return this.host.jqxResponsivePanel('initContent');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('theme', arg);
      } else {
          return this.host.jqxResponsivePanel('theme');
      }
   }

   toggleButton(arg?: String | any) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('toggleButton', arg);
      } else {
          return this.host.jqxResponsivePanel('toggleButton');
      }
   }

   toggleButtonSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('toggleButtonSize', arg);
      } else {
          return this.host.jqxResponsivePanel('toggleButtonSize');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('width', arg);
      } else {
          return this.host.jqxResponsivePanel('width');
      }
   }


   // jqxResponsivePanelComponent functions
   close(): void {
      this.host.jqxResponsivePanel('close');

   }
   destroy(): void {
      this.host.jqxResponsivePanel('destroy');

   }
   isCollapsed(): boolean {
      return this.host.jqxResponsivePanel('isCollapsed');

   }
   isOpened(): boolean {
      return this.host.jqxResponsivePanel('isOpened');

   }
   open(): void {
      this.host.jqxResponsivePanel('open');

   }
   refresh(): void {
      this.host.jqxResponsivePanel('refresh');

   }
   render(): void {
      this.host.jqxResponsivePanel('render');

   }

   // jqxResponsivePanelComponent events
   @Output() OnClose = new EventEmitter();
   @Output() OnCollapse = new EventEmitter();
   @Output() OnExpand = new EventEmitter();
   @Output() OnOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('collapse', (eventData) => { this.OnCollapse.emit(eventData); });
      this.host.on('expand', (eventData) => { this.OnExpand.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
   }

} //jqxResponsivePanelComponent
