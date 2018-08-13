import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    products: any[] =
    [
        {
            label: 'Retro Rock T-shirt',
            pic: 'black-retro-rock-band-guitar-controller.png',
            price: 15
        },
        {
            label: 'Lucky T-shirt',
            pic: 'bright-green-gettin-lucky-in-kentucky.png',
            price: 18
        },
        {
            label: 'Loading T-shirt',
            pic: 'brown-loading-bar-computer-geek.png',
            price: 25
        },
        {
            label: 'Cool Story T-shirt',
            pic: 'cool-story-bro.png',
            price: 20
        },
        {
            label: 'The beard T-shirt',
            pic: 'fear-the-beard.png',
            price: 17
        },
        {
            label: 'Don\'t care T-shirt',
            pic: 'honey-badger-don-t-care.png',
            price: 19
        },
        {
            label: 'Guitar T-shirt',
            pic: 'scott-pilgrim-red-rock-band.png',
            price: 24
        },
        {
            label: 'Dodgers T-shirt',
            pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
            price: 21
        },
        {
            label: 'Misfits T-shirt',
            pic: 'misfits-sf-giants-white.png',
            price: 21
        }
    ];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        datatype: 'array',
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'pic', type: 'string' },
            { name: 'price', type: 'number' }
        ],
        localdata: this.products
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        {
            text: 'Image', datafield: 'pic', width: 115,
            cellsrenderer: (row: number, column: any, value: any): string => {
                return '<img src="../images/t-shirts/' + value + '"/>';
            }
        },
        { text: 'Title', datafield: 'label', width: 250 },
        { text: 'Price', cellsformat: 'c2', datafield: 'price' }
    ];

    scrollfeedback = (row: any): string => {
        return '<table style="height: 150px;"><tr><td><img src="../images/t-shirts/' + row.pic + '"/></td></tr><tr><td>' + row.label + '</td></tr></table>';
    };
}