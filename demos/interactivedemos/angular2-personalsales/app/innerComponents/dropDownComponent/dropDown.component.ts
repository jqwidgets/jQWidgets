/// <reference path='components/jqwidgets.d.ts' />
import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';

@Component({
    selector: 'jqx-dropdownlist',
    template: `<angularDropDownList #reference (onSelect)='selectEvent($event)' (onBindingComplete)='bindingCompleteEvent($event)'></angularDropDownList>`
})

export class DropDownComponent implements AfterViewInit
{
    @ViewChild('reference') myDropDownList: jqxDropDownListComponent;

    currentEmployeID: number = 1;
    @Output() currentEmployeIDChange = new EventEmitter();

    ngAfterViewInit(): void 
    {
        this.myDropDownList.createWidget(this.settings);
        this.generateInfoContainer();
    }

    //The moment the dropdown binding completes we fill the 'purchase' form
    bindingCompleteEvent(event: any): void
    {
        let item = this.myDropDownList.getItem(0);
        if (item)
        {
            this.currentEmployeID = item.value;

            this.currentEmployeIDChange.emit({
                value: this.currentEmployeID
            })
        }
    }

    selectEvent(event: any): void
    {
        let eventType = event.args.type;
        if (event.args)
        {
            let item = event.args.item;

            if (item)
            {
                //Here we gather and ready the data for the 'personalInfo' form
                let data = this.dataAdapter.getrecords();
                let index = item.index;
                let name = item.label;
                let pictureUrl = '/' + data[index].picture;
                let personalInfo = item.value;
                this.generatePersonalInfo(name, pictureUrl, personalInfo);
                this.currentEmployeID = index + 1;

                if (eventType !== 'none')
                {
                    this.currentEmployeIDChange.emit({
                        value: this.currentEmployeID
                    })
                }
            }
        }
    }

    //This method updates the data in the 'personalInfo' form every time we change the User
    generatePersonalInfo (name: string, pictureUrl: string, personalInfo: any) : void
    {      
        (<HTMLElement>document.getElementsByClassName('personpicture')[0]).style.background = "url('../../../images" + pictureUrl + "')";

        (<HTMLElement>document.getElementsByClassName('fullname')[0]).innerHTML = name;

        (<HTMLElement>document.getElementsByClassName('contacts')[0]).innerHTML = 'Phone: xxxx-xxx-xxx <br /> ID: ' + personalInfo;
    }

    //This method is called once for the initial build of the 'personalInfo' form
    generateInfoContainer(): void
    {
        let personContent = document.getElementById('person');

        let picture = document.createElement('div');
        picture.className = 'personpicture';
        picture.style.background = "url('../../../images/nancy.png')";

        let personName = document.createElement('div');
        personName.className = 'fullname';
        personName.innerHTML = 'Nancy Davolio';

        let personInfo = document.createElement('div');
        personInfo.className = 'personinfo';

        let personalContacts = document.createElement('div');
        personalContacts.className = 'contacts';
        personalContacts.innerHTML = 'Phone: xxxx-xxx-xxx <br /> ID: 1'

        personInfo.appendChild(personName);
        personInfo.appendChild(personalContacts);
        personContent.appendChild(picture);
        personContent.appendChild(personInfo);
    }

    //DropDownList Setup
    source = {
        datatype: 'json',
        datafields: [
            { name: 'fullname', type: 'string', map: 'employeeName' },
            { name: 'picture', type: 'string', map: 'employeePhoto' },
            { name: 'employeeId' }
        ],
        url: '../personalsales/data.php'
    };

    dataAdapter = new $.jqx.dataAdapter(this.source, {
        formatData: (data: any) =>
        {
            $.extend(data, {
                employeeid: this.currentEmployeID,
                month: null,
                usedwidget: 'employeedropdown'
            });
            return data;
        }
    });

    settings: jqwidgets.DropDownListOptions =
    {
        width: 250,
        height: 30,
        source: this.dataAdapter,
        theme: 'dark',
        displayMember: 'fullname',
        valueMember: 'employeeId',
        selectedIndex: 0,
        placeHolder: 'Nancy Davolio',
        renderer: (index: number, label: string, value: any) =>
        {
            let data = this.dataAdapter.getrecords();
            let datarecord = data[index];
            let imgurl = '../../../images/' + datarecord.picture;
            let img = '<img height="50" width="45" src="' + imgurl + '"/>';
            let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + datarecord.fullname + " - ID: " + value + '</td></tr>' +
                '</table>';

            return table;
        }
    }
}
