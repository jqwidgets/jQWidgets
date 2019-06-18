import { __spread, __decorate, __metadata } from 'tslib';
import { Input, Output, Component, ElementRef, EventEmitter, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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
    __decorate([
        Input('autoSwitchToMinutes'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrAutoSwitchToMinutes", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('footer'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrFooter", void 0);
    __decorate([
        Input('footerTemplate'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrFooterTemplate", void 0);
    __decorate([
        Input('format'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrFormat", void 0);
    __decorate([
        Input('minuteInterval'),
        __metadata("design:type", Number)
    ], jqxTimePickerComponent.prototype, "attrMinuteInterval", void 0);
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrName", void 0);
    __decorate([
        Input('readonly'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrReadonly", void 0);
    __decorate([
        Input('selection'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrSelection", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('unfocusable'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "attrUnfocusable", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Date)
    ], jqxTimePickerComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('view'),
        __metadata("design:type", String)
    ], jqxTimePickerComponent.prototype, "attrView", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxTimePickerComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTimePickerComponent.prototype, "onChange", void 0);
    jqxTimePickerComponent = __decorate([
        Component({
            selector: 'jqxTimePicker',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxTimePickerComponent);
    return jqxTimePickerComponent;
}()); //jqxTimePickerComponent

var jqxTimePickerModule = /** @class */ (function () {
    function jqxTimePickerModule() {
    }
    jqxTimePickerModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxTimePickerComponent],
            exports: [jqxTimePickerComponent]
        })
    ], jqxTimePickerModule);
    return jqxTimePickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTimePickerComponent, jqxTimePickerModule };
//# sourceMappingURL=jqwidgets-ng-jqxtimepicker.js.map
