import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    // 'Main' grid
	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}
	
    initiMainGrid: any = () => {
        let mainMessages = [{ from: 'Anthony', subject: 'Visit to the zoo', time: '09/10/2014 12:35' }, { from: 'Peter', subject: 'Job application', time: '08/23/2014 18:13' }, { from: 'Sarah', subject: 'The roses...', time: '08/05/2014 15:01' }];
        let mainSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'from', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'time', type: 'date' }
                ],
                localdata: mainMessages
            };
        let mainDataAdapter = new jqx.dataAdapter(mainSource);
        
        let mainGrid: jqwidgets.jqxGrid = jqwidgets.createInstance('#mainGrid', 'jqxGrid', {
            width: '100%',
            autoheight: true,
            source: mainDataAdapter,
            selectionmode: 'checkbox',
            columns: [
                { text: 'From', datafield: 'from', width: 100 },
                { text: 'Subject', datafield: 'subject', width: 200 },
                { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
            ]
        });
    };

    // 'Social' grid
    initiSocialGrid = () => {
        let socialMessages = [{ from: 'PhotoPics.com', subject: 'Join us today!', time: '09/08/2014 11:00' }, { from: 'CookMaster', subject: 'Welcome to the CookMaster forum.', time: '08/29/2014 22:33' }];
        let socialSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'from', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'time', type: 'date' }
                ],
                localdata: socialMessages
            };
        let socialDataAdapter = new jqx.dataAdapter(socialSource);

        let socialGrid: jqwidgets.jqxGrid = jqwidgets.createInstance('#socialGrid', 'jqxGrid', {
            width: '100%',
            autoheight: true,
            source: socialDataAdapter,
            selectionmode: 'checkbox',
            columns: [
                { text: 'From', datafield: 'from', width: 100 },
                { text: 'Subject', datafield: 'subject', width: 240 },
                { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
            ]
        });
    };

    initContent = (index: number) => {
        switch (index) {
            case 0:
                this.initiMainGrid();
                break;
            case 1:
                this.initiSocialGrid();
                break;
            case 2:
                let socialGrid: jqwidgets.jqxButton = jqwidgets.createInstance('#refreshButton', 'jqxButton', {});
                break;
        }
    }
}