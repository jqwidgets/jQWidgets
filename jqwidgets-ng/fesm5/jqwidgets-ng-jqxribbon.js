import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxribbon from '../../jqwidgets/jqxribbon';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxRibbonComponent = /** @class */ (function () {
    function jqxRibbonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'reorder', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
        // jqxRibbonComponent events
        this.onChange = new EventEmitter();
        this.onReorder = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.ngOnInit = /**
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
    jqxRibbonComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
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
    jqxRibbonComponent.prototype.arraysEqual = /**
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
    jqxRibbonComponent.prototype.manageAttributes = /**
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
    jqxRibbonComponent.prototype.moveClasses = /**
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
    jqxRibbonComponent.prototype.moveStyles = /**
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
    jqxRibbonComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxRibbonComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.__updateRect__ = /**
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
    jqxRibbonComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxRibbon('setOptions', options);
    };
    // jqxRibbonComponent properties
    // jqxRibbonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.animationType = 
    // jqxRibbonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationType', arg);
        }
        else {
            return this.host.jqxRibbon('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.animationDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationDelay', arg);
        }
        else {
            return this.host.jqxRibbon('animationDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('disabled', arg);
        }
        else {
            return this.host.jqxRibbon('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('height', arg);
        }
        else {
            return this.host.jqxRibbon('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('initContent', arg);
        }
        else {
            return this.host.jqxRibbon('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.mode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('mode', arg);
        }
        else {
            return this.host.jqxRibbon('mode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.popupCloseMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('popupCloseMode', arg);
        }
        else {
            return this.host.jqxRibbon('popupCloseMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('position', arg);
        }
        else {
            return this.host.jqxRibbon('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.reorder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('reorder', arg);
        }
        else {
            return this.host.jqxRibbon('reorder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('rtl', arg);
        }
        else {
            return this.host.jqxRibbon('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.selectedIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectedIndex', arg);
        }
        else {
            return this.host.jqxRibbon('selectedIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.selectionMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectionMode', arg);
        }
        else {
            return this.host.jqxRibbon('selectionMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.scrollPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollPosition', arg);
        }
        else {
            return this.host.jqxRibbon('scrollPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.scrollStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollStep', arg);
        }
        else {
            return this.host.jqxRibbon('scrollStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.scrollDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollDelay', arg);
        }
        else {
            return this.host.jqxRibbon('scrollDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('theme', arg);
        }
        else {
            return this.host.jqxRibbon('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRibbonComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('width', arg);
        }
        else {
            return this.host.jqxRibbon('width');
        }
    };
    // jqxRibbonComponent functions
    // jqxRibbonComponent functions
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxRibbonComponent.prototype.addAt = 
    // jqxRibbonComponent functions
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxRibbon('addAt', index, item);
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.host.jqxRibbon('clearSelection');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.disableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('disableAt', index);
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxRibbon('destroy');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.enableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('enableAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.hideAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('hideAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('removeAt', index);
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxRibbon('render');
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxRibbon('refresh');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.selectAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('selectAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxRibbonComponent.prototype.showAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxRibbon('showAt', index);
    };
    /**
     * @param {?} index
     * @param {?} layout
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    jqxRibbonComponent.prototype.setPopupLayout = /**
     * @param {?} index
     * @param {?} layout
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (index, layout, width, height) {
        this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxRibbonComponent.prototype.updateAt = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxRibbon('updateAt', index, item);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxRibbonComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxRibbon('val', value);
        }
        else {
            return this.host.jqxRibbon('val');
        }
    };
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('reorder', function (eventData) { _this.onReorder.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    jqxRibbonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxRibbon',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxRibbonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxRibbonComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAnimationDelay: [{ type: Input, args: ['animationDelay',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrMode: [{ type: Input, args: ['mode',] }],
        attrPopupCloseMode: [{ type: Input, args: ['popupCloseMode',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrReorder: [{ type: Input, args: ['reorder',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSelectedIndex: [{ type: Input, args: ['selectedIndex',] }],
        attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
        attrScrollPosition: [{ type: Input, args: ['scrollPosition',] }],
        attrScrollStep: [{ type: Input, args: ['scrollStep',] }],
        attrScrollDelay: [{ type: Input, args: ['scrollDelay',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onReorder: [{ type: Output }],
        onSelect: [{ type: Output }],
        onUnselect: [{ type: Output }]
    };
    return jqxRibbonComponent;
}()); //jqxRibbonComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxRibbonModule = /** @class */ (function () {
    function jqxRibbonModule() {
    }
    jqxRibbonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxRibbonComponent],
                    exports: [jqxRibbonComponent]
                },] }
    ];
    return jqxRibbonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxRibbonComponent, jqxRibbonModule };

