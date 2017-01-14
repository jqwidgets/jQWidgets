 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTreeComponent } from '../../../../../jqwidgets-ts/angular_jqxtree';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';
import { jqxResponsivePanelComponent } from '../../../../../jqwidgets-ts/angular_jqxresponsivepanel';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: '../app/responsivePanel/defaultfunctionality/app.component.htm',
    styleUrls: ['../app/responsivePanel/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('panelReference') myPanel: jqxPanelComponent;
    @ViewChild('responsivePanelReference') RespPanel: jqxResponsivePanelComponent;

    ngAfterViewInit(): void 
    {
        (<HTMLElement>document.getElementsByTagName("angularTree")[0].firstElementChild).style.visibility = "visible";
        (<HTMLElement>document.getElementsByTagName("angularTree")[0].firstElementChild).style.border = "none";
    }

    onOpen(): void 
    {
        this.RespPanel.width(150);
        this.myPanel.width(340);

        this.RespPanel.refresh();
    }

    onClickSmall(): void 
    {
        let ownerPanel = (<HTMLElement>document.getElementById("ownerPanel"));
        ownerPanel.style.width = '500px';

        (<HTMLElement>document.getElementsByTagName("angularResponsivePanel")[0].firstElementChild).style.display = "none";

        this.RespPanel.width(0)
        this.myPanel.width(490);

        this.RespPanel.refresh();
    }

    onClickBig(): void 
    {
        let ownerPanel = (<HTMLElement>document.getElementById("ownerPanel"));
        ownerPanel.style.width = '800px';

        (<HTMLElement>document.getElementsByTagName("angularResponsivePanel")[0].firstElementChild).style.display = "block";

        this.RespPanel.width(220);
        this.myPanel.width(570);

        this.RespPanel.refresh();
    }
}
