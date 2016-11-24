/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularRibbon',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxRibbonComponent implements OnChanges
{
   @Input('animationType') attrAnimationType;
   @Input('animationDelay') attrAnimationDelay;
   @Input('disabled') attrDisabled;
   @Input('initContent') attrInitContent;
   @Input('mode') attrMode;
   @Input('popupCloseMode') attrPopupCloseMode;
   @Input('position') attrPosition;
   @Input('rtl') attrRtl;
   @Input('selectedIndex') attrSelectedIndex;
   @Input('selectionMode') attrSelectionMode;
   @Input('scrollPosition') attrScrollPosition;
   @Input('scrollStep') attrScrollStep;
   @Input('scrollDelay') attrScrollDelay;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationType','animationDelay','disabled','height','initContent','mode','popupCloseMode','position','rtl','selectedIndex','selectionMode','scrollPosition','scrollStep','scrollDelay','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRibbon;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRibbon(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                  this.host.jqxRibbon(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxRibbon('setOptions', options);
   }

   // jqxRibbonComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('animationType', arg);
      } else {
          return this.host.jqxRibbon('animationType');
      }
   }

   animationDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('animationDelay', arg);
      } else {
          return this.host.jqxRibbon('animationDelay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('disabled', arg);
      } else {
          return this.host.jqxRibbon('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('height', arg);
      } else {
          return this.host.jqxRibbon('height');
      }
   }

   initContent(arg?: (index: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('initContent', arg);
      } else {
          return this.host.jqxRibbon('initContent');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('mode', arg);
      } else {
          return this.host.jqxRibbon('mode');
      }
   }

   popupCloseMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('popupCloseMode', arg);
      } else {
          return this.host.jqxRibbon('popupCloseMode');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('position', arg);
      } else {
          return this.host.jqxRibbon('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('rtl', arg);
      } else {
          return this.host.jqxRibbon('rtl');
      }
   }

   selectedIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('selectedIndex', arg);
      } else {
          return this.host.jqxRibbon('selectedIndex');
      }
   }

   selectionMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('selectionMode', arg);
      } else {
          return this.host.jqxRibbon('selectionMode');
      }
   }

   scrollPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('scrollPosition', arg);
      } else {
          return this.host.jqxRibbon('scrollPosition');
      }
   }

   scrollStep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('scrollStep', arg);
      } else {
          return this.host.jqxRibbon('scrollStep');
      }
   }

   scrollDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('scrollDelay', arg);
      } else {
          return this.host.jqxRibbon('scrollDelay');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('theme', arg);
      } else {
          return this.host.jqxRibbon('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRibbon('width', arg);
      } else {
          return this.host.jqxRibbon('width');
      }
   }


   // jqxRibbonComponent functions
   addAt(index: number, item: jqwidgets.RibbonItem): void {
      this.host.jqxRibbon('addAt', index, item);
   }
   clearSelection(): void {
      this.host.jqxRibbon('clearSelection');
   }
   disableAt(index: number): void {
      this.host.jqxRibbon('disableAt', index);
   }
   destroy(): void {
      this.host.jqxRibbon('destroy');
   }
   enableAt(index: number): void {
      this.host.jqxRibbon('enableAt', index);
   }
   hideAt(index: number): void {
      this.host.jqxRibbon('hideAt', index);
   }
   removeAt(index: number): void {
      this.host.jqxRibbon('removeAt', index);
   }
   render(): void {
      this.host.jqxRibbon('render');
   }
   refresh(): void {
      this.host.jqxRibbon('refresh');
   }
   selectAt(index: number): void {
      this.host.jqxRibbon('selectAt', index);
   }
   showAt(index: number): void {
      this.host.jqxRibbon('showAt', index);
   }
   setPopupLayout(index: number, layout: any, width: String | Number, height: String | Number): void {
      this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
   }
   updateAt(index: number, item: jqwidgets.RibbonItem): void {
      this.host.jqxRibbon('updateAt', index, item);
   }
   val(value: string): string {
      return this.host.jqxRibbon('val', value);
   }

   // jqxRibbonComponent events
   @Output() onChange = new EventEmitter();
   @Output() onReorder = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
      this.host.on('reorder', (eventData) => { this.onReorder.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
   }

} //jqxRibbonComponent
