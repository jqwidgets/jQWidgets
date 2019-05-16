import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxbulletchart from '../../jqwidgets-scripts/jqwidgets/jqxbulletchart';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxBulletChartComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'barSize', 'description', 'disabled', 'height', 'labelsFormat', 'labelsFormatFunction', 'orientation', 'pointer', 'rtl', 'ranges', 'showTooltip', 'target', 'ticks', 'title', 'tooltipFormatFunction', 'width'];
        // jqxBulletChartComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBulletChart(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBulletChart(this.properties[i])) {
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);
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
        this.host.jqxBulletChart('setOptions', options);
    }
    // jqxBulletChartComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('animationDuration', arg);
        }
        else {
            return this.host.jqxBulletChart('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    barSize(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('barSize', arg);
        }
        else {
            return this.host.jqxBulletChart('barSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    description(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('description', arg);
        }
        else {
            return this.host.jqxBulletChart('description');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('disabled', arg);
        }
        else {
            return this.host.jqxBulletChart('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('height', arg);
        }
        else {
            return this.host.jqxBulletChart('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labelsFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormat', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('orientation', arg);
        }
        else {
            return this.host.jqxBulletChart('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('pointer', arg);
        }
        else {
            return this.host.jqxBulletChart('pointer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('rtl', arg);
        }
        else {
            return this.host.jqxBulletChart('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ranges', arg);
        }
        else {
            return this.host.jqxBulletChart('ranges');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('showTooltip', arg);
        }
        else {
            return this.host.jqxBulletChart('showTooltip');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    target(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('target', arg);
        }
        else {
            return this.host.jqxBulletChart('target');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticks(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ticks', arg);
        }
        else {
            return this.host.jqxBulletChart('ticks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('title', arg);
        }
        else {
            return this.host.jqxBulletChart('title');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('tooltipFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('width', arg);
        }
        else {
            return this.host.jqxBulletChart('width');
        }
    }
    // jqxBulletChartComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxBulletChart('destroy');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxBulletChart('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxBulletChart('refresh');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxBulletChart('val', value);
        }
        else {
            return this.host.jqxBulletChart('val');
        }
    }
    ;
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
} //jqxBulletChartComponent
jqxBulletChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxBulletChart',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxBulletChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxBulletChartComponent.propDecorators = {
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrBarSize: [{ type: Input, args: ['barSize',] }],
    attrDescription: [{ type: Input, args: ['description',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrLabelsFormat: [{ type: Input, args: ['labelsFormat',] }],
    attrLabelsFormatFunction: [{ type: Input, args: ['labelsFormatFunction',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrPointer: [{ type: Input, args: ['pointer',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrRanges: [{ type: Input, args: ['ranges',] }],
    attrShowTooltip: [{ type: Input, args: ['showTooltip',] }],
    attrTarget: [{ type: Input, args: ['target',] }],
    attrTicks: [{ type: Input, args: ['ticks',] }],
    attrTitle: [{ type: Input, args: ['title',] }],
    attrTooltipFormatFunction: [{ type: Input, args: ['tooltipFormatFunction',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrBarSize;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrDescription;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrLabelsFormat;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrLabelsFormatFunction;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrPointer;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrRtl;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrRanges;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrShowTooltip;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrTarget;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrTicks;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrTitle;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrTooltipFormatFunction;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrWidth;
    /** @type {?} */
    jqxBulletChartComponent.prototype.attrHeight;
    /** @type {?} */
    jqxBulletChartComponent.prototype.autoCreate;
    /** @type {?} */
    jqxBulletChartComponent.prototype.properties;
    /** @type {?} */
    jqxBulletChartComponent.prototype.host;
    /** @type {?} */
    jqxBulletChartComponent.prototype.elementRef;
    /** @type {?} */
    jqxBulletChartComponent.prototype.widgetObject;
    /** @type {?} */
    jqxBulletChartComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhidWxsZXRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhidWxsZXRjaGFydC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4YnVsbGV0Y2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUEyQmpDLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQW1Sbk8sYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE3UXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxD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bUJBQW1COzBCQUN6QixLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLFVBQVU7K0JBQ2hCLEtBQUssU0FBQyxjQUFjO3VDQUNwQixLQUFLLFNBQUMsc0JBQXNCOzhCQUM1QixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLFNBQVM7c0JBQ2YsS0FBSyxTQUFDLEtBQUs7eUJBQ1gsS0FBSyxTQUFDLFFBQVE7OEJBQ2QsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPO3dDQUNiLEtBQUssU0FBQyx1QkFBdUI7d0JBQzdCLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3lCQUVkLEtBQUssU0FBQyxhQUFhO3VCQXFSbkIsTUFBTTs7OztJQXZTUCx3REFBMEQ7O0lBQzFELDhDQUErQzs7SUFDL0Msa0RBQThDOztJQUM5QywrQ0FBeUM7O0lBQ3pDLG1EQUFnRDs7SUFDaEQsMkRBQStMOztJQUMvTCxrREFBOEM7O0lBQzlDLDhDQUE0RDs7SUFDNUQsMENBQStCOztJQUMvQiw2Q0FBZ0U7O0lBQ2hFLGtEQUErQzs7SUFDL0MsNkNBQTBEOztJQUMxRCw0Q0FBc0Q7O0lBQ3RELDRDQUFrQzs7SUFDbEMsNERBQTBOOztJQUMxTiw0Q0FBMkM7O0lBQzNDLDZDQUE2Qzs7SUFFN0MsNkNBQWlEOztJQUVqRCw2Q0FBNk87O0lBQzdPLHVDQUFVOztJQUNWLDZDQUF1Qjs7SUFDdkIsK0NBQXdDOztJQWdSeEMsMkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhCdWxsZXRDaGFydCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4QnVsbGV0Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFyU2l6ZScpIGF0dHJCYXJTaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2Rlc2NyaXB0aW9uJykgYXR0ckRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdsYWJlbHNGb3JtYXQnKSBhdHRyTGFiZWxzRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJykgYXR0ckxhYmVsc0Zvcm1hdEZ1bmN0aW9uOiAodmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgcG9zaXRpb24/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRMYWJlbHNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gYW55O1xuICAgQElucHV0KCdvcmllbnRhdGlvbicpIGF0dHJPcmllbnRhdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdwb2ludGVyJykgYXR0clBvaW50ZXI6IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFBvaW50ZXI7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JhbmdlcycpIGF0dHJSYW5nZXM6IEFycmF5PGpxd2lkZ2V0cy5CdWxsZXRDaGFydFJhbmdlcz47XG4gICBASW5wdXQoJ3Nob3dUb29sdGlwJykgYXR0clNob3dUb29sdGlwOiBib29sZWFuO1xuICAgQElucHV0KCd0YXJnZXQnKSBhdHRyVGFyZ2V0OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRQb2ludGVyO1xuICAgQElucHV0KCd0aWNrcycpIGF0dHJUaWNrczoganF3aWRnZXRzLkJ1bGxldENoYXJ0VGlja3M7XG4gICBASW5wdXQoJ3RpdGxlJykgYXR0clRpdGxlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2x0aXBGb3JtYXRGdW5jdGlvbicpIGF0dHJUb29sdGlwRm9ybWF0RnVuY3Rpb246IChwb2ludGVyVmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUb29sdGlwRm9ybWF0RnVuY3Rpb25bJ3BvaW50ZXJWYWx1ZSddLCB0YXJnZXRWYWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRvb2x0aXBGb3JtYXRGdW5jdGlvblsndGFyZ2V0VmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkR1cmF0aW9uJywnYmFyU2l6ZScsJ2Rlc2NyaXB0aW9uJywnZGlzYWJsZWQnLCdoZWlnaHQnLCdsYWJlbHNGb3JtYXQnLCdsYWJlbHNGb3JtYXRGdW5jdGlvbicsJ29yaWVudGF0aW9uJywncG9pbnRlcicsJ3J0bCcsJ3JhbmdlcycsJ3Nob3dUb29sdGlwJywndGFyZ2V0JywndGlja3MnLCd0aXRsZScsJ3Rvb2x0aXBGb3JtYXRGdW5jdGlvbicsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEJ1bGxldENoYXJ0O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEJ1bGxldENoYXJ0Jywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeEJ1bGxldENoYXJ0Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2FuaW1hdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnYW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFyU2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdiYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnYmFyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZXNjcmlwdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdkZXNjcmlwdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc0Zvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdsYWJlbHNGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdsYWJlbHNGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzRm9ybWF0RnVuY3Rpb24oYXJnPzogKHZhbHVlPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0TGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0TGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IGFueSk6ICh2YWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydExhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbj86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydExhYmVsc0Zvcm1hdEZ1bmN0aW9uWydwb3NpdGlvbiddKSA9PiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdsYWJlbHNGb3JtYXRGdW5jdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9yaWVudGF0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ29yaWVudGF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnb3JpZW50YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9pbnRlcihhcmc/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRQb2ludGVyKToganF3aWRnZXRzLkJ1bGxldENoYXJ0UG9pbnRlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3BvaW50ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdwb2ludGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByYW5nZXMoYXJnPzogQXJyYXk8anF3aWRnZXRzLkJ1bGxldENoYXJ0UmFuZ2VzPik6IEFycmF5PGpxd2lkZ2V0cy5CdWxsZXRDaGFydFJhbmdlcz4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdyYW5nZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdyYW5nZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1Rvb2x0aXAoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdzaG93VG9vbHRpcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3Nob3dUb29sdGlwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRhcmdldChhcmc/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRQb2ludGVyKToganF3aWRnZXRzLkJ1bGxldENoYXJ0UG9pbnRlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3RhcmdldCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3RhcmdldCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aWNrcyhhcmc/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUaWNrcyk6IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRpY2tzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndGlja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd0aWNrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aXRsZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd0aXRsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3RpdGxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2x0aXBGb3JtYXRGdW5jdGlvbihhcmc/OiAocG9pbnRlclZhbHVlPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0VG9vbHRpcEZvcm1hdEZ1bmN0aW9uWydwb2ludGVyVmFsdWUnXSwgdGFyZ2V0VmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUb29sdGlwRm9ybWF0RnVuY3Rpb25bJ3RhcmdldFZhbHVlJ10pID0+IHN0cmluZyk6IChwb2ludGVyVmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUb29sdGlwRm9ybWF0RnVuY3Rpb25bJ3BvaW50ZXJWYWx1ZSddLCB0YXJnZXRWYWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRvb2x0aXBGb3JtYXRGdW5jdGlvblsndGFyZ2V0VmFsdWUnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndG9vbHRpcEZvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndG9vbHRpcEZvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhCdWxsZXRDaGFydENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBudW1iZXIpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4QnVsbGV0Q2hhcnRDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4QnVsbGV0Q2hhcnRDb21wb25lbnRcbiJdfQ==