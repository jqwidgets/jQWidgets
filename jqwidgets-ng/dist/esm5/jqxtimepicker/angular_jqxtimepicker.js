/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTimePickerComponent = /** @class */ (function () {
    function jqxTimePickerComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoSwitchToMinutes', 'disabled', 'footer', 'footerTemplate', 'format', 'minuteInterval', 'name', 'readonly', 'selection', 'theme', 'unfocusable', 'value', 'view'];
        // jqxTimePickerComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxTimePickerComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxTimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTimePicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTimePicker(this.properties[i])) {
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTimePickerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTimePickerComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTimePickerComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxTimePickerComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxTimePickerComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTimePicker', options);
    };
    jqxTimePickerComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTimePickerComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTimePickerComponent.prototype.setOptions = function (options) {
        this.host.jqxTimePicker('setOptions', options);
    };
    // jqxTimePickerComponent properties
    jqxTimePickerComponent.prototype.autoSwitchToMinutes = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('autoSwitchToMinutes', arg);
        }
        else {
            return this.host.jqxTimePicker('autoSwitchToMinutes');
        }
    };
    jqxTimePickerComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('disabled', arg);
        }
        else {
            return this.host.jqxTimePicker('disabled');
        }
    };
    jqxTimePickerComponent.prototype.footer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footer', arg);
        }
        else {
            return this.host.jqxTimePicker('footer');
        }
    };
    jqxTimePickerComponent.prototype.footerTemplate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footerTemplate', arg);
        }
        else {
            return this.host.jqxTimePicker('footerTemplate');
        }
    };
    jqxTimePickerComponent.prototype.format = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('format', arg);
        }
        else {
            return this.host.jqxTimePicker('format');
        }
    };
    jqxTimePickerComponent.prototype.minuteInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('minuteInterval', arg);
        }
        else {
            return this.host.jqxTimePicker('minuteInterval');
        }
    };
    jqxTimePickerComponent.prototype.name = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('name', arg);
        }
        else {
            return this.host.jqxTimePicker('name');
        }
    };
    jqxTimePickerComponent.prototype.readonly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('readonly', arg);
        }
        else {
            return this.host.jqxTimePicker('readonly');
        }
    };
    jqxTimePickerComponent.prototype.selection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('selection', arg);
        }
        else {
            return this.host.jqxTimePicker('selection');
        }
    };
    jqxTimePickerComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('theme', arg);
        }
        else {
            return this.host.jqxTimePicker('theme');
        }
    };
    jqxTimePickerComponent.prototype.unfocusable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('unfocusable', arg);
        }
        else {
            return this.host.jqxTimePicker('unfocusable');
        }
    };
    jqxTimePickerComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('value', arg);
        }
        else {
            return this.host.jqxTimePicker('value');
        }
    };
    jqxTimePickerComponent.prototype.view = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('view', arg);
        }
        else {
            return this.host.jqxTimePicker('view');
        }
    };
    // jqxTimePickerComponent functions
    jqxTimePickerComponent.prototype.setHours = function (hours) {
        this.host.jqxTimePicker('setHours', hours);
    };
    jqxTimePickerComponent.prototype.setMinutes = function (minutes) {
        this.host.jqxTimePicker('setMinutes', minutes);
    };
    jqxTimePickerComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('autoSwitchToMinutes'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrAutoSwitchToMinutes", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('footer'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrFooter", void 0);
    tslib_1.__decorate([
        Input('footerTemplate'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrFooterTemplate", void 0);
    tslib_1.__decorate([
        Input('format'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrFormat", void 0);
    tslib_1.__decorate([
        Input('minuteInterval'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTimePickerComponent.prototype, "attrMinuteInterval", void 0);
    tslib_1.__decorate([
        Input('name'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrName", void 0);
    tslib_1.__decorate([
        Input('readonly'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrReadonly", void 0);
    tslib_1.__decorate([
        Input('selection'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrSelection", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('unfocusable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrUnfocusable", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Date)
    ], jqxTimePickerComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('view'),
        tslib_1.__metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrView", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "onChange", void 0);
    jqxTimePickerComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxTimePicker',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxTimePickerComponent);
    return jqxTimePickerComponent;
}()); //jqxTimePickerComponent
export { jqxTimePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0aW1lcGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRpbWVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUF5QkcsZ0NBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFzT2pMLGdDQUFnQztRQUN0QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWpPckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlDLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVB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QyxRQUFRLENBQUM7OzhEQUFvQjtJQUNYO1FBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7c0VBQTRCO0lBQ3JDO1FBQWQsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7NERBQWtCO0lBQ2I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7Z0VBQXVCO0lBQ3JCO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O2lFQUF1QjtJQUMxQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzZEQUFtQjtJQUNaO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O21FQUEwQjtJQUMvQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7MENBQVksSUFBSTs2REFBQztJQUNqQjtRQUFkLEtBQUssQ0FBQyxNQUFNLENBQUM7OzREQUFrQjtJQUNoQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzZEQUE0QjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzs4REFBNkI7SUFFdkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7OERBQTRCO0lBeU92QztRQUFULE1BQU0sRUFBRTs7NERBQStCO0lBM1A5QixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQTJCK0IsVUFBVTtPQXpCOUIsc0JBQXNCLENBaVFsQztJQUFELDZCQUFDO0NBQUEsQUFqUUQsSUFpUUMsQ0FBQyx3QkFBd0I7U0FqUWIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhUaW1lUGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2F1dG9Td2l0Y2hUb01pbnV0ZXMnKSBhdHRyQXV0b1N3aXRjaFRvTWludXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Zvb3RlcicpIGF0dHJGb290ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Zvb3RlclRlbXBsYXRlJykgYXR0ckZvb3RlclRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Zvcm1hdCcpIGF0dHJGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnbWludXRlSW50ZXJ2YWwnKSBhdHRyTWludXRlSW50ZXJ2YWw6IG51bWJlcjtcbiAgIEBJbnB1dCgnbmFtZScpIGF0dHJOYW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3JlYWRvbmx5JykgYXR0clJlYWRvbmx5OiBib29sZWFuO1xuICAgQElucHV0KCdzZWxlY3Rpb24nKSBhdHRyU2VsZWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VuZm9jdXNhYmxlJykgYXR0clVuZm9jdXNhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogRGF0ZTtcbiAgIEBJbnB1dCgndmlldycpIGF0dHJWaWV3OiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXV0b1N3aXRjaFRvTWludXRlcycsJ2Rpc2FibGVkJywnZm9vdGVyJywnZm9vdGVyVGVtcGxhdGUnLCdmb3JtYXQnLCdtaW51dGVJbnRlcnZhbCcsJ25hbWUnLCdyZWFkb25seScsJ3NlbGVjdGlvbicsJ3RoZW1lJywndW5mb2N1c2FibGUnLCd2YWx1ZScsJ3ZpZXcnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VGltZVBpY2tlcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFRpbWVQaWNrZXInLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhUaW1lUGlja2VyQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGF1dG9Td2l0Y2hUb01pbnV0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2F1dG9Td2l0Y2hUb01pbnV0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2F1dG9Td2l0Y2hUb01pbnV0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb290ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2Zvb3RlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignZm9vdGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvb3RlclRlbXBsYXRlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignZm9vdGVyVGVtcGxhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2Zvb3RlclRlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ2Zvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignZm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbnV0ZUludGVydmFsKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignbWludXRlSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ21pbnV0ZUludGVydmFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5hbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCduYW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCduYW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWRvbmx5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCdyZWFkb25seScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGltZVBpY2tlcigncmVhZG9ubHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignc2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCdzZWxlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGltZVBpY2tlcigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdW5mb2N1c2FibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ3VuZm9jdXNhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCd1bmZvY3VzYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiB1bmRlZmluZWQpOiB1bmRlZmluZWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRpbWVQaWNrZXIoJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUaW1lUGlja2VyKCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aWV3KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcigndmlldycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGltZVBpY2tlcigndmlldycpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFRpbWVQaWNrZXJDb21wb25lbnQgZnVuY3Rpb25zXG4gICBzZXRIb3Vycyhob3VyczogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignc2V0SG91cnMnLCBob3Vycyk7XG4gICB9XG5cbiAgIHNldE1pbnV0ZXMobWludXRlczogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGltZVBpY2tlcignc2V0TWludXRlcycsIG1pbnV0ZXMpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFRpbWVQaWNrZXJDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4VGltZVBpY2tlckNvbXBvbmVudFxuIl19