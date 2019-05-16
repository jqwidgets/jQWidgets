import * as React from 'react';
 


import JqxInput, { IInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

class App extends React.PureComponent<{}, IInputProps> {

    private myInput = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);

        const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

        this.state = {
            renderer: (itemValue: any, inputValue: any): any => {
                const terms = inputValue.split(/,\s*/);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(itemValue);
                // add placeholder to get the comma-and-space at the end
                terms.push('');
                const value = terms.join(', ');
                return value;
            },
            source: (query: any, response: any): any => {
                const item = query.split(/,\s*/).pop();
                // update the search query.
                this.myInput.current!.setOptions({ query: item });
                response(countries);
            }
        }
    }

    public render() {
        return (
            <JqxInput theme={'material-purple'} ref={this.myInput}
                width={250} height={25} source={this.state.source}
                minLength={1} placeHolder={'Enter a Country:'} renderer={this.state.renderer} />
        );
    }
}

export default App;