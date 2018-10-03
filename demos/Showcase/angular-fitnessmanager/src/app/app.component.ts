import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{

    @ViewChild('myMenu') myMenu: jqxMenuComponent;

    constructor(private router: Router) {}

    private activePage: string = 'Dashboard';
    private breadcrumb: string = this.activePage;
    private menuIsMinimized = false;
    private bigWindow = true;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if ((document.documentElement.clientWidth < 890) && (!this.menuIsMinimized)) {
            this.myMenu.minimize();
            this.menuIsMinimized = true;
        } else if ((document.documentElement.clientWidth >= 890) && (this.menuIsMinimized)) {
            this.myMenu.restore();
            this.menuIsMinimized = false;
        }

        if (document.documentElement.clientWidth < 1200) {
            this.bigWindow = false;
        } else {
            this.bigWindow = true;
        }
    }
    ngAfterViewInit() {
        if (document.documentElement.clientWidth < 890) {
            this.myMenu.minimize();
            this.menuIsMinimized = true;
        }

        if (document.documentElement.clientWidth < 1200) {
            setTimeout(() => {
                this.bigWindow = false;
            });
        } 
    }

    private changePage = (event) => {        

        this.activePage = event.args.innerText;

        if (this.activePage === 'Schedules') {
            return;
        }
 
        switch (this.activePage) {
            case 'Dashboard':
                {
                    this.breadcrumb = 'Dashboard';
                    this.router.navigateByUrl('/dashboard');
                }
                break;
            case 'Rooms':
                {
                    this.breadcrumb = 'Rooms schedules';
                    this.router.navigateByUrl('/rooms-schedules');
                }
                break;
            case 'Instructors':
                {
                    this.breadcrumb = 'Instructors schedules';
                    this.router.navigateByUrl('/instructors-schedules');
                }
                break;
            case 'Fitness instructors':
                {
                    this.breadcrumb = 'Fitness instructors';
                    this.router.navigateByUrl('/fitness-instructors');
                }
                break;
            case 'Workload chart':
                {
                    this.breadcrumb = 'Workload chart of fitness instructors';
                    this.router.navigateByUrl('/workload-chart');
                }
                break;
            case 'Administrative tasks':
                {
                    this.breadcrumb = 'Administrative tasks';
                    this.router.navigateByUrl('/administrative-tasks');
                }
                break;
            case 'Quick notes':
                {
                    this.breadcrumb = 'Quick notes';
                    this.router.navigateByUrl('/quick-notes');
                }
                break;
        }
    }
}
