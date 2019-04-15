import * as React from 'react';
 


import JqxPasswordInput, { IPasswordInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

class App extends React.PureComponent<{}, IPasswordInputProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            passwordStrength: (password: string, characters: any, defaultStrength: string): string => {
                const length = password.length;
                const letters = characters.letters;
                const numbers = characters.numbers;
                const specialKeys = characters.specialKeys;
                const strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers * specialKeys;
                let strengthValue;
                if (length < 4) {
                    strengthValue = 'Too short';
                } else if (strengthCoefficient < 10) {
                    strengthValue = 'Weak';
                } else if (strengthCoefficient < 20) {
                    strengthValue = 'Fair';
                } else if (strengthCoefficient < 30) {
                    strengthValue = 'Good';
                } else {
                    strengthValue = 'Strong';
                };

                return strengthValue;
            },
            strengthTypeRenderer: (password: string, characters: any, defaultStrength: string): string => {
                const length = password.length;
                const letters = characters.letters;
                const numbers = characters.numbers;
                const specialKeys = characters.specialKeys;
                const strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers / 2 + length;
                let strengthValue;
                let color;
                if (length < 8) {
                    strengthValue = 'Too short';
                    color = 'rgb(170, 0, 51)';
                } else if (strengthCoefficient < 20) {
                    strengthValue = 'Weak';
                    color = 'rgb(170, 0, 51)';
                } else if (strengthCoefficient < 30) {
                    strengthValue = 'Fair';
                    color = 'rgb(255, 204, 51)';
                } else if (strengthCoefficient < 40) {
                    strengthValue = 'Good';
                    color = 'rgb(45, 152, 243)';
                } else {
                    strengthValue = 'Strong';
                    color = 'rgb(118, 194, 97)';
                };

                return `<div style="font-style: italic; font-weight: bold; color: ${color};">${strengthValue}</div>`;
            }
        }
    }

    public render() {
        return (
            <JqxPasswordInput theme={'material-purple'}
                width={200} height={25} placeHolder={'Enter password'}
                showStrength={true} showStrengthPosition={'right'}
                passwordStrength={this.state.passwordStrength}
                strengthTypeRenderer={this.state.strengthTypeRenderer} />
        );
    }
}

export default App;