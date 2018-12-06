/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxColorPickerComponent implements OnChanges {
    attrColor: string;
    attrColorMode: any;
    attrDisabled: boolean;
    attrShowTransparent: boolean;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxColorPicker;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    color(arg?: string): any;
    colorMode(arg?: string): any;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    showTransparent(arg?: boolean): any;
    width(arg?: string | number): any;
    getColor(): any;
    setColor(color: undefined): void;
    onColorchange: EventEmitter<{}>;
    __wireEvents__(): void;
}
