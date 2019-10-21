import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxvalidator';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxValidatorComponent = class jqxValidatorComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrow', 'animation', 'animationDuration', 'closeOnClick', 'focus', 'hintType', 'onError', 'onSuccess', 'position', 'rules', 'rtl'];
        // jqxValidatorComponent events
        this.onValidationError = new EventEmitter();
        this.onValidationSuccess = new EventEmitter();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxValidator('setOptions', options);
    }
    // jqxValidatorComponent properties
    arrow(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('arrow', arg);
        }
        else {
            return this.host.jqxValidator('arrow');
        }
    }
    animation(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animation', arg);
        }
        else {
            return this.host.jqxValidator('animation');
        }
    }
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animationDuration', arg);
        }
        else {
            return this.host.jqxValidator('animationDuration');
        }
    }
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('closeOnClick', arg);
        }
        else {
            return this.host.jqxValidator('closeOnClick');
        }
    }
    focus(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('focus', arg);
        }
        else {
            return this.host.jqxValidator('focus');
        }
    }
    hintType(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('hintType', arg);
        }
        else {
            return this.host.jqxValidator('hintType');
        }
    }
    onError(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onError', arg);
        }
        else {
            return this.host.jqxValidator('onError');
        }
    }
    onSuccess(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onSuccess', arg);
        }
        else {
            return this.host.jqxValidator('onSuccess');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('position', arg);
        }
        else {
            return this.host.jqxValidator('position');
        }
    }
    rules(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rules', arg);
        }
        else {
            return this.host.jqxValidator('rules');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rtl', arg);
        }
        else {
            return this.host.jqxValidator('rtl');
        }
    }
    // jqxValidatorComponent functions
    hideHint(id) {
        this.host.jqxValidator('hideHint', id);
    }
    hide() {
        this.host.jqxValidator('hide');
    }
    updatePosition() {
        this.host.jqxValidator('updatePosition');
    }
    validate(htmlElement) {
        this.host.jqxValidator('validate', htmlElement);
    }
    validateInput(id) {
        this.host.jqxValidator('validateInput', id);
    }
    __wireEvents__() {
        this.host.on('validationError', (eventData) => { this.onValidationError.emit(eventData); });
        this.host.on('validationSuccess', (eventData) => { this.onValidationSuccess.emit(eventData); });
    }
}; //jqxValidatorComponent
jqxValidatorComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('arrow'),
    __metadata("design:type", Boolean)
], jqxValidatorComponent.prototype, "attrArrow", void 0);
__decorate([
    Input('animation'),
    __metadata("design:type", String)
], jqxValidatorComponent.prototype, "attrAnimation", void 0);
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Number)
], jqxValidatorComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('closeOnClick'),
    __metadata("design:type", Boolean)
], jqxValidatorComponent.prototype, "attrCloseOnClick", void 0);
__decorate([
    Input('focus'),
    __metadata("design:type", Boolean)
], jqxValidatorComponent.prototype, "attrFocus", void 0);
__decorate([
    Input('hintType'),
    __metadata("design:type", String)
], jqxValidatorComponent.prototype, "attrHintType", void 0);
__decorate([
    Input('onError'),
    __metadata("design:type", Function)
], jqxValidatorComponent.prototype, "attrOnError", void 0);
__decorate([
    Input('onSuccess'),
    __metadata("design:type", Function)
], jqxValidatorComponent.prototype, "attrOnSuccess", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], jqxValidatorComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('rules'),
    __metadata("design:type", Array)
], jqxValidatorComponent.prototype, "attrRules", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxValidatorComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxValidatorComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxValidatorComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxValidatorComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxValidatorComponent.prototype, "onValidationError", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxValidatorComponent.prototype, "onValidationSuccess", void 0);
jqxValidatorComponent = __decorate([
    Component({
        selector: 'jqxValidator',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxValidatorComponent);

let jqxValidatorModule = class jqxValidatorModule {
};
jqxValidatorModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxValidatorComponent],
        exports: [jqxValidatorComponent]
    })
], jqxValidatorModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxValidatorComponent, jqxValidatorModule };
