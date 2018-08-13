import { Component, ViewChild } from '@angular/core';

import { jqxTreeComponent } from '../../../jqwidgets-ts/angular_jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree') myTree: jqxTreeComponent;

    myTreeOnInitialized(): void {
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