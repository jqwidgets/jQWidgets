/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDockPanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDockPanelComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxDockPanel;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockPanel', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDockPanel('setOptions', options);
   }

   // jqxDockPanelComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDockPanel('disabled', arg);
      } else {
          return this.host.jqxDockPanel('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockPanel('height', arg);
      } else {
          return this.host.jqxDockPanel('height');
      }
   }

   lastchildfill(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDockPanel('lastchildfill', arg);
      } else {
          return this.host.jqxDockPanel('lastchildfill');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDockPanel('width', arg);
      } else {
          return this.host.jqxDockPanel('width');
      }
   }


   // jqxDockPanelComponent functions
   refresh(): void {
      this.host.jqxDockPanel('refresh');

   }

   // jqxDockPanelComponent events
   @Output() OnLayout = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('layout', (eventData) => { this.OnLayout.emit(eventData); });
   }

} //jqxDockPanelComponent
