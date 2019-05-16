import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxbargauge from '../../jqwidgets-scripts/jqwidgets/jqxbargauge';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxBarGaugeComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
        // jqxBarGaugeComponent events
        this.onDrawEnd = new EventEmitter();
        this.onDrawStart = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onTooltipClose = new EventEmitter();
        this.onTooltipOpen = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
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
        if (typeof options.width === 'string' && options.width.indexOf('%') !== -1) {
            options.width = parseInt(options.width, 10) / 100 * this.host.parent().parent().parent().width();
        }
        if (typeof options.height === 'string' && options.height.indexOf('%') !== -1) {
            options.height = parseInt(options.height, 10) / 100 * this.host.parent().parent().parent().height();
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
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
        this.host.jqxBarGauge('setOptions', options);
    }
    // jqxBarGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxBarGauge('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('backgroundColor', arg);
        }
        else {
            return this.host.jqxBarGauge('backgroundColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    barSpacing(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('barSpacing', arg);
        }
        else {
            return this.host.jqxBarGauge('barSpacing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    baseValue(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('baseValue', arg);
        }
        else {
            return this.host.jqxBarGauge('baseValue');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('colorScheme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    customColorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('customColorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('customColorScheme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('disabled', arg);
        }
        else {
            return this.host.jqxBarGauge('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('endAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('endAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    formatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('formatFunction', arg);
        }
        else {
            return this.host.jqxBarGauge('formatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('height', arg);
        }
        else {
            return this.host.jqxBarGauge('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('labels', arg);
        }
        else {
            return this.host.jqxBarGauge('labels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('max', arg);
        }
        else {
            return this.host.jqxBarGauge('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('min', arg);
        }
        else {
            return this.host.jqxBarGauge('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    relativeInnerRadius(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('relativeInnerRadius', arg);
        }
        else {
            return this.host.jqxBarGauge('relativeInnerRadius');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendered(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('rendered', arg);
        }
        else {
            return this.host.jqxBarGauge('rendered');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('startAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('startAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('title', arg);
        }
        else {
            return this.host.jqxBarGauge('title');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('tooltip', arg);
        }
        else {
            return this.host.jqxBarGauge('tooltip');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    useGradient(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('useGradient', arg);
        }
        else {
            return this.host.jqxBarGauge('useGradient');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    values(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('values', arg);
        }
        else {
            return this.host.jqxBarGauge('values');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('width', arg);
        }
        else {
            return this.host.jqxBarGauge('width');
        }
    }
    // jqxBarGaugeComponent functions
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxBarGauge('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxBarGauge('render');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxBarGauge('val', value);
        }
        else {
            return this.host.jqxBarGauge('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('drawEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDrawEnd.emit(eventData); }));
        this.host.on('drawStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDrawStart.emit(eventData); }));
        this.host.on('initialized', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onInitialized.emit(eventData); }));
        this.host.on('tooltipClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onTooltipClose.emit(eventData); }));
        this.host.on('tooltipOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onTooltipOpen.emit(eventData); }));
        this.host.on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onValueChanged.emit(eventData); }));
    }
} //jqxBarGaugeComponent
jqxBarGaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxBarGauge',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxBarGaugeComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxBarGaugeComponent.propDecorators = {
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrBackgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    attrBarSpacing: [{ type: Input, args: ['barSpacing',] }],
    attrBaseValue: [{ type: Input, args: ['baseValue',] }],
    attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
    attrCustomColorScheme: [{ type: Input, args: ['customColorScheme',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEndAngle: [{ type: Input, args: ['endAngle',] }],
    attrFormatFunction: [{ type: Input, args: ['formatFunction',] }],
    attrLabels: [{ type: Input, args: ['labels',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrRelativeInnerRadius: [{ type: Input, args: ['relativeInnerRadius',] }],
    attrRendered: [{ type: Input, args: ['rendered',] }],
    attrStartAngle: [{ type: Input, args: ['startAngle',] }],
    attrTitle: [{ type: Input, args: ['title',] }],
    attrTooltip: [{ type: Input, args: ['tooltip',] }],
    attrUseGradient: [{ type: Input, args: ['useGradient',] }],
    attrValues: [{ type: Input, args: ['values',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onDrawEnd: [{ type: Output }],
    onDrawStart: [{ type: Output }],
    onInitialized: [{ type: Output }],
    onTooltipClose: [{ type: Output }],
    onTooltipOpen: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBackgroundColor;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBarSpacing;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBaseValue;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrColorScheme;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrCustomColorScheme;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrEndAngle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrFormatFunction;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrLabels;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrMax;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrMin;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrRelativeInnerRadius;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrRendered;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrStartAngle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrTitle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrTooltip;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrUseGradient;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrValues;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrWidth;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrHeight;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.autoCreate;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.properties;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.host;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.elementRef;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.widgetObject;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onDrawEnd;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onDrawStart;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onInitialized;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onTooltipClose;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onTooltipOpen;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhiYXJnYXVnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhiYXJnYXVnZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4YmFyZ2F1Z2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUErQjlCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBcVRwUixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBcFQzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLFdBQVcsQ0FBQyxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O29CQUN0RyxRQUFRLEdBQVksS0FBSztnQkFFN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMvQixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsRUFBRTt3QkFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksS0FBSyxFQUFFOzRCQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3pGO3dCQUNELElBQUksUUFBUSxFQUFFOzRCQUNYLE9BQU8sS0FBSyxDQUFDO3lCQUNmO3dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzFELFNBQVM7cUJBQ1g7b0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3FCQUM1RDtpQkFDSDthQUNIO1NBQ0g7SUFDSixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBYyxFQUFFLFNBQWM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Y7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELGdCQUFnQjs7WUFDVCxPQUFPLEdBQUcsRUFBRTtRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQXFCLEVBQUUsT0FBb0I7O1lBQ2hELE9BQU8sR0FBUSxRQUFRLENBQUMsU0FBUztRQUNyQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsUUFBcUIsRUFBRSxPQUFvQjs7WUFDL0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osT0FBTztTQUNUO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDVixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO2FBQ0k7WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekUsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNuRztRQUNELElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzRSxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RHO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVuRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFhO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWCxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsR0FBWTtRQUMzQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNyRDtJQUNKLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVk7UUFDekIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbkQ7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFZO1FBQ3BCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUM7SUFDSixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFZO1FBQ25CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFZO1FBQ3JCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEdBQXlDO1FBQ3hELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBYTtRQUNuQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBWTtRQUNsQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsR0FBeUU7UUFDckYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbEQ7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFxQjtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBOEI7UUFDbEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNKLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQXFCO1FBQ3RCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFZO1FBQ2IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNKLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsR0FBcUI7UUFDdEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdkQ7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxHQUFnQjtRQUN0QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBWTtRQUNwQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBNkI7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQStCO1FBQ3BDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFhO1FBQ3RCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFtQjtRQUN2QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBcUI7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7Ozs7O0lBSUQsT0FBTztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBcUI7UUFDdEIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7SUFXRixjQUFjO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjOzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUYsQ0FBQztFQUVGLHNCQUFzQjs7WUFwV3ZCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHNDQUFzQzthQUNuRDs7OztZQU5nRCxVQUFVOzs7b0NBVXZELEtBQUssU0FBQyxtQkFBbUI7a0NBQ3pCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxZQUFZOzRCQUNsQixLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGFBQWE7b0NBQ25CLEtBQUssU0FBQyxtQkFBbUI7MkJBQ3pCLEtBQUssU0FBQyxVQUFVOzJCQUNoQixLQUFLLFNBQUMsVUFBVTtpQ0FDaEIsS0FBSyxTQUFDLGdCQUFnQjt5QkFDdEIsS0FBSyxTQUFDLFFBQVE7c0JBQ2QsS0FBSyxTQUFDLEtBQUs7c0JBQ1gsS0FBSyxTQUFDLEtBQUs7c0NBQ1gsS0FBSyxTQUFDLHFCQUFxQjsyQkFDM0IsS0FBSyxTQUFDLFVBQVU7NkJBQ2hCLEtBQUssU0FBQyxZQUFZO3dCQUNsQixLQUFLLFNBQUMsT0FBTzswQkFDYixLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsYUFBYTt5QkFDbkIsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7eUJBRWQsS0FBSyxTQUFDLGFBQWE7d0JBdVRuQixNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTs2QkFDTixNQUFNOzRCQUNOLE1BQU07NkJBQ04sTUFBTTs7OztJQWxWUCxxREFBMEQ7O0lBQzFELG1EQUFzRDs7SUFDdEQsOENBQTRDOztJQUM1Qyw2Q0FBMEM7O0lBQzFDLCtDQUE4Qzs7SUFDOUMscURBQXVGOztJQUN2Riw0Q0FBeUM7O0lBQ3pDLDRDQUF3Qzs7SUFDeEMsa0RBQWlIOztJQUNqSCwwQ0FBc0Q7O0lBQ3RELHVDQUF1Qzs7SUFDdkMsdUNBQThCOztJQUM5Qix1REFBdUU7O0lBQ3ZFLDRDQUE0Qzs7SUFDNUMsOENBQTRDOztJQUM1Qyx5Q0FBbUQ7O0lBQ25ELDJDQUF5RDs7SUFDekQsK0NBQStDOztJQUMvQywwQ0FBMkM7O0lBQzNDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUU3QywwQ0FBaUQ7O0lBRWpELDBDQUE4Ujs7SUFDOVIsb0NBQVU7O0lBQ1YsMENBQXVCOztJQUN2Qiw0Q0FBcUM7O0lBa1RyQyx5Q0FBeUM7O0lBQ3pDLDJDQUEyQzs7SUFDM0MsNkNBQTZDOztJQUM3Qyw4Q0FBOEM7O0lBQzlDLDZDQUE2Qzs7SUFDN0MsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhCYXJHYXVnZScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4QmFyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYXR0ckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdiYXJTcGFjaW5nJykgYXR0ckJhclNwYWNpbmc6IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFzZVZhbHVlJykgYXR0ckJhc2VWYWx1ZTogbnVtYmVyO1xuICAgQElucHV0KCdjb2xvclNjaGVtZScpIGF0dHJDb2xvclNjaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCdjdXN0b21Db2xvclNjaGVtZScpIGF0dHJDdXN0b21Db2xvclNjaGVtZToganF3aWRnZXRzLkJhckdhdWdlQ3VzdG9tQ29sb3JTY2hlbWU7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlbmRBbmdsZScpIGF0dHJFbmRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCdmb3JtYXRGdW5jdGlvbicpIGF0dHJGb3JtYXRGdW5jdGlvbjogKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nLCBpbmRleD86IG51bWJlciwgY29sb3I/OiBzdHJpbmcpID0+IHN0cmluZztcbiAgIEBJbnB1dCgnbGFiZWxzJykgYXR0ckxhYmVsczoganF3aWRnZXRzLkJhckdhdWdlTGFiZWxzO1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IG51bWJlcjtcbiAgIEBJbnB1dCgncmVsYXRpdmVJbm5lclJhZGl1cycpIGF0dHJSZWxhdGl2ZUlubmVyUmFkaXVzOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3JlbmRlcmVkJykgYXR0clJlbmRlcmVkOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdzdGFydEFuZ2xlJykgYXR0clN0YXJ0QW5nbGU6IG51bWJlcjtcbiAgIEBJbnB1dCgndGl0bGUnKSBhdHRyVGl0bGU6IGpxd2lkZ2V0cy5CYXJHYXVnZVRpdGxlO1xuICAgQElucHV0KCd0b29sdGlwJykgYXR0clRvb2x0aXA6IGpxd2lkZ2V0cy5CYXJHYXVnZVRvb2x0aXA7XG4gICBASW5wdXQoJ3VzZUdyYWRpZW50JykgYXR0clVzZUdyYWRpZW50OiBib29sZWFuO1xuICAgQElucHV0KCd2YWx1ZXMnKSBhdHRyVmFsdWVzOiBBcnJheTxudW1iZXI+O1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkR1cmF0aW9uJywnYmFja2dyb3VuZENvbG9yJywnYmFyU3BhY2luZycsJ2Jhc2VWYWx1ZScsJ2NvbG9yU2NoZW1lJywnY3VzdG9tQ29sb3JTY2hlbWUnLCdkaXNhYmxlZCcsJ2VuZEFuZ2xlJywnZm9ybWF0RnVuY3Rpb24nLCdoZWlnaHQnLCdsYWJlbHMnLCdtYXgnLCdtaW4nLCdyZWxhdGl2ZUlubmVyUmFkaXVzJywncmVuZGVyZWQnLCdzdGFydEFuZ2xlJywndGl0bGUnLCd0b29sdGlwJywndXNlR3JhZGllbnQnLCd2YWx1ZXMnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhCYXJHYXVnZTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4QmFyR2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMud2lkdGggPT09ICdzdHJpbmcnICYmIG9wdGlvbnMud2lkdGguaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgb3B0aW9ucy53aWR0aCA9IHBhcnNlSW50KG9wdGlvbnMud2lkdGgsIDEwKSAvIDEwMCAqIHRoaXMuaG9zdC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS53aWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5oZWlnaHQuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSBwYXJzZUludChvcHRpb25zLmhlaWdodCwgMTApIC8gMTAwICogdGhpcy5ob3N0LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhlaWdodCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4QmFyR2F1Z2UnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4QmFyR2F1Z2VDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBiYWNrZ3JvdW5kQ29sb3IoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFja2dyb3VuZENvbG9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFja2dyb3VuZENvbG9yJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJhclNwYWNpbmcoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFyU3BhY2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2JhclNwYWNpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFzZVZhbHVlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2Jhc2VWYWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2Jhc2VWYWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xvclNjaGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdjb2xvclNjaGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2NvbG9yU2NoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGN1c3RvbUNvbG9yU2NoZW1lKGFyZz86IGpxd2lkZ2V0cy5CYXJHYXVnZUN1c3RvbUNvbG9yU2NoZW1lKToganF3aWRnZXRzLkJhckdhdWdlQ3VzdG9tQ29sb3JTY2hlbWUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdjdXN0b21Db2xvclNjaGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2N1c3RvbUNvbG9yU2NoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdlbmRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2VuZEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvcm1hdEZ1bmN0aW9uKGFyZz86ICh2YWx1ZT86IG51bWJlciB8IHN0cmluZywgaW5kZXg/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKSA9PiBzdHJpbmcpOiAodmFsdWU/OiBudW1iZXIgfCBzdHJpbmcsIGluZGV4PzogbnVtYmVyLCBjb2xvcj86IHN0cmluZykgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnZm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdmb3JtYXRGdW5jdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVscyhhcmc/OiBqcXdpZGdldHMuQmFyR2F1Z2VMYWJlbHMpOiBqcXdpZGdldHMuQmFyR2F1Z2VMYWJlbHMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdsYWJlbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdsYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbGF0aXZlSW5uZXJSYWRpdXMoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgncmVsYXRpdmVJbm5lclJhZGl1cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3JlbGF0aXZlSW5uZXJSYWRpdXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdyZW5kZXJlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3JlbmRlcmVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXJ0QW5nbGUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnc3RhcnRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3N0YXJ0QW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGUoYXJnPzoganF3aWRnZXRzLkJhckdhdWdlVGl0bGUpOiBqcXdpZGdldHMuQmFyR2F1Z2VUaXRsZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3RpdGxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgndGl0bGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbHRpcChhcmc/OiBqcXdpZGdldHMuQmFyR2F1Z2VUb29sdGlwKToganF3aWRnZXRzLkJhckdhdWdlVG9vbHRpcCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3Rvb2x0aXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd0b29sdGlwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVzZUdyYWRpZW50KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgndXNlR3JhZGllbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd1c2VHcmFkaWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZXMoYXJnPzogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd2YWx1ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd2YWx1ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEJhckdhdWdlQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3JlbmRlcicpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBBcnJheTxudW1iZXI+KTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeEJhckdhdWdlQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uRHJhd0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVG9vbHRpcENsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVG9vbHRpcE9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmF3RW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmF3RW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYXdTdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhd1N0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2luaXRpYWxpemVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Jbml0aWFsaXplZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd0b29sdGlwQ2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblRvb2x0aXBDbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd0b29sdGlwT3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVG9vbHRpcE9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndmFsdWVDaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeEJhckdhdWdlQ29tcG9uZW50XG4iXX0=