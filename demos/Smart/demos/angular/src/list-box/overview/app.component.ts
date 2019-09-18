import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    items: string[] = [
        "item 1",
        "item 2",
        "item 3",
        "item 4",
        "item 5"
    ]
}
