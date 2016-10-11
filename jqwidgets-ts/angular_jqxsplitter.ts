/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularSplitter',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSplitterComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxSplitter;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxSplitter('setOptions', options);
   }

   // jqxSplitterComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('disabled', arg);
      } else {
          return this.host.jqxSplitter('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('height', arg);
      } else {
          return this.host.jqxSplitter('height');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('orientation', arg);
      } else {
          return this.host.jqxSplitter('orientation');
      }
   }

   panels(arg?: Array<jqwidgets.SplitterPanel>) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('panels', arg);
      } else {
          return this.host.jqxSplitter('panels');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('resizable', arg);
      } else {
          return this.host.jqxSplitter('resizable');
      }
   }

   splitBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('splitBarSize', arg);
      } else {
          return this.host.jqxSplitter('splitBarSize');
      }
   }

   showSplitBar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('showSplitBar', arg);
      } else {
          return this.host.jqxSplitter('showSplitBar');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('theme', arg);
      } else {
          return this.host.jqxSplitter('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('width', arg);
      } else {
          return this.host.jqxSplitter('width');
      }
   }


   // jqxSplitterComponent functions
   collapse(): void {
      this.host.jqxSplitter('collapse');

   }
   destroy(): void {
      this.host.jqxSplitter('destroy');

   }
   disable(): void {
      this.host.jqxSplitter('disable');

   }
   enable(): void {
      this.host.jqxSplitter('enable');

   }
   expand(): void {
      this.host.jqxSplitter('expand');

   }
   render(): void {
      this.host.jqxSplitter('render');

   }
   refresh(): void {
      this.host.jqxSplitter('refresh');

   }

   // jqxSplitterComponent events
   @Output() OnCollapsed = new EventEmitter();
   @Output() OnExpanded = new EventEmitter();
   @Output() OnResize = new EventEmitter();
   @Output() OnResizeStart = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsed', (eventData) => { this.OnCollapsed.emit(eventData); });
      this.host.on('expanded', (eventData) => { this.OnExpanded.emit(eventData); });
      this.host.on('resize', (eventData) => { this.OnResize.emit(eventData); });
      this.host.on('resizeStart', (eventData) => { this.OnResizeStart.emit(eventData); });
   }

} //jqxSplitterComponent
