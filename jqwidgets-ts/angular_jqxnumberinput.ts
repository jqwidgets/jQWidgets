/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxNumberInputComponent),
    multi: true
}

@Component({
    selector: 'angularNumberInput',
    template: '<input>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxNumberInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('allowNull') attrAllowNull;
   @Input('decimal') attrDecimal;
   @Input('disabled') attrDisabled;
   @Input('decimalDigits') attrDecimalDigits;
   @Input('decimalSeparator') attrDecimalSeparator;
   @Input('digits') attrDigits;
   @Input('groupSeparator') attrGroupSeparator;
   @Input('groupSize') attrGroupSize;
   @Input('inputMode') attrInputMode;
   @Input('min') attrMin;
   @Input('max') attrMax;
   @Input('negativeSymbol') attrNegativeSymbol;
   @Input('placeHolder') attrPlaceHolder;
   @Input('promptChar') attrPromptChar;
   @Input('rtl') attrRtl;
   @Input('readOnly') attrReadOnly;
   @Input('spinMode') attrSpinMode;
   @Input('spinButtons') attrSpinButtons;
   @Input('spinButtonsWidth') attrSpinButtonsWidth;
   @Input('spinButtonsStep') attrSpinButtonsStep;
   @Input('symbol') attrSymbol;
   @Input('symbolPosition') attrSymbolPosition;
   @Input('textAlign') attrTextAlign;
   @Input('template') attrTemplate;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['allowNull','decimal','disabled','decimalDigits','decimalSeparator','digits','groupSeparator','groupSize','height','inputMode','min','max','negativeSymbol','placeHolder','promptChar','rtl','readOnly','spinMode','spinButtons','spinButtonsWidth','spinButtonsStep','symbol','symbolPosition','textAlign','template','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxNumberInput;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxNumberInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                  this.host.jqxNumberInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
      this.host = this.widgetObject['host'];
      this.__wireEvents__();
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.host.jqxNumberInput('val', value);
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxNumberInput('setOptions', options);
   }

   // jqxNumberInputComponent properties
   allowNull(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('allowNull', arg);
      } else {
          return this.host.jqxNumberInput('allowNull');
      }
   }

   decimal(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimal', arg);
      } else {
          return this.host.jqxNumberInput('decimal');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('disabled', arg);
      } else {
          return this.host.jqxNumberInput('disabled');
      }
   }

   decimalDigits(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimalDigits', arg);
      } else {
          return this.host.jqxNumberInput('decimalDigits');
      }
   }

   decimalSeparator(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimalSeparator', arg);
      } else {
          return this.host.jqxNumberInput('decimalSeparator');
      }
   }

   digits(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('digits', arg);
      } else {
          return this.host.jqxNumberInput('digits');
      }
   }

   groupSeparator(arg?: String) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('groupSeparator', arg);
      } else {
          return this.host.jqxNumberInput('groupSeparator');
      }
   }

   groupSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('groupSize', arg);
      } else {
          return this.host.jqxNumberInput('groupSize');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('height', arg);
      } else {
          return this.host.jqxNumberInput('height');
      }
   }

   inputMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('inputMode', arg);
      } else {
          return this.host.jqxNumberInput('inputMode');
      }
   }

   min(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('min', arg);
      } else {
          return this.host.jqxNumberInput('min');
      }
   }

   max(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('max', arg);
      } else {
          return this.host.jqxNumberInput('max');
      }
   }

   negativeSymbol(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('negativeSymbol', arg);
      } else {
          return this.host.jqxNumberInput('negativeSymbol');
      }
   }

   placeHolder(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('placeHolder', arg);
      } else {
          return this.host.jqxNumberInput('placeHolder');
      }
   }

   promptChar(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('promptChar', arg);
      } else {
          return this.host.jqxNumberInput('promptChar');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('rtl', arg);
      } else {
          return this.host.jqxNumberInput('rtl');
      }
   }

   readOnly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('readOnly', arg);
      } else {
          return this.host.jqxNumberInput('readOnly');
      }
   }

   spinMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinMode', arg);
      } else {
          return this.host.jqxNumberInput('spinMode');
      }
   }

   spinButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtons', arg);
      } else {
          return this.host.jqxNumberInput('spinButtons');
      }
   }

   spinButtonsWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtonsWidth', arg);
      } else {
          return this.host.jqxNumberInput('spinButtonsWidth');
      }
   }

   spinButtonsStep(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtonsStep', arg);
      } else {
          return this.host.jqxNumberInput('spinButtonsStep');
      }
   }

   symbol(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('symbol', arg);
      } else {
          return this.host.jqxNumberInput('symbol');
      }
   }

   symbolPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('symbolPosition', arg);
      } else {
          return this.host.jqxNumberInput('symbolPosition');
      }
   }

   textAlign(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('textAlign', arg);
      } else {
          return this.host.jqxNumberInput('textAlign');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('template', arg);
      } else {
          return this.host.jqxNumberInput('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('theme', arg);
      } else {
          return this.host.jqxNumberInput('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('width', arg);
      } else {
          return this.host.jqxNumberInput('width');
      }
   }


   // jqxNumberInputComponent functions
   clear(): void {
      this.host.jqxNumberInput('clear');
   }
   destroy(): void {
      this.host.jqxNumberInput('destroy');
   }
   focus(): void {
      this.host.jqxNumberInput('focus');
   }
   getDecimal(): number {
      return this.host.jqxNumberInput('getDecimal');
   }
   setDecimal(index: String | Number): void {
      this.host.jqxNumberInput('setDecimal', index);
   }
   val(value: String | Number): number {
      return this.host.jqxNumberInput('val', value);
   }

   // jqxNumberInputComponent events
   @Output() onChange = new EventEmitter();
   @Output() onTextchanged = new EventEmitter();
   @Output() onValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.text); });
      this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.text); });
      this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.text); });
   }

} //jqxNumberInputComponent
