import * as React from 'react';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

function App() {
    const source = React.useMemo(() => [
        'Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.',
        'Yesterday is not ours to recover, but tomorrow is ours to win or lose.',
        'It does not matter how slowly you go as long as you do not stop.',
        'Success depends upon previous preparation, and without such preparation there is sure to be failure.',
        'Better a diamond with a flaw than a pebble without.',
        'To succeed in life, you need two things: ignorance and confidence.',
        'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',
        'Sleep is the best meditation.'
    ], []);

    return (
        <JqxTextArea
            theme="material-purple"
            width={300}
            height={90}
            source={source}
            minLength={1}
            placeHolder="Enter a sentence"
        />
    );
}

export default App;