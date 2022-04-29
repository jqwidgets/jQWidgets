import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxBarcodeComponent } from 'jqwidgets-ng/jqxbarcode';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None

})

export class AppComponent {
    @ViewChild('barcode', { static: false }) barcode: jqxBarcodeComponent;
	
	svgExport() {
		this.barcode.export('svg');
	}

	jpgExport() {
		this.barcode.export('jpg');
	}

	pngExport() {
		this.barcode.export('png');
	}
	
}
