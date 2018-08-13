import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        this.myComboBox1.add(this.myComboBox1).on('select', (event: any): void => {
            if (event.args) {
                let country = event.args.item.label;
                let source;
                if (country === 'Japan') {
                    source = this.JapaneseCities;
                } else if (country === 'UK') {
                    source = this.UKCities;
                } else {
                    source = this.USACities;
                }
                this.myComboBox2.jqxComboBox({ source: source });
                this.myComboBox2Min.jqxComboBox({ source: source });
            }
        });
    }

    countries: string[] = ['Japan', 'UK', 'USA'];

    JapaneseCities: string[] = ['Kobe', 'Kyoto', 'Tokyo'];

    UKCities: string[] = ['Brighton', 'Glasgow', 'London'];

    USACities: string[] = ['Boston', 'Los Angeles', 'Minneapolis'];

    myComboBox1;
    myComboBox1Min;
    myComboBox2;
    myComboBox2Min;

    tools: string = 'combobox | combobox';

    initTools = (type: string, index: number, tool: any, menuToolIninitialization: any): any => {
        switch (index) {
            case 0:
                tool.jqxComboBox({
                    width: 150,
                    source: this.countries,
                    selectedIndex: 0,
                    promptText: 'Select a country...'
                });
                if (menuToolIninitialization === false) {
                    this.myComboBox1 = tool;
                } else {
                    this.myComboBox1Min = tool;
                }
                break;
            case 1:
                tool.jqxComboBox({
                    width: 150,
                    source: this.JapaneseCities,
                    selectedIndex: 0,
                    promptText: 'Select a city...'
                });
                if (menuToolIninitialization === false) {
                    this.myComboBox2 = tool;
                } else {
                    this.myComboBox2Min = tool;
                }
                break;

        }
    }
}