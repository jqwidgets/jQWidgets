import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    enterKeyBehavior: string = 'newLine';
    selectAllOnFocus: boolean = true;
    autoFocus: boolean = true;
    placeholder: string = 'smart Text Area';
}
