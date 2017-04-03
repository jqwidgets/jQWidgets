/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxRepeatButton',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxRepeatButtonComponent implements OnChanges
{
   @Input('delay') attrDelay: any;
   @Input('disabled') attrDisabled: any;
   @Input('imgSrc') attrImgSrc: any;
   @Input('imgWidth') attrImgWidth: any;
   @Input('imgHeight') attrImgHeight: any;
   @Input('imgPosition') attrImgPosition: any;
   @Input('roundedCorners') attrRoundedCorners: any;
   @Input('rtl') attrRtl: any;
   @Input('textPosition') attrTextPosition: any;
   @Input('textImageRelation') attrTextImageRelation: any;
   @Input('theme') attrTheme: any;
   @Input('template') attrTemplate: any;
   @Input('toggled') attrToggled: any;
   @Input('value') attrValue: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRepeatButton;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      setTimeout(() => {
         if (this.autoCreate) {
            this.createComponent(); 
         }
      }); 
   }

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                  this.host.jqxRepeatButton(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxRepeatButton('setOptions', options);
   }

   // jqxRepeatButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('delay', arg);
      } else {
          return this.host.jqxRepeatButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('disabled', arg);
      } else {
          return this.host.jqxRepeatButton('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('height', arg);
      } else {
          return this.host.jqxRepeatButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('imgSrc', arg);
      } else {
          return this.host.jqxRepeatButton('imgSrc');
      }
   }

   imgWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('imgWidth', arg);
      } else {
          return this.host.jqxRepeatButton('imgWidth');
      }
   }

   imgHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('imgHeight', arg);
      } else {
          return this.host.jqxRepeatButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('imgPosition', arg);
      } else {
          return this.host.jqxRepeatButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('roundedCorners', arg);
      } else {
          return this.host.jqxRepeatButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('rtl', arg);
      } else {
          return this.host.jqxRepeatButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('textPosition', arg);
      } else {
          return this.host.jqxRepeatButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('textImageRelation', arg);
      } else {
          return this.host.jqxRepeatButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('theme', arg);
      } else {
          return this.host.jqxRepeatButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('template', arg);
      } else {
          return this.host.jqxRepeatButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('toggled', arg);
      } else {
          return this.host.jqxRepeatButton('toggled');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('width', arg);
      } else {
          return this.host.jqxRepeatButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRepeatButton('value', arg);
      } else {
          return this.host.jqxRepeatButton('value');
      }
   }


   // jqxRepeatButtonComponent functions
   check(): void {
      this.host.jqxRepeatButton('check');
   }

   destroy(): void {
      this.host.jqxRepeatButton('destroy');
   }

   focus(): void {
      this.host.jqxRepeatButton('focus');
   }

   render(): void {
      this.host.jqxRepeatButton('render');
   }

   toggle(): void {
      this.host.jqxRepeatButton('toggle');
   }

   unCheck(): void {
      this.host.jqxRepeatButton('unCheck');
   }

   val(value): any {
      if (value !== undefined) {
         this.host.jqxRepeatButton("val", value);
      } else {
         return this.host.jqxRepeatButton("val");
      }
   };


   // jqxRepeatButtonComponent events
   @Output() onClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData: any) => { this.onClick.emit(eventData); });
   }

} //jqxRepeatButtonComponent


