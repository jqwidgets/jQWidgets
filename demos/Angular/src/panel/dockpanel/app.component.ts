import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxDockPanelComponent } from 'jqwidgets-ng/jqxdockpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxDockPanel', { static: false }) DockPanel: jqxDockPanelComponent;
    @ViewChild('jqxDockPanel2', { static: false }) DockPanel2: jqxDockPanelComponent;
    @ViewChild('first', { static: false }) firstElement: ElementRef;
    @ViewChild('second', { static: false }) secondElement: ElementRef;
    @ViewChild('third', { static: false }) thirdElement: ElementRef;
    @ViewChild('fourth', { static: false }) fourthElement: ElementRef;

    ngAfterViewInit() {
        this.DockPanel.elementRef.nativeElement.style.color = 'white';
        this.DockPanel2.elementRef.nativeElement.style.color = 'white';
    }

    layoutOnClick = (event) => {
        let layoutsLength = 4;
        let firstElement = this.firstElement.nativeElement;
        let secondElement = this.secondElement.nativeElement;
        let thirdElement = this.thirdElement.nativeElement;
        let fourthElement = this.fourthElement.nativeElement;

        let position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);

        if (position < 55) {
            firstElement.setAttribute('dock', 'bottom');
            firstElement.style.height = '105px';
            secondElement.setAttribute('dock', 'left');
            secondElement.style.width = '100px';
            thirdElement.setAttribute('dock', 'left');
            thirdElement.style.width = '100px';
            fourthElement.setAttribute('dock', 'left');
            fourthElement.style.width = '100px';
        } else
            if (position < 115) {
                for (let i = 0; i < layoutsLength; i++) {
                    this.DockPanel.elementRef.nativeElement.firstChild.firstChild.children[i].style.width = '100px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'right');
                thirdElement.setAttribute('dock', 'bottom');
                thirdElement.style.height = '140px';
                fourthElement.setAttribute('dock', 'top');
                fourthElement.style.height = '70px';
            } else if (position < 175) {
                for (let i = 0; i < layoutsLength; i++) {
                    this.DockPanel.elementRef.nativeElement.firstChild.firstChild.children[i].style.width = '150px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'left');
                thirdElement.setAttribute('dock', 'left');
                fourthElement.setAttribute('dock', 'left');

            } else if (position < 235) {
                for (let i = 0; i < layoutsLength; i++) {
                    this.DockPanel.elementRef.nativeElement.firstChild.firstChild.children[i].style.height = '70px';
                }
                firstElement.setAttribute('dock', 'top');
                secondElement.setAttribute('dock', 'top');
                thirdElement.setAttribute('dock', 'top');
                fourthElement.setAttribute('dock', 'top');
            }
            else {
                for (let i = 0; i < layoutsLength; i++) {
                    this.DockPanel.elementRef.nativeElement.firstChild.firstChild.children[i].style.width = '100px';
                }
                firstElement.setAttribute('dock', 'left');
                secondElement.setAttribute('dock', 'left');
                thirdElement.setAttribute('dock', 'left');
                fourthElement.setAttribute('dock', 'left');
            }
    }

    clickOnLayout(event: any): void {
        this.layoutOnClick(event);
        this.DockPanel.refresh();
    };
}