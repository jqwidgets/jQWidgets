import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxgauge from '../../jqwidgets-scripts/jqwidgets/jqxgauge';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxGaugeComponent = /** @class */ (function () {
    function jqxGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxGaugeComponent.prototype.ngOnInit = /**
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
    jqxGaugeComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
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
    jqxGaugeComponent.prototype.arraysEqual = /**
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
    jqxGaugeComponent.prototype.manageAttributes = /**
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
    jqxGaugeComponent.prototype.moveClasses = /**
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
    jqxGaugeComponent.prototype.moveStyles = /**
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
    jqxGaugeComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxGaugeComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxGaugeComponent.prototype.__updateRect__ = /**
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
    jqxGaugeComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxGauge('setOptions', options);
    };
    // jqxGaugeComponent properties
    // jqxGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.animationDuration = 
    // jqxGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.border = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.caption = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.cap = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.colorScheme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.easing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.endAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.int64 = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.labels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.pointer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.radius = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.ranges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.startAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.showRanges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.styles = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('styles', arg);
        }
        else {
            return this.host.jqxGauge('styles');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.ticksMajor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.ticksMinor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.ticksDistance = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGaugeComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    };
    // jqxGaugeComponent functions
    // jqxGaugeComponent functions
    /**
     * @return {?}
     */
    jqxGaugeComponent.prototype.disable = 
    // jqxGaugeComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxGauge('disable');
    };
    /**
     * @return {?}
     */
    jqxGaugeComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxGauge('enable');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxGaugeComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxGauge('val', value);
        }
        else {
            return this.host.jqxGauge('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxGaugeComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('valueChanging', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValueChanging.emit(eventData); }));
        this.host.on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValueChanged.emit(eventData); }));
    };
    jqxGaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxGauge',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxGaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxGaugeComponent.propDecorators = {
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrBorder: [{ type: Input, args: ['border',] }],
        attrCaption: [{ type: Input, args: ['caption',] }],
        attrCap: [{ type: Input, args: ['cap',] }],
        attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEasing: [{ type: Input, args: ['easing',] }],
        attrEndAngle: [{ type: Input, args: ['endAngle',] }],
        attrInt64: [{ type: Input, args: ['int64',] }],
        attrLabels: [{ type: Input, args: ['labels',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrPointer: [{ type: Input, args: ['pointer',] }],
        attrRadius: [{ type: Input, args: ['radius',] }],
        attrRanges: [{ type: Input, args: ['ranges',] }],
        attrStartAngle: [{ type: Input, args: ['startAngle',] }],
        attrShowRanges: [{ type: Input, args: ['showRanges',] }],
        attrStyles: [{ type: Input, args: ['styles',] }],
        attrTicksMajor: [{ type: Input, args: ['ticksMajor',] }],
        attrTicksMinor: [{ type: Input, args: ['ticksMinor',] }],
        attrTicksDistance: [{ type: Input, args: ['ticksDistance',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onValueChanging: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxGaugeComponent;
}()); //jqxGaugeComponent
export { jqxGaugeComponent };
if (false) {
    /** @type {?} */
    jqxGaugeComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrBorder;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrCaption;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrCap;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrColorScheme;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrEasing;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrEndAngle;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrInt64;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrLabels;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrMin;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrMax;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrPointer;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrRadius;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrRanges;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrStartAngle;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrShowRanges;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrStyles;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksMajor;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksMinor;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksDistance;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrValue;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrWidth;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrHeight;
    /** @type {?} */
    jqxGaugeComponent.prototype.autoCreate;
    /** @type {?} */
    jqxGaugeComponent.prototype.properties;
    /** @type {?} */
    jqxGaugeComponent.prototype.host;
    /** @type {?} */
    jqxGaugeComponent.prototype.elementRef;
    /** @type {?} */
    jqxGaugeComponent.prototype.widgetObject;
    /** @type {?} */
    jqxGaugeComponent.prototype.onValueChanging;
    /** @type {?} */
    jqxGaugeComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhnYXVnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhnYXVnZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Z2F1Z2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXVDRywyQkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBdVV4USxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBbFUzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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QUE2Qzs7SUFDN0MsdUNBQWtEOztJQUNsRCwyQ0FBMEQ7O0lBQzFELDJDQUEwRDs7SUFDMUQsOENBQWtEOztJQUNsRCxzQ0FBa0M7O0lBQ2xDLHNDQUEyQzs7SUFDM0MsdUNBQTZDOztJQUU3Qyx1Q0FBaUQ7O0lBRWpELHVDQUFrUjs7SUFDbFIsaUNBQVU7O0lBQ1YsdUNBQXVCOztJQUN2Qix5Q0FBa0M7O0lBb1VsQyw0Q0FBK0M7O0lBQy9DLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4R2F1Z2UnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeEdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uJykgYXR0ckFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2JvcmRlcicpIGF0dHJCb3JkZXI6IGpxd2lkZ2V0cy5HYXVnZUJvcmRlcjtcbiAgIEBJbnB1dCgnY2FwdGlvbicpIGF0dHJDYXB0aW9uOiBqcXdpZGdldHMuR2F1Z2VDYXB0aW9uO1xuICAgQElucHV0KCdjYXAnKSBhdHRyQ2FwOiBqcXdpZGdldHMuR2F1Z2VDYXA7XG4gICBASW5wdXQoJ2NvbG9yU2NoZW1lJykgYXR0ckNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlYXNpbmcnKSBhdHRyRWFzaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2VuZEFuZ2xlJykgYXR0ckVuZEFuZ2xlOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2ludDY0JykgYXR0ckludDY0OiBib29sZWFuO1xuICAgQElucHV0KCdsYWJlbHMnKSBhdHRyTGFiZWxzOiBqcXdpZGdldHMuR2F1Z2VMYWJlbHM7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IG51bWJlcjtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdwb2ludGVyJykgYXR0clBvaW50ZXI6IGpxd2lkZ2V0cy5HYXVnZVBvaW50ZXI7XG4gICBASW5wdXQoJ3JhZGl1cycpIGF0dHJSYWRpdXM6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmFuZ2VzJykgYXR0clJhbmdlczogQXJyYXk8anF3aWRnZXRzLkdhdWdlUmFuZ2VzPjtcbiAgIEBJbnB1dCgnc3RhcnRBbmdsZScpIGF0dHJTdGFydEFuZ2xlOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3Nob3dSYW5nZXMnKSBhdHRyU2hvd1JhbmdlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3R5bGVzJykgYXR0clN0eWxlczoganF3aWRnZXRzLkdhdWdlU3R5bGU7XG4gICBASW5wdXQoJ3RpY2tzTWFqb3InKSBhdHRyVGlja3NNYWpvcjoganF3aWRnZXRzLkdhdWdlVGlja3M7XG4gICBASW5wdXQoJ3RpY2tzTWlub3InKSBhdHRyVGlja3NNaW5vcjoganF3aWRnZXRzLkdhdWdlVGlja3M7XG4gICBASW5wdXQoJ3RpY2tzRGlzdGFuY2UnKSBhdHRyVGlja3NEaXN0YW5jZTogc3RyaW5nO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogbnVtYmVyO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkR1cmF0aW9uJywnYm9yZGVyJywnY2FwdGlvbicsJ2NhcCcsJ2NvbG9yU2NoZW1lJywnZGlzYWJsZWQnLCdlYXNpbmcnLCdlbmRBbmdsZScsJ2hlaWdodCcsJ2ludDY0JywnbGFiZWxzJywnbWluJywnbWF4JywncG9pbnRlcicsJ3JhZGl1cycsJ3JhbmdlcycsJ3N0YXJ0QW5nbGUnLCdzaG93UmFuZ2VzJywnc3R5bGVzJywndGlja3NNYWpvcicsJ3RpY2tzTWlub3InLCd0aWNrc0Rpc3RhbmNlJywndmFsdWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhHYXVnZTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhHYXVnZSh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4R2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhHYXVnZScsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhHYXVnZUNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EdXJhdGlvbihhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdhbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJvcmRlcihhcmc/OiBqcXdpZGdldHMuR2F1Z2VCb3JkZXIpOiBqcXdpZGdldHMuR2F1Z2VCb3JkZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdib3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdib3JkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2FwdGlvbihhcmc/OiBqcXdpZGdldHMuR2F1Z2VDYXB0aW9uKToganF3aWRnZXRzLkdhdWdlQ2FwdGlvbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ2NhcHRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdjYXB0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNhcChhcmc/OiBqcXdpZGdldHMuR2F1Z2VDYXApOiBqcXdpZGdldHMuR2F1Z2VDYXAge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdjYXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdjYXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sb3JTY2hlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgnY29sb3JTY2hlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdjb2xvclNjaGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWFzaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ2Vhc2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ2Vhc2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmRBbmdsZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdlbmRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ2VuZEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW50NjQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdpbnQ2NCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ2ludDY0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVscyhhcmc/OiBqcXdpZGdldHMuR2F1Z2VMYWJlbHMpOiBqcXdpZGdldHMuR2F1Z2VMYWJlbHMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdsYWJlbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdsYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgnbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgnbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvaW50ZXIoYXJnPzoganF3aWRnZXRzLkdhdWdlUG9pbnRlcik6IGpxd2lkZ2V0cy5HYXVnZVBvaW50ZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdwb2ludGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgncG9pbnRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByYWRpdXMoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgncmFkaXVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgncmFkaXVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhbmdlcyhhcmc/OiBBcnJheTxqcXdpZGdldHMuR2F1Z2VSYW5nZXM+KTogQXJyYXk8anF3aWRnZXRzLkdhdWdlUmFuZ2VzPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ3JhbmdlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ3JhbmdlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGFydEFuZ2xlKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ3N0YXJ0QW5nbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCdzdGFydEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dSYW5nZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCdzaG93UmFuZ2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgnc2hvd1JhbmdlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHlsZXMoYXJnPzoganF3aWRnZXRzLkdhdWdlU3R5bGUpOiBqcXdpZGdldHMuR2F1Z2VTdHlsZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ3N0eWxlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ3N0eWxlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aWNrc01ham9yKGFyZz86IGpxd2lkZ2V0cy5HYXVnZVRpY2tzKToganF3aWRnZXRzLkdhdWdlVGlja3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCd0aWNrc01ham9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgndGlja3NNYWpvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aWNrc01pbm9yKGFyZz86IGpxd2lkZ2V0cy5HYXVnZVRpY2tzKToganF3aWRnZXRzLkdhdWdlVGlja3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdhdWdlKCd0aWNrc01pbm9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgndGlja3NNaW5vcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aWNrc0Rpc3RhbmNlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ3RpY2tzRGlzdGFuY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCd0aWNrc0Rpc3RhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHYXVnZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEdhdWdlQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhHYXVnZSgnZGlzYWJsZScpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4R2F1Z2UoJ2VuYWJsZScpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBudW1iZXIpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R2F1Z2UoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdhdWdlKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4R2F1Z2VDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5naW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbigndmFsdWVDaGFuZ2luZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmFsdWVDaGFuZ2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2YWx1ZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4R2F1Z2VDb21wb25lbnRcbiJdfQ==