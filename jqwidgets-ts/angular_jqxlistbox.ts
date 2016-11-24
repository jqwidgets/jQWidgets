/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxListBoxComponent),
    multi: true
}

@Component({
    selector: 'angularListBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxListBoxComponent implements ControlValueAccessor, OnChanges 
{
   @Input('autoHeight') attrAutoHeight;
   @Input('allowDrag') attrAllowDrag;
   @Input('allowDrop') attrAllowDrop;
   @Input('checkboxes') attrCheckboxes;
   @Input('disabled') attrDisabled;
   @Input('displayMember') attrDisplayMember;
   @Input('dropAction') attrDropAction;
   @Input('dragStart') attrDragStart;
   @Input('dragEnd') attrDragEnd;
   @Input('enableHover') attrEnableHover;
   @Input('enableSelection') attrEnableSelection;
   @Input('equalItemsWidth') attrEqualItemsWidth;
   @Input('filterable') attrFilterable;
   @Input('filterHeight') attrFilterHeight;
   @Input('filterDelay') attrFilterDelay;
   @Input('filterPlaceHolder') attrFilterPlaceHolder;
   @Input('hasThreeStates') attrHasThreeStates;
   @Input('itemHeight') attrItemHeight;
   @Input('incrementalSearch') attrIncrementalSearch;
   @Input('incrementalSearchDelay') attrIncrementalSearchDelay;
   @Input('multiple') attrMultiple;
   @Input('multipleextended') attrMultipleextended;
   @Input('renderer') attrRenderer;
   @Input('rtl') attrRtl;
   @Input('selectedIndex') attrSelectedIndex;
   @Input('source') attrSource;
   @Input('scrollBarSize') attrScrollBarSize;
   @Input('searchMode') attrSearchMode;
   @Input('theme') attrTheme;
   @Input('valueMember') attrValueMember;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rtl','selectedIndex','source','scrollBarSize','searchMode','theme','valueMember','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxListBox;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxListBox(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                  this.host.jqxListBox(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxListBox('setOptions', options);
   }

   // jqxListBoxComponent properties
   autoHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('autoHeight', arg);
      } else {
          return this.host.jqxListBox('autoHeight');
      }
   }

   allowDrag(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('allowDrag', arg);
      } else {
          return this.host.jqxListBox('allowDrag');
      }
   }

   allowDrop(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('allowDrop', arg);
      } else {
          return this.host.jqxListBox('allowDrop');
      }
   }

   checkboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('checkboxes', arg);
      } else {
          return this.host.jqxListBox('checkboxes');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('disabled', arg);
      } else {
          return this.host.jqxListBox('disabled');
      }
   }

   displayMember(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('displayMember', arg);
      } else {
          return this.host.jqxListBox('displayMember');
      }
   }

   dropAction(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('dropAction', arg);
      } else {
          return this.host.jqxListBox('dropAction');
      }
   }

   dragStart(arg?: (item:any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('dragStart', arg);
      } else {
          return this.host.jqxListBox('dragStart');
      }
   }

   dragEnd(arg?: (dragItem: any, dropItem: any) => Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('dragEnd', arg);
      } else {
          return this.host.jqxListBox('dragEnd');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('enableHover', arg);
      } else {
          return this.host.jqxListBox('enableHover');
      }
   }

   enableSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('enableSelection', arg);
      } else {
          return this.host.jqxListBox('enableSelection');
      }
   }

   equalItemsWidth(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('equalItemsWidth', arg);
      } else {
          return this.host.jqxListBox('equalItemsWidth');
      }
   }

   filterable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterable', arg);
      } else {
          return this.host.jqxListBox('filterable');
      }
   }

   filterHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterHeight', arg);
      } else {
          return this.host.jqxListBox('filterHeight');
      }
   }

   filterDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterDelay', arg);
      } else {
          return this.host.jqxListBox('filterDelay');
      }
   }

   filterPlaceHolder(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterPlaceHolder', arg);
      } else {
          return this.host.jqxListBox('filterPlaceHolder');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('height', arg);
      } else {
          return this.host.jqxListBox('height');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('hasThreeStates', arg);
      } else {
          return this.host.jqxListBox('hasThreeStates');
      }
   }

   itemHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('itemHeight', arg);
      } else {
          return this.host.jqxListBox('itemHeight');
      }
   }

   incrementalSearch(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('incrementalSearch', arg);
      } else {
          return this.host.jqxListBox('incrementalSearch');
      }
   }

   incrementalSearchDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('incrementalSearchDelay', arg);
      } else {
          return this.host.jqxListBox('incrementalSearchDelay');
      }
   }

   multiple(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('multiple', arg);
      } else {
          return this.host.jqxListBox('multiple');
      }
   }

   multipleextended(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('multipleextended', arg);
      } else {
          return this.host.jqxListBox('multipleextended');
      }
   }

   renderer(arg?: (index: Number, label: String | Number, value: String | Number) => String) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('renderer', arg);
      } else {
          return this.host.jqxListBox('renderer');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('rtl', arg);
      } else {
          return this.host.jqxListBox('rtl');
      }
   }

   selectedIndex(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('selectedIndex', arg);
      } else {
          return this.host.jqxListBox('selectedIndex');
      }
   }

   source(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('source', arg);
      } else {
          return this.host.jqxListBox('source');
      }
   }

   scrollBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('scrollBarSize', arg);
      } else {
          return this.host.jqxListBox('scrollBarSize');
      }
   }

   searchMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('searchMode', arg);
      } else {
          return this.host.jqxListBox('searchMode');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('theme', arg);
      } else {
          return this.host.jqxListBox('theme');
      }
   }

   valueMember(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('valueMember', arg);
      } else {
          return this.host.jqxListBox('valueMember');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('width', arg);
      } else {
          return this.host.jqxListBox('width');
      }
   }


   // jqxListBoxComponent functions
   addItem(Item: any): boolean {
      return this.host.jqxListBox('addItem', Item);
   }
   beginUpdate(): void {
      this.host.jqxListBox('beginUpdate');
   }
   clear(): void {
      this.host.jqxListBox('clear');
   }
   clearSelection(): void {
      this.host.jqxListBox('clearSelection');
   }
   checkIndex(Index: number): void {
      this.host.jqxListBox('checkIndex', Index);
   }
   checkItem(Item: any): void {
      this.host.jqxListBox('checkItem', Item);
   }
   checkAll(): void {
      this.host.jqxListBox('checkAll');
   }
   clearFilter(): void {
      this.host.jqxListBox('clearFilter');
   }
   destroy(): void {
      this.host.jqxListBox('destroy');
   }
   disableItem(Item: any): void {
      this.host.jqxListBox('disableItem', Item);
   }
   disableAt(Index: number): void {
      this.host.jqxListBox('disableAt', Index);
   }
   enableItem(Item: any): void {
      this.host.jqxListBox('enableItem', Item);
   }
   enableAt(Index: String | Number): void {
      this.host.jqxListBox('enableAt', Index);
   }
   ensureVisible(item: any): void {
      this.host.jqxListBox('ensureVisible', item);
   }
   endUpdate(): void {
      this.host.jqxListBox('endUpdate');
   }
   focus(): void {
      this.host.jqxListBox('focus');
   }
   getItems(): Array<any> {
      return this.host.jqxListBox('getItems');
   }
   getSelectedItems(): Array<any> {
      return this.host.jqxListBox('getSelectedItems');
   }
   getCheckedItems(): Array<any> {
      return this.host.jqxListBox('getCheckedItems');
   }
   getItem(Index: number): any {
      return this.host.jqxListBox('getItem', Index);
   }
   getItemByValue(Item: any): any {
      return this.host.jqxListBox('getItemByValue', Item);
   }
   getSelectedItem(): any {
      return this.host.jqxListBox('getSelectedItem');
   }
   getSelectedIndex(): number {
      return this.host.jqxListBox('getSelectedIndex');
   }
   insertAt(Item: any, Index: String | Number): void {
      this.host.jqxListBox('insertAt', Item, Index);
   }
   invalidate(): void {
      this.host.jqxListBox('invalidate');
   }
   indeterminateItem(Item: any): void {
      this.host.jqxListBox('indeterminateItem', Item);
   }
   indeterminateIndex(Index: number): void {
      this.host.jqxListBox('indeterminateIndex', Index);
   }
   removeItem(Item: any): void {
      this.host.jqxListBox('removeItem', Item);
   }
   removeAt(Index: String | Number): void {
      this.host.jqxListBox('removeAt', Index);
   }
   render(): void {
      this.host.jqxListBox('render');
   }
   refresh(): void {
      this.host.jqxListBox('refresh');
   }
   selectItem(Item: any): void {
      this.host.jqxListBox('selectItem', Item);
   }
   selectIndex(Index: String | Number): void {
      this.host.jqxListBox('selectIndex', Index);
   }
   updateItem(Item: any, Value: String | Number): void {
      this.host.jqxListBox('updateItem', Item, Value);
   }
   updateAt(item: any, index: String | Number): void {
      this.host.jqxListBox('updateAt', item, index);
   }
   unselectIndex(index: String | Number): void {
      this.host.jqxListBox('unselectIndex', index);
   }
   unselectItem(item: any): void {
      this.host.jqxListBox('unselectItem', item);
   }
   uncheckIndex(index: String | Number): void {
      this.host.jqxListBox('uncheckIndex', index);
   }
   uncheckItem(item: any): void {
      this.host.jqxListBox('uncheckItem', item);
   }
   uncheckAll(): void {
      this.host.jqxListBox('uncheckAll');
   }
   val(value: String | Number): string {
      return this.host.jqxListBox('val', value);
   }

   // jqxListBoxComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onDragStart = new EventEmitter();
   @Output() onDragEnd = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(eventData.args.item.label); });
      this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
      this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
   }

} //jqxListBoxComponent
