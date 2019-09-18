import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        const sliders = ['horizontalSlider', 'verticalSlider', 'invertedHorizontalSlider', 'invertedVerticalSlider'];

        for (let i = 0; i < sliders.length; i++) {
            const slider = document.getElementById(sliders[i]);

            slider.addEventListener('change', function (event) {
                const value = (<any>event).detail.value;
                document.getElementById(this.id + 'Value').innerHTML = parseFloat(value).toFixed(2);
            });
        }
    }
}
