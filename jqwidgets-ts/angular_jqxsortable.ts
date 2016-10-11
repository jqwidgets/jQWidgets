/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularSortable',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSortableComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxSortable;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
   @Output() OnActivate = new EventEmitter();
   @Output() OnBeforeStop = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnCreate = new EventEmitter();
   @Output() OnDeactivate = new EventEmitter();
   @Output() OnOut = new EventEmitter();
   @Output() OnOver = new EventEmitter();
   @Output() OnReceive = new EventEmitter();
   @Output() OnRemove = new EventEmitter();
   @Output() OnSort = new EventEmitter();
   @Output() OnStart = new EventEmitter();
   @Output() OnStop = new EventEmitter();
   @Output() OnUpdate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('activate', (eventData) => { this.OnActivate.emit(eventData); });
      this.host.on('beforeStop', (eventData) => { this.OnBeforeStop.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('create', (eventData) => { this.OnCreate.emit(eventData); });
      this.host.on('deactivate', (eventData) => { this.OnDeactivate.emit(eventData); });
      this.host.on('out', (eventData) => { this.OnOut.emit(eventData); });
      this.host.on('over', (eventData) => { this.OnOver.emit(eventData); });
      this.host.on('receive', (eventData) => { this.OnReceive.emit(eventData); });
      this.host.on('remove', (eventData) => { this.OnRemove.emit(eventData); });
      this.host.on('sort', (eventData) => { this.OnSort.emit(eventData); });
      this.host.on('start', (eventData) => { this.OnStart.emit(eventData); });
      this.host.on('stop', (eventData) => { this.OnStop.emit(eventData); });
      this.host.on('update', (eventData) => { this.OnUpdate.emit(eventData); });
   }

} //jqxSortableComponent
