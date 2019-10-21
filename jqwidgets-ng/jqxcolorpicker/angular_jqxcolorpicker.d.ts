/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxColorPickerComponent implements OnChanges {
    attrColor: string;
    attrColorMode: string;
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
    color(arg?: string): string;
    colorMode(arg?: string): string;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    showTransparent(arg?: boolean): boolean;
    width(arg?: string | number): string | number;
    getColor(): any;
    setColor(color: undefined): void;
    onColorchange: EventEmitter<any>;
    __wireEvents__(): void;
}
