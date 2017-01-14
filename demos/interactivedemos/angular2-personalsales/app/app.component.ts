/// <reference path='components/jqwidgets.d.ts' />
import { Component, ViewChild } from '@angular/core';

import { GridComponent } from './innerComponents/gridComponent/grid.component';
import { ChartComponent } from './innerComponents/chartComponent/chart.component';
import { DropDownComponent } from './innerComponents/dropDownComponent/dropDown.component';
import { ComboBoxComponent } from './innerComponents/comboBoxComponent/comboBox.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.htm'
})

export class AppComponent 
{
    @ViewChild(GridComponent) myGrid: GridComponent;
    @ViewChild(ChartComponent) myChart: ChartComponent;
    @ViewChild(ComboBoxComponent) myComboBox: ComboBoxComponent;

    employeID: number = 1;
    quarter: number = 1;

    flag: boolean = false;
    quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

    //This is executed when we change the ID(from the dropdown)
    employeIDChanged(event: any) : void
    {      
        this.employeID = event.value; 

        if (this.flag)
        {       
            this.myGrid.refreshGrid();
            this.myChart.refreshChart();
            this.myComboBox.refreshComboBox();
        }

        this.refreshPurchase();
        this.flag = true;
    }

    //This is executed when we change the quarter(from the combobox)
    quarterChanged(event: any) : void
    {
        this.quarter = event.value;
        this.myGrid.refreshGrid();
        this.refreshPurchase();
    }

    //This refreshes the values of the purchase form
    purchaseFormFill(ordersValue: string, amountValue: number, period: string): void
    {
        let descriptionVal = document.getElementsByClassName('total-val')[0];
        descriptionVal.innerHTML = period;

        let ordersAmount = document.getElementsByClassName('orders-val')[0];
        ordersAmount.innerHTML = ordersValue;;
        let ordersText = document.getElementsByClassName('orders-text')[0];
        ordersText.innerHTML = 'Orders';

        let amount = document.getElementsByClassName('amount-val')[0];
        amount.innerHTML = '$' + amountValue.toFixed(2);
        let amountText = document.getElementsByClassName('amount-text')[0];
        amountText.innerHTML = 'Amount';
    } 

    //This gets the data needed for the 'purchaseFormFill()' method
    refreshPurchase(): void
    {
        let allMonthsMember = 4;
        let orders = 0;
        let amountValue = 0;

        let source = {
            datatype: 'json',
            datafields: [
                { name: 'ShippedDate', type: 'date' },
                { name: 'ShipAddress' },
                { name: 'Customer', type: 'string' },
                { name: 'Amount', type: 'number' }
            ],
            url: '../personalsales/data.php'
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {
            formatData: (data) =>
            {
                $.extend(data, {
                    employeeid: this.employeID,
                    month: this.quarter,
                    usedwidget: 'salesgrid'
                });
                return data;
            },
            loadComplete: (records) =>
            {
                for (let j = 0; j < records.length; j += 1)
                {
                    amountValue += records[j].Amount;
                }
                this.purchaseFormFill(records.length, amountValue, this.quarters[this.quarter - 1]);
            }
        });
        dataAdapter.dataBind();
    };
}