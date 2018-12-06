import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxpopover from '../../jqwidgets/jqxpopover';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxPopoverComponent = /** @class */ (function () {
    function jqxPopoverComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
        // jqxPopoverComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.ngOnInit = /**
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
    jqxPopoverComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                        this.host.jqxPopover(this.properties[i], this[attrName]);
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
    jqxPopoverComponent.prototype.arraysEqual = /**
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
    jqxPopoverComponent.prototype.manageAttributes = /**
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
    jqxPopoverComponent.prototype.moveClasses = /**
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
    jqxPopoverComponent.prototype.moveStyles = /**
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
    jqxPopoverComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPopoverComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.__updateRect__ = /**
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
    jqxPopoverComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxPopover('setOptions', options);
    };
    // jqxPopoverComponent properties
    // jqxPopoverComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.arrowOffsetValue = 
    // jqxPopoverComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('arrowOffsetValue', arg);
        }
        else {
            return this.host.jqxPopover('arrowOffsetValue');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.animationOpenDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationOpenDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.animationCloseDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationCloseDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.autoClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('autoClose', arg);
        }
        else {
            return this.host.jqxPopover('autoClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.animationType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationType', arg);
        }
        else {
            return this.host.jqxPopover('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('height', arg);
        }
        else {
            return this.host.jqxPopover('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('initContent', arg);
        }
        else {
            return this.host.jqxPopover('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.isModal = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('isModal', arg);
        }
        else {
            return this.host.jqxPopover('isModal');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.offset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('offset', arg);
        }
        else {
            return this.host.jqxPopover('offset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('position', arg);
        }
        else {
            return this.host.jqxPopover('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('rtl', arg);
        }
        else {
            return this.host.jqxPopover('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.selector = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('selector', arg);
        }
        else {
            return this.host.jqxPopover('selector');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.showArrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showArrow', arg);
        }
        else {
            return this.host.jqxPopover('showArrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.showCloseButton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showCloseButton', arg);
        }
        else {
            return this.host.jqxPopover('showCloseButton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('width', arg);
        }
        else {
            return this.host.jqxPopover('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.title = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('title', arg);
        }
        else {
            return this.host.jqxPopover('title');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPopoverComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('theme', arg);
        }
        else {
            return this.host.jqxPopover('theme');
        }
    };
    // jqxPopoverComponent functions
    // jqxPopoverComponent functions
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.close = 
    // jqxPopoverComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxPopover('close');
    };
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxPopover('destroy');
    };
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxPopover('open');
    };
    /**
     * @return {?}
     */
    jqxPopoverComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            _this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        });
    };
    jqxPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxPopover',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxPopoverComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxPopoverComponent.propDecorators = {
        attrArrowOffsetValue: [{ type: Input, args: ['arrowOffsetValue',] }],
        attrAnimationOpenDelay: [{ type: Input, args: ['animationOpenDelay',] }],
        attrAnimationCloseDelay: [{ type: Input, args: ['animationCloseDelay',] }],
        attrAutoClose: [{ type: Input, args: ['autoClose',] }],
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrIsModal: [{ type: Input, args: ['isModal',] }],
        attrOffset: [{ type: Input, args: ['offset',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSelector: [{ type: Input, args: ['selector',] }],
        attrShowArrow: [{ type: Input, args: ['showArrow',] }],
        attrShowCloseButton: [{ type: Input, args: ['showCloseButton',] }],
        attrTitle: [{ type: Input, args: ['title',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxPopoverComponent;
}()); //jqxPopoverComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxPopoverModule = /** @class */ (function () {
    function jqxPopoverModule() {
    }
    jqxPopoverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxPopoverComponent],
                    exports: [jqxPopoverComponent]
                },] }
    ];
    return jqxPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxPopoverComponent, jqxPopoverModule };

