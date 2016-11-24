/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTagCloud',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTagCloudComponent implements OnChanges
{
   @Input('alterTextCase') attrAlterTextCase;
   @Input('disabled') attrDisabled;
   @Input('displayLimit') attrDisplayLimit;
   @Input('displayMember') attrDisplayMember;
   @Input('displayValue') attrDisplayValue;
   @Input('fontSizeUnit') attrFontSizeUnit;
   @Input('maxColor') attrMaxColor;
   @Input('maxFontSize') attrMaxFontSize;
   @Input('maxValueToDisplay') attrMaxValueToDisplay;
   @Input('minColor') attrMinColor;
   @Input('minFontSize') attrMinFontSize;
   @Input('minValueToDisplay') attrMinValueToDisplay;
   @Input('rtl') attrRtl;
   @Input('sortBy') attrSortBy;
   @Input('sortOrder') attrSortOrder;
   @Input('source') attrSource;
   @Input('tagRenderer') attrTagRenderer;
   @Input('takeTopWeightedItems') attrTakeTopWeightedItems;
   @Input('textColor') attrTextColor;
   @Input('urlBase') attrUrlBase;
   @Input('urlMember') attrUrlMember;
   @Input('valueMember') attrValueMember;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['alterTextCase','disabled','displayLimit','displayMember','displayValue','fontSizeUnit','height','maxColor','maxFontSize','maxValueToDisplay','minColor','minFontSize','minValueToDisplay','rtl','sortBy','sortOrder','source','tagRenderer','takeTopWeightedItems','textColor','urlBase','urlMember','valueMember','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTagCloud;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTagCloud(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                  this.host.jqxTagCloud(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTagCloud('setOptions', options);
   }

   // jqxTagCloudComponent properties
   alterTextCase(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('alterTextCase', arg);
      } else {
          return this.host.jqxTagCloud('alterTextCase');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('disabled', arg);
      } else {
          return this.host.jqxTagCloud('disabled');
      }
   }

   displayLimit(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('displayLimit', arg);
      } else {
          return this.host.jqxTagCloud('displayLimit');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('displayMember', arg);
      } else {
          return this.host.jqxTagCloud('displayMember');
      }
   }

   displayValue(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('displayValue', arg);
      } else {
          return this.host.jqxTagCloud('displayValue');
      }
   }

   fontSizeUnit(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('fontSizeUnit', arg);
      } else {
          return this.host.jqxTagCloud('fontSizeUnit');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('height', arg);
      } else {
          return this.host.jqxTagCloud('height');
      }
   }

   maxColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('maxColor', arg);
      } else {
          return this.host.jqxTagCloud('maxColor');
      }
   }

   maxFontSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('maxFontSize', arg);
      } else {
          return this.host.jqxTagCloud('maxFontSize');
      }
   }

   maxValueToDisplay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('maxValueToDisplay', arg);
      } else {
          return this.host.jqxTagCloud('maxValueToDisplay');
      }
   }

   minColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('minColor', arg);
      } else {
          return this.host.jqxTagCloud('minColor');
      }
   }

   minFontSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('minFontSize', arg);
      } else {
          return this.host.jqxTagCloud('minFontSize');
      }
   }

   minValueToDisplay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('minValueToDisplay', arg);
      } else {
          return this.host.jqxTagCloud('minValueToDisplay');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('rtl', arg);
      } else {
          return this.host.jqxTagCloud('rtl');
      }
   }

   sortBy(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('sortBy', arg);
      } else {
          return this.host.jqxTagCloud('sortBy');
      }
   }

   sortOrder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('sortOrder', arg);
      } else {
          return this.host.jqxTagCloud('sortOrder');
      }
   }

   source(arg?: jqwidgets.TagCloudSource) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('source', arg);
      } else {
          return this.host.jqxTagCloud('source');
      }
   }

   tagRenderer(arg?: (itemData: any, minValue: Number, valueRange: Number) => any) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('tagRenderer', arg);
      } else {
          return this.host.jqxTagCloud('tagRenderer');
      }
   }

   takeTopWeightedItems(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('takeTopWeightedItems', arg);
      } else {
          return this.host.jqxTagCloud('takeTopWeightedItems');
      }
   }

   textColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('textColor', arg);
      } else {
          return this.host.jqxTagCloud('textColor');
      }
   }

   urlBase(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('urlBase', arg);
      } else {
          return this.host.jqxTagCloud('urlBase');
      }
   }

   urlMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('urlMember', arg);
      } else {
          return this.host.jqxTagCloud('urlMember');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('valueMember', arg);
      } else {
          return this.host.jqxTagCloud('valueMember');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTagCloud('width', arg);
      } else {
          return this.host.jqxTagCloud('width');
      }
   }


   // jqxTagCloudComponent functions
   destroy(): void {
      this.host.jqxTagCloud('destroy');
   }
   findTagIndex(tag: string): number {
      return this.host.jqxTagCloud('findTagIndex', tag);
   }
   getHiddenTagsList(): Array<any> {
      return this.host.jqxTagCloud('getHiddenTagsList');
   }
   getRenderedTags(): Array<any> {
      return this.host.jqxTagCloud('getRenderedTags');
   }
   getTagsList(): Array<any> {
      return this.host.jqxTagCloud('getTagsList');
   }
   hideItem(index: number): void {
      this.host.jqxTagCloud('hideItem', index);
   }
   insertAt(index: number, item: any): void {
      this.host.jqxTagCloud('insertAt', index, item);
   }
   removeAt(index: number): void {
      this.host.jqxTagCloud('removeAt', index);
   }
   updateAt(index: number, item: any): void {
      this.host.jqxTagCloud('updateAt', index, item);
   }
   showItem(index: number): void {
      this.host.jqxTagCloud('showItem', index);
   }

   // jqxTagCloudComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onItemClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
      this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
   }

} //jqxTagCloudComponent
