import * as React from 'react';
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

function App() {
    const myEditor = React.useRef<JqxEditor>(null);

    const createCommand = React.useCallback((name: string) => {
        switch (name) {
            case 'print':
                return {
                    action: (widget: any, editor: any) => {
                        myEditor.current!.print();
                    },
                    init: (widget: any) => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 24px;">Print</span>');
                    },
                    refresh: (widget: any, style: any) => {},
                    tooltip: 'Print',
                    type: 'button'
                };
        }
    }, []);

    return (
        <JqxEditor
            theme="material-purple"
            ref={myEditor}
            width="100%"
            height={400}
            tools="bold italic underline | format font size | left center right | print"
            createCommand={createCommand}
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