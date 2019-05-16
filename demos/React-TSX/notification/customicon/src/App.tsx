import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

class App extends React.PureComponent<{}> {

    private myNotification = React.createRef<JqxNotification>();
    private name = React.createRef<JqxInput>();
    private email = React.createRef<JqxInput>();
    private comment = React.createRef<JqxTextArea>();

    constructor(props: {}) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNotification theme={'material-purple'} ref={this.myNotification}
                    width={'auto'} icon={{ width: 25, height: 25, url: 'https://www.jqwidgets.com/react/images/smiley.png', padding: 5 }}
                    template={null} opacity={0.9} position={'top-left'}>
                    <div>
                        Thank you for your feedback!
                    </div>
                </JqxNotification>
                <table style={{ marginLeft: '15px', marginTop: '15px' }}>
                    <tbody>
                        <tr>
                            <td className="label">
                                Name:
                        </td>
                            <td>
                                <JqxInput theme={'material-purple'} ref={this.name} width={150} />
                            </td>
                        </tr>
                        <tr>
                            <td className="label">
                                E-mail:
                        </td>
                            <td>
                                <JqxInput theme={'material-purple'} ref={this.email} width={150} />
                            </td>
                        </tr>
                        <tr>
                            <td className="label" style={{ verticalAlign: 'top' }}>
                                Comment:
                        </td>
                            <td>
                                <JqxTextArea theme={'material-purple'} ref={this.comment} width={155} height={150} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} />
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ paddingLeft: '50px' }}>
                                <JqxButton theme={'material-purple'} onClick={this.onClick} width={120}>Submit comment</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    private onClick(): void {
        this.name.current!.val('');
        this.email.current!.val('');
        this.comment.current!.val('');
        this.myNotification.current!.open();
    }
}

export default App;