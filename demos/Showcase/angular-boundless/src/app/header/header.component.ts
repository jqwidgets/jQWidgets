import { Component, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})

export class HeaderComponent {
    @ViewChildren(MatMenuTrigger) trigger: QueryList<MatMenuTrigger>;

    onResize(): void {
        this.trigger.map(item => {
            item.closeMenu()
        });
    }

    onMenuOpened(currentMenu: number): void {
        this.trigger.map((item, index) => {
            if (index !== currentMenu)
                item.closeMenu();      
        });
    }
}
