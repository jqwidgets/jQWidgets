/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDocking',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDockingComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxDocking;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDocking('setOptions', options);
   }

   // jqxDockingComponent properties
   cookies(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('cookies', arg);
      } else {
          return this.host.jqxDocking('cookies');
      }
   }

   cookieOptions(arg?: jqwidgets.DockingCookieOptions) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('cookieOptions', arg);
      } else {
          return this.host.jqxDocking('cookieOptions');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('disabled', arg);
      } else {
          return this.host.jqxDocking('disabled');
      }
   }

   floatingWindowOpacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('floatingWindowOpacity', arg);
      } else {
          return this.host.jqxDocking('floatingWindowOpacity');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('height', arg);
      } else {
          return this.host.jqxDocking('height');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('keyboardNavigation', arg);
      } else {
          return this.host.jqxDocking('keyboardNavigation');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('mode', arg);
      } else {
          return this.host.jqxDocking('mode');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('orientation', arg);
      } else {
          return this.host.jqxDocking('orientation');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('rtl', arg);
      } else {
          return this.host.jqxDocking('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('theme', arg);
      } else {
          return this.host.jqxDocking('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('width', arg);
      } else {
          return this.host.jqxDocking('width');
      }
   }

   windowsMode(arg?: jqwidgets.DockingWindowsMode) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('windowsMode', arg);
      } else {
          return this.host.jqxDocking('windowsMode');
      }
   }

   windowsOffset(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDocking('windowsOffset', arg);
      } else {
          return this.host.jqxDocking('windowsOffset');
      }
   }


   // jqxDockingComponent functions
   addWindow(windowId: string, mode: any, panel: number, position: any): void {
      this.host.jqxDocking('addWindow', windowId, mode, panel, position);

   }
   closeWindow(windowId: string): void {
      this.host.jqxDocking('closeWindow', windowId);

   }
   collapseWindow(windowId: string): void {
      this.host.jqxDocking('collapseWindow', windowId);

   }
   destroy(): void {
      this.host.jqxDocking('destroy');

   }
   disableWindowResize(windowId: string): void {
      this.host.jqxDocking('disableWindowResize', windowId);

   }
   disable(): void {
      this.host.jqxDocking('disable');

   }
   exportLayout(): string {
      return this.host.jqxDocking('exportLayout');

   }
   enable(): void {
      this.host.jqxDocking('enable');

   }
   expandWindow(windowId: string): void {
      this.host.jqxDocking('expandWindow', windowId);

   }
   enableWindowResize(windowId: string): void {
      this.host.jqxDocking('enableWindowResize', windowId);

   }
   focus(): void {
      this.host.jqxDocking('focus');

   }
   hideAllCloseButtons(): void {
      this.host.jqxDocking('hideAllCloseButtons');

   }
   hideAllCollapseButtons(): void {
      this.host.jqxDocking('hideAllCollapseButtons');

   }
   hideCollapseButton(windowId: string): void {
      this.host.jqxDocking('hideCollapseButton', windowId);

   }
   hideCloseButton(windowId: string): void {
      this.host.jqxDocking('hideCloseButton', windowId);

   }
   importLayout(Json: string): void {
      this.host.jqxDocking('importLayout', Json);

   }
   move(windowId: string, panel: number, position: number): void {
      this.host.jqxDocking('move', windowId, panel, position);

   }
   pinWindow(windowId: string): void {
      this.host.jqxDocking('pinWindow', windowId);

   }
   setWindowMode(windowId: string, mode: any): void {
      this.host.jqxDocking('setWindowMode', windowId, mode);

   }
   showCloseButton(windowId: string): void {
      this.host.jqxDocking('showCloseButton', windowId);

   }
   showCollapseButton(windowId: string): void {
      this.host.jqxDocking('showCollapseButton', windowId);

   }
   setWindowPosition(windowId: string, top: any, left: number): void {
      this.host.jqxDocking('setWindowPosition', windowId, top, left);

   }
   showAllCloseButtons(): void {
      this.host.jqxDocking('showAllCloseButtons');

   }
   showAllCollapseButtons(): void {
      this.host.jqxDocking('showAllCollapseButtons');

   }
   unpinWindow(windowId: string): void {
      this.host.jqxDocking('unpinWindow', windowId);

   }

   // jqxDockingComponent events
   @Output() OnDragStart = new EventEmitter();
   @Output() OnDragEnd = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('dragStart', (eventData) => { this.OnDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.OnDragEnd.emit(eventData); });
   }

} //jqxDockingComponent
