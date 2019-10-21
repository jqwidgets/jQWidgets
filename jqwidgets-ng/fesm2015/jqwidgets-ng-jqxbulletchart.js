import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxbulletchart';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxBulletChartComponent = class jqxBulletChartComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'barSize', 'description', 'disabled', 'height', 'labelsFormat', 'labelsFormatFunction', 'orientation', 'pointer', 'rtl', 'ranges', 'showTooltip', 'target', 'ticks', 'title', 'tooltipFormatFunction', 'width'];
        // jqxBulletChartComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBulletChart(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBulletChart(this.properties[i])) {
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxBulletChart('setOptions', options);
    }
    // jqxBulletChartComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('animationDuration', arg);
        }
        else {
            return this.host.jqxBulletChart('animationDuration');
        }
    }
    barSize(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('barSize', arg);
        }
        else {
            return this.host.jqxBulletChart('barSize');
        }
    }
    description(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('description', arg);
        }
        else {
            return this.host.jqxBulletChart('description');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('disabled', arg);
        }
        else {
            return this.host.jqxBulletChart('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('height', arg);
        }
        else {
            return this.host.jqxBulletChart('height');
        }
    }
    labelsFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormat', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormat');
        }
    }
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormatFunction');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('orientation', arg);
        }
        else {
            return this.host.jqxBulletChart('orientation');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('pointer', arg);
        }
        else {
            return this.host.jqxBulletChart('pointer');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('rtl', arg);
        }
        else {
            return this.host.jqxBulletChart('rtl');
        }
    }
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ranges', arg);
        }
        else {
            return this.host.jqxBulletChart('ranges');
        }
    }
    showTooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('showTooltip', arg);
        }
        else {
            return this.host.jqxBulletChart('showTooltip');
        }
    }
    target(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('target', arg);
        }
        else {
            return this.host.jqxBulletChart('target');
        }
    }
    ticks(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ticks', arg);
        }
        else {
            return this.host.jqxBulletChart('ticks');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('title', arg);
        }
        else {
            return this.host.jqxBulletChart('title');
        }
    }
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('tooltipFormatFunction');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('width', arg);
        }
        else {
            return this.host.jqxBulletChart('width');
        }
    }
    // jqxBulletChartComponent functions
    destroy() {
        this.host.jqxBulletChart('destroy');
    }
    render() {
        this.host.jqxBulletChart('render');
    }
    refresh() {
        this.host.jqxBulletChart('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxBulletChart('val', value);
        }
        else {
            return this.host.jqxBulletChart('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxBulletChartComponent
jqxBulletChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Number)
], jqxBulletChartComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('barSize'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrBarSize", void 0);
__decorate([
    Input('description'),
    __metadata("design:type", String)
], jqxBulletChartComponent.prototype, "attrDescription", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxBulletChartComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('labelsFormat'),
    __metadata("design:type", String)
], jqxBulletChartComponent.prototype, "attrLabelsFormat", void 0);
__decorate([
    Input('labelsFormatFunction'),
    __metadata("design:type", Function)
], jqxBulletChartComponent.prototype, "attrLabelsFormatFunction", void 0);
__decorate([
    Input('orientation'),
    __metadata("design:type", String)
], jqxBulletChartComponent.prototype, "attrOrientation", void 0);
__decorate([
    Input('pointer'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrPointer", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxBulletChartComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('ranges'),
    __metadata("design:type", Array)
], jqxBulletChartComponent.prototype, "attrRanges", void 0);
__decorate([
    Input('showTooltip'),
    __metadata("design:type", Boolean)
], jqxBulletChartComponent.prototype, "attrShowTooltip", void 0);
__decorate([
    Input('target'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTarget", void 0);
__decorate([
    Input('ticks'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTicks", void 0);
__decorate([
    Input('title'),
    __metadata("design:type", String)
], jqxBulletChartComponent.prototype, "attrTitle", void 0);
__decorate([
    Input('tooltipFormatFunction'),
    __metadata("design:type", Function)
], jqxBulletChartComponent.prototype, "attrTooltipFormatFunction", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxBulletChartComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "onChange", void 0);
jqxBulletChartComponent = __decorate([
    Component({
        selector: 'jqxBulletChart',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxBulletChartComponent);

let jqxBulletChartModule = class jqxBulletChartModule {
};
jqxBulletChartModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxBulletChartComponent],
        exports: [jqxBulletChartComponent]
    })
], jqxBulletChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxBulletChartComponent, jqxBulletChartModule };
