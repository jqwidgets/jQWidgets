import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    localization: any = {
        showPasswordString: "צג סיסמא",
        hidePasswordString: "סתר סיסמא",
        passwordStrengthString: "חוזק סיסמא",
        tooShort: "קצר מדי",
        weak: "חלש", fair: "הוגן",
        good: "טוב", strong: "חזק"
    };
}