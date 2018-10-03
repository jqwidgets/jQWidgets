import { Component, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterViewInit {
	@ViewChild('headerwrapper') headerwrapper: ElementRef;
    @ViewChild('navigationwrapper') navigationwrapper: ElementRef;

    subscription: Subscription;
		
    constructor(public http: Http, private activatedRoute: ActivatedRoute, private router: Router) {
		console.log('App Start!');
    }

	private paddingSize = '55px 150px';
	protected viewsStyleSettings = {
		padding: this.paddingSize, overflow: 'hidden', width: '100%', height: '85%'
	}
		
	ngAfterViewInit() {		
		this.headerwrapper.nativeElement.addEventListener("click", (event) => {
			let content = event.target.textContent;
			if(content) {
				alert(content);
			} else {
				alert('Logging Out');
			}
		});
    }

    classColor: string = 'red';

    changeStyle(event: any): void {
        this.classColor = event.type == 'mouseover' ? 'yellow' : 'red';
    }
}
