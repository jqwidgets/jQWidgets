/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDateTimeInputComponent),
    multi: true
}

@Component({
    selector: 'angularDateTimeInput',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxDateTimeInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxDateTimeInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxDateTimeInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxDateTimeInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxDateTimeInput('val', value)
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
   @Output() OnChange = new EventEmitter();
   @Output() OnClose = new EventEmitter();
   @Output() OnOpen = new EventEmitter();
   @Output() OnTextchanged = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
      this.host.on('textchanged', (eventData) => { this.OnTextchanged.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxDateTimeInputComponent
