/// <reference path='components/jqwidgets.d.ts' />
import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';

import { jqxChartComponent } from 'components/angular_jqxChart';

@Component({
    selector: 'jqx-chart',
    template: `<angularChart #reference width='100%' height='370px'></angularChart>`
})

export class ChartComponent implements AfterViewInit
{
    @ViewChild('reference') myChart: jqxChartComponent;

    @Input() employeID: number = 1;

    ngAfterViewInit(): void
    {
        this.myChart.createWidget(this.settings);      
    }

    //Refresh the chart when the employeID is changed
    refreshChart() : void
    {
        setTimeout(() => {
            this.dataAdapter.dataBind();
        }, 100)
    };

    //The method in which we update the 'amount' form with the new data 
    amountFormFill(smallAmount: number, smallAmountMonth: string, bigAmount: number, bigAmountMonth: string, average: number): void
    {
        let bigValueAmt = document.getElementsByClassName('big-value-amt')[0];
        bigValueAmt.innerHTML = '$' + bigAmount.toFixed(2) + ' on ' + bigAmountMonth;

        let smallValueAmt = document.getElementsByClassName('small-value-amt')[0];
        smallValueAmt.innerHTML = '$' + smallAmount.toFixed(2) + ' on ' + smallAmountMonth;

        let avgValueAmt = document.getElementsByClassName('avg-value-amt')[0];
        avgValueAmt.innerHTML = '$' + average.toFixed(2) + '/month';
    }

    //Chart Setup
    monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    sourceChart = {
        datatype: 'json',
        datafields: [
            { name: 'OrderID', type: 'string' },
            { name: 'OrderEmployeeId' },
            { name: 'OrderDate', type: 'date' },
            { name: 'Subtotal' }
        ],
        url: '../personalsales/data.php'
    };

    dataAdapter = new $.jqx.dataAdapter(this.sourceChart, {
        formatData: (data) =>
        {
            $.extend(data, {
                employeeid: this.employeID,
                month: null,
                usedwidget: 'yearpiechart'
            });
            return data;
        },
        beforeLoadComplete: (records, original) =>
        {
            //Here we gather and ready the data for the 'amount' form every time we change the User ID
            let bigAmount = -1;
            let bigAmountMonth = '';
            let smallAmount = Number.MAX_VALUE;
            let smallAmountMonth = '';
            let average = -1;
            let sumAmount = 0;

            let newArray = [];
            for (let i = 0; i < records.length; i++)
            {
                let currentItem = records[i];
                let currentItemValue = currentItem.Subtotal;
                if (currentItemValue > bigAmount)
                {
                    bigAmount = currentItemValue;
                    bigAmountMonth = this.monthsNames[currentItem.uid];
                }

                if (currentItemValue < smallAmount)
                {
                    smallAmount = currentItemValue;
                    smallAmountMonth = this.monthsNames[currentItem.uid];
                }

                sumAmount += currentItemValue;
                newArray.push(currentItem);
            }

            average = sumAmount / records.length
            this.amountFormFill(smallAmount, smallAmountMonth, bigAmount, bigAmountMonth, average);
            return newArray;
        }
    });

    settings: jqwidgets.ChartOptions =
    {
        title: '',
        description: '',
        source: this.dataAdapter,
        backgroundColor: 'transparent',
        titlePadding: {
            top: 15,
            left: 0, right: 0,
            bottom: 10
        },
        enableAnimations: false,
        showLegend: false,
        showBorderLine: false,
        showToolTips: false,
        colorScheme: 'scheme01',
        seriesGroups: [{
            type: 'pie',
            showLabels: true,
            xAxis:
            {
                formatSettings: { prefix: 'OrderID ' }
            },
            series: [{
                dataField: 'Subtotal',
                displayText: 'OrderID',
                labelRadius: '95%',
                initialAngle: 15,
                radius: '85%',
                formatFunction: (value, element) =>
                {
                    return this.monthsNames[element] + ' $' + value.toFixed(2);
                }
            }]
        }]
    };

}
