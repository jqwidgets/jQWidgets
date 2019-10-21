import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxSlider', { static: false }) jqxSlider: jqxSliderComponent;

    ngAfterViewInit() {
        this.carPreview().init();
    }

    private currentSlide: number = 0;

    carPreview() {
        let config = {
            timeOut: null,
            currentSlide: this.currentSlide,
            navigationContainer: document.getElementById('navigationContainer'),
            nextButton: document.getElementById('nextButton'),
            previousButton: document.getElementById('previousButton'),
            playButton: document.getElementById('playButton'),
            stopButton: document.getElementById('stopButton'),
            slider: this.jqxSlider,
            contentContainerSelector: 'slider-demo-content-',
            locked: false
        };

        let attachEventListeners = () => {
            // Animates the fading of the "navigationContainer"
            config.navigationContainer.addEventListener('mouseenter', () => {
                let loop = 0;
                let interval = setInterval(() => {
                    config.navigationContainer.style.opacity = String(loop);
                    loop += 0.2;
                    if (loop >= 1) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = String(1);
                    }
                }, 50);
            });

            config.navigationContainer.addEventListener('mouseleave', () => {
                // "navigationContainer" fade out animation
                let loop = 1;
                let interval = setInterval(() => {
                    config.navigationContainer.style.opacity = String(loop);
                    loop -= 0.2;
                    if (loop <= 0.3) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = String(0.1);
                    }
                }, 50);
            });

            config.nextButton.addEventListener('click', () => {
                config.slider.incrementValue();
            });

            config.previousButton.addEventListener('click', () => {
                config.slider.decrementValue();
            });

            config.playButton.addEventListener('click', () => {
                if (!config.timeOut) {
                    startSlideShow();
                }
            });

            config.stopButton.addEventListener('click', () => {
                stopSlideShow();
            });
        };

        let startupConfig = () => {
            config.navigationContainer.style.opacity = String(0.1);
        };

        let startSlideShow = () => {
            config.timeOut = setTimeout(() => {
                startSlideShow();
                let slider = config.slider,
                    currentValue = slider.value(),
                    max = slider.max(),
                    min = slider.min();
                if (currentValue < max) {
                    slider.incrementValue();
                } else {
                    slider.setValue(min);
                }
            }, 2000);
        };

        let stopSlideShow = () => {
            clearTimeout(config.timeOut);
            config.timeOut = null;
        };

        let loadSlide = (id) => {
            showSlide(id);
        };

        let hideCurrentSlide = () => {
            document.getElementById(config.contentContainerSelector + config.currentSlide).style.display = 'none';
        };

        let showSlide = (id) => {
            hideCurrentSlide();
            document.getElementById(config.contentContainerSelector + id).style.display = 'block';
            document.getElementById(config.contentContainerSelector + id).style.opacity = String(0.5);
            setTimeout(() => {
                document.getElementById(config.contentContainerSelector + id).style.opacity = String(1);
            }, 100);
            this.currentSlide = id;
        };

        return {
            init: () => {
                attachEventListeners();
                startupConfig();
            },
            loadSlide
        };
    }

    change(event: any): void {
        this.carPreview().loadSlide(event.args.value);
    }; 
}