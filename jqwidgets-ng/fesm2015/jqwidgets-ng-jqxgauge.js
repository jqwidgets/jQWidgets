import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxGaugeComponent = class jqxGaugeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxGauge('setOptions', options);
    }
    // jqxGaugeComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    }
    border(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    }
    caption(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    }
    cap(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    }
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    }
    int64(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    }
    radius(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    }
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    }
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    }
    showRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    }
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('styles', arg);
        }
        else {
            return this.host.jqxGauge('styles');
        }
    }
    ticksMajor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    }
    ticksMinor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    }
    ticksDistance(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    }
    // jqxGaugeComponent functions
    disable() {
        this.host.jqxGauge('disable');
    }
    enable() {
        this.host.jqxGauge('enable');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxGauge('val', value);
        }
        else {
            return this.host.jqxGauge('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
}; //jqxGaugeComponent
jqxGaugeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('border'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrBorder", void 0);
__decorate([
    Input('caption'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCaption", void 0);
__decorate([
    Input('cap'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCap", void 0);
__decorate([
    Input('colorScheme'),
    __metadata("design:type", String)
], jqxGaugeComponent.prototype, "attrColorScheme", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('easing'),
    __metadata("design:type", String)
], jqxGaugeComponent.prototype, "attrEasing", void 0);
__decorate([
    Input('endAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrEndAngle", void 0);
__decorate([
    Input('int64'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrInt64", void 0);
__decorate([
    Input('labels'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrLabels", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Number)
], jqxGaugeComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrMax", void 0);
__decorate([
    Input('pointer'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrPointer", void 0);
__decorate([
    Input('radius'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrRadius", void 0);
__decorate([
    Input('ranges'),
    __metadata("design:type", Array)
], jqxGaugeComponent.prototype, "attrRanges", void 0);
__decorate([
    Input('startAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStartAngle", void 0);
__decorate([
    Input('showRanges'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrShowRanges", void 0);
__decorate([
    Input('styles'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStyles", void 0);
__decorate([
    Input('ticksMajor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMajor", void 0);
__decorate([
    Input('ticksMinor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMinor", void 0);
__decorate([
    Input('ticksDistance'),
    __metadata("design:type", String)
], jqxGaugeComponent.prototype, "attrTicksDistance", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Number)
], jqxGaugeComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanging", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanged", void 0);
jqxGaugeComponent = __decorate([
    Component({
        selector: 'jqxGauge',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxGaugeComponent);

let jqxGaugeModule = class jqxGaugeModule {
};
jqxGaugeModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxGaugeComponent],
        exports: [jqxGaugeComponent]
    })
], jqxGaugeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxGaugeComponent, jqxGaugeModule };
