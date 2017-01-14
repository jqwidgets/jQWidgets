 
import { Component } from '@angular/core';

import { jqxTextAreaComponent } from '../../../../../jqwidgets-ts/angular_jqxtextarea';

@Component({
    selector: 'my-app',
    template:
        `<jqxTextArea
            [width]='300' [height]='90' [source]='generateSource'
            [minLength]='1' [placeHolder]='"Enter a sentence"'>
        </jqxTextArea>`
})

export class AppComponent
{
    generateSource(): string[]
    {
        let quotes: string[] = [];

        quotes.push('Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.');
        quotes.push('Yesterday is not ours to recover, but tomorrow is ours to win or lose.');
        quotes.push('It does not matter how slowly you go as long as you do not stop.');
        quotes.push('Success depends upon previous preparation, and without such preparation there is sure to be failure.');
        quotes.push('Better a diamond with a flaw than a pebble without.');
        quotes.push('To succeed in life, you need two things: ignorance and confidence.');
        quotes.push('A successful man is one who can lay a firm foundation with the bricks others have thrown at him.');
        quotes.push('Sleep is the best meditation.');

        return quotes;
    }
}
