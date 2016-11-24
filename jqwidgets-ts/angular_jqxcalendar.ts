/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCalendarComponent),
    multi: true
}

@Component({
    selector: 'angularCalendar',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxCalendarComponent implements ControlValueAccessor, OnChanges 
{
   @Input('backText') attrBackText;
   @Input('columnHeaderHeight') attrColumnHeaderHeight;
   @Input('clearString') attrClearString;
   @Input('culture') attrCulture;
   @Input('dayNameFormat') attrDayNameFormat;
   @Input('disabled') attrDisabled;
   @Input('enableWeekend') attrEnableWeekend;
   @Input('enableViews') attrEnableViews;
   @Input('enableOtherMonthDays') attrEnableOtherMonthDays;
   @Input('enableFastNavigation') attrEnableFastNavigation;
   @Input('enableHover') attrEnableHover;
   @Input('enableAutoNavigation') attrEnableAutoNavigation;
   @Input('enableTooltips') attrEnableTooltips;
   @Input('forwardText') attrForwardText;
   @Input('firstDayOfWeek') attrFirstDayOfWeek;
   @Input('min') attrMin;
   @Input('max') attrMax;
   @Input('navigationDelay') attrNavigationDelay;
   @Input('rowHeaderWidth') attrRowHeaderWidth;
   @Input('readOnly') attrReadOnly;
   @Input('restrictedDates') attrRestrictedDates;
   @Input('rtl') attrRtl;
   @Input('stepMonths') attrStepMonths;
   @Input('showWeekNumbers') attrShowWeekNumbers;
   @Input('showDayNames') attrShowDayNames;
   @Input('showOtherMonthDays') attrShowOtherMonthDays;
   @Input('showFooter') attrShowFooter;
   @Input('selectionMode') attrSelectionMode;
   @Input('specialDates') attrSpecialDates;
   @Input('theme') attrTheme;
   @Input('titleHeight') attrTitleHeight;
   @Input('titleFormat') attrTitleFormat;
   @Input('todayString') attrTodayString;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['backText','columnHeaderHeight','clearString','culture','dayNameFormat','disabled','enableWeekend','enableViews','enableOtherMonthDays','enableFastNavigation','enableHover','enableAutoNavigation','enableTooltips','forwardText','firstDayOfWeek','height','min','max','navigationDelay','rowHeaderWidth','readOnly','restrictedDates','rtl','stepMonths','showWeekNumbers','showDayNames','showOtherMonthDays','showFooter','selectionMode','specialDates','theme','titleHeight','titleFormat','todayString','value','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxCalendar;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxCalendar(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxCalendar(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxCalendar(this.properties[i])) {
                  this.host.jqxCalendar(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCalendar', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxCalendar('setOptions', options);
   }

   // jqxCalendarComponent properties
   backText(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('backText', arg);
      } else {
          return this.host.jqxCalendar('backText');
      }
   }

   columnHeaderHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('columnHeaderHeight', arg);
      } else {
          return this.host.jqxCalendar('columnHeaderHeight');
      }
   }

   clearString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('clearString', arg);
      } else {
          return this.host.jqxCalendar('clearString');
      }
   }

   culture(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('culture', arg);
      } else {
          return this.host.jqxCalendar('culture');
      }
   }

   dayNameFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('dayNameFormat', arg);
      } else {
          return this.host.jqxCalendar('dayNameFormat');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('disabled', arg);
      } else {
          return this.host.jqxCalendar('disabled');
      }
   }

   enableWeekend(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableWeekend', arg);
      } else {
          return this.host.jqxCalendar('enableWeekend');
      }
   }

   enableViews(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableViews', arg);
      } else {
          return this.host.jqxCalendar('enableViews');
      }
   }

   enableOtherMonthDays(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableOtherMonthDays', arg);
      } else {
          return this.host.jqxCalendar('enableOtherMonthDays');
      }
   }

   enableFastNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableFastNavigation', arg);
      } else {
          return this.host.jqxCalendar('enableFastNavigation');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableHover', arg);
      } else {
          return this.host.jqxCalendar('enableHover');
      }
   }

   enableAutoNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableAutoNavigation', arg);
      } else {
          return this.host.jqxCalendar('enableAutoNavigation');
      }
   }

   enableTooltips(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('enableTooltips', arg);
      } else {
          return this.host.jqxCalendar('enableTooltips');
      }
   }

   forwardText(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('forwardText', arg);
      } else {
          return this.host.jqxCalendar('forwardText');
      }
   }

   firstDayOfWeek(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('firstDayOfWeek', arg);
      } else {
          return this.host.jqxCalendar('firstDayOfWeek');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('height', arg);
      } else {
          return this.host.jqxCalendar('height');
      }
   }

   min(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('min', arg);
      } else {
          return this.host.jqxCalendar('min');
      }
   }

   max(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('max', arg);
      } else {
          return this.host.jqxCalendar('max');
      }
   }

   navigationDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('navigationDelay', arg);
      } else {
          return this.host.jqxCalendar('navigationDelay');
      }
   }

   rowHeaderWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('rowHeaderWidth', arg);
      } else {
          return this.host.jqxCalendar('rowHeaderWidth');
      }
   }

   readOnly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('readOnly', arg);
      } else {
          return this.host.jqxCalendar('readOnly');
      }
   }

   restrictedDates(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('restrictedDates', arg);
      } else {
          return this.host.jqxCalendar('restrictedDates');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('rtl', arg);
      } else {
          return this.host.jqxCalendar('rtl');
      }
   }

   stepMonths(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('stepMonths', arg);
      } else {
          return this.host.jqxCalendar('stepMonths');
      }
   }

   showWeekNumbers(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('showWeekNumbers', arg);
      } else {
          return this.host.jqxCalendar('showWeekNumbers');
      }
   }

   showDayNames(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('showDayNames', arg);
      } else {
          return this.host.jqxCalendar('showDayNames');
      }
   }

   showOtherMonthDays(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('showOtherMonthDays', arg);
      } else {
          return this.host.jqxCalendar('showOtherMonthDays');
      }
   }

   showFooter(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('showFooter', arg);
      } else {
          return this.host.jqxCalendar('showFooter');
      }
   }

   selectionMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('selectionMode', arg);
      } else {
          return this.host.jqxCalendar('selectionMode');
      }
   }

   specialDates(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('specialDates', arg);
      } else {
          return this.host.jqxCalendar('specialDates');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('theme', arg);
      } else {
          return this.host.jqxCalendar('theme');
      }
   }

   titleHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('titleHeight', arg);
      } else {
          return this.host.jqxCalendar('titleHeight');
      }
   }

   titleFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('titleFormat', arg);
      } else {
          return this.host.jqxCalendar('titleFormat');
      }
   }

   todayString(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('todayString', arg);
      } else {
          return this.host.jqxCalendar('todayString');
      }
   }

   value(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('value', arg);
      } else {
          return this.host.jqxCalendar('value');
      }
   }

   width(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCalendar('width', arg);
      } else {
          return this.host.jqxCalendar('width');
      }
   }


   // jqxCalendarComponent functions
   clear(): void {
      this.host.jqxCalendar('clear');
   }
   destroy(): void {
      this.host.jqxCalendar('destroy');
   }
   focus(): void {
      this.host.jqxCalendar('focus');
   }
   addSpecialDate(date: any, tooltip: any, text: any): void {
      this.host.jqxCalendar('addSpecialDate', date, tooltip, text);
   }
   getMinDate(): any {
      return this.host.jqxCalendar('getMinDate');
   }
   getMaxDate(): any {
      return this.host.jqxCalendar('getMaxDate');
   }
   getDate(): any {
      return this.host.jqxCalendar('getDate');
   }
   getRange(): any {
      return this.host.jqxCalendar('getRange');
   }
   navigateForward(months: number): void {
      this.host.jqxCalendar('navigateForward', months);
   }
   navigateBackward(months: number): void {
      this.host.jqxCalendar('navigateBackward', months);
   }
   render(): void {
      this.host.jqxCalendar('render');
   }
   refresh(): void {
      this.host.jqxCalendar('refresh');
   }
   setMinDate(date: any): void {
      this.host.jqxCalendar('setMinDate', date);
   }
   setMaxDate(date: any): void {
      this.host.jqxCalendar('setMaxDate', date);
   }
   setDate(date: any): void {
      this.host.jqxCalendar('setDate', date);
   }
   setRange(date: any, date2: any): void {
      this.host.jqxCalendar('setRange', date, date2);
   }
   today(): void {
      this.host.jqxCalendar('today');
   }
   val(date: any, date2: any): any {
      return this.host.jqxCalendar('val', date, date2);
   }

   // jqxCalendarComponent events
   @Output() onBackButtonClick = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onNextButtonClick = new EventEmitter();
   @Output() onViewChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('backButtonClick', (eventData) => { this.onBackButtonClick.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('nextButtonClick', (eventData) => { this.onNextButtonClick.emit(eventData); });
      this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
   }

} //jqxCalendarComponent
