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

    localization: any = {
        'bold': 'Fett',
        'italic': 'Kursiv',
        'underline': 'Unterstreichen',
        'format': 'Block-Format',
        'font': 'Schriftname',
        'size': 'Schriftgröße',
        'color': 'Textfarbe',
        'background': 'Hintergrundfarbe',
        'left': 'Links ausrichten',
        'center': 'Mitte ausrichten',
        'right': 'Rechts ausrichten',
        'outdent': 'Weniger Einzug',
        'indent': 'Mehr Einzug',
        'ul': 'Legen Sie ungeordnete Liste',
        'ol': 'Geordnete Liste einfügen',
        'image': 'Bild einfügen',
        'link': 'Link einfügen',
        'html': 'html anzeigen',
        'clean': 'Formatierung entfernen'
    };
}