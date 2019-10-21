import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxdropdownbutton';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxDropDownButtonComponent = class jqxDropDownButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width'];
        // jqxDropDownButtonComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDropDownButton('setOptions', options);
    }
    // jqxDropDownButtonComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('animationType', arg);
        }
        else {
            return this.host.jqxDropDownButton('animationType');
        }
    }
    arrowSize(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('arrowSize', arg);
        }
        else {
            return this.host.jqxDropDownButton('arrowSize');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownButton('autoOpen');
        }
    }
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('closeDelay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('disabled', arg);
        }
        else {
            return this.host.jqxDropDownButton('disabled');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownVerticalAlignment');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownWidth');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('height', arg);
        }
        else {
            return this.host.jqxDropDownButton('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('initContent', arg);
        }
        else {
            return this.host.jqxDropDownButton('initContent');
        }
    }
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('openDelay');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownButton('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('rtl', arg);
        }
        else {
            return this.host.jqxDropDownButton('rtl');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('template', arg);
        }
        else {
            return this.host.jqxDropDownButton('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('theme', arg);
        }
        else {
            return this.host.jqxDropDownButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('width', arg);
        }
        else {
            return this.host.jqxDropDownButton('width');
        }
    }
    // jqxDropDownButtonComponent functions
    close() {
        this.host.jqxDropDownButton('close');
    }
    destroy() {
        this.host.jqxDropDownButton('destroy');
    }
    focus() {
        this.host.jqxDropDownButton('focus');
    }
    getContent() {
        return this.host.jqxDropDownButton('getContent');
    }
    isOpened() {
        return this.host.jqxDropDownButton('isOpened');
    }
    open() {
        this.host.jqxDropDownButton('open');
    }
    setContent(content) {
        this.host.jqxDropDownButton('setContent', content);
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
}; //jqxDropDownButtonComponent
jqxDropDownButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxDropDownButtonComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('arrowSize'),
    __metadata("design:type", Number)
], jqxDropDownButtonComponent.prototype, "attrArrowSize", void 0);
__decorate([
    Input('autoOpen'),
    __metadata("design:type", Boolean)
], jqxDropDownButtonComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    Input('closeDelay'),
    __metadata("design:type", Number)
], jqxDropDownButtonComponent.prototype, "attrCloseDelay", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxDropDownButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('dropDownHorizontalAlignment'),
    __metadata("design:type", String)
], jqxDropDownButtonComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
__decorate([
    Input('dropDownVerticalAlignment'),
    __metadata("design:type", String)
], jqxDropDownButtonComponent.prototype, "attrDropDownVerticalAlignment", void 0);
__decorate([
    Input('dropDownWidth'),
    __metadata("design:type", Object)
], jqxDropDownButtonComponent.prototype, "attrDropDownWidth", void 0);
__decorate([
    Input('enableBrowserBoundsDetection'),
    __metadata("design:type", Boolean)
], jqxDropDownButtonComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
__decorate([
    Input('initContent'),
    __metadata("design:type", Function)
], jqxDropDownButtonComponent.prototype, "attrInitContent", void 0);
__decorate([
    Input('openDelay'),
    __metadata("design:type", Number)
], jqxDropDownButtonComponent.prototype, "attrOpenDelay", void 0);
__decorate([
    Input('popupZIndex'),
    __metadata("design:type", Number)
], jqxDropDownButtonComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxDropDownButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxDropDownButtonComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxDropDownButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxDropDownButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxDropDownButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDropDownButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDropDownButtonComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDropDownButtonComponent.prototype, "onOpen", void 0);
jqxDropDownButtonComponent = __decorate([
    Component({
        selector: 'jqxDropDownButton',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxDropDownButtonComponent);

let jqxDropDownButtonModule = class jqxDropDownButtonModule {
};
jqxDropDownButtonModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxDropDownButtonComponent],
        exports: [jqxDropDownButtonComponent]
    })
], jqxDropDownButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDropDownButtonComponent, jqxDropDownButtonModule };
