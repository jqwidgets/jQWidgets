import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxLinearGaugeComponent = class jqxLinearGaugeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'background', 'colorScheme', 'disabled', 'easing', 'height', 'int64', 'labels', 'min', 'max', 'orientation', 'pointer', 'rangesOffset', 'rangeSize', 'ranges', 'showRanges', 'scaleStyle', 'scaleLength', 'ticksOffset', 'ticksPosition', 'ticksMinor', 'ticksMajor', 'value', 'width'];
        // jqxLinearGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinearGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinearGauge(this.properties[i])) {
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLinearGauge('setOptions', options);
    }
    // jqxLinearGaugeComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxLinearGauge('animationDuration');
        }
    }
    background(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('background', arg);
        }
        else {
            return this.host.jqxLinearGauge('background');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxLinearGauge('colorScheme');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('disabled', arg);
        }
        else {
            return this.host.jqxLinearGauge('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('easing', arg);
        }
        else {
            return this.host.jqxLinearGauge('easing');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('height', arg);
        }
        else {
            return this.host.jqxLinearGauge('height');
        }
    }
    int64(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('int64', arg);
        }
        else {
            return this.host.jqxLinearGauge('int64');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('labels', arg);
        }
        else {
            return this.host.jqxLinearGauge('labels');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('min', arg);
        }
        else {
            return this.host.jqxLinearGauge('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('max', arg);
        }
        else {
            return this.host.jqxLinearGauge('max');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('orientation', arg);
        }
        else {
            return this.host.jqxLinearGauge('orientation');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('pointer', arg);
        }
        else {
            return this.host.jqxLinearGauge('pointer');
        }
    }
    rangesOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangesOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangesOffset');
        }
    }
    rangeSize(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangeSize', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangeSize');
        }
    }
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ranges', arg);
        }
        else {
            return this.host.jqxLinearGauge('ranges');
        }
    }
    showRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('showRanges', arg);
        }
        else {
            return this.host.jqxLinearGauge('showRanges');
        }
    }
    scaleStyle(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleStyle', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleStyle');
        }
    }
    scaleLength(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleLength', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleLength');
        }
    }
    ticksOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksOffset');
        }
    }
    ticksPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksPosition', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksPosition');
        }
    }
    ticksMinor(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMinor');
        }
    }
    ticksMajor(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMajor');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('value', arg);
        }
        else {
            return this.host.jqxLinearGauge('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('width', arg);
        }
        else {
            return this.host.jqxLinearGauge('width');
        }
    }
    // jqxLinearGaugeComponent functions
    disable() {
        this.host.jqxLinearGauge('disable');
    }
    enable() {
        this.host.jqxLinearGauge('enable');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxLinearGauge('val', value);
        }
        else {
            return this.host.jqxLinearGauge('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
}; //jqxLinearGaugeComponent
jqxLinearGaugeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Number)
], jqxLinearGaugeComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('background'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrBackground", void 0);
__decorate([
    Input('colorScheme'),
    __metadata("design:type", String)
], jqxLinearGaugeComponent.prototype, "attrColorScheme", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxLinearGaugeComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('easing'),
    __metadata("design:type", String)
], jqxLinearGaugeComponent.prototype, "attrEasing", void 0);
__decorate([
    Input('int64'),
    __metadata("design:type", Boolean)
], jqxLinearGaugeComponent.prototype, "attrInt64", void 0);
__decorate([
    Input('labels'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrLabels", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Number)
], jqxLinearGaugeComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Number)
], jqxLinearGaugeComponent.prototype, "attrMax", void 0);
__decorate([
    Input('orientation'),
    __metadata("design:type", String)
], jqxLinearGaugeComponent.prototype, "attrOrientation", void 0);
__decorate([
    Input('pointer'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrPointer", void 0);
__decorate([
    Input('rangesOffset'),
    __metadata("design:type", Number)
], jqxLinearGaugeComponent.prototype, "attrRangesOffset", void 0);
__decorate([
    Input('rangeSize'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrRangeSize", void 0);
__decorate([
    Input('ranges'),
    __metadata("design:type", Array)
], jqxLinearGaugeComponent.prototype, "attrRanges", void 0);
__decorate([
    Input('showRanges'),
    __metadata("design:type", Boolean)
], jqxLinearGaugeComponent.prototype, "attrShowRanges", void 0);
__decorate([
    Input('scaleStyle'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrScaleStyle", void 0);
__decorate([
    Input('scaleLength'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrScaleLength", void 0);
__decorate([
    Input('ticksOffset'),
    __metadata("design:type", Array)
], jqxLinearGaugeComponent.prototype, "attrTicksOffset", void 0);
__decorate([
    Input('ticksPosition'),
    __metadata("design:type", String)
], jqxLinearGaugeComponent.prototype, "attrTicksPosition", void 0);
__decorate([
    Input('ticksMinor'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrTicksMinor", void 0);
__decorate([
    Input('ticksMajor'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrTicksMajor", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Number)
], jqxLinearGaugeComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxLinearGaugeComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "onValueChanging", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxLinearGaugeComponent.prototype, "onValueChanged", void 0);
jqxLinearGaugeComponent = __decorate([
    Component({
        selector: 'jqxLinearGauge',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxLinearGaugeComponent);

let jqxLinearGaugeModule = class jqxLinearGaugeModule {
};
jqxLinearGaugeModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxLinearGaugeComponent],
        exports: [jqxLinearGaugeComponent]
    })
], jqxLinearGaugeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLinearGaugeComponent, jqxLinearGaugeModule };
