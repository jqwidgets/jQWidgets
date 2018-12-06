import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets/jqxinput';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () { };
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxInputComponent; }),
    multi: true
};
var jqxInputComponent = /** @class */ (function () {
    function jqxInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'dropDownWidth', 'displayMember', 'height', 'items', 'minLength', 'maxLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'rtl', 'searchMode', 'source', 'theme', 'valueMember', 'width', 'value'];
        this.initialLoad = true;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                        this.host.jqxInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxInputComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxInputComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxInputComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxInputComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxInputComponent.prototype, "ngValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.widgetObject) {
                /** @type {?} */
                var value = this.host.val();
                if (typeof value === 'object')
                    return value.label;
                return value;
            }
            return '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    jqxInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.widgetObject && value) {
            if (this.initialLoad) {
                setTimeout(function (_) { return _this.host.jqxInput('val', value); });
                this.initialLoad = false;
            }
            this.host.jqxInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxInput('setOptions', options);
    };
    // jqxInputComponent properties
    // jqxInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.disabled = 
    // jqxInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('disabled', arg);
        }
        else {
            return this.host.jqxInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.dropDownWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxInput('dropDownWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.displayMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('displayMember', arg);
        }
        else {
            return this.host.jqxInput('displayMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('height', arg);
        }
        else {
            return this.host.jqxInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.items = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('items', arg);
        }
        else {
            return this.host.jqxInput('items');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.minLength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('minLength', arg);
        }
        else {
            return this.host.jqxInput('minLength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.maxLength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('maxLength', arg);
        }
        else {
            return this.host.jqxInput('maxLength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.opened = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('opened', arg);
        }
        else {
            return this.host.jqxInput('opened');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('placeHolder', arg);
        }
        else {
            return this.host.jqxInput('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.popupZIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxInput('popupZIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.query = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('query', arg);
        }
        else {
            return this.host.jqxInput('query');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.renderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('renderer', arg);
        }
        else {
            return this.host.jqxInput('renderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('rtl', arg);
        }
        else {
            return this.host.jqxInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.searchMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('searchMode', arg);
        }
        else {
            return this.host.jqxInput('searchMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('source', arg);
        }
        else {
            return this.host.jqxInput('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('theme', arg);
        }
        else {
            return this.host.jqxInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.valueMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('valueMember', arg);
        }
        else {
            return this.host.jqxInput('valueMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('width', arg);
        }
        else {
            return this.host.jqxInput('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxInputComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxInput('value', arg);
        }
        else {
            return this.host.jqxInput('value');
        }
    };
    // jqxInputComponent functions
    // jqxInputComponent functions
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.destroy = 
    // jqxInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxInput('destroy');
    };
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxInput('focus');
    };
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxInput('selectAll');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxInput('val', value);
        }
        else {
            return this.host.jqxInput('val');
        }
    };
    /**
     * @return {?}
     */
    jqxInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    jqxInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxInput',
                    template: '<input type="text" [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxInputComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
        attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
        attrItems: [{ type: Input, args: ['items',] }],
        attrMinLength: [{ type: Input, args: ['minLength',] }],
        attrMaxLength: [{ type: Input, args: ['maxLength',] }],
        attrOpened: [{ type: Input, args: ['opened',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
        attrQuery: [{ type: Input, args: ['query',] }],
        attrRenderer: [{ type: Input, args: ['renderer',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSearchMode: [{ type: Input, args: ['searchMode',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValueMember: [{ type: Input, args: ['valueMember',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }],
        onSelect: [{ type: Output }]
    };
    return jqxInputComponent;
}()); //jqxInputComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxInputModule = /** @class */ (function () {
    function jqxInputModule() {
    }
    jqxInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxInputComponent],
                    exports: [jqxInputComponent]
                },] }
    ];
    return jqxInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxInputComponent, jqxInputModule };

