import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets/jqxpanel';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
import * as jqxtree from '../../jqwidgets/jqxtree';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxTreeComponent = /** @class */ (function () {
    function jqxTreeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxTreeComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxTreeComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxTreeComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTreeComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTreeComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxTreeComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTree('setOptions', options);
    };
    // jqxTreeComponent properties
    // jqxTreeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.animationShowDuration = 
    // jqxTreeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.animationHideDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.allowDrag = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.allowDrop = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.checkboxes = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.dragStart = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.dragEnd = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.easing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.hasThreeStates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.incrementalSearch = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.keyboardNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.toggleIndicatorSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.toggleMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    };
    // jqxTreeComponent functions
    // jqxTreeComponent functions
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    jqxTreeComponent.prototype.addBefore = 
    // jqxTreeComponent functions
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    function (item, id) {
        this.host.jqxTree('addBefore', item, id);
    };
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    jqxTreeComponent.prototype.addAfter = /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    function (item, id) {
        this.host.jqxTree('addAfter', item, id);
    };
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    jqxTreeComponent.prototype.addTo = /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    function (item, id) {
        this.host.jqxTree('addTo', item, id);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('clear');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.checkAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('checkAll');
    };
    /**
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    jqxTreeComponent.prototype.checkItem = /**
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    function (item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.collapseAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('collapseAll');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.collapseItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('collapseItem', item);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('destroy');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.disableItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('disableItem', item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.ensureVisible = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('ensureVisible', item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.enableItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('enableItem', item);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.enableAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('enableAll');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.expandAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('expandAll');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.expandItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('expandItem', item);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('focus');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.getCheckedItems = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTree('getCheckedItems');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.getUncheckedItems = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTree('getUncheckedItems');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTree('getItems');
    };
    /**
     * @param {?} element
     * @return {?}
     */
    jqxTreeComponent.prototype.getItem = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return this.host.jqxTree('getItem', element);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.getSelectedItem = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTree('getSelectedItem');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.getPrevItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.host.jqxTree('getPrevItem', item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.getNextItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.host.jqxTree('getNextItem', item);
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxTreeComponent.prototype.hitTest = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        return this.host.jqxTree('hitTest', left, top);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.removeItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('removeItem', item);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('render');
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('refresh');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('selectItem', item);
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.uncheckAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxTree('uncheckAll');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    jqxTreeComponent.prototype.uncheckItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxTree('uncheckItem', item);
    };
    /**
     * @param {?} item
     * @param {?} newItem
     * @return {?}
     */
    jqxTreeComponent.prototype.updateItem = /**
     * @param {?} item
     * @param {?} newItem
     * @return {?}
     */
    function (item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxTreeComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    };
    /**
     * @return {?}
     */
    jqxTreeComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('added', function (eventData) { _this.onAdded.emit(eventData); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
        this.host.on('removed', function (eventData) { _this.onRemoved.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
    };
    jqxTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTree',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTreeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxTreeComponent.propDecorators = {
        attrAnimationShowDuration: [{ type: Input, args: ['animationShowDuration',] }],
        attrAnimationHideDuration: [{ type: Input, args: ['animationHideDuration',] }],
        attrAllowDrag: [{ type: Input, args: ['allowDrag',] }],
        attrAllowDrop: [{ type: Input, args: ['allowDrop',] }],
        attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
        attrDragStart: [{ type: Input, args: ['dragStart',] }],
        attrDragEnd: [{ type: Input, args: ['dragEnd',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEasing: [{ type: Input, args: ['easing',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
        attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
        attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrToggleIndicatorSize: [{ type: Input, args: ['toggleIndicatorSize',] }],
        attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onAdded: [{ type: Output }],
        onCheckChange: [{ type: Output }],
        onCollapse: [{ type: Output }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onExpand: [{ type: Output }],
        onItemClick: [{ type: Output }],
        onRemoved: [{ type: Output }],
        onSelect: [{ type: Output }]
    };
    return jqxTreeComponent;
}()); //jqxTreeComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxTreeModule = /** @class */ (function () {
    function jqxTreeModule() {
    }
    jqxTreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxTreeComponent],
                    exports: [jqxTreeComponent]
                },] }
    ];
    return jqxTreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxTreeComponent, jqxTreeModule };

