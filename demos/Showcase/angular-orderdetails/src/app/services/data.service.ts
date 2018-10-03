import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsEnumeration } from '../items.enum';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    private dataURL = './assets/sampledata/data.txt';
    private dataPhpURL = './assets/sampledata/index.php';

    constructor(public http: Http) { }

    getItemData(item: string) {
        let items = new ItemsEnumeration();
        return this.http.get(this.dataURL)
            .map((response) => {
                let result = response.json();
                
                switch (item) {
                    case items.piechart:
                        return result[items.piechart];

                    case items.popularproductschart:
                        return result[items.popularproductschart];

                    case items.revenueschart:
                        return result[items.revenueschart];

                    case items.targetbargauge:
                        return result[items.targetbargauge];

                    case items.taskskanbanvalues:
                        return result[items.taskskanbanvalues];

                    case items.ordersgrid:
                        return result[items.ordersgrid];

                    case items.orders:
                        return result[items.orders];

                    case items.productsgrid:
                        return result[items.productsgrid];

                    case items.customersgrid:
                        return result[items.customersgrid];

                    case items.staffgrid:
                        return result[items.staffgrid];

                    default:
                        console.log("Error - There is no item set to search data.", "data.service.ts");
                }
            })
            .toPromise();
    }

    getPhpItemData(item: string) {
        return this.http.get(this.dataPhpURL)
            .map(response => {
                let phpResult = response.json();
            })
            .toPromise();
    }
}