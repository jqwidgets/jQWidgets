import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    shirtFileNames: string[] =
    [
        "2-sided-dodgers-bankrupt-t-shirt-ash", "black-retro-rock-band-guitar-controller",
        "bright-green-gettin-lucky-in-kentucky", "brown-loading-bar-computer-geek", "cool-story-bro",
        "fear-the-beard", "honey-badger-don-t-care", "misfits-sf-giants-white", "scott-pilgrim-red-rock-band"
    ];

    shirts: string[] =
    [
        "2 sided dodgers\nbankrupt\nt shirt ash", "black retro\nrock band\nguitar controller",
        "bright green\ngettin lucky\nin kentucky", "brown loading\nbar computer geek", "cool story bro",
        "fear the beard", "honey badger\ndon t care", "misfits sf\ngiants white", "scott pilgrim\nred rock\nband"
    ];

    renderer = (index: number, label: string, value: any): string => {
        let datarecord = this.shirtFileNames[index];
        let imgurl = './../../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
        let img = '<img height="70" width="70" src="' + imgurl + '"/>';
        let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
        return table;
    };

    selectionRenderer = (element: any, index: number, label: string, value: any): string => {
        let text = label.replace(/\n/g, " ");
        return '<span style="left: 4px; top: 6px; position: relative;">' + text + '</span>';
    };
}

