import React from 'react';
import ReactDOM from 'react-dom';

import JqxLinkButton from '../../../jqwidgets-react/react_jqxlinkbutton.js';

class App extends React.Component
{
    componentDidMount()
    {
        
    }
    render()
    {  
        return (
            <JqxLinkButton style={{ marginLeft: 25 }}
                target={'_blank'} href={'http://www.jqwidgets.com'}       
                width={200} height={30}>
                Link Button
            </JqxLinkButton>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
