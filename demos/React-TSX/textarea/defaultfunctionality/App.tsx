import * as React from 'react';
 


import JqxTextArea, { ITextAreaProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

class App extends React.PureComponent<{}, ITextAreaProps> {
    private quotes: string[] = [];

    constructor(props: {}) {
        super(props);

        this.state = {
            source: this.generateSource()
        }
    }

    public render() {
        return (
            <JqxTextArea theme={'material-purple'}
                width={300}
                height={90}
                source={this.state.source}
                minLength={1}
                placeHolder={'Enter a sentence'}
            />
        );
    }

    private generateSource = () => {
        this.quotes.push('Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.');
        this.quotes.push('Yesterday is not ours to recover, but tomorrow is ours to win or lose.');
        this.quotes.push('It does not matter how slowly you go as long as you do not stop.');
        this.quotes.push('Success depends upon previous preparation, and without such preparation there is sure to be failure.');
        this.quotes.push('Better a diamond with a flaw than a pebble without.');
        this.quotes.push('To succeed in life, you need two things: ignorance and confidence.');
        this.quotes.push('A successful man is one who can lay a firm foundation with the bricks others have thrown at him.');
        this.quotes.push('Sleep is the best meditation.');
        return this.quotes;
    };
}

export default App;
