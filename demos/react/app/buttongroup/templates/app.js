import React from 'react';
import ReactDOM from 'react-dom';

import JqxButtonGroup from '../../../jqwidgets-react/react_jqxbuttongroup.js';

class App extends React.Component {
    render() {
        let buttonStyle =
            {
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 16,
                paddingRight: 16
            }
        return (
            <div>
                <div>Default</div>
                <JqxButtonGroup mode={'checkbox'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
                <br />

                <div>Primary</div>
                <JqxButtonGroup mode={'checkbox'} template={'primary'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
                <br />

                <div>Success</div>
                <JqxButtonGroup mode={'checkbox'} template={'success'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
                <br />

                <div>Info</div>
                <JqxButtonGroup mode={'checkbox'} template={'info'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
                <br />

                <div>Warning</div>
                <JqxButtonGroup mode={'checkbox'} template={'warning'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
                <br />

                <div>Danger</div>
                <JqxButtonGroup mode={'checkbox'} template={'danger'}>
                    <button style={buttonStyle} value='Left' />
                    <button style={buttonStyle} value='Center' />
                    <button style={buttonStyle} value='Right' />
                </JqxButtonGroup>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
