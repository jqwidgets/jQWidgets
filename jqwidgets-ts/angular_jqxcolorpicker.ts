/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularColorPicker',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxColorPickerComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxColorPicker;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxColorPicker('setOptions', options);
   }

   // jqxColorPickerComponent properties
   color(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('color', arg);
      } else {
          return this.host.jqxColorPicker('color');
      }
   }

   colorMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('colorMode', arg);
      } else {
          return this.host.jqxColorPicker('colorMode');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('disabled', arg);
      } else {
          return this.host.jqxColorPicker('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('height', arg);
      } else {
          return this.host.jqxColorPicker('height');
      }
   }

   showTransparent(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('showTransparent', arg);
      } else {
          return this.host.jqxColorPicker('showTransparent');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxColorPicker('width', arg);
      } else {
          return this.host.jqxColorPicker('width');
      }
   }


   // jqxColorPickerComponent functions
   getColor(): Object {
      return this.host.jqxColorPicker('getColor');

   }
   setColor(color: any): void {
      this.host.jqxColorPicker('setColor', color);

   }

   // jqxColorPickerComponent events
   @Output() OnColorchange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('colorchange', (eventData) => { this.OnColorchange.emit(eventData); });
   }

} //jqxColorPickerComponent
