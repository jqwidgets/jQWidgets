import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        let progressBar = <any>document.getElementById("progressBar");
        let circularProgressBar = <any>document.getElementById("progressBarCircular");
        let progressBarCircularControl = <any>document.getElementById("progressBarCircularControl");

        document
            .getElementById("progressUp")
            .addEventListener("click", function () {
                progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
                circularProgressBar.value = Math.min(
                    circularProgressBar.max,
                    circularProgressBar.value + 1
                );
            });

        document
            .getElementById("progressDown")
            .addEventListener("click", function () {
                progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
                circularProgressBar.value = Math.max(
                    circularProgressBar.min,
                    circularProgressBar.value - 1
                );
            });

        document
            .getElementById("incrementButton")
            .addEventListener("click", function () {
                progressBarCircularControl.value = Math.min(progressBarCircularControl.max, progressBarCircularControl.value + 1);
            });

        document
            .getElementById("decrementButton")
            .addEventListener("click", function () {
                progressBarCircularControl.value = Math.max(progressBarCircularControl.min, progressBarCircularControl.value - 1);
            });
    }
}
