import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

function App() {
    const span10 = useRef<HTMLSpanElement>(null);
    const span11 = useRef<HTMLSpanElement>(null);
    const span12 = useRef<HTMLSpanElement>(null);

    const checkBox10OnChange = useCallback((event: any) => {
        const checked = event.args.checked;
        if (span10.current) {
            span10.current.innerHTML = checked ? 'Checked' : 'Unchecked';
        }
    }, []);

    const checkBox11OnChange = useCallback((event: any) => {
        const checked = event.args.checked;
        if (span11.current) {
            span11.current.innerHTML = checked ? 'Checked' : 'Unchecked';
        }
    }, []);

    const checkBox12OnChange = useCallback((event: any) => {
        const checked = event.args.checked;
        if (span12.current) {
            if (checked) {
                span12.current.innerHTML = 'Checked';
            } else if (checked === false) {
                span12.current.innerHTML = 'Unchecked';
            } else {
                span12.current.innerHTML = 'Indeterminate';
            }
        }
    }, []);

    return (
        <div style={{ fontFamily: 'Verdana Arial', fontSize: '12px', width: '400px' }}>
            <div style={{ float: 'left', width: '400px' }}>
                <h3 style={{ marginLeft: '15px' }}>Categories</h3>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    Entertainment
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25} checked={true}>
                    <span>Computers</span>
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    <span>Sports</span>
                </JqxCheckBox>
            </div>
            <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    Health
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    <span>Finance</span>
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    <span>Travel</span>
                </JqxCheckBox>
            </div>
            <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    Music
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    <span>Technology</span>
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25}>
                    <span>Publishing</span>
                </JqxCheckBox>
            </div>
            <br />
            <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                <h3 style={{ marginLeft: '15px' }}>States</h3>
                <JqxCheckBox theme={'material-purple'} onChange={checkBox10OnChange} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25} checked={true}>
                    <span ref={span10}>Checked</span>
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} onChange={checkBox11OnChange} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25} checked={false}>
                    <span ref={span11}>Unchecked</span>
                </JqxCheckBox>
            </div>
            <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                <JqxCheckBox theme={'material-purple'} onChange={checkBox12OnChange} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25} hasThreeStates={true} checked={null}>
                    <span ref={span12}>Indeterminate</span>
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                    width={120} height={25} disabled={true}>
                    <span>Disabled</span>
                </JqxCheckBox>
            </div>
        </div>
    );
}

export default App;