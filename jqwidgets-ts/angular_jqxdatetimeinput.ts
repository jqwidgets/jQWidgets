/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDateTimeInputComponent),
    multi: true
}

@Component({
    selector: 'angularDateTimeInput',
    template: '<input [(ngModel)]="ngValue">',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxDateTimeInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('animationType') attrAnimationType;
   @Input('allowNullDate') attrAllowNullDate;
   @Input('allowKeyboardDelete') attrAllowKeyboardDelete;
   @Input('clearString') attrClearString;
   @Input('culture') attrCulture;
   @Input('closeDelay') attrCloseDelay;
   @Input('closeCalendarAfterSelection') attrCloseCalendarAfterSelection;
   @Input('dropDownHorizontalAlignment') attrDropDownHorizontalAlignment;
   @Input('dropDownVerticalAlignment') attrDropDownVerticalAlignment;
   @Input('disabled') attrDisabled;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection;
   @Input('enableAbsoluteSelection') attrEnableAbsoluteSelection;
   @Input('firstDayOfWeek') attrFirstDayOfWeek;
   @Input('formatString') attrFormatString;
   @Input('min') attrMin;
   @Input('max') attrMax;
   @Input('openDelay') attrOpenDelay;
   @Input('placeHolder') attrPlaceHolder;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('rtl') attrRtl;
   @Input('readonly') attrReadonly;
   @Input('showFooter') attrShowFooter;
   @Input('selectionMode') attrSelectionMode;
   @Input('showWeekNumbers') attrShowWeekNumbers;
   @Input('showTimeButton') attrShowTimeButton;
   @Input('showCalendarButton') attrShowCalendarButton;
   @Input('theme') attrTheme;
   @Input('template') attrTemplate;
   @Input('textAlign') attrTextAlign;
   @Input('todayString') attrTodayString;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationType','allowNullDate','allowKeyboardDelete','clearString','culture','closeDelay','closeCalendarAfterSelection','dropDownHorizontalAlignment','dropDownVerticalAlignment','disabled','enableBrowserBoundsDetection','enableAbsoluteSelection','firstDayOfWeek','formatString','height','min','max','openDelay','placeHolder','popupZIndex','rtl','readonly','showFooter','selectionMode','showWeekNumbers','showTimeButton','showCalendarButton','theme','template','textAlign','todayString','value','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDateTimeInput;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDateTimeInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDateTimeInput(this.properties[i])) {
                  this.host.jqxDateTimeInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
      this.host = this.widgetObject['host'];
      this.__wireEvents__();
      this.__updateRect__();
      setTimeout(() => {
         options.value !== undefined ? this.host.jqxDateTimeInput('val', options.value) : this.host.jqxDateTimeInput('val', new Date());
      , 1);
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.val();
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.onChangeCallback(value);
       }
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.host.jqxDateTimeInput('val', value);
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxDateTimeInput('setOptions', options);
   }

   // jqxDateTimeInputComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('animationType', arg);
      } else {
          return this.host.jqxDateTimeInput('animationType');
      }
   }

   allowNullDate(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('allowNullDate', arg);
      } else {
          return this.host.jqxDateTimeInput('allowNullDate');
      }
   }

   allowKeyboardDelete(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
      } else {
          return this.host.jqxDateTimeInput('allowKeyboardDelete');
      }
   }

   clearString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('clearString', arg);
      } else {
          return this.host.jqxDateTimeInput('clearString');
      }
   }

   culture(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('culture', arg);
      } else {
          return this.host.jqxDateTimeInput('culture');
      }
   }

   closeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('closeDelay', arg);
      } else {
          return this.host.jqxDateTimeInput('closeDelay');
      }
   }

   closeCalendarAfterSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
      } else {
          return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
      }
   }

   dropDownHorizontalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
      }
   }

   dropDownVerticalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
      } else {
          return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('disabled', arg);
      } else {
          return this.host.jqxDateTimeInput('disabled');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
      }
   }

   enableAbsoluteSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
      } else {
          return this.host.jqxDateTimeInput('enableAbsoluteSelection');
      }
   }

   firstDayOfWeek(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('firstDayOfWeek', arg);
      } else {
          return this.host.jqxDateTimeInput('firstDayOfWeek');
      }
   }

   formatString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('formatString', arg);
      } else {
          return this.host.jqxDateTimeInput('formatString');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('height', arg);
      } else {
          return this.host.jqxDateTimeInput('height');
      }
   }

   min(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('min', arg);
      } else {
          return this.host.jqxDateTimeInput('min');
      }
   }

   max(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('max', arg);
      } else {
          return this.host.jqxDateTimeInput('max');
      }
   }

   openDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('openDelay', arg);
      } else {
          return this.host.jqxDateTimeInput('openDelay');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('placeHolder', arg);
      } else {
          return this.host.jqxDateTimeInput('placeHolder');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('popupZIndex', arg);
      } else {
          return this.host.jqxDateTimeInput('popupZIndex');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('rtl', arg);
      } else {
          return this.host.jqxDateTimeInput('rtl');
      }
   }

   readonly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('readonly', arg);
      } else {
          return this.host.jqxDateTimeInput('readonly');
      }
   }

   showFooter(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('showFooter', arg);
      } else {
          return this.host.jqxDateTimeInput('showFooter');
      }
   }

   selectionMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('selectionMode', arg);
      } else {
          return this.host.jqxDateTimeInput('selectionMode');
      }
   }

   showWeekNumbers(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('showWeekNumbers', arg);
      } else {
          return this.host.jqxDateTimeInput('showWeekNumbers');
      }
   }

   showTimeButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('showTimeButton', arg);
      } else {
          return this.host.jqxDateTimeInput('showTimeButton');
      }
   }

   showCalendarButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('showCalendarButton', arg);
      } else {
          return this.host.jqxDateTimeInput('showCalendarButton');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('theme', arg);
      } else {
          return this.host.jqxDateTimeInput('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('template', arg);
      } else {
          return this.host.jqxDateTimeInput('template');
      }
   }

   textAlign(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('textAlign', arg);
      } else {
          return this.host.jqxDateTimeInput('textAlign');
      }
   }

   todayString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('todayString', arg);
      } else {
          return this.host.jqxDateTimeInput('todayString');
      }
   }

   value(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('value', arg);
      } else {
          return this.host.jqxDateTimeInput('value');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDateTimeInput('width', arg);
      } else {
          return this.host.jqxDateTimeInput('width');
      }
   }


   // jqxDateTimeInputComponent functions
   close(): void {
      this.host.jqxDateTimeInput('close');
   }
   destroy(): void {
      this.host.jqxDateTimeInput('destroy');
   }
   focus(): void {
      this.host.jqxDateTimeInput('focus');
   }
   getRange(date: any): any {
      return this.host.jqxDateTimeInput('getRange', date);
   }
   getText(): string {
      return this.host.jqxDateTimeInput('getText');
   }
   getDate(): any {
      return this.host.jqxDateTimeInput('getDate');
   }
   getMaxDate(): any {
      return this.host.jqxDateTimeInput('getMaxDate');
   }
   getMinDate(): any {
      return this.host.jqxDateTimeInput('getMinDate');
   }
   open(): void {
      this.host.jqxDateTimeInput('open');
   }
   setRange(date: any, date2: any): void {
      this.host.jqxDateTimeInput('setRange', date, date2);
   }
   setMinDate(date: any): void {
      this.host.jqxDateTimeInput('setMinDate', date);
   }
   setMaxDate(date: any): void {
      this.host.jqxDateTimeInput('setMaxDate', date);
   }
   setDate(date: any): void {
      this.host.jqxDateTimeInput('setDate', date);
   }
   val(date: any, date2: any): any {
      return this.host.jqxDateTimeInput('val', date, date2);
   }

   // jqxDateTimeInputComponent events
   @Output() onChange = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onTextchanged = new EventEmitter();
   @Output() onValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
      this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
   }

} //jqxDateTimeInputComponent
