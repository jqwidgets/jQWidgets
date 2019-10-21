import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data: any[] = [{
        label: 'Chrome',
        value: 44.06,
        color: '#37c837'
    },
    {
        label: 'Internet Explorer',
        value: 22.08,
        color: '#0066ff'
    },
    {
        label: 'Firefox',
        value: 18.17,
        color: '#ed7b0f'
    },
    {
        label: 'Others',
        value: 9.07,
        color: '#818181'
    },
    {
        label: 'Opera',
        value: 3.38,
        color: '#9a0900'
    },
    {
        label: 'Safari',
        value: 3.24,
        color: '#4dbff1'
    }];

    renderCallbacks: any =
    {
        '*': (element, data) => {
            element.css({
                color: '#ffffff'
            });
            element.html('<span style="font-size: 11px;" class="jqx-treemap-label">' + data.label + ', ' + data.value + '%</span>');
            return true;
        }
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    colorRanges: any[] = [
        { min: 1254040000, max: 1454040000, color: '#de290b' },
        { min: 1054040000, max: 1254039999, color: '#de440c' },
        { min: 300000000, max: 1054040000, color: '#ea7707' },
        { min: 210000000, max: 460000000, color: '#ee8a06' },
        { min: 190000000, max: 209999999, color: '#f19505' },
        { min: 180000000, max: 189999999, color: '#f6a903' },
        { min: 160000000, max: 179999999, color: '#f8b203' },
        { min: 140000000, max: 159999999, color: '#fabb02' },
        { min: 100000000, max: 139999999, color: '#fbbf01' },
        { min: 90000000, max: 99999999, color: '#fbcd01' },
        { min: 10000000, max: 89999999, color: '#fbde33' }
    ];
}