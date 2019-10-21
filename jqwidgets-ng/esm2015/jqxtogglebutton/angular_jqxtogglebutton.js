import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxToggleButtonComponent = class jqxToggleButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxToggleButtonComponent events
        this.onClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxToggleButton('setOptions', options);
    }
    // jqxToggleButtonComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('disabled', arg);
        }
        else {
            return this.host.jqxToggleButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('height', arg);
        }
        else {
            return this.host.jqxToggleButton('height');
        }
    }
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgSrc', arg);
        }
        else {
            return this.host.jqxToggleButton('imgSrc');
        }
    }
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgWidth', arg);
        }
        else {
            return this.host.jqxToggleButton('imgWidth');
        }
    }
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgHeight', arg);
        }
        else {
            return this.host.jqxToggleButton('imgHeight');
        }
    }
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('imgPosition');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxToggleButton('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('rtl', arg);
        }
        else {
            return this.host.jqxToggleButton('rtl');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('textPosition');
        }
    }
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxToggleButton('textImageRelation');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('theme', arg);
        }
        else {
            return this.host.jqxToggleButton('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('template', arg);
        }
        else {
            return this.host.jqxToggleButton('template');
        }
    }
    toggled(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('toggled', arg);
        }
        else {
            return this.host.jqxToggleButton('toggled');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('width', arg);
        }
        else {
            return this.host.jqxToggleButton('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('value', arg);
        }
        else {
            return this.host.jqxToggleButton('value');
        }
    }
    // jqxToggleButtonComponent functions
    check() {
        this.host.jqxToggleButton('check');
    }
    destroy() {
        this.host.jqxToggleButton('destroy');
    }
    focus() {
        this.host.jqxToggleButton('focus');
    }
    render() {
        this.host.jqxToggleButton('render');
    }
    toggle() {
        this.host.jqxToggleButton('toggle');
    }
    unCheck() {
        this.host.jqxToggleButton('unCheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxToggleButton('val', value);
        }
        else {
            return this.host.jqxToggleButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
}; //jqxToggleButtonComponent
jqxToggleButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxToggleButtonComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('imgSrc'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrImgSrc", void 0);
tslib_1.__decorate([
    Input('imgWidth'),
    tslib_1.__metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgWidth", void 0);
tslib_1.__decorate([
    Input('imgHeight'),
    tslib_1.__metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgHeight", void 0);
tslib_1.__decorate([
    Input('imgPosition'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrImgPosition", void 0);
tslib_1.__decorate([
    Input('roundedCorners'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrRoundedCorners", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxToggleButtonComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('textPosition'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrTextPosition", void 0);
tslib_1.__decorate([
    Input('textImageRelation'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrTextImageRelation", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('toggled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxToggleButtonComponent.prototype, "attrToggled", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", String)
], jqxToggleButtonComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxToggleButtonComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "onClick", void 0);
jqxToggleButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxToggleButton',
        template: '<button><ng-content></ng-content></button>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxToggleButtonComponent);
export { jqxToggleButtonComponent };
