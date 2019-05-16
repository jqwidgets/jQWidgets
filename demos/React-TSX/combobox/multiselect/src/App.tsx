import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComboBox, { IComboBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

class App extends React.PureComponent<{}, IComboBoxProps> {

    private myComboBox = React.createRef<JqxComboBox>();
    private log = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.comboBoxOnChange = this.comboBoxOnChange.bind(this);
        this.btnOnClick = this.btnOnClick.bind(this);

        this.state = {
            source: new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe')
        }
    }

    public componentDidMount() {
        this.myComboBox.current!.selectItem('United States');
        this.myComboBox.current!.selectItem('Germany');
    }

    public render() {
        return (
            <div>
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginBottom: '5px' }}>Select countries</div>

                <JqxComboBox theme={'material-purple'} ref={this.myComboBox} onChange={this.comboBoxOnChange}
                    width={350} source={this.state.source} multiSelect={true} />

                <div style={{ marginTop: '20px' }} />

                <JqxButton theme={'material-purple'} onClick={this.btnOnClick} width={160}>
                    Hide DropDown Button
                </JqxButton>

                <div ref={this.log} style={{ marginTop: '10px', fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private comboBoxOnChange(): void {
        const items = this.myComboBox.current!.getSelectedItems();
        let selectedItems = 'Selected Items: ';
        items.map(item => selectedItems += `${item.label}, `);

        this.log.current!.innerHTML = selectedItems;
    }

    private btnOnClick(): void {
        this.myComboBox.current!.setOptions({ showArrow: false });
    }
}

export default App;