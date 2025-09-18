import * as React from 'react';
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

function App() {
    const myEditor = React.useRef<JqxEditor>(null);

    return (
        <JqxEditor
            theme="material-purple"
            ref={myEditor}
            // @ts-ignore
            width="100%"
            height={400}
            rtl={true}
        >
            &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor designed to simplify web content creation. You can use it as a replacement of your Textarea or you can create it from a DIV element.
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

export default App;