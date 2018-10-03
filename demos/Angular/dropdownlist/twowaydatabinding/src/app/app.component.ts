import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    value: string;

    source: string[] =
    [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto"
    ];  
}
