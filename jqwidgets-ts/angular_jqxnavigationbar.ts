/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularNavigationBar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxNavigationBarComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxNavigationBar;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
   @Output() OnCollapsingItem = new EventEmitter();
   @Output() OnCollapsedItem = new EventEmitter();
   @Output() OnExpandingItem = new EventEmitter();
   @Output() OnExpandedItem = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsingItem', (eventData) => { this.OnCollapsingItem.emit(eventData); });
      this.host.on('collapsedItem', (eventData) => { this.OnCollapsedItem.emit(eventData); });
      this.host.on('expandingItem', (eventData) => { this.OnExpandingItem.emit(eventData); });
      this.host.on('expandedItem', (eventData) => { this.OnExpandedItem.emit(eventData); });
   }

} //jqxNavigationBarComponent
