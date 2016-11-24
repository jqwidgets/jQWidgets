/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDragDrop',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDragDropComponent implements OnChanges
{
   @Input('appendTo') attrAppendTo;
   @Input('disabled') attrDisabled;
   @Input('distance') attrDistance;
   @Input('data') attrData;
   @Input('dropAction') attrDropAction;
   @Input('dropTarget') attrDropTarget;
   @Input('dragZIndex') attrDragZIndex;
   @Input('feedback') attrFeedback;
   @Input('initFeedback') attrInitFeedback;
   @Input('opacity') attrOpacity;
   @Input('onDragEnd') attrOnDragEnd;
   @Input('onDrag') attrOnDrag;
   @Input('onDragStart') attrOnDragStart;
   @Input('onTargetDrop') attrOnTargetDrop;
   @Input('onDropTargetEnter') attrOnDropTargetEnter;
   @Input('onDropTargetLeave') attrOnDropTargetLeave;
   @Input('restricter') attrRestricter;
   @Input('revert') attrRevert;
   @Input('revertDuration') attrRevertDuration;
   @Input('tolerance') attrTolerance;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['appendTo','disabled','distance','data','dropAction','dropTarget','dragZIndex','feedback','initFeedback','opacity','onDragEnd','onDrag','onDragStart','onTargetDrop','onDropTargetEnter','onDropTargetLeave','restricter','revert','revertDuration','tolerance'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDragDrop;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDragDrop(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                  this.host.jqxDragDrop(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() ondragstart = new EventEmitter();
   @Output() ondragend = new EventEmitter();
   @Output() ondragging = new EventEmitter();
   @Output() ondroptargetenter = new EventEmitter();
   @Output() ondroptargetleave = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('dragStart', (eventData) => { this.ondragstart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.ondragend.emit(eventData); });
      this.host.on('dragging', (eventData) => { this.ondragging.emit(eventData); });
      this.host.on('dropTargetEnter', (eventData) => { this.ondroptargetenter.emit(eventData); });
      this.host.on('dropTargetLeave', (eventData) => { this.ondroptargetleave.emit(eventData); });
   }

} //jqxDragDropComponent
