/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCheckBoxComponent),
    multi: true
}

@Component({
    selector: 'angularCheckBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxCheckBoxComponent implements ControlValueAccessor, OnChanges 
{
   @Input('animationShowDelay') attrAnimationShowDelay;
   @Input('animationHideDelay') attrAnimationHideDelay;
   @Input('boxSize') attrBoxSize;
   @Input('checked') attrChecked;
   @Input('disabled') attrDisabled;
   @Input('enableContainerClick') attrEnableContainerClick;
   @Input('groupName') attrGroupName;
   @Input('hasThreeStates') attrHasThreeStates;
   @Input('locked') attrLocked;
   @Input('rtl') attrRtl;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxCheckBox;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnChanges(changes) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxCheckBox(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                  this.host.jqxCheckBox(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
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
   createWidget(options?: any): void {
      if (options) {
         $.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = $(this.elementRef.nativeElement.firstChild);
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
      this.__updateRect__();
      options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxCheckBox('setOptions', options);
   }

   // jqxCheckBoxComponent properties
   animationShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('animationShowDelay', arg);
      } else {
          return this.host.jqxCheckBox('animationShowDelay');
      }
   }

   animationHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('animationHideDelay', arg);
      } else {
          return this.host.jqxCheckBox('animationHideDelay');
      }
   }

   boxSize(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('boxSize', arg);
      } else {
          return this.host.jqxCheckBox('boxSize');
      }
   }

   checked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('checked', arg);
      } else {
          return this.host.jqxCheckBox('checked');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('disabled', arg);
      } else {
          return this.host.jqxCheckBox('disabled');
      }
   }

   enableContainerClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('enableContainerClick', arg);
      } else {
          return this.host.jqxCheckBox('enableContainerClick');
      }
   }

   groupName(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('groupName', arg);
      } else {
          return this.host.jqxCheckBox('groupName');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('height', arg);
      } else {
          return this.host.jqxCheckBox('height');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('hasThreeStates', arg);
      } else {
          return this.host.jqxCheckBox('hasThreeStates');
      }
   }

   locked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('locked', arg);
      } else {
          return this.host.jqxCheckBox('locked');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('rtl', arg);
      } else {
          return this.host.jqxCheckBox('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('theme', arg);
      } else {
          return this.host.jqxCheckBox('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('width', arg);
      } else {
          return this.host.jqxCheckBox('width');
      }
   }


   // jqxCheckBoxComponent functions
   check(): void {
      this.host.jqxCheckBox('check');
   }
   disable(): void {
      this.host.jqxCheckBox('disable');
   }
   destroy(): void {
      this.host.jqxCheckBox('destroy');
   }
   enable(): void {
      this.host.jqxCheckBox('enable');
   }
   focus(): void {
      this.host.jqxCheckBox('focus');
   }
   indeterminate(): void {
      this.host.jqxCheckBox('indeterminate');
   }
   render(): void {
      this.host.jqxCheckBox('render');
   }
   toggle(): void {
      this.host.jqxCheckBox('toggle');
   }
   uncheck(): void {
      this.host.jqxCheckBox('uncheck');
   }
   val(value: boolean): boolean {
      return this.host.jqxCheckBox('val', value);
   }

   // jqxCheckBoxComponent events
   @Output() onChecked = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onIndeterminate = new EventEmitter();
   @Output() onUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(eventData.args.checked); });
      this.host.on('indeterminate', (eventData) => { this.onIndeterminate.emit(eventData); });
      this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
   }

} //jqxCheckBoxComponent
