/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxvalidator.js';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxValidator',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxValidatorComponent implements OnChanges
{
   @Input('arrow') attrArrow: boolean;
   @Input('animation') attrAnimation: any;
   @Input('animationDuration') attrAnimationDuration: number;
   @Input('closeOnClick') attrCloseOnClick: boolean;
   @Input('focus') attrFocus: boolean;
   @Input('hintType') attrHintType: any;
   @Input('onError') attrOnError: () => void;
   @Input('onSuccess') attrOnSuccess: () => void;
   @Input('position') attrPosition: string;
   @Input('rules') attrRules: Array<jqwidgets.ValidatorRule>;
   @Input('rtl') attrRtl: boolean;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','onError','onSuccess','position','rules','rtl'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxValidator;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxValidator(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxValidator(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxValidator(this.properties[i])) {
                  this.host.jqxValidator(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
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

   validate(htmlElement?: any): void {
      this.host.jqxValidator('validate', htmlElement);
   }

   validateInput(id: string): void {
      this.host.jqxValidator('validateInput', id);
   }


   // jqxValidatorComponent events
   @Output() onValidationError = new EventEmitter();
   @Output() onValidationSuccess = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('validationError', (eventData: any) => { this.onValidationError.emit(eventData); });
      this.host.on('validationSuccess', (eventData: any) => { this.onValidationSuccess.emit(eventData); });
   }

} //jqxValidatorComponent


