/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularButtonGroup',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxButtonGroupComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxButtonGroup;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.host[0].style.marginLeft = '1px';
         this.__wireEvents__();
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxButtonGroup('setOptions', options);
   }

   // jqxButtonGroupComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('disabled', arg);
      } else {
          return this.host.jqxButtonGroup('disabled');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('enableHover', arg);
      } else {
          return this.host.jqxButtonGroup('enableHover');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('mode', arg);
      } else {
          return this.host.jqxButtonGroup('mode');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('rtl', arg);
      } else {
          return this.host.jqxButtonGroup('rtl');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('template', arg);
      } else {
          return this.host.jqxButtonGroup('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('theme', arg);
      } else {
          return this.host.jqxButtonGroup('theme');
      }
   }


   // jqxButtonGroupComponent functions
   disableAt(index: number): void {
      this.host.jqxButtonGroup('disableAt', index);

   }
   disable(): void {
      this.host.jqxButtonGroup('disable');

   }
   destroy(): void {
      this.host.jqxButtonGroup('destroy');

   }
   enable(): void {
      this.host.jqxButtonGroup('enable');

   }
   enableAt(index: number): void {
      this.host.jqxButtonGroup('enableAt', index);

   }
   focus(): void {
      this.host.jqxButtonGroup('focus');

   }
   getSelection(): any {
      return this.host.jqxButtonGroup('getSelection');

   }
   render(): void {
      this.host.jqxButtonGroup('render');

   }
   setSelection(index: number): void {
      this.host.jqxButtonGroup('setSelection', index);

   }

   // jqxButtonGroupComponent events
   @Output() OnButtonclick = new EventEmitter();
   @Output() OnSelected = new EventEmitter();
   @Output() OnUnselected = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('buttonclick', (eventData) => { this.OnButtonclick.emit(eventData); });
      this.host.on('selected', (eventData) => { this.OnSelected.emit(eventData); });
      this.host.on('unselected', (eventData) => { this.OnUnselected.emit(eventData); });
   }

} //jqxButtonGroupComponent
