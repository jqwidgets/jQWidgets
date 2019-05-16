import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxrangeselector';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxRangeSelectorComponent = /** @class */ (function () {
    function jqxRangeSelectorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.ngOnInit = /**
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
    jqxRangeSelectorComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
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
    jqxRangeSelectorComponent.prototype.arraysEqual = /**
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
    jqxRangeSelectorComponent.prototype.manageAttributes = /**
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
    jqxRangeSelectorComponent.prototype.moveClasses = /**
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
    jqxRangeSelectorComponent.prototype.moveStyles = /**
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
    jqxRangeSelectorComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.__updateRect__ = /**
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
    jqxRangeSelectorComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxRangeSelector('setOptions', options);
    };
    // jqxRangeSelectorComponent properties
    // jqxRangeSelectorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.disabled = 
    // jqxRangeSelectorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.groupLabelsFormatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('groupLabelsFormatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.labelsFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.labelsFormatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.labelsOnTicks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsOnTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsOnTicks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.markersFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.markersFormatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.majorTicksInterval = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.minorTicksInterval = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.moveOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.padding = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.range = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.resizable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.showGroupLabels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showGroupLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showGroupLabels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.showMinorTicks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.snapToTicks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.showMajorLabels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.showMarkers = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    };
    // jqxRangeSelectorComponent functions
    // jqxRangeSelectorComponent functions
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.destroy = 
    // jqxRangeSelectorComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxRangeSelector('destroy');
    };
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.getRange = /**
     * @return {?}
     */
    function () {
        return this.host.jqxRangeSelector('getRange');
    };
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxRangeSelector('render');
    };
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxRangeSelector('refresh');
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.setRange = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    };
    /**
     * @return {?}
     */
    jqxRangeSelectorComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
    };
    jqxRangeSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxRangeSelector',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxRangeSelectorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxRangeSelectorComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrGroupLabelsFormatFunction: [{ type: Input, args: ['groupLabelsFormatFunction',] }],
        attrLabelsFormat: [{ type: Input, args: ['labelsFormat',] }],
        attrLabelsFormatFunction: [{ type: Input, args: ['labelsFormatFunction',] }],
        attrLabelsOnTicks: [{ type: Input, args: ['labelsOnTicks',] }],
        attrMarkersFormat: [{ type: Input, args: ['markersFormat',] }],
        attrMarkersFormatFunction: [{ type: Input, args: ['markersFormatFunction',] }],
        attrMajorTicksInterval: [{ type: Input, args: ['majorTicksInterval',] }],
        attrMinorTicksInterval: [{ type: Input, args: ['minorTicksInterval',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMoveOnClick: [{ type: Input, args: ['moveOnClick',] }],
        attrPadding: [{ type: Input, args: ['padding',] }],
        attrRange: [{ type: Input, args: ['range',] }],
        attrResizable: [{ type: Input, args: ['resizable',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowGroupLabels: [{ type: Input, args: ['showGroupLabels',] }],
        attrShowMinorTicks: [{ type: Input, args: ['showMinorTicks',] }],
        attrSnapToTicks: [{ type: Input, args: ['snapToTicks',] }],
        attrShowMajorLabels: [{ type: Input, args: ['showMajorLabels',] }],
        attrShowMarkers: [{ type: Input, args: ['showMarkers',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }]
    };
    return jqxRangeSelectorComponent;
}()); //jqxRangeSelectorComponent
export { jqxRangeSelectorComponent };
if (false) {
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrGroupLabelsFormatFunction;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrLabelsFormat;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrLabelsFormatFunction;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrLabelsOnTicks;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMarkersFormat;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMarkersFormatFunction;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMajorTicksInterval;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMinorTicksInterval;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMax;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMin;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrMoveOnClick;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrPadding;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrRange;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrResizable;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrShowGroupLabels;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrShowMinorTicks;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrSnapToTicks;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrShowMajorLabels;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrShowMarkers;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.properties;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.host;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.elementRef;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.widgetObject;
    /** @type {?} */
    jqxRangeSelectorComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyYW5nZXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHJhbmdlc2VsZWN0b3IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHJhbmdlc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXVDRyxtQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsMkJBQTJCLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxzQkFBc0IsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLHVCQUF1QixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUEyVXRXLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBclVyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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OztJQUN6RCw0Q0FBMkI7O0lBQzNCLDRDQUEyQjs7SUFDM0Isb0RBQStDOztJQUMvQyxnREFBK0M7O0lBQy9DLDhDQUF3RDs7SUFDeEQsa0RBQTJDOztJQUMzQyw0Q0FBK0I7O0lBQy9CLHdEQUF1RDs7SUFDdkQsdURBQXFEOztJQUNyRCxvREFBK0M7O0lBQy9DLHdEQUF1RDs7SUFDdkQsb0RBQStDOztJQUMvQyw4Q0FBa0M7O0lBQ2xDLDhDQUEyQzs7SUFDM0MsK0NBQTZDOztJQUU3QywrQ0FBaUQ7O0lBRWpELCtDQUFnWDs7SUFDaFgseUNBQVU7O0lBQ1YsK0NBQXVCOztJQUN2QixpREFBMEM7O0lBd1UxQyw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFJhbmdlU2VsZWN0b3InLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2dyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb24nKSBhdHRyR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbjogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIGRhdGU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsnZGF0ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2xhYmVsc0Zvcm1hdCcpIGF0dHJMYWJlbHNGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnbGFiZWxzRm9ybWF0RnVuY3Rpb24nKSBhdHRyTGFiZWxzRm9ybWF0RnVuY3Rpb246ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdsYWJlbHNPblRpY2tzJykgYXR0ckxhYmVsc09uVGlja3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ21hcmtlcnNGb3JtYXQnKSBhdHRyTWFya2Vyc0Zvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nKSBhdHRyTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uOiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbjoganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnbWFqb3JUaWNrc0ludGVydmFsJykgYXR0ck1ham9yVGlja3NJbnRlcnZhbDogYW55O1xuICAgQElucHV0KCdtaW5vclRpY2tzSW50ZXJ2YWwnKSBhdHRyTWlub3JUaWNrc0ludGVydmFsOiBhbnk7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IGFueTtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogYW55O1xuICAgQElucHV0KCdtb3ZlT25DbGljaycpIGF0dHJNb3ZlT25DbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgncGFkZGluZycpIGF0dHJQYWRkaW5nOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3JhbmdlJykgYXR0clJhbmdlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvclJhbmdlO1xuICAgQElucHV0KCdyZXNpemFibGUnKSBhdHRyUmVzaXphYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93R3JvdXBMYWJlbHMnKSBhdHRyU2hvd0dyb3VwTGFiZWxzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93TWlub3JUaWNrcycpIGF0dHJTaG93TWlub3JUaWNrczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc25hcFRvVGlja3MnKSBhdHRyU25hcFRvVGlja3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dNYWpvckxhYmVscycpIGF0dHJTaG93TWFqb3JMYWJlbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dNYXJrZXJzJykgYXR0clNob3dNYXJrZXJzOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywnZ3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbicsJ2hlaWdodCcsJ2xhYmVsc0Zvcm1hdCcsJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywnbGFiZWxzT25UaWNrcycsJ21hcmtlcnNGb3JtYXQnLCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nLCdtYWpvclRpY2tzSW50ZXJ2YWwnLCdtaW5vclRpY2tzSW50ZXJ2YWwnLCdtYXgnLCdtaW4nLCdtb3ZlT25DbGljaycsJ3BhZGRpbmcnLCdyYW5nZScsJ3Jlc2l6YWJsZScsJ3J0bCcsJ3Nob3dHcm91cExhYmVscycsJ3Nob3dNaW5vclRpY2tzJywnc25hcFRvVGlja3MnLCdzaG93TWFqb3JMYWJlbHMnLCdzaG93TWFya2VycycsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UmFuZ2VTZWxlY3RvcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFJhbmdlU2VsZWN0b3InLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhSYW5nZVNlbGVjdG9yQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbihhcmc/OiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgZGF0ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWydkYXRlJ10pID0+IHN0cmluZyk6ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBkYXRlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ2RhdGUnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc0Zvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc0Zvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbGFiZWxzRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc0Zvcm1hdEZ1bmN0aW9uKGFyZz86ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSkgPT4gc3RyaW5nKTogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvckxhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNGb3JtYXRGdW5jdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYWJlbHNPblRpY2tzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNPblRpY2tzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNPblRpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1hcmtlcnNGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1hcmtlcnNGb3JtYXRGdW5jdGlvbihhcmc/OiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbjoganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IHN0cmluZyk6ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvck1hcmtlcnNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21hcmtlcnNGb3JtYXRGdW5jdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYWpvclRpY2tzSW50ZXJ2YWwoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYWpvclRpY2tzSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21ham9yVGlja3NJbnRlcnZhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5vclRpY2tzSW50ZXJ2YWwoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtaW5vclRpY2tzSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbm9yVGlja3NJbnRlcnZhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb3ZlT25DbGljayhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbW92ZU9uQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21vdmVPbkNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZGRpbmcoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdwYWRkaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdwYWRkaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhbmdlKGFyZz86IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yUmFuZ2UpOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvclJhbmdlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyYW5nZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncmFuZ2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzaXphYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZXNpemFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Jlc2l6YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dHcm91cExhYmVscyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd0dyb3VwTGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93R3JvdXBMYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd01pbm9yVGlja3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNaW5vclRpY2tzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWlub3JUaWNrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzbmFwVG9UaWNrcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc25hcFRvVGlja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3NuYXBUb1RpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dNYWpvckxhYmVscyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd01ham9yTGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWFqb3JMYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd01hcmtlcnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNYXJrZXJzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWFya2VycycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgZnVuY3Rpb25zXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZ2V0UmFuZ2UoKToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHZXRSYW5nZSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2dldFJhbmdlJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHNldFJhbmdlKGZyb206IGFueSwgdG86IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3NldFJhbmdlJywgZnJvbSwgdG8pO1xuICAgfVxuXG5cbiAgIC8vIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UmFuZ2VTZWxlY3RvckNvbXBvbmVudFxuIl19