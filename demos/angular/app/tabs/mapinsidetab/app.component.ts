import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxTabsComponent } from '../../../jqwidgets-ts/angular_jqxtabs';

declare let google: any;

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;
    @ViewChild('map') map: ElementRef;
    
    initialize = () => {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        let map = new google.maps.Map(this.map.nativeElement, {
            zoom: 17,
            center: { lat: 29.979234, lng: 31.134202 },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        directionsDisplay.setMap(map);
    }

    initTabContent = (tab) => {
        if (tab === 0) {
            google.maps.event.addDomListener(window, 'load', this.initialize);
        }
    };
}