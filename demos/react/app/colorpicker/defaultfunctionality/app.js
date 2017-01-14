import React from 'react';
import ReactDOM from 'react-dom';

import JqxScrollView from '../../../jqwidgets-react/react_jqxscrollview.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxColorPicker from '../../../jqwidgets-react/react_jqxcolorpicker.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.DropDownButton.setContent(this.getTextElementByColor(new $.jqx.color({ hex: "ffaabb" })));

    this.refs.ColorPicker.on('colorchange', (event) => {
        this.refs.DropDownButton.setContent(this.getTextElementByColor(event.args.color));
        document.getElementsByClassName('gallery')[0].style.borderColor = '#' + event.args.color.hex;
    });
  }
  getTextElementByColor(color)
  {
      if (color == 'transparent' || color.hex == "")
      {
          return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
      }
      let nThreshold = 105;
      let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
      let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
      let element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
      return element;
  }
  render () {
    let scrollViewHTML = `
      <div>
          <div class="photo" style="background-image: url(../../../images/imageNature1.jpg)"></div>
      </div>
      <div>
          <div class="photo" style="background-image: url(../../../images/imageNature2.jpg)"></div>
      </div>
      <div>
          <div class="photo" style="background-image: url(../../../images/imageNature3.jpg)"></div>
      </div>
      <div>
          <div class="photo" style="background-image: url(../../../images/imageNature4.jpg)"></div>
      </div>
      <div>
          <div class="photo" style="background-image: url(../../../images/imageNature5.jpg)"></div>
      </div>`;
    return (
      <div id='jqxWidget'>
        <JqxScrollView template={scrollViewHTML} className="gallery photo"
          width={500} height={350} slideShow={true} showButtons={false}
        />
        <br />
        <label style={{ marginLeft: 5, fontSize: 12, fontFamily: 'Verdana' }}>Select Frame Color:</label>
        <br />
        <JqxDropDownButton ref='DropDownButton' style={{ margin: 3, float: 'left' }} width={150} height={22}>
          <div style={{ padding: 3 }}>
              <JqxColorPicker ref='ColorPicker'
                width={220} height={220} color={"ffaabb"} colorMode={"hue"}
              />
          </div>
        </JqxDropDownButton>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
