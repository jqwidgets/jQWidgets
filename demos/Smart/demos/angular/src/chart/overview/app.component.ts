import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    caption: string = "Fitness & exercise weekly scorecard"
    description: string = "Time spent in vigorous exercise by activity"
    enableAnimations: boolean = true
    showLegend: boolean = true
    padding: object = { left: 10, top: 10, right: 15, bottom: 10 }
    titlePadding: object = { left: 90, top: 0, right: 0, bottom: 10 }
    dataSource: any = [
        { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
    ]
    colorScheme: string = 'scheme13'
    xAxis: object = {
        dataField: 'Day',
        unitInterval: 2,
        tickMarks: { visible: true, interval: 1 },
        gridLinesInterval: { visible: true, interval: 1 },
        valuesOnTicks: false,
        padding: { bottom: 10 }
    }
    valueAxis: object = {
        unitInterval: 10,
        minValue: 0,
        maxValue: 50,
        title: {
            text: 'Time in minutes<br><br>'
        },
        labels: { horizontalAlignment: 'right' }
    }
    seriesGroups: object =
        [
            {
                type: 'spline',
                series:
                    [
                        {
                            dataField: 'Swimming',
                            symbolType: 'square',
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#FEFEFE',
                                backgroundOpacity: 0.2,
                                borderColor: '#7FC4EF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            }
                        },
                        {
                            dataField: 'Running',
                            symbolType: 'square',
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#FEFEFE',
                                backgroundOpacity: 0.2,
                                borderColor: '#7FC4EF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            }
                        }
                    ]
            }
        ]
    ngAfterViewInit(): void {
    }
}
