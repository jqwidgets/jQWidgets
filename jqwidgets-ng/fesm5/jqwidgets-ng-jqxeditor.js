import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxeditor';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxcolorpicker';
import { __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxEditorComponent; }),
    multi: true
};
var jqxEditorComponent = /** @class */ (function () {
    function jqxEditorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxEditorComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxEditorComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxEditorComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxEditorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxEditorComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxEditorComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxEditorComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxEditorComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    jqxEditorComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxEditorComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxEditorComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxEditorComponent.prototype.setOptions = function (options) {
        this.host.jqxEditor('setOptions', options);
    };
    // jqxEditorComponent properties
    jqxEditorComponent.prototype.createCommand = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('createCommand', arg);
        }
        else {
            return this.host.jqxEditor('createCommand');
        }
    };
    jqxEditorComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('disabled', arg);
        }
        else {
            return this.host.jqxEditor('disabled');
        }
    };
    jqxEditorComponent.prototype.editable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('editable', arg);
        }
        else {
            return this.host.jqxEditor('editable');
        }
    };
    jqxEditorComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('height', arg);
        }
        else {
            return this.host.jqxEditor('height');
        }
    };
    jqxEditorComponent.prototype.lineBreak = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('lineBreak', arg);
        }
        else {
            return this.host.jqxEditor('lineBreak');
        }
    };
    jqxEditorComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('localization', arg);
        }
        else {
            return this.host.jqxEditor('localization');
        }
    };
    jqxEditorComponent.prototype.pasteMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('pasteMode', arg);
        }
        else {
            return this.host.jqxEditor('pasteMode');
        }
    };
    jqxEditorComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('rtl', arg);
        }
        else {
            return this.host.jqxEditor('rtl');
        }
    };
    jqxEditorComponent.prototype.stylesheets = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('stylesheets', arg);
        }
        else {
            return this.host.jqxEditor('stylesheets');
        }
    };
    jqxEditorComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('theme', arg);
        }
        else {
            return this.host.jqxEditor('theme');
        }
    };
    jqxEditorComponent.prototype.toolbarPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('toolbarPosition', arg);
        }
        else {
            return this.host.jqxEditor('toolbarPosition');
        }
    };
    jqxEditorComponent.prototype.tools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('tools', arg);
        }
        else {
            return this.host.jqxEditor('tools');
        }
    };
    jqxEditorComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('width', arg);
        }
        else {
            return this.host.jqxEditor('width');
        }
    };
    // jqxEditorComponent functions
    jqxEditorComponent.prototype.destroy = function () {
        this.host.jqxEditor('destroy');
    };
    jqxEditorComponent.prototype.focus = function () {
        this.host.jqxEditor('focus');
    };
    jqxEditorComponent.prototype.print = function () {
        this.host.jqxEditor('print');
    };
    jqxEditorComponent.prototype.setMode = function (mode) {
        this.host.jqxEditor('setMode', mode);
    };
    jqxEditorComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxEditor('val', value);
        }
        else {
            return this.host.jqxEditor('val');
        }
    };
    ;
    jqxEditorComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    jqxEditorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('createCommand'),
        __metadata("design:type", Function)
    ], jqxEditorComponent.prototype, "attrCreateCommand", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxEditorComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('editable'),
        __metadata("design:type", Boolean)
    ], jqxEditorComponent.prototype, "attrEditable", void 0);
    __decorate([
        Input('lineBreak'),
        __metadata("design:type", String)
    ], jqxEditorComponent.prototype, "attrLineBreak", void 0);
    __decorate([
        Input('localization'),
        __metadata("design:type", Object)
    ], jqxEditorComponent.prototype, "attrLocalization", void 0);
    __decorate([
        Input('pasteMode'),
        __metadata("design:type", String)
    ], jqxEditorComponent.prototype, "attrPasteMode", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxEditorComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('stylesheets'),
        __metadata("design:type", Array)
    ], jqxEditorComponent.prototype, "attrStylesheets", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxEditorComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('toolbarPosition'),
        __metadata("design:type", String)
    ], jqxEditorComponent.prototype, "attrToolbarPosition", void 0);
    __decorate([
        Input('tools'),
        __metadata("design:type", String)
    ], jqxEditorComponent.prototype, "attrTools", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxEditorComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxEditorComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxEditorComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxEditorComponent.prototype, "onChange", void 0);
    jqxEditorComponent = __decorate([
        Component({
            selector: 'jqxEditor',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxEditorComponent);
    return jqxEditorComponent;
}()); //jqxEditorComponent

var jqxEditorModule = /** @class */ (function () {
    function jqxEditorModule() {
    }
    jqxEditorModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxEditorComponent],
            exports: [jqxEditorComponent]
        })
    ], jqxEditorModule);
    return jqxEditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxEditorComponent, jqxEditorModule, ɵ0 };
