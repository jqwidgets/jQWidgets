import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    markersFormatFunction(value, position): string {
        let side;
        if (position == "left") {
            side = "From";
        } else if (position == "right") {
            side = "To";
        };
        return side + ": <span>" + value.toFixed(0) + "</span>";
    }
}