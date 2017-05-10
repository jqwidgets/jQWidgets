import React from 'react';
import ReactDOM from 'react-dom';

import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';

class App extends React.Component {
  render() {
      // The passwordStrength enables you to override the built-in strength calculation.
      let passwordStrength = (password, characters, defaultStrength) => {
          let length = password.length;
          let letters = characters.letters;
          let numbers = characters.numbers;
          let specialKeys = characters.specialKeys;
          let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers * specialKeys;
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
      };

      // The strengthTypeRenderer enables you to override the built-in rendering of the Strength tooltip.
      let strengthTypeRenderer = (password, characters, defaultStrength) => {
          let length = password.length;
          let letters = characters.letters;
          let numbers = characters.numbers;
          let specialKeys = characters.specialKeys;
          let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers / 2 + length;
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

          return '<div style="font-style: italic; font-weight: bold; color: "' + color + ';">' + strengthValue + '</div>';
      };
    return (
        <JqxPasswordInput ref='passwordInput'
            width={200} height={25}
            placeHolder={'Enter password:'}
            showStrength={true} showStrengthPosition={'right'}
        />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
