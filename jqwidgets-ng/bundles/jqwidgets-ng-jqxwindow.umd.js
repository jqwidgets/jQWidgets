require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxwindow');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxwindow', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxwindow = {}),global.ng.core));
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
    var jqxWindowComponent = /** @class */ (function () {
        function jqxWindowComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
            // jqxWindowComponent events
            this.onClose = new core.EventEmitter();
            this.onCollapse = new core.EventEmitter();
            this.onExpand = new core.EventEmitter();
            this.onMoving = new core.EventEmitter();
            this.onMoved = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onResizing = new core.EventEmitter();
            this.onResized = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.ngOnInit = /**
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
        jqxWindowComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxWindow(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                                this.host.jqxWindow(this.properties[i], this[attrName]);
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
        jqxWindowComponent.prototype.arraysEqual = /**
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
        jqxWindowComponent.prototype.manageAttributes = /**
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
        jqxWindowComponent.prototype.moveClasses = /**
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
        jqxWindowComponent.prototype.moveStyles = /**
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
        jqxWindowComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxWindowComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.__updateRect__ = /**
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
        jqxWindowComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxWindow('setOptions', options);
            };
        // jqxWindowComponent properties
        // jqxWindowComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.autoOpen =
            // jqxWindowComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('autoOpen', arg);
                }
                else {
                    return this.host.jqxWindow('autoOpen');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.animationType = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('animationType', arg);
                }
                else {
                    return this.host.jqxWindow('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.collapsed = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('collapsed', arg);
                }
                else {
                    return this.host.jqxWindow('collapsed');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.collapseAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('collapseAnimationDuration', arg);
                }
                else {
                    return this.host.jqxWindow('collapseAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.content = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('content', arg);
                }
                else {
                    return this.host.jqxWindow('content');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.closeAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('closeAnimationDuration', arg);
                }
                else {
                    return this.host.jqxWindow('closeAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.closeButtonSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('closeButtonSize', arg);
                }
                else {
                    return this.host.jqxWindow('closeButtonSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.closeButtonAction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('closeButtonAction', arg);
                }
                else {
                    return this.host.jqxWindow('closeButtonAction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.cancelButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('cancelButton', arg);
                }
                else {
                    return this.host.jqxWindow('cancelButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.dragArea = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('dragArea', arg);
                }
                else {
                    return this.host.jqxWindow('dragArea');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.draggable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('draggable', arg);
                }
                else {
                    return this.host.jqxWindow('draggable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('disabled', arg);
                }
                else {
                    return this.host.jqxWindow('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('height', arg);
                }
                else {
                    return this.host.jqxWindow('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('initContent', arg);
                }
                else {
                    return this.host.jqxWindow('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.isModal = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('isModal', arg);
                }
                else {
                    return this.host.jqxWindow('isModal');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.keyboardCloseKey = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('keyboardCloseKey', arg);
                }
                else {
                    return this.host.jqxWindow('keyboardCloseKey');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.keyboardNavigation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('keyboardNavigation', arg);
                }
                else {
                    return this.host.jqxWindow('keyboardNavigation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.minHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('minHeight', arg);
                }
                else {
                    return this.host.jqxWindow('minHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.maxHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('maxHeight', arg);
                }
                else {
                    return this.host.jqxWindow('maxHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.minWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('minWidth', arg);
                }
                else {
                    return this.host.jqxWindow('minWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.maxWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('maxWidth', arg);
                }
                else {
                    return this.host.jqxWindow('maxWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.modalOpacity = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('modalOpacity', arg);
                }
                else {
                    return this.host.jqxWindow('modalOpacity');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.modalZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('modalZIndex', arg);
                }
                else {
                    return this.host.jqxWindow('modalZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.modalBackgroundZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('modalBackgroundZIndex', arg);
                }
                else {
                    return this.host.jqxWindow('modalBackgroundZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.okButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('okButton', arg);
                }
                else {
                    return this.host.jqxWindow('okButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.position = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('position', arg);
                }
                else {
                    return this.host.jqxWindow('position');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('rtl', arg);
                }
                else {
                    return this.host.jqxWindow('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.resizable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('resizable', arg);
                }
                else {
                    return this.host.jqxWindow('resizable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.showAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('showAnimationDuration', arg);
                }
                else {
                    return this.host.jqxWindow('showAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.showCloseButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('showCloseButton', arg);
                }
                else {
                    return this.host.jqxWindow('showCloseButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.showCollapseButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('showCollapseButton', arg);
                }
                else {
                    return this.host.jqxWindow('showCollapseButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('theme', arg);
                }
                else {
                    return this.host.jqxWindow('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.title = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('title', arg);
                }
                else {
                    return this.host.jqxWindow('title');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('width', arg);
                }
                else {
                    return this.host.jqxWindow('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxWindowComponent.prototype.zIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxWindow('zIndex', arg);
                }
                else {
                    return this.host.jqxWindow('zIndex');
                }
            };
        // jqxWindowComponent functions
        // jqxWindowComponent functions
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.bringToFront =
            // jqxWindowComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxWindow('bringToFront');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('close');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.collapse = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('collapse');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.closeAll = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('closeAll');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('disable');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('destroy');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('enable');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.expand = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('expand');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('focus');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.isOpen = /**
         * @return {?}
         */
            function () {
                return this.host.jqxWindow('isOpen');
            };
        /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
        jqxWindowComponent.prototype.move = /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
            function (top, left) {
                this.host.jqxWindow('move', top, left);
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('open');
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                this.host.jqxWindow('hide');
            };
        /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
        jqxWindowComponent.prototype.resize = /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
            function (top, left) {
                this.host.jqxWindow('resize', top, left);
            };
        /**
         * @param {?} title
         * @return {?}
         */
        jqxWindowComponent.prototype.setTitle = /**
         * @param {?} title
         * @return {?}
         */
            function (title) {
                this.host.jqxWindow('setTitle', title);
            };
        /**
         * @param {?} content
         * @return {?}
         */
        jqxWindowComponent.prototype.setContent = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                this.host.jqxWindow('setContent', content);
            };
        /**
         * @return {?}
         */
        jqxWindowComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
                this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
                this.host.on('moving', function (eventData) { _this.onMoving.emit(eventData); });
                this.host.on('moved', function (eventData) { _this.onMoved.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('resizing', function (eventData) { _this.onResizing.emit(eventData); });
                this.host.on('resized', function (eventData) { _this.onResized.emit(eventData); });
            };
        jqxWindowComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxWindow',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxWindowComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxWindowComponent.propDecorators = {
            attrAutoOpen: [{ type: core.Input, args: ['autoOpen',] }],
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrCollapsed: [{ type: core.Input, args: ['collapsed',] }],
            attrCollapseAnimationDuration: [{ type: core.Input, args: ['collapseAnimationDuration',] }],
            attrContent: [{ type: core.Input, args: ['content',] }],
            attrCloseAnimationDuration: [{ type: core.Input, args: ['closeAnimationDuration',] }],
            attrCloseButtonSize: [{ type: core.Input, args: ['closeButtonSize',] }],
            attrCloseButtonAction: [{ type: core.Input, args: ['closeButtonAction',] }],
            attrCancelButton: [{ type: core.Input, args: ['cancelButton',] }],
            attrDragArea: [{ type: core.Input, args: ['dragArea',] }],
            attrDraggable: [{ type: core.Input, args: ['draggable',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrIsModal: [{ type: core.Input, args: ['isModal',] }],
            attrKeyboardCloseKey: [{ type: core.Input, args: ['keyboardCloseKey',] }],
            attrKeyboardNavigation: [{ type: core.Input, args: ['keyboardNavigation',] }],
            attrMinHeight: [{ type: core.Input, args: ['minHeight',] }],
            attrMaxHeight: [{ type: core.Input, args: ['maxHeight',] }],
            attrMinWidth: [{ type: core.Input, args: ['minWidth',] }],
            attrMaxWidth: [{ type: core.Input, args: ['maxWidth',] }],
            attrModalOpacity: [{ type: core.Input, args: ['modalOpacity',] }],
            attrModalZIndex: [{ type: core.Input, args: ['modalZIndex',] }],
            attrModalBackgroundZIndex: [{ type: core.Input, args: ['modalBackgroundZIndex',] }],
            attrOkButton: [{ type: core.Input, args: ['okButton',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrResizable: [{ type: core.Input, args: ['resizable',] }],
            attrShowAnimationDuration: [{ type: core.Input, args: ['showAnimationDuration',] }],
            attrShowCloseButton: [{ type: core.Input, args: ['showCloseButton',] }],
            attrShowCollapseButton: [{ type: core.Input, args: ['showCollapseButton',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTitle: [{ type: core.Input, args: ['title',] }],
            attrZIndex: [{ type: core.Input, args: ['zIndex',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onCollapse: [{ type: core.Output }],
            onExpand: [{ type: core.Output }],
            onMoving: [{ type: core.Output }],
            onMoved: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onResizing: [{ type: core.Output }],
            onResized: [{ type: core.Output }]
        };
        return jqxWindowComponent;
    }()); //jqxWindowComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxWindowModule = /** @class */ (function () {
        function jqxWindowModule() {
        }
        jqxWindowModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxWindowComponent],
                        exports: [jqxWindowComponent]
                    },] }
        ];
        return jqxWindowModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxWindowComponent = jqxWindowComponent;
    exports.jqxWindowModule = jqxWindowModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

