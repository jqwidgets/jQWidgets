import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdragdrop';
import { __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxListBoxComponent; }),
    multi: true
};
var jqxListBoxComponent = /** @class */ (function () {
    function jqxListBoxComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxListBoxComponent events
        this.onBindingComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxListBoxComponent.prototype.ngOnInit = function () {
    };
    ;
    jqxListBoxComponent.prototype.ngAfterViewInit = function () {
        var children = JQXLite(this.elementRef.nativeElement.children).find('li');
        var html = '';
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            var result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    };
    ;
    jqxListBoxComponent.prototype.ngAfterViewChecked = function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxListBox({ source: result.items });
            }
        }
    };
    ;
    jqxListBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxListBoxComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxListBoxComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxListBoxComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxListBoxComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxListBoxComponent.prototype.createComponent = function (options) {
        if (this.host) {
            return;
        }
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
    };
    jqxListBoxComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxListBoxComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxListBoxComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxListBoxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxListBoxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxListBoxComponent.prototype.setOptions = function (options) {
        this.host.jqxListBox('setOptions', options);
    };
    // jqxListBoxComponent properties
    jqxListBoxComponent.prototype.autoHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('autoHeight', arg);
        }
        else {
            return this.host.jqxListBox('autoHeight');
        }
    };
    jqxListBoxComponent.prototype.allowDrag = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrag', arg);
        }
        else {
            return this.host.jqxListBox('allowDrag');
        }
    };
    jqxListBoxComponent.prototype.allowDrop = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrop', arg);
        }
        else {
            return this.host.jqxListBox('allowDrop');
        }
    };
    jqxListBoxComponent.prototype.checkboxes = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('checkboxes', arg);
        }
        else {
            return this.host.jqxListBox('checkboxes');
        }
    };
    jqxListBoxComponent.prototype.disabled = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('disabled', arg);
        }
        else {
            return this.host.jqxListBox('disabled');
        }
    };
    jqxListBoxComponent.prototype.displayMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('displayMember', arg);
        }
        else {
            return this.host.jqxListBox('displayMember');
        }
    };
    jqxListBoxComponent.prototype.dropAction = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dropAction', arg);
        }
        else {
            return this.host.jqxListBox('dropAction');
        }
    };
    jqxListBoxComponent.prototype.dragStart = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragStart', arg);
        }
        else {
            return this.host.jqxListBox('dragStart');
        }
    };
    jqxListBoxComponent.prototype.dragEnd = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragEnd', arg);
        }
        else {
            return this.host.jqxListBox('dragEnd');
        }
    };
    jqxListBoxComponent.prototype.enableHover = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableHover', arg);
        }
        else {
            return this.host.jqxListBox('enableHover');
        }
    };
    jqxListBoxComponent.prototype.enableSelection = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableSelection', arg);
        }
        else {
            return this.host.jqxListBox('enableSelection');
        }
    };
    jqxListBoxComponent.prototype.equalItemsWidth = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('equalItemsWidth', arg);
        }
        else {
            return this.host.jqxListBox('equalItemsWidth');
        }
    };
    jqxListBoxComponent.prototype.filterable = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterable', arg);
        }
        else {
            return this.host.jqxListBox('filterable');
        }
    };
    jqxListBoxComponent.prototype.filterHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterHeight', arg);
        }
        else {
            return this.host.jqxListBox('filterHeight');
        }
    };
    jqxListBoxComponent.prototype.filterDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterDelay', arg);
        }
        else {
            return this.host.jqxListBox('filterDelay');
        }
    };
    jqxListBoxComponent.prototype.filterPlaceHolder = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxListBox('filterPlaceHolder');
        }
    };
    jqxListBoxComponent.prototype.height = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('height', arg);
        }
        else {
            return this.host.jqxListBox('height');
        }
    };
    jqxListBoxComponent.prototype.hasThreeStates = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxListBox('hasThreeStates');
        }
    };
    jqxListBoxComponent.prototype.itemHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('itemHeight', arg);
        }
        else {
            return this.host.jqxListBox('itemHeight');
        }
    };
    jqxListBoxComponent.prototype.incrementalSearch = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearch', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearch');
        }
    };
    jqxListBoxComponent.prototype.incrementalSearchDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearchDelay');
        }
    };
    jqxListBoxComponent.prototype.multiple = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multiple', arg);
        }
        else {
            return this.host.jqxListBox('multiple');
        }
    };
    jqxListBoxComponent.prototype.multipleextended = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multipleextended', arg);
        }
        else {
            return this.host.jqxListBox('multipleextended');
        }
    };
    jqxListBoxComponent.prototype.renderer = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('renderer', arg);
        }
        else {
            return this.host.jqxListBox('renderer');
        }
    };
    jqxListBoxComponent.prototype.rendered = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rendered', arg);
        }
        else {
            return this.host.jqxListBox('rendered');
        }
    };
    jqxListBoxComponent.prototype.rtl = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rtl', arg);
        }
        else {
            return this.host.jqxListBox('rtl');
        }
    };
    jqxListBoxComponent.prototype.selectedIndex = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndex');
        }
    };
    jqxListBoxComponent.prototype.selectedIndexes = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndexes', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndexes');
        }
    };
    jqxListBoxComponent.prototype.source = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('source', arg);
        }
        else {
            return this.host.jqxListBox('source');
        }
    };
    jqxListBoxComponent.prototype.scrollBarSize = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxListBox('scrollBarSize');
        }
    };
    jqxListBoxComponent.prototype.searchMode = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('searchMode', arg);
        }
        else {
            return this.host.jqxListBox('searchMode');
        }
    };
    jqxListBoxComponent.prototype.theme = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('theme', arg);
        }
        else {
            return this.host.jqxListBox('theme');
        }
    };
    jqxListBoxComponent.prototype.valueMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('valueMember', arg);
        }
        else {
            return this.host.jqxListBox('valueMember');
        }
    };
    jqxListBoxComponent.prototype.width = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('width', arg);
        }
        else {
            return this.host.jqxListBox('width');
        }
    };
    // jqxListBoxComponent functions
    jqxListBoxComponent.prototype.addItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('addItem', Item);
    };
    jqxListBoxComponent.prototype.beginUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('beginUpdate');
    };
    jqxListBoxComponent.prototype.clear = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clear');
    };
    jqxListBoxComponent.prototype.clearSelection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearSelection');
    };
    jqxListBoxComponent.prototype.checkIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkIndex', Index);
    };
    jqxListBoxComponent.prototype.checkItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkItem', Item);
    };
    jqxListBoxComponent.prototype.checkAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkAll');
    };
    jqxListBoxComponent.prototype.clearFilter = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearFilter');
    };
    jqxListBoxComponent.prototype.destroy = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('destroy');
    };
    jqxListBoxComponent.prototype.disableItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableItem', Item);
    };
    jqxListBoxComponent.prototype.disableAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableAt', Index);
    };
    jqxListBoxComponent.prototype.enableItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableItem', Item);
    };
    jqxListBoxComponent.prototype.enableAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableAt', Index);
    };
    jqxListBoxComponent.prototype.ensureVisible = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('ensureVisible', item);
    };
    jqxListBoxComponent.prototype.endUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('endUpdate');
    };
    jqxListBoxComponent.prototype.focus = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('focus');
    };
    jqxListBoxComponent.prototype.getItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItems');
    };
    jqxListBoxComponent.prototype.getSelectedItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItems');
    };
    jqxListBoxComponent.prototype.getCheckedItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getCheckedItems');
    };
    jqxListBoxComponent.prototype.getItem = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItem', Index);
    };
    jqxListBoxComponent.prototype.getItemByValue = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItemByValue', Item);
    };
    jqxListBoxComponent.prototype.getSelectedItem = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItem');
    };
    jqxListBoxComponent.prototype.getSelectedIndex = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedIndex');
    };
    jqxListBoxComponent.prototype.insertAt = function (Item, Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('insertAt', Item, Index);
    };
    jqxListBoxComponent.prototype.invalidate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('invalidate');
    };
    jqxListBoxComponent.prototype.indeterminateItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateItem', Item);
    };
    jqxListBoxComponent.prototype.indeterminateIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateIndex', Index);
    };
    jqxListBoxComponent.prototype.loadFromSelect = function (selector) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('loadFromSelect', selector);
    };
    jqxListBoxComponent.prototype.removeItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeItem', Item);
    };
    jqxListBoxComponent.prototype.removeAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeAt', Index);
    };
    jqxListBoxComponent.prototype.render = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('render');
    };
    jqxListBoxComponent.prototype.refresh = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('refresh');
    };
    jqxListBoxComponent.prototype.selectItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectItem', Item);
    };
    jqxListBoxComponent.prototype.selectIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectIndex', Index);
    };
    jqxListBoxComponent.prototype.updateItem = function (Item, Value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateItem', Item, Value);
    };
    jqxListBoxComponent.prototype.updateAt = function (item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateAt', item, index);
    };
    jqxListBoxComponent.prototype.unselectIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectIndex', index);
    };
    jqxListBoxComponent.prototype.unselectItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectItem', item);
    };
    jqxListBoxComponent.prototype.uncheckIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckIndex', index);
    };
    jqxListBoxComponent.prototype.uncheckItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckItem', item);
    };
    jqxListBoxComponent.prototype.uncheckAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckAll');
    };
    jqxListBoxComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxListBox('val', value);
        }
        else {
            return this.host.jqxListBox('val');
        }
    };
    ;
    jqxListBoxComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.item.value); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    jqxListBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('autoHeight'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAutoHeight", void 0);
    __decorate([
        Input('allowDrag'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAllowDrag", void 0);
    __decorate([
        Input('allowDrop'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAllowDrop", void 0);
    __decorate([
        Input('checkboxes'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrCheckboxes", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('displayMember'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrDisplayMember", void 0);
    __decorate([
        Input('dropAction'),
        __metadata("design:type", String)
    ], jqxListBoxComponent.prototype, "attrDropAction", void 0);
    __decorate([
        Input('dragStart'),
        __metadata("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrDragStart", void 0);
    __decorate([
        Input('dragEnd'),
        __metadata("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrDragEnd", void 0);
    __decorate([
        Input('enableHover'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEnableHover", void 0);
    __decorate([
        Input('enableSelection'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEnableSelection", void 0);
    __decorate([
        Input('equalItemsWidth'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEqualItemsWidth", void 0);
    __decorate([
        Input('filterable'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrFilterable", void 0);
    __decorate([
        Input('filterHeight'),
        __metadata("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrFilterHeight", void 0);
    __decorate([
        Input('filterDelay'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrFilterDelay", void 0);
    __decorate([
        Input('filterPlaceHolder'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrFilterPlaceHolder", void 0);
    __decorate([
        Input('hasThreeStates'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrHasThreeStates", void 0);
    __decorate([
        Input('itemHeight'),
        __metadata("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrItemHeight", void 0);
    __decorate([
        Input('incrementalSearch'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrIncrementalSearch", void 0);
    __decorate([
        Input('incrementalSearchDelay'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrIncrementalSearchDelay", void 0);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrMultiple", void 0);
    __decorate([
        Input('multipleextended'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrMultipleextended", void 0);
    __decorate([
        Input('renderer'),
        __metadata("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrRenderer", void 0);
    __decorate([
        Input('rendered'),
        __metadata("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrRendered", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('selectedIndex'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrSelectedIndex", void 0);
    __decorate([
        Input('selectedIndexes'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrSelectedIndexes", void 0);
    __decorate([
        Input('source'),
        __metadata("design:type", Array)
    ], jqxListBoxComponent.prototype, "attrSource", void 0);
    __decorate([
        Input('scrollBarSize'),
        __metadata("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrScrollBarSize", void 0);
    __decorate([
        Input('searchMode'),
        __metadata("design:type", String)
    ], jqxListBoxComponent.prototype, "attrSearchMode", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxListBoxComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('valueMember'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrValueMember", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onBindingComplete", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onCheckChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onSelect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxListBoxComponent.prototype, "onUnselect", void 0);
    jqxListBoxComponent = __decorate([
        Component({
            selector: 'jqxListBox',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxListBoxComponent);
    return jqxListBoxComponent;
}()); //jqxListBoxComponent

var jqxListBoxModule = /** @class */ (function () {
    function jqxListBoxModule() {
    }
    jqxListBoxModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxListBoxComponent],
            exports: [jqxListBoxComponent]
        })
    ], jqxListBoxModule);
    return jqxListBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxListBoxComponent, jqxListBoxModule, ɵ0 };
