/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularNavigationBar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxNavigationBarComponent implements OnChanges
{
   @Input('animationType') attrAnimationType;
   @Input('arrowPosition') attrArrowPosition;
   @Input('collapseAnimationDuration') attrCollapseAnimationDuration;
   @Input('disabled') attrDisabled;
   @Input('expandAnimationDuration') attrExpandAnimationDuration;
   @Input('expandMode') attrExpandMode;
   @Input('expandedIndexes') attrExpandedIndexes;
   @Input('initContent') attrInitContent;
   @Input('rtl') attrRtl;
   @Input('showArrow') attrShowArrow;
   @Input('theme') attrTheme;
   @Input('toggleMode') attrToggleMode;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxNavigationBar;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                  this.host.jqxNavigationBar(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxNavigationBar('setOptions', options);
   }

   // jqxNavigationBarComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('animationType', arg);
      } else {
          return this.host.jqxNavigationBar('animationType');
      }
   }

   arrowPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('arrowPosition', arg);
      } else {
          return this.host.jqxNavigationBar('arrowPosition');
      }
   }

   collapseAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('collapseAnimationDuration', arg);
      } else {
          return this.host.jqxNavigationBar('collapseAnimationDuration');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('disabled', arg);
      } else {
          return this.host.jqxNavigationBar('disabled');
      }
   }

   expandAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('expandAnimationDuration', arg);
      } else {
          return this.host.jqxNavigationBar('expandAnimationDuration');
      }
   }

   expandMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('expandMode', arg);
      } else {
          return this.host.jqxNavigationBar('expandMode');
      }
   }

   expandedIndexes(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('expandedIndexes', arg);
      } else {
          return this.host.jqxNavigationBar('expandedIndexes');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('height', arg);
      } else {
          return this.host.jqxNavigationBar('height');
      }
   }

   initContent(arg?: (index:number) => void) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('initContent', arg);
      } else {
          return this.host.jqxNavigationBar('initContent');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('rtl', arg);
      } else {
          return this.host.jqxNavigationBar('rtl');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('showArrow', arg);
      } else {
          return this.host.jqxNavigationBar('showArrow');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('theme', arg);
      } else {
          return this.host.jqxNavigationBar('theme');
      }
   }

   toggleMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('toggleMode', arg);
      } else {
          return this.host.jqxNavigationBar('toggleMode');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavigationBar('width', arg);
      } else {
          return this.host.jqxNavigationBar('width');
      }
   }


   // jqxNavigationBarComponent functions
   add(header: String | Number, content: String | Number): void {
      this.host.jqxNavigationBar('add', header, content);
   }
   collapseAt(index: String | Number): void {
      this.host.jqxNavigationBar('collapseAt', index);
   }
   disableAt(index: String | Number): void {
      this.host.jqxNavigationBar('disableAt', index);
   }
   disable(): void {
      this.host.jqxNavigationBar('disable');
   }
   destroy(): void {
      this.host.jqxNavigationBar('destroy');
   }
   expandAt(index: String | Number): void {
      this.host.jqxNavigationBar('expandAt', index);
   }
   enableAt(index: String | Number): void {
      this.host.jqxNavigationBar('enableAt', index);
   }
   enable(): void {
      this.host.jqxNavigationBar('enable');
   }
   focus(): void {
      this.host.jqxNavigationBar('focus');
   }
   getHeaderContentAt(index: String | Number): string {
      return this.host.jqxNavigationBar('getHeaderContentAt', index);
   }
   getContentAt(index: String | Number): string {
      return this.host.jqxNavigationBar('getContentAt', index);
   }
   hideArrowAt(index: String | Number): void {
      this.host.jqxNavigationBar('hideArrowAt', index);
   }
   invalidate(): void {
      this.host.jqxNavigationBar('invalidate');
   }
   insert(Index: number, header: String | Number, content: String | Number): void {
      this.host.jqxNavigationBar('insert', Index, header, content);
   }
   refresh(): void {
      this.host.jqxNavigationBar('refresh');
   }
   render(): void {
      this.host.jqxNavigationBar('render');
   }
   remove(index: String | Number): void {
      this.host.jqxNavigationBar('remove', index);
   }
   setContentAt(index: number, item: String | Number): void {
      this.host.jqxNavigationBar('setContentAt', index, item);
   }
   setHeaderContentAt(index: number, item: String | Number): void {
      this.host.jqxNavigationBar('setHeaderContentAt', index, item);
   }
   showArrowAt(index: String | Number): void {
      this.host.jqxNavigationBar('showArrowAt', index);
   }
   update(index: number, header: String | Number, content: String | Number): void {
      this.host.jqxNavigationBar('update', index, header, content);
   }
   val(value: String | Number): String | Number {
      return this.host.jqxNavigationBar('val', value);
   }

   // jqxNavigationBarComponent events
   @Output() onCollapsingItem = new EventEmitter();
   @Output() onCollapsedItem = new EventEmitter();
   @Output() onExpandingItem = new EventEmitter();
   @Output() onExpandedItem = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsingItem', (eventData) => { this.onCollapsingItem.emit(eventData); });
      this.host.on('collapsedItem', (eventData) => { this.onCollapsedItem.emit(eventData); });
      this.host.on('expandingItem', (eventData) => { this.onExpandingItem.emit(eventData); });
      this.host.on('expandedItem', (eventData) => { this.onExpandedItem.emit(eventData); });
   }

} //jqxNavigationBarComponent
