import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxEditor, { IEditorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

function App() {
    const myEditor = useRef<JqxEditor>(null);

    const createCommand = useMemo(() => (name: string) => {
        switch (name) {
            case 'datetime':
                return {
                    action: (widget: any, editor: any): any => {
                        const widgetValue = widget.val();
                        const date = new Date();
                        return { command: 'inserthtml', value: widgetValue === 'Insert Time' ? date.getHours() + ':' + date.getMinutes() : date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() };
                    },
                    init: (widget: any): void => {
                        widget.jqxDropDownList({ placeHolder: 'Insert Custom HTML', width: 170, source: ['Insert Time', 'Insert Date'], autoDropDownHeight: true });
                    },
                    refresh: (widget: any, style: any): void => {
                        widget.jqxDropDownList('clearSelection');
                    },
                    tooltip: 'Insert Date/Time',
                    type: 'list'
                }
            case 'print':
                return {
                    action: (widget: any, editor: any): void => {
                        myEditor.current!.print();
                    },
                    init: (widget: any): void => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 24px;">Print</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                    },
                    tooltip: 'Print',
                    type: 'button'
                }
            case 'clear':
                return {
                    action: (widget: any, editor: any): void => {
                        myEditor.current!.val('');
                    },
                    init: (widget: any): void => {
                        widget.jqxButton({ height: 25, width: 40 });
                        widget.html('<span style="line-height: 24px;">Clear</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                    },
                    tooltip: 'Clear',
                    type: 'button'
                }
            case 'backcolor':
                return {
                    action: (widget: any, editor: any): void => {
                        const color = widget.val();
                        editor.css('background', color);
                    },
                    init: (widget: any): void => {
                        widget.jqxDropDownButton({ width: 170 });
                        widget.jqxDropDownButton('setContent', '<span style="line-height: 24px;">Choose Background</span>');
                    },
                    refresh: (widget: any, style: any): void => {
                    },
                    tooltip: 'Background',
                    type: 'colorPicker'
                }
        }
    }, []);

    return (
        <JqxEditor
            theme="material-purple"
            ref={myEditor}
            // @ts-ignore
            width="100%"
            height={400}
            tools="datetime | print | clear | backcolor | font | bold italic underline"
            createCommand={createCommand}
        />
    );
}

export default App;