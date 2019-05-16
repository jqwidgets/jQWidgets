import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.ondragstart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.ondragend.emit(eventData); }));
        this.host.on('dragging', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.ondragging.emit(eventData); }));
        this.host.on('dropTargetEnter', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.ondroptargetenter.emit(eventData); }));
        this.host.on('dropTargetLeave', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.ondroptargetleave.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcmFnZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhkcmFnZHJvcC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4ZHJhZ2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXFDRyw4QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUM7OztRQXdSL1EsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXRSOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLDBDQUFXOzs7O0lB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LDhDQUF5Qzs7SUFDekMsOENBQTRDOztJQUM1Qyw0Q0FBd0M7O0lBQ3hDLGdEQUFpRTs7SUFDakUsMkNBQXNDOztJQUN0Qyw2Q0FBOEM7O0lBQzlDLDBDQUFnSTs7SUFDaEksK0NBQXNHOztJQUN0RyxnREFBaUc7O0lBQ2pHLHFEQUE4RDs7SUFDOUQscURBQWdIOztJQUNoSCw4Q0FBcUQ7O0lBQ3JELDBDQUFxQzs7SUFDckMsa0RBQW9EOztJQUNwRCw2Q0FBMEM7O0lBQzFDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUU3QywwQ0FBaUQ7O0lBRWpELDBDQUF5Ujs7SUFDelIsb0NBQVU7O0lBQ1YsMENBQXVCOztJQUN2Qiw0Q0FBcUM7O0lBcVJyQywyQ0FBMkM7O0lBQzNDLHlDQUF5Qzs7SUFDekMsMENBQTBDOztJQUMxQyxpREFBaUQ7O0lBQ2pELGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4RHJhZ0Ryb3AnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeERyYWdEcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FwcGVuZFRvJykgYXR0ckFwcGVuZFRvOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaXN0YW5jZScpIGF0dHJEaXN0YW5jZTogbnVtYmVyO1xuICAgQElucHV0KCdkYXRhJykgYXR0ckRhdGE6IGFueTtcbiAgIEBJbnB1dCgnZHJvcEFjdGlvbicpIGF0dHJEcm9wQWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Ryb3BUYXJnZXQnKSBhdHRyRHJvcFRhcmdldDogYW55O1xuICAgQElucHV0KCdkcmFnWkluZGV4JykgYXR0ckRyYWdaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnZmVlZGJhY2snKSBhdHRyRmVlZGJhY2s6IHN0cmluZztcbiAgIEBJbnB1dCgnaW5pdEZlZWRiYWNrJykgYXR0ckluaXRGZWVkYmFjazogKGZlZWRiYWNrPzphbnkpID0+IHZvaWQ7XG4gICBASW5wdXQoJ29wYWNpdHknKSBhdHRyT3BhY2l0eTogbnVtYmVyO1xuICAgQElucHV0KCdvbkRyYWdFbmQnKSBhdHRyT25EcmFnRW5kOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdvbkRyYWcnKSBhdHRyT25EcmFnOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1snZGF0YSddLCBwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1sncG9zaXRpb24nXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25EcmFnU3RhcnQnKSBhdHRyT25EcmFnU3RhcnQ6IChwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1N0YXJ0Wydwb3NpdGlvbiddKSA9PiB2b2lkO1xuICAgQElucHV0KCdvblRhcmdldERyb3AnKSBhdHRyT25UYXJnZXREcm9wOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uVGFyZ2V0RHJvcFsnZGF0YSddKSA9PiB2b2lkO1xuICAgQElucHV0KCdvbkRyb3BUYXJnZXRFbnRlcicpIGF0dHJPbkRyb3BUYXJnZXRFbnRlcjogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25Ecm9wVGFyZ2V0TGVhdmUnKSBhdHRyT25Ecm9wVGFyZ2V0TGVhdmU6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25Ecm9wVGFyZ2V0TGVhdmVbJ2RhdGEnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVzdHJpY3RlcicpIGF0dHJSZXN0cmljdGVyOiBzdHJpbmcgfCBvYmplY3Q7XG4gICBASW5wdXQoJ3JldmVydCcpIGF0dHJSZXZlcnQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JldmVydER1cmF0aW9uJykgYXR0clJldmVydER1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ3RvbGVyYW5jZScpIGF0dHJUb2xlcmFuY2U6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhcHBlbmRUbycsJ2Rpc2FibGVkJywnZGlzdGFuY2UnLCdkYXRhJywnZHJvcEFjdGlvbicsJ2Ryb3BUYXJnZXQnLCdkcmFnWkluZGV4JywnZmVlZGJhY2snLCdpbml0RmVlZGJhY2snLCdvcGFjaXR5Jywnb25EcmFnRW5kJywnb25EcmFnJywnb25EcmFnU3RhcnQnLCdvblRhcmdldERyb3AnLCdvbkRyb3BUYXJnZXRFbnRlcicsJ29uRHJvcFRhcmdldExlYXZlJywncmVzdHJpY3RlcicsJ3JldmVydCcsJ3JldmVydER1cmF0aW9uJywndG9sZXJhbmNlJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeERyYWdEcm9wO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERyYWdEcm9wKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhEcmFnRHJvcCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeERyYWdEcm9wJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERyYWdEcm9wQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFwcGVuZFRvKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2FwcGVuZFRvJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnYXBwZW5kVG8nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3RhbmNlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Rpc3RhbmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGlzdGFuY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGF0YShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkYXRhJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGF0YScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wQWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Ryb3BBY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcm9wQWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BUYXJnZXQoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJvcFRhcmdldCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Ryb3BUYXJnZXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ1pJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcmFnWkluZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJhZ1pJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmZWVkYmFjayhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdmZWVkYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2ZlZWRiYWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluaXRGZWVkYmFjayhhcmc/OiAoZmVlZGJhY2s/OmFueSkgPT4gdm9pZCk6IChmZWVkYmFjaz86YW55KSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnaW5pdEZlZWRiYWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnaW5pdEZlZWRiYWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9wYWNpdHkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb3BhY2l0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29wYWNpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25EcmFnRW5kKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnRW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnRW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uRHJhZyhhcmc/OiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1snZGF0YSddLCBwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1sncG9zaXRpb24nXSkgPT4gdm9pZCk6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydkYXRhJ10sIHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydwb3NpdGlvbiddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uRHJhZ1N0YXJ0KGFyZz86IChwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1N0YXJ0Wydwb3NpdGlvbiddKSA9PiB2b2lkKTogKHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnU3RhcnRbJ3Bvc2l0aW9uJ10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWdTdGFydCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZ1N0YXJ0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uVGFyZ2V0RHJvcChhcmc/OiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uVGFyZ2V0RHJvcFsnZGF0YSddKSA9PiB2b2lkKTogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPblRhcmdldERyb3BbJ2RhdGEnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uVGFyZ2V0RHJvcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uVGFyZ2V0RHJvcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkRyb3BUYXJnZXRFbnRlcihhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJvcFRhcmdldEVudGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25Ecm9wVGFyZ2V0RW50ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25Ecm9wVGFyZ2V0TGVhdmUoYXJnPzogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyb3BUYXJnZXRMZWF2ZVsnZGF0YSddKSA9PiB2b2lkKTogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyb3BUYXJnZXRMZWF2ZVsnZGF0YSddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25Ecm9wVGFyZ2V0TGVhdmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyb3BUYXJnZXRMZWF2ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXN0cmljdGVyKGFyZz86IHN0cmluZyB8IG9iamVjdCk6IHN0cmluZyB8IG9iamVjdCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3Jlc3RyaWN0ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXN0cmljdGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJldmVydChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3JldmVydCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3JldmVydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXZlcnREdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXZlcnREdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3JldmVydER1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvbGVyYW5jZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCd0b2xlcmFuY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCd0b2xlcmFuY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhEcmFnRHJvcENvbXBvbmVudCBmdW5jdGlvbnNcblxuXG4gICAvLyBqcXhEcmFnRHJvcENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbmRyYWdzdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbmRyYWdlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25kcmFnZ2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbmRyb3B0YXJnZXRlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbmRyb3B0YXJnZXRsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdTdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uZHJhZ3N0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdFbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbmRyYWdlbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ2dpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbmRyYWdnaW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Ryb3BUYXJnZXRFbnRlcicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uZHJvcHRhcmdldGVudGVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Ryb3BUYXJnZXRMZWF2ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uZHJvcHRhcmdldGxlYXZlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhEcmFnRHJvcENvbXBvbmVudFxuIl19