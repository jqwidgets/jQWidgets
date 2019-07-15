var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxTimePickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtimepicker';
var AppComponent = (function () {
    function AppComponent() {
        this.size = 400;
        this.format = "24-hour";
        this.template = [
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
        this.sampleValue = {
            "radiobuttonSelection": "hour",
            "radiobuttonMinuteinterval": "value1"
        };
        this.timeFormatting = function (value) {
            var hour = value.getHours();
            var minutes = value.getMinutes();
            var minutesString = minutes < 10 ? "0" + minutes : minutes;
            return "<span>" + hour + ":" + minutesString + "</span>";
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var value = this.timepicker.value();
        document.getElementById("currenttime").innerHTML = this.timeFormatting(value);
    };
    AppComponent.prototype.change = function (event) {
        var args = event.args;
        var newDate = args.value;
        document.getElementById("currenttime").innerHTML = this.timeFormatting(newDate);
    };
    AppComponent.prototype.formDataChange = function (event) {
        var args = event.args;
        var newValue = args.value;
        var previousValue = args.previousValue;
        for (var i in newValue) {
            var newInputValue = newValue[i];
            if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                switch (i) {
                    case "radiobuttonSelection":
                        this.timepicker.selection(newInputValue);
                        break;
                    case "radiobuttonMinuteinterval":
                        var currentValue = newInputValue;
                        if (currentValue === "value1") {
                            this.timepicker.minuteInterval(1);
                        }
                        else if (currentValue === "value2") {
                            this.timepicker.minuteInterval(5);
                        }
                        else {
                            this.timepicker.minuteInterval(15);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    };
    AppComponent.prototype.buttonClick = function (event) {
        var args = event.args;
        var name = args.name;
        switch (name) {
            case "sethours":
                this.timepicker.setHours(20);
                break;
            case "setminutes":
                this.timepicker.setMinutes(12);
                break;
            case "now":
                this.timepicker.value(new Date());
                break;
            default:
                break;
        }
    };
    var _a;
    __decorate([
        ViewChild("timepicker", { static: false }),
        __metadata("design:type", typeof (_a = typeof jqxTimePickerComponent !== "undefined" && jqxTimePickerComponent) === "function" ? _a : Object)
    ], AppComponent.prototype, "timepicker", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            styleUrls: ["./app.component.css"],
            templateUrl: './app.component.html',
            encapsulation: ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map