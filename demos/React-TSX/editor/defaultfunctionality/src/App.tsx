import * as React from 'react';
 


import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxEditor theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={400}>
                &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor designed to simplify web content creation. You can use it as a replacement of your Textarea.
                &lt;br /&gt;
                &lt;br /&gt;
                Features include:
                &lt;br /&gt;
                &lt;ul&gt;
                &lt;li&gt;Text formatting&lt;/li&gt;
                &lt;li&gt;Text alignment&lt;/li&gt;
                &lt;li&gt;Hyperlink dialog&lt;/li&gt;
                &lt;li&gt;Image dialog&lt;/li&gt;
                &lt;li&gt;Bulleted list&lt;/li&gt;
                &lt;li&gt;Numbered list&lt;/li&gt;
                &lt;/ul&gt;
            </JqxEditor>
        );
    }
}

export default App;