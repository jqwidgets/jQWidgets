/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularToggleButton',
    template: '<button><ng-content></ng-content></button>'
})

export class jqxToggleButtonComponent implements OnChanges
{
   @Input('delay') attrDelay;
   @Input('disabled') attrDisabled;
   @Input('imgSrc') attrImgSrc;
   @Input('imgWidth') attrImgWidth;
   @Input('imgHeight') attrImgHeight;
   @Input('imgPosition') attrImgPosition;
   @Input('roundedCorners') attrRoundedCorners;
   @Input('rtl') attrRtl;
   @Input('textPosition') attrTextPosition;
   @Input('textImageRelation') attrTextImageRelation;
   @Input('theme') attrTheme;
   @Input('template') attrTemplate;
   @Input('toggled') attrToggled;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxToggleButton;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxToggleButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                  this.host.jqxToggleButton(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxToggleButton('setOptions', options);
   }

   // jqxToggleButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('delay', arg);
      } else {
          return this.host.jqxToggleButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('disabled', arg);
      } else {
          return this.host.jqxToggleButton('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('height', arg);
      } else {
          return this.host.jqxToggleButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgSrc', arg);
      } else {
          return this.host.jqxToggleButton('imgSrc');
      }
   }

   imgWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgWidth', arg);
      } else {
          return this.host.jqxToggleButton('imgWidth');
      }
   }

   imgHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgHeight', arg);
      } else {
          return this.host.jqxToggleButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('imgPosition', arg);
      } else {
          return this.host.jqxToggleButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('roundedCorners', arg);
      } else {
          return this.host.jqxToggleButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('rtl', arg);
      } else {
          return this.host.jqxToggleButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('textPosition', arg);
      } else {
          return this.host.jqxToggleButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('textImageRelation', arg);
      } else {
          return this.host.jqxToggleButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('theme', arg);
      } else {
          return this.host.jqxToggleButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('template', arg);
      } else {
          return this.host.jqxToggleButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('toggled', arg);
      } else {
          return this.host.jqxToggleButton('toggled');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('width', arg);
      } else {
          return this.host.jqxToggleButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToggleButton('value', arg);
      } else {
          return this.host.jqxToggleButton('value');
      }
   }


   // jqxToggleButtonComponent functions
   check(): void {
      this.host.jqxToggleButton('check');
   }
   destroy(): void {
      this.host.jqxToggleButton('destroy');
   }
   focus(): void {
      this.host.jqxToggleButton('focus');
   }
   render(): void {
      this.host.jqxToggleButton('render');
   }
   toggle(): void {
      this.host.jqxToggleButton('toggle');
   }
   unCheck(): void {
      this.host.jqxToggleButton('unCheck');
   }
   val(value: string): string {
      return this.host.jqxToggleButton('val', value);
   }

   // jqxToggleButtonComponent events
   @Output() onClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
   }

} //jqxToggleButtonComponent
