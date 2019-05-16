import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    ;
    /**
     * @return {?}
     */
    jqxRibbonComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
        this.host.on('reorder', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onReorder.emit(eventData); }));
        this.host.on('select', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSelect.emit(eventData); }));
        this.host.on('unselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUnselect.emit(eventData); }));
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
export { jqxRibbonComponent };
if (false) {
    /** @type {?} */
    jqxRibbonComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrAnimationDelay;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrPopupCloseMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrPosition;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrReorder;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrSelectedIndex;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollPosition;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollStep;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollDelay;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRibbonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRibbonComponent.prototype.properties;
    /** @type {?} */
    jqxRibbonComponent.prototype.host;
    /** @type {?} */
    jqxRibbonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRibbonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxRibbonComponent.prototype.onChange;
    /** @type {?} */
    jqxRibbonComponent.prototype.onReorder;
    /** @type {?} */
    jqxRibbonComponent.prototype.onSelect;
    /** @type {?} */
    jqxRibbonComponent.prototype.onUnselect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyaWJib24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cmliYm9uLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhyaWJib24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQWdDRyw0QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBMlRqTyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXhUdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFB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QXdDOztJQUN4Qyx1Q0FBeUM7O0lBQ3pDLHNDQUF3Qzs7SUFDeEMsd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhSaWJib24nLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25UeXBlJykgYXR0ckFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXknKSBhdHRyQW5pbWF0aW9uRGVsYXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2luaXRDb250ZW50JykgYXR0ckluaXRDb250ZW50OiAoaW5kZXg6IGFueSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnbW9kZScpIGF0dHJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BvcHVwQ2xvc2VNb2RlJykgYXR0clBvcHVwQ2xvc2VNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Bvc2l0aW9uJykgYXR0clBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Jlb3JkZXInKSBhdHRyUmVvcmRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2VsZWN0ZWRJbmRleCcpIGF0dHJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3NlbGVjdGlvbk1vZGUnKSBhdHRyU2VsZWN0aW9uTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzY3JvbGxQb3NpdGlvbicpIGF0dHJTY3JvbGxQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzY3JvbGxTdGVwJykgYXR0clNjcm9sbFN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2Nyb2xsRGVsYXknKSBhdHRyU2Nyb2xsRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYW5pbWF0aW9uRGVsYXknLCdkaXNhYmxlZCcsJ2hlaWdodCcsJ2luaXRDb250ZW50JywnbW9kZScsJ3BvcHVwQ2xvc2VNb2RlJywncG9zaXRpb24nLCdyZW9yZGVyJywncnRsJywnc2VsZWN0ZWRJbmRleCcsJ3NlbGVjdGlvbk1vZGUnLCdzY3JvbGxQb3NpdGlvbicsJ3Njcm9sbFN0ZXAnLCdzY3JvbGxEZWxheScsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UmliYm9uO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFJpYmJvbih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJpYmJvbih0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhSaWJib24nLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFJpYmJvbkNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25UeXBlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uRGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ2FuaW1hdGlvbkRlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ2FuaW1hdGlvbkRlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbignaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0Q29udGVudChhcmc/OiAoaW5kZXg6IGFueSkgPT4gdm9pZCk6IChpbmRleDogYW55KSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ2luaXRDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ2luaXRDb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ21vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbignbW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3B1cENsb3NlTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbigncG9wdXBDbG9zZU1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbigncG9wdXBDbG9zZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlb3JkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbigncmVvcmRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmliYm9uKCdyZW9yZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGVkSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3NlbGVjdGVkSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbignc2VsZWN0ZWRJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25Nb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdzZWxlY3Rpb25Nb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ3NlbGVjdGlvbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Njcm9sbFBvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Njcm9sbFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbFN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Njcm9sbFN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbignc2Nyb2xsU3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbignc2Nyb2xsRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbignc2Nyb2xsRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmliYm9uKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFJpYmJvbkNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZEF0KGluZGV4OiBudW1iZXIsIGl0ZW06IGpxd2lkZ2V0cy5SaWJib25JdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdhZGRBdCcsIGluZGV4LCBpdGVtKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdjbGVhclNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBkaXNhYmxlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbignZGlzYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbignZGVzdHJveScpO1xuICAgfVxuXG4gICBlbmFibGVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdlbmFibGVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgaGlkZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ2hpZGVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbigncmVtb3ZlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbigncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZWxlY3RBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdzZWxlY3RBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2hvd0F0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSaWJib24oJ3Nob3dBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2V0UG9wdXBMYXlvdXQoaW5kZXg6IG51bWJlciwgbGF5b3V0OiBhbnksIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmliYm9uKCdzZXRQb3B1cExheW91dCcsIGluZGV4LCBsYXlvdXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgfVxuXG4gICB1cGRhdGVBdChpbmRleDogbnVtYmVyLCBpdGVtOiBqcXdpZGdldHMuUmliYm9uSXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJpYmJvbigndXBkYXRlQXQnLCBpbmRleCwgaXRlbSk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSaWJib24oJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJpYmJvbigndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeFJpYmJvbkNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlb3JkZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jlb3JkZXInLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlb3JkZXIuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndW5zZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhSaWJib25Db21wb25lbnRcbiJdfQ==