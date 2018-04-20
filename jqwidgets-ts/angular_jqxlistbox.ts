/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxdragdrop.js';
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxListBoxComponent),
    multi: true
}

@Component({
    selector: 'jqxListBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxListBoxComponent implements ControlValueAccessor, OnChanges, AfterViewInit, AfterViewChecked 
{
   @Input('autoHeight') attrAutoHeight: boolean;
   @Input('allowDrag') attrAllowDrag: boolean;
   @Input('allowDrop') attrAllowDrop: boolean;
   @Input('checkboxes') attrCheckboxes: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('displayMember') attrDisplayMember: number | string;
   @Input('dropAction') attrDropAction: any;
   @Input('dragStart') attrDragStart: (item:any) => boolean;
   @Input('dragEnd') attrDragEnd: (dragItem: any, dropItem: any) => boolean;
   @Input('enableHover') attrEnableHover: boolean;
   @Input('enableSelection') attrEnableSelection: boolean;
   @Input('equalItemsWidth') attrEqualItemsWidth: boolean;
   @Input('filterable') attrFilterable: boolean;
   @Input('filterHeight') attrFilterHeight: number;
   @Input('filterDelay') attrFilterDelay: number | string;
   @Input('filterPlaceHolder') attrFilterPlaceHolder: number | string;
   @Input('hasThreeStates') attrHasThreeStates: boolean;
   @Input('itemHeight') attrItemHeight: number;
   @Input('incrementalSearch') attrIncrementalSearch: boolean;
   @Input('incrementalSearchDelay') attrIncrementalSearchDelay: number | string;
   @Input('multiple') attrMultiple: boolean;
   @Input('multipleextended') attrMultipleextended: boolean;
   @Input('renderer') attrRenderer: (index: number, label: string | number, value: string | number) => string;
   @Input('rendered') attrRendered: () => any;
   @Input('rtl') attrRtl: boolean;
   @Input('selectedIndex') attrSelectedIndex: number | string;
   @Input('selectedIndexes') attrSelectedIndexes: any;
   @Input('source') attrSource: Array<any>;
   @Input('scrollBarSize') attrScrollBarSize: number;
   @Input('searchMode') attrSearchMode: any;
   @Input('theme') attrTheme: string;
   @Input('valueMember') attrValueMember: number | string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rendered','rtl','selectedIndex','selectedIndexes','source','scrollBarSize','searchMode','theme','valueMember','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxListBox;

   content: String;
   container: HTMLDivElement;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
   }; 

    ngAfterViewInit() {
       let children = JQXLite(this.elementRef.nativeElement.children).find("li"); 
       let html = ""; 
       let options = {}; 

       if (children.length > 0) {
           this.container = document.createElement('div');
           html = this.elementRef.nativeElement.innerHTML;
           this.container.appendChild(this.elementRef.nativeElement.firstChild);
           this.elementRef.nativeElement.innerHTML = html;
           this.content = html;

           let result = JQXLite.jqx.parseSourceTag(this.container);
                options['source'] = result.items;      }

      if (this.autoCreate) {
         this.createComponent(options); 
      }
   }; 

 ngAfterViewChecked() {
    if (this.container) {
        if (this.content !== this.container.innerHTML) {
            this.content = this.container.innerHTML;
            let result = JQXLite.jqx.parseSourceTag(this.container);

            this.host.jqxListBox({source: result.items});
        }
    }
    };

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
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
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
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

   displayMember(arg?: number | string) : any {
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

   dragStart(arg?: (item:any) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('dragStart', arg);
      } else {
          return this.host.jqxListBox('dragStart');
      }
   }

   dragEnd(arg?: (dragItem: any, dropItem: any) => boolean) : any {
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

   filterDelay(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterDelay', arg);
      } else {
          return this.host.jqxListBox('filterDelay');
      }
   }

   filterPlaceHolder(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('filterPlaceHolder', arg);
      } else {
          return this.host.jqxListBox('filterPlaceHolder');
      }
   }

   height(arg?: string | number) : any {
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

   incrementalSearchDelay(arg?: number | string) : any {
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

   renderer(arg?: (index: number, label: string | number, value: string | number) => string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('renderer', arg);
      } else {
          return this.host.jqxListBox('renderer');
      }
   }

   rendered(arg?: () => any) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('rendered', arg);
      } else {
          return this.host.jqxListBox('rendered');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('rtl', arg);
      } else {
          return this.host.jqxListBox('rtl');
      }
   }

   selectedIndex(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('selectedIndex', arg);
      } else {
          return this.host.jqxListBox('selectedIndex');
      }
   }

   selectedIndexes(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('selectedIndexes', arg);
      } else {
          return this.host.jqxListBox('selectedIndexes');
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

   valueMember(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxListBox('valueMember', arg);
      } else {
          return this.host.jqxListBox('valueMember');
      }
   }

   width(arg?: string | number) : any {
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

   enableAt(Index: number | string): void {
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

   insertAt(Item: any, Index: number | string): void {
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

   loadFromSelect(selector: string): void {
      this.host.jqxListBox('loadFromSelect', selector);
   }

   removeItem(Item: any): void {
      this.host.jqxListBox('removeItem', Item);
   }

   removeAt(Index: number | string): void {
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

   selectIndex(Index: number | string): void {
      this.host.jqxListBox('selectIndex', Index);
   }

   updateItem(Item: any, Value: number | string): void {
      this.host.jqxListBox('updateItem', Item, Value);
   }

   updateAt(item: any, index: number | string): void {
      this.host.jqxListBox('updateAt', item, index);
   }

   unselectIndex(index: number | string): void {
      this.host.jqxListBox('unselectIndex', index);
   }

   unselectItem(item: any): void {
      this.host.jqxListBox('unselectItem', item);
   }

   uncheckIndex(index: number | string): void {
      this.host.jqxListBox('uncheckIndex', index);
   }

   uncheckItem(item: any): void {
      this.host.jqxListBox('uncheckItem', item);
   }

   uncheckAll(): void {
      this.host.jqxListBox('uncheckAll');
   }

   val(value?: number | string): any {
      if (value !== undefined) {
         return this.host.jqxListBox("val", value);
      } else {
         return this.host.jqxListBox("val");
      }
   };


   // jqxListBoxComponent events
   @Output() onBindingComplete = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onDragStart = new EventEmitter();
   @Output() onDragEnd = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData: any) => { this.onBindingComplete.emit(eventData); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.item.value); });
      this.host.on('checkChange', (eventData: any) => { this.onCheckChange.emit(eventData); });
      this.host.on('dragStart', (eventData: any) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData: any) => { this.onDragEnd.emit(eventData); });
      this.host.on('select', (eventData: any) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData: any) => { this.onUnselect.emit(eventData); });
   }

} //jqxListBoxComponent


