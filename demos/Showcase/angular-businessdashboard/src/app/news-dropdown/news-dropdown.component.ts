import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-news-dropdown',
    templateUrl: './news-dropdown.component.html',
    styleUrls: ['./news-dropdown.component.css']
})
export class NewsDropdownComponent implements OnInit {

    @Output() dropDownChangeEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
        
    }

    source: any = 
        [
            'ALL POSTS',
            'NEWS',
            'FORUM'
        ]

    change(event) {

        this.dropDownChangeEvent.emit(event.args.index);
    }
}
