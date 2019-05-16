import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxprogressbar from '../../jqwidgets-scripts/jqwidgets/jqxprogressbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxProgressBarComponent = /** @class */ (function () {
    function jqxProgressBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'colorRanges', 'disabled', 'height', 'layout', 'max', 'min', 'orientation', 'rtl', 'renderText', 'showText', 'template', 'theme', 'value', 'width'];
        // jqxProgressBarComponent events
        this.onComplete = new EventEmitter();
        this.onInvalidValue = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxProgressBarComponent.prototype.ngOnInit = /**
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
    jqxProgressBarComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxProgressBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxProgressBar(this.properties[i])) {
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
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
    jqxProgressBarComponent.prototype.arraysEqual = /**
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
    jqxProgressBarComponent.prototype.manageAttributes = /**
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
    jqxProgressBarComponent.prototype.moveClasses = /**
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
    jqxProgressBarComponent.prototype.moveStyles = /**
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
    jqxProgressBarComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxProgressBar', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxProgressBarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxProgressBarComponent.prototype.__updateRect__ = /**
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
    jqxProgressBarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxProgressBar('setOptions', options);
    };
    // jqxProgressBarComponent properties
    // jqxProgressBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.animationDuration = 
    // jqxProgressBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('animationDuration', arg);
        }
        else {
            return this.host.jqxProgressBar('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.colorRanges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('colorRanges', arg);
        }
        else {
            return this.host.jqxProgressBar('colorRanges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('disabled', arg);
        }
        else {
            return this.host.jqxProgressBar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('height', arg);
        }
        else {
            return this.host.jqxProgressBar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.layout = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('layout', arg);
        }
        else {
            return this.host.jqxProgressBar('layout');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('max', arg);
        }
        else {
            return this.host.jqxProgressBar('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('min', arg);
        }
        else {
            return this.host.jqxProgressBar('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.orientation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('orientation', arg);
        }
        else {
            return this.host.jqxProgressBar('orientation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('rtl', arg);
        }
        else {
            return this.host.jqxProgressBar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.renderText = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('renderText', arg);
        }
        else {
            return this.host.jqxProgressBar('renderText');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.showText = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('showText', arg);
        }
        else {
            return this.host.jqxProgressBar('showText');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('template', arg);
        }
        else {
            return this.host.jqxProgressBar('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('theme', arg);
        }
        else {
            return this.host.jqxProgressBar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('value', arg);
        }
        else {
            return this.host.jqxProgressBar('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxProgressBarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('width', arg);
        }
        else {
            return this.host.jqxProgressBar('width');
        }
    };
    // jqxProgressBarComponent functions
    // jqxProgressBarComponent functions
    /**
     * @param {?} value
     * @return {?}
     */
    jqxProgressBarComponent.prototype.actualValue = 
    // jqxProgressBarComponent functions
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.host.jqxProgressBar('actualValue', value);
    };
    /**
     * @return {?}
     */
    jqxProgressBarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxProgressBar('destroy');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxProgressBarComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxProgressBar('val', value);
        }
        else {
            return this.host.jqxProgressBar('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxProgressBarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('complete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onComplete.emit(eventData); }));
        this.host.on('invalidValue', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onInvalidValue.emit(eventData); }));
        this.host.on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValueChanged.emit(eventData); }));
    };
    jqxProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxProgressBar',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxProgressBarComponent.propDecorators = {
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrColorRanges: [{ type: Input, args: ['colorRanges',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrLayout: [{ type: Input, args: ['layout',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrOrientation: [{ type: Input, args: ['orientation',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrRenderText: [{ type: Input, args: ['renderText',] }],
        attrShowText: [{ type: Input, args: ['showText',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onComplete: [{ type: Output }],
        onInvalidValue: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxProgressBarComponent;
}()); //jqxProgressBarComponent
export { jqxProgressBarComponent };
if (false) {
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrColorRanges;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrLayout;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrMax;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrMin;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrRenderText;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrShowText;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrValue;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxProgressBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxProgressBarComponent.prototype.properties;
    /** @type {?} */
    jqxProgressBarComponent.prototype.host;
    /** @type {?} */
    jqxProgressBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxProgressBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onComplete;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onInvalidValue;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwcm9ncmVzc2Jhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhwcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4cHJvZ3Jlc3NiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQThCRyxpQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxtQkFBbUIsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBK1B6SyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBM1AzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxD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PVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhQcm9ncmVzc0JhcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4UHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnY29sb3JSYW5nZXMnKSBhdHRyQ29sb3JSYW5nZXM6IEFycmF5PGpxd2lkZ2V0cy5Qcm9ncmVzc0JhckNvbG9yUmFuZ2VzPjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2xheW91dCcpIGF0dHJMYXlvdXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogc3RyaW5nICB8IG51bWJlcjtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdvcmllbnRhdGlvbicpIGF0dHJPcmllbnRhdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdyZW5kZXJUZXh0JykgYXR0clJlbmRlclRleHQ6ICh0ZXh0PzoganF3aWRnZXRzLlByb2dyZXNzQmFyUmVuZGVyVGV4dFsndGV4dCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Qcm9ncmVzc0JhclJlbmRlclRleHRbJ3ZhbHVlJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnc2hvd1RleHQnKSBhdHRyU2hvd1RleHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RlbXBsYXRlJykgYXR0clRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uRHVyYXRpb24nLCdjb2xvclJhbmdlcycsJ2Rpc2FibGVkJywnaGVpZ2h0JywnbGF5b3V0JywnbWF4JywnbWluJywnb3JpZW50YXRpb24nLCdydGwnLCdyZW5kZXJUZXh0Jywnc2hvd1RleHQnLCd0ZW1wbGF0ZScsJ3RoZW1lJywndmFsdWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhQcm9ncmVzc0JhcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0Jhcih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhQcm9ncmVzc0JhcicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0Jhcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhQcm9ncmVzc0JhckNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCdhbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbG9yUmFuZ2VzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5Qcm9ncmVzc0JhckNvbG9yUmFuZ2VzPik6IEFycmF5PGpxd2lkZ2V0cy5Qcm9ncmVzc0JhckNvbG9yUmFuZ2VzPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2NvbG9yUmFuZ2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignY29sb3JSYW5nZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgIHwgbnVtYmVyKTogc3RyaW5nICB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYXlvdXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignbGF5b3V0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignbGF5b3V0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBzdHJpbmcgIHwgbnVtYmVyKTogc3RyaW5nICB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9yaWVudGF0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ29yaWVudGF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0Jhcignb3JpZW50YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlclRleHQoYXJnPzogKHRleHQ/OiBqcXdpZGdldHMuUHJvZ3Jlc3NCYXJSZW5kZXJUZXh0Wyd0ZXh0J10sIHZhbHVlPzoganF3aWRnZXRzLlByb2dyZXNzQmFyUmVuZGVyVGV4dFsndmFsdWUnXSkgPT4gc3RyaW5nKTogKHRleHQ/OiBqcXdpZGdldHMuUHJvZ3Jlc3NCYXJSZW5kZXJUZXh0Wyd0ZXh0J10sIHZhbHVlPzoganF3aWRnZXRzLlByb2dyZXNzQmFyUmVuZGVyVGV4dFsndmFsdWUnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigncmVuZGVyVGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ3JlbmRlclRleHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1RleHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCdzaG93VGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ3Nob3dUZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRlbXBsYXRlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigndGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCd2YWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0Jhcignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhQcm9ncmVzc0JhckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFjdHVhbFZhbHVlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcignYWN0dWFsVmFsdWUnLCB2YWx1ZSk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UHJvZ3Jlc3NCYXIoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFByb2dyZXNzQmFyKCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQcm9ncmVzc0JhcigndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeFByb2dyZXNzQmFyQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25JbnZhbGlkVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb21wbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaW52YWxpZFZhbHVlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25JbnZhbGlkVmFsdWUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndmFsdWVDaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFByb2dyZXNzQmFyQ29tcG9uZW50XG4iXX0=