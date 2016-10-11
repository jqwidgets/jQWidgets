/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularScrollBar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxScrollBarComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxScrollBar;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxScrollBar('setOptions', options);
   }

   // jqxScrollBarComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('disabled', arg);
      } else {
          return this.host.jqxScrollBar('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('height', arg);
      } else {
          return this.host.jqxScrollBar('height');
      }
   }

   largestep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('largestep', arg);
      } else {
          return this.host.jqxScrollBar('largestep');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('min', arg);
      } else {
          return this.host.jqxScrollBar('min');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('max', arg);
      } else {
          return this.host.jqxScrollBar('max');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('rtl', arg);
      } else {
          return this.host.jqxScrollBar('rtl');
      }
   }

   step(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('step', arg);
      } else {
          return this.host.jqxScrollBar('step');
      }
   }

   showButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('showButtons', arg);
      } else {
          return this.host.jqxScrollBar('showButtons');
      }
   }

   thumbMinSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('thumbMinSize', arg);
      } else {
          return this.host.jqxScrollBar('thumbMinSize');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('theme', arg);
      } else {
          return this.host.jqxScrollBar('theme');
      }
   }

   vertical(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('vertical', arg);
      } else {
          return this.host.jqxScrollBar('vertical');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('value', arg);
      } else {
          return this.host.jqxScrollBar('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollBar('width', arg);
      } else {
          return this.host.jqxScrollBar('width');
      }
   }


   // jqxScrollBarComponent functions
   destroy(): void {
      this.host.jqxScrollBar('destroy');

   }
   isScrolling(): boolean {
      return this.host.jqxScrollBar('isScrolling');

   }
   setPosition(index: number): void {
      this.host.jqxScrollBar('setPosition', index);

   }

   // jqxScrollBarComponent events
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxScrollBarComponent
