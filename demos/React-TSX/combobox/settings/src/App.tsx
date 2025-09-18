import * as React from 'react';
import { useRef, useEffect, useState } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxComboBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

const dropDownListSource = [
    'Starts with',
    'Starts with(Case Sensitive)',
    'Ends with',
    'Ends with(Case Sensitive)',
    'Contains',
    'Contains(Case Sensitive)',
    'Equal',
    'Equal(Case Sensitive)'
];

const comboBoxSource = [
    'Affogato',
    'Americano',
    'Bicerin',
    'Breve',
    'Café Bombón',
    'Café au lait',
    'Caffé Corretto',
    'Café Crema',
    'Caffé Latte',
    'Caffé macchiato',
    'Café mélange',
    'Coffee milk',
    'Cafe mocha',
    'Cappuccino',
    'Carajillo',
    'Cortado',
    'Cuban espresso',
    'Espresso',
    'Eiskaffee',
    'The Flat White',
    'Frappuccino',
    'Galao',
    'Greek frappé coffee',
    'Iced Coffee﻿',
    'Indian filter coffee',
    'Instant coffee',
    'Irish coffee',
    'Liqueur coffee'
];

function App() {
    const myComboBox = useRef<any>(null);

    const [autoCompleteChecked, setAutoCompleteChecked] = useState(false);
    const [autoComplete, setAutoComplete] = useState(false);
    const [enabledChecked, setEnabledChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [searchTypeSelected, setSearchTypeSelected] = useState(0);

    const [searchMode, setSearchMode] = useState<'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith'>('startswith');
    
    useEffect(() => {
        if (myComboBox.current) {
            myComboBox.current.setOptions({ selectedIndex: 0 });
        }
    }, []);

    const btnOpenOnClick = () => {
        if (myComboBox.current) {
            myComboBox.current.open();
        }
    };

    const btnCloseOnClick = () => {
        if (myComboBox.current) {
            myComboBox.current.close();
        }
    };

    const checkBoxAutoCompleteOnChange = (event: any) => {
        const checked = event.args.checked;
        setAutoComplete(checked);
        setAutoCompleteChecked(checked);
    };

    const checkBoxEnabledOnChange = (event: any) => {
        const checked = event.args.checked;
        setDisabled(!checked);
        setEnabledChecked(checked);
    };

    const dropDownListOnSelect = (event: any) => {
        const index = event.args.index;
        let searchType: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith' = 'none';
        switch (index) {
            case 0:
                searchType = 'startswithignorecase';
                break;
            case 1:
                searchType = 'startswith';
                break;
            case 2:
                searchType = 'endswithignorecase';
                break;
            case 3:
                searchType = 'endswith';
                break;
            case 4:
                searchType = 'containsignorecase';
                break;
            case 5:
                searchType = 'contains';
                break;
            case 6:
                searchType = 'equalsignorecase';
                break;
            case 7:
                searchType = 'equals';
                break;
        }
        setSearchMode(searchType);
        setSearchTypeSelected(index);
    };

    return (
        <div>
            <JqxComboBox
                theme={'material-purple'}
                ref={myComboBox}
                style={{ float: 'left', marginTop: '10px' }}
                width={200}
                height={25}
                source={comboBoxSource}
                searchMode={searchMode}
                autoComplete={autoComplete}
                disabled={disabled}
            />
            <JqxExpander
                theme={'material-purple'}
                style={{ float: 'left', marginLeft: '100px', marginTop: '10px' }}
                width={220}
                showArrow={false}
                toggleMode={'none'}
            >
                <div>Settings</div>
                <div style={{ padding: '10px' }}>
                    <span>Search Type:</span>
                    <div style={{ marginTop: '10px' }} />
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={dropDownListOnSelect}
                        width={200}
                        height={30}
                        source={dropDownListSource}
                        selectedIndex={searchTypeSelected}
                    />
                    <div style={{ marginTop: '10px' }}>
                        <JqxButton
                            theme={'material-purple'}
                            style={{ float: 'left', marginRight: '0.5em' }}
                            onClick={btnOpenOnClick}
                            width={80}
                        >
                            Open
                        </JqxButton>
                        <JqxButton
                            theme={'material-purple'}
                            style={{ float: 'left' }}
                            onClick={btnCloseOnClick}
                            width={80}
                        >
                            Close
                        </JqxButton>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ clear: 'both', marginTop: '10px' }} />
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={checkBoxAutoCompleteOnChange}
                        width={130}
                        checked={autoCompleteChecked}
                    >
                        Auto Complete
                    </JqxCheckBox>
                    <div style={{ marginTop: '10px' }} />
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={checkBoxEnabledOnChange}
                        width={120}
                        checked={enabledChecked}
                    >
                        Enabled
                    </JqxCheckBox>
                </div>
            </JqxExpander>
        </div>
    );
}

export default App;