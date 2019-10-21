import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxRepeatButtonComponent = class jqxRepeatButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxRepeatButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxRepeatButton('setOptions', options);
    }
    // jqxRepeatButtonComponent properties
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('delay', arg);
        }
        else {
            return this.host.jqxRepeatButton('delay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('disabled', arg);
        }
        else {
            return this.host.jqxRepeatButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('height', arg);
        }
        else {
            return this.host.jqxRepeatButton('height');
        }
    }
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgSrc', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgSrc');
        }
    }
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgWidth', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgWidth');
        }
    }
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgHeight', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgHeight');
        }
    }
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgPosition');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxRepeatButton('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('rtl', arg);
        }
        else {
            return this.host.jqxRepeatButton('rtl');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('textPosition');
        }
    }
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxRepeatButton('textImageRelation');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('theme', arg);
        }
        else {
            return this.host.jqxRepeatButton('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('template', arg);
        }
        else {
            return this.host.jqxRepeatButton('template');
        }
    }
    toggled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('toggled', arg);
        }
        else {
            return this.host.jqxRepeatButton('toggled');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('width', arg);
        }
        else {
            return this.host.jqxRepeatButton('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('value', arg);
        }
        else {
            return this.host.jqxRepeatButton('value');
        }
    }
    // jqxRepeatButtonComponent functions
    destroy() {
        this.host.jqxRepeatButton('destroy');
    }
    focus() {
        this.host.jqxRepeatButton('focus');
    }
    render() {
        this.host.jqxRepeatButton('render');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRepeatButton('val', value);
        }
        else {
            return this.host.jqxRepeatButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
}; //jqxRepeatButtonComponent
jqxRepeatButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('delay'),
    __metadata("design:type", Number)
], jqxRepeatButtonComponent.prototype, "attrDelay", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxRepeatButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('imgSrc'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrImgSrc", void 0);
__decorate([
    Input('imgWidth'),
    __metadata("design:type", Object)
], jqxRepeatButtonComponent.prototype, "attrImgWidth", void 0);
__decorate([
    Input('imgHeight'),
    __metadata("design:type", Object)
], jqxRepeatButtonComponent.prototype, "attrImgHeight", void 0);
__decorate([
    Input('imgPosition'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrImgPosition", void 0);
__decorate([
    Input('roundedCorners'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxRepeatButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('textPosition'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrTextPosition", void 0);
__decorate([
    Input('textImageRelation'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrTextImageRelation", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('toggled'),
    __metadata("design:type", Boolean)
], jqxRepeatButtonComponent.prototype, "attrToggled", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", String)
], jqxRepeatButtonComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxRepeatButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxRepeatButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRepeatButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxRepeatButtonComponent.prototype, "onClick", void 0);
jqxRepeatButtonComponent = __decorate([
    Component({
        selector: 'jqxRepeatButton',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxRepeatButtonComponent);

let jqxRepeatButtonModule = class jqxRepeatButtonModule {
};
jqxRepeatButtonModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxRepeatButtonComponent],
        exports: [jqxRepeatButtonComponent]
    })
], jqxRepeatButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRepeatButtonComponent, jqxRepeatButtonModule };
