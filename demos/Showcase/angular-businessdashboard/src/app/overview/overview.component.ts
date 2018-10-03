import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    activeOverview: string;
    overview: string;
    overviewBottomRightWidth: string = '79%';
    activeBarWidth: number = 1093;
    pausedBarWidth: number = 1093;
    endedBarWidth: number = 1093;

    constructor(private sharedService: SharedService) {
        this.overview = 'chartdataclicks';
        this.activeOverview = 'overview1';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setHeight();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.setHeight();
    }

    setActive = (liName) => {
        this.activeOverview = liName;
    }
    isActive = (liName) => {
        return this.activeOverview === liName;
    }

    changeActiveOverview = (overview) => {
        this.overview = overview;
    }

    setHeight = () => {
        setTimeout(() => {
            let overviewTabHeight = window.screen.height;
            if (overviewTabHeight < 979) {
                overviewTabHeight = 979;
            }
            let documentWidth = window.innerWidth;
            let progressBarContainerWidth = documentWidth - 664;
            let progressBarsWidth = documentWidth - 811;

            if (this.sharedService.mainSplitter.orientation() === 'vertical') {
                this.sharedService.mainSplitter.height(overviewTabHeight);
                this.overviewBottomRightWidth = progressBarContainerWidth + 55 + 'px';
                this.activeBarWidth = progressBarsWidth;
                this.pausedBarWidth = progressBarsWidth;
                this.endedBarWidth = progressBarsWidth;
            } else {
                this.sharedService.mainSplitter.height(overviewTabHeight + 112);
                this.sharedService.mainSplitter.panels([{ size: 112 }, { size: overviewTabHeight }]);
                progressBarContainerWidth = documentWidth - 414;
                progressBarsWidth = documentWidth - 561;
                this.overviewBottomRightWidth = progressBarContainerWidth + 'px';
                this.activeBarWidth = progressBarsWidth;
                this.pausedBarWidth = progressBarsWidth;
                this.endedBarWidth = progressBarsWidth;
                if (documentWidth < 736) {
                    this.sharedService.mainSplitter.height(overviewTabHeight + 360);
                    this.sharedService.mainSplitter.panels([{ size: 113 }, { size: overviewTabHeight }]);
                    this.activeBarWidth = progressBarsWidth + 340;
                    this.pausedBarWidth = progressBarsWidth + 340;
                    this.endedBarWidth = progressBarsWidth + 340;
                }
            }
        });
    }
}
