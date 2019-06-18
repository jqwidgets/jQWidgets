import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxpasswordinput from '../../jqwidgets-scripts/jqwidgets/jqxpasswordinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
};
let jqxPasswordInputComponent = class jqxPasswordInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxPasswordInputComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    get ngValue() {
        if (this.widgetObject) {
            const value = this.host.val();
            return value;
        }
        return '';
    }
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxPasswordInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxPasswordInput('setOptions', options);
    }
    // jqxPasswordInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('disabled', arg);
        }
        else {
            return this.host.jqxPasswordInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('height', arg);
        }
        else {
            return this.host.jqxPasswordInput('height');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('localization', arg);
        }
        else {
            return this.host.jqxPasswordInput('localization');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('maxLength', arg);
        }
        else {
            return this.host.jqxPasswordInput('maxLength');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('placeHolder', arg);
        }
        else {
            return this.host.jqxPasswordInput('placeHolder');
        }
    }
    passwordStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('passwordStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('passwordStrength');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('rtl', arg);
        }
        else {
            return this.host.jqxPasswordInput('rtl');
        }
    }
    strengthColors(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthColors', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthColors');
        }
    }
    showStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrength');
        }
    }
    showStrengthPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrengthPosition', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrengthPosition');
        }
    }
    strengthTypeRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthTypeRenderer', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthTypeRenderer');
        }
    }
    showPasswordIcon(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showPasswordIcon', arg);
        }
        else {
            return this.host.jqxPasswordInput('showPasswordIcon');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('theme', arg);
        }
        else {
            return this.host.jqxPasswordInput('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('width', arg);
        }
        else {
            return this.host.jqxPasswordInput('width');
        }
    }
    // jqxPasswordInputComponent functions
    render() {
        this.host.jqxPasswordInput('render');
    }
    refresh() {
        this.host.jqxPasswordInput('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxPasswordInput('val', value);
        }
        else {
            return this.host.jqxPasswordInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxPasswordInputComponent
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('localization'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrLocalization", void 0);
tslib_1.__decorate([
    Input('maxLength'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrMaxLength", void 0);
tslib_1.__decorate([
    Input('placeHolder'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrPlaceHolder", void 0);
tslib_1.__decorate([
    Input('passwordStrength'),
    tslib_1.__metadata("design:type", Function)
], jqxPasswordInputComponent.prototype, "attrPasswordStrength", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('strengthColors'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrStrengthColors", void 0);
tslib_1.__decorate([
    Input('showStrength'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrShowStrength", void 0);
tslib_1.__decorate([
    Input('showStrengthPosition'),
    tslib_1.__metadata("design:type", String)
], jqxPasswordInputComponent.prototype, "attrShowStrengthPosition", void 0);
tslib_1.__decorate([
    Input('strengthTypeRenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxPasswordInputComponent.prototype, "attrStrengthTypeRenderer", void 0);
tslib_1.__decorate([
    Input('showPasswordIcon'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrShowPasswordIcon", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxPasswordInputComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "onChange", void 0);
jqxPasswordInputComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxPasswordInput',
        template: '<input type="password" [(ngModel)]="ngValue">',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxPasswordInputComponent);
export { jqxPasswordInputComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwYXNzd29yZGlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHBhc3N3b3JkaW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHBhc3N3b3JkaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7O0FBR3ZCLE1BQU0sbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVNELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBMkJuQyxZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsa0JBQWtCLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxzQkFBc0IsRUFBQyxzQkFBc0IsRUFBQyxrQkFBa0IsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFLeE4sc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFxQixJQUFJLENBQUM7UUErUWxELG1DQUFtQztRQUN6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTdRckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFB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QyxNQUFNO0tBQ2xELENBQUM7NkNBNkIrQixVQUFVO0dBM0I5Qix5QkFBeUIsQ0ErU3JDO1NBL1NZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeFBhc3N3b3JkSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4UGFzc3dvcmRJbnB1dCcsXG4gICAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgWyhuZ01vZGVsKV09XCJuZ1ZhbHVlXCI+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhQYXNzd29yZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyBcbntcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGpxd2lkZ2V0cy5QYXNzd29yZElucHV0TG9jYWxpemF0aW9uO1xuICAgQElucHV0KCdtYXhMZW5ndGgnKSBhdHRyTWF4TGVuZ3RoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3BsYWNlSG9sZGVyJykgYXR0clBsYWNlSG9sZGVyOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3Bhc3N3b3JkU3RyZW5ndGgnKSBhdHRyUGFzc3dvcmRTdHJlbmd0aDogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsncGFzc3dvcmQnXSwgY2hhcmFjdGVyczpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ2NoYXJhY3RlcnMnXSwgZGVmYXVsdFN0cmVuZ3RoOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3RyZW5ndGhDb2xvcnMnKSBhdHRyU3RyZW5ndGhDb2xvcnM6IGpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhDb2xvcnM7XG4gICBASW5wdXQoJ3Nob3dTdHJlbmd0aCcpIGF0dHJTaG93U3RyZW5ndGg6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dTdHJlbmd0aFBvc2l0aW9uJykgYXR0clNob3dTdHJlbmd0aFBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3N0cmVuZ3RoVHlwZVJlbmRlcmVyJykgYXR0clN0cmVuZ3RoVHlwZVJlbmRlcmVyOiAocGFzc3dvcmQ6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsncGFzc3dvcmQnXSwgY2hhcmFjdGVyczpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoVHlwZVJlbmRlcmVyWydjaGFyYWN0ZXJzJ10sIGRlZmF1bHRTdHJlbmd0aDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoVHlwZVJlbmRlcmVyWydkZWZhdWx0U3RyZW5ndGgnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdzaG93UGFzc3dvcmRJY29uJykgYXR0clNob3dQYXNzd29yZEljb246IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnZGlzYWJsZWQnLCdoZWlnaHQnLCdsb2NhbGl6YXRpb24nLCdtYXhMZW5ndGgnLCdwbGFjZUhvbGRlcicsJ3Bhc3N3b3JkU3RyZW5ndGgnLCdydGwnLCdzdHJlbmd0aENvbG9ycycsJ3Nob3dTdHJlbmd0aCcsJ3Nob3dTdHJlbmd0aFBvc2l0aW9uJywnc3RyZW5ndGhUeXBlUmVuZGVyZXInLCdzaG93UGFzc3dvcmRJY29uJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhQYXNzd29yZElucHV0O1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhQYXNzd29yZElucHV0Jywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIGdldCBuZ1ZhbHVlKCk6IGFueSB7XG4gICAgICAgaWYgKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ob3N0LnZhbCgpO1xuICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgfVxuICAgICAgIHJldHVybiAnJztcbiAgIH1cblxuICAgc2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgIGlmICh0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgIH1cbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFBhc3N3b3JkSW5wdXRDb21wb25lbnQgcHJvcGVydGllc1xuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzoganF3aWRnZXRzLlBhc3N3b3JkSW5wdXRMb2NhbGl6YXRpb24pOiBqcXdpZGdldHMuUGFzc3dvcmRJbnB1dExvY2FsaXphdGlvbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4TGVuZ3RoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnbWF4TGVuZ3RoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdtYXhMZW5ndGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGxhY2VIb2xkZXIoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdwbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgncGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFzc3dvcmRTdHJlbmd0aChhcmc/OiAocGFzc3dvcmQ6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRQYXNzd29yZFN0cmVuZ3RoWydwYXNzd29yZCddLCBjaGFyYWN0ZXJzOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsnY2hhcmFjdGVycyddLCBkZWZhdWx0U3RyZW5ndGg6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRQYXNzd29yZFN0cmVuZ3RoWydkZWZhdWx0U3RyZW5ndGgnXSkgPT4gc3RyaW5nKTogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsncGFzc3dvcmQnXSwgY2hhcmFjdGVyczpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ2NoYXJhY3RlcnMnXSwgZGVmYXVsdFN0cmVuZ3RoOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgncGFzc3dvcmRTdHJlbmd0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgncGFzc3dvcmRTdHJlbmd0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0cmVuZ3RoQ29sb3JzKGFyZz86IGpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhDb2xvcnMpOiBqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoQ29sb3JzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzdHJlbmd0aENvbG9ycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc3RyZW5ndGhDb2xvcnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1N0cmVuZ3RoKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93U3RyZW5ndGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Nob3dTdHJlbmd0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93U3RyZW5ndGhQb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Nob3dTdHJlbmd0aFBvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93U3RyZW5ndGhQb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHJlbmd0aFR5cGVSZW5kZXJlcihhcmc/OiAocGFzc3dvcmQ6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsncGFzc3dvcmQnXSwgY2hhcmFjdGVyczpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoVHlwZVJlbmRlcmVyWydjaGFyYWN0ZXJzJ10sIGRlZmF1bHRTdHJlbmd0aDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoVHlwZVJlbmRlcmVyWydkZWZhdWx0U3RyZW5ndGgnXSkgPT4gc3RyaW5nKTogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhUeXBlUmVuZGVyZXJbJ3Bhc3N3b3JkJ10sIGNoYXJhY3RlcnM6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnY2hhcmFjdGVycyddLCBkZWZhdWx0U3RyZW5ndGg6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc3RyZW5ndGhUeXBlUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3N0cmVuZ3RoVHlwZVJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dQYXNzd29yZEljb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Nob3dQYXNzd29yZEljb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Nob3dQYXNzd29yZEljb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhQYXNzd29yZElucHV0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhQYXNzd29yZElucHV0Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFBhc3N3b3JkSW5wdXRDb21wb25lbnRcbiJdfQ==