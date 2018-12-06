import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDragDropComponent = /** @class */ (function () {
    function jqxDragDropComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
        // jqxDragDropComponent functions
        // jqxDragDropComponent events
        this.ondragstart = new EventEmitter();
        this.ondragend = new EventEmitter();
        this.ondragging = new EventEmitter();
        this.ondroptargetenter = new EventEmitter();
        this.ondroptargetleave = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDragDropComponent.prototype.ngOnInit = /**
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
    jqxDragDropComponent.prototype.ngOnChanges = /**
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxDragDropComponent.prototype.arraysEqual = /**
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
    jqxDragDropComponent.prototype.manageAttributes = /**
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
    jqxDragDropComponent.prototype.moveClasses = /**
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
    jqxDragDropComponent.prototype.moveStyles = /**
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
    jqxDragDropComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDragDropComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDragDropComponent.prototype.__updateRect__ = /**
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
    jqxDragDropComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDragDrop('setOptions', options);
    };
    // jqxDragDropComponent properties
    // jqxDragDropComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.appendTo = 
    // jqxDragDropComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.distance = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.data = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.dropAction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.dropTarget = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.dragZIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.feedback = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.initFeedback = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.opacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onDragEnd = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onDrag = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onDragStart = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onTargetDrop = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onDropTargetEnter = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.onDropTargetLeave = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.restricter = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.revert = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.revertDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDragDropComponent.prototype.tolerance = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    };
    /**
     * @return {?}
     */
    jqxDragDropComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('dragStart', function (eventData) { _this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.ondragend.emit(eventData); });
        this.host.on('dragging', function (eventData) { _this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', function (eventData) { _this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', function (eventData) { _this.ondroptargetleave.emit(eventData); });
    };
    jqxDragDropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDragDrop',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDragDropComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDragDropComponent.propDecorators = {
        attrAppendTo: [{ type: Input, args: ['appendTo',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDistance: [{ type: Input, args: ['distance',] }],
        attrData: [{ type: Input, args: ['data',] }],
        attrDropAction: [{ type: Input, args: ['dropAction',] }],
        attrDropTarget: [{ type: Input, args: ['dropTarget',] }],
        attrDragZIndex: [{ type: Input, args: ['dragZIndex',] }],
        attrFeedback: [{ type: Input, args: ['feedback',] }],
        attrInitFeedback: [{ type: Input, args: ['initFeedback',] }],
        attrOpacity: [{ type: Input, args: ['opacity',] }],
        attrOnDragEnd: [{ type: Input, args: ['onDragEnd',] }],
        attrOnDrag: [{ type: Input, args: ['onDrag',] }],
        attrOnDragStart: [{ type: Input, args: ['onDragStart',] }],
        attrOnTargetDrop: [{ type: Input, args: ['onTargetDrop',] }],
        attrOnDropTargetEnter: [{ type: Input, args: ['onDropTargetEnter',] }],
        attrOnDropTargetLeave: [{ type: Input, args: ['onDropTargetLeave',] }],
        attrRestricter: [{ type: Input, args: ['restricter',] }],
        attrRevert: [{ type: Input, args: ['revert',] }],
        attrRevertDuration: [{ type: Input, args: ['revertDuration',] }],
        attrTolerance: [{ type: Input, args: ['tolerance',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        ondragstart: [{ type: Output }],
        ondragend: [{ type: Output }],
        ondragging: [{ type: Output }],
        ondroptargetenter: [{ type: Output }],
        ondroptargetleave: [{ type: Output }]
    };
    return jqxDragDropComponent;
}()); //jqxDragDropComponent
export { jqxDragDropComponent };
if (false) {
    /** @type {?} */
    jqxDragDropComponent.prototype.attrAppendTo;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDistance;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrData;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDropAction;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDropTarget;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDragZIndex;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrFeedback;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrInitFeedback;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDragEnd;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDrag;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDragStart;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnTargetDrop;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDropTargetEnter;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDropTargetLeave;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRestricter;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRevert;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRevertDuration;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrTolerance;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDragDropComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDragDropComponent.prototype.properties;
    /** @type {?} */
    jqxDragDropComponent.prototype.host;
    /** @type {?} */
    jqxDragDropComponent.prototype.elementRef;
    /** @type {?} */
    jqxDragDropComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragstart;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragend;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragging;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondroptargetenter;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondroptargetleave;
    /* Skipping unhandled member: ;*/
}
