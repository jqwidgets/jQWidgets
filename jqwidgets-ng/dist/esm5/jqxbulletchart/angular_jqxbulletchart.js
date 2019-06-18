import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxbulletchart from '../../jqwidgets-scripts/jqwidgets/jqxbulletchart';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxBulletChartComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('barSize'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrBarSize", void 0);
    tslib_1.__decorate([
        Input('description'),
        tslib_1.__metadata("design:type", String)
    ], jqxBulletChartComponent.prototype, "attrDescription", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxBulletChartComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('labelsFormat'),
        tslib_1.__metadata("design:type", String)
    ], jqxBulletChartComponent.prototype, "attrLabelsFormat", void 0);
    tslib_1.__decorate([
        Input('labelsFormatFunction'),
        tslib_1.__metadata("design:type", Function)
    ], jqxBulletChartComponent.prototype, "attrLabelsFormatFunction", void 0);
    tslib_1.__decorate([
        Input('orientation'),
        tslib_1.__metadata("design:type", String)
    ], jqxBulletChartComponent.prototype, "attrOrientation", void 0);
    tslib_1.__decorate([
        Input('pointer'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrPointer", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxBulletChartComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('ranges'),
        tslib_1.__metadata("design:type", Array)
    ], jqxBulletChartComponent.prototype, "attrRanges", void 0);
    tslib_1.__decorate([
        Input('showTooltip'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxBulletChartComponent.prototype, "attrShowTooltip", void 0);
    tslib_1.__decorate([
        Input('target'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrTarget", void 0);
    tslib_1.__decorate([
        Input('ticks'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrTicks", void 0);
    tslib_1.__decorate([
        Input('title'),
        tslib_1.__metadata("design:type", String)
    ], jqxBulletChartComponent.prototype, "attrTitle", void 0);
    tslib_1.__decorate([
        Input('tooltipFormatFunction'),
        tslib_1.__metadata("design:type", Function)
    ], jqxBulletChartComponent.prototype, "attrTooltipFormatFunction", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxBulletChartComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxBulletChartComponent.prototype, "onChange", void 0);
    jqxBulletChartComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxBulletChart',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxBulletChartComponent);
    return jqxBulletChartComponent;
}()); //jqxBulletChartComponent
export { jqxBulletChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhidWxsZXRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhidWxsZXRjaGFydC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4YnVsbGV0Y2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUEyQkcsaUNBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBa1I3TyxpQ0FBaUM7UUFDdkIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE3UXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRiw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBRTlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssRUFBRTs0QkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM1Rjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUM3RCxTQUFTO3FCQUNYO29CQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDL0Q7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQ0csSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7UUFDcEQsSUFBSSxPQUFPLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNENBQVUsR0FBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7UUFDbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsaURBQWUsR0FBZixVQUFnQixPQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXRGLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsT0FBYTtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnREFBYyxHQUFkO1FBQ0csSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsT0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxtREFBaUIsR0FBakIsVUFBa0IsR0FBWTtRQUMzQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4RDtJQUNKLENBQUM7SUFFRCx5Q0FBTyxHQUFQLFVBQVEsR0FBcUI7UUFDMUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksR0FBWTtRQUNyQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxHQUFhO1FBQ25CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFPLEdBQXFCO1FBQ3pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsOENBQVksR0FBWixVQUFhLEdBQVk7UUFDdEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuRDtJQUNKLENBQUM7SUFFRCxzREFBb0IsR0FBcEIsVUFBcUIsR0FBMkk7UUFDN0osSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDM0Q7SUFDSixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLEdBQVk7UUFDckIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7SUFFRCx5Q0FBTyxHQUFQLFVBQVEsR0FBa0M7UUFDdkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7SUFFRCxxQ0FBRyxHQUFILFVBQUksR0FBYTtRQUNkLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFPLEdBQXdDO1FBQzVDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLEdBQWE7UUFDdEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7SUFFRCx3Q0FBTSxHQUFOLFVBQU8sR0FBa0M7UUFDdEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNKLENBQUM7SUFFRCx1Q0FBSyxHQUFMLFVBQU0sR0FBZ0M7UUFDbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNKLENBQUM7SUFFRCx1Q0FBSyxHQUFMLFVBQU0sR0FBWTtRQUNmLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUM7SUFDSixDQUFDO0lBRUQsdURBQXFCLEdBQXJCLFVBQXNCLEdBQW9LO1FBQ3ZMLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzVEO0lBQ0osQ0FBQztJQUVELHVDQUFLLEdBQUwsVUFBTSxHQUFxQjtRQUN4QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQztJQUdELG9DQUFvQztJQUNwQyx5Q0FBTyxHQUFQO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBRyxHQUFILFVBQUksS0FBYztRQUNmLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7SUFBQSxDQUFDO0lBTUYsZ0RBQWMsR0FBZDtRQUFBLGlCQUVDO1FBREUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQTNTMkI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzswRUFBK0I7SUFDeEM7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7Z0VBQThCO0lBQ3pCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O29FQUF5QjtJQUMzQjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztpRUFBdUI7SUFDbEI7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7cUVBQTBCO0lBQ2pCO1FBQTlCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7NkVBQWlLO0lBQ3pLO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O29FQUF5QjtJQUM1QjtRQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDOztnRUFBMkM7SUFDOUM7UUFBYixLQUFLLENBQUMsS0FBSyxDQUFDOzs0REFBa0I7SUFDZDtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzBDQUFhLEtBQUs7K0RBQThCO0lBQzFDO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O29FQUEwQjtJQUM5QjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzsrREFBMEM7SUFDMUM7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzs4REFBdUM7SUFDdEM7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzs4REFBbUI7SUFDRjtRQUEvQixLQUFLLENBQUMsdUJBQXVCLENBQUM7OzhFQUEyTDtJQUMxTTtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzhEQUE0QjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzsrREFBNkI7SUFFdkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7K0RBQTRCO0lBcVJ2QztRQUFULE1BQU0sRUFBRTs7NkRBQStCO0lBelM5Qix1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7aURBNkIrQixVQUFVO09BM0I5Qix1QkFBdUIsQ0ErU25DO0lBQUQsOEJBQUM7Q0FBQSxBQS9TRCxJQStTQyxDQUFDLHlCQUF5QjtTQS9TZCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEJ1bGxldENoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhCdWxsZXRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGF0dHJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdiYXJTaXplJykgYXR0ckJhclNpemU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZGVzY3JpcHRpb24nKSBhdHRyRGVzY3JpcHRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2xhYmVsc0Zvcm1hdCcpIGF0dHJMYWJlbHNGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnbGFiZWxzRm9ybWF0RnVuY3Rpb24nKSBhdHRyTGFiZWxzRm9ybWF0RnVuY3Rpb246ICh2YWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydExhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbj86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydExhYmVsc0Zvcm1hdEZ1bmN0aW9uWydwb3NpdGlvbiddKSA9PiBhbnk7XG4gICBASW5wdXQoJ29yaWVudGF0aW9uJykgYXR0ck9yaWVudGF0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BvaW50ZXInKSBhdHRyUG9pbnRlcjoganF3aWRnZXRzLkJ1bGxldENoYXJ0UG9pbnRlcjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmFuZ2VzJykgYXR0clJhbmdlczogQXJyYXk8anF3aWRnZXRzLkJ1bGxldENoYXJ0UmFuZ2VzPjtcbiAgIEBJbnB1dCgnc2hvd1Rvb2x0aXAnKSBhdHRyU2hvd1Rvb2x0aXA6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RhcmdldCcpIGF0dHJUYXJnZXQ6IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFBvaW50ZXI7XG4gICBASW5wdXQoJ3RpY2tzJykgYXR0clRpY2tzOiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUaWNrcztcbiAgIEBJbnB1dCgndGl0bGUnKSBhdHRyVGl0bGU6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbHRpcEZvcm1hdEZ1bmN0aW9uJykgYXR0clRvb2x0aXBGb3JtYXRGdW5jdGlvbjogKHBvaW50ZXJWYWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRvb2x0aXBGb3JtYXRGdW5jdGlvblsncG9pbnRlclZhbHVlJ10sIHRhcmdldFZhbHVlPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0VG9vbHRpcEZvcm1hdEZ1bmN0aW9uWyd0YXJnZXRWYWx1ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uRHVyYXRpb24nLCdiYXJTaXplJywnZGVzY3JpcHRpb24nLCdkaXNhYmxlZCcsJ2hlaWdodCcsJ2xhYmVsc0Zvcm1hdCcsJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywnb3JpZW50YXRpb24nLCdwb2ludGVyJywncnRsJywncmFuZ2VzJywnc2hvd1Rvb2x0aXAnLCd0YXJnZXQnLCd0aWNrcycsJ3RpdGxlJywndG9vbHRpcEZvcm1hdEZ1bmN0aW9uJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4QnVsbGV0Q2hhcnQ7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4QnVsbGV0Q2hhcnQnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4QnVsbGV0Q2hhcnRDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnYW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBiYXJTaXplKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2JhclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdiYXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlc2NyaXB0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2Rlc2NyaXB0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2xhYmVsc0Zvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2xhYmVsc0Zvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYWJlbHNGb3JtYXRGdW5jdGlvbihhcmc/OiAodmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgcG9zaXRpb24/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRMYWJlbHNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gYW55KTogKHZhbHVlPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0TGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0TGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnbGFiZWxzRm9ybWF0RnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3JpZW50YXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnb3JpZW50YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdvcmllbnRhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb2ludGVyKGFyZz86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFBvaW50ZXIpOiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRQb2ludGVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgncG9pbnRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3BvaW50ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhbmdlcyhhcmc/OiBBcnJheTxqcXdpZGdldHMuQnVsbGV0Q2hhcnRSYW5nZXM+KTogQXJyYXk8anF3aWRnZXRzLkJ1bGxldENoYXJ0UmFuZ2VzPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3JhbmdlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3JhbmdlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93VG9vbHRpcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3Nob3dUb29sdGlwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnc2hvd1Rvb2x0aXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGFyZ2V0KGFyZz86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFBvaW50ZXIpOiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRQb2ludGVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndGFyZ2V0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndGFyZ2V0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpY2tzKGFyZz86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRpY2tzKToganF3aWRnZXRzLkJ1bGxldENoYXJ0VGlja3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd0aWNrcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3RpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpdGxlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3RpdGxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndGl0bGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbHRpcEZvcm1hdEZ1bmN0aW9uKGFyZz86IChwb2ludGVyVmFsdWU/OiBqcXdpZGdldHMuQnVsbGV0Q2hhcnRUb29sdGlwRm9ybWF0RnVuY3Rpb25bJ3BvaW50ZXJWYWx1ZSddLCB0YXJnZXRWYWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRvb2x0aXBGb3JtYXRGdW5jdGlvblsndGFyZ2V0VmFsdWUnXSkgPT4gc3RyaW5nKTogKHBvaW50ZXJWYWx1ZT86IGpxd2lkZ2V0cy5CdWxsZXRDaGFydFRvb2x0aXBGb3JtYXRGdW5jdGlvblsncG9pbnRlclZhbHVlJ10sIHRhcmdldFZhbHVlPzoganF3aWRnZXRzLkJ1bGxldENoYXJ0VG9vbHRpcEZvcm1hdEZ1bmN0aW9uWyd0YXJnZXRWYWx1ZSddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd0b29sdGlwRm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd0b29sdGlwRm9ybWF0RnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEJ1bGxldENoYXJ0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgnZGVzdHJveScpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEJ1bGxldENoYXJ0KCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IG51bWJlcik6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdWxsZXRDaGFydCgndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnVsbGV0Q2hhcnQoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhCdWxsZXRDaGFydENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhCdWxsZXRDaGFydENvbXBvbmVudFxuIl19