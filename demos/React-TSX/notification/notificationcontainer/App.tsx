import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

class App extends React.PureComponent<{}> {

    private myNotification = React.createRef<JqxNotification>();
    private quotes: string[] = [
        'I\'m gonna make him an offer he can\'t refuse.', 'Toto, I\'ve got a feeling we\'re not in Kansas anymore.',
        'You talkin\' to me?', 'Bond. James Bond.', 'I\'ll be back.', 'Round up the usual suspects.',
        'I\'m the king of the world!', 'A martini. Shaken, not stirred.',
        'May the Force be with you.',
        'Well, nobody\'s perfect.'
    ];

    constructor(props: {}) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNotification theme={'material-purple'} ref={this.myNotification}
                    width={'100%'} autoClose={false} appendContainer={'#container'} opacity={0.9} template={'info'}>
                    <div id="content"/>
                </JqxNotification>

                <JqxButton theme={'material-purple'} onClick={this.onClick} width={115}>Open notification</JqxButton>

                <div id="container" style={{ width: '300px', height: '400px', marginTop: '15px', backgroundColor: '#F2F2F2', border: '1px dashed #AAAAAA', overflow: 'auto' }} />
            </div>
        );
    }

    private onClick(): void {
        document.getElementById('content')!.innerHTML = this.quotes[Math.round(Math.random() * this.quotes.length - 1)];
        this.myNotification.current!.open();
    };
}

export default App;