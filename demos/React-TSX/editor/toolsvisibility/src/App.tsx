import * as React from 'react'
import { useRef, useState } from 'react'
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor'

function App() {
    const myEditor = useRef<JqxEditor>(null)
    const [tools] = useState('bold italic underline | left center right')

    return (
        <JqxEditor
            theme="material-purple"
            ref={myEditor}
            width="100%"
            height={400}
            tools={tools}
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
    )
}

export default App