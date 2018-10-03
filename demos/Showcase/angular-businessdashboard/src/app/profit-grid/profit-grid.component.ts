import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
    selector: 'app-profit-grid',
    templateUrl: './profit-grid.component.html',
    styleUrls: ['./profit-grid.component.css']
})
export class ProfitGridComponent implements OnInit {

    @ViewChild('grid') grid: jqxGridComponent
    viewRendered: boolean = false;
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.viewRendered = true;
    }

    source: any =
        {
            datafields: [
                { name: 'region' },
                { name: 'account' },
                { name: 'q1' },
                { name: 'q2' },
                { name: 'q3' },
                { name: 'q4' }
            ],
            url: '../../assets/sample-data/profitloss.json',
            datatype: 'json'
        };

    dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    groupsrenderer(text: string): string {
        return '<p class="profitGridGroups">' + text.substr(40).toUpperCase() + '</p>';
    };

    groups: string[] =
        [
            'account'
        ];

    columns: jqwidgets.GridColumn[] =
        [
            {
                text: '<p class="profitGridHeaders">REGION</p>',
                datafield: 'account',
                width: '20%',
                displayfield: 'region',
                cellsrenderer: function (row, columnfield, value) {
                    return '<p class="profitGridCells">' + value.toUpperCase() + '</p>';
                }
            },
            {
                text: '<p class="profitGridHeaders">Q1 2014</p>',
                datafield: 'q1',
                cellsrenderer: function (row, columnfield, value) {
                    return '<p class="profitGridCells">$' + value + '</p>';
                }
            },
            {
                text: '<p class="profitGridHeaders">Q2 2014</p>',
                datafield: 'q2',
                cellsrenderer: function (row, columnfield, value) {
                    return '<p class="profitGridCells">$' + value + '</p>';
                }
            },
            {
                text: '<p class="profitGridHeaders">Q3 2014</p>',
                datafield: 'q3',
                cellsrenderer: function (row, columnfield, value) {
                    return '<p class="profitGridCells">$' + value + '</p>';
                }
            },
            {
                text: '<p class="profitGridHeaders">Q4 2014</p>',
                datafield: 'q4',
                cellsrenderer: function (row, columnfield, value) {
                    return '<p class="profitGridCells">$' + value + '</p>';
                }
            }
        ]

    updateGridColumns(event) {
        if (!this.viewRendered) {
            return;
        }
        if (event.update === 'show') {
            this.grid.showcolumn(event.dataField);
        } else {
            this.grid.hidecolumn(event.dataField);
        }
    }

    updateGridRows(items) {
        if (!this.viewRendered) {
            return;
        }
        this.grid.clearfilters();
        let filtertype = 'stringfilter';
        let filtergroup = new jqx.filter();
        for (var i = 0; i < items.length; i++) {
            var filterOrOperator = 1;
            var filtervalue = items[i].label;
            var filtercondition = 'equal';
            var filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter);
        }

        this.grid.addfilter('region', filtergroup);
        this.grid.applyfilters();
    }
}
