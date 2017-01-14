import React from 'react';
import ReactDOM from 'react-dom';

import JqxScrollView from '../../../jqwidgets-react/react_jqxscrollview.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myStartButton.on('click', () => {
            this.refs.myScrollView.slideShow(true);
        });
        this.refs.myStopButton.on('click', () => {
            this.refs.myScrollView.slideShow(false);
        });
    }
    render () {
        let scrollViewHTML = `
          <div><div class="photo" style="background-image: url(../../../images/imageNature1.jpg)"></div></div>
          <div><div class="photo" style="background-image: url(../../../images/imageNature2.jpg)"></div></div>
          <div><div class="photo" style="background-image: url(../../../images/imageNature3.jpg)"></div></div>
          <div><div class="photo" style="background-image: url(../../../images/imageNature4.jpg)"></div></div>
          <div><div class="photo" style="background-image: url(../../../images/imageNature5.jpg)"></div></div>
        `;
        return (
            <div>
                <JqxScrollView ref='myScrollView' template={scrollViewHTML}
                    width={600} height={450} buttonsOffset={[0, 0]}
                />
                <div style={{ marginTop: 20 }}>
                    <JqxButton ref='myStartButton' value="Start Slideshow" style={{ display: 'inline-block' }}
                        width={150} height={25}
                    />
                    <JqxButton ref='myStopButton'  value="Stop Slideshow"
                        width={150} height={25}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
