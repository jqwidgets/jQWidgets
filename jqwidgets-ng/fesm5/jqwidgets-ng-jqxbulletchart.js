import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxbulletchart';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxBulletChartComponent = /** @class */ (function () {
    function jqxBulletChartComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'barSize', 'description', 'disabled', 'height', 'labelsFormat', 'labelsFormatFunction', 'orientation', 'pointer', 'rtl', 'ranges', 'showTooltip', 'target', 'ticks', 'title', 'tooltipFormatFunction', 'width'];
        // jqxBulletChartComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxBulletChartComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxBulletChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxBulletChartComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxBulletChartComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxBulletChartComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxBulletChartComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxBulletChartComponent.prototype.createComponent = function (options) {
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
    };
    jqxBulletChartComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxBulletChartComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxBulletChartComponent.prototype.setOptions = function (options) {
        this.host.jqxBulletChart('setOptions', options);
    };
    // jqxBulletChartComponent properties
    jqxBulletChartComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('animationDuration', arg);
        }
        else {
            return this.host.jqxBulletChart('animationDuration');
        }
    };
    jqxBulletChartComponent.prototype.barSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('barSize', arg);
        }
        else {
            return this.host.jqxBulletChart('barSize');
        }
    };
    jqxBulletChartComponent.prototype.description = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('description', arg);
        }
        else {
            return this.host.jqxBulletChart('description');
        }
    };
    jqxBulletChartComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('disabled', arg);
        }
        else {
            return this.host.jqxBulletChart('disabled');
        }
    };
    jqxBulletChartComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('height', arg);
        }
        else {
            return this.host.jqxBulletChart('height');
        }
    };
    jqxBulletChartComponent.prototype.labelsFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormat', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormat');
        }
    };
    jqxBulletChartComponent.prototype.labelsFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormatFunction');
        }
    };
    jqxBulletChartComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('orientation', arg);
        }
        else {
            return this.host.jqxBulletChart('orientation');
        }
    };
    jqxBulletChartComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('pointer', arg);
        }
        else {
            return this.host.jqxBulletChart('pointer');
        }
    };
    jqxBulletChartComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('rtl', arg);
        }
        else {
            return this.host.jqxBulletChart('rtl');
        }
    };
    jqxBulletChartComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ranges', arg);
        }
        else {
            return this.host.jqxBulletChart('ranges');
        }
    };
    jqxBulletChartComponent.prototype.showTooltip = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('showTooltip', arg);
        }
        else {
            return this.host.jqxBulletChart('showTooltip');
        }
    };
    jqxBulletChartComponent.prototype.target = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('target', arg);
        }
        else {
            return this.host.jqxBulletChart('target');
        }
    };
    jqxBulletChartComponent.prototype.ticks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ticks', arg);
        }
        else {
            return this.host.jqxBulletChart('ticks');
        }
    };
    jqxBulletChartComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('title', arg);
        }
        else {
            return this.host.jqxBulletChart('title');
        }
    };
    jqxBulletChartComponent.prototype.tooltipFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('tooltipFormatFunction');
        }
    };
    jqxBulletChartComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('width', arg);
        }
        else {
            return this.host.jqxBulletChart('width');
        }
    };
    // jqxBulletChartComponent functions
    jqxBulletChartComponent.prototype.destroy = function () {
        this.host.jqxBulletChart('destroy');
    };
    jqxBulletChartComponent.prototype.render = function () {
        this.host.jqxBulletChart('render');
    };
    jqxBulletChartComponent.prototype.refresh = function () {
        this.host.jqxBulletChart('refresh');
    };
    jqxBulletChartComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxBulletChart('val', value);
        }
        else {
            return this.host.jqxBulletChart('val');
        }
    };
    ;
    jqxBulletChartComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    jqxBulletChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxBulletChartComponent;
}()); //jqxBulletChartComponent

var jqxBulletChartModule = /** @class */ (function () {
    function jqxBulletChartModule() {
    }
    jqxBulletChartModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxBulletChartComponent],
            exports: [jqxBulletChartComponent]
        })
    ], jqxBulletChartModule);
    return jqxBulletChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxBulletChartComponent, jqxBulletChartModule };
