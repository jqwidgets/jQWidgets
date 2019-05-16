import * as React from 'react';
 


import JqxEditor, { IEditorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

class App extends React.PureComponent<{}, IEditorProps> {

    constructor(props: {}) {
        super(props);

        const createCommand = (name: string): any => {
            switch (name) {
                case 'font':
                    return {
                        init: (widget: any): void => {
                            const source = [
                                { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                                { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
                                { label: 'Courier New', value: '"Courier New", Courier, monospace' },
                                { label: 'Georgia', value: 'Georgia,serif' },
                                { label: 'Helvetica', value: 'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica' },
                                { label: 'Impact', value: 'Impact,Charcoal,sans-serif' },
                                { label: 'Lucida Console', value: '"Lucida Console",Monaco,monospace' },
                                { label: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' },
                                { label: 'Times New Roman', value: '"Times New Roman",Times,serif' },
                                { label: 'Trebuchet MS', value: '"Trebuchet MS",Helvetica,sans-serif' },
                                { label: 'Verdana', value: 'Verdana,Geneva,sans-serif' }
                            ];
                            widget.jqxDropDownList({
                                source
                            });
                        }
                    }
            }
        };

        this.state = {
            createCommand,
            stylesheets: ['editor.css']
        }
    }

    public render() {
        return (
            <JqxEditor theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={400}
                stylesheets={this.state.stylesheets} createCommand={this.state.createCommand}>
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