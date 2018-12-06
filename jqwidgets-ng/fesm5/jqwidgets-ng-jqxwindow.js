import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxWindowModule = /** @class */ (function () {
    function jqxWindowModule() {
    }
    jqxWindowModule.decorators = [
        { type: NgModule, args: [{
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

export { jqxWindowComponent, jqxWindowModule };

