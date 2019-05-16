import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';
import * as jqxpasswordinput from '../../jqwidgets-scripts/jqwidgets/jqxpasswordinput';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
import * as jqxmaskedinput from '../../jqwidgets-scripts/jqwidgets/jqxmaskedinput';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxform from '../../jqwidgets-scripts/jqwidgets/jqxform';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxFormComponent = /** @class */ (function () {
    function jqxFormComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['padding', 'backgroundColor', 'borderColor', 'value', 'template'];
        // jqxFormComponent events
        this.onFormDataChange = new EventEmitter();
        this.onButtonClick = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize((/**
         * @return {?}
         */
        function () {
            _this.__updateRect__();
        }));
    }
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.ngOnInit = /**
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
    jqxFormComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxForm(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxForm(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxForm(this.properties[i])) {
                        this.host.jqxForm(this.properties[i], this[attrName]);
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
    jqxFormComponent.prototype.arraysEqual = /**
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
    jqxFormComponent.prototype.manageAttributes = /**
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
    jqxFormComponent.prototype.moveClasses = /**
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
    jqxFormComponent.prototype.moveStyles = /**
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
    jqxFormComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxForm', options);
        this.__updateRect__();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxFormComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxFormComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxForm('setOptions', options);
    };
    // jqxFormComponent properties
    // jqxFormComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.padding = 
    // jqxFormComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('padding', arg);
        }
        else {
            return this.host.jqxForm('padding');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.backgroundColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('backgroundColor', arg);
        }
        else {
            return this.host.jqxForm('backgroundColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.borderColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('borderColor', arg);
        }
        else {
            return this.host.jqxForm('borderColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('value', arg);
        }
        else {
            return this.host.jqxForm('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('template', arg);
        }
        else {
            return this.host.jqxForm('template');
        }
    };
    // jqxFormComponent functions
    // jqxFormComponent functions
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.getInstance = 
    // jqxFormComponent functions
    /**
     * @return {?}
     */
    function () {
        return this.host.jqxForm('getInstance');
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxForm('refresh');
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxForm('destroy');
    };
    /**
     * @param {?} name
     * @return {?}
     */
    jqxFormComponent.prototype.hideComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.host.jqxForm('hideComponent', name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    jqxFormComponent.prototype.showComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.host.jqxForm('showComponent', name);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxFormComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxForm('val', value);
        }
        else {
            return this.host.jqxForm('val');
        }
    };
    ;
    /**
     * @param {?=} action
     * @param {?=} target
     * @param {?=} method
     * @return {?}
     */
    jqxFormComponent.prototype.submit = /**
     * @param {?=} action
     * @param {?=} target
     * @param {?=} method
     * @return {?}
     */
    function (action, target, method) {
        this.host.jqxForm('submit', action, target, method);
    };
    /**
     * @param {?=} name
     * @return {?}
     */
    jqxFormComponent.prototype.getComponentByName = /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        return this.host.jqxForm('getComponentByName', name);
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('formDataChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onFormDataChange.emit(eventData); }));
        this.host.on('buttonClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onButtonClick.emit(eventData); }));
    };
    jqxFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxForm',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxFormComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxFormComponent.propDecorators = {
        attrPadding: [{ type: Input, args: ['padding',] }],
        attrBackgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        attrBorderColor: [{ type: Input, args: ['borderColor',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onFormDataChange: [{ type: Output }],
        onButtonClick: [{ type: Output }]
    };
    return jqxFormComponent;
}()); //jqxFormComponent
export { jqxFormComponent };
if (false) {
    /** @type {?} */
    jqxFormComponent.prototype.attrPadding;
    /** @type {?} */
    jqxFormComponent.prototype.attrBackgroundColor;
    /** @type {?} */
    jqxFormComponent.prototype.attrBorderColor;
    /** @type {?} */
    jqxFormComponent.prototype.attrValue;
    /** @type {?} */
    jqxFormComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxFormComponent.prototype.attrWidth;
    /** @type {?} */
    jqxFormComponent.prototype.attrHeight;
    /** @type {?} */
    jqxFormComponent.prototype.autoCreate;
    /** @type {?} */
    jqxFormComponent.prototype.properties;
    /** @type {?} */
    jqxFormComponent.prototype.host;
    /** @type {?} */
    jqxFormComponent.prototype.elementRef;
    /** @type {?} */
    jqxFormComponent.prototype.widgetObject;
    /** @type {?} */
    jqxFormComponent.prototype.onFormDataChange;
    /** @type {?} */
    jqxFormComponent.prototype.onButtonClick;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGZvcm0vIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXNCRywwQkFBWSxnQkFBNEI7UUFBeEMsaUJBS0M7UUFacUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQzs7UUF3TTVFLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBbk0xQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7UUFBQztZQUNuQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FB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QyxDQUFDLEVBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUM1RixDQUFDOztnQkEvTkgsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsc0NBQXNDO2lCQUNuRDs7OztnQkFOZ0QsVUFBVTs7OzhCQVV2RCxLQUFLLFNBQUMsU0FBUztzQ0FDZixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsYUFBYTs0QkFDbkIsS0FBSyxTQUFDLE9BQU87K0JBQ2IsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhO21DQTBNbkIsTUFBTTtnQ0FDTixNQUFNOztJQU9WLHVCQUFDO0NBQUEsQUFqT0QsSUFpT0MsQ0FBQyxrQkFBa0I7U0E1TlAsZ0JBQWdCOzs7SUFFMUIsdUNBQXFEOztJQUNyRCwrQ0FBc0Q7O0lBQ3RELDJDQUE4Qzs7SUFDOUMscUNBQStCOztJQUMvQix3Q0FBbUU7O0lBQ25FLHFDQUEyQzs7SUFDM0Msc0NBQTZDOztJQUU3QyxzQ0FBaUQ7O0lBRWpELHNDQUFzRjs7SUFDdEYsZ0NBQVU7O0lBQ1Ysc0NBQXVCOztJQUN2Qix3Q0FBaUM7O0lBcU1qQyw0Q0FBZ0Q7O0lBQ2hELHlDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4Rm9ybScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdwYWRkaW5nJykgYXR0clBhZGRpbmc6IGpxd2lkZ2V0cy5Gb3JtUGFkZGluZztcbiAgIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYXR0ckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdib3JkZXJDb2xvcicpIGF0dHJCb3JkZXJDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogYW55O1xuICAgQElucHV0KCd0ZW1wbGF0ZScpIGF0dHJUZW1wbGF0ZTogQXJyYXk8anF3aWRnZXRzLkZvcm1UZW1wbGF0ZUl0ZW0+O1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ3BhZGRpbmcnLCdiYWNrZ3JvdW5kQ29sb3InLCdib3JkZXJDb2xvcicsJ3ZhbHVlJywndGVtcGxhdGUnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4Rm9ybTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIEpRWExpdGUod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeEZvcm0odGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm0odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4Rm9ybSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4Rm9ybScsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9fdXBkYXRlUmVjdF9fKCk7XG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4Rm9ybUNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBwYWRkaW5nKGFyZz86IGpxd2lkZ2V0cy5Gb3JtUGFkZGluZyk6IGpxd2lkZ2V0cy5Gb3JtUGFkZGluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybSgncGFkZGluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybSgncGFkZGluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBiYWNrZ3JvdW5kQ29sb3IoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtKCdiYWNrZ3JvdW5kQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm0oJ2JhY2tncm91bmRDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBib3JkZXJDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ2JvcmRlckNvbG9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtKCdib3JkZXJDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtKCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBBcnJheTxqcXdpZGdldHMuRm9ybVRlbXBsYXRlSXRlbT4pOiBBcnJheTxqcXdpZGdldHMuRm9ybVRlbXBsYXRlSXRlbT4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtKCd0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEZvcm1Db21wb25lbnQgZnVuY3Rpb25zXG4gICBnZXRJbnN0YW5jZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtKCdnZXRJbnN0YW5jZScpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGhpZGVDb21wb25lbnQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybSgnaGlkZUNvbXBvbmVudCcsIG5hbWUpO1xuICAgfVxuXG4gICBzaG93Q29tcG9uZW50KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm0oJ3Nob3dDb21wb25lbnQnLCBuYW1lKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogYW55KTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm0oJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm0oJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuICAgc3VibWl0KGFjdGlvbj86IHN0cmluZywgdGFyZ2V0Pzogc3RyaW5nLCBtZXRob2Q/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtKCdzdWJtaXQnLCBhY3Rpb24sIHRhcmdldCwgbWV0aG9kKTtcbiAgIH1cblxuICAgZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWU/OiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtKCdnZXRDb21wb25lbnRCeU5hbWUnLCBuYW1lKTtcbiAgIH1cblxuXG4gICAvLyBqcXhGb3JtQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uRm9ybURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25CdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Zvcm1EYXRhQ2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Gb3JtRGF0YUNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdidXR0b25DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQnV0dG9uQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeEZvcm1Db21wb25lbnRcbiJdfQ==