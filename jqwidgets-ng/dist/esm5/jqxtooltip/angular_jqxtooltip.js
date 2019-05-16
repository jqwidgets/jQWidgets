import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTooltipComponent = /** @class */ (function () {
    function jqxTooltipComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
        // jqxTooltipComponent events
        this.onClose = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpening = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTooltipComponent.prototype.ngOnInit = /**
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
    jqxTooltipComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
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
    jqxTooltipComponent.prototype.arraysEqual = /**
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
    jqxTooltipComponent.prototype.manageAttributes = /**
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
    jqxTooltipComponent.prototype.moveClasses = /**
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
    jqxTooltipComponent.prototype.moveStyles = /**
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
    jqxTooltipComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTooltipComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTooltipComponent.prototype.__updateRect__ = /**
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
    jqxTooltipComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTooltip('setOptions', options);
    };
    // jqxTooltipComponent properties
    // jqxTooltipComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.absolutePositionX = 
    // jqxTooltipComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionX', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionX');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.absolutePositionY = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionY', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionY');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.autoHide = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHide', arg);
        }
        else {
            return this.host.jqxTooltip('autoHide');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.autoHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('autoHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.animationShowDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationShowDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.animationHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.content = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('content', arg);
        }
        else {
            return this.host.jqxTooltip('content');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.closeOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('closeOnClick', arg);
        }
        else {
            return this.host.jqxTooltip('closeOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('disabled', arg);
        }
        else {
            return this.host.jqxTooltip('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.enableBrowserBoundsDetection = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxTooltip('enableBrowserBoundsDetection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('height', arg);
        }
        else {
            return this.host.jqxTooltip('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.left = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('left', arg);
        }
        else {
            return this.host.jqxTooltip('left');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.name = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('name', arg);
        }
        else {
            return this.host.jqxTooltip('name');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.opacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('opacity', arg);
        }
        else {
            return this.host.jqxTooltip('opacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('position', arg);
        }
        else {
            return this.host.jqxTooltip('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('rtl', arg);
        }
        else {
            return this.host.jqxTooltip('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.showDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showDelay', arg);
        }
        else {
            return this.host.jqxTooltip('showDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.showArrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showArrow', arg);
        }
        else {
            return this.host.jqxTooltip('showArrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.top = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('top', arg);
        }
        else {
            return this.host.jqxTooltip('top');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.trigger = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('trigger', arg);
        }
        else {
            return this.host.jqxTooltip('trigger');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('theme', arg);
        }
        else {
            return this.host.jqxTooltip('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTooltipComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('width', arg);
        }
        else {
            return this.host.jqxTooltip('width');
        }
    };
    // jqxTooltipComponent functions
    // jqxTooltipComponent functions
    /**
     * @param {?=} index
     * @return {?}
     */
    jqxTooltipComponent.prototype.close = 
    // jqxTooltipComponent functions
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTooltip('close', index);
    };
    /**
     * @return {?}
     */
    jqxTooltipComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxTooltip('destroy');
    };
    /**
     * @param {?=} left
     * @param {?=} top
     * @return {?}
     */
    jqxTooltipComponent.prototype.open = /**
     * @param {?=} left
     * @param {?=} top
     * @return {?}
     */
    function (left, top) {
        this.host.jqxTooltip('open', left, top);
    };
    /**
     * @return {?}
     */
    jqxTooltipComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxTooltip('refresh');
    };
    /**
     * @return {?}
     */
    jqxTooltipComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClose.emit(eventData); }));
        this.host.on('closing', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClosing.emit(eventData); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOpen.emit(eventData); }));
        this.host.on('opening', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOpening.emit(eventData); }));
    };
    jqxTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTooltip',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxTooltipComponent.propDecorators = {
        attrAbsolutePositionX: [{ type: Input, args: ['absolutePositionX',] }],
        attrAbsolutePositionY: [{ type: Input, args: ['absolutePositionY',] }],
        attrAutoHide: [{ type: Input, args: ['autoHide',] }],
        attrAutoHideDelay: [{ type: Input, args: ['autoHideDelay',] }],
        attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
        attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
        attrContent: [{ type: Input, args: ['content',] }],
        attrCloseOnClick: [{ type: Input, args: ['closeOnClick',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
        attrLeft: [{ type: Input, args: ['left',] }],
        attrName: [{ type: Input, args: ['name',] }],
        attrOpacity: [{ type: Input, args: ['opacity',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowDelay: [{ type: Input, args: ['showDelay',] }],
        attrShowArrow: [{ type: Input, args: ['showArrow',] }],
        attrTop: [{ type: Input, args: ['top',] }],
        attrTrigger: [{ type: Input, args: ['trigger',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onClosing: [{ type: Output }],
        onOpen: [{ type: Output }],
        onOpening: [{ type: Output }]
    };
    return jqxTooltipComponent;
}()); //jqxTooltipComponent
export { jqxTooltipComponent };
if (false) {
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAbsolutePositionX;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAbsolutePositionY;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAutoHide;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAutoHideDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrContent;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrCloseOnClick;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrLeft;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrName;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrPosition;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrShowDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTop;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTrigger;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTooltipComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTooltipComponent.prototype.properties;
    /** @type {?} */
    jqxTooltipComponent.prototype.host;
    /** @type {?} */
    jqxTooltipComponent.prototype.elementRef;
    /** @type {?} */
    jqxTooltipComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTooltipComponent.prototype.onClose;
    /** @type {?} */
    jqxTooltipComponent.prototype.onClosing;
    /** @type {?} */
    jqxTooltipComponent.prototype.onOpen;
    /** @type {?} */
    jqxTooltipComponent.prototype.onOpening;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0b29sdGlwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRvb2x0aXAvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXFDRyw2QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLDhCQUE4QixFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBdVR6UyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXBUdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJ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O0lBRTdDLHlDQUFpRDs7SUFFakQseUNBQW1UOztJQUNuVCxtQ0FBVTs7SUFDVix5Q0FBdUI7O0lBQ3ZCLDJDQUFvQzs7SUFvVHBDLHNDQUF1Qzs7SUFDdkMsd0NBQXlDOztJQUN6QyxxQ0FBc0M7O0lBQ3RDLHdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4VG9vbHRpcCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4VG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhYnNvbHV0ZVBvc2l0aW9uWCcpIGF0dHJBYnNvbHV0ZVBvc2l0aW9uWDogbnVtYmVyO1xuICAgQElucHV0KCdhYnNvbHV0ZVBvc2l0aW9uWScpIGF0dHJBYnNvbHV0ZVBvc2l0aW9uWTogbnVtYmVyO1xuICAgQElucHV0KCdhdXRvSGlkZScpIGF0dHJBdXRvSGlkZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b0hpZGVEZWxheScpIGF0dHJBdXRvSGlkZURlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvblNob3dEZWxheScpIGF0dHJBbmltYXRpb25TaG93RGVsYXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uSGlkZURlbGF5JykgYXR0ckFuaW1hdGlvbkhpZGVEZWxheTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdjb250ZW50JykgYXR0ckNvbnRlbnQ6IHN0cmluZztcbiAgIEBJbnB1dCgnY2xvc2VPbkNsaWNrJykgYXR0ckNsb3NlT25DbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKSBhdHRyRW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbGVmdCcpIGF0dHJMZWZ0OiBudW1iZXI7XG4gICBASW5wdXQoJ25hbWUnKSBhdHRyTmFtZTogc3RyaW5nO1xuICAgQElucHV0KCdvcGFjaXR5JykgYXR0ck9wYWNpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgncG9zaXRpb24nKSBhdHRyUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0RlbGF5JykgYXR0clNob3dEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdzaG93QXJyb3cnKSBhdHRyU2hvd0Fycm93OiBib29sZWFuO1xuICAgQElucHV0KCd0b3AnKSBhdHRyVG9wOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3RyaWdnZXInKSBhdHRyVHJpZ2dlcjogc3RyaW5nO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Fic29sdXRlUG9zaXRpb25YJywnYWJzb2x1dGVQb3NpdGlvblknLCdhdXRvSGlkZScsJ2F1dG9IaWRlRGVsYXknLCdhbmltYXRpb25TaG93RGVsYXknLCdhbmltYXRpb25IaWRlRGVsYXknLCdjb250ZW50JywnY2xvc2VPbkNsaWNrJywnZGlzYWJsZWQnLCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJywnaGVpZ2h0JywnbGVmdCcsJ25hbWUnLCdvcGFjaXR5JywncG9zaXRpb24nLCdydGwnLCdzaG93RGVsYXknLCdzaG93QXJyb3cnLCd0b3AnLCd0cmlnZ2VyJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhUb29sdGlwO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFRvb2x0aXAodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4VG9vbHRpcCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VG9vbHRpcCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFRvb2x0aXBDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWJzb2x1dGVQb3NpdGlvblgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdhYnNvbHV0ZVBvc2l0aW9uWCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnYWJzb2x1dGVQb3NpdGlvblgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWJzb2x1dGVQb3NpdGlvblkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdhYnNvbHV0ZVBvc2l0aW9uWScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnYWJzb2x1dGVQb3NpdGlvblknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0hpZGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ2F1dG9IaWRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdhdXRvSGlkZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvSGlkZURlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnYXV0b0hpZGVEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnYXV0b0hpZGVEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25TaG93RGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdhbmltYXRpb25TaG93RGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ2FuaW1hdGlvblNob3dEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25IaWRlRGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdhbmltYXRpb25IaWRlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ2FuaW1hdGlvbkhpZGVEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZW50KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnY29udGVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnY29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZU9uQ2xpY2soYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ2Nsb3NlT25DbGljaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnY2xvc2VPbkNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWZ0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnbGVmdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnbGVmdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBuYW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnbmFtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnbmFtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcGFjaXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnb3BhY2l0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnb3BhY2l0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ3Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdwb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ3Nob3dEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnc2hvd0RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dBcnJvdyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnc2hvd0Fycm93JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdzaG93QXJyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9wKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgndG9wJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUb29sdGlwKCd0b3AnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdHJpZ2dlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ3RyaWdnZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRvb2x0aXAoJ3RyaWdnZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VG9vbHRpcCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUb29sdGlwQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY2xvc2UoaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdjbG9zZScsIGluZGV4KTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUb29sdGlwKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIG9wZW4obGVmdD86IG51bWJlciwgdG9wPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgnb3BlbicsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VG9vbHRpcCgncmVmcmVzaCcpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFRvb2x0aXBDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbG9zaW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zaW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ29wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignb3BlbmluZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3BlbmluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4VG9vbHRpcENvbXBvbmVudFxuIl19