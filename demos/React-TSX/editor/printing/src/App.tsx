import * as React from 'react';
 


import JqxEditor, { IEditorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

class App extends React.PureComponent<{}, IEditorProps> {

    private myEditor = React.createRef<JqxEditor>();

    constructor(props: {}) {
        super(props);

        const createCommand = (name: string): any => {
            switch (name) {
                case 'print':
                    return {
                        action: (widget: any, editor: any): void => {
                            // return nothing and perform a custom action.
                            this.myEditor.current!.print();
                        },
                        init: (widget: any): void => {
                            widget.jqxButton({ height: 25, width: 40 });
                            widget.html('<span style="line-height: 24px;">Print</span>');
                        },
                        refresh: (widget: any, style: any): void => {
                            // do something here when the selection is changed.
                        },
                        tooltip: 'Print',
                        type: 'button'
                    }
            }
        }

        this.state = {
            createCommand,
            tools: 'bold italic underline | format font size | left center right | print'
        }
    }

    public render() {
        return (
            <JqxEditor theme={'material-purple'} ref={this.myEditor}
                // @ts-ignore
                width={'100%'} height={400} tools={this.state.tools}
                createCommand={this.state.createCommand}>
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
}

export default App;