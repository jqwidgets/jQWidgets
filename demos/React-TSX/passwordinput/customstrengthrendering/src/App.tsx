import * as React from 'react';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

const App = () => {
    const passwordStrength = React.useCallback((password: string, characters: any, defaultStrength: string): string => {
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
        }
        return strengthValue;
    }, []);

    const strengthTypeRenderer = React.useCallback((password: string, characters: any, defaultStrength: string): string => {
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
        }
        return `<div style="font-style: italic; font-weight: bold; color: ${color};">${strengthValue}</div>`;
    }, []);

    return (
        <JqxPasswordInput
            theme="material-purple"
            width={200}
            height={25}
            placeHolder="Enter password"
            showStrength={true}
            showStrengthPosition="right"
            passwordStrength={passwordStrength}
            strengthTypeRenderer={strengthTypeRenderer}
        />
    );
};

export default App;