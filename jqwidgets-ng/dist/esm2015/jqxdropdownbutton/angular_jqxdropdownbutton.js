import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxdropdownbutton from '../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDropDownButtonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width'];
        // jqxDropDownButtonComponent events
        this.onClose = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
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
        this.host.jqxDropDownButton('setOptions', options);
    }
    // jqxDropDownButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('animationType', arg);
        }
        else {
            return this.host.jqxDropDownButton('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    arrowSize(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('arrowSize', arg);
        }
        else {
            return this.host.jqxDropDownButton('arrowSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownButton('autoOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('closeDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('disabled', arg);
        }
        else {
            return this.host.jqxDropDownButton('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownVerticalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('height', arg);
        }
        else {
            return this.host.jqxDropDownButton('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('initContent', arg);
        }
        else {
            return this.host.jqxDropDownButton('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('openDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownButton('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('rtl', arg);
        }
        else {
            return this.host.jqxDropDownButton('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('template', arg);
        }
        else {
            return this.host.jqxDropDownButton('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('theme', arg);
        }
        else {
            return this.host.jqxDropDownButton('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('width', arg);
        }
        else {
            return this.host.jqxDropDownButton('width');
        }
    }
    // jqxDropDownButtonComponent functions
    /**
     * @return {?}
     */
    close() {
        this.host.jqxDropDownButton('close');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxDropDownButton('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxDropDownButton('focus');
    }
    /**
     * @return {?}
     */
    getContent() {
        return this.host.jqxDropDownButton('getContent');
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.host.jqxDropDownButton('isOpened');
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxDropDownButton('open');
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        this.host.jqxDropDownButton('setContent', content);
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
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOpen.emit(eventData); }));
    }
} //jqxDropDownButtonComponent
jqxDropDownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDropDownButton',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDropDownButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDropDownButtonComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrArrowSize: [{ type: Input, args: ['arrowSize',] }],
    attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
    attrCloseDelay: [{ type: Input, args: ['closeDelay',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDropDownHorizontalAlignment: [{ type: Input, args: ['dropDownHorizontalAlignment',] }],
    attrDropDownVerticalAlignment: [{ type: Input, args: ['dropDownVerticalAlignment',] }],
    attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
    attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrOpenDelay: [{ type: Input, args: ['openDelay',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrArrowSize;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrCloseDelay;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownHorizontalAlignment;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownVerticalAlignment;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrOpenDelay;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.properties;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.host;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.onClose;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcm9wZG93bmJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhkcm9wZG93bmJ1dHRvbi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4ZHJvcGRvd25idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUEyQnBDLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyw2QkFBNkIsRUFBQywyQkFBMkIsRUFBQyxlQUFlLEVBQUMsOEJBQThCLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQTJSelEsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF0Um5DLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFD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REFBMkQ7O0lBQzNELHNFQUFpRjs7SUFDakYscURBQWtEOztJQUNsRCxtREFBMEM7O0lBQzFDLHFEQUE4Qzs7SUFDOUMsNkNBQStCOztJQUMvQixrREFBd0M7O0lBQ3hDLCtDQUFrQzs7SUFDbEMsK0NBQTJDOztJQUMzQyxnREFBNkM7O0lBRTdDLGdEQUFpRDs7SUFFakQsZ0RBQW1SOztJQUNuUiwwQ0FBVTs7SUFDVixnREFBdUI7O0lBQ3ZCLGtEQUEyQzs7SUF3UjNDLDZDQUF1Qzs7SUFDdkMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEcm9wRG93bkJ1dHRvbicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4RHJvcERvd25CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uVHlwZScpIGF0dHJBbmltYXRpb25UeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Fycm93U2l6ZScpIGF0dHJBcnJvd1NpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXV0b09wZW4nKSBhdHRyQXV0b09wZW46IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nsb3NlRGVsYXknKSBhdHRyQ2xvc2VEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JykgYXR0ckRyb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudDogc3RyaW5nO1xuICAgQElucHV0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JykgYXR0ckRyb3BEb3duVmVydGljYWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd25XaWR0aCcpIGF0dHJEcm9wRG93bldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKSBhdHRyRW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaW5pdENvbnRlbnQnKSBhdHRySW5pdENvbnRlbnQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ29wZW5EZWxheScpIGF0dHJPcGVuRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncG9wdXBaSW5kZXgnKSBhdHRyUG9wdXBaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndGVtcGxhdGUnKSBhdHRyVGVtcGxhdGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYXJyb3dTaXplJywnYXV0b09wZW4nLCdjbG9zZURlbGF5JywnZGlzYWJsZWQnLCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnLCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywnZHJvcERvd25XaWR0aCcsJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCdoZWlnaHQnLCdpbml0Q29udGVudCcsJ29wZW5EZWxheScsJ3BvcHVwWkluZGV4JywncnRsJywndGVtcGxhdGUnLCd0aGVtZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeERyb3BEb3duQnV0dG9uO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbih0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeERyb3BEb3duQnV0dG9uJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERyb3BEb3duQnV0dG9uQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignYW5pbWF0aW9uVHlwZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXJyb3dTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Fycm93U2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Fycm93U2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvT3Blbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2F1dG9PcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignYXV0b09wZW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdjbG9zZURlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignY2xvc2VEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duV2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignZHJvcERvd25XaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2Ryb3BEb3duV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdENvbnRlbnQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdpbml0Q29udGVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ2luaXRDb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9wZW5EZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdvcGVuRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdvcGVuRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9wdXBaSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbigncG9wdXBaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdwb3B1cFpJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbigndGVtcGxhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCd0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25CdXR0b24oJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdjbG9zZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRDb250ZW50KCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdnZXRDb250ZW50Jyk7XG4gICB9XG5cbiAgIGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignaXNPcGVuZWQnKTtcbiAgIH1cblxuICAgb3BlbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkJ1dHRvbignb3BlbicpO1xuICAgfVxuXG4gICBzZXRDb250ZW50KGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duQnV0dG9uKCdzZXRDb250ZW50JywgY29udGVudCk7XG4gICB9XG5cblxuICAgLy8ganF4RHJvcERvd25CdXR0b25Db21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignb3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4RHJvcERvd25CdXR0b25Db21wb25lbnRcbiJdfQ==