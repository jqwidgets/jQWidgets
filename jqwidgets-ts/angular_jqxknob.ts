/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxKnob',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKnobComponent implements OnChanges
{
   @Input('allowValueChangeOnClick') attrAllowValueChangeOnClick: any;
   @Input('allowValueChangeOnDrag') attrAllowValueChangeOnDrag: any;
   @Input('allowValueChangeOnMouseWheel') attrAllowValueChangeOnMouseWheel: any;
   @Input('changing') attrChanging: any;
   @Input('dragEndAngle') attrDragEndAngle: any;
   @Input('dragStartAngle') attrDragStartAngle: any;
   @Input('disabled') attrDisabled: any;
   @Input('dial') attrDial: any;
   @Input('endAngle') attrEndAngle: any;
   @Input('labels') attrLabels: any;
   @Input('marks') attrMarks: any;
   @Input('min') attrMin: any;
   @Input('max') attrMax: any;
   @Input('progressBar') attrProgressBar: any;
   @Input('pointer') attrPointer: any;
   @Input('pointerGrabAction') attrPointerGrabAction: any;
   @Input('rotation') attrRotation: any;
   @Input('startAngle') attrStartAngle: any;
   @Input('spinner') attrSpinner: any;
   @Input('style') attrStyle: any;
   @Input('step') attrStep: any;
   @Input('snapToStep') attrSnapToStep: any;
   @Input('value') attrValue: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','style','step','snapToStep','value','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxKnob;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      $(window).resize(() => {
          this.__updateRect__();
      });
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
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
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

   createComponent(options?: any): void {
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

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
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

   val(value?: String | Number): any {
      if (value !== undefined) {
         this.host.jqxKnob("val", value);
      } else {
         return this.host.jqxKnob("val");
      }
   };


   // jqxKnobComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
   }

} //jqxKnobComponent


