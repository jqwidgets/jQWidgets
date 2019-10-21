import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdockpanel';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxDockPanelComponent = /** @class */ (function () {
    function jqxDockPanelComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'lastchildfill', 'width'];
        // jqxDockPanelComponent events
        this.onLayout = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxDockPanelComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDockPanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockPanel(this.properties[i])) {
                        this.host.jqxDockPanel(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDockPanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDockPanelComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDockPanelComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxDockPanelComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDockPanelComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockPanel', options);
    };
    jqxDockPanelComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDockPanelComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDockPanelComponent.prototype.setOptions = function (options) {
        this.host.jqxDockPanel('setOptions', options);
    };
    // jqxDockPanelComponent properties
    jqxDockPanelComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('disabled', arg);
        }
        else {
            return this.host.jqxDockPanel('disabled');
        }
    };
    jqxDockPanelComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('height', arg);
        }
        else {
            return this.host.jqxDockPanel('height');
        }
    };
    jqxDockPanelComponent.prototype.lastchildfill = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('lastchildfill', arg);
        }
        else {
            return this.host.jqxDockPanel('lastchildfill');
        }
    };
    jqxDockPanelComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('width', arg);
        }
        else {
            return this.host.jqxDockPanel('width');
        }
    };
    // jqxDockPanelComponent functions
    jqxDockPanelComponent.prototype.refresh = function () {
        this.host.jqxDockPanel('refresh');
    };
    jqxDockPanelComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('layout', function (eventData) { _this.onLayout.emit(eventData); });
    };
    jqxDockPanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxDockPanelComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('lastchildfill'),
        __metadata("design:type", Boolean)
    ], jqxDockPanelComponent.prototype, "attrLastchildfill", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxDockPanelComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxDockPanelComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxDockPanelComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDockPanelComponent.prototype, "onLayout", void 0);
    jqxDockPanelComponent = __decorate([
        Component({
            selector: 'jqxDockPanel',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxDockPanelComponent);
    return jqxDockPanelComponent;
}()); //jqxDockPanelComponent

var jqxDockPanelModule = /** @class */ (function () {
    function jqxDockPanelModule() {
    }
    jqxDockPanelModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxDockPanelComponent],
            exports: [jqxDockPanelComponent]
        })
    ], jqxDockPanelModule);
    return jqxDockPanelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDockPanelComponent, jqxDockPanelModule };
