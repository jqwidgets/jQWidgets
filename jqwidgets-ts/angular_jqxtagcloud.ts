/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTagCloud',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTagCloudComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTagCloud;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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

   tagRenderer(arg?: (itemData: TagCloudItem, minValue: Number, valueRange: Number) => any) : any {
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
   @Output() OnBindingComplete = new EventEmitter();
   @Output() OnItemClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.OnBindingComplete.emit(eventData); });
      this.host.on('itemClick', (eventData) => { this.OnItemClick.emit(eventData); });
   }

} //jqxTagCloudComponent
