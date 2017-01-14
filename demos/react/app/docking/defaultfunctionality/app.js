import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';
import JqxDocking from '../../../jqwidgets-react/react_jqxdocking.js';
import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class Tabs extends React.Component {
  render () {
    return (
      <JqxTabs width={375} height={181} selectedItem={1}>
        <ul style={{ marginLeft: 30 }}>
            <li>World</li>
            <li>Local</li>
            <li>Sports</li>
        </ul>
        <div>
            <div style={{ padding: 3, margin: 10, width: 150, height: 84, float: 'left' }}>
                <img src="../../../images/news_ie6.jpg" alt="IE6" title="IE6" />
            </div>
            <span style={{ fontSize: 11 }}>Microsoft is set to get a little more pushy ensuring
                you have an up-to-date browser and will automatically update Internet Explorer...
                <span style={{ fontSize: 8 }}>(BBC)</span>
            </span>
        </div>
        <div>
            <div style={{ padding: 3, margin: 10, width: 144, height: 81, float: 'left' }}>
                <img src="../../../images/local.jpg" alt="Tennis" title="Tennis" />
            </div>
            <span style={{ fontSize: 11 }}>The High Court has dismissed a challenge to laws that
                require immigrant spouses to be able to speak English in order to live in the UK...
                <span style={{ fontSize: 8 }}>(BBC)</span>
            </span>
        </div>
        <div>
            <div style={{ padding: 3, margin: 10, width: 130, height: 73, float: 'left' }}>
                <img src="../../../images/tennis.jpg" alt="Tennis" title="Tennis" />
            </div>
            <span style={{ fontSize: 11 }}>British number one Elena Baltacha says Judy Murray is
                a "fantastic" appointment as Great Britains new Fed Cup captain...
                <span style={{ fontSize: 8 }}>(BBC)</span>
            </span>
        </div>
      </JqxTabs>
    )
  }
}

class Panel extends React.Component {
  render () {
    return (
      <JqxPanel width={375} height={180}>
        <div style={{ paddingRight: 20 }}>
            <div style={{ padding: 3, width: 150, height: 110, float: 'left', margin: 10 }}>
                <img src="../../../images/leo.jpg" alt="Leo" title="Leo" />
            </div>
            <h3 style={{ textAlign: 'center', color: '#787878' }}>Leo</h3>
            <span style={{ fontSize: 11 }}>Individuals born under the zodiac sign of Leo are very
            good looking and have a healthy physique, with a broad forehead. Leo are very intelligent,
            extremely courageous, love their freedom and live by their own rules. Indulgence
            and extravagance is like second nature to them and they love to... </span>
        </div>
      </JqxPanel>
    )
  }
}

class App extends React.Component {
  componentDidMount() {
    this.refs.Docking.disableWindowResize('window1');
    this.refs.Docking.disableWindowResize('window2');
    this.refs.Docking.disableWindowResize('window3');
    this.refs.Docking.disableWindowResize('window4');
  }
  render() {
    let listBoxSource =
    [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];
    return (
      <JqxDocking ref='Docking'
        width={800} orientation={'horizontal'} mode={'docked'}
      >
        <div>
            <div id="window1" style={{ height: 220 }}>
                <div>Date and Time</div>
                <div style={{ overflow: 'hidden' }}>
                    <JqxCalendar width={180} height={180} style={{ float: 'left',  marginRight: 10 }}/>
                    <h3 style={{ textAlign: 'center', color: '#787878' }}>Sunny</h3>
                    <div style={{ float: 'left', marginLeft: 30, textAlign: 'center' }}>
                        <img src="../../../images/sun-icon.png" alt="Sunny" />
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: 5, marginTop: 10, marginRight: 20, fontSize: 10, float: 'right' }}>
                        Mo: 23 °C<br />
                        To 25 °C<br />
                        We: 27 °C
                    </div>
                </div>
            </div>
            <div id="window2" style={{ height: 220 }}>
                <div>News</div>
                <div style={{ overflow: 'hidden' }}>
                    <Tabs/>
                </div>
            </div>
        </div>
        <div>
            <div id="window3" style={{ height: 220 }}>
                <div>Zodiac</div>
                <div style={{ overflow: 'hidden' }}>
                    <Panel/>
                </div>
            </div>
            <div id="window4" style={{ height: 220 }}>
                <div>E-mail</div>
                <div style={{ overflow: 'hidden' }}>
                    <JqxListBox source={listBoxSource} width={375} height={181}/>
                </div>
            </div>
        </div>
      </JqxDocking>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
