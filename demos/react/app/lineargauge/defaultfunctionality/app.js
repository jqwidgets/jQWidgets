import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxLinearGauge from '../../../jqwidgets-react/react_jqxlineargauge.js';

class Expander extends React.Component {
  render () {
    return (
      <JqxExpander style={{ marginLeft: 330 }}
        width={280} height={310}
        toggleMode={'none'} showArrow={false}
      >
        <div className="demo-options-header">Options</div>
        <div>
            <JqxCheckBox ref='isVerticalCheckbox' checked={true} style={{ marginTop: 4, marginLeft: 10, marginTop: 10 }} value='Is vertical'/>
            <br />
            <div>
                <table style={{ float: 'left', marginLeft: 10 }}>
                  <tbody>
                    <tr>
                        <td>Labels position:</td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref='labelsNearRadio' groupName={'labels-position'} value='Near'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref="labelsFarRadio" groupName={'labels-position'}  value='Far'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref="labelsBothRadio" checked={true} groupName={'labels-position'} value='Both'/>
                        </td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ float: 'right', marginRight: 10 }}>
                  <tbody>
                    <tr>
                        <td>Ticks position:</td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref="ticksNearRadio" groupName={'ticks-position'} value='Near'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref="ticksFarRadio" groupName={'ticks-position'} value='Far'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxRadioButton ref="ticksBothRadio" checked={true} groupName={'ticks-position'} value='Both'/>
                        </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ clear: 'both' }}/>
            </div>
            <br />
            <JqxCheckBox checked={true} ref="showTicksCheckbox"      style={{ marginTop: 4, marginLeft: 10 }} value='Show ticks'/>
            <JqxCheckBox checked={true} ref="showLabelsCheckbox"     style={{ marginTop: 4, marginLeft: 10 }} value='Show labels'/>
            <JqxCheckBox checked={true} ref="showRangesCheckbox"     style={{ marginTop: 4, marginLeft: 10 }} value='Show ranges'/>
            <JqxCheckBox checked={true} ref="showBackgroundCheckbox" style={{ marginTop: 4, marginLeft: 10 }} value='Show background'/>
            <br />
            <JqxButton width={125} height={25} ref="showAnimationButton" style={{ marginLeft: 75, marginTop: 10, textAlign: 'center' }} value='Reset value'/>
        </div>
      </JqxExpander>
    )
  }
}

class App extends React.Component {
  componentDidMount(){
    let container = this.refs.container.refs;

    this.refs.myLinearGauge.value(50);

    container.isVerticalCheckbox.on('change', (e) => {
        if (e.args.checked) {
            this.refs.myLinearGauge.width('100px');
            this.refs.myLinearGauge.height('300px');
            this.refs.myLinearGauge.orientation('vertical');
        } else {
          this.refs.myLinearGauge.width('300px');
          this.refs.myLinearGauge.height('100px');
          this.refs.myLinearGauge.orientation('horizontal');
        }
    });

    container.showTicksCheckbox.on('change', (e) => {
        if (e.args.checked) {
          this.refs.myLinearGauge.ticksMajor({ visible: true, size: '10%', interval: 10  });
          this.refs.myLinearGauge.ticksMinor({ visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} });
        } else {
          this.refs.myLinearGauge.ticksMajor({ visible: false });
          this.refs.myLinearGauge.ticksMinor({ visible: false });
        }

    });

    container.showLabelsCheckbox.on('change', (e) => {
        if (e.args.checked) {
            this.refs.myLinearGauge.labels({ visible: true, interval: 20 });
        } else {
            this.refs.myLinearGauge.labels({ visible: false });
        }
    });

    container.showRangesCheckbox.on('change', (e) => {
        if (e.args.checked) {
            this.refs.myLinearGauge.showRanges(true);
        } else {
            this.refs.myLinearGauge.showRanges(false);
        }
    });

    container.showBackgroundCheckbox.on('change', (e) => {
        if (e.args.checked) {
            this.refs.myLinearGauge.background({ visible: true });
        } else {
            this.refs.myLinearGauge.background({ visible: false });
        }
    });

    container.labelsNearRadio.on('checked', () => {
        this.refs.myLinearGauge.labels({ interval: 20, position: 'near' });
    });

    container.labelsFarRadio.on('checked', () => {
        this.refs.myLinearGauge.labels({ interval: 20, position: 'far' });
    });

    container.labelsBothRadio.on('checked', () => {
        this.refs.myLinearGauge.labels({ interval: 20, position: 'both' });
    });

    container.ticksNearRadio.on('checked', () => {
        this.refs.myLinearGauge.ticksPosition('near');
    });

    container.ticksFarRadio.on('checked', () => {
        this.refs.myLinearGauge.ticksPosition('far');
    });

    container.ticksBothRadio.on('checked', () => {
        this.refs.myLinearGauge.ticksPosition('both');
    });

    container.showAnimationButton.on('click', () => {
        this.refs.myLinearGauge.animationDuration(0);
        this.refs.myLinearGauge.value(-60);
        this.refs.myLinearGauge.animationDuration(1000);
        this.refs.myLinearGauge.value(50);
    });
  }
  render () {
    let majorTicks = { size: '10%', interval: 10 };

    let minorTicks = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} };

    let ranges =
    [
      { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157'} },
      { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200'} },
      { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800'}}
    ];
    return (
      <div className="demo-gauge">
        <JqxLinearGauge ref='myLinearGauge' style={{ marginLeft: 20, float: 'left' }}
          max={60} value={-60} pointer={{ size: '6%' }}
          colorScheme={'scheme03'} orientation={'vertical'}
          labels={{ interval: 20 }} ticksMajor={majorTicks}
          ticksMinor={minorTicks} ranges={ranges}
        />
        <Expander ref='container'/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
