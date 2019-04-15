import * as React from 'react';
 


import JqxEditor, { IEditorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

class App extends React.PureComponent<{}, IEditorProps> {

    private myEditor = React.createRef<JqxEditor>();

    constructor(props: {}) {
        super(props);

        const createCommand = (name: string): any => {
            switch (name) {
                case 'datetime':
                    return {
                        action: (widget: any, editor: any): any => {
                            const widgetValue = widget.val();
                            const date = new Date();
                            // return object with command and value members.
                            return { command: 'inserthtml', value: widgetValue === 'Insert Time' ? date.getHours() + ':' + date.getMinutes() : date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() };
                        },
                        init: (widget: any): void => {
                            widget.jqxDropDownList({ placeHolder: 'Insert Custom HTML', width: 170, source: ['Insert Time', 'Insert Date'], autoDropDownHeight: true });
                        },
                        refresh: (widget: any, style: any): void => {
                            // do something here when the selection is changed.
                            widget.jqxDropDownList('clearSelection');
                        },
                        tooltip: 'Insert Date/Time',
                        type: 'list'
                    }
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
                case 'clear':
                    return {
                        action: (widget: any, editor: any): void => {
                            // return nothing and perform a custom action.
                            this.myEditor.current!.val('');
                        },
                        init: (widget: any): void => {
                            widget.jqxButton({ height: 25, width: 40 });
                            widget.html('<span style="line-height: 24px;">Clear</span>');
                        },
                        refresh: (widget: any, style: any): void => {
                            // do something here when the selection is changed.
                        },                        
                        tooltip: 'Clear',
                        type: 'button'                                          
                    }
                case 'backcolor':
                    return {
                        action: (widget: any, editor: any): void => {
                            // return nothing and perform a custom action.
                            const color = widget.val();
                            editor.css('background', color);
                        },
                        init: (widget: any): void => {
                            widget.jqxDropDownButton({ width: 170 });
                            widget.jqxDropDownButton('setContent', '<span style="line-height: 24px;">Choose Background</span>');
                        },
                        refresh: (widget: any, style: any): void => {
                            // do something here when the selection is changed.
                        },
                        tooltip: 'Background',
                        type: 'colorPicker'                                             
                    }
            }
        }

        this.state = {
            createCommand,
            tools: 'datetime | print | clear | backcolor | font | bold italic underline'
        }
    }

    public render() {
        return (
            <JqxEditor theme={'material-purple'} ref={this.myEditor}
                // @ts-ignore
                width={'100%'} height={400} tools={this.state.tools}
                createCommand={this.state.createCommand} />
        );
    }
}

export default App;