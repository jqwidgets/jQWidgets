/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularKnob',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKnobComponent implements OnChanges
{
   @Input('allowValueChangeOnClick') attrAllowValueChangeOnClick;
   @Input('allowValueChangeOnDrag') attrAllowValueChangeOnDrag;
   @Input('allowValueChangeOnMouseWheel') attrAllowValueChangeOnMouseWheel;
   @Input('changing') attrChanging;
   @Input('dragEndAngle') attrDragEndAngle;
   @Input('dragStartAngle') attrDragStartAngle;
   @Input('disabled') attrDisabled;
   @Input('dial') attrDial;
   @Input('endAngle') attrEndAngle;
   @Input('labels') attrLabels;
   @Input('marks') attrMarks;
   @Input('min') attrMin;
   @Input('max') attrMax;
   @Input('progressBar') attrProgressBar;
   @Input('pointer') attrPointer;
   @Input('pointerGrabAction') attrPointerGrabAction;
   @Input('rotation') attrRotation;
   @Input('startAngle') attrStartAngle;
   @Input('spinner') attrSpinner;
   @Input('style') attrStyle;
   @Input('step') attrStep;
   @Input('snapToStep') attrSnapToStep;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','style','step','snapToStep','value','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxKnob;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxKnob(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                  this.host.jqxKnob(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxKnob('setOptions', options);
   }

   // jqxKnobComponent properties
   allowValueChangeOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('allowValueChangeOnClick', arg);
      } else {
          return this.host.jqxKnob('allowValueChangeOnClick');
      }
   }

   allowValueChangeOnDrag(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('allowValueChangeOnDrag', arg);
      } else {
          return this.host.jqxKnob('allowValueChangeOnDrag');
      }
   }

   allowValueChangeOnMouseWheel(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
      } else {
          return this.host.jqxKnob('allowValueChangeOnMouseWheel');
      }
   }

   changing(arg?: (oldValue: String | Number, newValue: String | Number) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('changing', arg);
      } else {
          return this.host.jqxKnob('changing');
      }
   }

   dragEndAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('dragEndAngle', arg);
      } else {
          return this.host.jqxKnob('dragEndAngle');
      }
   }

   dragStartAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('dragStartAngle', arg);
      } else {
          return this.host.jqxKnob('dragStartAngle');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('disabled', arg);
      } else {
          return this.host.jqxKnob('disabled');
      }
   }

   dial(arg?: jqwidgets.KnobDial) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('dial', arg);
      } else {
          return this.host.jqxKnob('dial');
      }
   }

   endAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('endAngle', arg);
      } else {
          return this.host.jqxKnob('endAngle');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('height', arg);
      } else {
          return this.host.jqxKnob('height');
      }
   }

   labels(arg?: jqwidgets.KnobLabels) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('labels', arg);
      } else {
          return this.host.jqxKnob('labels');
      }
   }

   marks(arg?: jqwidgets.KnobMarks) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('marks', arg);
      } else {
          return this.host.jqxKnob('marks');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('min', arg);
      } else {
          return this.host.jqxKnob('min');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('max', arg);
      } else {
          return this.host.jqxKnob('max');
      }
   }

   progressBar(arg?: jqwidgets.KnobProgressBar) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('progressBar', arg);
      } else {
          return this.host.jqxKnob('progressBar');
      }
   }

   pointer(arg?: jqwidgets.KnobPointer) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('pointer', arg);
      } else {
          return this.host.jqxKnob('pointer');
      }
   }

   pointerGrabAction(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('pointerGrabAction', arg);
      } else {
          return this.host.jqxKnob('pointerGrabAction');
      }
   }

   rotation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('rotation', arg);
      } else {
          return this.host.jqxKnob('rotation');
      }
   }

   startAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('startAngle', arg);
      } else {
          return this.host.jqxKnob('startAngle');
      }
   }

   spinner(arg?: jqwidgets.KnobSpinner) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('spinner', arg);
      } else {
          return this.host.jqxKnob('spinner');
      }
   }

   style(arg?: jqwidgets.KnobStyle) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('style', arg);
      } else {
          return this.host.jqxKnob('style');
      }
   }

   step(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('step', arg);
      } else {
          return this.host.jqxKnob('step');
      }
   }

   snapToStep(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('snapToStep', arg);
      } else {
          return this.host.jqxKnob('snapToStep');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('value', arg);
      } else {
          return this.host.jqxKnob('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxKnob('width', arg);
      } else {
          return this.host.jqxKnob('width');
      }
   }


   // jqxKnobComponent functions
   destroy(): void {
      this.host.jqxKnob('destroy');
   }
   val(value: String | Number): number {
      return this.host.jqxKnob('val', value);
   }

   // jqxKnobComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
   }

} //jqxKnobComponent
