import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SharedService } from '../../services/shared-service';

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.css']
})
export class PerformanceComponent {

    @ViewChild('bottomContainer') bottomContainer: ElementRef
    @ViewChild('topContainer') topContainer: ElementRef

    dataToDisplay: string;
    dataLabel: string;
    change: number;
    changePercentage: number;
    price: number;
    min: number;
    max: number;
    volume: number;

    constructor(private sharedService: SharedService) {
        this.dataToDisplay = 'chartperformanceaapl';
        this.dataLabel = 'AAPL';
        this.change = 16.21;
        this.changePercentage = 1.47;
        this.price = 591.45;
        this.max = 599.00;
        this.min = 584.35;
        this.volume = 159.3;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setHeight();
    }

    ngAfterViewInit() {
        this.setHeight();
    }
    
    changeDataToDisplay(dataToDisplay, label) {
        this.dataLabel = label;
        if (label === 'AAPL') {
            this.change = 16.21;
            this.changePercentage = 1.47;
            this.price = 591.45;
            this.max = 599.00;
            this.min = 584.35;
            this.volume = 159.3;
        } else {
            this.change = 5.21;
            this.changePercentage = 3.29;
            this.price = 313.66;
            this.max = 317.03;
            this.min = 294.35;
            this.volume = 221.6;
        }
        this.dataToDisplay = dataToDisplay;
    }



    setHeight() {
        let bottomContainerHeight = this.bottomContainer.nativeElement.offsetHeight;
        let topContainerHeight = this.topContainer.nativeElement.offsetHeight;
        let performanceTabHeight = bottomContainerHeight + topContainerHeight + 62;
        if (performanceTabHeight < window.screen.height) {
            performanceTabHeight = window.screen.height;
        }

        if (this.sharedService.mainSplitter.orientation() === 'vertical') {
            this.sharedService.mainSplitter.height(performanceTabHeight);
        } else {
            this.sharedService.mainSplitter.height(performanceTabHeight + 113);
            this.sharedService.mainSplitter.panels([{ size: 113 }, { size: performanceTabHeight }]);
        }
    }
}
