import { Component, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { ItemsEnumeration } from '../../items.enum';
import { DataService } from '../../services/data.service';
import { BarGaugeTarget } from './bargaugeComponent/bargauge.component';

import { InfoService } from '../../services/info.service';
import { HttpModule } from '@angular/http';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
    @ViewChild('referenceBargauge') bargaugetarget: BarGaugeTarget;
    @ViewChild('listContainer') listContainer: ElementRef;
    
    infoSubscription: Subscription;

    constructor(private _dataServices: DataService, private InfoService: InfoService) {

        this.infoSubscription = this.InfoService.getItemsData().subscribe(info => {
            this.addInformation(info.items);
        });
    }

    enumItems = new ItemsEnumeration();

    ngOnDestroy() {
        this.infoSubscription.unsubscribe();
    }

    private addInformation(information) {
        let innerUL = this.listContainer.nativeElement.firstElementChild;
        let length = information.length;
        for (var i = 0; i < length; i++) {
            let li = document.createElement("li");
            let info = information[i];
            li.innerHTML =
                '<div style="width: 235px; margin: auto;">' +
                '<div style="width: 20px; height: 10px; background-color: ' + info.color + '; display: inline-block; margin-top: 0.4em; margin-right: 1em;"> </div>' +
                '<h4 style="display: inline-block;">% of ' + info.item.toString().toLowerCase() + '</h4>' +
                '</div>';
            innerUL.appendChild(li);
        }
    };
}
