import { Injectable } from '@angular/core';
import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter';


@Injectable()
export class SharedService {
    mainSplitter: jqxSplitterComponent;
}