import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('treeA', { static: false }) treeA: jqxTreeComponent;
    @ViewChild('treeB', { static: false }) treeB: jqxTreeComponent;
    @ViewChild('dragStartLog', { static: false }) dragStartLog: ElementRef;
    @ViewChild('dragEndLog', { static: false }) dragEndLog: ElementRef;
    @ViewChild('textarea', { static: false }) textarea: ElementRef;

    onDragStart = (event) => {
        this.dragStartLog.nativeElement.innerText = 'Drag Start: ' + event.args.label;
        this.dragEndLog.nativeElement.innerText = '';
    };

    onDragEnd = (event) => {
        this.dragEndLog.nativeElement.innerText = 'Drag End';
        if (event.args.label) {
            let ev = event.args.originalEvent;
            let x = ev.pageX;
            let y = ev.pageY;
            if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                let touch = event.args.originalEvent.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            }
            let rect = this.textarea.nativeElement.getBoundingClientRect();
            let width = this.textarea.nativeElement.clientWidth;
            let height = this.textarea.nativeElement.clientHeight;
            let right = rect.left + width;
            let bottom = rect.top + height;
            if (x >= rect.left && x <= right) {
                if (y >= rect.top && y <= bottom) {
                    this.textarea.nativeElement.value = event.args.label;
                }
            }
        }
    };

    dragStartTreeA(event: any): void {
        this.onDragStart(event);
    };

    dragEndTreeA(event: any): void {
        this.onDragEnd(event);
    };

    dragStartTreeB(event: any): void {
        this.onDragStart(event);
    };

    dragEndTreeB(event: any): void {
        this.onDragEnd(event);
    };

    dragStart(item): boolean {
        if (item.label == "Community")
            return false;
    };

    dragEnd(item, dropItem, args, dropPosition, tree): boolean {
        if (item.label == "Forum")
            return false;
    };
}