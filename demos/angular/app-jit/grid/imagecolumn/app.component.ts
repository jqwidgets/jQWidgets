import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: this.generateData(), datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    imagerenderer = (row: number, datafield: string, value: string): string => {
        return '<img style="margin-left: 5px;" height="60" width="50" src="../images/' + value + '"/>';
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'Image', datafield: 'Image', width: 60, cellsrenderer: this.imagerenderer },
        { text: 'Title', datafield: 'Title', width: 200 },
        { text: 'Year', datafield: 'Year' }
    ];

    generateData(): any[] {
        let movies = new Array();
        // Avatar
        movies[0] = { Image: 'avatar.png', Title: 'Avatar', Year: 2009 };
        movies[1] = { Image: 'priest.png', Title: 'Priest', Year: 2006 };
        movies[2] = { Image: 'endgame.png', Title: 'End Game', Year: 2006 };
        movies[3] = { Image: 'unknown.png', Title: 'Unknown', Year: 2011 };
        movies[4] = { Image: 'unstoppable.png', Title: 'Unstoppable', Year: 2010 };
        movies[5] = { Image: 'twilight.png', Title: 'Twilight', Year: 2008 };
        movies[6] = { Image: 'kungfupanda.png', Title: 'Kung Fu Panda', Year: 2008 };
        movies[7] = { Image: 'knockout.png', Title: 'Knockout', Year: 2011 };
        movies[8] = { Image: 'theplane.png', Title: 'The Plane', Year: 2010 };
        movies[9] = { Image: 'bigdaddy.png', Title: 'Big Daddy', Year: 1999 };

        return movies;
    }
}