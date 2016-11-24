/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularButton',
    template: '<button><ng-content></ng-content></button>'
})

export class jqxButtonComponent implements OnChanges
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
   widgetObject:  jqwidgets.jqxButton;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                  this.host.jqxButton(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
      this.host = this.widgetObject['host'];
      this.__wireEvents__();
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxButton('setOptions', options);
   }

   // jqxButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxButton('delay', arg);
      } else {
          return this.host.jqxButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('disabled', arg);
      } else {
          return this.host.jqxButton('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('height', arg);
      } else {
          return this.host.jqxButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgSrc', arg);
      } else {
          return this.host.jqxButton('imgSrc');
      }
   }

   imgWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgWidth', arg);
      } else {
          return this.host.jqxButton('imgWidth');
      }
   }

   imgHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgHeight', arg);
      } else {
          return this.host.jqxButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgPosition', arg);
      } else {
          return this.host.jqxButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('roundedCorners', arg);
      } else {
          return this.host.jqxButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('rtl', arg);
      } else {
          return this.host.jqxButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textPosition', arg);
      } else {
          return this.host.jqxButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textImageRelation', arg);
      } else {
          return this.host.jqxButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('theme', arg);
      } else {
          return this.host.jqxButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('template', arg);
      } else {
          return this.host.jqxButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('toggled', arg);
      } else {
          return this.host.jqxButton('toggled');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('width', arg);
      } else {
          return this.host.jqxButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('value', arg);
      } else {
          return this.host.jqxButton('value');
      }
   }


   // jqxButtonComponent functions
   check(): void {
      this.host.jqxButton('check');
   }
   destroy(): void {
      this.host.jqxButton('destroy');
   }
   focus(): void {
      this.host.jqxButton('focus');
   }
   render(): void {
      this.host.jqxButton('render');
   }
   toggle(): void {
      this.host.jqxButton('toggle');
   }
   unCheck(): void {
      this.host.jqxButton('unCheck');
   }
   val(value: string): string {
      return this.host.jqxButton('val', value);
   }

   // jqxButtonComponent events
   @Output() onClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
   }

} //jqxButtonComponent
