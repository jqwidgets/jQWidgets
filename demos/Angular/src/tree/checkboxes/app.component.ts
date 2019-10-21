import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;

    ngAfterViewInit(): void {
        this.myTree.selectItem(document.getElementById('home'));
        let solutionsItem = document.getElementById('solutions');
        this.myTree.expandItem(solutionsItem);
        this.myTree.checkItem(solutionsItem, true);
        this.myTree.uncheckItem(document.getElementById('manufacturing'));
    }

    myCheckBoxOnChange(event: any): void {
        let checked = event.args.checked;
        this.myTree.hasThreeStates(checked);
    };
}