import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxrangeselector';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxRangeSelectorComponent = class jqxRangeSelectorComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxRangeSelector('setOptions', options);
    }
    // jqxRangeSelectorComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    }
    groupLabelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('groupLabelsFormatFunction');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    }
    labelsFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormat');
        }
    }
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    }
    labelsOnTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsOnTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsOnTicks');
        }
    }
    markersFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormat');
        }
    }
    markersFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormatFunction');
        }
    }
    majorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    }
    minorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    }
    moveOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    }
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    }
    range(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    }
    showGroupLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showGroupLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showGroupLabels');
        }
    }
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    }
    snapToTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    }
    showMajorLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    }
    showMarkers(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    }
    // jqxRangeSelectorComponent functions
    destroy() {
        this.host.jqxRangeSelector('destroy');
    }
    getRange() {
        return this.host.jqxRangeSelector('getRange');
    }
    render() {
        this.host.jqxRangeSelector('render');
    }
    refresh() {
        this.host.jqxRangeSelector('refresh');
    }
    setRange(from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxRangeSelectorComponent
jqxRangeSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('groupLabelsFormatFunction'),
    tslib_1.__metadata("design:type", Function)
], jqxRangeSelectorComponent.prototype, "attrGroupLabelsFormatFunction", void 0);
tslib_1.__decorate([
    Input('labelsFormat'),
    tslib_1.__metadata("design:type", String)
], jqxRangeSelectorComponent.prototype, "attrLabelsFormat", void 0);
tslib_1.__decorate([
    Input('labelsFormatFunction'),
    tslib_1.__metadata("design:type", Function)
], jqxRangeSelectorComponent.prototype, "attrLabelsFormatFunction", void 0);
tslib_1.__decorate([
    Input('labelsOnTicks'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrLabelsOnTicks", void 0);
tslib_1.__decorate([
    Input('markersFormat'),
    tslib_1.__metadata("design:type", String)
], jqxRangeSelectorComponent.prototype, "attrMarkersFormat", void 0);
tslib_1.__decorate([
    Input('markersFormatFunction'),
    tslib_1.__metadata("design:type", Function)
], jqxRangeSelectorComponent.prototype, "attrMarkersFormatFunction", void 0);
tslib_1.__decorate([
    Input('majorTicksInterval'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMajorTicksInterval", void 0);
tslib_1.__decorate([
    Input('minorTicksInterval'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMinorTicksInterval", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('moveOnClick'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrMoveOnClick", void 0);
tslib_1.__decorate([
    Input('padding'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrPadding", void 0);
tslib_1.__decorate([
    Input('range'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrRange", void 0);
tslib_1.__decorate([
    Input('resizable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrResizable", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('showGroupLabels'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrShowGroupLabels", void 0);
tslib_1.__decorate([
    Input('showMinorTicks'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrShowMinorTicks", void 0);
tslib_1.__decorate([
    Input('snapToTicks'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrSnapToTicks", void 0);
tslib_1.__decorate([
    Input('showMajorLabels'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrShowMajorLabels", void 0);
tslib_1.__decorate([
    Input('showMarkers'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "attrShowMarkers", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxRangeSelectorComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "onChange", void 0);
jqxRangeSelectorComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxRangeSelector',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxRangeSelectorComponent);
export { jqxRangeSelectorComponent };
