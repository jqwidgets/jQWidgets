import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.submit.on('click', () => {
            this.refs.name.val('');
            this.refs.email.val('');
            this.refs.comment.val('');
            this.refs.jqxNotification.open();
        });
    }
    render() {
        return (
            <div>
                <JqxNotification ref='jqxNotification'
                    width={'auto'}
                    position={'top-right'}
                    opacity={0.9}
                    template={null}
                    icon={{ width: 25, height: 25, url: '../../images/smiley.png', padding: 5 }}
                >
                    <div>Thank you for your feedback!</div>
                </JqxNotification>

                
                <table style={{ marginLeft: 15, marginTop: 15 }}>
                    <tr>
                        <td className='label'>
                            Name:
                        </td>
                        <td>
                            <JqxInput ref='name' width={150} />
                        </td>
                    </tr>
                    <tr>
                        <td className='label'>
                            E-mail:
                        </td>
                        <td>
                            <JqxInput ref='email' width={150} />
                        </td>
                    </tr>
                    <tr>
                        <td className='label' style={{ verticalAlign: 'top' }}>
                            Comment:
                        </td>
                        <td>
                            <JqxTextArea ref='comment'
                                width={155} height={150}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' style={{ textAlign: 'cente' }}>
                            <JqxButton ref='submit' value='Submit comment'  />
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
