/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularSortable',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSortableComponent implements OnChanges
{
   @Input('appendTo') attrAppendTo;
   @Input('axis') attrAxis;
   @Input('cancelProperty') attrCancelProperty;
   @Input('connectWith') attrConnectWith;
   @Input('containment') attrContainment;
   @Input('cursor') attrCursor;
   @Input('cursorAt') attrCursorAt;
   @Input('delay') attrDelay;
   @Input('disabled') attrDisabled;
   @Input('distance') attrDistance;
   @Input('dropOnEmpty') attrDropOnEmpty;
   @Input('forceHelperSize') attrForceHelperSize;
   @Input('forcePlaceholderSize') attrForcePlaceholderSize;
   @Input('grid') attrGrid;
   @Input('handle') attrHandle;
   @Input('helper') attrHelper;
   @Input('items') attrItems;
   @Input('opacity') attrOpacity;
   @Input('placeholderShow') attrPlaceholderShow;
   @Input('revert') attrRevert;
   @Input('scroll') attrScroll;
   @Input('scrollSensitivity') attrScrollSensitivity;
   @Input('scrollSpeed') attrScrollSpeed;
   @Input('tolerance') attrTolerance;
   @Input('zIndex') attrZIndex;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['appendTo','axis','cancelProperty','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSortable;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxSortable(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                  this.host.jqxSortable(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxSortable('setOptions', options);
   }

   // jqxSortableComponent properties
   appendTo(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('appendTo', arg);
      } else {
          return this.host.jqxSortable('appendTo');
      }
   }

   axis(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('axis', arg);
      } else {
          return this.host.jqxSortable('axis');
      }
   }

   cancelProperty(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cancelProperty', arg);
      } else {
          return this.host.jqxSortable('cancelProperty');
      }
   }

   connectWith(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('connectWith', arg);
      } else {
          return this.host.jqxSortable('connectWith');
      }
   }

   containment(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('containment', arg);
      } else {
          return this.host.jqxSortable('containment');
      }
   }

   cursor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cursor', arg);
      } else {
          return this.host.jqxSortable('cursor');
      }
   }

   cursorAt(arg?: jqwidgets.SortableCursorAt) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cursorAt', arg);
      } else {
          return this.host.jqxSortable('cursorAt');
      }
   }

   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('delay', arg);
      } else {
          return this.host.jqxSortable('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('disabled', arg);
      } else {
          return this.host.jqxSortable('disabled');
      }
   }

   distance(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('distance', arg);
      } else {
          return this.host.jqxSortable('distance');
      }
   }

   dropOnEmpty(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('dropOnEmpty', arg);
      } else {
          return this.host.jqxSortable('dropOnEmpty');
      }
   }

   forceHelperSize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('forceHelperSize', arg);
      } else {
          return this.host.jqxSortable('forceHelperSize');
      }
   }

   forcePlaceholderSize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('forcePlaceholderSize', arg);
      } else {
          return this.host.jqxSortable('forcePlaceholderSize');
      }
   }

   grid(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('grid', arg);
      } else {
          return this.host.jqxSortable('grid');
      }
   }

   handle(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('handle', arg);
      } else {
          return this.host.jqxSortable('handle');
      }
   }

   helper(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('helper', arg);
      } else {
          return this.host.jqxSortable('helper');
      }
   }

   items(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('items', arg);
      } else {
          return this.host.jqxSortable('items');
      }
   }

   opacity(arg?: Number | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('opacity', arg);
      } else {
          return this.host.jqxSortable('opacity');
      }
   }

   placeholderShow(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('placeholderShow', arg);
      } else {
          return this.host.jqxSortable('placeholderShow');
      }
   }

   revert(arg?: Number | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('revert', arg);
      } else {
          return this.host.jqxSortable('revert');
      }
   }

   scroll(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scroll', arg);
      } else {
          return this.host.jqxSortable('scroll');
      }
   }

   scrollSensitivity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scrollSensitivity', arg);
      } else {
          return this.host.jqxSortable('scrollSensitivity');
      }
   }

   scrollSpeed(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scrollSpeed', arg);
      } else {
          return this.host.jqxSortable('scrollSpeed');
      }
   }

   tolerance(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('tolerance', arg);
      } else {
          return this.host.jqxSortable('tolerance');
      }
   }

   zIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('zIndex', arg);
      } else {
          return this.host.jqxSortable('zIndex');
      }
   }


   // jqxSortableComponent functions
   cancelMethod(): void {
      this.host.jqxSortable('cancelMethod');
   }
   destroy(): void {
      this.host.jqxSortable('destroy');
   }
   disable(): void {
      this.host.jqxSortable('disable');
   }
   enable(): void {
      this.host.jqxSortable('enable');
   }
   refresh(): void {
      this.host.jqxSortable('refresh');
   }
   refreshPositions(): void {
      this.host.jqxSortable('refreshPositions');
   }
   serialize(): void {
      this.host.jqxSortable('serialize');
   }
   toArray(): Array<any> {
      return this.host.jqxSortable('toArray');
   }

   // jqxSortableComponent events
   @Output() onActivate = new EventEmitter();
   @Output() onBeforeStop = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onCreate = new EventEmitter();
   @Output() onDeactivate = new EventEmitter();
   @Output() onOut = new EventEmitter();
   @Output() onOver = new EventEmitter();
   @Output() onReceive = new EventEmitter();
   @Output() onRemove = new EventEmitter();
   @Output() onSort = new EventEmitter();
   @Output() onStart = new EventEmitter();
   @Output() onStop = new EventEmitter();
   @Output() onUpdate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('activate', (eventData) => { this.onActivate.emit(eventData); });
      this.host.on('beforeStop', (eventData) => { this.onBeforeStop.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
      this.host.on('create', (eventData) => { this.onCreate.emit(eventData); });
      this.host.on('deactivate', (eventData) => { this.onDeactivate.emit(eventData); });
      this.host.on('out', (eventData) => { this.onOut.emit(eventData); });
      this.host.on('over', (eventData) => { this.onOver.emit(eventData); });
      this.host.on('receive', (eventData) => { this.onReceive.emit(eventData); });
      this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
      this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
      this.host.on('start', (eventData) => { this.onStart.emit(eventData); });
      this.host.on('stop', (eventData) => { this.onStop.emit(eventData); });
      this.host.on('update', (eventData) => { this.onUpdate.emit(eventData); });
   }

} //jqxSortableComponent
