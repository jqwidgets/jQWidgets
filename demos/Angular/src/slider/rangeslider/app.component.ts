import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('priceSlider', { static: false }) priceSlider: jqxSliderComponent;
    @ViewChild('displaySlider', { static: false }) displaySlider: jqxSliderComponent;
    @ViewChild('hddSlider', { static: false }) hddSlider: jqxSliderComponent;
    @ViewChild('ramSlider', { static: false }) ramSlider: jqxSliderComponent;
    @ViewChild('resetButton', { static: false }) resetButton: jqxButtonComponent;

    ngAfterViewInit() {
        this.shop().init(this.priceSlider, this.displaySlider, this.ramSlider, this.hddSlider, this.resetButton);
    }
    
    laptops = {
        'l-1': { ram: 2, price: 510, display: 15.6, hdd: 320, model: 'Toshiba Satellite C660', marked: false },
        'l-2': { ram: 6, price: 594, display: 15.6, hdd: 500, model: 'TOSHIBA Satellite L675', marked: false },
        'l-3': { ram: 4, price: 918, display: 14.5, hdd: 500, model: 'HP Envy 14-1190', marked: false },
        'l-4': { ram: 4, price: 1165, display: 15.6, hdd: 500, model: 'Dell Vostro 3500', marked: false },
        'l-5': { ram: 12, price: 1306, display: 15.6, hdd: 750, model: 'ASUS N73JQ-A2', marked: false },
        'l-6': { ram: 8, price: 3732, display: 17, hdd: 1280, model: 'Alienware M17X', marked: false },
        'l-7': { ram: 4, price: 800, display: 17, hdd: 500, model: 'Toshiba Satellite P300-21E', marked: false },
        'l-8': { ram: 12, price: 3595, display: 18.4, hdd: 1024, model: 'ASUS NX90JQ', visible: false },
        'l-9': { ram: 2, price: 631, display: 14.1, hdd: 500, model: 'Packard Bell EasyNote', marked: false },
        'l-10': { ram: 2, price: 550, display: 13.3, hdd: 320, model: 'Lenovo ThinkPad Edge', marked: false },
        'l-11': { ram: 3, price: 529, display: 15.6, hdd: 320, model: 'Fujitsu Lifebook A531', marked: false },
        'l-12': { ram: 8, price: 2401, display: 16.5, hdd: 500, model: 'SONY VAIO F', marked: false }
    };

    collectFilters = {};

    shop() {
        let drawTable = () => {
            let catalogue = '<table class="demo-laptop-catalog-table"><tr>', counter = 0;
            for (let laptop in this.laptops) {
                if (this.laptops.hasOwnProperty(laptop)) {
                    counter += 1;
                    if (counter % 3 === 1 && counter !== 1) {
                        catalogue += '</tr><tr>';
                    }
                    catalogue += '<td class="demo-laptop-cell jqx-rc-all" id="' + laptop + '">' +
                        '<div class="demo-laptop-cell-header"><div class="demo-laptop-cell-header-content">' + this.laptops[laptop].model + '</div></div>' +
                        '<div class="demo-laptop-cell-content"><img src="../images/' + laptop + '.jpg" alt="' + this.laptops[laptop].model + '" title="' + this.laptops[laptop].model + '" /></div>' +
                        '<div class="demo-laptop-cell-price jqx-rc-all">$ ' + this.laptops[laptop].price + '</div>' +
                        '</td>';
                }
            }
            catalogue += '</tr></table>';
            document.getElementById('catalogue').innerHTML = catalogue;
        };

        let resetFilters = () => {
            this.priceSlider.setValue([this.priceSlider.min(), this.priceSlider.max()]);
            this.displaySlider.setValue([this.displaySlider.min(), this.displaySlider.max()]);
            this.hddSlider.setValue([this.hddSlider.min(), this.hddSlider.max()]);
            this.ramSlider.setValue([this.ramSlider.min(), this.ramSlider.max()]);
        };

        let handleSlide = (option, value) => {
            filterItems(updateFilter(option, value));
            setLabelValue(this[option + 'Slider'], option, value);
        };

        let setLabelValue = (slider, option, value) => {
            let label;
            switch (option) {
                case 'price':
                    label = 'USD';
                    break;
                case 'hdd':
                    label = 'GB';
                    break;
                case 'display':
                    label = 'inches';
                    break;
                case 'ram':
                    label = 'GB';
                    break;
            }
            document.getElementById(option + 'Max').innerHTML = value.rangeEnd + ' ' + label;
            document.getElementById(option + 'Min').innerHTML = value.rangeStart + ' ' + label;
        };

        let filterItems = (filter) => {
            let failed = false;
            for (let laptop in this.laptops) {
                for (let property in filter) {
                    if (filter[property].max < this.laptops[laptop][property] || filter[property].min > this.laptops[laptop][property]) {
                        failed = true;
                    }
                }
                if (failed) {
                    if (!this.laptops[laptop].marked) {
                        markItem(laptop);
                    }
                } else {
                    if (this.laptops[laptop].marked) {
                        unmarkItem(laptop);
                    }
                }
                failed = false;
            }
        };
        
        let unmarkItem = (laptop: string) => {
            document.getElementById(laptop).style.opacity = '1';
            this.laptops[laptop].marked = false;
        };

        let markItem = (laptop: string) => {
            document.getElementById(laptop).style.opacity = '0.5';
            this.laptops[laptop].marked = true;
        };

        let buildFilter = () => {
            let priceValue = this.priceSlider.value(),
                displayValue = this.displaySlider.value(),
                ramValue = this.ramSlider.value(),
                hddValue = this.hddSlider.value();

            this.collectFilters = {
                price: {
                    max: priceValue.rangeEnd,
                    min: priceValue.rangeStart
                },
                display: {
                    max: displayValue.rangeEnd,
                    min: displayValue.rangeStart
                },
                hdd: {
                    max: hddValue.rangeEnd,
                    min: hddValue.rangeStart
                },
                ram: {
                    max: ramValue.rangeEnd,
                    min: ramValue.rangeStart
                }
            };
        };

        let updateFilter = (option, value) => {
            this.collectFilters[option].min = value.rangeStart;
            this.collectFilters[option].max = value.rangeEnd;
            return this.collectFilters;
        };
        
        return {
            init: (priceSlider, displaySlider, ramSlider, hddSlider, resetButton) => {
                drawTable();
                buildFilter();
                setLabelValue(priceSlider, 'price', priceSlider.value());
                setLabelValue(displaySlider, 'display', displaySlider.value());
                setLabelValue(ramSlider, 'ram', ramSlider.value());
                setLabelValue(hddSlider, 'hdd', hddSlider.value());
            },
            handleSlide,
            resetFilters
        };
    }

    priceSliderChange(event: any): void {
        this.shop().handleSlide('price', event.args.value);
    };

    displaySliderChange(event: any): void {
        this.shop().handleSlide('display', event.args.value);
    };

    ramSliderChange(event: any): void {
        this.shop().handleSlide('ram', event.args.value);
    };

    hddSliderChange(event: any): void {
        this.shop().handleSlide('hdd', event.args.value);
    };

    clickResetButton(): void {
        this.shop().resetFilters();
    }
}