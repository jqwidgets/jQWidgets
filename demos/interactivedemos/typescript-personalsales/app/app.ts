/// <reference path='../../../../jqwidgets-ts/jqwidgets.d.ts' />
"use strict";

$(document).ready( () =>
{
    dropDownList();
    comboBox();
    grid();
    chart();
    refreshPurchase();
});

let currentEmployeeID: number = 1;
let currentQuarter: number = 1;

let quarters = ["Q1", "Q2", "Q3", "Q4"];
let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Start DropDownList
let myDropDownList: jqwidgets.jqxDropDownList;
function dropDownList(): void
{

    let source =
        {
            datatype: 'json',
            datafields: [
                { name: 'fullname', type: 'string', map: 'employeeName' },
                { name: 'picture', type: 'string', map: 'employeePhoto' },
                { name: 'employeeId' }
            ],
            url: '../personalsales/data.php'
        };

    let dataAdapter = new $.jqx.dataAdapter(source, {
        formatData: (data: any): any =>
        {
            $.extend(data, {
                employeeid: currentEmployeeID,
                month: null,
                usedwidget: 'employeedropdown'
            });
            return data;
        }
    });

    let settings: jqwidgets.DropDownListOptions =
        {
            width: 250,
            height: 30,
            source: dataAdapter,
            theme: 'dark',
            displayMember: 'fullname',
            valueMember: 'employeeId',
            selectedIndex: 0,
            placeHolder: 'Nancy Davolio',
            renderer: (index: number, label: string, value: any) =>
            {
                let data = dataAdapter.getrecords();
                let datarecord = data[index];
                let imgurl = '../../../images/' + datarecord.picture;
                let img = '<img height="50" width="45" src="' + imgurl + '"/>';
                let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + datarecord.fullname + " - ID: " + value + '</td></tr>' +
                    '</table>';

                return table;
            }
        }

    myDropDownList = jqwidgets.createInstance('#jqxDropDownList', 'jqxDropDownList', settings);

    generateInfoContainer();

    myDropDownList.addEventHandler('select', (event: any): void =>
    {
        let eventType = event.args.type;
        if (event.args)
        {
            let item = event.args.item;

            if (item)
            {
                //Here we gather and ready the data for the 'personalInfo' form
                let data = dataAdapter.getrecords();
                let index = item.index;
                let name = item.label;
                let pictureUrl = '/' + data[index].picture;
                let personalInfo = item.value;
                generatePersonalInfo(name, pictureUrl, personalInfo);
                currentEmployeeID = index + 1;

                myGrid.updatebounddata('cells');
                myComboBox.setOptions({ selectedIndex: 0 });
                refreshPurchase();
                chart();
            }
        }
    });

    myDropDownList.addEventHandler('bindingcomplete', (event: any): void =>
    {
        let item = myDropDownList.getItem(0);
        if (item)
        {
            currentEmployeeID = item.value;
        }
    });
}
//End DropDownList

//Start ComboBox
let myComboBox: jqwidgets.jqxComboBox;
function comboBox(): void
{
    let settings: jqwidgets.ComboBoxOptions =
        {
            source: quarters,
            width: 150,
            height: 30,
            theme: 'light',
            dropDownHeight: '115px',
            selectedIndex: 0
        }

    myComboBox = jqwidgets.createInstance('#jqxComboBox', 'jqxComboBox', settings);

    myComboBox.addEventHandler('select', (event: any): void =>
    {
        let args = event.args;
        if (args)
        {
            let index = args.index;
            currentQuarter = index + 1;

            refreshPurchase();
            myGrid.updatebounddata('cells');

        }
    });
}
//End ComboBox

//Start Grid
let myGrid: jqwidgets.jqxGrid;
function grid(): void
{
    //Grid Setup
    let arrayOfGridOrdersData: Array<any> = [];

    let sourceGrid = {
        datatype: 'json',
        datafields: [
            { name: 'ShippedDate', type: 'date' },
            { name: 'ShipAddress' },
            { name: 'Customer', type: 'string' },
            { name: 'Amount', type: 'number' }
        ],
        beforeprocessing: (data: any): void =>
        {
            if (data)
            {
                for (let item in data)
                {
                    arrayOfGridOrdersData[item] = data[item];
                }
            }
        },
        updaterow: (rowid, rowdata, commit) =>
        {
            commit(true);
        },
        url: '../personalsales/data.php'
    };

    let dataAdapter = new $.jqx.dataAdapter(sourceGrid, {
        formatData: (data: any): any =>
        {
            $.extend(data, {
                employeeid: currentEmployeeID,
                month: currentQuarter,
                usedwidget: 'salesgrid'
            });
            return data;
        },
        autoBind: true
    });

    let settings: jqwidgets.GridOptions =
        {
            width: '100%',
            theme: 'light',
            autoheight: true,
            clipboard: false,
            altrows: true,
            rowsheight: 35,
            pagermode: 'simple',
            ready: (): void =>
            {
                let localizationobj = { thousandsseparator: '' };
                myGrid.localizestrings(localizationobj);
            },
            source: dataAdapter,
            columns: [
                {
                    text: 'Date',
                    datafield: 'ShippedDate',
                    width: '15%',
                    cellsformat: 'MMM dd yyyy',
                    cellsalign: 'center'
                },
                {
                    width: '35%',
                    text: 'Ship Address',
                    datafield: 'ShipAddress',
                    cellsalign: 'center'
                },
                {
                    width: '15%',
                    text: 'Customer',
                    datafield: 'Customer',
                    cellsalign: 'center'
                },
                {
                    width: '35%',
                    text: 'Amount',
                    datafield: 'Amount',
                    cellsformat: 'c2',
                    cellsalign: 'right'
                }
            ]
        }

    myGrid = jqwidgets.createInstance('#jqxGrid', 'jqxGrid', settings);
}
//End Grid

//Start Chart
let myChart: jqwidgets.jqxChart;
function chart(): void
{
    let sourceChart =
        {
            datatype: 'json',
            datafields: [
                { name: 'OrderID', type: 'string' },
                { name: 'OrderEmployeeId' },
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal' }
            ],
            url: '../personalsales/data.php'
        };

    let dataAdapter = new $.jqx.dataAdapter(sourceChart, {
        formatData: (data: any): void =>
        {
            $.extend(data, {
                employeeid: currentEmployeeID,
                month: null,
                usedwidget: 'yearpiechart'
            });
            return data;
        },
        beforeLoadComplete: (records: any, original: any): any =>
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
                    bigAmountMonth = monthsNames[currentItem.uid];
                }

                if (currentItemValue < smallAmount)
                {
                    smallAmount = currentItemValue;
                    smallAmountMonth = monthsNames[currentItem.uid];
                }

                sumAmount += currentItemValue;
                newArray.push(currentItem);
            }

            average = sumAmount / records.length
            amountFormFill(smallAmount, smallAmountMonth, bigAmount, bigAmountMonth, average);
            return newArray;
        }
    });

    let settings: jqwidgets.ChartOptions =
        {
            title: '',
            description: '',
            source: dataAdapter,
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
                        return monthsNames[element] + ' $' + value.toFixed(2);
                    }
                }]
            }]
        }
    myChart = jqwidgets.createInstance('#jqxChart', 'jqxChart', settings);
}
//EndChart

//This refreshes the values of the purchase form
function purchaseFormFill(ordersValue: string, amountValue: number, period: string): void
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
function refreshPurchase(): void
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
        formatData: (data: any): any =>
        {
            $.extend(data, {
                employeeid: currentEmployeeID,
                month: currentQuarter,
                usedwidget: 'salesgrid'
            });
            return data;
        },
        loadComplete: (records: any): void =>
        {
            for (let j = 0; j < records.length; j += 1)
            {
                amountValue += records[j].Amount;
            }
            purchaseFormFill(records.length, amountValue, quarters[currentQuarter - 1]);
        }
    });
    dataAdapter.dataBind();
};

//The method in which we update the 'amount' form with the new data 
function amountFormFill(smallAmount: number, smallAmountMonth: string, bigAmount: number, bigAmountMonth: string, average: number): void
{
    let bigValueAmt = document.getElementsByClassName('big-value-amt')[0];
    bigValueAmt.innerHTML = '$' + bigAmount.toFixed(2) + ' on ' + bigAmountMonth;

    let smallValueAmt = document.getElementsByClassName('small-value-amt')[0];
    smallValueAmt.innerHTML = '$' + smallAmount.toFixed(2) + ' on ' + smallAmountMonth;

    let avgValueAmt = document.getElementsByClassName('avg-value-amt')[0];
    avgValueAmt.innerHTML = '$' + average.toFixed(2) + '/month';
}

//This method updates the data in the 'personalInfo' form every time we change the User
function generatePersonalInfo(name: string, pictureUrl: string, personalInfo: any): void
{
    (<HTMLElement>document.getElementsByClassName('personpicture')[0]).style.background = "url('../../../images" + pictureUrl + "')";

    (<HTMLElement>document.getElementsByClassName('fullname')[0]).innerHTML = name;

    (<HTMLElement>document.getElementsByClassName('contacts')[0]).innerHTML = 'Phone: xxxx-xxx-xxx <br /> ID: ' + personalInfo;
}

//This method is called once for the initial build of the 'personalInfo' form
function generateInfoContainer(): void
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