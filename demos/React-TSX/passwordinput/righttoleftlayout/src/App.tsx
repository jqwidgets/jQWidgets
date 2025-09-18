import * as React from 'react';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

function App() {
    const [localization] = React.useState({
        fair: "הוגן",
        good: "טוב",
        passwordStrengthString: "חוזק סיסמא",
        strong: "חזק",
        tooShort: "קצר מדי",
        weak: "חלש"
    });

    return (
        <JqxPasswordInput
            theme="material-purple"
            width={200}
            height={25}
            placeHolder="הזן את הסיסמה:"
            localization={localization}
            showStrength={true}
            rtl={true}
        />
    );
}

export default App;