import { Component, ViewChild } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('listbox', { static: false }) myListBox: jqxListBoxComponent;

    shirtFileNames: string[] =
    [
        '2-sided-dodgers-bankrupt-t-shirt-ash', 'black-retro-rock-band-guitar-controller',
        'bright-green-gettin-lucky-in-kentucky', 'brown-loading-bar-computer-geek', 'cool-story-bro',
        'fear-the-beard', 'honey-badger-don-t-care', 'misfits-sf-giants-white', 'scott-pilgrim-red-rock-band'
    ];

    shirts: string[] =
    [
        '2 sided dodgers<br>bankrupt<br>t shirt ash', 'black retro<br>rock band<br>guitar controller',
        'bright green<br>gettin lucky<br>in kentucky', 'brown loading<br>bar computer geek', 'cool story bro',
        'fear the beard', 'honey badger<br>don t care', 'misfits sf<br>giants white', 'scott pilgrim<br>red rock<br>band'
    ];

    renderer = (index: number, label: string, value: string): any => {
        let datarecord = this.shirtFileNames[index];
        let imgurl = './../../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
        let img = '<img height="70" width="70" src="' + imgurl + '"/>';
        let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';

        return table;
    }

    click(event: any): void {
        this.myListBox.clearFilter();
    };
}