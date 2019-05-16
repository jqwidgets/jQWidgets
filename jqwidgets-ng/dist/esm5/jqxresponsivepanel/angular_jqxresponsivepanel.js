import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxresponsivepanel from '../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxResponsivePanelComponent = /** @class */ (function () {
    function jqxResponsivePanelComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.ngOnInit = /**
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
    jqxResponsivePanelComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
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
    jqxResponsivePanelComponent.prototype.arraysEqual = /**
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
    jqxResponsivePanelComponent.prototype.manageAttributes = /**
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
    jqxResponsivePanelComponent.prototype.moveClasses = /**
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
    jqxResponsivePanelComponent.prototype.moveStyles = /**
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
    jqxResponsivePanelComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.__updateRect__ = /**
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
    jqxResponsivePanelComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxResponsivePanel('setOptions', options);
    };
    // jqxResponsivePanelComponent properties
    // jqxResponsivePanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationDirection = 
    // jqxResponsivePanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationShowDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.autoClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.collapseBreakpoint = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.collapseWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.toggleButton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.toggleButtonSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    };
    // jqxResponsivePanelComponent functions
    // jqxResponsivePanelComponent functions
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.close = 
    // jqxResponsivePanelComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('close');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('destroy');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.isCollapsed = /**
     * @return {?}
     */
    function () {
        return this.host.jqxResponsivePanel('isCollapsed');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.host.jqxResponsivePanel('isOpened');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('open');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('refresh');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('render');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClose.emit(eventData); }));
        this.host.on('collapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapse.emit(eventData); }));
        this.host.on('expand', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpand.emit(eventData); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOpen.emit(eventData); }));
    };
    jqxResponsivePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxResponsivePanel',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxResponsivePanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxResponsivePanelComponent.propDecorators = {
        attrAnimationDirection: [{ type: Input, args: ['animationDirection',] }],
        attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
        attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAutoClose: [{ type: Input, args: ['autoClose',] }],
        attrCollapseBreakpoint: [{ type: Input, args: ['collapseBreakpoint',] }],
        attrCollapseWidth: [{ type: Input, args: ['collapseWidth',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToggleButton: [{ type: Input, args: ['toggleButton',] }],
        attrToggleButtonSize: [{ type: Input, args: ['toggleButtonSize',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onCollapse: [{ type: Output }],
        onExpand: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxResponsivePanelComponent;
}()); //jqxResponsivePanelComponent
export { jqxResponsivePanelComponent };
if (false) {
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationDirection;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAutoClose;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrCollapseBreakpoint;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrCollapseWidth;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrTheme;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrToggleButton;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrToggleButtonSize;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrWidth;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrHeight;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.autoCreate;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.properties;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.host;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.elementRef;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.widgetObject;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onClose;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onCollapse;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onExpand;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cmVzcG9uc2l2ZXBhbmVsLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTRCRyxxQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBMlB4TixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXhQbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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Li4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhSZXNwb25zaXZlUGFuZWwnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFJlc3BvbnNpdmVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25EaXJlY3Rpb24nKSBhdHRyQW5pbWF0aW9uRGlyZWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEZWxheScpIGF0dHJBbmltYXRpb25IaWRlRGVsYXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uU2hvd0RlbGF5JykgYXR0ckFuaW1hdGlvblNob3dEZWxheTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdhbmltYXRpb25UeXBlJykgYXR0ckFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgIEBJbnB1dCgnYXV0b0Nsb3NlJykgYXR0ckF1dG9DbG9zZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sbGFwc2VCcmVha3BvaW50JykgYXR0ckNvbGxhcHNlQnJlYWtwb2ludDogbnVtYmVyO1xuICAgQElucHV0KCdjb2xsYXBzZVdpZHRoJykgYXR0ckNvbGxhcHNlV2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgnaW5pdENvbnRlbnQnKSBhdHRySW5pdENvbnRlbnQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RvZ2dsZUJ1dHRvbicpIGF0dHJUb2dnbGVCdXR0b246IHN0cmluZyB8IGFueTtcbiAgIEBJbnB1dCgndG9nZ2xlQnV0dG9uU2l6ZScpIGF0dHJUb2dnbGVCdXR0b25TaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uRGlyZWN0aW9uJywnYW5pbWF0aW9uSGlkZURlbGF5JywnYW5pbWF0aW9uU2hvd0RlbGF5JywnYW5pbWF0aW9uVHlwZScsJ2F1dG9DbG9zZScsJ2NvbGxhcHNlQnJlYWtwb2ludCcsJ2NvbGxhcHNlV2lkdGgnLCdoZWlnaHQnLCdpbml0Q29udGVudCcsJ3RoZW1lJywndG9nZ2xlQnV0dG9uJywndG9nZ2xlQnV0dG9uU2l6ZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFJlc3BvbnNpdmVQYW5lbDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UmVzcG9uc2l2ZVBhbmVsJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhSZXNwb25zaXZlUGFuZWxDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uRGlyZWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25EaXJlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uRGlyZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkhpZGVEZWxheShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uSGlkZURlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvbkhpZGVEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25TaG93RGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvblNob3dEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25TaG93RGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uVHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uVHlwZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25UeXBlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9DbG9zZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhdXRvQ2xvc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYXV0b0Nsb3NlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbGxhcHNlQnJlYWtwb2ludChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY29sbGFwc2VCcmVha3BvaW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2NvbGxhcHNlQnJlYWtwb2ludCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xsYXBzZVdpZHRoKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdjb2xsYXBzZVdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2NvbGxhcHNlV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluaXRDb250ZW50KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2luaXRDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2luaXRDb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVCdXR0b24oYXJnPzogc3RyaW5nIHwgYW55KTogc3RyaW5nIHwgYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RvZ2dsZUJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0b2dnbGVCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9nZ2xlQnV0dG9uU2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgndG9nZ2xlQnV0dG9uU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0b2dnbGVCdXR0b25TaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFJlc3BvbnNpdmVQYW5lbENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY2xvc2UnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgaXNDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaXNDb2xsYXBzZWQnKTtcbiAgIH1cblxuICAgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaXNPcGVuZWQnKTtcbiAgIH1cblxuICAgb3BlbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ29wZW4nKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgncmVuZGVyJyk7XG4gICB9XG5cblxuICAgLy8ganF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sbGFwc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbGxhcHNlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2V4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ29wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFJlc3BvbnNpdmVQYW5lbENvbXBvbmVudFxuIl19