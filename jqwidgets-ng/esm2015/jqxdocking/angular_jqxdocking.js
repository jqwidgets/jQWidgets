import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxdocking';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxDockingComponent = class jqxDockingComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDocking('setOptions', options);
    }
    // jqxDockingComponent properties
    cookies(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    }
    cookieOptions(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    }
    floatingWindowOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    }
    windowsMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    }
    windowsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    }
    // jqxDockingComponent functions
    addWindow(windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    }
    closeWindow(windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    }
    collapseWindow(windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    }
    destroy() {
        this.host.jqxDocking('destroy');
    }
    disableWindowResize(windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    }
    disable() {
        this.host.jqxDocking('disable');
    }
    exportLayout() {
        return this.host.jqxDocking('exportLayout');
    }
    enable() {
        this.host.jqxDocking('enable');
    }
    expandWindow(windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    }
    enableWindowResize(windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    }
    focus() {
        this.host.jqxDocking('focus');
    }
    hideAllCloseButtons() {
        this.host.jqxDocking('hideAllCloseButtons');
    }
    hideAllCollapseButtons() {
        this.host.jqxDocking('hideAllCollapseButtons');
    }
    hideCollapseButton(windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    }
    hideCloseButton(windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    }
    importLayout(Json) {
        this.host.jqxDocking('importLayout', Json);
    }
    move(windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    }
    pinWindow(windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    }
    setWindowMode(windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    }
    showCloseButton(windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    }
    showCollapseButton(windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    }
    setWindowPosition(windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    }
    showAllCloseButtons() {
        this.host.jqxDocking('showAllCloseButtons');
    }
    showAllCollapseButtons() {
        this.host.jqxDocking('showAllCollapseButtons');
    }
    unpinWindow(windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    }
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
    }
}; //jqxDockingComponent
jqxDockingComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('cookies'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockingComponent.prototype, "attrCookies", void 0);
tslib_1.__decorate([
    Input('cookieOptions'),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "attrCookieOptions", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockingComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('floatingWindowOpacity'),
    tslib_1.__metadata("design:type", Number)
], jqxDockingComponent.prototype, "attrFloatingWindowOpacity", void 0);
tslib_1.__decorate([
    Input('keyboardNavigation'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockingComponent.prototype, "attrKeyboardNavigation", void 0);
tslib_1.__decorate([
    Input('mode'),
    tslib_1.__metadata("design:type", String)
], jqxDockingComponent.prototype, "attrMode", void 0);
tslib_1.__decorate([
    Input('orientation'),
    tslib_1.__metadata("design:type", String)
], jqxDockingComponent.prototype, "attrOrientation", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockingComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxDockingComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('windowsMode'),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "attrWindowsMode", void 0);
tslib_1.__decorate([
    Input('windowsOffset'),
    tslib_1.__metadata("design:type", Number)
], jqxDockingComponent.prototype, "attrWindowsOffset", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockingComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "onDragStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDockingComponent.prototype, "onDragEnd", void 0);
jqxDockingComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxDocking',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxDockingComponent);
export { jqxDockingComponent };
