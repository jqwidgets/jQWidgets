/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularLinearGauge',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLinearGaugeComponent implements OnChanges
{
   @Input('animationDuration') attrAnimationDuration;
   @Input('background') attrBackground;
   @Input('colorScheme') attrColorScheme;
   @Input('disabled') attrDisabled;
   @Input('easing') attrEasing;
   @Input('int64') attrInt64;
   @Input('labels') attrLabels;
   @Input('min') attrMin;
   @Input('max') attrMax;
   @Input('orientation') attrOrientation;
   @Input('pointer') attrPointer;
   @Input('rangesOffset') attrRangesOffset;
   @Input('rangeSize') attrRangeSize;
   @Input('ranges') attrRanges;
   @Input('showRanges') attrShowRanges;
   @Input('scaleStyle') attrScaleStyle;
   @Input('scaleLength') attrScaleLength;
   @Input('ticksOffset') attrTicksOffset;
   @Input('ticksPosition') attrTicksPosition;
   @Input('ticksMinor') attrTicksMinor;
   @Input('ticksMajor') attrTicksMajor;
   @Input('value') attrValue;
   @Input('disable') attrDisable;
   @Input('enable') attrEnable;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationDuration','background','colorScheme','disabled','easing','height','int64','labels','min','max','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','scaleStyle','scaleLength','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width','disable','enable'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxLinearGauge;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxLinearGauge(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxLinearGauge(this.properties[i])) {
                  this.host.jqxLinearGauge(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxLinearGauge('setOptions', options);
   }

   // jqxLinearGaugeComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('animationDuration', arg);
      } else {
          return this.host.jqxLinearGauge('animationDuration');
      }
   }

   background(arg?: jqwidgets.LinearGaugeBackground) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('background', arg);
      } else {
          return this.host.jqxLinearGauge('background');
      }
   }

   colorScheme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('colorScheme', arg);
      } else {
          return this.host.jqxLinearGauge('colorScheme');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('disabled', arg);
      } else {
          return this.host.jqxLinearGauge('disabled');
      }
   }

   easing(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('easing', arg);
      } else {
          return this.host.jqxLinearGauge('easing');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('height', arg);
      } else {
          return this.host.jqxLinearGauge('height');
      }
   }

   int64(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('int64', arg);
      } else {
          return this.host.jqxLinearGauge('int64');
      }
   }

   labels(arg?: jqwidgets.LinearGaugeLabels) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('labels', arg);
      } else {
          return this.host.jqxLinearGauge('labels');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('min', arg);
      } else {
          return this.host.jqxLinearGauge('min');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('max', arg);
      } else {
          return this.host.jqxLinearGauge('max');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('orientation', arg);
      } else {
          return this.host.jqxLinearGauge('orientation');
      }
   }

   pointer(arg?: jqwidgets.LinearGaugePointer) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('pointer', arg);
      } else {
          return this.host.jqxLinearGauge('pointer');
      }
   }

   rangesOffset(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('rangesOffset', arg);
      } else {
          return this.host.jqxLinearGauge('rangesOffset');
      }
   }

   rangeSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('rangeSize', arg);
      } else {
          return this.host.jqxLinearGauge('rangeSize');
      }
   }

   ranges(arg?: Array<jqwidgets.LinearGaugeRanges>) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ranges', arg);
      } else {
          return this.host.jqxLinearGauge('ranges');
      }
   }

   showRanges(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('showRanges', arg);
      } else {
          return this.host.jqxLinearGauge('showRanges');
      }
   }

   scaleStyle(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('scaleStyle', arg);
      } else {
          return this.host.jqxLinearGauge('scaleStyle');
      }
   }

   scaleLength(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('scaleLength', arg);
      } else {
          return this.host.jqxLinearGauge('scaleLength');
      }
   }

   ticksOffset(arg?: Array<Number | String>) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksOffset', arg);
      } else {
          return this.host.jqxLinearGauge('ticksOffset');
      }
   }

   ticksPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksPosition', arg);
      } else {
          return this.host.jqxLinearGauge('ticksPosition');
      }
   }

   ticksMinor(arg?: jqwidgets.LinearGaugeTicks) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksMinor', arg);
      } else {
          return this.host.jqxLinearGauge('ticksMinor');
      }
   }

   ticksMajor(arg?: jqwidgets.LinearGaugeTicks) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksMajor', arg);
      } else {
          return this.host.jqxLinearGauge('ticksMajor');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('value', arg);
      } else {
          return this.host.jqxLinearGauge('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('width', arg);
      } else {
          return this.host.jqxLinearGauge('width');
      }
   }

   disable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('disable', arg);
      } else {
          return this.host.jqxLinearGauge('disable');
      }
   }

   enable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('enable', arg);
      } else {
          return this.host.jqxLinearGauge('enable');
      }
   }


   // jqxLinearGaugeComponent functions
   val(value: String | Number): number {
      return this.host.jqxLinearGauge('val', value);
   }

   // jqxLinearGaugeComponent events
   @Output() onValueChanging = new EventEmitter();
   @Output() onValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
   }

} //jqxLinearGaugeComponent
