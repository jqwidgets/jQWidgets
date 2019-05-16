import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxvalidator from '../../jqwidgets-scripts/jqwidgets/jqxvalidator';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxValidatorComponent = /** @class */ (function () {
    function jqxValidatorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrow', 'animation', 'animationDuration', 'closeOnClick', 'focus', 'hintType', 'onError', 'onSuccess', 'position', 'rules', 'rtl'];
        // jqxValidatorComponent events
        this.onValidationError = new EventEmitter();
        this.onValidationSuccess = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.ngOnInit = /**
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
    jqxValidatorComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxValidator(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxValidator(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxValidator(this.properties[i])) {
                        this.host.jqxValidator(this.properties[i], this[attrName]);
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
    jqxValidatorComponent.prototype.arraysEqual = /**
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
    jqxValidatorComponent.prototype.manageAttributes = /**
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
    jqxValidatorComponent.prototype.moveClasses = /**
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
    jqxValidatorComponent.prototype.moveStyles = /**
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
    jqxValidatorComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxValidatorComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.__updateRect__ = /**
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
    jqxValidatorComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxValidator('setOptions', options);
    };
    // jqxValidatorComponent properties
    // jqxValidatorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.arrow = 
    // jqxValidatorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('arrow', arg);
        }
        else {
            return this.host.jqxValidator('arrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.animation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animation', arg);
        }
        else {
            return this.host.jqxValidator('animation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.animationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animationDuration', arg);
        }
        else {
            return this.host.jqxValidator('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.closeOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('closeOnClick', arg);
        }
        else {
            return this.host.jqxValidator('closeOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.focus = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('focus', arg);
        }
        else {
            return this.host.jqxValidator('focus');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.hintType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('hintType', arg);
        }
        else {
            return this.host.jqxValidator('hintType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.onError = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onError', arg);
        }
        else {
            return this.host.jqxValidator('onError');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.onSuccess = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onSuccess', arg);
        }
        else {
            return this.host.jqxValidator('onSuccess');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('position', arg);
        }
        else {
            return this.host.jqxValidator('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.rules = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rules', arg);
        }
        else {
            return this.host.jqxValidator('rules');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rtl', arg);
        }
        else {
            return this.host.jqxValidator('rtl');
        }
    };
    // jqxValidatorComponent functions
    // jqxValidatorComponent functions
    /**
     * @param {?} id
     * @return {?}
     */
    jqxValidatorComponent.prototype.hideHint = 
    // jqxValidatorComponent functions
    /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.host.jqxValidator('hideHint', id);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.host.jqxValidator('hide');
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        this.host.jqxValidator('updatePosition');
    };
    /**
     * @param {?=} htmlElement
     * @return {?}
     */
    jqxValidatorComponent.prototype.validate = /**
     * @param {?=} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        this.host.jqxValidator('validate', htmlElement);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    jqxValidatorComponent.prototype.validateInput = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.host.jqxValidator('validateInput', id);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('validationError', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValidationError.emit(eventData); }));
        this.host.on('validationSuccess', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValidationSuccess.emit(eventData); }));
    };
    jqxValidatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxValidator',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxValidatorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxValidatorComponent.propDecorators = {
        attrArrow: [{ type: Input, args: ['arrow',] }],
        attrAnimation: [{ type: Input, args: ['animation',] }],
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrCloseOnClick: [{ type: Input, args: ['closeOnClick',] }],
        attrFocus: [{ type: Input, args: ['focus',] }],
        attrHintType: [{ type: Input, args: ['hintType',] }],
        attrOnError: [{ type: Input, args: ['onError',] }],
        attrOnSuccess: [{ type: Input, args: ['onSuccess',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRules: [{ type: Input, args: ['rules',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onValidationError: [{ type: Output }],
        onValidationSuccess: [{ type: Output }]
    };
    return jqxValidatorComponent;
}()); //jqxValidatorComponent
export { jqxValidatorComponent };
if (false) {
    /** @type {?} */
    jqxValidatorComponent.prototype.attrArrow;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrAnimation;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrCloseOnClick;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrFocus;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrHintType;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrOnError;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrOnSuccess;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrPosition;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrRules;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrRtl;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrWidth;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrHeight;
    /** @type {?} */
    jqxValidatorComponent.prototype.autoCreate;
    /** @type {?} */
    jqxValidatorComponent.prototype.properties;
    /** @type {?} */
    jqxValidatorComponent.prototype.host;
    /** @type {?} */
    jqxValidatorComponent.prototype.elementRef;
    /** @type {?} */
    jqxValidatorComponent.prototype.widgetObject;
    /** @type {?} */
    jqxValidatorComponent.prototype.onValidationError;
    /** @type {?} */
    jqxValidatorComponent.prototype.onValidationSuccess;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh2YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4dmFsaWRhdG9yLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXh2YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTRCRywrQkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQzs7UUFtT3hJLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTlOaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FB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LEVBQUUsc0NBQXNDO2lCQUNuRDs7OztnQkFOZ0QsVUFBVTs7OzRCQVV2RCxLQUFLLFNBQUMsT0FBTztnQ0FDYixLQUFLLFNBQUMsV0FBVzt3Q0FDakIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLEtBQUssU0FBQyxPQUFPOytCQUNiLEtBQUssU0FBQyxVQUFVOzhCQUNoQixLQUFLLFNBQUMsU0FBUztnQ0FDZixLQUFLLFNBQUMsV0FBVzsrQkFDakIsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxPQUFPOzBCQUNiLEtBQUssU0FBQyxLQUFLOzRCQUNYLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhO29DQXFPbkIsTUFBTTtzQ0FDTixNQUFNOztJQU9WLDRCQUFDO0NBQUEsQUFsUUQsSUFrUUMsQ0FBQyx1QkFBdUI7U0E3UFoscUJBQXFCOzs7SUFFL0IsMENBQW1DOztJQUNuQyw4Q0FBMEM7O0lBQzFDLHNEQUEwRDs7SUFDMUQsaURBQWlEOztJQUNqRCwwQ0FBbUM7O0lBQ25DLDZDQUF3Qzs7SUFDeEMsNENBQTBDOztJQUMxQyw4Q0FBOEM7O0lBQzlDLDZDQUF3Qzs7SUFDeEMsMENBQTBEOztJQUMxRCx3Q0FBK0I7O0lBQy9CLDBDQUEyQzs7SUFDM0MsMkNBQTZDOztJQUU3QywyQ0FBaUQ7O0lBRWpELDJDQUFrSjs7SUFDbEoscUNBQVU7O0lBQ1YsMkNBQXVCOztJQUN2Qiw2Q0FBc0M7O0lBZ090QyxrREFBaUQ7O0lBQ2pELG9EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4VmFsaWRhdG9yJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhWYWxpZGF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYXJyb3cnKSBhdHRyQXJyb3c6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FuaW1hdGlvbicpIGF0dHJBbmltYXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnY2xvc2VPbkNsaWNrJykgYXR0ckNsb3NlT25DbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9jdXMnKSBhdHRyRm9jdXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2hpbnRUeXBlJykgYXR0ckhpbnRUeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ29uRXJyb3InKSBhdHRyT25FcnJvcjogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25TdWNjZXNzJykgYXR0ck9uU3VjY2VzczogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncG9zaXRpb24nKSBhdHRyUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgncnVsZXMnKSBhdHRyUnVsZXM6IEFycmF5PGpxd2lkZ2V0cy5WYWxpZGF0b3JSdWxlPjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhcnJvdycsJ2FuaW1hdGlvbicsJ2FuaW1hdGlvbkR1cmF0aW9uJywnY2xvc2VPbkNsaWNrJywnZm9jdXMnLCdoaW50VHlwZScsJ29uRXJyb3InLCdvblN1Y2Nlc3MnLCdwb3NpdGlvbicsJ3J1bGVzJywncnRsJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFZhbGlkYXRvcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VmFsaWRhdG9yJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhWYWxpZGF0b3JDb21wb25lbnQgcHJvcGVydGllc1xuICAgYXJyb3coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignYXJyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignYXJyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdhbmltYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignYW5pbWF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdhbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZU9uQ2xpY2soYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignY2xvc2VPbkNsaWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ2Nsb3NlT25DbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb2N1cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdmb2N1cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdmb2N1cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoaW50VHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignaGludFR5cGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignaGludFR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25FcnJvcihhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdvbkVycm9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ29uRXJyb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25TdWNjZXNzKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ29uU3VjY2VzcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdvblN1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ3Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ3Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ1bGVzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5WYWxpZGF0b3JSdWxlPik6IEFycmF5PGpxd2lkZ2V0cy5WYWxpZGF0b3JSdWxlPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdydWxlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCdydWxlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFZhbGlkYXRvckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGhpZGVIaW50KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ2hpZGVIaW50JywgaWQpO1xuICAgfVxuXG4gICBoaWRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFZhbGlkYXRvcignaGlkZScpO1xuICAgfVxuXG4gICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhWYWxpZGF0b3IoJ3VwZGF0ZVBvc2l0aW9uJyk7XG4gICB9XG5cbiAgIHZhbGlkYXRlKGh0bWxFbGVtZW50PzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCd2YWxpZGF0ZScsIGh0bWxFbGVtZW50KTtcbiAgIH1cblxuICAgdmFsaWRhdGVJbnB1dChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VmFsaWRhdG9yKCd2YWxpZGF0ZUlucHV0JywgaWQpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFZhbGlkYXRvckNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblZhbGlkYXRpb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblZhbGlkYXRpb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbigndmFsaWRhdGlvbkVycm9yJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WYWxpZGF0aW9uRXJyb3IuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndmFsaWRhdGlvblN1Y2Nlc3MnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZhbGlkYXRpb25TdWNjZXNzLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhWYWxpZGF0b3JDb21wb25lbnRcbiJdfQ==