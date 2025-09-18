import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownButton, { IDropDownButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myDropDownButton = useRef<JqxDropDownButton>(null);
    const myTree = useRef<JqxTree>(null);
    const [autoOpen, setAutoOpen] = useState<IDropDownButtonProps['autoOpen']>(false);

    useEffect(() => {
        myDropDownButton.current?.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
    }, []);

    const treeOnSelect = useCallback((event: any) => {
        const item = myTree.current!.getItem(event.args.element);
        const dropDownContent = `<div style="position: relative; margin-left: 3px; margin-top: 4px;">${item.label}</div>`;
        myDropDownButton.current!.setContent(dropDownContent);
    }, []);

    const checkBoxOnChange = useCallback((event: any) => {
        setAutoOpen(event.args.checked);
    }, []);

    return (
        <div>
            <JqxDropDownButton
                theme="material-purple"
                ref={myDropDownButton}
                style={{ float: 'left' }}
                width={150}
                height={25}
                autoOpen={autoOpen}
            >
                <JqxTree
                    theme="material-purple"
                    ref={myTree}
                    onSelect={treeOnSelect}
                    width={200}
                >
                    <ul>
                        <li item-selected="true">Home</li>
                        <li item-expanded="true">
                            Solutions
                            <ul>
                                <li>Education</li>
                                <li>Financial services</li>
                                <li>Government</li>
                                <li>Manufacturing</li>
                                <li>
                                    Solutions
                                    <ul>
                                        <li>eLearning</li>
                                        <li>Mobile</li>
                                        <li>RIA</li>
                                        <li>Training</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Products
                            <ul>
                                <li>PC products</li>
                                <li>Mobile products</li>
                                <li>All products</li>
                            </ul>
                        </li>
                    </ul>
                </JqxTree>
            </JqxDropDownButton>
            <div style={{ float: 'left', marginTop: '5px', marginLeft: '30px' }}>
                <JqxCheckBox theme="material-purple" onChange={checkBoxOnChange}>
                    Open On Mouse Over
                </JqxCheckBox>
            </div>
        </div>
    );
};

export default App;