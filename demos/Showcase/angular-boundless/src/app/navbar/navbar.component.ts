import { Component, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})

export class NavBarComponent {
    @ViewChildren(MatMenuTrigger) trigger: QueryList<MatMenuTrigger>;

    onResize(): void {
        this.trigger.map(item => {
                item.closeMenu()
        });
    }

    onMenuOpened(currentMenu: number): void {
        this.trigger.map((item, index) => {
            if (index !== currentMenu) 
                item.closeMenu()      
        });
    }

    refreshPage(): void {
        window.location.reload();
    }

    goToComponentPage(component: string): void {
        window.location.href = `http://www.jqwidgets.com/angular/angular-${component}/index.htm`;
    }

    goToPage(page: string): void {
        window.location.href = page;
    }
}
