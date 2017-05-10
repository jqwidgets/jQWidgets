import React from 'react';
import ReactDOM from 'react-dom';

import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';

class App extends React.Component {
    render() {
        let localization = {
            showPasswordString: "צג סיסמא",
            hidePasswordString: "סתר סיסמא",
            passwordStrengthString: "חוזק סיסמא",
            tooShort: "קצר מדי",
            weak: "חלש", fair: "הוגן",
            good: "טוב", strong: "חזק"
        };
        return (
            <JqxPasswordInput ref='passwordInput'
                width={200} height={25}
                placeHolder={'הזן את הסיסמה:'}
                rtl={true}
                showStrength={true}
                localization={localization}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
