require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdragdrop');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdragdrop', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdragdrop = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDragDropComponent = /** @class */ (function () {
        function jqxDragDropComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
            // jqxDragDropComponent functions
            // jqxDragDropComponent events
            this.ondragstart = new core.EventEmitter();
            this.ondragend = new core.EventEmitter();
            this.ondragging = new core.EventEmitter();
            this.ondroptargetenter = new core.EventEmitter();
            this.ondroptargetleave = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
            { type: core.Component, args: [{
                        selector: 'jqxDragDrop',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxDragDropComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxDragDropComponent.propDecorators = {
            attrAppendTo: [{ type: core.Input, args: ['appendTo',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDistance: [{ type: core.Input, args: ['distance',] }],
            attrData: [{ type: core.Input, args: ['data',] }],
            attrDropAction: [{ type: core.Input, args: ['dropAction',] }],
            attrDropTarget: [{ type: core.Input, args: ['dropTarget',] }],
            attrDragZIndex: [{ type: core.Input, args: ['dragZIndex',] }],
            attrFeedback: [{ type: core.Input, args: ['feedback',] }],
            attrInitFeedback: [{ type: core.Input, args: ['initFeedback',] }],
            attrOpacity: [{ type: core.Input, args: ['opacity',] }],
            attrOnDragEnd: [{ type: core.Input, args: ['onDragEnd',] }],
            attrOnDrag: [{ type: core.Input, args: ['onDrag',] }],
            attrOnDragStart: [{ type: core.Input, args: ['onDragStart',] }],
            attrOnTargetDrop: [{ type: core.Input, args: ['onTargetDrop',] }],
            attrOnDropTargetEnter: [{ type: core.Input, args: ['onDropTargetEnter',] }],
            attrOnDropTargetLeave: [{ type: core.Input, args: ['onDropTargetLeave',] }],
            attrRestricter: [{ type: core.Input, args: ['restricter',] }],
            attrRevert: [{ type: core.Input, args: ['revert',] }],
            attrRevertDuration: [{ type: core.Input, args: ['revertDuration',] }],
            attrTolerance: [{ type: core.Input, args: ['tolerance',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            ondragstart: [{ type: core.Output }],
            ondragend: [{ type: core.Output }],
            ondragging: [{ type: core.Output }],
            ondroptargetenter: [{ type: core.Output }],
            ondroptargetleave: [{ type: core.Output }]
        };
        return jqxDragDropComponent;
    }()); //jqxDragDropComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDragDropModule = /** @class */ (function () {
        function jqxDragDropModule() {
        }
        jqxDragDropModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxDragDropComponent],
                        exports: [jqxDragDropComponent]
                    },] }
        ];
        return jqxDragDropModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxDragDropComponent = jqxDragDropComponent;
    exports.jqxDragDropModule = jqxDragDropModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

