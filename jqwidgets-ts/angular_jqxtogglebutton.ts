/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularToggleButton',
    template: '<button><ng-content></ng-content></button>'
})

export class jqxToggleButtonComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxToggleButton;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
         this.host = this.widgetObject['host'];
         this.__wireEvents__();
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxToggleButton('setOptions', options);
   }

   // jqxToggleButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('delay', arg);
      } else {
          return this.host.jqxToggleButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('disabled', arg);
      } else {
          return this.host.jqxToggleButton('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('height', arg);
      } else {
          return this.host.jqxToggleButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgSrc', arg);
      } else {
          return this.host.jqxToggleButton('imgSrc');
      }
   }

   imgWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgWidth', arg);
      } else {
          return this.host.jqxToggleButton('imgWidth');
      }
   }

   imgHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgHeight', arg);
      } else {
          return this.host.jqxToggleButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgPosition', arg);
      } else {
          return this.host.jqxToggleButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('roundedCorners', arg);
      } else {
          return this.host.jqxToggleButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('rtl', arg);
      } else {
          return this.host.jqxToggleButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('textPosition', arg);
      } else {
          return this.host.jqxToggleButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('textImageRelation', arg);
      } else {
          return this.host.jqxToggleButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('theme', arg);
      } else {
          return this.host.jqxToggleButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('template', arg);
      } else {
          return this.host.jqxToggleButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('toggled', arg);
      } else {
          return this.host.jqxToggleButton('toggled');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('width', arg);
      } else {
          return this.host.jqxToggleButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('value', arg);
      } else {
          return this.host.jqxToggleButton('value');
      }
   }


   // jqxToggleButtonComponent functions
   check(): void {
      this.host.jqxToggleButton('check');

   }
   destroy(): void {
      this.host.jqxToggleButton('destroy');

   }
   focus(): void {
      this.host.jqxToggleButton('focus');

   }
   render(): void {
      this.host.jqxToggleButton('render');

   }
   toggle(): void {
      this.host.jqxToggleButton('toggle');

   }
   unCheck(): void {
      this.host.jqxToggleButton('unCheck');

   }
   val(value: string): string {
      return this.host.jqxToggleButton('val', value);

   }

   // jqxToggleButtonComponent events
   @Output() OnClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData) => { this.OnClick.emit(eventData); });
   }

} //jqxToggleButtonComponent
