import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { jqxTimePickerComponent } from 'jqwidgets-ng/jqxtimepicker';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild("timepicker", { static: false }) timepicker: jqxTimePickerComponent;

    size: number | string = 400;
    format: string = "24-hour";
    template: any[] = [
        {
            type: "label",
            label: "<span class='settings'>Settings</span>",
            rowHeight: "40px",
        },
        {
            type: "label",
            label: "Selection",
            rowHeight: "40px",
        },
        {
            bind: "radiobuttonSelection",
            type: "option",
            label: "Selection",
            labelPosition: "right",
            columnWidth: "100px",
            align: "left",
            optionslayout: "horizontal",
            options: [
                { label: "Hours", value: "hour" },
                { label: "Minutes", value: "minute" }
            ]
        },
        {
            type: "label",
            label: "Minute Interval",
            rowHeight: "40px",
        },
        {
            bind: "radiobuttonMinuteinterval",
            type: "option",
            label: "Minute Interval",
            labelPosition: "right",
            columnWidth: "100px",
            align: "left",
            optionslayout: "horizontal",
            options: [
                { label: "1", value: "value1" },
                { label: "5", value: "value2" },
                { label: "15", value: "value3" }
            ]
        },
        {
            name: "sethours",
            type: "button",
            text: "Set hours to 20",
            height: "30px",
            rowHeight: "40px",
            columnWidth: "50%"
        },
        {
            name: "setminutes",
            type: "button",
            text: "Set minutes to 12",
            height: "30px",
            rowHeight: "40px",
            columnWidth: "50%"
        },
        {
            name: "now",
            type: "button",
            text: "Set to now",
            height: "30px",
            rowHeight: "40px",
            columnWidth: "50%"
        },
        {
            type: "label",
            label: "Current value: <span id=\"currenttime\"></span>",
            rowHeight: "40px",
        }
    ];

    sampleValue: any = {
        "radiobuttonSelection": "hour",
        "radiobuttonMinuteinterval": "value1"
    };

    ngAfterViewInit() {
        let value = this.timepicker.value();
        document.getElementById("currenttime").innerHTML = this.timeFormatting(value);
    }

    timeFormatting = (value: Date): string => {
        let hour = value.getHours();
        let minutes = value.getMinutes();
        let minutesString = minutes < 10 ? "0" + minutes : minutes;

        return "<span>" + hour + ":" + minutesString + "</span>";
    };

    change(event: any): void {
        let args = event.args;
        let newDate = args.value;
        document.getElementById("currenttime").innerHTML = this.timeFormatting(newDate);
    }

    formDataChange(event: any): void {
        let args = event.args;
        let newValue = args.value;
        let previousValue = args.previousValue;
        for (let i in newValue) {
            let newInputValue = newValue[i];
            if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                switch (i) {
                    case "radiobuttonSelection":
                        this.timepicker.selection(newInputValue);
                        break;
                    case "radiobuttonMinuteinterval":
                        let currentValue = newInputValue;
                        if (currentValue === "value1") {
                            this.timepicker.minuteInterval(1);
                        } else if (currentValue === "value2") {
                            this.timepicker.minuteInterval(5);
                        } else {
                            this.timepicker.minuteInterval(15);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    buttonClick(event: any): void {
        let args = event.args;
        let name = args.name;
        switch (name) {
            case "sethours":
                this.timepicker.setHours(20);
                break
                case "setminutes":
                this.timepicker.setMinutes(12);
                break;
                case "now":
                this.timepicker.value(new Date());
                break;
            default:
                break;
        }
    }
}
