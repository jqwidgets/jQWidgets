import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
  componentDidMount() {
    let node = document.createElement('div');
    node.id = 'jqxNumberInput';
    ReactDOM.findDOMNode(this).appendChild(node);
    let myInput  = ReactDOM.render(
      <JqxNumberInput
        width={180} height={40} decimal={60}
        min={0} max={100} textAlign={'center'}
        decimalDigits={1} inputMode={'simple'}
      />,
      document.getElementById('jqxNumberInput')
    );

    myInput.on('mousedown', (event) => {
        event.stopPropagation();
    });
    myInput.on('keyup', () => {
        let val = myInput.val();
        this.refs.myKnob.val(val);
    });
    myInput.on('change', () => {
        let val = myInput.val();
        this.refs.myKnob.val(val);
    });
    this.refs.myKnob.on('change', (event) => {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        myInput.val(event.args.value);
    })
  }
  render () {
    let style = { stroke: '#dfe3e9', strokeWidth: 3, fill: { color: '#fefefe', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] } };

    let marks = {
        colorRemaining: { color: 'grey', border: 'grey' },
        colorProgress: { color: '#00a4e1', border: '#00a4e1' },
        type: 'line',
        offset: '71%',
        thickness: 3,
        size: '6%',
        majorSize: '9%',
        majorInterval: 10,
        minorInterval: 2
    }
    ;

    let labels = {
        offset: '88%',
        step: 10,
        visible: true
    };

    let progressBar = {
        style: { fill: '#00a4e1', stroke: 'grey' },
        size: '9%',
        offset: '60%',
        background: { fill: 'grey', stroke: 'grey' }
    };

    let pointer = { type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' }, size: '59%', offset: '49%', thickness: 20 };

    return (
      <JqxKnob ref='myKnob' style={{ width: 400, height: 400 }}
        min={0} max={100} value={60}
        startAngle={120} endAngle={420} rotation={'clockwise'}
        style={style} marks={marks} labels={labels}
        progressBar={progressBar} pointer={pointer}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
