import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxnavbar from '../../jqwidgets/jqxnavbar';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxNavBarComponent = /** @class */ (function () {
    function jqxNavBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
        // jqxNavBarComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.ngOnInit = /**
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
    jqxNavBarComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
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
    jqxNavBarComponent.prototype.arraysEqual = /**
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
    jqxNavBarComponent.prototype.manageAttributes = /**
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
    jqxNavBarComponent.prototype.moveClasses = /**
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
    jqxNavBarComponent.prototype.moveStyles = /**
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
    jqxNavBarComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxNavBarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.__updateRect__ = /**
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
    jqxNavBarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxNavBar('setOptions', options);
    };
    // jqxNavBarComponent properties
    // jqxNavBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.columns = 
    // jqxNavBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('columns', arg);
        }
        else {
            return this.host.jqxNavBar('columns');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('disabled', arg);
        }
        else {
            return this.host.jqxNavBar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('height', arg);
        }
        else {
            return this.host.jqxNavBar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.minimized = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimized', arg);
        }
        else {
            return this.host.jqxNavBar('minimized');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.minimizeButtonPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizeButtonPosition', arg);
        }
        else {
            return this.host.jqxNavBar('minimizeButtonPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.minimizedHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedHeight', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.minimizedTitle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedTitle', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedTitle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.orientation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('orientation', arg);
        }
        else {
            return this.host.jqxNavBar('orientation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.popupAnimationDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('popupAnimationDelay', arg);
        }
        else {
            return this.host.jqxNavBar('popupAnimationDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('rtl', arg);
        }
        else {
            return this.host.jqxNavBar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.selection = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selection', arg);
        }
        else {
            return this.host.jqxNavBar('selection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.selectedItem = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selectedItem', arg);
        }
        else {
            return this.host.jqxNavBar('selectedItem');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('theme', arg);
        }
        else {
            return this.host.jqxNavBar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavBarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('width', arg);
        }
        else {
            return this.host.jqxNavBar('width');
        }
    };
    // jqxNavBarComponent functions
    // jqxNavBarComponent functions
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.close = 
    // jqxNavBarComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxNavBar('close');
    };
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavBar('destroy');
    };
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.getSelectedIndex = /**
     * @return {?}
     */
    function () {
        return this.host.jqxNavBar('getSelectedIndex');
    };
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavBar('open');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavBarComponent.prototype.selectAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavBar('selectAt', index);
    };
    /**
     * @return {?}
     */
    jqxNavBarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    jqxNavBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxNavBar',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxNavBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxNavBarComponent.propDecorators = {
        attrColumns: [{ type: Input, args: ['columns',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrMinimized: [{ type: Input, args: ['minimized',] }],
        attrMinimizeButtonPosition: [{ type: Input, args: ['minimizeButtonPosition',] }],
        attrMinimizedHeight: [{ type: Input, args: ['minimizedHeight',] }],
        attrMinimizedTitle: [{ type: Input, args: ['minimizedTitle',] }],
        attrOrientation: [{ type: Input, args: ['orientation',] }],
        attrPopupAnimationDelay: [{ type: Input, args: ['popupAnimationDelay',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSelection: [{ type: Input, args: ['selection',] }],
        attrSelectedItem: [{ type: Input, args: ['selectedItem',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }]
    };
    return jqxNavBarComponent;
}()); //jqxNavBarComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxNavBarModule = /** @class */ (function () {
    function jqxNavBarModule() {
    }
    jqxNavBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxNavBarComponent],
                    exports: [jqxNavBarComponent]
                },] }
    ];
    return jqxNavBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxNavBarComponent, jqxNavBarModule };

