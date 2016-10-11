/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularValidator',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxValidatorComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxValidator;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxValidator('setOptions', options);
   }

   // jqxValidatorComponent properties
   arrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('arrow', arg);
      } else {
          return this.host.jqxValidator('arrow');
      }
   }

   animation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('animation', arg);
      } else {
          return this.host.jqxValidator('animation');
      }
   }

   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('animationDuration', arg);
      } else {
          return this.host.jqxValidator('animationDuration');
      }
   }

   closeOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('closeOnClick', arg);
      } else {
          return this.host.jqxValidator('closeOnClick');
      }
   }

   focus(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('focus', arg);
      } else {
          return this.host.jqxValidator('focus');
      }
   }

   hintType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('hintType', arg);
      } else {
          return this.host.jqxValidator('hintType');
      }
   }

   onError(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('onError', arg);
      } else {
          return this.host.jqxValidator('onError');
      }
   }

   onSuccess(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('onSuccess', arg);
      } else {
          return this.host.jqxValidator('onSuccess');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('position', arg);
      } else {
          return this.host.jqxValidator('position');
      }
   }

   rules(arg?: Array<jqwidgets.ValidatorRule>) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('rules', arg);
      } else {
          return this.host.jqxValidator('rules');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxValidator('rtl', arg);
      } else {
          return this.host.jqxValidator('rtl');
      }
   }


   // jqxValidatorComponent functions
   hideHint(id: string): void {
      this.host.jqxValidator('hideHint', id);

   }
   hide(): void {
      this.host.jqxValidator('hide');

   }
   updatePosition(): void {
      this.host.jqxValidator('updatePosition');

   }
   validate(htmlElement: any): void {
      this.host.jqxValidator('validate', htmlElement);

   }
   validateInput(id: string): void {
      this.host.jqxValidator('validateInput', id);

   }

   // jqxValidatorComponent events
   @Output() OnValidationError = new EventEmitter();
   @Output() OnValidationSuccess = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('validationError', (eventData) => { this.OnValidationError.emit(eventData); });
      this.host.on('validationSuccess', (eventData) => { this.OnValidationSuccess.emit(eventData); });
   }

} //jqxValidatorComponent
