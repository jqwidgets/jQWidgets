import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxQRcodeComponent } from 'jqwidgets-ng/jqxqrcode';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None

})

export class AppComponent {
    @ViewChild('qrcode', { static: false }) qrcode: jqxQRcodeComponent;
	
	svgExport() {
		this.qrcode.export('svg');
	}

	jpgExport() {
		this.qrcode.export('jpg');
	}

	pngExport() {
		this.qrcode.export('png');
	}
	
}
