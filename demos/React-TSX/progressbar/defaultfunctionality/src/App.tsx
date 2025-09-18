import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

const App = () => {
    const myHorizontalProgressBar = useRef<JqxProgressBar>(null);
    const myVerticalProgressBar = useRef<JqxProgressBar>(null);
    const myInput = useRef<JqxInput>(null);
    const valueInput = useRef<number>(0);
    const isUpdated = useRef<boolean>(false);

    const renderText = useCallback((text: string): string => {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    }, []);

    const getValueInput = useCallback((): number => {
        return parseInt(myInput.current!.getOptions('value'), 10);
    }, []);

    const onClick = useCallback(() => {
        const value = getValueInput();
        if (!isNaN(value)) {
            valueInput.current = value;
            myHorizontalProgressBar.current!.val(value);
            myVerticalProgressBar.current!.val(value);
            isUpdated.current = true;
        }
    }, [getValueInput]);

    const onCheckBox = useCallback((event: any) => {
        const value = getValueInput();
        if (value != null && isUpdated.current) {
            myHorizontalProgressBar.current!.val(valueInput.current);
            myVerticalProgressBar.current!.val(valueInput.current);
        }
        const isChecked = event.args.checked;
        myHorizontalProgressBar.current!.setOptions({ showText: isChecked });
        myVerticalProgressBar.current!.setOptions({ showText: isChecked });
    }, [getValueInput]);

    const onCustomTextCheckBox = useCallback((event: any) => {
        const value = getValueInput();
        if (value != null && isUpdated.current) {
            myHorizontalProgressBar.current!.val(valueInput.current);
            myVerticalProgressBar.current!.val(valueInput.current);
        }
        if (event.args.checked) {
            myHorizontalProgressBar.current!.setOptions({ renderText });
            myVerticalProgressBar.current!.setOptions({ renderText });
        } else {
            myHorizontalProgressBar.current!.setOptions({ renderText: (text: string) => text });
            myVerticalProgressBar.current!.setOptions({ renderText: (text: string) => text });
        }
    }, [getValueInput, renderText]);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <div style={{ marginTop: '10px' }}>Horizontal</div>
            <JqxProgressBar theme={'material-purple'} ref={myHorizontalProgressBar}
                width={250} height={30} value={50} />
            <div style={{ marginTop: '10px' }}>Vertical</div>
            <JqxProgressBar theme={'material-purple'} ref={myVerticalProgressBar}
                width={30} height={250} value={50} orientation={'vertical'} />
            <br />
            <div>Enter a value between 0 and 100</div>
            <JqxInput theme={'material-purple'} ref={myInput} />
            <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={onClick} width={50}>Update</JqxButton>
            <JqxCheckBox theme={'material-purple'} onChange={onCheckBox}>
                Show Progress Text
            </JqxCheckBox>
            <JqxCheckBox theme={'material-purple'} onChange={onCustomTextCheckBox}>
                Custom Progress Text
            </JqxCheckBox>
        </div>
    );
};

export default App;