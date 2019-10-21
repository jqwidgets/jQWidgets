import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistmenu';
import { __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxListMenuComponent = class jqxListMenuComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alwaysShowNavigationArrows', 'animationType', 'animationDuration', 'autoSeparators', 'backLabel', 'disabled', 'enableScrolling', 'filterCallback', 'height', 'headerAnimationDuration', 'placeHolder', 'readOnly', 'rtl', 'roundedCorners', 'showNavigationArrows', 'showFilter', 'showHeader', 'showBackButton', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxListMenu('setOptions', options);
    }
    // jqxListMenuComponent properties
    alwaysShowNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('alwaysShowNavigationArrows');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationType', arg);
        }
        else {
            return this.host.jqxListMenu('animationType');
        }
    }
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('animationDuration');
        }
    }
    autoSeparators(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('autoSeparators', arg);
        }
        else {
            return this.host.jqxListMenu('autoSeparators');
        }
    }
    backLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('backLabel', arg);
        }
        else {
            return this.host.jqxListMenu('backLabel');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('disabled', arg);
        }
        else {
            return this.host.jqxListMenu('disabled');
        }
    }
    enableScrolling(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('enableScrolling', arg);
        }
        else {
            return this.host.jqxListMenu('enableScrolling');
        }
    }
    filterCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('filterCallback', arg);
        }
        else {
            return this.host.jqxListMenu('filterCallback');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('height', arg);
        }
        else {
            return this.host.jqxListMenu('height');
        }
    }
    headerAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('headerAnimationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('headerAnimationDuration');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('placeHolder', arg);
        }
        else {
            return this.host.jqxListMenu('placeHolder');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('readOnly', arg);
        }
        else {
            return this.host.jqxListMenu('readOnly');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('rtl', arg);
        }
        else {
            return this.host.jqxListMenu('rtl');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('roundedCorners', arg);
        }
        else {
            return this.host.jqxListMenu('roundedCorners');
        }
    }
    showNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('showNavigationArrows');
        }
    }
    showFilter(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showFilter', arg);
        }
        else {
            return this.host.jqxListMenu('showFilter');
        }
    }
    showHeader(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showHeader', arg);
        }
        else {
            return this.host.jqxListMenu('showHeader');
        }
    }
    showBackButton(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showBackButton', arg);
        }
        else {
            return this.host.jqxListMenu('showBackButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('theme', arg);
        }
        else {
            return this.host.jqxListMenu('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('width', arg);
        }
        else {
            return this.host.jqxListMenu('width');
        }
    }
    // jqxListMenuComponent functions
    back() {
        this.host.jqxListMenu('back');
    }
    changePage(Item) {
        this.host.jqxListMenu('changePage', Item);
    }
    destroy() {
        this.host.jqxListMenu('destroy');
    }
    __wireEvents__() {
    }
}; //jqxListMenuComponent
jqxListMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('alwaysShowNavigationArrows'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrAlwaysShowNavigationArrows", void 0);
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxListMenuComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('autoSeparators'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrAutoSeparators", void 0);
__decorate([
    Input('backLabel'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrBackLabel", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableScrolling'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrEnableScrolling", void 0);
__decorate([
    Input('filterCallback'),
    __metadata("design:type", Function)
], jqxListMenuComponent.prototype, "attrFilterCallback", void 0);
__decorate([
    Input('headerAnimationDuration'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrHeaderAnimationDuration", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('readOnly'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrReadOnly", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('roundedCorners'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    Input('showNavigationArrows'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrShowNavigationArrows", void 0);
__decorate([
    Input('showFilter'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrShowFilter", void 0);
__decorate([
    Input('showHeader'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrShowHeader", void 0);
__decorate([
    Input('showBackButton'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "attrShowBackButton", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxListMenuComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxListMenuComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxListMenuComponent.prototype, "autoCreate", void 0);
jqxListMenuComponent = __decorate([
    Component({
        selector: 'jqxListMenu',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxListMenuComponent);

let jqxListMenuModule = class jqxListMenuModule {
};
jqxListMenuModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxListMenuComponent],
        exports: [jqxListMenuComponent]
    })
], jqxListMenuModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxListMenuComponent, jqxListMenuModule };
