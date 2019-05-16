import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxComboBox, { IComboBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

export interface IState extends IComboBoxProps {
    autoCompleteChecked: ICheckBoxProps['checked'];
    enabledChecked: ICheckBoxProps['checked'];
    dropDownListSource: IDropDownListProps['source'];   
    searchTypeSelected: IDropDownListProps['selectedIndex'];
}

class App extends React.PureComponent<{}, IState> {

    private myComboBox = React.createRef<JqxComboBox>();

    constructor(props: {}) {
        super(props);
        this.btnOpenOnClick = this.btnOpenOnClick.bind(this);
        this.btnCloseOnClick = this.btnCloseOnClick.bind(this);
        this.checkBoxAutoCompleteOnChange = this.checkBoxAutoCompleteOnChange.bind(this);
        this.checkBoxEnabledOnChange = this.checkBoxEnabledOnChange.bind(this);
        this.dropDownListOnSelect = this.dropDownListOnSelect.bind(this);

        this.state = {
            autoComplete: false,
            autoCompleteChecked: false,
            disabled: false,
            dropDownListSource: [
                'Starts with',
                'Starts with(Case Sensitive)',
                'Ends with',
                'Ends with(Case Sensitive)',
                'Contains',
                'Contains(Case Sensitive)',
                'Equal',
                'Equal(Case Sensitive)'
            ],
            enabledChecked: true,
            searchMode: 'startswith',
            searchTypeSelected: 0,
            source: [
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
            ]
        }
    }

    public componentDidMount() {
        this.myComboBox.current!.setOptions({ selectedIndex: 0 });
    }

    public render() {
        return (
            <div>
                <JqxComboBox theme={'material-purple'} ref={this.myComboBox} style={{ float: 'left', marginTop: '10px' }}
                    width={200} height={25} source={this.state.source} searchMode={this.state.searchMode}
                    autoComplete={this.state.autoComplete} disabled={this.state.disabled} />

                <JqxExpander theme={'material-purple'} style={{ float: 'left', marginLeft: '100px', marginTop: '10px' }}
                    width={220} showArrow={false} toggleMode={'none'}>
                    <div>Settings</div>
                    <div style={{ padding: '10px' }}>
                        <span>Search Type:</span>

                        <div style={{ marginTop: '10px' }} />
                        <JqxDropDownList theme={'material-purple'} onSelect={this.dropDownListOnSelect}
                            width={200} height={30} source={this.state.dropDownListSource} selectedIndex={0} />

                        <div style={{ marginTop: '10px' }}>
                            <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '0.5em' }}
                                onClick={this.btnOpenOnClick} width={80}>
                                Open
                            </JqxButton>

                            <JqxButton theme={'material-purple'} style={{ float: 'left' }}
                                onClick={this.btnCloseOnClick} width={80}>
                                Close
                            </JqxButton>
                        </div>

                        <div style={{ clear: 'both' }} />
                        <div style={{ clear: 'both', marginTop: '10px' }} />
                        <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxAutoCompleteOnChange}
                            width={130} checked={this.state.autoCompleteChecked}>
                            Auto Complete
                        </JqxCheckBox>

                        <div style={{ marginTop: '10px' }} />
                        <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxEnabledOnChange}
                            width={120} checked={this.state.enabledChecked}>
                            Enabled
                        </JqxCheckBox>
                    </div>
                </JqxExpander>
            </div>
        );
    }

    private btnOpenOnClick(): void {
        // show popup.
        this.myComboBox.current!.open();
    };

    private btnCloseOnClick(): void {
        // hide popup.
        this.myComboBox.current!.close();
    };

    private checkBoxAutoCompleteOnChange(event: any): void {
        // set autocomplete property.
        const checked = event.args.checked;
        this.setState({
            autoComplete: checked,
            autoCompleteChecked: checked
        });
    };

    private checkBoxEnabledOnChange(event: any): void {
        // enable or disable.
        const checked = event.args.checked;
        this.setState({
            disabled: !checked,
            enabledChecked: checked
        });
    };

    private dropDownListOnSelect(event: any): void {
        const index = event.args.index;
        // set search mode.
        let searchType: "none" | "contains" | "containsignorecase" | "equals" | "equalsignorecase" | "startswithignorecase" | "startswith" | "endswithignorecase" | "endswith" | undefined;
        switch (event.args.index) {
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
        this.setState({
            searchMode: searchType,
            searchTypeSelected: index
        });
    };
}

export default App;