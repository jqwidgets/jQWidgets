import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxresponsivepanel from '../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxResponsivePanelComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
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
        this.host.jqxResponsivePanel('setOptions', options);
    }
    // jqxResponsivePanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDirection(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapseBreakpoint(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapseWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleButton(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    }
    // jqxResponsivePanelComponent functions
    /**
     * @return {?}
     */
    close() {
        this.host.jqxResponsivePanel('close');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxResponsivePanel('destroy');
    }
    /**
     * @return {?}
     */
    isCollapsed() {
        return this.host.jqxResponsivePanel('isCollapsed');
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.host.jqxResponsivePanel('isOpened');
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxResponsivePanel('open');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxResponsivePanel('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxResponsivePanel('render');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onClose.emit(eventData); }));
        this.host.on('collapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCollapse.emit(eventData); }));
        this.host.on('expand', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onExpand.emit(eventData); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOpen.emit(eventData); }));
    }
} //jqxResponsivePanelComponent
jqxResponsivePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxResponsivePanel',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxResponsivePanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cmVzcG9uc2l2ZXBhbmVsLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUF1QnJDLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQTJQeE4sWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF4UG5DLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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LFNBQUMsb0JBQW9CO2dDQUMxQixLQUFLLFNBQUMsZUFBZTs4QkFDckIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxPQUFPOytCQUNiLEtBQUssU0FBQyxjQUFjO21DQUNwQixLQUFLLFNBQUMsa0JBQWtCO3dCQUN4QixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt5QkFFZCxLQUFLLFNBQUMsYUFBYTtzQkE2UG5CLE1BQU07eUJBQ04sTUFBTTt1QkFDTixNQUFNO3FCQUNOLE1BQU07Ozs7SUE5UVAsNkRBQTREOztJQUM1RCw2REFBcUU7O0lBQ3JFLDZEQUFxRTs7SUFDckUsd0RBQWtEOztJQUNsRCxvREFBMkM7O0lBQzNDLDZEQUE0RDs7SUFDNUQsd0RBQWtEOztJQUNsRCxzREFBa0Q7O0lBQ2xELGdEQUFrQzs7SUFDbEMsdURBQXNEOztJQUN0RCwyREFBaUU7O0lBQ2pFLGdEQUEyQzs7SUFDM0MsaURBQTZDOztJQUU3QyxpREFBaUQ7O0lBRWpELGlEQUFrTzs7SUFDbE8sMkNBQVU7O0lBQ1YsaURBQXVCOztJQUN2QixtREFBNEM7O0lBd1A1Qyw4Q0FBdUM7O0lBQ3ZDLGlEQUEwQzs7SUFDMUMsK0NBQXdDOztJQUN4Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFJlc3BvbnNpdmVQYW5lbCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvbkRpcmVjdGlvbicpIGF0dHJBbmltYXRpb25EaXJlY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uSGlkZURlbGF5JykgYXR0ckFuaW1hdGlvbkhpZGVEZWxheTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RGVsYXknKSBhdHRyQW5pbWF0aW9uU2hvd0RlbGF5OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhdXRvQ2xvc2UnKSBhdHRyQXV0b0Nsb3NlOiBib29sZWFuO1xuICAgQElucHV0KCdjb2xsYXBzZUJyZWFrcG9pbnQnKSBhdHRyQ29sbGFwc2VCcmVha3BvaW50OiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbGxhcHNlV2lkdGgnKSBhdHRyQ29sbGFwc2VXaWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdpbml0Q29udGVudCcpIGF0dHJJbml0Q29udGVudDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndG9nZ2xlQnV0dG9uJykgYXR0clRvZ2dsZUJ1dHRvbjogc3RyaW5nIHwgYW55O1xuICAgQElucHV0KCd0b2dnbGVCdXR0b25TaXplJykgYXR0clRvZ2dsZUJ1dHRvblNpemU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25EaXJlY3Rpb24nLCdhbmltYXRpb25IaWRlRGVsYXknLCdhbmltYXRpb25TaG93RGVsYXknLCdhbmltYXRpb25UeXBlJywnYXV0b0Nsb3NlJywnY29sbGFwc2VCcmVha3BvaW50JywnY29sbGFwc2VXaWR0aCcsJ2hlaWdodCcsJ2luaXRDb250ZW50JywndGhlbWUnLCd0b2dnbGVCdXR0b24nLCd0b2dnbGVCdXR0b25TaXplJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UmVzcG9uc2l2ZVBhbmVsO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhSZXNwb25zaXZlUGFuZWwnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFJlc3BvbnNpdmVQYW5lbENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EaXJlY3Rpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvbkRpcmVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25EaXJlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uSGlkZURlbGF5KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25IaWRlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uSGlkZURlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvblNob3dEZWxheShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uU2hvd0RlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvblNob3dEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25UeXBlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0Nsb3NlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2F1dG9DbG9zZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhdXRvQ2xvc2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sbGFwc2VCcmVha3BvaW50KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdjb2xsYXBzZUJyZWFrcG9pbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY29sbGFwc2VCcmVha3BvaW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbGxhcHNlV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2NvbGxhcHNlV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY29sbGFwc2VXaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdENvbnRlbnQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaW5pdENvbnRlbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaW5pdENvbnRlbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZ2dsZUJ1dHRvbihhcmc/OiBzdHJpbmcgfCBhbnkpOiBzdHJpbmcgfCBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgndG9nZ2xlQnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RvZ2dsZUJ1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVCdXR0b25TaXplKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0b2dnbGVCdXR0b25TaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RvZ2dsZUJ1dHRvblNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdjbG9zZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdpc0NvbGxhcHNlZCcpO1xuICAgfVxuXG4gICBpc09wZW5lZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdpc09wZW5lZCcpO1xuICAgfVxuXG4gICBvcGVuKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnb3BlbicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdyZW5kZXInKTtcbiAgIH1cblxuXG4gICAvLyBqcXhSZXNwb25zaXZlUGFuZWxDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignb3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50XG4iXX0=