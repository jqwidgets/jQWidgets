import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    dataSource: any = [{ "image": "https://www.htmlelements.com/demos/images/carousel-medium-1.jpg", "label": "Slide 0", "content": "Content 0" }, { "image": "https://www.htmlelements.com/demos/images/carousel-medium-2.jpg", "label": "Slide 1", "content": "Content 1" }, { "image": "https://www.htmlelements.com/demos/images/carousel-medium-3.jpg", "label": "Slide 2", "content": "Content 2" }, { "image": "https://www.htmlelements.com/demos/images/carousel-medium-4.jpg", "label": "Slide 3", "content": "Content 3" }, { "image": "https://www.htmlelements.com/demos/images/carousel-medium-5.jpg", "label": "Slide 4", "content": "Content 4" }, { "image": "https://www.htmlelements.com/demos/images/carousel-medium-6.jpg", "label": "Slide 5", "content": "Content 5" }]
}
