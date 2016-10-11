/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDragDrop',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDragDropComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxDragDrop;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDragDrop('setOptions', options);
   }

   // jqxDragDropComponent properties
   appendTo(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('appendTo', arg);
      } else {
          return this.host.jqxDragDrop('appendTo');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('disabled', arg);
      } else {
          return this.host.jqxDragDrop('disabled');
      }
   }

   distance(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('distance', arg);
      } else {
          return this.host.jqxDragDrop('distance');
      }
   }

   data(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('data', arg);
      } else {
          return this.host.jqxDragDrop('data');
      }
   }

   dropAction(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('dropAction', arg);
      } else {
          return this.host.jqxDragDrop('dropAction');
      }
   }

   dropTarget(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('dropTarget', arg);
      } else {
          return this.host.jqxDragDrop('dropTarget');
      }
   }

   dragZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('dragZIndex', arg);
      } else {
          return this.host.jqxDragDrop('dragZIndex');
      }
   }

   feedback(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('feedback', arg);
      } else {
          return this.host.jqxDragDrop('feedback');
      }
   }

   initFeedback(arg?: (feedback?:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('initFeedback', arg);
      } else {
          return this.host.jqxDragDrop('initFeedback');
      }
   }

   opacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('opacity', arg);
      } else {
          return this.host.jqxDragDrop('opacity');
      }
   }

   onDragEnd(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onDragEnd', arg);
      } else {
          return this.host.jqxDragDrop('onDragEnd');
      }
   }

   onDrag(arg?: (data?: any, position?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onDrag', arg);
      } else {
          return this.host.jqxDragDrop('onDrag');
      }
   }

   onDragStart(arg?: (position?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onDragStart', arg);
      } else {
          return this.host.jqxDragDrop('onDragStart');
      }
   }

   onTargetDrop(arg?: (data?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onTargetDrop', arg);
      } else {
          return this.host.jqxDragDrop('onTargetDrop');
      }
   }

   onDropTargetEnter(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onDropTargetEnter', arg);
      } else {
          return this.host.jqxDragDrop('onDropTargetEnter');
      }
   }

   onDropTargetLeave(arg?: (data?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('onDropTargetLeave', arg);
      } else {
          return this.host.jqxDragDrop('onDropTargetLeave');
      }
   }

   restricter(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('restricter', arg);
      } else {
          return this.host.jqxDragDrop('restricter');
      }
   }

   revert(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('revert', arg);
      } else {
          return this.host.jqxDragDrop('revert');
      }
   }

   revertDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('revertDuration', arg);
      } else {
          return this.host.jqxDragDrop('revertDuration');
      }
   }

   tolerance(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDragDrop('tolerance', arg);
      } else {
          return this.host.jqxDragDrop('tolerance');
      }
   }


   // jqxDragDropComponent functions


   // jqxDragDropComponent events
   @Output() OnDragStart = new EventEmitter();
   @Output() OnDragEnd = new EventEmitter();
   @Output() OnDragging = new EventEmitter();
   @Output() OnDropTargetEnter = new EventEmitter();
   @Output() OnDropTargetLeave = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('dragStart', (eventData) => { this.OnDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.OnDragEnd.emit(eventData); });
      this.host.on('dragging', (eventData) => { this.OnDragging.emit(eventData); });
      this.host.on('dropTargetEnter', (eventData) => { this.OnDropTargetEnter.emit(eventData); });
      this.host.on('dropTargetLeave', (eventData) => { this.OnDropTargetLeave.emit(eventData); });
   }

} //jqxDragDropComponent
