/*
jQWidgets v5.4.0 (2017-Oct)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdraw.js';
import '../jqwidgets/jqxknob.js';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxKnob',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxKnobComponent implements OnChanges
{
   @Input('allowValueChangeOnClick') attrAllowValueChangeOnClick: Boolean;
   @Input('allowValueChangeOnDrag') attrAllowValueChangeOnDrag: Boolean;
   @Input('allowValueChangeOnMouseWheel') attrAllowValueChangeOnMouseWheel: Boolean;
   @Input('changing') attrChanging: (oldValue: String | Number, newValue: String | Number) => Boolean;
   @Input('dragEndAngle') attrDragEndAngle: Number;
   @Input('dragStartAngle') attrDragStartAngle: Number;
   @Input('disabled') attrDisabled: Boolean;
   @Input('dial') attrDial: jqwidgets.KnobDial;
   @Input('endAngle') attrEndAngle: Number;
   @Input('labels') attrLabels: jqwidgets.KnobLabels;
   @Input('marks') attrMarks: jqwidgets.KnobMarks;
   @Input('min') attrMin: Number;
   @Input('max') attrMax: Number;
   @Input('progressBar') attrProgressBar: jqwidgets.KnobProgressBar;
   @Input('pointer') attrPointer: jqwidgets.KnobPointer;
   @Input('pointerGrabAction') attrPointerGrabAction: any;
   @Input('rotation') attrRotation: any;
   @Input('startAngle') attrStartAngle: Number;
   @Input('spinner') attrSpinner: jqwidgets.KnobSpinner;
   @Input('style') attrStyle: jqwidgets.KnobStyle;
   @Input('step') attrStep: Number;
   @Input('snapToStep') attrSnapToStep: Boolean;
   @Input('value') attrValue: Number;
   @Input('width') attrWidth: String | Number;
   @Input('height') attrHeight: String | Number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','style','step','snapToStep','value','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxKnob;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      JQXLite(window).resize(() => {
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
         return this.host.jqxKnob("val", value);
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


