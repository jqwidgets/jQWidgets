import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myPanel = useRef<JqxPanel>(null);

    const onOpen = useCallback((event: any) => {
        myPanel.current!.append('<strong>' + event.type + '</strong><br />');
    }, []);

    const onClose = useCallback((event: any) => {
        myPanel.current!.append('<strong>' + event.type + '</strong><br />');
    }, []);

    const onChange = useCallback((event: any) => {
        const args = event.args;
        const newValue = args.value;
        const oldValue = args.oldValue;
        const radix = args.radix;
        myPanel.current!.append(
            '<strong>' + event.type + '</strong><br />' +
            'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />'
        );
    }, []);

    const onRadixChange = useCallback((event: any) => {
        const args = event.args;
        const newRadix = args.radix;
        const oldRadix = args.oldRadix;
        const newValue = args.value;
        const oldValue = args.oldValue;
        myPanel.current!.append(
            '<strong>' + event.type + '</strong><br />' +
            'radix: ' + newRadix + ', old radix: ' + oldRadix +
            '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />'
        );
    }, []);

    return (
        <div>
            <JqxFormattedInput
                onOpen={onOpen}
                onClose={onClose}
                onChange={onChange}
                onRadixChange={onRadixChange}
                width={300}
                height={25}
                radix={'decimal'}
                value={190}
                spinButtons={true}
                dropDown={true}
            />
            <div style={{ marginTop: '150px' }}>
                Events log:
            </div>
            <JqxPanel theme={'material-purple'} ref={myPanel} width={300} height={150} />
        </div>
    );
};

export default App;