import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxsortable from '../../jqwidgets/jqxsortable';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        this.host.on('activate', function (eventData) { _this.onActivate.emit(eventData); });
        this.host.on('beforeStop', function (eventData) { _this.onBeforeStop.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('deactivate', function (eventData) { _this.onDeactivate.emit(eventData); });
        this.host.on('out', function (eventData) { _this.onOut.emit(eventData); });
        this.host.on('over', function (eventData) { _this.onOver.emit(eventData); });
        this.host.on('receive', function (eventData) { _this.onReceive.emit(eventData); });
        this.host.on('remove', function (eventData) { _this.onRemove.emit(eventData); });
        this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
        this.host.on('start', function (eventData) { _this.onStart.emit(eventData); });
        this.host.on('stop', function (eventData) { _this.onStop.emit(eventData); });
        this.host.on('update', function (eventData) { _this.onUpdate.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxSortableModule = /** @class */ (function () {
    function jqxSortableModule() {
    }
    jqxSortableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxSortableComponent],
                    exports: [jqxSortableComponent]
                },] }
    ];
    return jqxSortableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxSortableComponent, jqxSortableModule };

