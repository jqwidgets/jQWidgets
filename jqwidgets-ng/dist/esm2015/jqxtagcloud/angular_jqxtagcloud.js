import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtagcloud from '../../jqwidgets-scripts/jqwidgets/jqxtagcloud';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTagCloudComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
        // jqxTagCloudComponent events
        this.onBindingComplete = new EventEmitter();
        this.onItemClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
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
        this.host.jqxTagCloud('setOptions', options);
    }
    // jqxTagCloudComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    alterTextCase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('alterTextCase', arg);
        }
        else {
            return this.host.jqxTagCloud('alterTextCase');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('disabled', arg);
        }
        else {
            return this.host.jqxTagCloud('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayLimit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayLimit', arg);
        }
        else {
            return this.host.jqxTagCloud('displayLimit');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayMember', arg);
        }
        else {
            return this.host.jqxTagCloud('displayMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayValue(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayValue', arg);
        }
        else {
            return this.host.jqxTagCloud('displayValue');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    fontSizeUnit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('fontSizeUnit', arg);
        }
        else {
            return this.host.jqxTagCloud('fontSizeUnit');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('height', arg);
        }
        else {
            return this.host.jqxTagCloud('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxColor', arg);
        }
        else {
            return this.host.jqxTagCloud('maxColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('maxFontSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('maxValueToDisplay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minColor', arg);
        }
        else {
            return this.host.jqxTagCloud('minColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('minFontSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('minValueToDisplay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('rtl', arg);
        }
        else {
            return this.host.jqxTagCloud('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sortBy(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortBy', arg);
        }
        else {
            return this.host.jqxTagCloud('sortBy');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sortOrder(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortOrder', arg);
        }
        else {
            return this.host.jqxTagCloud('sortOrder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('source', arg);
        }
        else {
            return this.host.jqxTagCloud('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tagRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('tagRenderer', arg);
        }
        else {
            return this.host.jqxTagCloud('tagRenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    takeTopWeightedItems(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('takeTopWeightedItems', arg);
        }
        else {
            return this.host.jqxTagCloud('takeTopWeightedItems');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('textColor', arg);
        }
        else {
            return this.host.jqxTagCloud('textColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    urlBase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlBase', arg);
        }
        else {
            return this.host.jqxTagCloud('urlBase');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    urlMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlMember', arg);
        }
        else {
            return this.host.jqxTagCloud('urlMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('valueMember', arg);
        }
        else {
            return this.host.jqxTagCloud('valueMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('width', arg);
        }
        else {
            return this.host.jqxTagCloud('width');
        }
    }
    // jqxTagCloudComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxTagCloud('destroy');
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    findTagIndex(tag) {
        return this.host.jqxTagCloud('findTagIndex', tag);
    }
    /**
     * @return {?}
     */
    getHiddenTagsList() {
        return this.host.jqxTagCloud('getHiddenTagsList');
    }
    /**
     * @return {?}
     */
    getRenderedTags() {
        return this.host.jqxTagCloud('getRenderedTags');
    }
    /**
     * @return {?}
     */
    getTagsList() {
        return this.host.jqxTagCloud('getTagsList');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hideItem(index) {
        this.host.jqxTagCloud('hideItem', index);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    insertAt(index, item) {
        this.host.jqxTagCloud('insertAt', index, item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        this.host.jqxTagCloud('removeAt', index);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    updateAt(index, item) {
        this.host.jqxTagCloud('updateAt', index, item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showItem(index) {
        this.host.jqxTagCloud('showItem', index);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingComplete.emit(eventData); }));
        this.host.on('itemClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onItemClick.emit(eventData); }));
    }
} //jqxTagCloudComponent
jqxTagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTagCloud',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTagCloudComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxTagCloudComponent.propDecorators = {
    attrAlterTextCase: [{ type: Input, args: ['alterTextCase',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDisplayLimit: [{ type: Input, args: ['displayLimit',] }],
    attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
    attrDisplayValue: [{ type: Input, args: ['displayValue',] }],
    attrFontSizeUnit: [{ type: Input, args: ['fontSizeUnit',] }],
    attrMaxColor: [{ type: Input, args: ['maxColor',] }],
    attrMaxFontSize: [{ type: Input, args: ['maxFontSize',] }],
    attrMaxValueToDisplay: [{ type: Input, args: ['maxValueToDisplay',] }],
    attrMinColor: [{ type: Input, args: ['minColor',] }],
    attrMinFontSize: [{ type: Input, args: ['minFontSize',] }],
    attrMinValueToDisplay: [{ type: Input, args: ['minValueToDisplay',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSortBy: [{ type: Input, args: ['sortBy',] }],
    attrSortOrder: [{ type: Input, args: ['sortOrder',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrTagRenderer: [{ type: Input, args: ['tagRenderer',] }],
    attrTakeTopWeightedItems: [{ type: Input, args: ['takeTopWeightedItems',] }],
    attrTextColor: [{ type: Input, args: ['textColor',] }],
    attrUrlBase: [{ type: Input, args: ['urlBase',] }],
    attrUrlMember: [{ type: Input, args: ['urlMember',] }],
    attrValueMember: [{ type: Input, args: ['valueMember',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onBindingComplete: [{ type: Output }],
    onItemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrAlterTextCase;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayLimit;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayValue;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrFontSizeUnit;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxFontSize;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxValueToDisplay;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinFontSize;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinValueToDisplay;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSortBy;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSortOrder;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSource;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTagRenderer;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTakeTopWeightedItems;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTextColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrUrlBase;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrUrlMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTagCloudComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTagCloudComponent.prototype.properties;
    /** @type {?} */
    jqxTagCloudComponent.prototype.host;
    /** @type {?} */
    jqxTagCloudComponent.prototype.elementRef;
    /** @type {?} */
    jqxTagCloudComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTagCloudComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxTagCloudComponent.prototype.onItemClick;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0YWdjbG91ZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXh0YWdjbG91ZC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4dGFnY2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFrQzlCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLHNCQUFzQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUErVjNVLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBMVZ4QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLFdBQVcsQ0FBQyxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFH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O0lBQ2xELDRDQUF5Qzs7SUFDekMsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELGdEQUFpRDs7SUFDakQsZ0RBQWdEOztJQUNoRCw0Q0FBd0M7O0lBQ3hDLCtDQUE4Qzs7SUFDOUMscURBQTBEOztJQUMxRCw0Q0FBd0M7O0lBQ3hDLCtDQUE4Qzs7SUFDOUMscURBQTBEOztJQUMxRCx1Q0FBK0I7O0lBQy9CLDBDQUFvQzs7SUFDcEMsNkNBQTBDOztJQUMxQywwQ0FBc0Q7O0lBQ3RELCtDQUFrTjs7SUFDbE4sd0RBQWlFOztJQUNqRSw2Q0FBMEM7O0lBQzFDLDJDQUFzQzs7SUFDdEMsNkNBQTBDOztJQUMxQywrQ0FBOEM7O0lBQzlDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUU3QywwQ0FBaUQ7O0lBRWpELDBDQUFxVjs7SUFDclYsb0NBQVU7O0lBQ1YsMENBQXVCOztJQUN2Qiw0Q0FBcUM7O0lBNFZyQyxpREFBaUQ7O0lBQ2pELDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4VGFnQ2xvdWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRhZ0Nsb3VkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FsdGVyVGV4dENhc2UnKSBhdHRyQWx0ZXJUZXh0Q2FzZTogc3RyaW5nO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzcGxheUxpbWl0JykgYXR0ckRpc3BsYXlMaW1pdDogbnVtYmVyO1xuICAgQElucHV0KCdkaXNwbGF5TWVtYmVyJykgYXR0ckRpc3BsYXlNZW1iZXI6IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzcGxheVZhbHVlJykgYXR0ckRpc3BsYXlWYWx1ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9udFNpemVVbml0JykgYXR0ckZvbnRTaXplVW5pdDogc3RyaW5nO1xuICAgQElucHV0KCdtYXhDb2xvcicpIGF0dHJNYXhDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdtYXhGb250U2l6ZScpIGF0dHJNYXhGb250U2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdtYXhWYWx1ZVRvRGlzcGxheScpIGF0dHJNYXhWYWx1ZVRvRGlzcGxheTogbnVtYmVyO1xuICAgQElucHV0KCdtaW5Db2xvcicpIGF0dHJNaW5Db2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdtaW5Gb250U2l6ZScpIGF0dHJNaW5Gb250U2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdtaW5WYWx1ZVRvRGlzcGxheScpIGF0dHJNaW5WYWx1ZVRvRGlzcGxheTogbnVtYmVyO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzb3J0QnknKSBhdHRyU29ydEJ5OiBzdHJpbmc7XG4gICBASW5wdXQoJ3NvcnRPcmRlcicpIGF0dHJTb3J0T3JkZXI6IHN0cmluZztcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZToganF3aWRnZXRzLlRhZ0Nsb3VkU291cmNlO1xuICAgQElucHV0KCd0YWdSZW5kZXJlcicpIGF0dHJUYWdSZW5kZXJlcjogKGl0ZW1EYXRhOiBqcXdpZGdldHMuVGFnQ2xvdWRUYWdSZW5kZXJlclsnaXRlbURhdGEnXSwgbWluVmFsdWU6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWydtaW5WYWx1ZSddLCB2YWx1ZVJhbmdlOiBqcXdpZGdldHMuVGFnQ2xvdWRUYWdSZW5kZXJlclsndmFsdWVSYW5nZSddKSA9PiBhbnk7XG4gICBASW5wdXQoJ3Rha2VUb3BXZWlnaHRlZEl0ZW1zJykgYXR0clRha2VUb3BXZWlnaHRlZEl0ZW1zOiBib29sZWFuO1xuICAgQElucHV0KCd0ZXh0Q29sb3InKSBhdHRyVGV4dENvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VybEJhc2UnKSBhdHRyVXJsQmFzZTogc3RyaW5nO1xuICAgQElucHV0KCd1cmxNZW1iZXInKSBhdHRyVXJsTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYWx0ZXJUZXh0Q2FzZScsJ2Rpc2FibGVkJywnZGlzcGxheUxpbWl0JywnZGlzcGxheU1lbWJlcicsJ2Rpc3BsYXlWYWx1ZScsJ2ZvbnRTaXplVW5pdCcsJ2hlaWdodCcsJ21heENvbG9yJywnbWF4Rm9udFNpemUnLCdtYXhWYWx1ZVRvRGlzcGxheScsJ21pbkNvbG9yJywnbWluRm9udFNpemUnLCdtaW5WYWx1ZVRvRGlzcGxheScsJ3J0bCcsJ3NvcnRCeScsJ3NvcnRPcmRlcicsJ3NvdXJjZScsJ3RhZ1JlbmRlcmVyJywndGFrZVRvcFdlaWdodGVkSXRlbXMnLCd0ZXh0Q29sb3InLCd1cmxCYXNlJywndXJsTWVtYmVyJywndmFsdWVNZW1iZXInLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhUYWdDbG91ZDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4VGFnQ2xvdWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhUYWdDbG91ZCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhUYWdDbG91ZENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbHRlclRleHRDYXNlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2FsdGVyVGV4dENhc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdhbHRlclRleHRDYXNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNwbGF5TGltaXQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheUxpbWl0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheUxpbWl0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3BsYXlNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2Rpc3BsYXlNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzcGxheVZhbHVlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheVZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheVZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvbnRTaXplVW5pdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdmb250U2l6ZVVuaXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdmb250U2l6ZVVuaXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXhDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtYXhDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21heENvbG9yJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heEZvbnRTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21heEZvbnRTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWF4Rm9udFNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4VmFsdWVUb0Rpc3BsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWF4VmFsdWVUb0Rpc3BsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtYXhWYWx1ZVRvRGlzcGxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5Db2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtaW5Db2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21pbkNvbG9yJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbkZvbnRTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21pbkZvbnRTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWluRm9udFNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluVmFsdWVUb0Rpc3BsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWluVmFsdWVUb0Rpc3BsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtaW5WYWx1ZVRvRGlzcGxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc29ydEJ5KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3NvcnRCeScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3NvcnRCeScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3J0T3JkZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnc29ydE9yZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnc29ydE9yZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBqcXdpZGdldHMuVGFnQ2xvdWRTb3VyY2UpOiBqcXdpZGdldHMuVGFnQ2xvdWRTb3VyY2Uge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGFnUmVuZGVyZXIoYXJnPzogKGl0ZW1EYXRhOiBqcXdpZGdldHMuVGFnQ2xvdWRUYWdSZW5kZXJlclsnaXRlbURhdGEnXSwgbWluVmFsdWU6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWydtaW5WYWx1ZSddLCB2YWx1ZVJhbmdlOiBqcXdpZGdldHMuVGFnQ2xvdWRUYWdSZW5kZXJlclsndmFsdWVSYW5nZSddKSA9PiBhbnkpOiAoaXRlbURhdGE6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWydpdGVtRGF0YSddLCBtaW5WYWx1ZToganF3aWRnZXRzLlRhZ0Nsb3VkVGFnUmVuZGVyZXJbJ21pblZhbHVlJ10sIHZhbHVlUmFuZ2U6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWyd2YWx1ZVJhbmdlJ10pID0+IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3RhZ1JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndGFnUmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGFrZVRvcFdlaWdodGVkSXRlbXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd0YWtlVG9wV2VpZ2h0ZWRJdGVtcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3Rha2VUb3BXZWlnaHRlZEl0ZW1zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRleHRDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd0ZXh0Q29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd0ZXh0Q29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXJsQmFzZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd1cmxCYXNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndXJsQmFzZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cmxNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndXJsTWVtYmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndXJsTWVtYmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlTWVtYmVyKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3ZhbHVlTWVtYmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndmFsdWVNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFRhZ0Nsb3VkQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBmaW5kVGFnSW5kZXgodGFnOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZmluZFRhZ0luZGV4JywgdGFnKTtcbiAgIH1cblxuICAgZ2V0SGlkZGVuVGFnc0xpc3QoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdnZXRIaWRkZW5UYWdzTGlzdCcpO1xuICAgfVxuXG4gICBnZXRSZW5kZXJlZFRhZ3MoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdnZXRSZW5kZXJlZFRhZ3MnKTtcbiAgIH1cblxuICAgZ2V0VGFnc0xpc3QoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdnZXRUYWdzTGlzdCcpO1xuICAgfVxuXG4gICBoaWRlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2hpZGVJdGVtJywgaW5kZXgpO1xuICAgfVxuXG4gICBpbnNlcnRBdChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnaW5zZXJ0QXQnLCBpbmRleCwgaXRlbSk7XG4gICB9XG5cbiAgIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgncmVtb3ZlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVwZGF0ZUF0KGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd1cGRhdGVBdCcsIGluZGV4LCBpdGVtKTtcbiAgIH1cblxuICAgc2hvd0l0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzaG93SXRlbScsIGluZGV4KTtcbiAgIH1cblxuXG4gICAvLyBqcXhUYWdDbG91ZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JpbmRpbmdDb21wbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmluZGluZ0NvbXBsZXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2l0ZW1DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhUYWdDbG91ZENvbXBvbmVudFxuIl19