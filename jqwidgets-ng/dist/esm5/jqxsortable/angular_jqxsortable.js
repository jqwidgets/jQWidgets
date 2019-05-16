import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxSortableComponent = /** @class */ (function () {
    function jqxSortableComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
        // jqxSortableComponent events
        this.onActivate = new EventEmitter();
        this.onBeforeStop = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onOut = new EventEmitter();
        this.onOver = new EventEmitter();
        this.onReceive = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onStart = new EventEmitter();
        this.onStop = new EventEmitter();
        this.onUpdate = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxSortableComponent.prototype.ngOnChanges = /**
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxSortableComponent.prototype.arraysEqual = /**
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
    jqxSortableComponent.prototype.manageAttributes = /**
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
    jqxSortableComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxSortableComponent.prototype.moveStyles = /**
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
    jqxSortableComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxSortableComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.__updateRect__ = /**
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
    jqxSortableComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxSortable('setOptions', options);
    };
    // jqxSortableComponent properties
    // jqxSortableComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.appendTo = 
    // jqxSortableComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('appendTo', arg);
        }
        else {
            return this.host.jqxSortable('appendTo');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.axis = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('axis', arg);
        }
        else {
            return this.host.jqxSortable('axis');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.cancel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cancel', arg);
        }
        else {
            return this.host.jqxSortable('cancel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.connectWith = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('connectWith', arg);
        }
        else {
            return this.host.jqxSortable('connectWith');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.containment = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('containment', arg);
        }
        else {
            return this.host.jqxSortable('containment');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.cursor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursor', arg);
        }
        else {
            return this.host.jqxSortable('cursor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.cursorAt = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursorAt', arg);
        }
        else {
            return this.host.jqxSortable('cursorAt');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.delay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('delay', arg);
        }
        else {
            return this.host.jqxSortable('delay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('disabled', arg);
        }
        else {
            return this.host.jqxSortable('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.distance = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('distance', arg);
        }
        else {
            return this.host.jqxSortable('distance');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.dropOnEmpty = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('dropOnEmpty', arg);
        }
        else {
            return this.host.jqxSortable('dropOnEmpty');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.forceHelperSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forceHelperSize', arg);
        }
        else {
            return this.host.jqxSortable('forceHelperSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.forcePlaceholderSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forcePlaceholderSize', arg);
        }
        else {
            return this.host.jqxSortable('forcePlaceholderSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.grid = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('grid', arg);
        }
        else {
            return this.host.jqxSortable('grid');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.handle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('handle', arg);
        }
        else {
            return this.host.jqxSortable('handle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.helper = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('helper', arg);
        }
        else {
            return this.host.jqxSortable('helper');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.items = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('items', arg);
        }
        else {
            return this.host.jqxSortable('items');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.opacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('opacity', arg);
        }
        else {
            return this.host.jqxSortable('opacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.placeholderShow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('placeholderShow', arg);
        }
        else {
            return this.host.jqxSortable('placeholderShow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.revert = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('revert', arg);
        }
        else {
            return this.host.jqxSortable('revert');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.scroll = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scroll', arg);
        }
        else {
            return this.host.jqxSortable('scroll');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.scrollSensitivity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSensitivity', arg);
        }
        else {
            return this.host.jqxSortable('scrollSensitivity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.scrollSpeed = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSpeed', arg);
        }
        else {
            return this.host.jqxSortable('scrollSpeed');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.tolerance = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('tolerance', arg);
        }
        else {
            return this.host.jqxSortable('tolerance');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSortableComponent.prototype.zIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('zIndex', arg);
        }
        else {
            return this.host.jqxSortable('zIndex');
        }
    };
    // jqxSortableComponent functions
    // jqxSortableComponent functions
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.cancelMethod = 
    // jqxSortableComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('cancelMethod');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('destroy');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('disable');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('enable');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('refresh');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.refreshPositions = /**
     * @return {?}
     */
    function () {
        this.host.jqxSortable('refreshPositions');
    };
    /**
     * @param {?} object
     * @return {?}
     */
    jqxSortableComponent.prototype.serialize = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return this.host.jqxSortable('serialize', object);
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return this.host.jqxSortable('toArray');
    };
    /**
     * @return {?}
     */
    jqxSortableComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('activate', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onActivate.emit(eventData); }));
        this.host.on('beforeStop', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBeforeStop.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
        this.host.on('deactivate', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDeactivate.emit(eventData); }));
        this.host.on('out', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOut.emit(eventData); }));
        this.host.on('over', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOver.emit(eventData); }));
        this.host.on('receive', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onReceive.emit(eventData); }));
        this.host.on('remove', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRemove.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSort.emit(eventData); }));
        this.host.on('start', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onStart.emit(eventData); }));
        this.host.on('stop', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onStop.emit(eventData); }));
        this.host.on('update', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUpdate.emit(eventData); }));
    };
    jqxSortableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxSortable',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxSortableComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxSortableComponent.propDecorators = {
        attrAppendTo: [{ type: Input, args: ['appendTo',] }],
        attrAxis: [{ type: Input, args: ['axis',] }],
        attrCancel: [{ type: Input, args: ['cancel',] }],
        attrConnectWith: [{ type: Input, args: ['connectWith',] }],
        attrContainment: [{ type: Input, args: ['containment',] }],
        attrCursor: [{ type: Input, args: ['cursor',] }],
        attrCursorAt: [{ type: Input, args: ['cursorAt',] }],
        attrDelay: [{ type: Input, args: ['delay',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDistance: [{ type: Input, args: ['distance',] }],
        attrDropOnEmpty: [{ type: Input, args: ['dropOnEmpty',] }],
        attrForceHelperSize: [{ type: Input, args: ['forceHelperSize',] }],
        attrForcePlaceholderSize: [{ type: Input, args: ['forcePlaceholderSize',] }],
        attrGrid: [{ type: Input, args: ['grid',] }],
        attrHandle: [{ type: Input, args: ['handle',] }],
        attrHelper: [{ type: Input, args: ['helper',] }],
        attrItems: [{ type: Input, args: ['items',] }],
        attrOpacity: [{ type: Input, args: ['opacity',] }],
        attrPlaceholderShow: [{ type: Input, args: ['placeholderShow',] }],
        attrRevert: [{ type: Input, args: ['revert',] }],
        attrScroll: [{ type: Input, args: ['scroll',] }],
        attrScrollSensitivity: [{ type: Input, args: ['scrollSensitivity',] }],
        attrScrollSpeed: [{ type: Input, args: ['scrollSpeed',] }],
        attrTolerance: [{ type: Input, args: ['tolerance',] }],
        attrZIndex: [{ type: Input, args: ['zIndex',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onActivate: [{ type: Output }],
        onBeforeStop: [{ type: Output }],
        onChange: [{ type: Output }],
        onDeactivate: [{ type: Output }],
        onOut: [{ type: Output }],
        onOver: [{ type: Output }],
        onReceive: [{ type: Output }],
        onRemove: [{ type: Output }],
        onSort: [{ type: Output }],
        onStart: [{ type: Output }],
        onStop: [{ type: Output }],
        onUpdate: [{ type: Output }]
    };
    return jqxSortableComponent;
}()); //jqxSortableComponent
export { jqxSortableComponent };
if (false) {
    /** @type {?} */
    jqxSortableComponent.prototype.attrAppendTo;
    /** @type {?} */
    jqxSortableComponent.prototype.attrAxis;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCancel;
    /** @type {?} */
    jqxSortableComponent.prototype.attrConnectWith;
    /** @type {?} */
    jqxSortableComponent.prototype.attrContainment;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCursor;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCursorAt;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDelay;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDistance;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDropOnEmpty;
    /** @type {?} */
    jqxSortableComponent.prototype.attrForceHelperSize;
    /** @type {?} */
    jqxSortableComponent.prototype.attrForcePlaceholderSize;
    /** @type {?} */
    jqxSortableComponent.prototype.attrGrid;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHandle;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHelper;
    /** @type {?} */
    jqxSortableComponent.prototype.attrItems;
    /** @type {?} */
    jqxSortableComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxSortableComponent.prototype.attrPlaceholderShow;
    /** @type {?} */
    jqxSortableComponent.prototype.attrRevert;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScroll;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScrollSensitivity;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScrollSpeed;
    /** @type {?} */
    jqxSortableComponent.prototype.attrTolerance;
    /** @type {?} */
    jqxSortableComponent.prototype.attrZIndex;
    /** @type {?} */
    jqxSortableComponent.prototype.attrWidth;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHeight;
    /** @type {?} */
    jqxSortableComponent.prototype.autoCreate;
    /** @type {?} */
    jqxSortableComponent.prototype.properties;
    /** @type {?} */
    jqxSortableComponent.prototype.host;
    /** @type {?} */
    jqxSortableComponent.prototype.elementRef;
    /** @type {?} */
    jqxSortableComponent.prototype.widgetObject;
    /** @type {?} */
    jqxSortableComponent.prototype.onActivate;
    /** @type {?} */
    jqxSortableComponent.prototype.onBeforeStop;
    /** @type {?} */
    jqxSortableComponent.prototype.onChange;
    /** @type {?} */
    jqxSortableComponent.prototype.onDeactivate;
    /** @type {?} */
    jqxSortableComponent.prototype.onOut;
    /** @type {?} */
    jqxSortableComponent.prototype.onOver;
    /** @type {?} */
    jqxSortableComponent.prototype.onReceive;
    /** @type {?} */
    jqxSortableComponent.prototype.onRemove;
    /** @type {?} */
    jqxSortableComponent.prototype.onSort;
    /** @type {?} */
    jqxSortableComponent.prototype.onStart;
    /** @type {?} */
    jqxSortableComponent.prototype.onStop;
    /** @type {?} */
    jqxSortableComponent.prototype.onUpdate;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhzb3J0YWJsZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4c29ydGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTBDRyw4QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLHNCQUFzQixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFFBQVEsQ0FBQyxDQUFDOztRQStWclQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQUcsSUFBSSxZ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QyxRQUFROzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNsRixDQUFDOztnQkE5WkgsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsc0NBQXNDO2lCQUNuRDs7OztnQkFOZ0QsVUFBVTs7OytCQVV2RCxLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLE1BQU07NkJBQ1osS0FBSyxTQUFDLFFBQVE7a0NBQ2QsS0FBSyxTQUFDLGFBQWE7a0NBQ25CLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsUUFBUTsrQkFDZCxLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLE9BQU87K0JBQ2IsS0FBSyxTQUFDLFVBQVU7K0JBQ2hCLEtBQUssU0FBQyxVQUFVO2tDQUNoQixLQUFLLFNBQUMsYUFBYTtzQ0FDbkIsS0FBSyxTQUFDLGlCQUFpQjsyQ0FDdkIsS0FBSyxTQUFDLHNCQUFzQjsyQkFDNUIsS0FBSyxTQUFDLE1BQU07NkJBQ1osS0FBSyxTQUFDLFFBQVE7NkJBQ2QsS0FBSyxTQUFDLFFBQVE7NEJBQ2QsS0FBSyxTQUFDLE9BQU87OEJBQ2IsS0FBSyxTQUFDLFNBQVM7c0NBQ2YsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLFFBQVE7NkJBQ2QsS0FBSyxTQUFDLFFBQVE7d0NBQ2QsS0FBSyxTQUFDLG1CQUFtQjtrQ0FDekIsS0FBSyxTQUFDLGFBQWE7Z0NBQ25CLEtBQUssU0FBQyxXQUFXOzZCQUNqQixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTs2QkFpV25CLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNOytCQUNOLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNOzRCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07eUJBQ04sTUFBTTsyQkFDTixNQUFNOztJQWlCViwyQkFBQztDQUFBLEFBaGFELElBZ2FDLENBQUMsc0JBQXNCO1NBM1pYLG9CQUFvQjs7O0lBRTlCLDRDQUF3Qzs7SUFDeEMsd0NBQXlDOztJQUN6QywwQ0FBb0M7O0lBQ3BDLCtDQUF3RDs7SUFDeEQsK0NBQXdEOztJQUN4RCwwQ0FBb0M7O0lBQ3BDLDRDQUE0RDs7SUFDNUQseUNBQWtDOztJQUNsQyw0Q0FBeUM7O0lBQ3pDLDRDQUF3Qzs7SUFDeEMsK0NBQStDOztJQUMvQyxtREFBdUQ7O0lBQ3ZELHdEQUFpRTs7SUFDakUsd0NBQXVDOztJQUN2QywwQ0FBOEM7O0lBQzlDLDBDQUFpRzs7SUFDakcseUNBQWtDOztJQUNsQywyQ0FBZ0Q7O0lBQ2hELG1EQUFnRTs7SUFDaEUsMENBQThDOztJQUM5QywwQ0FBcUM7O0lBQ3JDLHFEQUEwRDs7SUFDMUQsK0NBQThDOztJQUM5Qyw2Q0FBMEM7O0lBQzFDLDBDQUFvQzs7SUFDcEMseUNBQTJDOztJQUMzQywwQ0FBNkM7O0lBRTdDLDBDQUFpRDs7SUFFakQsMENBQStUOztJQUMvVCxvQ0FBVTs7SUFDViwwQ0FBdUI7O0lBQ3ZCLDRDQUFxQzs7SUE0VnJDLDBDQUEwQzs7SUFDMUMsNENBQTRDOztJQUM1Qyx3Q0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFDNUMscUNBQXFDOztJQUNyQyxzQ0FBc0M7O0lBQ3RDLHlDQUF5Qzs7SUFDekMsd0NBQXdDOztJQUN4QyxzQ0FBc0M7O0lBQ3RDLHVDQUF1Qzs7SUFDdkMsc0NBQXNDOztJQUN0Qyx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFNvcnRhYmxlJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhcHBlbmRUbycpIGF0dHJBcHBlbmRUbzogc3RyaW5nO1xuICAgQElucHV0KCdheGlzJykgYXR0ckF4aXM6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnY2FuY2VsJykgYXR0ckNhbmNlbDogc3RyaW5nO1xuICAgQElucHV0KCdjb25uZWN0V2l0aCcpIGF0dHJDb25uZWN0V2l0aDogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGFpbm1lbnQnKSBhdHRyQ29udGFpbm1lbnQ6IHN0cmluZyB8IGJvb2xlYW47XG4gICBASW5wdXQoJ2N1cnNvcicpIGF0dHJDdXJzb3I6IHN0cmluZztcbiAgIEBJbnB1dCgnY3Vyc29yQXQnKSBhdHRyQ3Vyc29yQXQ6IGpxd2lkZ2V0cy5Tb3J0YWJsZUN1cnNvckF0O1xuICAgQElucHV0KCdkZWxheScpIGF0dHJEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzdGFuY2UnKSBhdHRyRGlzdGFuY2U6IG51bWJlcjtcbiAgIEBJbnB1dCgnZHJvcE9uRW1wdHknKSBhdHRyRHJvcE9uRW1wdHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZvcmNlSGVscGVyU2l6ZScpIGF0dHJGb3JjZUhlbHBlclNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJykgYXR0ckZvcmNlUGxhY2Vob2xkZXJTaXplOiBib29sZWFuO1xuICAgQElucHV0KCdncmlkJykgYXR0ckdyaWQ6IEFycmF5PG51bWJlcj47XG4gICBASW5wdXQoJ2hhbmRsZScpIGF0dHJIYW5kbGU6IHN0cmluZyB8IGJvb2xlYW47XG4gICBASW5wdXQoJ2hlbHBlcicpIGF0dHJIZWxwZXI6IChvcmlnaW5hbEV2ZW50PzogYW55LCBjb250ZW50PzogYW55KSA9PiB2b2lkIHwgJ29yaWdpbmFsJyB8ICdjbG9uZSc7XG4gICBASW5wdXQoJ2l0ZW1zJykgYXR0ckl0ZW1zOiBzdHJpbmc7XG4gICBASW5wdXQoJ29wYWNpdHknKSBhdHRyT3BhY2l0eTogbnVtYmVyIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgncGxhY2Vob2xkZXJTaG93JykgYXR0clBsYWNlaG9sZGVyU2hvdzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgncmV2ZXJ0JykgYXR0clJldmVydDogbnVtYmVyIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsJykgYXR0clNjcm9sbDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsU2Vuc2l0aXZpdHknKSBhdHRyU2Nyb2xsU2Vuc2l0aXZpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2Nyb2xsU3BlZWQnKSBhdHRyU2Nyb2xsU3BlZWQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndG9sZXJhbmNlJykgYXR0clRvbGVyYW5jZTogc3RyaW5nO1xuICAgQElucHV0KCd6SW5kZXgnKSBhdHRyWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXBwZW5kVG8nLCdheGlzJywnY2FuY2VsJywnY29ubmVjdFdpdGgnLCdjb250YWlubWVudCcsJ2N1cnNvcicsJ2N1cnNvckF0JywnZGVsYXknLCdkaXNhYmxlZCcsJ2Rpc3RhbmNlJywnZHJvcE9uRW1wdHknLCdmb3JjZUhlbHBlclNpemUnLCdmb3JjZVBsYWNlaG9sZGVyU2l6ZScsJ2dyaWQnLCdoYW5kbGUnLCdoZWxwZXInLCdpdGVtcycsJ29wYWNpdHknLCdwbGFjZWhvbGRlclNob3cnLCdyZXZlcnQnLCdzY3JvbGwnLCdzY3JvbGxTZW5zaXRpdml0eScsJ3Njcm9sbFNwZWVkJywndG9sZXJhbmNlJywnekluZGV4J107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFNvcnRhYmxlO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhTb3J0YWJsZSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFNvcnRhYmxlJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFNvcnRhYmxlQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFwcGVuZFRvKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2FwcGVuZFRvJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnYXBwZW5kVG8nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXhpcyhhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdheGlzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnYXhpcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjYW5jZWwoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbm5lY3RXaXRoKGFyZz86IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY29ubmVjdFdpdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjb25uZWN0V2l0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250YWlubWVudChhcmc/OiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2NvbnRhaW5tZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY29udGFpbm1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3Vyc29yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2N1cnNvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2N1cnNvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdXJzb3JBdChhcmc/OiBqcXdpZGdldHMuU29ydGFibGVDdXJzb3JBdCk6IGpxd2lkZ2V0cy5Tb3J0YWJsZUN1cnNvckF0IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY3Vyc29yQXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjdXJzb3JBdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXN0YW5jZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXN0YW5jZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rpc3RhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BPbkVtcHR5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZHJvcE9uRW1wdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkcm9wT25FbXB0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3JjZUhlbHBlclNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZUhlbHBlclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZUhlbHBlclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yY2VQbGFjZWhvbGRlclNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZVBsYWNlaG9sZGVyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyaWQoYXJnPzogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdncmlkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZ3JpZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoYW5kbGUoYXJnPzogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoYW5kbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoYW5kbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVscGVyKGFyZz86IChvcmlnaW5hbEV2ZW50PzogYW55LCBjb250ZW50PzogYW55KSA9PiB2b2lkIHwgJ29yaWdpbmFsJyB8ICdjbG9uZScpOiAob3JpZ2luYWxFdmVudD86IGFueSwgY29udGVudD86IGFueSkgPT4gdm9pZCB8ICdvcmlnaW5hbCcgfCAnY2xvbmUnIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaGVscGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaGVscGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1zKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2l0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3BhY2l0eShhcmc/OiBudW1iZXIgfCBib29sZWFuKTogbnVtYmVyIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ29wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdvcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBsYWNlaG9sZGVyU2hvdyhhcmc/OiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3BsYWNlaG9sZGVyU2hvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3BsYWNlaG9sZGVyU2hvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXZlcnQoYXJnPzogbnVtYmVyIHwgYm9vbGVhbik6IG51bWJlciB8IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZXZlcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZXZlcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbFNlbnNpdGl2aXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3Njcm9sbFNlbnNpdGl2aXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsU2Vuc2l0aXZpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsU3BlZWQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsU3BlZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGxTcGVlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2xlcmFuY2UoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgndG9sZXJhbmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgndG9sZXJhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd6SW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd6SW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhTb3J0YWJsZUNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNhbmNlbE1ldGhvZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsTWV0aG9kJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGlzYWJsZScpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2VuYWJsZScpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlZnJlc2hQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3JlZnJlc2hQb3NpdGlvbnMnKTtcbiAgIH1cblxuICAgc2VyaWFsaXplKG9iamVjdDogdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3NlcmlhbGl6ZScsIG9iamVjdCk7XG4gICB9XG5cbiAgIHRvQXJyYXkoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd0b0FycmF5Jyk7XG4gICB9XG5cblxuICAgLy8ganF4U29ydGFibGVDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkJlZm9yZVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlY2VpdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TdG9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYWN0aXZhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFjdGl2YXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JlZm9yZVN0b3AnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJlZm9yZVN0b3AuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZGVhY3RpdmF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvdXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk91dC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvdmVyJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PdmVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JlY2VpdmUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlY2VpdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVtb3ZlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZW1vdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc3RvcCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU3RvcC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd1cGRhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVwZGF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4U29ydGFibGVDb21wb25lbnRcbiJdfQ==