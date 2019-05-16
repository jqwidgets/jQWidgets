import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxdocking from '../../jqwidgets-scripts/jqwidgets/jqxdocking';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDockingComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                        this.host.jqxDocking(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
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
        this.host.jqxDocking('setOptions', options);
    }
    // jqxDockingComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    cookies(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cookieOptions(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    floatingWindowOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    windowsMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    windowsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    }
    // jqxDockingComponent functions
    /**
     * @param {?} windowId
     * @param {?} mode
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    addWindow(windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    closeWindow(windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    collapseWindow(windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxDocking('destroy');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    disableWindowResize(windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxDocking('disable');
    }
    /**
     * @return {?}
     */
    exportLayout() {
        return this.host.jqxDocking('exportLayout');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxDocking('enable');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    expandWindow(windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    enableWindowResize(windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxDocking('focus');
    }
    /**
     * @return {?}
     */
    hideAllCloseButtons() {
        this.host.jqxDocking('hideAllCloseButtons');
    }
    /**
     * @return {?}
     */
    hideAllCollapseButtons() {
        this.host.jqxDocking('hideAllCollapseButtons');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    hideCollapseButton(windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    hideCloseButton(windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    }
    /**
     * @param {?} Json
     * @return {?}
     */
    importLayout(Json) {
        this.host.jqxDocking('importLayout', Json);
    }
    /**
     * @param {?} windowId
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    move(windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    pinWindow(windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @param {?} mode
     * @return {?}
     */
    setWindowMode(windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    showCloseButton(windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    showCollapseButton(windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    setWindowPosition(windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    }
    /**
     * @return {?}
     */
    showAllCloseButtons() {
        this.host.jqxDocking('showAllCloseButtons');
    }
    /**
     * @return {?}
     */
    showAllCollapseButtons() {
        this.host.jqxDocking('showAllCollapseButtons');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    unpinWindow(windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragStart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragEnd.emit(eventData); }));
    }
} //jqxDockingComponent
jqxDockingComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDocking',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDockingComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDockingComponent.propDecorators = {
    attrCookies: [{ type: Input, args: ['cookies',] }],
    attrCookieOptions: [{ type: Input, args: ['cookieOptions',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrFloatingWindowOpacity: [{ type: Input, args: ['floatingWindowOpacity',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWindowsMode: [{ type: Input, args: ['windowsMode',] }],
    attrWindowsOffset: [{ type: Input, args: ['windowsOffset',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookies;
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookieOptions;
    /** @type {?} */
    jqxDockingComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDockingComponent.prototype.attrFloatingWindowOpacity;
    /** @type {?} */
    jqxDockingComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsOffset;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingComponent.prototype.properties;
    /** @type {?} */
    jqxDockingComponent.prototype.host;
    /** @type {?} */
    jqxDockingComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragStart;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragEnd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkb2NraW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRvY2tpbmcvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRvY2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUF1QjdCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLGVBQWUsQ0FBQyxDQUFDOztRQW1VbkwsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOVR0QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLFdBQVcsQ0FBQyxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FB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SUFDM0MseUNBQTZDOztJQUU3Qyx5Q0FBaUQ7O0lBRWpELHlDQUE2TDs7SUFDN0wsbUNBQVU7O0lBQ1YseUNBQXVCOztJQUN2QiwyQ0FBb0M7O0lBZ1VwQywwQ0FBMkM7O0lBQzNDLHdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4RG9ja2luZycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4RG9ja2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdjb29raWVzJykgYXR0ckNvb2tpZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nvb2tpZU9wdGlvbnMnKSBhdHRyQ29va2llT3B0aW9uczoganF3aWRnZXRzLkRvY2tpbmdDb29raWVPcHRpb25zO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmxvYXRpbmdXaW5kb3dPcGFjaXR5JykgYXR0ckZsb2F0aW5nV2luZG93T3BhY2l0eTogbnVtYmVyO1xuICAgQElucHV0KCdrZXlib2FyZE5hdmlnYXRpb24nKSBhdHRyS2V5Ym9hcmROYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdtb2RlJykgYXR0ck1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnb3JpZW50YXRpb24nKSBhdHRyT3JpZW50YXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2luZG93c01vZGUnKSBhdHRyV2luZG93c01vZGU6IG9iamVjdDtcbiAgIEBJbnB1dCgnd2luZG93c09mZnNldCcpIGF0dHJXaW5kb3dzT2Zmc2V0OiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnY29va2llcycsJ2Nvb2tpZU9wdGlvbnMnLCdkaXNhYmxlZCcsJ2Zsb2F0aW5nV2luZG93T3BhY2l0eScsJ2hlaWdodCcsJ2tleWJvYXJkTmF2aWdhdGlvbicsJ21vZGUnLCdvcmllbnRhdGlvbicsJ3J0bCcsJ3RoZW1lJywnd2lkdGgnLCd3aW5kb3dzTW9kZScsJ3dpbmRvd3NPZmZzZXQnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RG9ja2luZztcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhEb2NraW5nKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeERvY2tpbmcodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeERvY2tpbmcnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhEb2NraW5nQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGNvb2tpZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Nvb2tpZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Nvb2tpZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29va2llT3B0aW9ucyhhcmc/OiBqcXdpZGdldHMuRG9ja2luZ0Nvb2tpZU9wdGlvbnMpOiBqcXdpZGdldHMuRG9ja2luZ0Nvb2tpZU9wdGlvbnMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Nvb2tpZU9wdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Nvb2tpZU9wdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmbG9hdGluZ1dpbmRvd09wYWNpdHkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdmbG9hdGluZ1dpbmRvd09wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Zsb2F0aW5nV2luZG93T3BhY2l0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZE5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9yaWVudGF0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnb3JpZW50YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ29yaWVudGF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2luZG93c01vZGUoYXJnPzogb2JqZWN0KTogb2JqZWN0IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aW5kb3dzTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnd2luZG93c01vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2luZG93c09mZnNldChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpbmRvd3NPZmZzZXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpbmRvd3NPZmZzZXQnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhEb2NraW5nQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkV2luZG93KHdpbmRvd0lkOiBzdHJpbmcsIG1vZGU6IGFueSwgcGFuZWw6IG51bWJlciwgcG9zaXRpb246IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2FkZFdpbmRvdycsIHdpbmRvd0lkLCBtb2RlLCBwYW5lbCwgcG9zaXRpb24pO1xuICAgfVxuXG4gICBjbG9zZVdpbmRvdyh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnY2xvc2VXaW5kb3cnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGNvbGxhcHNlV2luZG93KHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjb2xsYXBzZVdpbmRvdycsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGRpc2FibGVXaW5kb3dSZXNpemUod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Rpc2FibGVXaW5kb3dSZXNpemUnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGRpc2FibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZGlzYWJsZScpO1xuICAgfVxuXG4gICBleHBvcnRMYXlvdXQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnZXhwb3J0TGF5b3V0Jyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdlbmFibGUnKTtcbiAgIH1cblxuICAgZXhwYW5kV2luZG93KHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdleHBhbmRXaW5kb3cnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGVuYWJsZVdpbmRvd1Jlc2l6ZSh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZW5hYmxlV2luZG93UmVzaXplJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdmb2N1cycpO1xuICAgfVxuXG4gICBoaWRlQWxsQ2xvc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hpZGVBbGxDbG9zZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgaGlkZUFsbENvbGxhcHNlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoaWRlQWxsQ29sbGFwc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIGhpZGVDb2xsYXBzZUJ1dHRvbih3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaGlkZUNvbGxhcHNlQnV0dG9uJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBoaWRlQ2xvc2VCdXR0b24od2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hpZGVDbG9zZUJ1dHRvbicsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgaW1wb3J0TGF5b3V0KEpzb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2ltcG9ydExheW91dCcsIEpzb24pO1xuICAgfVxuXG4gICBtb3ZlKHdpbmRvd0lkOiBzdHJpbmcsIHBhbmVsOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdtb3ZlJywgd2luZG93SWQsIHBhbmVsLCBwb3NpdGlvbik7XG4gICB9XG5cbiAgIHBpbldpbmRvdyh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygncGluV2luZG93Jywgd2luZG93SWQpO1xuICAgfVxuXG4gICBzZXRXaW5kb3dNb2RlKHdpbmRvd0lkOiBzdHJpbmcsIG1vZGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3NldFdpbmRvd01vZGUnLCB3aW5kb3dJZCwgbW9kZSk7XG4gICB9XG5cbiAgIHNob3dDbG9zZUJ1dHRvbih3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2hvd0Nsb3NlQnV0dG9uJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBzaG93Q29sbGFwc2VCdXR0b24od2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3Nob3dDb2xsYXBzZUJ1dHRvbicsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgc2V0V2luZG93UG9zaXRpb24od2luZG93SWQ6IHN0cmluZywgdG9wOiBhbnksIGxlZnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3NldFdpbmRvd1Bvc2l0aW9uJywgd2luZG93SWQsIHRvcCwgbGVmdCk7XG4gICB9XG5cbiAgIHNob3dBbGxDbG9zZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2hvd0FsbENsb3NlQnV0dG9ucycpO1xuICAgfVxuXG4gICBzaG93QWxsQ29sbGFwc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3Nob3dBbGxDb2xsYXBzZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgdW5waW5XaW5kb3cod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3VucGluV2luZG93Jywgd2luZG93SWQpO1xuICAgfVxuXG5cbiAgIC8vIGpxeERvY2tpbmdDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ1N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ0VuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ0VuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4RG9ja2luZ0NvbXBvbmVudFxuIl19