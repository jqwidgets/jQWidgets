import { Component, ViewChild, ElementRef} from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTextArea', { static: false }) myTextArea: jqxTextAreaComponent;
    @ViewChild('dragStartLog', { static: false }) dragStartLog: ElementRef;
    @ViewChild('dragEndLog', { static: false }) dragEndLog: ElementRef;

    onDragStart(event: any): void {
        this.dragStartLog.nativeElement.innerHTML = 'Drag Start: ' + event.args.label;
        this.dragEndLog.nativeElement.innerHTML = '';
    }

    onDragEnd(event: any): void {
        this.dragEndLog.nativeElement.innerHTML = 'Drag End';
        if (event.args.label) {
            let ev = event.args.originalEvent;
            let x = ev.pageX;
            let y = ev.pageY;
            
            if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                let touch = event.args.originalEvent.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            }

            let textareaElement = this.myTextArea.elementRef.nativeElement.firstElementChild;
            let width = textareaElement.offsetWidth;
            let height = textareaElement.offsetHeight;
            let right = parseInt(textareaElement.offsetLeft) + width;
            let bottom = parseInt(textareaElement.offsetTop) + height;
            
            if (x >= parseInt(textareaElement.offsetLeft) && x <= right) {
                if (y >= parseInt(textareaElement.offsetTop) && y <= bottom) {
                    this.myTextArea.val(event.args.label);
                }
            }
        }
    }

    source1: string[] =
    [
        'Affogato',
        'Americano',
        'Bicerin',
        'Breve',
        'Café Bombón',
        'Café au lait',
        'Caffé Corretto',
        'Café Crema',
        'Caffé Latte',
        'Caffé macchiato',
        'Café mélange',
        'Coffee milk',
        'Cafe mocha'
    ];

    source2: string[] =
    [
        'Cappuccino',
        'Carajillo',
        'Cortado',
        'Cuban espresso',
        'Espresso',
        'Eiskaffee',
        'The Flat White',
        'Frappuccino',
        'Galao',
        'Greek frappé coffee',
        'Iced Coffee﻿',
        'Indian filter coffee',
        'Instant coffee',
        'Irish coffee',
        'Liqueur coffee'
    ];

    // Callbacks
    dragStart = (item: any): boolean => {
        if (item.label == 'Breve') {
            return false;
        }
    };

    dragEnd = (dragItem: any, dropItem: any): boolean => {
        if (dragItem.label == 'Frappuccino')
            return false;
    };

    renderer1 = (index: number, label: string, value: string): string => {
        if (label == 'Breve') {
            return '<span style="color: red;">' + label + '</span>';
        }

        return label;
    };

    renderer2 = (index: number, label: string, value: string): string => {
        if (label == 'Frappuccino') {
            return '<span style="color: red">' + label + '</span>';
        }

        return label;
    };

    // Events
    dragStartA(event: any): void {
        this.onDragStart(event);
    };

    dragStartB(event: any): void {
        this.onDragStart(event);
    };

    dragEndA(event: any): void {
        this.onDragEnd(event);
    };

    dragEndB(event: any): void {
        this.onDragEnd(event);
    };
}