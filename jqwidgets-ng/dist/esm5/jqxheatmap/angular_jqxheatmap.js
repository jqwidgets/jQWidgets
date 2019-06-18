/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
var jqxHeatMapComponent = /** @class */ (function () {
    function jqxHeatMapComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['xAxis', 'yAxis', 'paletteSettings', 'legendSettings', 'source', 'title', 'width', 'tooltipRender'];
        this.elementRef = containerElement;
    }
    jqxHeatMapComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxHeatMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxHeatMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxHeatMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxHeatMap(this.properties[i])) {
                        this.host.jqxHeatMap(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxHeatMapComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxHeatMapComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxHeatMapComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxHeatMapComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxHeatMapComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxHeatMap', options);
    };
    jqxHeatMapComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxHeatMapComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxHeatMapComponent.prototype.setOptions = function (options) {
        this.host.jqxHeatMap('setOptions', options);
    };
    // jqxHeatMapComponent properties
    jqxHeatMapComponent.prototype.xAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('xAxis', arg);
        }
        else {
            return this.host.jqxHeatMap('xAxis');
        }
    };
    jqxHeatMapComponent.prototype.yAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('yAxis', arg);
        }
        else {
            return this.host.jqxHeatMap('yAxis');
        }
    };
    jqxHeatMapComponent.prototype.paletteSettings = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('paletteSettings', arg);
        }
        else {
            return this.host.jqxHeatMap('paletteSettings');
        }
    };
    jqxHeatMapComponent.prototype.legendSettings = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('legendSettings', arg);
        }
        else {
            return this.host.jqxHeatMap('legendSettings');
        }
    };
    jqxHeatMapComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('source', arg);
        }
        else {
            return this.host.jqxHeatMap('source');
        }
    };
    jqxHeatMapComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('title', arg);
        }
        else {
            return this.host.jqxHeatMap('title');
        }
    };
    jqxHeatMapComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('width', arg);
        }
        else {
            return this.host.jqxHeatMap('width');
        }
    };
    jqxHeatMapComponent.prototype.tooltipRender = function (arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('tooltipRender', arg);
        }
        else {
            return this.host.jqxHeatMap('tooltipRender');
        }
    };
    // jqxHeatMapComponent functions
    jqxHeatMapComponent.prototype.destroy = function () {
        this.host.jqxHeatMap('destroy');
    };
    jqxHeatMapComponent.prototype.setLegendPosition = function (position) {
        this.host.jqxHeatMap('setLegendPosition', position);
    };
    jqxHeatMapComponent.prototype.setOpposedXAxisPosition = function (opposedPosition) {
        this.host.jqxHeatMap('setOpposedXAxisPosition', opposedPosition);
    };
    jqxHeatMapComponent.prototype.setOpposedYAxisPosition = function (opposedPosition) {
        this.host.jqxHeatMap('setOpposedYAxisPosition', opposedPosition);
    };
    jqxHeatMapComponent.prototype.reverseXAxisPosition = function (isInversed) {
        this.host.jqxHeatMap('reverseXAxisPosition', isInversed);
    };
    jqxHeatMapComponent.prototype.reverseYAxisPosition = function (isInversed) {
        this.host.jqxHeatMap('reverseYAxisPosition', isInversed);
    };
    jqxHeatMapComponent.prototype.setPaletteType = function (type) {
        this.host.jqxHeatMap('setPaletteType', type);
    };
    // jqxHeatMapComponent events
    jqxHeatMapComponent.prototype.__wireEvents__ = function () {
    };
    tslib_1.__decorate([
        Input('xAxis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrXAxis", void 0);
    tslib_1.__decorate([
        Input('yAxis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrYAxis", void 0);
    tslib_1.__decorate([
        Input('paletteSettings'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrPaletteSettings", void 0);
    tslib_1.__decorate([
        Input('legendSettings'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrLegendSettings", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Array)
    ], jqxHeatMapComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('title'),
        tslib_1.__metadata("design:type", String)
    ], jqxHeatMapComponent.prototype, "attrTitle", void 0);
    tslib_1.__decorate([
        Input('tooltipRender'),
        tslib_1.__metadata("design:type", Function)
    ], jqxHeatMapComponent.prototype, "attrTooltipRender", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxHeatMapComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxHeatMapComponent.prototype, "autoCreate", void 0);
    jqxHeatMapComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxHeatMap',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxHeatMapComponent);
    return jqxHeatMapComponent;
}()); //jqxHeatMapComponent
export { jqxHeatMapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhoZWF0bWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGhlYXRtYXAvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGhlYXRtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0IsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVE3RztJQW1CRyw2QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBTWxILElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRix5Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBRTlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssRUFBRTs0QkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN4Rjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxTQUFTO3FCQUNYO29CQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQ0csSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7UUFDcEQsSUFBSSxPQUFPLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7UUFDbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixPQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVsRixDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLE9BQWE7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQWMsR0FBZDtRQUNHLElBQUcsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLE9BQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsbUNBQUssR0FBTCxVQUFNLEdBQTRCO1FBQy9CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDO0lBRUQsbUNBQUssR0FBTCxVQUFNLEdBQTRCO1FBQy9CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixHQUFzQztRQUNuRCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7SUFFRCw0Q0FBYyxHQUFkLFVBQWUsR0FBcUM7UUFDakQsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakQ7SUFDSixDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLEdBQVc7UUFDZixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0osQ0FBQztJQUVELG1DQUFLLEdBQUwsVUFBTSxHQUFZO1FBQ2YsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNKLENBQUM7SUFFRCxtQ0FBSyxHQUFMLFVBQU0sR0FBcUI7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNKLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsR0FBeVE7UUFDcFIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoRDtJQUNKLENBQUM7SUFHRCxnQ0FBZ0M7SUFDaEMscUNBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwrQ0FBaUIsR0FBakIsVUFBa0IsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHFEQUF1QixHQUF2QixVQUF3QixlQUF3QjtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscURBQXVCLEdBQXZCLFVBQXdCLGVBQXdCO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxrREFBb0IsR0FBcEIsVUFBcUIsVUFBbUI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGtEQUFvQixHQUFwQixVQUFxQixVQUFtQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLElBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELDZCQUE2QjtJQUc3Qiw0Q0FBYyxHQUFkO0lBRUEsQ0FBQztJQW5PZTtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzBEQUFtQztJQUNsQztRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzBEQUFtQztJQUN4QjtRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7O29FQUF1RDtJQUN2RDtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7O21FQUFxRDtJQUM1RDtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzsyREFBbUI7SUFDbkI7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzswREFBbUI7SUFDVjtRQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOztrRUFBd1I7SUFDL1I7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzswREFBNEI7SUFDMUI7UUFBaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7MkRBQTZCO0lBRXZCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7OzJEQUE0QjtJQVp2QyxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQXFCK0IsVUFBVTtPQW5COUIsbUJBQW1CLENBdU8vQjtJQUFELDBCQUFDO0NBQUEsQUF2T0QsSUF1T0MsQ0FBQyxxQkFBcUI7U0F2T1YsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhIZWF0TWFwJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhIZWF0TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ3hBeGlzJykgYXR0clhBeGlzOiBqcXdpZGdldHMuSGVhdE1hcFhBeGlzO1xuICAgQElucHV0KCd5QXhpcycpIGF0dHJZQXhpczoganF3aWRnZXRzLkhlYXRNYXBZQXhpcztcbiAgIEBJbnB1dCgncGFsZXR0ZVNldHRpbmdzJykgYXR0clBhbGV0dGVTZXR0aW5nczoganF3aWRnZXRzLkhlYXRNYXBQYWxldHRlU2V0dGluZ3M7XG4gICBASW5wdXQoJ2xlZ2VuZFNldHRpbmdzJykgYXR0ckxlZ2VuZFNldHRpbmdzOiBqcXdpZGdldHMuSGVhdE1hcExlZ2VuZFNldHRpbmdzO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnlbXTtcbiAgIEBJbnB1dCgndGl0bGUnKSBhdHRyVGl0bGU6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbHRpcFJlbmRlcicpIGF0dHJUb29sdGlwUmVuZGVyOiAoeExhYmVsPzoganF3aWRnZXRzLkhlYXRNYXBUb29sdGlwUmVuZGVyWyd4TGFiZWwnXSwgeUxhYmVsPzoganF3aWRnZXRzLkhlYXRNYXBUb29sdGlwUmVuZGVyWyd5TGFiZWwnXSwgdmFsdWU/OiBqcXdpZGdldHMuSGVhdE1hcFRvb2x0aXBSZW5kZXJbJ3ZhbHVlJ10sIGRhdGU/OiBqcXdpZGdldHMuSGVhdE1hcFRvb2x0aXBSZW5kZXJbJ2RhdGUnXSwgY29udGVudD86IGpxd2lkZ2V0cy5IZWF0TWFwVG9vbHRpcFJlbmRlclsnY29udGVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ3hBeGlzJywneUF4aXMnLCdwYWxldHRlU2V0dGluZ3MnLCdsZWdlbmRTZXR0aW5ncycsJ3NvdXJjZScsJ3RpdGxlJywnd2lkdGgnLCd0b29sdGlwUmVuZGVyJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEhlYXRNYXA7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4SGVhdE1hcCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhIZWF0TWFwKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhIZWF0TWFwKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhIZWF0TWFwJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4SGVhdE1hcENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICB4QXhpcyhhcmc/OiBqcXdpZGdldHMuSGVhdE1hcFhBeGlzKToganF3aWRnZXRzLkhlYXRNYXBYQXhpcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgneEF4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3hBeGlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHlBeGlzKGFyZz86IGpxd2lkZ2V0cy5IZWF0TWFwWUF4aXMpOiBqcXdpZGdldHMuSGVhdE1hcFlBeGlzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhIZWF0TWFwKCd5QXhpcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4SGVhdE1hcCgneUF4aXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFsZXR0ZVNldHRpbmdzKGFyZz86IGpxd2lkZ2V0cy5IZWF0TWFwUGFsZXR0ZVNldHRpbmdzKToganF3aWRnZXRzLkhlYXRNYXBQYWxldHRlU2V0dGluZ3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3BhbGV0dGVTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4SGVhdE1hcCgncGFsZXR0ZVNldHRpbmdzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZFNldHRpbmdzKGFyZz86IGpxd2lkZ2V0cy5IZWF0TWFwTGVnZW5kU2V0dGluZ3MpOiBqcXdpZGdldHMuSGVhdE1hcExlZ2VuZFNldHRpbmdzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhIZWF0TWFwKCdsZWdlbmRTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4SGVhdE1hcCgnbGVnZW5kU2V0dGluZ3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueVtdKTogYW55W10ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4SGVhdE1hcCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpdGxlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgndGl0bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3RpdGxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2x0aXBSZW5kZXIoYXJnPzogKHhMYWJlbD86IGpxd2lkZ2V0cy5IZWF0TWFwVG9vbHRpcFJlbmRlclsneExhYmVsJ10sIHlMYWJlbD86IGpxd2lkZ2V0cy5IZWF0TWFwVG9vbHRpcFJlbmRlclsneUxhYmVsJ10sIHZhbHVlPzoganF3aWRnZXRzLkhlYXRNYXBUb29sdGlwUmVuZGVyWyd2YWx1ZSddLCBkYXRlPzoganF3aWRnZXRzLkhlYXRNYXBUb29sdGlwUmVuZGVyWydkYXRlJ10sIGNvbnRlbnQ/OiBqcXdpZGdldHMuSGVhdE1hcFRvb2x0aXBSZW5kZXJbJ2NvbnRlbnQnXSkgPT4gdm9pZCk6ICh4TGFiZWw/OiBqcXdpZGdldHMuSGVhdE1hcFRvb2x0aXBSZW5kZXJbJ3hMYWJlbCddLCB5TGFiZWw/OiBqcXdpZGdldHMuSGVhdE1hcFRvb2x0aXBSZW5kZXJbJ3lMYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5IZWF0TWFwVG9vbHRpcFJlbmRlclsndmFsdWUnXSwgZGF0ZT86IGpxd2lkZ2V0cy5IZWF0TWFwVG9vbHRpcFJlbmRlclsnZGF0ZSddLCBjb250ZW50PzoganF3aWRnZXRzLkhlYXRNYXBUb29sdGlwUmVuZGVyWydjb250ZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3Rvb2x0aXBSZW5kZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3Rvb2x0aXBSZW5kZXInKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhIZWF0TWFwQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhIZWF0TWFwKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIHNldExlZ2VuZFBvc2l0aW9uKHBvc2l0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgnc2V0TGVnZW5kUG9zaXRpb24nLCBwb3NpdGlvbik7XG4gICB9XG5cbiAgIHNldE9wcG9zZWRYQXhpc1Bvc2l0aW9uKG9wcG9zZWRQb3NpdGlvbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3NldE9wcG9zZWRYQXhpc1Bvc2l0aW9uJywgb3Bwb3NlZFBvc2l0aW9uKTtcbiAgIH1cblxuICAgc2V0T3Bwb3NlZFlBeGlzUG9zaXRpb24ob3Bwb3NlZFBvc2l0aW9uOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgnc2V0T3Bwb3NlZFlBeGlzUG9zaXRpb24nLCBvcHBvc2VkUG9zaXRpb24pO1xuICAgfVxuXG4gICByZXZlcnNlWEF4aXNQb3NpdGlvbihpc0ludmVyc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4SGVhdE1hcCgncmV2ZXJzZVhBeGlzUG9zaXRpb24nLCBpc0ludmVyc2VkKTtcbiAgIH1cblxuICAgcmV2ZXJzZVlBeGlzUG9zaXRpb24oaXNJbnZlcnNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3JldmVyc2VZQXhpc1Bvc2l0aW9uJywgaXNJbnZlcnNlZCk7XG4gICB9XG5cbiAgIHNldFBhbGV0dGVUeXBlKHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEhlYXRNYXAoJ3NldFBhbGV0dGVUeXBlJywgdHlwZSk7XG4gICB9XG5cblxuICAgLy8ganF4SGVhdE1hcENvbXBvbmVudCBldmVudHNcblxuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcblxuICAgfVxuXG59IC8vanF4SGVhdE1hcENvbXBvbmVudFxuIl19