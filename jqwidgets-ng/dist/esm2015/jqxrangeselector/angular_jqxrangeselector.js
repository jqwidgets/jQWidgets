import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxrangeselector';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxRangeSelectorComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
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
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
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
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxRangeSelector('setOptions', options);
    }
    // jqxRangeSelectorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupLabelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('groupLabelsFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labelsFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labelsOnTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsOnTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsOnTicks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    markersFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    markersFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    majorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    moveOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    range(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showGroupLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showGroupLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showGroupLabels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    snapToTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showMajorLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showMarkers(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    }
    // jqxRangeSelectorComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxRangeSelector('destroy');
    }
    /**
     * @return {?}
     */
    getRange() {
        return this.host.jqxRangeSelector('getRange');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxRangeSelector('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxRangeSelector('refresh');
    }
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    setRange(from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); }));
    }
} //jqxRangeSelectorComponent
jqxRangeSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxRangeSelector',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxRangeSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyYW5nZXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHJhbmdlc2VsZWN0b3IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHJhbmdlc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFrQ25DLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsZUFBZSxFQUFDLGVBQWUsRUFBQyx1QkFBdUIsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBMlV0VyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXJVckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixXQUFXLENBQUMsT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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S0FBSztzQkFDWCxLQUFLLFNBQUMsS0FBSzs4QkFDWCxLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLFNBQVM7d0JBQ2YsS0FBSyxTQUFDLE9BQU87NEJBQ2IsS0FBSyxTQUFDLFdBQVc7c0JBQ2pCLEtBQUssU0FBQyxLQUFLO2tDQUNYLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7OEJBQ3RCLEtBQUssU0FBQyxhQUFhO2tDQUNuQixLQUFLLFNBQUMsaUJBQWlCOzhCQUN2QixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7eUJBRWQsS0FBSyxTQUFDLGFBQWE7dUJBNlVuQixNQUFNOzs7O0lBdFdQLGlEQUF5Qzs7SUFDekMsa0VBQWdOOztJQUNoTixxREFBZ0Q7O0lBQ2hELDZEQUFpSTs7SUFDakksc0RBQW1EOztJQUNuRCxzREFBa0Q7O0lBQ2xELDhEQUF3TTs7SUFDeE0sMkRBQXlEOztJQUN6RCwyREFBeUQ7O0lBQ3pELDRDQUEyQjs7SUFDM0IsNENBQTJCOztJQUMzQixvREFBK0M7O0lBQy9DLGdEQUErQzs7SUFDL0MsOENBQXdEOztJQUN4RCxrREFBMkM7O0lBQzNDLDRDQUErQjs7SUFDL0Isd0RBQXVEOztJQUN2RCx1REFBcUQ7O0lBQ3JELG9EQUErQzs7SUFDL0Msd0RBQXVEOztJQUN2RCxvREFBK0M7O0lBQy9DLDhDQUFrQzs7SUFDbEMsOENBQTJDOztJQUMzQywrQ0FBNkM7O0lBRTdDLCtDQUFpRDs7SUFFakQsK0NBQWdYOztJQUNoWCx5Q0FBVTs7SUFDViwrQ0FBdUI7O0lBQ3ZCLGlEQUEwQzs7SUF3VTFDLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4UmFuZ2VTZWxlY3RvcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4UmFuZ2VTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZ3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbicpIGF0dHJHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uOiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgZGF0ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWydkYXRlJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnbGFiZWxzRm9ybWF0JykgYXR0ckxhYmVsc0Zvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCdsYWJlbHNGb3JtYXRGdW5jdGlvbicpIGF0dHJMYWJlbHNGb3JtYXRGdW5jdGlvbjogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvckxhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2xhYmVsc09uVGlja3MnKSBhdHRyTGFiZWxzT25UaWNrczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbWFya2Vyc0Zvcm1hdCcpIGF0dHJNYXJrZXJzRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ21hcmtlcnNGb3JtYXRGdW5jdGlvbicpIGF0dHJNYXJrZXJzRm9ybWF0RnVuY3Rpb246ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvck1hcmtlcnNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdtYWpvclRpY2tzSW50ZXJ2YWwnKSBhdHRyTWFqb3JUaWNrc0ludGVydmFsOiBhbnk7XG4gICBASW5wdXQoJ21pbm9yVGlja3NJbnRlcnZhbCcpIGF0dHJNaW5vclRpY2tzSW50ZXJ2YWw6IGFueTtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogYW55O1xuICAgQElucHV0KCdtaW4nKSBhdHRyTWluOiBhbnk7XG4gICBASW5wdXQoJ21vdmVPbkNsaWNrJykgYXR0ck1vdmVPbkNsaWNrOiBib29sZWFuO1xuICAgQElucHV0KCdwYWRkaW5nJykgYXR0clBhZGRpbmc6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmFuZ2UnKSBhdHRyUmFuZ2U6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yUmFuZ2U7XG4gICBASW5wdXQoJ3Jlc2l6YWJsZScpIGF0dHJSZXNpemFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dHcm91cExhYmVscycpIGF0dHJTaG93R3JvdXBMYWJlbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dNaW5vclRpY2tzJykgYXR0clNob3dNaW5vclRpY2tzOiBib29sZWFuO1xuICAgQElucHV0KCdzbmFwVG9UaWNrcycpIGF0dHJTbmFwVG9UaWNrczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd01ham9yTGFiZWxzJykgYXR0clNob3dNYWpvckxhYmVsczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd01hcmtlcnMnKSBhdHRyU2hvd01hcmtlcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnZGlzYWJsZWQnLCdncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uJywnaGVpZ2h0JywnbGFiZWxzRm9ybWF0JywnbGFiZWxzRm9ybWF0RnVuY3Rpb24nLCdsYWJlbHNPblRpY2tzJywnbWFya2Vyc0Zvcm1hdCcsJ21hcmtlcnNGb3JtYXRGdW5jdGlvbicsJ21ham9yVGlja3NJbnRlcnZhbCcsJ21pbm9yVGlja3NJbnRlcnZhbCcsJ21heCcsJ21pbicsJ21vdmVPbkNsaWNrJywncGFkZGluZycsJ3JhbmdlJywncmVzaXphYmxlJywncnRsJywnc2hvd0dyb3VwTGFiZWxzJywnc2hvd01pbm9yVGlja3MnLCdzbmFwVG9UaWNrcycsJ3Nob3dNYWpvckxhYmVscycsJ3Nob3dNYXJrZXJzJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhSYW5nZVNlbGVjdG9yO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcih0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UmFuZ2VTZWxlY3RvcicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgcHJvcGVydGllc1xuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uKGFyZz86ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBkYXRlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ2RhdGUnXSkgPT4gc3RyaW5nKTogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIGRhdGU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsnZGF0ZSddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2dyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2dyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbGFiZWxzRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzRm9ybWF0RnVuY3Rpb24oYXJnPzogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvckxhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddKSA9PiBzdHJpbmcpOiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10pID0+IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbGFiZWxzRm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc09uVGlja3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc09uVGlja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc09uVGlja3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWFya2Vyc0Zvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21hcmtlcnNGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21hcmtlcnNGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWFya2Vyc0Zvcm1hdEZ1bmN0aW9uKGFyZz86ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvck1hcmtlcnNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gc3RyaW5nKTogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvck1hcmtlcnNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgcG9zaXRpb246IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uWydwb3NpdGlvbiddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21hcmtlcnNGb3JtYXRGdW5jdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbWFya2Vyc0Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1ham9yVGlja3NJbnRlcnZhbChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21ham9yVGlja3NJbnRlcnZhbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbWFqb3JUaWNrc0ludGVydmFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbm9yVGlja3NJbnRlcnZhbChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbm9yVGlja3NJbnRlcnZhbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbWlub3JUaWNrc0ludGVydmFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vdmVPbkNsaWNrKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtb3ZlT25DbGljaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbW92ZU9uQ2xpY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFkZGluZyhhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3BhZGRpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3BhZGRpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmFuZ2UoYXJnPzoganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JSYW5nZSk6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yUmFuZ2Uge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3JhbmdlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyYW5nZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNpemFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Jlc2l6YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncmVzaXphYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0dyb3VwTGFiZWxzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93R3JvdXBMYWJlbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dHcm91cExhYmVscycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TWlub3JUaWNrcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd01pbm9yVGlja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNaW5vclRpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNuYXBUb1RpY2tzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzbmFwVG9UaWNrcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc25hcFRvVGlja3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd01ham9yTGFiZWxzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWFqb3JMYWJlbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNYWpvckxhYmVscycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TWFya2Vycyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd01hcmtlcnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNYXJrZXJzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4UmFuZ2VTZWxlY3RvckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignZGVzdHJveScpO1xuICAgfVxuXG4gICBnZXRSYW5nZSgpOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvckdldFJhbmdlIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignZ2V0UmFuZ2UnKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgc2V0UmFuZ2UoZnJvbTogYW55LCB0bzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2V0UmFuZ2UnLCBmcm9tLCB0byk7XG4gICB9XG5cblxuICAgLy8ganF4UmFuZ2VTZWxlY3RvckNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhSYW5nZVNlbGVjdG9yQ29tcG9uZW50XG4iXX0=