import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxButtonComponent = class jqxButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'enableDefault', 'cursor', 'textPosition', 'textImageRelation', 'theme', 'template', 'width', 'value'];
        // jqxButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                        this.host.jqxButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxButton('setOptions', options);
    }
    // jqxButtonComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('disabled', arg);
        }
        else {
            return this.host.jqxButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('height', arg);
        }
        else {
            return this.host.jqxButton('height');
        }
    }
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgSrc', arg);
        }
        else {
            return this.host.jqxButton('imgSrc');
        }
    }
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgWidth', arg);
        }
        else {
            return this.host.jqxButton('imgWidth');
        }
    }
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgHeight', arg);
        }
        else {
            return this.host.jqxButton('imgHeight');
        }
    }
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgPosition', arg);
        }
        else {
            return this.host.jqxButton('imgPosition');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxButton('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('rtl', arg);
        }
        else {
            return this.host.jqxButton('rtl');
        }
    }
    enableDefault(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('enableDefault', arg);
        }
        else {
            return this.host.jqxButton('enableDefault');
        }
    }
    cursor(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('cursor', arg);
        }
        else {
            return this.host.jqxButton('cursor');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textPosition', arg);
        }
        else {
            return this.host.jqxButton('textPosition');
        }
    }
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxButton('textImageRelation');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('theme', arg);
        }
        else {
            return this.host.jqxButton('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('template', arg);
        }
        else {
            return this.host.jqxButton('template');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('width', arg);
        }
        else {
            return this.host.jqxButton('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('value', arg);
        }
        else {
            return this.host.jqxButton('value');
        }
    }
    // jqxButtonComponent functions
    destroy() {
        this.host.jqxButton('destroy');
    }
    focus() {
        this.host.jqxButton('focus');
    }
    render() {
        this.host.jqxButton('render');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxButton('val', value);
        }
        else {
            return this.host.jqxButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
}; //jqxButtonComponent
jqxButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('imgSrc'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrImgSrc", void 0);
__decorate([
    Input('imgWidth'),
    __metadata("design:type", Object)
], jqxButtonComponent.prototype, "attrImgWidth", void 0);
__decorate([
    Input('imgHeight'),
    __metadata("design:type", Object)
], jqxButtonComponent.prototype, "attrImgHeight", void 0);
__decorate([
    Input('imgPosition'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrImgPosition", void 0);
__decorate([
    Input('roundedCorners'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('enableDefault'),
    __metadata("design:type", Boolean)
], jqxButtonComponent.prototype, "attrEnableDefault", void 0);
__decorate([
    Input('cursor'),
    __metadata("design:type", Boolean)
], jqxButtonComponent.prototype, "attrCursor", void 0);
__decorate([
    Input('textPosition'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrTextPosition", void 0);
__decorate([
    Input('textImageRelation'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrTextImageRelation", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", String)
], jqxButtonComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxButtonComponent.prototype, "onClick", void 0);
jqxButtonComponent = __decorate([
    Component({
        selector: 'jqxButton',
        template: '<button><ng-content></ng-content></button>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxButtonComponent);

let jqxButtonModule = class jqxButtonModule {
};
jqxButtonModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxButtonComponent],
        exports: [jqxButtonComponent]
    })
], jqxButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxButtonComponent, jqxButtonModule };
