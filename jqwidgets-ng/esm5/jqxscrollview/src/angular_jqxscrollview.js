import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollview from '../../jqwidgets/jqxscrollview';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxScrollViewComponent = /** @class */ (function () {
    function jqxScrollViewComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
        // jqxScrollViewComponent events
        this.onPageChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.ngOnInit = /**
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
    jqxScrollViewComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
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
    jqxScrollViewComponent.prototype.arraysEqual = /**
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
    jqxScrollViewComponent.prototype.manageAttributes = /**
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
    jqxScrollViewComponent.prototype.moveClasses = /**
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
    jqxScrollViewComponent.prototype.moveStyles = /**
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
    jqxScrollViewComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxScrollViewComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.__updateRect__ = /**
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
    jqxScrollViewComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxScrollView('setOptions', options);
    };
    // jqxScrollViewComponent properties
    // jqxScrollViewComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.animationDuration = 
    // jqxScrollViewComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('animationDuration', arg);
        }
        else {
            return this.host.jqxScrollView('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.bounceEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('bounceEnabled', arg);
        }
        else {
            return this.host.jqxScrollView('bounceEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.buttonsOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('buttonsOffset', arg);
        }
        else {
            return this.host.jqxScrollView('buttonsOffset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.currentPage = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('currentPage', arg);
        }
        else {
            return this.host.jqxScrollView('currentPage');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('disabled', arg);
        }
        else {
            return this.host.jqxScrollView('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('height', arg);
        }
        else {
            return this.host.jqxScrollView('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.moveThreshold = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('moveThreshold', arg);
        }
        else {
            return this.host.jqxScrollView('moveThreshold');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.showButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('showButtons', arg);
        }
        else {
            return this.host.jqxScrollView('showButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.slideShow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideShow', arg);
        }
        else {
            return this.host.jqxScrollView('slideShow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.slideDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideDuration', arg);
        }
        else {
            return this.host.jqxScrollView('slideDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('theme', arg);
        }
        else {
            return this.host.jqxScrollView('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollViewComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('width', arg);
        }
        else {
            return this.host.jqxScrollView('width');
        }
    };
    // jqxScrollViewComponent functions
    // jqxScrollViewComponent functions
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.back = 
    // jqxScrollViewComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxScrollView('back');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxScrollViewComponent.prototype.changePage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxScrollView('changePage', index);
    };
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.forward = /**
     * @return {?}
     */
    function () {
        this.host.jqxScrollView('forward');
    };
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxScrollView('refresh');
    };
    /**
     * @return {?}
     */
    jqxScrollViewComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
    };
    jqxScrollViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxScrollView',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxScrollViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxScrollViewComponent.propDecorators = {
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrBounceEnabled: [{ type: Input, args: ['bounceEnabled',] }],
        attrButtonsOffset: [{ type: Input, args: ['buttonsOffset',] }],
        attrCurrentPage: [{ type: Input, args: ['currentPage',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrMoveThreshold: [{ type: Input, args: ['moveThreshold',] }],
        attrShowButtons: [{ type: Input, args: ['showButtons',] }],
        attrSlideShow: [{ type: Input, args: ['slideShow',] }],
        attrSlideDuration: [{ type: Input, args: ['slideDuration',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onPageChanged: [{ type: Output }]
    };
    return jqxScrollViewComponent;
}()); //jqxScrollViewComponent
export { jqxScrollViewComponent };
if (false) {
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrBounceEnabled;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrButtonsOffset;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrCurrentPage;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrMoveThreshold;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrShowButtons;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrSlideShow;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrSlideDuration;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrTheme;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrWidth;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrHeight;
    /** @type {?} */
    jqxScrollViewComponent.prototype.autoCreate;
    /** @type {?} */
    jqxScrollViewComponent.prototype.properties;
    /** @type {?} */
    jqxScrollViewComponent.prototype.host;
    /** @type {?} */
    jqxScrollViewComponent.prototype.elementRef;
    /** @type {?} */
    jqxScrollViewComponent.prototype.widgetObject;
    /** @type {?} */
    jqxScrollViewComponent.prototype.onPageChanged;
    /* Skipping unhandled member: ;*/
}
