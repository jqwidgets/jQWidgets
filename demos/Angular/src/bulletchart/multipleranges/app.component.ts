
import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    pointsToGrade(points: number): string {
        let grade;
        if (points < 60) {
            grade = 'E';
        }
        else if (points < 70) {
            grade = 'D';
        }
        else if (points < 80) {
            grade = 'C';
        }
        else if (points < 90) {
            grade = 'B';
        }
        else {
            grade = 'A';
        }
        return grade;
    };

    tooltipFormatFunction = (value: number, target: number): string => {
        let currentGrade = this.pointsToGrade(value);
        let averageGrade = this.pointsToGrade(target);
        return '<div>Grade: <strong>' + currentGrade + '</strong> (' + value +
            ' points)</div><div>Average grade: <strong>' + averageGrade +
            '</strong> (' + target + ' points)</div>';
    }

    ranges: any[] =
    [
        { startValue: 0, endValue: 60, color: '#191970' },
        { startValue: 60, endValue: 70, color: '#191970' },
        { startValue: 70, endValue: 80, color: '#191970' },
        { startValue: 80, endValue: 90, color: '#191970' },
        { startValue: 90, endValue: 100, color: '#191970' }
    ];

    pointer: any = { value: 83, label: 'Grade', size: '25%', color: '#1E90FF' };

    target: any = { value: 75, label: 'Average grade', size: 4, color: '#00FFFF' };

    ticks: any = { position: 'far', interval: 10, size: 10 };

}
