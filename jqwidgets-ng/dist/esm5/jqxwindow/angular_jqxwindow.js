import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxWindowComponent = /** @class */ (function () {
    function jqxWindowComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
        // jqxWindowComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onMoving = new EventEmitter();
        this.onMoved = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onResizing = new EventEmitter();
        this.onResized = new EventEmitter();
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
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClose.emit(eventData); }));
        this.host.on('collapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapse.emit(eventData); }));
        this.host.on('expand', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpand.emit(eventData); }));
        this.host.on('moving', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onMoving.emit(eventData); }));
        this.host.on('moved', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onMoved.emit(eventData); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOpen.emit(eventData); }));
        this.host.on('resizing', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onResizing.emit(eventData); }));
        this.host.on('resized', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onResized.emit(eventData); }));
    };
    jqxWindowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxWindow',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxWindowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxWindowComponent.propDecorators = {
        attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrCollapsed: [{ type: Input, args: ['collapsed',] }],
        attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
        attrContent: [{ type: Input, args: ['content',] }],
        attrCloseAnimationDuration: [{ type: Input, args: ['closeAnimationDuration',] }],
        attrCloseButtonSize: [{ type: Input, args: ['closeButtonSize',] }],
        attrCloseButtonAction: [{ type: Input, args: ['closeButtonAction',] }],
        attrCancelButton: [{ type: Input, args: ['cancelButton',] }],
        attrDragArea: [{ type: Input, args: ['dragArea',] }],
        attrDraggable: [{ type: Input, args: ['draggable',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrIsModal: [{ type: Input, args: ['isModal',] }],
        attrKeyboardCloseKey: [{ type: Input, args: ['keyboardCloseKey',] }],
        attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
        attrMinHeight: [{ type: Input, args: ['minHeight',] }],
        attrMaxHeight: [{ type: Input, args: ['maxHeight',] }],
        attrMinWidth: [{ type: Input, args: ['minWidth',] }],
        attrMaxWidth: [{ type: Input, args: ['maxWidth',] }],
        attrModalOpacity: [{ type: Input, args: ['modalOpacity',] }],
        attrModalZIndex: [{ type: Input, args: ['modalZIndex',] }],
        attrModalBackgroundZIndex: [{ type: Input, args: ['modalBackgroundZIndex',] }],
        attrOkButton: [{ type: Input, args: ['okButton',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrResizable: [{ type: Input, args: ['resizable',] }],
        attrShowAnimationDuration: [{ type: Input, args: ['showAnimationDuration',] }],
        attrShowCloseButton: [{ type: Input, args: ['showCloseButton',] }],
        attrShowCollapseButton: [{ type: Input, args: ['showCollapseButton',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrTitle: [{ type: Input, args: ['title',] }],
        attrZIndex: [{ type: Input, args: ['zIndex',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onCollapse: [{ type: Output }],
        onExpand: [{ type: Output }],
        onMoving: [{ type: Output }],
        onMoved: [{ type: Output }],
        onOpen: [{ type: Output }],
        onResizing: [{ type: Output }],
        onResized: [{ type: Output }]
    };
    return jqxWindowComponent;
}()); //jqxWindowComponent
export { jqxWindowComponent };
if (false) {
    /** @type {?} */
    jqxWindowComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxWindowComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCollapsed;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCollapseAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrContent;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseButtonSize;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseButtonAction;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCancelButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDragArea;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDraggable;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxWindowComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxWindowComponent.prototype.attrIsModal;
    /** @type {?} */
    jqxWindowComponent.prototype.attrKeyboardCloseKey;
    /** @type {?} */
    jqxWindowComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMinHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMaxHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMinWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMaxWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalOpacity;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalBackgroundZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrOkButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrPosition;
    /** @type {?} */
    jqxWindowComponent.prototype.attrRtl;
    /** @type {?} */
    jqxWindowComponent.prototype.attrResizable;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowCloseButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowCollapseButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrTheme;
    /** @type {?} */
    jqxWindowComponent.prototype.attrTitle;
    /** @type {?} */
    jqxWindowComponent.prototype.attrZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.autoCreate;
    /** @type {?} */
    jqxWindowComponent.prototype.properties;
    /** @type {?} */
    jqxWindowComponent.prototype.host;
    /** @type {?} */
    jqxWindowComponent.prototype.elementRef;
    /** @type {?} */
    jqxWindowComponent.prototype.widgetObject;
    /** @type {?} */
    jqxWindowComponent.prototype.onClose;
    /** @type {?} */
    jqxWindowComponent.prototype.onCollapse;
    /** @type {?} */
    jqxWindowComponent.prototype.onExpand;
    /** @type {?} */
    jqxWindowComponent.prototype.onMoving;
    /** @type {?} */
    jqxWindowComponent.prototype.onMoved;
    /** @type {?} */
    jqxWindowComponent.prototype.onOpen;
    /** @type {?} */
    jqxWindowComponent.prototype.onResizing;
    /** @type {?} */
    jqxWindowComponent.prototype.onResized;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh3aW5kb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4d2luZG93LyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXh3aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQWtERyw0QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQywyQkFBMkIsRUFBQyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsRUFBQyxvQkFBb0IsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQzs7UUErY2hnQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxZQUFZ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QyxVQUFVOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNwRixDQUFDOztnQkE5Z0JILFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLHNDQUFzQztpQkFDbkQ7Ozs7Z0JBTmdELFVBQVU7OzsrQkFVdkQsS0FBSyxTQUFDLFVBQVU7b0NBQ2hCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMsV0FBVztnREFDakIsS0FBSyxTQUFDLDJCQUEyQjs4QkFDakMsS0FBSyxTQUFDLFNBQVM7NkNBQ2YsS0FBSyxTQUFDLHdCQUF3QjtzQ0FDOUIsS0FBSyxTQUFDLGlCQUFpQjt3Q0FDdkIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxVQUFVO2dDQUNoQixLQUFLLFNBQUMsV0FBVzsrQkFDakIsS0FBSyxTQUFDLFVBQVU7a0NBQ2hCLEtBQUssU0FBQyxhQUFhOzhCQUNuQixLQUFLLFNBQUMsU0FBUzt1Q0FDZixLQUFLLFNBQUMsa0JBQWtCO3lDQUN4QixLQUFLLFNBQUMsb0JBQW9CO2dDQUMxQixLQUFLLFNBQUMsV0FBVztnQ0FDakIsS0FBSyxTQUFDLFdBQVc7K0JBQ2pCLEtBQUssU0FBQyxVQUFVOytCQUNoQixLQUFLLFNBQUMsVUFBVTttQ0FDaEIsS0FBSyxTQUFDLGNBQWM7a0NBQ3BCLEtBQUssU0FBQyxhQUFhOzRDQUNuQixLQUFLLFNBQUMsdUJBQXVCOytCQUM3QixLQUFLLFNBQUMsVUFBVTsrQkFDaEIsS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxLQUFLO2dDQUNYLEtBQUssU0FBQyxXQUFXOzRDQUNqQixLQUFLLFNBQUMsdUJBQXVCO3NDQUM3QixLQUFLLFNBQUMsaUJBQWlCO3lDQUN2QixLQUFLLFNBQUMsb0JBQW9COzRCQUMxQixLQUFLLFNBQUMsT0FBTzs0QkFDYixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTswQkFpZG5CLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07MEJBQ04sTUFBTTt5QkFDTixNQUFNOzZCQUNOLE1BQU07NEJBQ04sTUFBTTs7SUFhVix5QkFBQztDQUFBLEFBaGhCRCxJQWdoQkMsQ0FBQyxvQkFBb0I7U0EzZ0JULGtCQUFrQjs7O0lBRTVCLDBDQUF5Qzs7SUFDekMsK0NBQWtEOztJQUNsRCwyQ0FBMkM7O0lBQzNDLDJEQUEwRTs7SUFDMUUseUNBQXNDOztJQUN0Qyx3REFBb0U7O0lBQ3BFLGlEQUFzRDs7SUFDdEQsbURBQTBEOztJQUMxRCw4Q0FBNkM7O0lBQzdDLDBDQUEwRDs7SUFDMUQsMkNBQTJDOztJQUMzQywwQ0FBeUM7O0lBQ3pDLDZDQUFrRDs7SUFDbEQseUNBQXVDOztJQUN2QyxrREFBaUU7O0lBQ2pFLG9EQUE2RDs7SUFDN0QsMkNBQW1EOztJQUNuRCwyQ0FBbUQ7O0lBQ25ELDBDQUFpRDs7SUFDakQsMENBQWlEOztJQUNqRCw4Q0FBeUQ7O0lBQ3pELDZDQUE4Qzs7SUFDOUMsdURBQWtFOztJQUNsRSwwQ0FBcUM7O0lBQ3JDLDBDQUE4Qzs7SUFDOUMscUNBQStCOztJQUMvQiwyQ0FBMkM7O0lBQzNDLHVEQUFrRTs7SUFDbEUsaURBQXVEOztJQUN2RCxvREFBNkQ7O0lBQzdELHVDQUFrQzs7SUFDbEMsdUNBQWtDOztJQUNsQyx3Q0FBb0M7O0lBQ3BDLHVDQUEyQzs7SUFDM0Msd0NBQTZDOztJQUU3Qyx3Q0FBaUQ7O0lBRWpELHdDQUEwZ0I7O0lBQzFnQixrQ0FBVTs7SUFDVix3Q0FBdUI7O0lBQ3ZCLDBDQUFtQzs7SUE0Y25DLHFDQUF1Qzs7SUFDdkMsd0NBQTBDOztJQUMxQyxzQ0FBd0M7O0lBQ3hDLHNDQUF3Qzs7SUFDeEMscUNBQXVDOztJQUN2QyxvQ0FBc0M7O0lBQ3RDLHdDQUEwQzs7SUFDMUMsdUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhXaW5kb3cnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFdpbmRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhdXRvT3BlbicpIGF0dHJBdXRvT3BlbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYW5pbWF0aW9uVHlwZScpIGF0dHJBbmltYXRpb25UeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2NvbGxhcHNlZCcpIGF0dHJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQ29sbGFwc2VBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdjb250ZW50JykgYXR0ckNvbnRlbnQ6IHN0cmluZztcbiAgIEBJbnB1dCgnY2xvc2VBbmltYXRpb25EdXJhdGlvbicpIGF0dHJDbG9zZUFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2Nsb3NlQnV0dG9uU2l6ZScpIGF0dHJDbG9zZUJ1dHRvblNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgnY2xvc2VCdXR0b25BY3Rpb24nKSBhdHRyQ2xvc2VCdXR0b25BY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgnY2FuY2VsQnV0dG9uJykgYXR0ckNhbmNlbEJ1dHRvbjogYW55O1xuICAgQElucHV0KCdkcmFnQXJlYScpIGF0dHJEcmFnQXJlYToganF3aWRnZXRzLldpbmRvd0RyYWdBcmVhO1xuICAgQElucHV0KCdkcmFnZ2FibGUnKSBhdHRyRHJhZ2dhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaW5pdENvbnRlbnQnKSBhdHRySW5pdENvbnRlbnQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ2lzTW9kYWwnKSBhdHRySXNNb2RhbDogYm9vbGVhbjtcbiAgIEBJbnB1dCgna2V5Ym9hcmRDbG9zZUtleScpIGF0dHJLZXlib2FyZENsb3NlS2V5OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2tleWJvYXJkTmF2aWdhdGlvbicpIGF0dHJLZXlib2FyZE5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ21pbkhlaWdodCcpIGF0dHJNaW5IZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnbWF4SGVpZ2h0JykgYXR0ck1heEhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdtaW5XaWR0aCcpIGF0dHJNaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtYXhXaWR0aCcpIGF0dHJNYXhXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtb2RhbE9wYWNpdHknKSBhdHRyTW9kYWxPcGFjaXR5OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21vZGFsWkluZGV4JykgYXR0ck1vZGFsWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ21vZGFsQmFja2dyb3VuZFpJbmRleCcpIGF0dHJNb2RhbEJhY2tncm91bmRaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnb2tCdXR0b24nKSBhdHRyT2tCdXR0b246IGFueTtcbiAgIEBJbnB1dCgncG9zaXRpb24nKSBhdHRyUG9zaXRpb246IHN0cmluZyB8IGFueTtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVzaXphYmxlJykgYXR0clJlc2l6YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0FuaW1hdGlvbkR1cmF0aW9uJykgYXR0clNob3dBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdzaG93Q2xvc2VCdXR0b24nKSBhdHRyU2hvd0Nsb3NlQnV0dG9uOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Q29sbGFwc2VCdXR0b24nKSBhdHRyU2hvd0NvbGxhcHNlQnV0dG9uOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0aXRsZScpIGF0dHJUaXRsZTogc3RyaW5nO1xuICAgQElucHV0KCd6SW5kZXgnKSBhdHRyWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXV0b09wZW4nLCdhbmltYXRpb25UeXBlJywnY29sbGFwc2VkJywnY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbicsJ2NvbnRlbnQnLCdjbG9zZUFuaW1hdGlvbkR1cmF0aW9uJywnY2xvc2VCdXR0b25TaXplJywnY2xvc2VCdXR0b25BY3Rpb24nLCdjYW5jZWxCdXR0b24nLCdkcmFnQXJlYScsJ2RyYWdnYWJsZScsJ2Rpc2FibGVkJywnaGVpZ2h0JywnaW5pdENvbnRlbnQnLCdpc01vZGFsJywna2V5Ym9hcmRDbG9zZUtleScsJ2tleWJvYXJkTmF2aWdhdGlvbicsJ21pbkhlaWdodCcsJ21heEhlaWdodCcsJ21pbldpZHRoJywnbWF4V2lkdGgnLCdtb2RhbE9wYWNpdHknLCdtb2RhbFpJbmRleCcsJ21vZGFsQmFja2dyb3VuZFpJbmRleCcsJ29rQnV0dG9uJywncG9zaXRpb24nLCdydGwnLCdyZXNpemFibGUnLCdzaG93QW5pbWF0aW9uRHVyYXRpb24nLCdzaG93Q2xvc2VCdXR0b24nLCdzaG93Q29sbGFwc2VCdXR0b24nLCd0aGVtZScsJ3RpdGxlJywnd2lkdGgnLCd6SW5kZXgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4V2luZG93O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFdpbmRvdyh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFdpbmRvdyh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhXaW5kb3cnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFdpbmRvd0NvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhdXRvT3Blbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdhdXRvT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdhdXRvT3BlbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25UeXBlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sbGFwc2VkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NvbGxhcHNlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjb2xsYXBzZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRlbnQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NvbnRlbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnY29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZUFuaW1hdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUFuaW1hdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VCdXR0b25TaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUJ1dHRvblNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnY2xvc2VCdXR0b25TaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsb3NlQnV0dG9uQWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUJ1dHRvbkFjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUJ1dHRvbkFjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjYW5jZWxCdXR0b24oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NhbmNlbEJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjYW5jZWxCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ0FyZWEoYXJnPzoganF3aWRnZXRzLldpbmRvd0RyYWdBcmVhKToganF3aWRnZXRzLldpbmRvd0RyYWdBcmVhIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2RyYWdBcmVhJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2RyYWdBcmVhJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdnYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdkcmFnZ2FibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnZHJhZ2dhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0Q29udGVudChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdpbml0Q29udGVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdpbml0Q29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpc01vZGFsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2lzTW9kYWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnaXNNb2RhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZENsb3NlS2V5KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdrZXlib2FyZENsb3NlS2V5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2tleWJvYXJkQ2xvc2VLZXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAga2V5Ym9hcmROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdrZXlib2FyZE5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluSGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtaW5IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbWluSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heEhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbWF4SGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21heEhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5XaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbWluV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbWluV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4V2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21heFdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21heFdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vZGFsT3BhY2l0eShhcmc/OiB1bmRlZmluZWQpOiB1bmRlZmluZWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbW9kYWxPcGFjaXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21vZGFsT3BhY2l0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb2RhbFpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbW9kYWxaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbW9kYWxaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbW9kYWxCYWNrZ3JvdW5kWkluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtb2RhbEJhY2tncm91bmRaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbW9kYWxCYWNrZ3JvdW5kWkluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9rQnV0dG9uKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdva0J1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdva0J1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3NpdGlvbihhcmc/OiBzdHJpbmcgfCBhbnkpOiBzdHJpbmcgfCBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygncG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygncG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzaXphYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3Jlc2l6YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdyZXNpemFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0FuaW1hdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93QW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnc2hvd0FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dDbG9zZUJ1dHRvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93Q2xvc2VCdXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnc2hvd0Nsb3NlQnV0dG9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dDb2xsYXBzZUJ1dHRvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93Q29sbGFwc2VCdXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnc2hvd0NvbGxhcHNlQnV0dG9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aXRsZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygndGl0bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygndGl0bGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnekluZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3pJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFdpbmRvd0NvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGJyaW5nVG9Gcm9udCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2JyaW5nVG9Gcm9udCcpO1xuICAgfVxuXG4gICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlJyk7XG4gICB9XG5cbiAgIGNvbGxhcHNlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY29sbGFwc2UnKTtcbiAgIH1cblxuICAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUFsbCcpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZGlzYWJsZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZGVzdHJveScpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdlbmFibGUnKTtcbiAgIH1cblxuICAgZXhwYW5kKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZXhwYW5kJyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZm9jdXMnKTtcbiAgIH1cblxuICAgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2lzT3BlbicpO1xuICAgfVxuXG4gICBtb3ZlKHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21vdmUnLCB0b3AsIGxlZnQpO1xuICAgfVxuXG4gICBvcGVuKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnb3BlbicpO1xuICAgfVxuXG4gICBoaWRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnaGlkZScpO1xuICAgfVxuXG4gICByZXNpemUodG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygncmVzaXplJywgdG9wLCBsZWZ0KTtcbiAgIH1cblxuICAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnc2V0VGl0bGUnLCB0aXRsZSk7XG4gICB9XG5cbiAgIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzZXRDb250ZW50JywgY29udGVudCk7XG4gICB9XG5cblxuICAgLy8ganF4V2luZG93Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbk1vdmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbk1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlc2l6aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVzaXplZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignbW92aW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Nb3ZpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignbW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk1vdmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ29wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVzaXppbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlc2l6aW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jlc2l6ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlc2l6ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFdpbmRvd0NvbXBvbmVudFxuIl19