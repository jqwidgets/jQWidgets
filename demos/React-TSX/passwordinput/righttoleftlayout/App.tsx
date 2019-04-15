import * as React from 'react';
 


import JqxPasswordInput, { IPasswordInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

class App extends React.PureComponent<{}, IPasswordInputProps> {

    constructor(props: {}) {
        super(props);    

        this.state = {
            localization: {
                fair: "הוגן",
                good: "טוב",
                passwordStrengthString: "חוזק סיסמא",
                strong: "חזק",
                tooShort: "קצר מדי",
                weak: "חלש"                 
            }
        }
    }

    public render() {
        return (
            <JqxPasswordInput theme={'material-purple'} width={200} height={25} placeHolder={'הזן את הסיסמה:'}
                localization={this.state.localization} showStrength={true} rtl={true} />
        );
    }
}

export default App;