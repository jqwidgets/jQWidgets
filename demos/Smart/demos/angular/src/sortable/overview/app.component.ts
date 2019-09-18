import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    ngOnInit(): void {
        document.readyState === "complete" ? init() : window.onload = init;

        function init() {
            const sortable = <any>document.getElementById("sortable");
            document.getElementById("handle").addEventListener("change", function (event: any) {
                if (event.detail.value) {
                    sortable.dragMode = "handle";
                    sortable.handleVisibility = "visible";
                }
                else {
                    sortable.dragMode = "item";
                }
            });
        }
    }
}