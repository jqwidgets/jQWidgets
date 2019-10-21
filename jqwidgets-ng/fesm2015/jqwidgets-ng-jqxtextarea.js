import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxtextarea';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxTextAreaComponent),
    multi: true
};
let jqxTextAreaComponent = class jqxTextAreaComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'displayMember', 'dropDownWidth', 'height', 'items', 'maxLength', 'minLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'roundedCorners', 'rtl', 'scrollBarSize', 'searchMode', 'source', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxTextAreaComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            if (value !== null && value !== undefined)
                this.host.jqxTextArea('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxTextArea('setOptions', options);
    }
    // jqxTextAreaComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('disabled', arg);
        }
        else {
            return this.host.jqxTextArea('disabled');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('displayMember', arg);
        }
        else {
            return this.host.jqxTextArea('displayMember');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('dropDownWidth', arg);
        }
        else {
            return this.host.jqxTextArea('dropDownWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('height', arg);
        }
        else {
            return this.host.jqxTextArea('height');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('items', arg);
        }
        else {
            return this.host.jqxTextArea('items');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('maxLength', arg);
        }
        else {
            return this.host.jqxTextArea('maxLength');
        }
    }
    minLength(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('minLength', arg);
        }
        else {
            return this.host.jqxTextArea('minLength');
        }
    }
    opened(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('opened', arg);
        }
        else {
            return this.host.jqxTextArea('opened');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('placeHolder', arg);
        }
        else {
            return this.host.jqxTextArea('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('popupZIndex', arg);
        }
        else {
            return this.host.jqxTextArea('popupZIndex');
        }
    }
    query(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('query', arg);
        }
        else {
            return this.host.jqxTextArea('query');
        }
    }
    renderer(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('renderer', arg);
        }
        else {
            return this.host.jqxTextArea('renderer');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('roundedCorners', arg);
        }
        else {
            return this.host.jqxTextArea('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('rtl', arg);
        }
        else {
            return this.host.jqxTextArea('rtl');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTextArea('scrollBarSize');
        }
    }
    searchMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('searchMode', arg);
        }
        else {
            return this.host.jqxTextArea('searchMode');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('source', arg);
        }
        else {
            return this.host.jqxTextArea('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('theme', arg);
        }
        else {
            return this.host.jqxTextArea('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('valueMember', arg);
        }
        else {
            return this.host.jqxTextArea('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('width', arg);
        }
        else {
            return this.host.jqxTextArea('width');
        }
    }
    // jqxTextAreaComponent functions
    destroy() {
        this.host.jqxTextArea('destroy');
    }
    focus() {
        this.host.jqxTextArea('focus');
    }
    refresh() {
        this.host.jqxTextArea('refresh');
    }
    render() {
        this.host.jqxTextArea('render');
    }
    selectAll() {
        this.host.jqxTextArea('selectAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTextArea('val', value);
        }
        else {
            return this.host.jqxTextArea('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
    }
}; //jqxTextAreaComponent
jqxTextAreaComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('displayMember'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrDisplayMember", void 0);
__decorate([
    Input('dropDownWidth'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrDropDownWidth", void 0);
__decorate([
    Input('items'),
    __metadata("design:type", Number)
], jqxTextAreaComponent.prototype, "attrItems", void 0);
__decorate([
    Input('maxLength'),
    __metadata("design:type", Number)
], jqxTextAreaComponent.prototype, "attrMaxLength", void 0);
__decorate([
    Input('minLength'),
    __metadata("design:type", Number)
], jqxTextAreaComponent.prototype, "attrMinLength", void 0);
__decorate([
    Input('opened'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "attrOpened", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('popupZIndex'),
    __metadata("design:type", Number)
], jqxTextAreaComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    Input('query'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrQuery", void 0);
__decorate([
    Input('renderer'),
    __metadata("design:type", Function)
], jqxTextAreaComponent.prototype, "attrRenderer", void 0);
__decorate([
    Input('roundedCorners'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('scrollBarSize'),
    __metadata("design:type", Number)
], jqxTextAreaComponent.prototype, "attrScrollBarSize", void 0);
__decorate([
    Input('searchMode'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrSearchMode", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrSource", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('valueMember'),
    __metadata("design:type", String)
], jqxTextAreaComponent.prototype, "attrValueMember", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onSelect", void 0);
jqxTextAreaComponent = __decorate([
    Component({
        selector: 'jqxTextArea',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxTextAreaComponent);

let jqxTextAreaModule = class jqxTextAreaModule {
};
jqxTextAreaModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxTextAreaComponent],
        exports: [jqxTextAreaComponent]
    })
], jqxTextAreaModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTextAreaComponent, jqxTextAreaModule, ɵ0 };
