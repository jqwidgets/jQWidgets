import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxrangeselector';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxRangeSelectorComponent = /** @class */ (function () {
    function jqxRangeSelectorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxRangeSelectorComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxRangeSelectorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRangeSelectorComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRangeSelectorComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxRangeSelectorComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxRangeSelectorComponent.prototype.createComponent = function (options) {
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
    };
    jqxRangeSelectorComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRangeSelectorComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRangeSelectorComponent.prototype.setOptions = function (options) {
        this.host.jqxRangeSelector('setOptions', options);
    };
    // jqxRangeSelectorComponent properties
    jqxRangeSelectorComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    };
    jqxRangeSelectorComponent.prototype.groupLabelsFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('groupLabelsFormatFunction');
        }
    };
    jqxRangeSelectorComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    };
    jqxRangeSelectorComponent.prototype.labelsFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormat');
        }
    };
    jqxRangeSelectorComponent.prototype.labelsFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    };
    jqxRangeSelectorComponent.prototype.labelsOnTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsOnTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsOnTicks');
        }
    };
    jqxRangeSelectorComponent.prototype.markersFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormat');
        }
    };
    jqxRangeSelectorComponent.prototype.markersFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormatFunction');
        }
    };
    jqxRangeSelectorComponent.prototype.majorTicksInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    };
    jqxRangeSelectorComponent.prototype.minorTicksInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    };
    jqxRangeSelectorComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    };
    jqxRangeSelectorComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    };
    jqxRangeSelectorComponent.prototype.moveOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    };
    jqxRangeSelectorComponent.prototype.padding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    };
    jqxRangeSelectorComponent.prototype.range = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    };
    jqxRangeSelectorComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    };
    jqxRangeSelectorComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    };
    jqxRangeSelectorComponent.prototype.showGroupLabels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showGroupLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showGroupLabels');
        }
    };
    jqxRangeSelectorComponent.prototype.showMinorTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    };
    jqxRangeSelectorComponent.prototype.snapToTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    };
    jqxRangeSelectorComponent.prototype.showMajorLabels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    };
    jqxRangeSelectorComponent.prototype.showMarkers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    };
    jqxRangeSelectorComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    };
    jqxRangeSelectorComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    };
    // jqxRangeSelectorComponent functions
    jqxRangeSelectorComponent.prototype.destroy = function () {
        this.host.jqxRangeSelector('destroy');
    };
    jqxRangeSelectorComponent.prototype.getRange = function () {
        return this.host.jqxRangeSelector('getRange');
    };
    jqxRangeSelectorComponent.prototype.render = function () {
        this.host.jqxRangeSelector('render');
    };
    jqxRangeSelectorComponent.prototype.refresh = function () {
        this.host.jqxRangeSelector('refresh');
    };
    jqxRangeSelectorComponent.prototype.setRange = function (from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    };
    jqxRangeSelectorComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
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
    return jqxRangeSelectorComponent;
}()); //jqxRangeSelectorComponent
export { jqxRangeSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyYW5nZXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHJhbmdlc2VsZWN0b3IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHJhbmdlc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFrQ0csbUNBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsZUFBZSxFQUFDLGVBQWUsRUFBQyx1QkFBdUIsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUEwVWhYLG1DQUFtQztRQUN6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXJVckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcs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QUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxzQ0FBc0M7U0FDbkQsQ0FBQztpREFvQytCLFVBQVU7T0FsQzlCLHlCQUF5QixDQThXckM7SUFBRCxnQ0FBQztDQUFBLEFBOVdELElBOFdDLENBQUMsMkJBQTJCO1NBOVdoQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFJhbmdlU2VsZWN0b3InLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2dyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb24nKSBhdHRyR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbjogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIGRhdGU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsnZGF0ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2xhYmVsc0Zvcm1hdCcpIGF0dHJMYWJlbHNGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnbGFiZWxzRm9ybWF0RnVuY3Rpb24nKSBhdHRyTGFiZWxzRm9ybWF0RnVuY3Rpb246ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdsYWJlbHNPblRpY2tzJykgYXR0ckxhYmVsc09uVGlja3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ21hcmtlcnNGb3JtYXQnKSBhdHRyTWFya2Vyc0Zvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nKSBhdHRyTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uOiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbjoganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnbWFqb3JUaWNrc0ludGVydmFsJykgYXR0ck1ham9yVGlja3NJbnRlcnZhbDogYW55O1xuICAgQElucHV0KCdtaW5vclRpY2tzSW50ZXJ2YWwnKSBhdHRyTWlub3JUaWNrc0ludGVydmFsOiBhbnk7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IGFueTtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogYW55O1xuICAgQElucHV0KCdtb3ZlT25DbGljaycpIGF0dHJNb3ZlT25DbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgncGFkZGluZycpIGF0dHJQYWRkaW5nOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3JhbmdlJykgYXR0clJhbmdlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvclJhbmdlO1xuICAgQElucHV0KCdyZXNpemFibGUnKSBhdHRyUmVzaXphYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93R3JvdXBMYWJlbHMnKSBhdHRyU2hvd0dyb3VwTGFiZWxzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93TWlub3JUaWNrcycpIGF0dHJTaG93TWlub3JUaWNrczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc25hcFRvVGlja3MnKSBhdHRyU25hcFRvVGlja3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dNYWpvckxhYmVscycpIGF0dHJTaG93TWFqb3JMYWJlbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dNYXJrZXJzJykgYXR0clNob3dNYXJrZXJzOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywnZ3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbicsJ2hlaWdodCcsJ2xhYmVsc0Zvcm1hdCcsJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywnbGFiZWxzT25UaWNrcycsJ21hcmtlcnNGb3JtYXQnLCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nLCdtYWpvclRpY2tzSW50ZXJ2YWwnLCdtaW5vclRpY2tzSW50ZXJ2YWwnLCdtYXgnLCdtaW4nLCdtb3ZlT25DbGljaycsJ3BhZGRpbmcnLCdyYW5nZScsJ3Jlc2l6YWJsZScsJ3J0bCcsJ3Nob3dHcm91cExhYmVscycsJ3Nob3dNaW5vclRpY2tzJywnc25hcFRvVGlja3MnLCdzaG93TWFqb3JMYWJlbHMnLCdzaG93TWFya2VycycsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UmFuZ2VTZWxlY3RvcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFJhbmdlU2VsZWN0b3InLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhSYW5nZVNlbGVjdG9yQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvbihhcmc/OiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yR3JvdXBMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSwgZGF0ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWydkYXRlJ10pID0+IHN0cmluZyk6ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHcm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBkYXRlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvckdyb3VwTGFiZWxzRm9ybWF0RnVuY3Rpb25bJ2RhdGUnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdncm91cExhYmVsc0Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc0Zvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc0Zvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbGFiZWxzRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVsc0Zvcm1hdEZ1bmN0aW9uKGFyZz86ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JMYWJlbHNGb3JtYXRGdW5jdGlvblsndmFsdWUnXSkgPT4gc3RyaW5nKTogKHZhbHVlOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvckxhYmVsc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2xhYmVsc0Zvcm1hdEZ1bmN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNGb3JtYXRGdW5jdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYWJlbHNPblRpY2tzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNPblRpY2tzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdsYWJlbHNPblRpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1hcmtlcnNGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1hcmtlcnNGb3JtYXRGdW5jdGlvbihhcmc/OiAodmFsdWU6IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yTWFya2Vyc0Zvcm1hdEZ1bmN0aW9uWyd2YWx1ZSddLCBwb3NpdGlvbjoganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3Bvc2l0aW9uJ10pID0+IHN0cmluZyk6ICh2YWx1ZToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JNYXJrZXJzRm9ybWF0RnVuY3Rpb25bJ3ZhbHVlJ10sIHBvc2l0aW9uOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3Rvck1hcmtlcnNGb3JtYXRGdW5jdGlvblsncG9zaXRpb24nXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXJrZXJzRm9ybWF0RnVuY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21hcmtlcnNGb3JtYXRGdW5jdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYWpvclRpY2tzSW50ZXJ2YWwoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYWpvclRpY2tzSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21ham9yVGlja3NJbnRlcnZhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5vclRpY2tzSW50ZXJ2YWwoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtaW5vclRpY2tzSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbm9yVGlja3NJbnRlcnZhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb3ZlT25DbGljayhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcignbW92ZU9uQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ21vdmVPbkNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZGRpbmcoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdwYWRkaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdwYWRkaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhbmdlKGFyZz86IGpxd2lkZ2V0cy5SYW5nZVNlbGVjdG9yUmFuZ2UpOiBqcXdpZGdldHMuUmFuZ2VTZWxlY3RvclJhbmdlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyYW5nZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncmFuZ2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzaXphYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZXNpemFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Jlc2l6YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3RvcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dHcm91cExhYmVscyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd0dyb3VwTGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93R3JvdXBMYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd01pbm9yVGlja3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNaW5vclRpY2tzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWlub3JUaWNrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzbmFwVG9UaWNrcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc25hcFRvVGlja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3NuYXBUb1RpY2tzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dNYWpvckxhYmVscyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFuZ2VTZWxlY3Rvcignc2hvd01ham9yTGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWFqb3JMYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd01hcmtlcnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3Nob3dNYXJrZXJzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdzaG93TWFya2VycycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgZnVuY3Rpb25zXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZ2V0UmFuZ2UoKToganF3aWRnZXRzLlJhbmdlU2VsZWN0b3JHZXRSYW5nZSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ2dldFJhbmdlJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYW5nZVNlbGVjdG9yKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHNldFJhbmdlKGZyb206IGFueSwgdG86IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhbmdlU2VsZWN0b3IoJ3NldFJhbmdlJywgZnJvbSwgdG8pO1xuICAgfVxuXG5cbiAgIC8vIGpxeFJhbmdlU2VsZWN0b3JDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UmFuZ2VTZWxlY3RvckNvbXBvbmVudFxuIl19