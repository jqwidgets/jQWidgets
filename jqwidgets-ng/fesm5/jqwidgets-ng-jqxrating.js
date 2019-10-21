import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxrating';
import { __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxRatingComponent; }),
    multi: true
};
var jqxRatingComponent = /** @class */ (function () {
    function jqxRatingComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['count', 'disabled', 'height', 'itemHeight', 'itemWidth', 'precision', 'singleVote', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRatingComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxRatingComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxRatingComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRating(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                        this.host.jqxRating(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRatingComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRatingComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRatingComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxRatingComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxRatingComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
    };
    jqxRatingComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRatingComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRatingComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxRatingComponent.prototype.setOptions = function (options) {
        this.host.jqxRating('setOptions', options);
    };
    // jqxRatingComponent properties
    jqxRatingComponent.prototype.count = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('count', arg);
        }
        else {
            return this.host.jqxRating('count');
        }
    };
    jqxRatingComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('disabled', arg);
        }
        else {
            return this.host.jqxRating('disabled');
        }
    };
    jqxRatingComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('height', arg);
        }
        else {
            return this.host.jqxRating('height');
        }
    };
    jqxRatingComponent.prototype.itemHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemHeight', arg);
        }
        else {
            return this.host.jqxRating('itemHeight');
        }
    };
    jqxRatingComponent.prototype.itemWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemWidth', arg);
        }
        else {
            return this.host.jqxRating('itemWidth');
        }
    };
    jqxRatingComponent.prototype.precision = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('precision', arg);
        }
        else {
            return this.host.jqxRating('precision');
        }
    };
    jqxRatingComponent.prototype.singleVote = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('singleVote', arg);
        }
        else {
            return this.host.jqxRating('singleVote');
        }
    };
    jqxRatingComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('value', arg);
        }
        else {
            return this.host.jqxRating('value');
        }
    };
    jqxRatingComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('width', arg);
        }
        else {
            return this.host.jqxRating('width');
        }
    };
    // jqxRatingComponent functions
    jqxRatingComponent.prototype.disable = function () {
        this.host.jqxRating('disable');
    };
    jqxRatingComponent.prototype.enable = function () {
        this.host.jqxRating('enable');
    };
    jqxRatingComponent.prototype.getValue = function () {
        return this.host.jqxRating('getValue');
    };
    jqxRatingComponent.prototype.setValue = function (value) {
        this.host.jqxRating('setValue', value);
    };
    jqxRatingComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxRating('val', value);
        }
        else {
            return this.host.jqxRating('val');
        }
    };
    ;
    jqxRatingComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    jqxRatingComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('count'),
        __metadata("design:type", Number)
    ], jqxRatingComponent.prototype, "attrCount", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxRatingComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('itemHeight'),
        __metadata("design:type", Number)
    ], jqxRatingComponent.prototype, "attrItemHeight", void 0);
    __decorate([
        Input('itemWidth'),
        __metadata("design:type", Number)
    ], jqxRatingComponent.prototype, "attrItemWidth", void 0);
    __decorate([
        Input('precision'),
        __metadata("design:type", Number)
    ], jqxRatingComponent.prototype, "attrPrecision", void 0);
    __decorate([
        Input('singleVote'),
        __metadata("design:type", Boolean)
    ], jqxRatingComponent.prototype, "attrSingleVote", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Number)
    ], jqxRatingComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxRatingComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxRatingComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxRatingComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRatingComponent.prototype, "onChange", void 0);
    jqxRatingComponent = __decorate([
        Component({
            selector: 'jqxRating',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxRatingComponent);
    return jqxRatingComponent;
}()); //jqxRatingComponent

var jqxRatingModule = /** @class */ (function () {
    function jqxRatingModule() {
    }
    jqxRatingModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxRatingComponent],
            exports: [jqxRatingComponent]
        })
    ], jqxRatingModule);
    return jqxRatingModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRatingComponent, jqxRatingModule, ɵ0 };
