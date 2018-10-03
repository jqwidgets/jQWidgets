import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class InfoService {
    private information = new Subject<any>();

    public setItemsData(info: any) {
        this.information.next({ items: info });
    }

    public clearItemsData() {
        this.information.next();
    }
    
    public getItemsData(item?: string): Observable<any> {
        return this.information.asObservable();
    }
}